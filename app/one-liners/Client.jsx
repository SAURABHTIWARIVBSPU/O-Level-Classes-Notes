'use client';

/**
 * O Level — one-liners.
 *
 * Built for the ten minutes before the exam: a tight, rule-separated list you
 * can run your eye down, not 99 cards. Facts stay the largest thing on the
 * page; unit and tag are quiet markers underneath.
 *
 * Every fact keeps id="ol-<id>" — the command palette deep-links to it.
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Check, ClipboardList, Copy, Eye, Layers, Printer, Search, Tag, X } from 'lucide-react';
import {
  Breadcrumbs,
  Button,
  EmptyState,
  MetaItem,
  PageHeader,
  cx,
} from '@/components/ui';
import { oneLinersData } from '@/data/oneLinersData';
import { unitsData } from '@/data/syllabusData';

/* ------------------------------------------------------------------ data */

const UNIT_TITLES = new Map(unitsData.map((u) => [Number(u.unitNumber), u.title]));

const FACTS = oneLinersData.map((item) => ({
  ...item,
  body: item.text || item.point || '',
  haystack: [item.text, item.point, item.hindiPoint, item.tag, item.unitName, `unit ${item.unit}`]
    .filter(Boolean)
    .join(' ')
    .toLowerCase(),
}));

const UNITS = [...new Set(FACTS.map((f) => f.unit))].sort((a, b) => a - b);

/* ------------------------------------------------------------- fragments */

function FilterChip({ active, children, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cx(
        'inline-flex items-center h-11 sm:h-8 px-3 shrink-0 rounded-full border text-xs font-semibold',
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

export default function OneLinersClient() {
  const [unit, setUnit] = useState('all');
  const [tag, setTag] = useState('all');
  const [query, setQuery] = useState('');
  const [revision, setRevision] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const trimmed = query.trim().toLowerCase();

  /* Tags offered are always the tags that actually exist in the current unit,
     so the control can never produce an empty list by itself. */
  const tags = useMemo(() => {
    const counts = new Map();
    FACTS.forEach((fact) => {
      if (unit !== 'all' && fact.unit !== unit) return;
      counts.set(fact.tag, (counts.get(fact.tag) || 0) + 1);
    });
    return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [unit]);

  const filtered = useMemo(
    () =>
      FACTS.filter((fact) => {
        const matchUnit = unit === 'all' || fact.unit === unit;
        const matchTag = tag === 'all' || fact.tag === tag;
        const matchQuery = !trimmed || fact.haystack.includes(trimmed);
        return matchUnit && matchTag && matchQuery;
      }),
    [unit, tag, trimmed],
  );

  /* Grouped by unit so a 99-item list still has landmarks to scroll between. */
  const groups = useMemo(() => {
    const map = new Map();
    filtered.forEach((fact) => {
      if (!map.has(fact.unit)) map.set(fact.unit, []);
      map.get(fact.unit).push(fact);
    });
    return [...map.entries()].sort((a, b) => a[0] - b[0]);
  }, [filtered]);

  const selectUnit = useCallback((value) => {
    setUnit(value);
    setTag('all');
  }, []);

  const reset = useCallback(() => {
    setUnit('all');
    setTag('all');
    setQuery('');
  }, []);

  const copyAll = useCallback(async () => {
    const text = filtered.map((fact, i) => `${i + 1}. ${fact.body}`).join('\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked (insecure origin, permissions) — nothing to do */
    }
  }, [filtered]);

  const filtering = unit !== 'all' || tag !== 'all' || trimmed !== '';

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
      <Breadcrumbs items={[{ label: 'One-liners' }]} className="mb-5 no-print" />

      <PageHeader icon="Zap" tone="amber"
        eyebrow="O Level · Revision"
        title="One-liners"
        hindiTitle="वन-लाइनर तथ्य"
        description="High-yield facts pulled out of the M2-R5.1 syllabus — one sentence each, in syllabus order. Filter down to a unit or a tag, then read straight down the list."
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
          <MetaItem key="units" icon={Layers}>
            <span className="tabular-nums">{UNITS.length}</span> units
          </MetaItem>,
          <MetaItem key="tags" icon={Tag}>
            <span className="tabular-nums">{new Set(FACTS.map((f) => f.tag)).size}</span> tags
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
              <label htmlFor="one-liners-search" className="sr-only">Search one-liners</label>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-4"
                aria-hidden="true"
              />
              <input
                id="one-liners-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search a fact, e.g. doctype, box model, 1989…"
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

          <div className="flex items-center gap-2">
            <label htmlFor="one-liners-tag" className="sr-only">Filter by tag</label>
            <select
              id="one-liners-tag"
              value={tag}
              onChange={(event) => setTag(event.target.value)}
              className="input w-auto max-w-[9rem] sm:max-w-[12rem] shrink-0 text-sm"
            >
              <option value="all">All tags ({tags.length})</option>
              {tags.map(([name, count]) => (
                <option key={name} value={name}>{name} ({count})</option>
              ))}
            </select>

            <div
              className="flex items-center gap-1.5 overflow-x-auto no-scrollbar -my-1 py-1 min-w-0"
              role="group"
              aria-label="Filter one-liners by unit"
            >
              <FilterChip active={unit === 'all'} onClick={() => selectUnit('all')}>
                All units
              </FilterChip>
              {UNITS.map((number) => (
                <FilterChip
                  key={number}
                  active={unit === number}
                  onClick={() => selectUnit(number)}
                  title={UNIT_TITLES.get(number)}
                >
                  Unit {number}
                </FilterChip>
              ))}
            </div>
          </div>
        </div>
      </div>

      {revision ? (
        <p className="mt-6 text-sm text-ink-3 no-print">
          Revision mode is on — unit and tag markers are hidden so only the facts remain.
        </p>
      ) : null}

      {filtered.length ? (
        <div className="mt-6 space-y-10">
          {groups.map(([number, facts]) => (
            <section key={number} aria-labelledby={`unit-${number}-heading`}>
              <h2
                id={`unit-${number}-heading`}
                className="eyebrow pb-2 border-b border-line-strong"
              >
                Unit <span className="tabular-nums">{number}</span>
                <span className="text-ink-4"> · </span>
                {UNIT_TITLES.get(number) || facts[0].unitName}
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
                      <p className="text-prose text-ink hindi-text" lang="hi">{fact.body}</p>
                      {!revision ? (
                        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-ink-3">
                          <span>Unit <span className="tabular-nums">{fact.unit}</span></span>
                          <span className="text-ink-4" aria-hidden="true">·</span>
                          <span>{fact.tag}</span>
                        </p>
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
              ? `Nothing here mentions “${query.trim()}”. Try a single keyword, or clear the unit and tag filters.`
              : 'That combination of unit and tag has no facts.'
          }
          action={
            <>
              <Button variant="secondary" onClick={reset}>Clear filters</Button>
              <Button variant="ghost" href="/differences">Try the comparisons</Button>
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
