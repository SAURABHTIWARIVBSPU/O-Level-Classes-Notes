'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Code2, Sparkles, BookOpen, FileText, Table, Presentation, CreditCard } from 'lucide-react';
import { cccCheatSheetsData } from '@/data/cccCheatSheetsData';

export default function CCCCheatSheetsPage() {
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
            MASTER SHORTCUT CARDS
          </span>
          <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/30 font-mono text-xs font-bold">
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
      <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-appborder shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
          <FileText className="w-5 h-5 text-accent-blue" />
          <span>LibreOffice Writer (.odt) Essential Shortcuts</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {cccCheatSheetsData.writerShortcuts.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-appborder flex items-center justify-between text-xs"
            >
              <span className="text-slate-700 dark:text-slate-300 font-medium">{item.action}</span>
              <code className="px-2 py-0.5 rounded-md bg-accent-blue/10 text-accent-blue border border-accent-blue/20 font-mono font-bold text-[11px]">
                {item.key}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* 2. LibreOffice Calc Shortcuts */}
      <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-appborder shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
          <Table className="w-5 h-5 text-emerald-600" />
          <span>LibreOffice Calc (.ods) Cell &amp; Navigation Shortcuts</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {cccCheatSheetsData.calcShortcuts.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-appborder flex items-center justify-between text-xs"
            >
              <span className="text-slate-700 dark:text-slate-300 font-medium">{item.action}</span>
              <code className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-mono font-bold text-[11px]">
                {item.key}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* 3. LibreOffice Impress Shortcuts */}
      <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-appborder shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
          <Presentation className="w-5 h-5 text-amber-500" />
          <span>LibreOffice Impress (.odp) Slide Show Shortcuts</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {cccCheatSheetsData.impressShortcuts.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-appborder flex items-center justify-between text-xs"
            >
              <span className="text-slate-700 dark:text-slate-300 font-medium">{item.action}</span>
              <code className="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-mono font-bold text-[11px]">
                {item.key}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Digital Finance & Emergency Codes */}
      <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-appborder shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
          <CreditCard className="w-5 h-5 text-purple-600" />
          <span>USSD Banking &amp; National Helplines</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {cccCheatSheetsData.financialShortcuts.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-appborder flex items-center justify-between text-xs"
            >
              <span className="text-slate-700 dark:text-slate-300 font-medium">{item.service}</span>
              <code className="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-mono font-bold text-[11px]">
                {item.code}
              </code>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
