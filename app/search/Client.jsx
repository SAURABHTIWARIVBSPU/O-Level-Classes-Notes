'use client';

import React, { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  ArrowDown,
  ArrowUp,
  BookOpen,
  Clock,
  Columns3,
  CornerDownLeft,
  FileText,
  Layers,
  Search as SearchIcon,
  X,
  Zap,
} from 'lucide-react';

import { Breadcrumbs, PageHeader, Panel, Button, Segmented, EmptyState, Skeleton } from '@/components/ui';
import { COURSES, CCC_NAV, OLEVEL_NAV, getCourseTopics, getModules } from '@/lib/navigation';

/**
 * The deep version of the ⌘K palette: same index, but with a course filter,
 * grouped results, the matching line of context, and a shareable ?q= URL.
 *
 * Performance: only the syllabus indexes from lib/navigation are bundled with
 * the page. One-liners and comparisons (~75KB of revision text) are pulled in
 * with a dynamic import after first paint, and topicsData / mcqsData are never
 * loaded here at all.
 */

const RECENT_QUERIES_KEY = 'olevel_recent_queries';
const PALETTE_RECENTS_KEY = 'olevel_recent_searches'; // shared with CommandPalette
const MAX_RESULTS = 60;
const MAX_RECENTS = 6;

const GROUPS = [
  { kind: 'topic', label: 'Topics', icon: BookOpen },
  { kind: 'module', label: 'Units & chapters', icon: Layers },
  { kind: 'page', label: 'Pages & tools', icon: FileText },
  { kind: 'oneliner', label: 'One-liners', icon: Zap },
  { kind: 'difference', label: 'Comparisons', icon: Columns3 },
];

const EXAMPLE_QUERIES = ['box model', 'rowspan', 'W3.CSS grid', 'DOM', 'RAM', 'मॉक टेस्ट'];

/* ------------------------------------------------------------------- index */

function buildCoreIndex() {
  const entries = [];

  for (const courseKey of ['olevel', 'ccc']) {
    const course = COURSES[courseKey];

    for (const mod of getModules(courseKey)) {
      entries.push({
        id: `m-${courseKey}-${mod.key}`,
        kind: 'module',
        courseKey,
        title: `${course.unitWord} ${Number(mod.number)} — ${mod.title}`,
        subtitle: mod.hindiTitle,
        context: `${course.name} · ${mod.marks || ''}`.replace(/ · $/, ''),
        body: mod.description || '',
        href: mod.href,
        haystack: `${mod.number} ${mod.title} ${mod.hindiTitle || ''} ${mod.description || ''}`.toLowerCase(),
      });
    }

    for (const topic of getCourseTopics(courseKey)) {
      entries.push({
        id: `t-${courseKey}-${topic.slug}`,
        kind: 'topic',
        courseKey,
        title: topic.title,
        subtitle: topic.hindiTitle,
        context: `${course.name} · ${course.unitWord} ${Number(topic.moduleNumber)} · ${topic.moduleTitle}`,
        /* The Hindi title is already shown as the subtitle — no excerpt needed. */
        body: '',
        href: topic.href,
        haystack: `${topic.title} ${topic.hindiTitle || ''} ${topic.moduleTitle} ${topic.slug}`.toLowerCase(),
      });
    }

    for (const group of courseKey === 'ccc' ? CCC_NAV : OLEVEL_NAV) {
      for (const item of group.items) {
        entries.push({
          id: `p-${courseKey}-${item.href}`,
          kind: 'page',
          courseKey,
          title: item.label,
          context: `${course.name} · ${group.label}`,
          body: item.desc || '',
          href: item.href,
          haystack: `${item.label} ${item.desc || ''} ${group.label}`.toLowerCase(),
        });
      }
    }
  }

  return entries;
}

async function buildRevisionIndex() {
  const [oneLiners, cccOneLiners, differences, cccDifferences] = await Promise.all([
    import('@/data/oneLinersData').then((m) => m.oneLinersData || []).catch(() => []),
    import('@/data/cccOneLinersData').then((m) => m.cccOneLinersData || []).catch(() => []),
    import('@/data/differencesData').then((m) => m.differencesData || []).catch(() => []),
    import('@/data/cccDifferencesData').then((m) => m.cccDifferencesData || []).catch(() => []),
  ]);

  const entries = [];

  oneLiners.forEach((o, i) => {
    const text = o.text || '';
    entries.push({
      id: `ol-${o.id ?? i}`,
      kind: 'oneliner',
      courseKey: 'olevel',
      title: text,
      context: `O Level · Unit ${o.unit}${o.unitName ? ` · ${o.unitName}` : ''}`,
      body: text,
      href: `/one-liners#ol-${o.id ?? i}`,
      haystack: `${text} ${o.tag || ''} ${o.unitName || ''}`.toLowerCase(),
    });
  });

  cccOneLiners.forEach((o, i) => {
    /* CCC one-liners use fact / englishFact rather than text. */
    const text = o.fact || o.text || o.englishFact || '';
    entries.push({
      id: `col-${o.id ?? i}`,
      kind: 'oneliner',
      courseKey: 'ccc',
      title: text,
      context: `CCC${o.category ? ` · ${o.category}` : ''}`,
      body: o.englishFact || text,
      href: `/ccc/one-liners#ol-${o.id ?? i}`,
      haystack: `${text} ${o.englishFact || ''} ${o.category || ''}`.toLowerCase(),
    });
  });

  differences.forEach((d) => {
    const first = d.comparison?.[0];
    entries.push({
      id: `d-${d.id}`,
      kind: 'difference',
      courseKey: 'olevel',
      title: d.title,
      subtitle: d.hindiTitle,
      context: `O Level · Unit ${d.unit}${d.unitName ? ` · ${d.unitName}` : ''}`,
      body: d.analogy || (first ? `${first.feature}: ${first.itemA} / ${first.itemB}` : ''),
      href: `/differences#${d.id}`,
      haystack: `${d.title} ${d.hindiTitle || ''} ${d.analogy || ''}`.toLowerCase(),
    });
  });

  cccDifferences.forEach((d) => {
    const first = d.table?.[0];
    entries.push({
      id: `cd-${d.id}`,
      kind: 'difference',
      courseKey: 'ccc',
      title: d.englishTitle || d.title,
      subtitle: d.englishTitle ? d.title : undefined,
      context: 'CCC · Comparison',
      body: first ? `${first.param}: ${first.col1} / ${first.col2}` : '',
      href: `/ccc/differences#${d.id}`,
      haystack: `${d.title} ${d.englishTitle || ''}`.toLowerCase(),
    });
  });

  return entries;
}

/* ----------------------------------------------------------------- matching */

function score(entry, terms) {
  let total = 0;
  const title = (entry.title || '').toLowerCase();

  for (const term of terms) {
    if (!entry.haystack.includes(term)) return -1; // every term must appear somewhere
    if (title.startsWith(term)) total += 60;
    else if (title.includes(` ${term}`)) total += 40;
    else if (title.includes(term)) total += 25;
    else total += 8;
  }

  if (entry.kind === 'topic') total += 12;
  if (entry.kind === 'module') total += 8;
  if (entry.kind === 'page') total += 6;
  total -= Math.min(10, Math.floor((entry.title || '').length / 30));
  return total;
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** The line of context around the first term that actually matched. */
function excerpt(text, terms, radius = 70) {
  const source = String(text || '');
  if (!source) return '';
  const lower = source.toLowerCase();

  let at = -1;
  for (const term of terms) {
    const i = lower.indexOf(term);
    if (i !== -1 && (at === -1 || i < at)) at = i;
  }
  if (at === -1) return source.length > radius * 2 ? `${source.slice(0, radius * 2)}…` : source;

  const start = Math.max(0, at - radius);
  const end = Math.min(source.length, at + radius);
  return `${start > 0 ? '…' : ''}${source.slice(start, end)}${end < source.length ? '…' : ''}`;
}

function Highlight({ text, terms }) {
  const value = String(text || '');
  if (!terms.length || !value) return <>{value}</>;

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'ig');
  const parts = value.split(pattern);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="bg-accent-soft text-accent-ink rounded-xs px-0.5">
            {part}
          </mark>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </>
  );
}

/* ------------------------------------------------------------------- page */

function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(urlQuery);
  const [course, setCourse] = useState('all');
  const [revision, setRevision] = useState(null);
  const [recents, setRecents] = useState([]);

  const inputRef = useRef(null);
  const listRef = useRef(null);

  const core = useMemo(buildCoreIndex, []);

  /* Keep the field in step with the URL (back button, shared link, chip click). */
  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  /* Revision text is loaded after first paint, never bundled with the page. */
  useEffect(() => {
    let cancelled = false;
    buildRevisionIndex()
      .then((entries) => !cancelled && setRevision(entries))
      .catch(() => !cancelled && setRevision([]));
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(RECENT_QUERIES_KEY) || '[]');
      setRecents(Array.isArray(stored) ? stored.slice(0, MAX_RECENTS) : []);
    } catch {
      setRecents([]);
    }
  }, []);

  const terms = useMemo(
    () => query.trim().toLowerCase().split(/\s+/).filter(Boolean),
    [query],
  );

  const allMatches = useMemo(() => {
    if (!terms.length) return [];
    const pool = revision ? core.concat(revision) : core;
    return pool
      .map((entry) => ({ entry, s: score(entry, terms) }))
      .filter((row) => row.s >= 0)
      .sort((a, b) => b.s - a.s)
      .map((row) => row.entry);
  }, [terms, core, revision]);

  const courseCounts = useMemo(
    () => ({
      all: allMatches.length,
      olevel: allMatches.filter((m) => m.courseKey === 'olevel').length,
      ccc: allMatches.filter((m) => m.courseKey === 'ccc').length,
    }),
    [allMatches],
  );

  const results = useMemo(() => {
    const filtered = course === 'all' ? allMatches : allMatches.filter((m) => m.courseKey === course);
    return filtered.slice(0, MAX_RESULTS);
  }, [allMatches, course]);

  const grouped = useMemo(
    () =>
      GROUPS.map((group) => ({
        ...group,
        items: results.filter((r) => r.kind === group.kind),
      })).filter((group) => group.items.length > 0),
    [results],
  );

  /* -------------------------------------------------------- interactions */

  const rememberQuery = useCallback((value) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    setRecents((prev) => {
      const next = [trimmed, ...prev.filter((r) => r.toLowerCase() !== trimmed.toLowerCase())].slice(0, MAX_RECENTS);
      try {
        localStorage.setItem(RECENT_QUERIES_KEY, JSON.stringify(next));
      } catch {
        /* storage blocked — recents just will not persist */
      }
      return next;
    });
  }, []);

  const runSearch = useCallback(
    (value) => {
      setQuery(value);
      rememberQuery(value);
      const next = value.trim() ? `/search?q=${encodeURIComponent(value.trim())}` : '/search';
      router.replace(next, { scroll: false });
    },
    [rememberQuery, router],
  );

  const clearRecents = useCallback(() => {
    setRecents([]);
    try {
      localStorage.removeItem(RECENT_QUERIES_KEY);
    } catch {
      /* nothing to clear */
    }
  }, []);

  /* Opening a result also feeds the ⌘K palette's "recent" list. */
  const rememberOpened = useCallback((entry) => {
    try {
      const stored = JSON.parse(localStorage.getItem(PALETTE_RECENTS_KEY) || '[]');
      const list = Array.isArray(stored) ? stored : [];
      const next = [
        { title: entry.title, href: entry.href, context: entry.context },
        ...list.filter((r) => r.href !== entry.href),
      ].slice(0, 5);
      localStorage.setItem(PALETTE_RECENTS_KEY, JSON.stringify(next));
    } catch {
      /* storage blocked — nothing to remember */
    }
  }, []);

  const focusResult = useCallback((target) => {
    const items = Array.from(listRef.current?.querySelectorAll('[data-result]') || []);
    if (!items.length) return false;
    const current = items.indexOf(document.activeElement);
    let index;
    if (target === 'first') index = 0;
    else if (target === 'last') index = items.length - 1;
    else index = current + target;

    if (index < 0) {
      inputRef.current?.focus();
      return true;
    }
    if (index > items.length - 1) index = items.length - 1;
    items[index]?.focus();
    return true;
  }, []);

  const onInputKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusResult('first');
    }
    if (e.key === 'Escape' && query) {
      e.preventDefault();
      runSearch('');
    }
  };

  const onListKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusResult(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusResult(-1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusResult('first');
    } else if (e.key === 'End') {
      e.preventDefault();
      focusResult('last');
    } else if (e.key === 'Escape') {
      e.preventDefault();
      inputRef.current?.focus();
    }
  };

  const trimmed = query.trim();
  const hasQuery = trimmed.length > 0;
  const loadingRevision = revision === null;
  const matchCount = course === 'all' ? courseCounts.all : courseCounts[course];

  /* ---------------------------------------------------------------- view */

  return (
    <div className="shell shell-wide py-8 sm:py-10">
      <Breadcrumbs className="mb-5" items={[{ label: 'Search' }]} />

      <PageHeader icon="Search" tone="violet"
        eyebrow="Search"
        title="Search everything"
        hindiTitle="खोजें"
        description="Topics, units, one-liners and comparison tables across both courses. Type in English or हिन्दी — the notes are bilingual, so the search is too."
      />

      {/* ------------------------------------------------------------ query */}
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          runSearch(query);
        }}
        className="mb-5"
      >
        <label htmlFor="search-input" className="eyebrow block mb-2">
          What are you looking for?
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1 min-w-0">
            <SearchIcon
              className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-3 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="search-input"
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onInputKeyDown}
              placeholder="box model, rowspan, RAM, वेबसाइट…"
              autoComplete="off"
              spellCheck="false"
              enterKeyHint="search"
              className="input h-11 pl-10 pr-10 text-base"
            />
            {query ? (
              <button
                type="button"
                onClick={() => {
                  runSearch('');
                  inputRef.current?.focus();
                }}
                aria-label="Clear the search field"
                className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-ghost btn-sm btn-icon text-ink-3"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            ) : null}
          </div>
          <Button type="submit" variant="primary" size="lg" icon={SearchIcon} className="sm:w-auto w-full">
            Search
          </Button>
        </div>
      </form>

      {/* ----------------------------------------------------------- filters */}
      {hasQuery ? (
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <p className="text-base text-ink-2 tabular-nums" role="status" aria-live="polite">
            <span className="font-semibold text-ink">{matchCount}</span> result{matchCount === 1 ? '' : 's'} for{' '}
            <span className="font-semibold text-ink">&ldquo;{trimmed}&rdquo;</span>
            {course === 'all' ? '' : ` in ${COURSES[course].name}`}
            {results.length < matchCount ? ` · showing the first ${results.length}` : ''}
          </p>

          <div className="overflow-x-auto no-scrollbar">
            <Segmented
              ariaLabel="Filter results by course"
              value={course}
              onChange={setCourse}
              options={[
                { value: 'all', label: `All · ${courseCounts.all}` },
                { value: 'olevel', label: `O Level · ${courseCounts.olevel}` },
                { value: 'ccc', label: `CCC · ${courseCounts.ccc}` },
              ]}
            />
          </div>
        </div>
      ) : null}

      {/* ----------------------------------------------------------- results */}
      {!hasQuery ? (
        <div className="space-y-10">
          {recents.length > 0 ? (
            <section aria-labelledby="recent-heading">
              <div className="flex items-center justify-between gap-3 mb-3">
                <h2 id="recent-heading" className="eyebrow">
                  Recent searches
                </h2>
                <Button variant="ghost" size="sm" onClick={clearRecents}>
                  Clear
                </Button>
              </div>
              <Panel>
                <ul className="p-1.5 space-y-0.5">
                  {recents.map((recent) => (
                    <li key={recent}>
                      <button
                        type="button"
                        onClick={() => runSearch(recent)}
                        className="w-full flex items-center gap-3 px-3 py-3 min-h-[44px] text-left hover:bg-sunken transition-colors duration-fast rounded-md"
                      >
                        <Clock className="w-4 h-4 text-ink-4 shrink-0" aria-hidden="true" />
                        <span className="text-base text-ink truncate">{recent}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </Panel>
            </section>
          ) : null}

          <section aria-labelledby="examples-heading">
            <h2 id="examples-heading" className="eyebrow mb-3">
              {recents.length ? 'Or try one of these' : 'Try one of these'}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {EXAMPLE_QUERIES.map((example) => (
                <li key={example}>
                  <Button variant="secondary" size="sm" onClick={() => runSearch(example)}>
                    {example}
                  </Button>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base text-ink-3 max-w-measure">
              Searching covers topic titles, unit names, the 100 one-liners and every comparison table. For a specific
              tag or property, the cheat sheets are usually faster —{' '}
              <Link href="/cheat-sheets" className="text-accent hover:underline">
                open the cheat sheets
              </Link>
              .
            </p>
          </section>
        </div>
      ) : results.length === 0 ? (
        <EmptyState
          icon={SearchIcon}
          title={`Nothing matches “${trimmed}”`}
          description={
            loadingRevision
              ? 'One-liners and comparisons are still loading — they may yet match. Otherwise, check the spelling, use fewer words, or try the Hindi term.'
              : 'Check the spelling, use fewer words, or try the Hindi term. Every term you type has to appear somewhere in the result.'
          }
          action={
            <>
              {course !== 'all' && courseCounts.all > 0 ? (
                <Button variant="primary" onClick={() => setCourse('all')}>
                  Search both courses instead ({courseCounts.all})
                </Button>
              ) : null}
              <Button variant="secondary" onClick={() => runSearch('box model')}>
                Try “box model”
              </Button>
              <Button href="/syllabus" variant="ghost">
                Browse the syllabus
              </Button>
            </>
          }
        />
      ) : (
        <div ref={listRef} onKeyDown={onListKeyDown} className="space-y-10">
          {grouped.map((group) => {
            const Icon = group.icon;
            return (
              <section key={group.kind} aria-labelledby={`group-${group.kind}`}>
                <h2 id={`group-${group.kind}`} className="eyebrow flex items-center gap-2 mb-3">
                  <Icon className="w-3.5 h-3.5 text-ink-4" aria-hidden="true" />
                  {group.label}
                  <span className="text-ink-4 tabular-nums">({group.items.length})</span>
                </h2>

                <Panel>
                  <ul className="p-1.5 space-y-0.5">
                    {group.items.map((item) => {
                      const snippet = excerpt(item.body, terms);
                      return (
                        <li key={item.id}>
                          <Link
                            href={item.href}
                            data-result
                            onClick={() => rememberOpened(item)}
                            className="block px-3 py-3 hover:bg-sunken transition-colors duration-fast rounded-md"
                          >
                            <p className="text-base font-medium text-ink leading-snug">
                              <Highlight text={item.title} terms={terms} />
                            </p>

                            {item.subtitle ? (
                              <p className="mt-0.5 text-sm text-hindi hindi-text" lang="hi">
                                <Highlight text={item.subtitle} terms={terms} />
                              </p>
                            ) : null}

                            {snippet && snippet !== item.title && snippet !== item.subtitle ? (
                              <p className="mt-1 text-sm text-ink-2 leading-relaxed line-clamp-2">
                                <Highlight text={snippet} terms={terms} />
                              </p>
                            ) : null}

                            <p className="mt-1.5 text-xs text-ink-3">{item.context}</p>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Panel>
              </section>
            );
          })}

          {loadingRevision ? (
            <p className="text-sm text-ink-3 flex items-center gap-2">
              <Skeleton className="h-3 w-3 rounded-full" />
              Still loading one-liners and comparison tables…
            </p>
          ) : null}

          <p className="hidden sm:flex items-center gap-4 text-xs text-ink-3 pt-2 border-t border-line">
            <span className="inline-flex items-center gap-1">
              <ArrowUp className="w-3 h-3" aria-hidden="true" />
              <ArrowDown className="w-3 h-3" aria-hidden="true" />
              move through results
            </span>
            <span className="inline-flex items-center gap-1">
              <CornerDownLeft className="w-3 h-3" aria-hidden="true" />
              open
            </span>
            <span>Esc back to the field</span>
          </p>
        </div>
      )}
    </div>
  );
}

function SearchFallback() {
  return (
    <div className="shell shell-wide py-8 sm:py-10">
      <PageHeader icon="Search" tone="violet" eyebrow="Search" title="Search everything" description="Loading the index…" />
      <Skeleton className="h-11 w-full rounded-md" />
      <div className="mt-8 space-y-3">
        {[0, 1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-16 w-full rounded-xl" />
        ))}
      </div>
      <p className="sr-only" role="status">
        Loading search
      </p>
    </div>
  );
}

export default function SearchClient() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchResults />
    </Suspense>
  );
}
