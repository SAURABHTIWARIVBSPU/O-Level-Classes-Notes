'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { List, ChevronDown } from 'lucide-react';

/**
 * Contextual navigation for long notes.
 *
 * Desktop  — a sticky rail beside the text, current section highlighted.
 * Mobile   — a single collapsed row that costs one line of screen until tapped.
 *
 * Headings can be passed in (`items`) or discovered from the rendered article
 * (`rootSelector`), which is what markdown-rendered unit notes need.
 */

function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(null);
  const ticking = useRef(false);

  useEffect(() => {
    if (!ids.length) return undefined;

    const compute = () => {
      ticking.current = false;
      const offset = 140; // header + comfortable lead-in
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) current = id;
        else break;
      }

      // At the very bottom the last heading is what the reader is looking at.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 40) {
        current = ids[ids.length - 1];
      }

      setActiveId(current);
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids]);

  return activeId;
}

export default function TableOfContents({
  items: providedItems,
  rootSelector = '[data-toc-root]',
  title = 'On this page',
  className = '',
  maxDepth = 3,
  refreshKey,
  variant = 'auto', // 'auto' | 'mobile' | 'rail'
}) {
  const [discovered, setDiscovered] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (providedItems) return undefined;

    const collect = () => {
      const root = document.querySelector(rootSelector);
      if (!root) return;
      const selector = Array.from({ length: maxDepth - 1 }, (_, i) => `h${i + 2}`).join(',');
      const found = Array.from(root.querySelectorAll(selector))
        .filter((el) => el.id && el.textContent.trim())
        .map((el) => ({
          id: el.id,
          text: el.textContent.trim(),
          depth: Number(el.tagName.slice(1)),
        }));
      setDiscovered(found);
    };

    collect();
    // Content can arrive a tick later (markdown parse, language switch).
    const t = setTimeout(collect, 120);
    return () => clearTimeout(t);
    // refreshKey lets a caller re-scan after the article changes (e.g. the
    // reader switches language and re-renders every heading).
  }, [providedItems, rootSelector, maxDepth, refreshKey]);

  const items = providedItems || discovered;
  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const activeId = useScrollSpy(ids);

  if (items.length < 2) return null;

  const list = (
    <ul className="space-y-px">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="toc-link"
            data-depth={item.depth}
            data-active={activeId === item.id}
            onClick={() => setOpen(false)}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );

  const mobile = (
    <div className={`${variant === 'auto' ? 'lg:hidden ' : ''}panel overflow-hidden ${className}`}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 text-left"
          aria-expanded={open}
          aria-controls="toc-mobile-list"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-ink">
            <List className="w-4 h-4 text-ink-3" aria-hidden="true" />
            {title}
            <span className="text-xs text-ink-4 font-normal">({items.length})</span>
          </span>
          <ChevronDown
            className={`w-4 h-4 text-ink-3 transition-transform duration-fast ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      {open ? (
        <div id="toc-mobile-list" className="px-3.5 pb-3 pt-1 border-t border-line max-h-[50vh] overflow-y-auto">
          {list}
        </div>
      ) : null}
    </div>
  );

  const rail = (
    <nav
      aria-label="Table of contents"
      className={`${variant === 'auto' ? 'hidden lg:block ' : ''}sticky top-[calc(var(--header-h)+1.5rem)] max-h-[calc(100vh-var(--header-h)-4rem)] overflow-y-auto no-scrollbar ${className}`}
    >
      <p className="eyebrow mb-2.5">{title}</p>
      {list}
    </nav>
  );

  if (variant === 'mobile') return mobile;
  if (variant === 'rail') return rail;
  return <>{mobile}{rail}</>;
}
