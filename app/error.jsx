'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Unhandled Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 shadow-xs border border-amber-200 dark:border-amber-900">
        <AlertTriangle className="w-8 h-8" />
      </div>
      
      <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2">
        Something Went Wrong
      </h1>
      
      <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
        An unexpected error occurred while loading this educational module. You can try refreshing the view or returning home.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Try Again</span>
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-appborder bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
