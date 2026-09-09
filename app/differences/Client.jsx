'use client';

/**
 * O Level — Differences & comparisons.
 *
 * The flagship revision surface: one long, scannable page of "X vs Y" tables
 * rather than a master/detail split, because the exam question is always
 * "what were the five points of difference again?" — and that is a reading
 * task, not a browsing task.
 *
 * Every comparison keeps a stable `id` on its <section>; the command palette
 * deep-links to /differences#<id>.
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Layers, Link2, Printer, Search, Table2, X } from 'lucide-react';
import {
  Breadcrumbs,
  Button,
  Callout,
  ComparisonTable,
  EmptyState,
  MetaItem,
  PageHeader,
  ScrollTable,
  cx,
} from '@/components/ui';
import { differencesData } from '@/data/differencesData';
import { unitsData } from '@/data/syllabusData';

/* ------------------------------------------------------------------ data */

const UNIT_TITLES = new Map(unitsData.map((u) => [Number(u.unitNumber), u.title]));

/** "Internet vs. WWW (World Wide Web)" → ["Internet", "WWW (World Wide Web)"] */
function splitSides(title = '') {
  return title
    .split(/\s+vs\.?\s+/i)
    .map((part) => part.trim())
    .filter(Boolean);
}

function normalise(entry) {
  const rows = entry.comparison || entry.criteria || [];
  const sides = splitSides(entry.title);
  const columns = rows.some((r) => r.itemC !== undefined) ? 3 : 2;

  return {
    ...entry,
    rows,
    columns,
    labelA: entry.itemA || sides[0] || 'Option A',
    labelB: entry.itemB || sides[1] || 'Option B',
    labelC: entry.itemC || sides[2] || 'Option C',
    haystack: [
      entry.title,
      entry.hindiTitle,
      entry.unitName,
      entry.analogy,
      `unit ${entry.unit}`,
      ...rows.map((r) => [r.feature || r.name, r.itemA, r.itemB, r.itemC].filter(Boolean).join(' ')),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase(),
  };
}

const COMPARISONS = differencesData.map(normalise);
const UNITS = [...new Set(COMPARISONS.map((c) => c.unit))].sort((a, b) => a - b);
const EXAMPLE_QUERIES = ['box model', 'rowspan', 'raster'];

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

/**
 * ComparisonTable covers the two-column shape. Three of the O Level entries
 * compare three things (ol/ul/dl, tr/th/td), which the shared component
 * cannot express yet — so that shape is rendered here in the same visual
 * language: a real table on sm+, stacked pairs at 320px.
 */
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
            <p className="px-3.5 py-2 bg-sunken border-b border-line text-sm font-semibold text-ink">
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
  const aspectOf = (row) => row.feature || row.name || '';

  return (
    <section
      id={item.id}
      aria-labelledby={`${item.id}-title`}
      className="py-10 first:pt-0 scroll-mt-40 sm:scroll-mt-32"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="eyebrow">
            Unit {item.unit} · {UNIT_TITLES.get(item.unit) || item.unitName}
          </p>
          <h2 id={`${item.id}-title`} className="mt-1.5 text-h2 font-semibold text-ink">
            {item.title}
          </h2>
          {item.hindiTitle ? (
            <p className="mt-1 text-base text-hindi hindi-text" lang="hi">{item.hindiTitle}</p>
          ) : null}
        </div>

        <a
          href={`#${item.id}`}
          aria-label={`Link to ${item.title}`}
          className="shrink-0 grid place-items-center h-11 w-11 sm:h-9 sm:w-9 rounded-md text-ink-4
                     hover:text-accent hover:bg-sunken transition-colors duration-fast no-print"
        >
          <Link2 className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>

      {item.analogy ? (
        <Callout kind="analogy" className="mt-5" lang="hi">
          <p className="hindi-text">{item.analogy}</p>
        </Callout>
      ) : null}

      {item.columns === 3 ? (
        <TripleTable
          caption={`${item.title} — point-by-point comparison`}
          labels={[item.labelA, item.labelB, item.labelC]}
          rows={item.rows.map((row) => ({
            aspect: aspectOf(row),
            values: [row.itemA, row.itemB, row.itemC],
          }))}
        />
      ) : (
        <ComparisonTable
          caption={`${item.title} — point-by-point comparison`}
          labelA={item.labelA}
          labelB={item.labelB}
          rows={item.rows.map((row) => ({
            aspect: aspectOf(row),
            a: row.itemA || row.valA,
            b: row.itemB || row.valB,
          }))}
        />
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ page */

export default function DifferencesClient() {
  const [unit, setUnit] = useState('all');
  const [query, setQuery] = useState('');

  const trimmed = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      COMPARISONS.filter((item) => {
        const matchUnit = unit === 'all' || item.unit === unit;
        const matchQuery = !trimmed || item.haystack.includes(trimmed);
        return matchUnit && matchQuery;
      }),
    [unit, trimmed],
  );

  const reset = useCallback(() => {
    setUnit('all');
    setQuery('');
  }, []);

  const filtering = unit !== 'all' || trimmed !== '';

  /* A deep link from the command palette lands before hydration paints the
     list, so the browser's own hash scroll finds nothing. Re-run it once. */
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
      <Breadcrumbs items={[{ label: 'Differences' }]} className="mb-5 no-print" />

      <PageHeader icon="Columns3" tone="sky"
        eyebrow="O Level · Revision"
        title="Differences & comparisons"
        hindiTitle="अंतर एवं तुलना"
        description="Every “X vs Y” question in the M2-R5.1 paper, answered as a point-by-point table with a plain-language analogy. Filter by unit, or search for the pair you keep mixing up."
        actions={
          <Button variant="secondary" icon={Printer} onClick={() => window.print()} className="no-print">
            Print
          </Button>
        }
        meta={[
          <MetaItem key="count" icon={Table2}>
            <span className="tabular-nums">{COMPARISONS.length}</span> comparisons
          </MetaItem>,
          <MetaItem key="units" icon={Layers}>
            <span className="tabular-nums">{UNITS.length}</span> units covered
          </MetaItem>,
        ]}
      />

      {/* Sticky filter bar — stays reachable through a very long page */}
      <div
        className="sticky top-[var(--header-h)] z-30 no-print
                   -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3
                   bg-ground border-b border-line"
      >
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 min-w-0">
              <label htmlFor="differences-search" className="sr-only">
                Search comparisons
              </label>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-4"
                aria-hidden="true"
              />
              <input
                id="differences-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search titles, aspects, values…"
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
            aria-label="Filter comparisons by unit"
          >
            <FilterChip active={unit === 'all'} onClick={() => setUnit('all')}>
              All units
            </FilterChip>
            {UNITS.map((number) => (
              <FilterChip
                key={number}
                active={unit === number}
                onClick={() => setUnit(number)}
                title={UNIT_TITLES.get(number)}
              >
                Unit {number}
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
              ? `Nothing here mentions “${query.trim()}”. Check the spelling, or try a broader word.`
              : 'This unit has no comparison tables yet.'
          }
          action={
            <>
              <Button variant="secondary" onClick={reset}>Clear filters</Button>
              {EXAMPLE_QUERIES.map((example) => (
                <Button
                  key={example}
                  variant="ghost"
                  onClick={() => {
                    setUnit('all');
                    setQuery(example);
                  }}
                >
                  {example}
                </Button>
              ))}
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
