'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, Check, GraduationCap } from 'lucide-react';
import { COURSES, isActivePath } from '@/lib/navigation';

/**
 * A real drawer, not a collapsed desktop menu.
 *
 * Slides from the left, traps focus, closes on Escape and on backdrop tap,
 * restores focus to the trigger, and gives every row a 44px touch target.
 * Units/chapters are inside an accordion so the whole syllabus is reachable
 * without a second screen.
 */
export default function MobileNav({ open, onClose, course, nav, modules, pathname }) {
  const panelRef = useRef(null);
  const previouslyFocused = useRef(null);
  const [openSection, setOpenSection] = useState('modules');

  useEffect(() => {
    if (!open) return undefined;

    previouslyFocused.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusables = () =>
      panelRef.current?.querySelectorAll('a[href], button:not([disabled])') || [];

    setTimeout(() => focusables()[0]?.focus(), 60);

    const onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); return; }
      if (e.key !== 'Tab') return;
      const nodes = Array.from(focusables());
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  const Section = ({ id, title, children, count }) => {
    const isOpen = openSection === id;
    return (
      <div className="border-b border-line">
        <button
          type="button"
          onClick={() => setOpenSection(isOpen ? null : id)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between gap-2 px-4 py-3 min-h-[44px] text-left"
        >
          <span className="text-sm font-semibold text-ink">
            {title}
            {count ? <span className="ml-1.5 text-xs font-normal text-ink-4">{count}</span> : null}
          </span>
          <ChevronDown className={`w-4 h-4 text-ink-3 transition-transform duration-fast ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
        {isOpen ? <div className="pb-2">{children}</div> : null}
      </div>
    );
  };

  return (
    <div className="lg:hidden fixed inset-0 z-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div className="absolute inset-0 bg-ink/30 dark:bg-black/60 animate-fade-in" onClick={onClose} aria-hidden="true" />

      <div
        ref={panelRef}
        className="absolute inset-y-0 left-0 w-[min(20rem,88vw)] bg-surface border-r border-line shadow-e3 flex flex-col animate-slide-in-left"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-2 h-[var(--header-h)] px-4 border-b border-line shrink-0">
          <span className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-accent grid place-items-center">
              <GraduationCap className="w-5 h-5 text-white" aria-hidden="true" />
            </span>
            <span className="text-base font-bold text-ink">NIELIT<span className="text-accent">Learn</span></span>
          </span>
          <button type="button" onClick={onClose} className="btn btn-ghost btn-sm btn-icon" aria-label="Close menu">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="p-3 border-b border-line">
            <Link
              href={course.key === 'ccc' ? '/ccc/chapters/chapter-1' : '/units/unit-1'}
              className="btn btn-primary w-full rounded-xl"
            >
              Start learning
            </Link>
          </div>
          {/* Course choice */}
          <div className="p-3 border-b border-line">
            <p className="eyebrow px-1 mb-2">Course</p>
            <div className="space-y-1">
              {Object.values(COURSES).map((c) => {
                const active = c.key === course.key;
                return (
                  <Link
                    key={c.key}
                    href={c.home}
                    className={`flex items-center gap-2.5 px-3 py-2.5 min-h-[44px] rounded-lg border transition-colors ${
                      active ? 'border-accent-line bg-accent-soft' : 'border-line hover:bg-sunken'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: `rgb(var(${c.accentVar}))` }} aria-hidden="true" />
                    <span className="min-w-0 flex-1">
                      <span className={`block text-base font-semibold ${active ? 'text-accent' : 'text-ink'}`}>{c.name}</span>
                      <span className="block text-xs text-ink-3 truncate">{c.subject}</span>
                    </span>
                    {active ? <Check className="w-4 h-4 text-accent shrink-0" aria-hidden="true" /> : null}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Units / chapters */}
          <Section id="modules" title={course.unitWordPlural} count={modules.length}>
            <ul className="px-2">
              {modules.map((m) => {
                const active = isActivePath(pathname, m.href);
                return (
                  <li key={m.key}>
                    <Link
                      href={m.href}
                      className={`flex items-start gap-2.5 px-2 py-2.5 min-h-[44px] rounded-lg transition-colors ${
                        active ? 'bg-accent-soft' : 'hover:bg-sunken'
                      }`}
                    >
                      <span className={`mt-px font-mono text-xs shrink-0 w-6 ${active ? 'text-accent' : 'text-ink-4'}`}>
                        {m.number}
                      </span>
                      <span className="min-w-0">
                        <span className={`block text-base leading-snug ${active ? 'text-accent font-medium' : 'text-ink'}`}>
                          {m.title}
                        </span>
                        <span className="block text-xs text-ink-4">{m.topics.length} topics</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Section>

          {/* Tool groups */}
          {nav.map((group) => (
            <Section key={group.label} id={group.label} title={group.label}>
              <ul className="px-2">
                {group.items.map((item) => {
                  const active = isActivePath(pathname, item.href, item.match);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-2 py-2.5 min-h-[44px] rounded-lg transition-colors ${
                          active ? 'bg-accent-soft' : 'hover:bg-sunken'
                        }`}
                      >
                        <span className={`block text-base ${active ? 'text-accent font-medium' : 'text-ink'}`}>{item.label}</span>
                        {item.desc ? <span className="block text-xs text-ink-4 mt-0.5">{item.desc}</span> : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
}
