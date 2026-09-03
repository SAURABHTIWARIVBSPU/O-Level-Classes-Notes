import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-900 flex items-center justify-center mb-6 shadow-xs">
        <span className="text-2xl font-black">404</span>
      </div>
      <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2">
        Page Not Found
      </h1>
      <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
        The lesson, topic, or page you are looking for does not exist or may have been moved.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/syllabus"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-appborder bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>View Syllabus</span>
        </Link>
      </div>
    </div>
  );
}
