import React from 'react';

/**
 * A skeleton in the shape of a real page — header, then a text column —
 * rather than a spinner in an empty viewport. It keeps the layout stable so
 * nothing jumps when the content arrives.
 */
export default function Loading() {
  return (
    <div className="shell py-8 sm:py-10" role="status" aria-label="Loading">
      <span className="sr-only">Loading…</span>

      <div className="pb-6 mb-8 border-b border-line">
        <div className="skeleton h-3 w-24 mb-4" />
        <div className="skeleton h-8 w-3/4 max-w-lg mb-3" />
        <div className="skeleton h-4 w-1/2 max-w-sm" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_13rem]">
        <div className="max-w-measure space-y-8">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-2.5">
              <div className="skeleton h-5 w-40" />
              <div className="skeleton h-3.5 w-full" />
              <div className="skeleton h-3.5 w-full" />
              <div className="skeleton h-3.5 w-11/12" />
              <div className="skeleton h-3.5 w-3/5" />
            </div>
          ))}
        </div>

        <div className="hidden lg:block space-y-2">
          <div className="skeleton h-3 w-20 mb-3" />
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="skeleton h-3 w-full" style={{ opacity: 1 - i * 0.12 }} />
          ))}
        </div>
      </div>
    </div>
  );
}
