'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Code2, Sparkles, BookOpen, FileText, Table, Presentation, CreditCard } from 'lucide-react';
import { cccCheatSheetsData } from '@/data/cccCheatSheetsData';

export default function CCCCheatSheetsPage() {
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
          <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-bold">
            MASTER SHORTCUT CARDS
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold">
            LibreOffice &amp; Finance
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          LibreOffice &amp; Digital Finance Cheat Sheets
        </h1>

        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          Complete high-yield keyboard shortcuts for LibreOffice Writer, Calc, Impress, and essential Indian digital banking USSD and helpline codes.
        </p>
      </div>

      {/* 1. LibreOffice Writer Shortcuts */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
          <FileText className="w-5 h-5 text-blue-600" />
          <span>LibreOffice Writer (.odt) Essential Shortcuts</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cccCheatSheetsData.writerShortcuts.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs"
            >
              <span className="text-slate-700 dark:text-slate-300 font-medium">{item.action}</span>
              <code className="px-2 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-mono font-bold">
                {item.key}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* 2. LibreOffice Calc Shortcuts */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
          <Table className="w-5 h-5 text-emerald-600" />
          <span>LibreOffice Calc (.ods) Cell &amp; Navigation Shortcuts</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cccCheatSheetsData.calcShortcuts.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs"
            >
              <span className="text-slate-700 dark:text-slate-300 font-medium">{item.action}</span>
              <code className="px-2 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-mono font-bold">
                {item.key}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* 3. LibreOffice Impress Shortcuts */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
          <Presentation className="w-5 h-5 text-amber-500" />
          <span>LibreOffice Impress (.odp) Slide Show Shortcuts</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cccCheatSheetsData.impressShortcuts.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs"
            >
              <span className="text-slate-700 dark:text-slate-300 font-medium">{item.action}</span>
              <code className="px-2 py-1 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-mono font-bold">
                {item.key}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Digital Finance & Emergency Codes */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
          <CreditCard className="w-5 h-5 text-purple-600" />
          <span>USSD Banking &amp; National Helplines</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cccCheatSheetsData.financialShortcuts.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs"
            >
              <span className="text-slate-700 dark:text-slate-300 font-medium">{item.service}</span>
              <code className="px-2 py-1 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-mono font-bold">
                {item.code}
              </code>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
