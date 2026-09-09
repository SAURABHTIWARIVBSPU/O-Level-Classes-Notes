'use client';

/**
 * CCC — Differences & comparisons.
 *
 * Same surface as the O Level page, mapped onto the CCC data shape
 * ({ id, title, englishTitle, table:[{param, col1, col2, col3?}] }).
 *
 * The CCC comparison data carries no chapter number, so the standing filter
 * is by comparison rather than by chapter. Column headings are derived from
 * `englishTitle` instead of a hard-coded id → header map, so a new entry in
 * the data file gets correct headings with no page change.
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link2, Printer, Search, Table2, X } from 'lucide-react';
import {
  Breadcrumbs,
  Button,
  ComparisonTable,
  EmptyState,
  MetaItem,
  PageHeader,
  ScrollTable,
  cx,
} from '@/components/ui';
import { cccDifferencesData } from '@/data/cccDifferencesData';

/* ------------------------------------------------------------------ data */

/** "Difference between NEFT, RTGS and IMPS" → ["NEFT", "RTGS", "IMPS"] */
function splitSides(englishTitle = '') {
  return englishTitle
    .replace(/^\s*difference\s+between\s+/i, '')
    .split(/\s*,\s*|\s+and\s+|\s+vs\.?\s+/i)
    .map((part) => part.trim())
    .filter(Boolean);
}

function normalise(entry) {
  const rows = entry.table || [];
  const columns = rows.some((row) => row.col3 !== undefined) ? 3 : 2;
  const sides = splitSides(entry.englishTitle || entry.title);
  const labels = Array.from({ length: columns }, (_, i) => sides[i] || `Option ${i + 1}`);

  return {
    ...entry,
    rows,
    columns,
    labels,
    shortLabel: sides.length ? sides.join(' vs ') : entry.englishTitle,
    haystack: [
      entry.title,
      entry.englishTitle,
      ...rows.map((row) => [row.param, row.col1, row.col2, row.col3].filter(Boolean).join(' ')),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase(),
  };
}

const COMPARISONS = cccDifferencesData.map(normalise);

/* ------------------------------------------------------------- fragments */

const ROW_HEAD =
  '!normal-case !tracking-normal !text-sm !font-semibold !text-ink !bg-transparent !static ' +
  'px-3.5 py-2.5 border-b border-line text-left align-top';

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

/** Three-way comparison (NEFT / RTGS / IMPS) — ComparisonTable only does two. */
function TripleTable({ rows, labels, caption }) {
  return (
    <div>
      <div className="hidden sm:block">
        <ScrollTable>
          <table>
            <caption className="sr-only">{caption}</caption>
            <thead>
              <tr>
                <th scope="col" className="w-[22%]">Aspect</th>
                {labels.map((label) => (
                  <th key={label} scope="col">{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <th scope="row" className={ROW_HEAD}>{row.aspect}</th>
                  {row.values.map((value, j) => (
                    <td key={j}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollTable>
      </div>

      <ul className="sm:hidden space-y-2.5">
        {rows.map((row, i) => (
          <li key={i} className="panel overflow-hidden">
            <p className="px-3.5 py-2 bg-sunken border-b border-line text-sm font-semibold text-ink hindi-text" lang="hi">
              {row.aspect}
            </p>
            <dl className="divide-y divide-line">
              {row.values.map((value, j) => (
                <div key={j} className="px-3.5 py-2.5">
                  <dt className="eyebrow mb-1">{labels[j]}</dt>
                  <dd className="text-base text-ink-2 leading-relaxed [overflow-wrap:anywhere]">{value}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Comparison({ item }) {
  return (
    <section
      id={item.id}
      aria-labelledby={`${item.id}-title`}
      className="py-10 first:pt-0 scroll-mt-40 sm:scroll-mt-32"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="eyebrow">CCC · Comparison</p>
          <h2 id={`${item.id}-title`} className="mt-1.5 text-h2 font-semibold text-ink">
            {item.englishTitle || item.title}
          </h2>
          {item.title ? (
            <p className="mt-1 text-base text-hindi hindi-text" lang="hi">{item.title}</p>
          ) : null}
        </div>

        <a
          href={`#${item.id}`}
          aria-label={`Link to ${item.englishTitle || item.title}`}
          className="shrink-0 grid place-items-center h-11 w-11 sm:h-9 sm:w-9 rounded-md text-ink-4
                     hover:text-accent hover:bg-sunken transition-colors duration-fast no-print"
        >
          <Link2 className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>

      {item.columns === 3 ? (
        <TripleTable
          caption={`${item.englishTitle} — point-by-point comparison`}
          labels={item.labels}
          rows={item.rows.map((row) => ({
            aspect: row.param,
            values: [row.col1, row.col2, row.col3],
          }))}
        />
      ) : (
        <ComparisonTable
          caption={`${item.englishTitle} — point-by-point comparison`}
          labelA={item.labels[0]}
          labelB={item.labels[1]}
          rows={item.rows.map((row) => ({
            aspect: row.param,
            a: row.col1,
            b: row.col2,
          }))}
        />
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ page */

export default function CccDifferencesClient() {
  const [selected, setSelected] = useState('all');
  const [query, setQuery] = useState('');

  const trimmed = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      COMPARISONS.filter((item) => {
        const matchChip = selected === 'all' || item.id === selected;
        const matchQuery = !trimmed || item.haystack.includes(trimmed);
        return matchChip && matchQuery;
      }),
    [selected, trimmed],
  );

  const reset = useCallback(() => {
    setSelected('all');
    setQuery('');
  }, []);

  const filtering = selected !== 'all' || trimmed !== '';

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return undefined;
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start' });
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs
        items={[{ label: 'CCC', href: '/ccc' }, { label: 'Differences' }]}
        className="mb-5 no-print"
      />

      <PageHeader
        eyebrow="CCC · Revision"
        title="Differences & comparisons"
        hindiTitle="अंतर एवं तुलना"
        description="RAM vs ROM, NEFT vs RTGS vs IMPS, IPv4 vs IPv6 and LibreOffice vs MS Office — the four comparisons the CCC paper asks about, as point-by-point tables that stay readable on a phone."
        actions={
          <Button variant="secondary" icon={Printer} onClick={() => window.print()} className="no-print">
            Print
          </Button>
        }
        meta={[
          <MetaItem key="count" icon={Table2}>
            <span className="tabular-nums">{COMPARISONS.length}</span> comparison tables
          </MetaItem>,
        ]}
      />

      <div
        className="sticky top-[var(--header-h)] z-30 no-print
                   -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3
                   bg-ground border-b border-line"
      >
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 min-w-0">
              <label htmlFor="ccc-differences-search" className="sr-only">
                Search comparisons
              </label>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-4"
                aria-hidden="true"
              />
              <input
                id="ccc-differences-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search a term, e.g. volatile, NPCI, IPv6…"
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
              <span className="tabular-nums">{COMPARISONS.length}</span>
            </p>
          </div>

          <div
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar -mx-1 px-1"
            role="group"
            aria-label="Filter by comparison"
          >
            <FilterChip active={selected === 'all'} onClick={() => setSelected('all')}>
              All
            </FilterChip>
            {COMPARISONS.map((item) => (
              <FilterChip
                key={item.id}
                active={selected === item.id}
                onClick={() => setSelected(item.id)}
              >
                {item.shortLabel}
              </FilterChip>
            ))}
          </div>
        </div>
      </div>

      {filtered.length ? (
        <div className="mt-8 divide-y divide-line">
          {filtered.map((item) => (
            <Comparison key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <EmptyState
          className="mt-8"
          icon={Search}
          title="No comparison matches that"
          description={
            trimmed
              ? `Nothing in these tables mentions “${query.trim()}”. Try a shorter word.`
              : 'Nothing matches the current filter.'
          }
          action={
            <>
              <Button variant="secondary" onClick={reset}>Clear filters</Button>
              <Button variant="ghost" href="/ccc/one-liners">Browse one-liners</Button>
            </>
          }
        />
      )}

      {filtering && filtered.length ? (
        <div className="mt-10 flex justify-center no-print">
          <Button variant="ghost" onClick={reset}>Show all {COMPARISONS.length} comparisons</Button>
        </div>
      ) : null}
    </div>
  );
}
