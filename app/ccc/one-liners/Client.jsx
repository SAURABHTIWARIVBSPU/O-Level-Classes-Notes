'use client';

/**
 * CCC — one-liners.
 *
 * Same ten-minutes-before-the-exam list as the O Level page, mapped onto the
 * CCC shape ({ id, category, fact, englishFact }). Categories come from the
 * data itself rather than a hard-coded array, so nothing in the file can
 * become unreachable when a new category is added.
 *
 * Every fact keeps id="ol-<id>" — the command palette deep-links to it.
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Check, ClipboardList, Copy, Eye, Layers, Printer, Search, X } from 'lucide-react';
import {
  Breadcrumbs,
  Button,
  EmptyState,
  MetaItem,
  PageHeader,
  cx,
} from '@/components/ui';
import { cccOneLinersData } from '@/data/cccOneLinersData';

/* ------------------------------------------------------------------ data */

const FACTS = cccOneLinersData.map((item) => ({
  ...item,
  haystack: [item.fact, item.englishFact, item.category].filter(Boolean).join(' ').toLowerCase(),
}));

const CATEGORIES = [...new Set(FACTS.map((f) => f.category))];

const CATEGORY_COUNTS = CATEGORIES.reduce((acc, name) => {
  acc[name] = FACTS.filter((f) => f.category === name).length;
  return acc;
}, {});

/* ------------------------------------------------------------- fragments */

function FilterChip({ active, children, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cx(
        'inline-flex items-center gap-1.5 h-11 sm:h-8 px-3 shrink-0 rounded-full border text-xs font-semibold',
        'transition-colors duration-fast ease-out',
        active
          ? 'bg-accent-soft border-accent-line text-accent-ink'
          : 'bg-surface border-line text-ink-2 hover:border-line-strong hover:text-ink',
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ page */

export default function CccOneLinersClient() {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [revision, setRevision] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const trimmed = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      FACTS.filter((fact) => {
        const matchCategory = category === 'all' || fact.category === category;
        const matchQuery = !trimmed || fact.haystack.includes(trimmed);
        return matchCategory && matchQuery;
      }),
    [category, trimmed],
  );

  const groups = useMemo(() => {
    const map = new Map();
    filtered.forEach((fact) => {
      if (!map.has(fact.category)) map.set(fact.category, []);
      map.get(fact.category).push(fact);
    });
    return [...map.entries()];
  }, [filtered]);

  const reset = useCallback(() => {
    setCategory('all');
    setQuery('');
  }, []);

  const copyAll = useCallback(async () => {
    const text = filtered
      .map((fact, i) => `${i + 1}. ${fact.fact}\n   ${fact.englishFact}`)
      .join('\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked (insecure origin, permissions) — nothing to do */
    }
  }, [filtered]);

  const filtering = category !== 'all' || trimmed !== '';

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return undefined;
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'center' });
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs
        items={[{ label: 'CCC', href: '/ccc' }, { label: 'One-liners' }]}
        className="mb-5 no-print"
      />

      <PageHeader icon="Zap" tone="amber"
        eyebrow="CCC · Revision"
        title="One-liners"
        hindiTitle="वन-लाइनर तथ्य"
        description="Single-sentence facts for rapid recall — computer basics, LibreOffice, the internet, digital payments, e-governance and cyber safety. Each one is given in हिन्दी and English."
        actions={
          <>
            <Button
              variant={revision ? 'soft' : 'secondary'}
              icon={Eye}
              aria-label={revision ? 'Exit revision mode' : 'Enter revision mode'}
              aria-pressed={revision}
              onClick={() => setRevision((value) => !value)}
              className="no-print"
            >
              Revision mode
            </Button>
            <Button
              variant="secondary"
              icon={copied ? Check : Copy}
              onClick={copyAll}
              className="no-print"
            >
              {copied ? 'Copied' : 'Copy all'}
            </Button>
            <Button
              variant="secondary"
              icon={Printer}
              iconOnly
              aria-label="Print these one-liners"
              onClick={() => window.print()}
              className="no-print"
            />
          </>
        }
        meta={[
          <MetaItem key="count" icon={ClipboardList}>
            <span className="tabular-nums">{FACTS.length}</span> facts
          </MetaItem>,
          <MetaItem key="cats" icon={Layers}>
            <span className="tabular-nums">{CATEGORIES.length}</span> categories
          </MetaItem>,
        ]}
      />

      {/* Sticky filter bar */}
      <div
        className="sticky top-[var(--header-h)] z-30 no-print
                   -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3
                   bg-ground border-b border-line"
      >
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 min-w-0">
              <label htmlFor="ccc-one-liners-search" className="sr-only">Search one-liners</label>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-4"
                aria-hidden="true"
              />
              <input
                id="ccc-one-liners-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search a fact, e.g. Ctrl, UPI, 1024…"
                className="input pl-9 pr-10"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 grid place-items-center h-8 w-8
                             rounded-md text-ink-3 hover:text-ink hover:bg-sunken transition-colors duration-fast"
                >
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              ) : null}
            </div>

            <p className="shrink-0 text-xs text-ink-3" aria-live="polite">
              <span className="tabular-nums font-semibold text-ink">{filtered.length}</span>
              <span className="hidden sm:inline"> of </span>
              <span className="sm:hidden">/</span>
              <span className="tabular-nums">{FACTS.length}</span>
            </p>
          </div>

          <div
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar -my-1 py-1"
            role="group"
            aria-label="Filter one-liners by category"
          >
            <FilterChip active={category === 'all'} onClick={() => setCategory('all')}>
              All
            </FilterChip>
            {CATEGORIES.map((name) => (
              <FilterChip
                key={name}
                active={category === name}
                onClick={() => setCategory(name)}
              >
                {name}
                <span className="tabular-nums font-normal text-ink-4">{CATEGORY_COUNTS[name]}</span>
              </FilterChip>
            ))}
          </div>
        </div>
      </div>

      {revision ? (
        <p className="mt-6 text-sm text-ink-3 no-print">
          Revision mode is on — category markers are hidden so only the facts remain.
        </p>
      ) : null}

      {filtered.length ? (
        <div className="mt-6 space-y-10">
          {groups.map(([name, facts]) => (
            <section key={name} aria-labelledby={`cat-${name}-heading`}>
              <h2 id={`cat-${name}-heading`} className="eyebrow pb-2 border-b border-line-strong">
                {name}
                <span className="text-ink-4 font-normal"> · </span>
                <span className="tabular-nums font-normal text-ink-4">{facts.length}</span>
              </h2>

              <ul>
                {facts.map((fact) => (
                  <li
                    key={fact.id}
                    id={`ol-${fact.id}`}
                    className="flex gap-3 sm:gap-4 py-3 border-b border-line scroll-mt-40 sm:scroll-mt-32
                               target:bg-accent-soft"
                  >
                    <span className="shrink-0 w-7 pt-px text-right text-xs font-semibold tabular-nums text-ink-4">
                      <span className="sr-only">Fact </span>
                      {fact.id}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-prose text-ink hindi-text" lang="hi">{fact.fact}</p>
                      {fact.englishFact ? (
                        <p className="mt-1 text-base text-ink-2 leading-relaxed">{fact.englishFact}</p>
                      ) : null}
                      {!revision ? (
                        <p className="mt-1.5 text-xs text-ink-3">{fact.category}</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <EmptyState
          className="mt-8"
          icon={Search}
          title="No one-liner matches that"
          description={
            trimmed
              ? `Nothing here mentions “${query.trim()}”. Try a single keyword, or pick a different category.`
              : 'That category has no facts yet.'
          }
          action={
            <>
              <Button variant="secondary" onClick={reset}>Clear filters</Button>
              <Button variant="ghost" href="/ccc/differences">Try the comparisons</Button>
            </>
          }
        />
      )}

      {filtering && filtered.length ? (
        <div className="mt-10 flex justify-center no-print">
          <Button variant="ghost" onClick={reset}>Show all {FACTS.length} facts</Button>
        </div>
      ) : null}
    </div>
  );
}
