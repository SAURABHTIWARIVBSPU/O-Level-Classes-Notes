'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Columns, Sparkles, BookOpen } from 'lucide-react';
import { cccDifferencesData } from '@/data/cccDifferencesData';

const getColumnHeaders = (diff) => {
  if (diff.id === 'ram-vs-rom') return ['RAM', 'ROM'];
  if (diff.id === 'neft-vs-rtgs-vs-imps') return ['NEFT', 'RTGS', 'IMPS'];
  if (diff.id === 'ipv4-vs-ipv6') return ['IPv4', 'IPv6'];
  if (diff.id === 'libreoffice-vs-ms-office') return ['LibreOffice', 'Microsoft Office'];
  return ['विकल्प 1', 'विकल्प 2', 'विकल्प 3'];
};

export default function CCCDifferencesPage() {
  return (
    <div className="space-y-8 py-4 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="space-y-4 border-b border-appborder pb-6">
        <Link
          href="/ccc"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to CCC Hub</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 font-mono text-xs font-bold">
            SIDE-BY-SIDE COMPARISONS
          </span>
          <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/30 font-mono text-xs font-bold">
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
        {cccDifferencesData.map((diff) => {
          const headers = getColumnHeaders(diff);

          return (
            <div
              key={diff.id}
              className="p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-appborder shadow-xs space-y-4"
            >
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {diff.title}
                </h2>
                <span className="text-xs text-slate-500 font-sans">
                  {diff.englishTitle}
                </span>
              </div>

              <div className="table-responsive rounded-lg border border-appborder">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-bold border-b border-appborder">
                    <tr>
                      <th className="p-3.5">तुलना का आधार (Parameter)</th>
                      <th className="p-3.5 text-brand-600 dark:text-brand-400 font-extrabold">{headers[0]}</th>
                      <th className="p-3.5 text-navy dark:text-brand-300 font-extrabold">{headers[1]}</th>
                      {diff.table[0]?.col3 && (
                        <th className="p-3.5 text-accent-blue font-extrabold">{headers[2] || 'विकल्प 3'}</th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    {diff.table.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                        <td className="p-3.5 font-bold text-slate-900 dark:text-white">{row.param}</td>
                        <td className="p-3.5 font-medium">{row.col1}</td>
                        <td className="p-3.5 font-medium">{row.col2}</td>
                        {row.col3 && <td className="p-3.5 font-medium">{row.col3}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
