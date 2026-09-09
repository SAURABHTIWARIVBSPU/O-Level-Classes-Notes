'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, PanelLeft, X } from 'lucide-react';
import { getModules } from '@/lib/navigation';
import { useProgress } from '@/lib/progressContext';

/**
 * The syllabus tree: Course → Unit/Chapter → Topic, with the current position
 * expanded and marked. Present on every learning page so a student always knows
 * where this page sits and what comes next.
 *
 * Desktop: a sticky rail.
 * Mobile:  a bottom-anchored button that opens the same tree as a sheet, rather
 *          than a desktop sidebar squeezed into 320px.
 */

function Tree({ courseKey, activeModule, activeTopic, completed, onNavigate }) {
  const modules = useMemo(() => getModules(courseKey), [courseKey]);
  const [expanded, setExpanded] = useState(() => new Set([activeModule].filter(Boolean)));
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeModule) setExpanded((prev) => new Set(prev).add(activeModule));
  }, [activeModule]);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest' });
  }, [activeTopic]);

  const toggle = (key) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <ul className="space-y-px">
      {modules.map((m) => {
        const isOpen = expanded.has(m.key);
        const isCurrent = m.key === activeModule;
        const done = m.topics.filter((t) => completed.includes(t.slug)).length;

        return (
          <li key={m.key}>
            <div className="flex items-stretch">
              <button
                type="button"
                onClick={() => toggle(m.key)}
                aria-expanded={isOpen}
                aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${m.title}`}
                className="shrink-0 w-6 grid place-items-center rounded-md hover:bg-sunken transition-colors"
              >
                <ChevronRight
                  className={`w-3.5 h-3.5 text-ink-4 transition-transform duration-fast ${isOpen ? 'rotate-90' : ''}`}
                  aria-hidden="true"
                />
              </button>
              <Link
                href={m.href}
                onClick={onNavigate}
                className={`flex-1 min-w-0 flex items-baseline gap-2 px-2 py-1.5 rounded-md transition-colors ${
                  isCurrent ? 'bg-accent-soft' : 'hover:bg-sunken'
                }`}
              >
                <span className={`font-mono text-2xs shrink-0 ${isCurrent ? 'text-accent' : 'text-ink-4'}`}>
                  {m.number}
                </span>
                <span className={`text-sm leading-snug truncate ${isCurrent ? 'text-accent font-semibold' : 'text-ink-2'}`}>
                  {m.title}
                </span>
                {done > 0 ? (
                  <span className="ml-auto shrink-0 text-2xs font-mono text-ink-4 tabular-nums">
                    {done}/{m.topics.length}
                  </span>
                ) : null}
              </Link>
            </div>

            {isOpen ? (
              <ul className="ml-[0.6875rem] pl-3 border-l border-line py-0.5">
                {m.topics.map((t) => {
                  const isActive = t.slug === activeTopic;
                  const isDone = completed.includes(t.slug);
                  return (
                    <li key={t.slug} ref={isActive ? activeRef : null}>
                      <Link
                        href={t.href}
                        onClick={onNavigate}
                        aria-current={isActive ? 'page' : undefined}
                        className={`group flex items-start gap-1.5 px-2 py-1.5 rounded-md transition-colors ${
                          isActive ? 'bg-accent-soft text-accent font-medium' : 'text-ink-3 hover:text-ink hover:bg-sunken'
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-3.5 h-3.5 mt-px shrink-0 text-ok" aria-label="Completed" />
                        ) : (
                          <span className="w-3.5 h-3.5 mt-px shrink-0 grid place-items-center" aria-hidden="true">
                            <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-accent' : 'bg-line-strong'}`} />
                          </span>
                        )}
                        <span className="text-sm leading-snug">{t.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export default function CourseSidebar({ courseKey, activeModule, activeTopic, title, className = '' }) {
  const { completedTopics } = useProgress();
  const completed = Array.isArray(completedTopics) ? completedTopics : [];
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    if (!sheetOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') setSheetOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [sheetOpen]);

  return (
    <>
      {/* Desktop rail */}
      <nav
        aria-label={title || 'Course contents'}
        className={`hidden xl:block sticky top-[calc(var(--header-h)+1.5rem)] max-h-[calc(100vh-var(--header-h)-4rem)] overflow-y-auto no-scrollbar pr-2 ${className}`}
      >
        <p className="eyebrow mb-2.5">{title || 'Course contents'}</p>
        <Tree
          courseKey={courseKey}
          activeModule={activeModule}
          activeTopic={activeTopic}
          completed={completed}
        />
      </nav>

      {/* Mobile / tablet trigger */}
      <button
        type="button"
        onClick={() => setSheetOpen(true)}
        className="xl:hidden fixed bottom-4 left-4 z-header btn btn-secondary shadow-e3 no-print"
        aria-label="Open course contents"
      >
        <PanelLeft className="w-4 h-4" aria-hidden="true" />
        Contents
      </button>

      {sheetOpen ? (
        <div className="xl:hidden fixed inset-0 z-drawer" role="dialog" aria-modal="true" aria-label="Course contents">
          <div className="absolute inset-0 bg-ink/30 dark:bg-black/60 animate-fade-in" onClick={() => setSheetOpen(false)} aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 max-h-[78vh] rounded-t-2xl border-t border-line bg-surface shadow-e3 flex flex-col animate-slide-up-sheet">
            <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-line shrink-0">
              <p className="text-sm font-semibold text-ink">{title || 'Course contents'}</p>
              <button type="button" onClick={() => setSheetOpen(false)} className="btn btn-ghost btn-sm btn-icon" aria-label="Close">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto overscroll-contain p-3">
              <Tree
                courseKey={courseKey}
                activeModule={activeModule}
                activeTopic={activeTopic}
                completed={completed}
                onNavigate={() => setSheetOpen(false)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
