import React from 'react';

export default function GlobalLoading() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-6 animate-pulse">
      {/* Header skeleton */}
      <div className="space-y-3 pb-6 border-b border-appborder">
        <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded-lg" />
        <div className="h-9 w-3/4 max-w-lg bg-slate-200 dark:bg-slate-800 rounded-xl" />
        <div className="h-4 w-full max-w-xl bg-slate-200 dark:bg-slate-800 rounded-lg" />
      </div>

      {/* Content cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
        <div className="h-40 rounded-2xl bg-white dark:bg-slate-900 border border-appborder p-6 space-y-3">
          <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-6 w-48 bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-12 w-full bg-slate-100 dark:bg-slate-800/60 rounded-xl" />
        </div>
        <div className="h-40 rounded-2xl bg-white dark:bg-slate-900 border border-appborder p-6 space-y-3">
          <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-6 w-48 bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-12 w-full bg-slate-100 dark:bg-slate-800/60 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
