'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Columns, Sparkles, BookOpen } from 'lucide-react';
import { cccDifferencesData } from '@/data/cccDifferencesData';

export default function CCCDifferencesPage() {
  return (
    <div className="space-y-8 py-4 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <Link
          href="/ccc"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to CCC Hub</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 font-mono text-xs font-bold">
            SIDE-BY-SIDE COMPARISONS
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold">
            {cccDifferencesData.length} Core Tables
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          CCC Concept Comparison Tables
        </h1>

        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          Side-by-side comparison tables to resolve common confusions in NIELIT CCC: RAM vs ROM, NEFT vs RTGS vs IMPS, IPv4 vs IPv6, and LibreOffice vs MS Office.
        </p>
      </div>

      {/* Difference Tables */}
      <div className="space-y-8">
        {cccDifferencesData.map((diff) => (
          <div
            key={diff.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
          >
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {diff.title}
              </h2>
              <span className="text-xs text-slate-500 font-sans">
                {diff.englishTitle}
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3.5">तुलना का आधार (Parameter)</th>
                    <th className="p-3.5 text-blue-600 dark:text-blue-400">विकल्प 1</th>
                    <th className="p-3.5 text-emerald-600 dark:text-emerald-400">विकल्प 2</th>
                    {diff.table[0]?.col3 && (
                      <th className="p-3.5 text-purple-600 dark:text-purple-400">विकल्प 3</th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {diff.table.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white">{row.param}</td>
                      <td className="p-3.5">{row.col1}</td>
                      <td className="p-3.5">{row.col2}</td>
                      {row.col3 && <td className="p-3.5">{row.col3}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
