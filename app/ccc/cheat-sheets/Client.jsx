'use client';

/**
 * CCC — cheat sheets.
 *
 * The four CCC reference tables (Writer / Calc / Impress shortcuts and the
 * USSD + helpline codes) as one lookup surface: sticky section headers, a
 * category filter, a text filter, a jump list, and a copy control on every
 * fragment. Keyboard shortcuts are marked up as <kbd>, dial codes as <code>.
 */

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Check, Copy, CreditCard, Hash, Keyboard, Printer, Search, X } from 'lucide-react';
import {
  Breadcrumbs,
  Button,
  EmptyState,
  MetaItem,
  PageHeader,
  cx,
} from '@/components/ui';
import { cccCheatSheetsData } from '@/data/cccCheatSheetsData';

/* ------------------------------------------------------------------ data */

const GROUP_SPEC = [
  {
    id: 'cs-writer',
    category: 'Writer',
    title: 'LibreOffice Writer (.odt) essential shortcuts',
    source: 'writerShortcuts',
    kind: 'kbd',
  },
  {
    id: 'cs-calc',
    category: 'Calc',
    title: 'LibreOffice Calc (.ods) cell & navigation shortcuts',
    source: 'calcShortcuts',
    kind: 'kbd',
  },
  {
    id: 'cs-impress',
    category: 'Impress',
    title: 'LibreOffice Impress (.odp) slide show shortcuts',
    source: 'impressShortcuts',
    kind: 'kbd',
  },
  {
    id: 'cs-finance',
    category: 'Finance',
    title: 'USSD banking & national helplines',
    source: 'financialShortcuts',
    kind: 'code',
  },
];

const GROUPS = GROUP_SPEC.map((spec) => ({
  ...spec,
  items: (cccCheatSheetsData[spec.source] || []).map((row, i) => {
    const code = row.key || row.code || '';
    const desc = row.action || row.service || '';
    return {
      key: `${spec.id}-${i}`,
      code,
      desc,
      haystack: [code, desc, spec.title, spec.category].join(' ').toLowerCase(),
    };
  }),
}));

const CATEGORIES = GROUPS.map((g) => g.category);
const TOTAL_ITEMS = GROUPS.reduce((sum, group) => sum + group.items.length, 0);

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

const FRAGMENT_CLASS =
  'col-start-1 row-start-1 justify-self-start max-w-full font-mono text-sm font-medium text-ink ' +
  'bg-sunken border border-line rounded-md px-1.5 py-0.5 [overflow-wrap:anywhere]';

function Entry({ item, kind, copied, onCopy }) {
  const Fragment = kind === 'kbd' ? 'kbd' : 'code';

  return (
    <li
      className="grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)_auto]
                 gap-x-3 items-start py-2.5 border-b border-line last:border-b-0"
    >
      <Fragment className={FRAGMENT_CLASS}>{item.code}</Fragment>

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
                   text-sm text-ink-2 leading-relaxed"
      >
        {item.desc}
      </p>
    </li>
  );
}

/* ------------------------------------------------------------------ page */

export default function CccCheatSheetsClient() {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [copiedKey, setCopiedKey] = useState(null);
  const copyTimer = useRef(null);

  const trimmed = query.trim().toLowerCase();

  const visible = useMemo(
    () =>
      GROUPS.filter((group) => category === 'all' || group.category === category)
        .map((group) => ({
          ...group,
          items: trimmed
            ? group.items.filter((item) => item.haystack.includes(trimmed))
            : group.items,
        }))
        .filter((group) => group.items.length > 0),
    [category, trimmed],
  );

  const shownItems = useMemo(
    () => visible.reduce((sum, group) => sum + group.items.length, 0),
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
      <Breadcrumbs
        items={[{ label: 'CCC', href: '/ccc' }, { label: 'Cheat sheets' }]}
        className="mb-5 no-print"
      />

      <PageHeader icon="FileText" tone="teal"
        eyebrow="CCC · Revision"
        title="Cheat sheets"
        hindiTitle="चीट शीट्स"
        description="LibreOffice keyboard shortcuts for Writer, Calc and Impress, plus the USSD banking and national helpline numbers the CCC paper asks for. Every entry copies in one tap."
        actions={
          <Button
            variant="secondary"
            icon={Printer}
            iconOnly
            aria-label="Print these cheat sheets"
            onClick={() => window.print()}
            className="no-print"
          />
        }
        meta={[
          <MetaItem key="items" icon={Hash}>
            <span className="tabular-nums">{TOTAL_ITEMS}</span> entries
          </MetaItem>,
          <MetaItem key="kbd" icon={Keyboard}>
            <span className="tabular-nums">
              {GROUPS.filter((g) => g.kind === 'kbd').reduce((n, g) => n + g.items.length, 0)}
            </span>{' '}
            shortcuts
          </MetaItem>,
          <MetaItem key="codes" icon={CreditCard}>
            <span className="tabular-nums">
              {GROUPS.filter((g) => g.kind === 'code').reduce((n, g) => n + g.items.length, 0)}
            </span>{' '}
            dial codes
          </MetaItem>,
        ]}
      />

      {/* Filter bar — not sticky, so the section headers can be */}
      <div className="flex flex-col gap-2.5 no-print">
        <div className="flex items-center gap-3">
          <div className="relative flex-1 min-w-0">
            <label htmlFor="ccc-cheat-sheet-search" className="sr-only">Search cheat sheets</label>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-4"
              aria-hidden="true"
            />
            <input
              id="ccc-cheat-sheet-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search a shortcut or code, e.g. Ctrl + P, *99#…"
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
      {visible.length > 1 ? (
        <nav aria-label="Jump to a section" className="mt-5 no-print">
          <ul className="flex flex-wrap gap-1.5">
            {visible.map((group) => (
              <li key={group.id}>
                <a
                  href={`#${group.id}`}
                  className="inline-flex items-center h-11 sm:h-8 px-3 rounded-full border border-line
                             bg-surface text-xs font-medium text-ink-2
                             hover:border-line-strong hover:text-ink transition-colors duration-fast"
                >
                  {group.category}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      {visible.length ? (
        <div className="mt-2 divide-y divide-line">
          {visible.map((group) => (
            <section
              key={group.id}
              id={group.id}
              aria-labelledby={`${group.id}-title`}
              className={cx('py-8', SCROLL_MT)}
            >
              <h2
                id={`${group.id}-title`}
                className="sticky top-[var(--header-h)] z-10 bg-ground
                           flex items-baseline justify-between gap-3 py-2 border-b border-line-strong"
              >
                <span className="text-h4 sm:text-h3 font-semibold text-ink">{group.title}</span>
                <span className="text-xs text-ink-4 tabular-nums shrink-0">{group.items.length}</span>
              </h2>

              <ul className="mt-1">
                {group.items.map((item) => (
                  <Entry
                    key={item.key}
                    item={item}
                    kind={group.kind}
                    copied={copiedKey === item.key}
                    onCopy={copy}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <EmptyState
          className="mt-6"
          icon={Search}
          title="No shortcut matches that"
          description={
            trimmed
              ? `Nothing here mentions “${query.trim()}”. Try just the key, such as “Ctrl” or “F5”.`
              : 'That category has no entries.'
          }
          action={
            <>
              <Button variant="secondary" onClick={reset}>Clear filters</Button>
              <Button variant="ghost" href="/ccc/one-liners">Browse one-liners</Button>
            </>
          }
        />
      )}
    </div>
  );
}
