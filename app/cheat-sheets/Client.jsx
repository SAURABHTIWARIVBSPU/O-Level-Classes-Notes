'use client';

/**
 * O Level — cheat sheets.
 *
 * Reference material, so it is built to be looked *up*, not read: every
 * fragment is monospace in a bordered inline treatment with its own copy
 * control, sections carry sticky headers so you always know which group you
 * are inside, and a jump list gets you to a group in one tap.
 */

import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Check, ChevronDown, Code2, Copy, Hash, Layers, Printer, Search, X,
} from 'lucide-react';
import {
  Badge,
  Breadcrumbs,
  Button,
  CodeBlock,
  EmptyState,
  MetaItem,
  PageHeader,
  cx,
} from '@/components/ui';
import { cheatSheetsData } from '@/data/cheatSheetsData';

/* ------------------------------------------------------------------ data */

const SHEETS = cheatSheetsData.map((sheet) => ({
  ...sheet,
  sections: sheet.sections.map((section, index) => ({
    ...section,
    anchor: `cs-${sheet.id}-${index}`,
    items: (section.items || []).map((item, i) => ({
      ...item,
      key: `${sheet.id}-${index}-${i}`,
      multiline: /\n/.test(item.code || ''),
      haystack: [item.code, item.desc, section.title, sheet.title, sheet.category]
        .filter(Boolean)
        .join(' ')
        .toLowerCase(),
    })),
  })),
}));

const CATEGORIES = [...new Set(SHEETS.map((s) => s.category))];
const TOTAL_ITEMS = SHEETS.reduce(
  (sum, sheet) => sum + sheet.sections.reduce((n, section) => n + section.items.length, 0),
  0,
);

const SCROLL_MT = 'scroll-mt-[calc(var(--header-h)+1rem)]';

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

function Entry({ item, copied, onCopy }) {
  if (item.multiline) {
    return (
      <li className="py-2">
        <CodeBlock code={item.code} language="markup" />
        {item.desc ? (
          <p className="mt-1.5 text-sm text-ink-2 hindi-text" lang="hi">{item.desc}</p>
        ) : null}
      </li>
    );
  }

  return (
    <li
      className="grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[minmax(0,17rem)_minmax(0,1fr)_auto]
                 gap-x-3 items-start py-2.5 border-b border-line last:border-b-0"
    >
      <code
        className="col-start-1 row-start-1 justify-self-start max-w-full
                   font-mono text-sm text-ink bg-sunken border border-line rounded-md px-1.5 py-0.5
                   [overflow-wrap:anywhere]"
      >
        {item.code}
      </code>

      <button
        type="button"
        onClick={() => onCopy(item)}
        aria-label={copied ? `Copied ${item.code}` : `Copy ${item.code}`}
        className="col-start-2 row-start-1 sm:col-start-3 justify-self-end shrink-0 no-print
                   grid place-items-center h-11 w-11 sm:h-8 sm:w-8 -my-1.5 sm:my-0 rounded-md
                   text-ink-4 hover:text-accent hover:bg-sunken transition-colors duration-fast"
      >
        {copied ? (
          <Check className="w-4 h-4 text-ok" aria-hidden="true" />
        ) : (
          <Copy className="w-4 h-4" aria-hidden="true" />
        )}
      </button>

      <p
        className="col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-1 mt-1.5 sm:mt-0
                   text-sm text-ink-2 leading-relaxed hindi-text"
        lang="hi"
      >
        {item.desc}
      </p>
    </li>
  );
}

/* ------------------------------------------------------------------ page */

export default function CheatSheetsClient() {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [jumpOpen, setJumpOpen] = useState(true);
  const [copiedKey, setCopiedKey] = useState(null);
  const copyTimer = useRef(null);

  const trimmed = query.trim().toLowerCase();

  const visible = useMemo(() => {
    return SHEETS.filter((sheet) => category === 'all' || sheet.category === category)
      .map((sheet) => ({
        ...sheet,
        sections: sheet.sections
          .map((section) => ({
            ...section,
            items: trimmed
              ? section.items.filter((item) => item.haystack.includes(trimmed))
              : section.items,
          }))
          .filter((section) => section.items.length > 0),
      }))
      .filter((sheet) => sheet.sections.length > 0);
  }, [category, trimmed]);

  const shownItems = useMemo(
    () =>
      visible.reduce(
        (sum, sheet) => sum + sheet.sections.reduce((n, section) => n + section.items.length, 0),
        0,
      ),
    [visible],
  );

  const copy = useCallback(async (item) => {
    try {
      await navigator.clipboard.writeText(item.code);
      setCopiedKey(item.key);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopiedKey(null), 1800);
    } catch {
      /* clipboard blocked (insecure origin, permissions) — nothing to do */
    }
  }, []);

  const reset = useCallback(() => {
    setCategory('all');
    setQuery('');
  }, []);

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs items={[{ label: 'Cheat sheets' }]} className="mb-5 no-print" />

      <PageHeader icon="FileText" tone="teal"
        eyebrow="O Level · Revision"
        title="Cheat sheets"
        hindiTitle="चीट शीट्स"
        description="Tags, selectors, properties, directives, ports and status codes — every fragment you look up mid-exercise, grouped by the unit it belongs to and copyable in one tap."
        actions={
          <>
            <Button variant="secondary" icon={Code2} href="/playground" className="no-print">
              Open playground
            </Button>
            <Button
              variant="secondary"
              icon={Printer}
              iconOnly
              aria-label="Print these cheat sheets"
              onClick={() => window.print()}
              className="no-print"
            />
          </>
        }
        meta={[
          <MetaItem key="items" icon={Hash}>
            <span className="tabular-nums">{TOTAL_ITEMS}</span> entries
          </MetaItem>,
          <MetaItem key="sheets" icon={Layers}>
            <span className="tabular-nums">{SHEETS.length}</span> sheets
          </MetaItem>,
        ]}
      />

      {/* Filter bar — deliberately not sticky, so the section headers can be */}
      <div className="flex flex-col gap-2.5 no-print">
        <div className="flex items-center gap-3">
          <div className="relative flex-1 min-w-0">
            <label htmlFor="cheat-sheet-search" className="sr-only">Search cheat sheets</label>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-4"
              aria-hidden="true"
            />
            <input
              id="cheat-sheet-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search a tag, property or code, e.g. flex, 404, ng-model…"
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
            <span className="tabular-nums font-semibold text-ink">{shownItems}</span>
            <span className="hidden sm:inline"> of </span>
            <span className="sm:hidden">/</span>
            <span className="tabular-nums">{TOTAL_ITEMS}</span>
          </p>
        </div>

        <div
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar -my-1 py-1"
          role="group"
          aria-label="Filter cheat sheets by category"
        >
          <FilterChip active={category === 'all'} onClick={() => setCategory('all')}>
            All
          </FilterChip>
          {CATEGORIES.map((name) => (
            <FilterChip key={name} active={category === name} onClick={() => setCategory(name)}>
              {name}
            </FilterChip>
          ))}
        </div>
      </div>

      {/* Quick jump */}
      {visible.length ? (
        <nav aria-label="Jump to a section" className="mt-5 panel overflow-hidden no-print">
          <button
            type="button"
            onClick={() => setJumpOpen((value) => !value)}
            aria-expanded={jumpOpen}
            aria-controls="cheat-sheet-jump"
            className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left"
          >
            <span className="eyebrow">Jump to a section</span>
            <ChevronDown
              className={cx(
                'w-4 h-4 text-ink-3 transition-transform duration-fast',
                jumpOpen && 'rotate-180',
              )}
              aria-hidden="true"
            />
          </button>

          {jumpOpen ? (
            <div id="cheat-sheet-jump" className="px-4 pb-4 pt-1 border-t border-line space-y-3">
              {visible.map((sheet) => (
                <div key={sheet.id}>
                  <p className="text-xs font-semibold text-ink-3 mb-1.5">{sheet.title}</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {sheet.sections.map((section) => (
                      <li key={section.anchor}>
                        <a
                          href={`#${section.anchor}`}
                          className="inline-flex items-center h-11 sm:h-8 px-3 rounded-full border border-line
                                     bg-surface text-xs font-medium text-ink-2
                                     hover:border-line-strong hover:text-ink transition-colors duration-fast"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
        </nav>
      ) : null}

      {visible.length ? (
        <div className="mt-4 divide-y divide-line">
          {visible.map((sheet) => (
            <section
              key={sheet.id}
              id={sheet.id}
              aria-labelledby={`${sheet.id}-title`}
              className={cx('py-10 first:pt-8', SCROLL_MT)}
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="accent">{sheet.category}</Badge>
                <Badge>Unit {sheet.unit}</Badge>
              </div>

              <h2 id={`${sheet.id}-title`} className="mt-2.5 text-h2 font-semibold text-ink">
                {sheet.title}
              </h2>
              {sheet.hindiTitle ? (
                <p className="mt-1 text-base text-hindi hindi-text" lang="hi">{sheet.hindiTitle}</p>
              ) : null}
              {sheet.description ? (
                <p className="mt-2.5 text-base text-ink-2 leading-relaxed max-w-measure">
                  {sheet.description}
                </p>
              ) : null}

              {sheet.sections.map((section) => (
                <section
                  key={section.anchor}
                  id={section.anchor}
                  aria-labelledby={`${section.anchor}-title`}
                  className={cx('mt-8', SCROLL_MT)}
                >
                  <h3
                    id={`${section.anchor}-title`}
                    className="sticky top-[var(--header-h)] z-10 bg-ground
                               flex items-baseline justify-between gap-3 py-2
                               border-b border-line-strong"
                  >
                    <span className="text-h4 font-semibold text-ink">{section.title}</span>
                    <span className="text-xs text-ink-4 tabular-nums shrink-0">
                      {section.items.length}
                    </span>
                  </h3>

                  <ul className="mt-1">
                    {section.items.map((item) => (
                      <Entry
                        key={item.key}
                        item={item}
                        copied={copiedKey === item.key}
                        onCopy={copy}
                      />
                    ))}
                  </ul>
                </section>
              ))}
            </section>
          ))}
        </div>
      ) : (
        <EmptyState
          className="mt-6"
          icon={Search}
          title="Nothing in the cheat sheets matches that"
          description={
            trimmed
              ? `No tag, property or description mentions “${query.trim()}”. Try a shorter fragment such as “flex” or “meta”.`
              : 'That category has no entries.'
          }
          action={
            <>
              <Button variant="secondary" onClick={reset}>Clear filters</Button>
              <Button variant="ghost" href="/playground">Try it in the playground</Button>
            </>
          }
        />
      )}
    </div>
  );
}
