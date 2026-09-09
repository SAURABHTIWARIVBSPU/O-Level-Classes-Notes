'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * Tables are a primary learning surface here (RAM vs ROM, GET vs POST, …), so
 * they get real design rather than a raw <table>.
 *
 * ScrollTable      — any table; adds a horizontal-scroll affordance when the
 *                    content is wider than the viewport.
 * ComparisonTable  — the 3-column "aspect / A / B" shape used across the
 *                    Differences data. On narrow screens each row becomes a
 *                    stacked block, because a 3-column table at 320px is not
 *                    readable no matter how it is styled.
 */

export function ScrollTable({ children, className = '' }) {
  const ref = useRef(null);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const check = () => setOverflowing(el.scrollWidth > el.clientWidth + 4);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className={`table-wrap ${className}`}>
      <div ref={ref} className="table-scroll" data-overflowing={overflowing} tabIndex={0}>
        {children}
      </div>
    </div>
  );
}

export function ComparisonTable({
  rows = [],
  labelA,
  labelB,
  labelC,
  aspectLabel = 'Aspect',
  caption,
  className = '',
}) {
  if (!rows.length) return null;

  // Several syllabus comparisons are three-way (ol/ul/dl, NEFT/RTGS/IMPS).
  const cols = [
    { label: labelA, key: 'a' },
    { label: labelB, key: 'b' },
    ...(labelC ? [{ label: labelC, key: 'c' }] : []),
  ];

  return (
    <div className={className}>
      {/* Desktop / tablet: a real comparison table */}
      <div className="hidden sm:block">
        <ScrollTable>
          <table>
            {caption ? <caption className="sr-only">{caption}</caption> : null}
            <thead>
              <tr>
                <th scope="col" className={cols.length > 2 ? 'w-[20%]' : 'w-[24%]'}>{aspectLabel}</th>
                {cols.map((c) => <th key={c.key} scope="col">{c.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <th scope="row" className="!normal-case !tracking-normal !text-sm !font-semibold !text-ink !bg-transparent !static px-3.5 py-2.5 border-b border-line text-left align-top">
                    {row.aspect}
                  </th>
                  {cols.map((c) => <td key={c.key}>{row[c.key]}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollTable>
      </div>

      {/* Mobile: stacked pairs — same information, readable at 320px */}
      <ul className="sm:hidden space-y-2.5">
        {rows.map((row, i) => (
          <li key={i} className="panel overflow-hidden">
            <p className="px-3.5 py-2 bg-sunken border-b border-line text-sm font-semibold text-ink">
              {row.aspect}
            </p>
            <dl className="divide-y divide-line">
              {cols.map((c) => (
                <div key={c.key} className="px-3.5 py-2.5">
                  <dt className="eyebrow mb-1">{c.label}</dt>
                  <dd className="text-base text-ink-2 leading-relaxed [overflow-wrap:anywhere]">{row[c.key]}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScrollTable;
