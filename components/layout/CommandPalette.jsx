'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search, CornerDownLeft, ArrowUp, ArrowDown, X, BookOpen, Layers,
  Zap, Columns3, FileText, Loader2,
} from 'lucide-react';
import { COURSES, getModules, getCourseTopics, OLEVEL_NAV, CCC_NAV } from '@/lib/navigation';

/**
 * Instant search across both courses.
 *
 * Performance note: only the syllabus indexes (topic + module titles, ~60KB,
 * already loaded by the navbar) are bundled eagerly. One-liners, differences
 * and cheat sheets are ~75KB of revision text and are imported dynamically the
 * first time the palette opens, so they never touch first paint.
 */

const RECENTS_KEY = 'olevel_recent_searches';
const MAX_RESULTS = 24;

const GROUP_META = {
  topic: { label: 'Topics', icon: BookOpen },
  module: { label: 'Units & chapters', icon: Layers },
  page: { label: 'Pages', icon: FileText },
  oneliner: { label: 'One-liners', icon: Zap },
  difference: { label: 'Comparisons', icon: Columns3 },
};

/* --------------------------------------------------------------- indexing */

function buildCoreIndex() {
  const entries = [];

  for (const courseKey of ['olevel', 'ccc']) {
    const course = COURSES[courseKey];

    for (const mod of getModules(courseKey)) {
      entries.push({
        id: `m-${courseKey}-${mod.key}`,
        kind: 'module',
        title: `${course.unitWord} ${mod.number} — ${mod.title}`,
        subtitle: mod.hindiTitle,
        context: course.name,
        href: mod.href,
        haystack: `${mod.number} ${mod.title} ${mod.hindiTitle || ''} ${mod.description || ''}`.toLowerCase(),
      });
    }

    for (const topic of getCourseTopics(courseKey)) {
      entries.push({
        id: `t-${courseKey}-${topic.slug}`,
        kind: 'topic',
        title: topic.title,
        subtitle: topic.hindiTitle,
        context: `${course.name} · ${course.unitWord} ${topic.moduleNumber}`,
        href: topic.href,
        haystack: `${topic.title} ${topic.hindiTitle || ''} ${topic.moduleTitle}`.toLowerCase(),
      });
    }

    const nav = courseKey === 'ccc' ? CCC_NAV : OLEVEL_NAV;
    for (const group of nav) {
      for (const item of group.items) {
        entries.push({
          id: `p-${courseKey}-${item.href}`,
          kind: 'page',
          title: item.label,
          subtitle: item.desc,
          context: `${course.name} · ${group.label}`,
          href: item.href,
          haystack: `${item.label} ${item.desc || ''} ${group.label}`.toLowerCase(),
        });
      }
    }
  }

  return entries;
}

async function buildRevisionIndex() {
  const entries = [];
  const [oneLiners, cccOneLiners, differences, cccDifferences] = await Promise.all([
    import('@/data/oneLinersData').then((m) => m.oneLinersData || []).catch(() => []),
    import('@/data/cccOneLinersData').then((m) => m.cccOneLinersData || []).catch(() => []),
    import('@/data/differencesData').then((m) => m.differencesData || []).catch(() => []),
    import('@/data/cccDifferencesData').then((m) => m.cccDifferencesData || []).catch(() => []),
  ]);

  oneLiners.forEach((o, i) => entries.push({
    id: `ol-${i}`, kind: 'oneliner', title: o.text,
    context: `O Level · Unit ${o.unit}`, href: `/one-liners#ol-${o.id ?? i}`,
    haystack: `${o.text} ${o.tag || ''}`.toLowerCase(),
  }));

  cccOneLiners.forEach((o, i) => {
    // The CCC dataset names these fields differently from the O Level one.
    const text = o.fact || o.englishFact || o.text || o.point || '';
    if (!text) return;
    entries.push({
      id: `col-${i}`, kind: 'oneliner', title: text,
      subtitle: o.fact && o.englishFact ? o.englishFact : undefined,
      context: 'CCC', href: `/ccc/one-liners#ol-${o.id ?? i}`,
      haystack: `${o.fact || ''} ${o.englishFact || ''} ${o.category || ''} ${o.tag || ''}`.toLowerCase(),
    });
  });

  differences.forEach((d) => entries.push({
    id: `d-${d.id}`, kind: 'difference', title: d.title, subtitle: d.hindiTitle,
    context: `O Level · Unit ${d.unit}`, href: `/differences#${d.id}`,
    haystack: `${d.title} ${d.hindiTitle || ''}`.toLowerCase(),
  }));

  cccDifferences.forEach((d) => entries.push({
    id: `cd-${d.id}`, kind: 'difference', title: d.englishTitle || d.title, subtitle: d.title,
    context: 'CCC', href: `/ccc/differences#${d.id}`,
    haystack: `${d.title} ${d.englishTitle || ''}`.toLowerCase(),
  }));

  return entries;
}

/* ---------------------------------------------------------------- scoring */

function score(entry, terms) {
  let total = 0;
  const title = entry.title.toLowerCase();
  for (const term of terms) {
    if (!entry.haystack.includes(term)) return -1;   // every term must appear
    if (title.startsWith(term)) total += 60;
    else if (title.includes(` ${term}`)) total += 40;
    else if (title.includes(term)) total += 25;
    else total += 8;
  }
  if (entry.kind === 'topic') total += 12;
  if (entry.kind === 'module') total += 8;
  if (entry.kind === 'page') total += 6;
  total -= Math.min(10, Math.floor(entry.title.length / 30));
  return total;
}

/* -------------------------------------------------------------- component */

export default function CommandPalette({ open, onClose }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const [revision, setRevision] = useState(null);
  const [loadingRevision, setLoadingRevision] = useState(false);
  const [recents, setRecents] = useState([]);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const core = useMemo(buildCoreIndex, []);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setCursor(0);
    try {
      setRecents(JSON.parse(localStorage.getItem(RECENTS_KEY) || '[]').slice(0, 5));
    } catch { setRecents([]); }
    const t = setTimeout(() => inputRef.current?.focus(), 30);

    if (!revision && !loadingRevision) {
      setLoadingRevision(true);
      buildRevisionIndex()
        .then(setRevision)
        .catch(() => setRevision([]))
        .finally(() => setLoadingRevision(false));
    }
    return () => clearTimeout(t);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  // Lock the page behind the dialog
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const results = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    const pool = revision ? core.concat(revision) : core;
    return pool
      .map((e) => ({ e, s: score(e, terms) }))
      .filter((r) => r.s >= 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, MAX_RESULTS)
      .map((r) => r.e);
  }, [query, core, revision]);

  const grouped = useMemo(() => {
    const map = new Map();
    for (const r of results) {
      if (!map.has(r.kind)) map.set(r.kind, []);
      map.get(r.kind).push(r);
    }
    return Array.from(map.entries());
  }, [results]);

  const flat = useMemo(() => grouped.flatMap(([, items]) => items), [grouped]);

  const go = useCallback((entry) => {
    if (!entry) return;
    try {
      const next = [
        { title: entry.title, href: entry.href, context: entry.context },
        ...recents.filter((r) => r.href !== entry.href),
      ].slice(0, 5);
      localStorage.setItem(RECENTS_KEY, JSON.stringify(next));
    } catch { /* storage blocked — recents just won't persist */ }
    onClose();
    router.push(entry.href);
  }, [recents, onClose, router]);

  const onKeyDown = (e) => {
    if (e.key === 'Escape') { e.preventDefault(); onClose(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); setCursor((c) => Math.min(c + 1, flat.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setCursor((c) => Math.max(c - 1, 0)); }
    if (e.key === 'Enter') { e.preventDefault(); go(flat[cursor]); }
  };

  useEffect(() => { setCursor(0); }, [query]);

  useEffect(() => {
    listRef.current?.querySelector('[data-cursor="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [cursor]);

  if (!open) return null;

  const showEmpty = query.trim().length > 0 && flat.length === 0;

  return (
    <div className="fixed inset-0 z-dialog" role="dialog" aria-modal="true" aria-label="Search the platform">
      <div
        className="absolute inset-0 bg-ink/25 dark:bg-black/60 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative mx-auto mt-[8vh] w-[calc(100%-2rem)] max-w-xl animate-fade-up">
        <div className="rounded-xl border border-line bg-overlay shadow-e3 overflow-hidden">
          {/* Query */}
          <div className="flex items-center gap-2.5 px-3.5 border-b border-line">
            <Search className="w-4 h-4 text-ink-3 shrink-0" aria-hidden="true" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Search topics, units, one-liners, comparisons…"
              className="flex-1 h-12 bg-transparent text-base text-ink placeholder:text-ink-4 outline-none"
              aria-label="Search query"
              autoComplete="off"
              spellCheck="false"
            />
            {loadingRevision ? <Loader2 className="w-4 h-4 text-ink-4 animate-spin" aria-hidden="true" /> : null}
            <button type="button" onClick={onClose} className="btn btn-ghost btn-sm btn-icon" aria-label="Close search">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results */}
          <div ref={listRef} className="max-h-[min(26rem,60vh)] overflow-y-auto py-1.5">
            {!query.trim() ? (
              <div className="px-3.5 py-3">
                {recents.length ? (
                  <>
                    <p className="eyebrow mb-2">Recent</p>
                    <ul className="space-y-0.5">
                      {recents.map((r) => (
                        <li key={r.href}>
                          <button
                            type="button"
                            onClick={() => go(r)}
                            className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-sunken transition-colors"
                          >
                            <span className="block text-base text-ink truncate">{r.title}</span>
                            {r.context ? <span className="block text-xs text-ink-4">{r.context}</span> : null}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="text-base text-ink-3 py-6 text-center">
                    Try <span className="font-mono text-sm text-ink-2">box model</span>,{' '}
                    <span className="font-mono text-sm text-ink-2">RAM</span> or{' '}
                    <span className="font-mono text-sm text-ink-2">mock test</span>
                  </p>
                )}
              </div>
            ) : showEmpty ? (
              <div className="px-5 py-9 text-center">
                <p className="text-base font-medium text-ink">No match for “{query}”</p>
                <p className="mt-1 text-sm text-ink-3">
                  Check the spelling, try a shorter word, or search in Hindi.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {['HTML', 'CSS selector', 'RAM', 'mock test'].map((s) => (
                    <button key={s} type="button" onClick={() => setQuery(s)} className="btn btn-secondary btn-sm">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              grouped.map(([kind, items]) => {
                const meta = GROUP_META[kind] || GROUP_META.page;
                const Icon = meta.icon;
                return (
                  <div key={kind} className="px-1.5 pb-1.5">
                    <p className="eyebrow px-2.5 py-1.5">{meta.label}</p>
                    <ul>
                      {items.map((item) => {
                        const idx = flat.indexOf(item);
                        const active = idx === cursor;
                        return (
                          <li key={item.id}>
                            <button
                              type="button"
                              data-cursor={active}
                              onMouseEnter={() => setCursor(idx)}
                              onClick={() => go(item)}
                              className={`w-full flex items-start gap-2.5 text-left px-2.5 py-2 rounded-lg transition-colors ${
                                active ? 'bg-accent-soft' : 'hover:bg-sunken'
                              }`}
                            >
                              <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${active ? 'text-accent' : 'text-ink-4'}`} aria-hidden="true" />
                              <span className="min-w-0 flex-1">
                                <span className="block text-base text-ink leading-snug line-clamp-2">{item.title}</span>
                                {item.subtitle ? (
                                  <span className="block text-xs text-hindi hindi-text line-clamp-1">{item.subtitle}</span>
                                ) : null}
                                <span className="block text-xs text-ink-4 mt-0.5">{item.context}</span>
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })
            )}
          </div>

          {/* Keyboard legend */}
          <div className="hidden sm:flex items-center gap-4 px-3.5 py-2 border-t border-line bg-sunken text-xs text-ink-4">
            <span className="inline-flex items-center gap-1"><ArrowUp className="w-3 h-3" /><ArrowDown className="w-3 h-3" /> navigate</span>
            <span className="inline-flex items-center gap-1"><CornerDownLeft className="w-3 h-3" /> open</span>
            <span className="inline-flex items-center gap-1">esc close</span>
            {flat.length ? <span className="ml-auto">{flat.length} result{flat.length === 1 ? '' : 's'}</span> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
