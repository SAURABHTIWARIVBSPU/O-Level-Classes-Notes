'use client';

import React, { useState } from 'react';
import { masterCheatSheets } from '@/data/cheatSheetsData';
import { FileText, Copy, Check, ExternalLink, Code2, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function CheatSheetsPage() {
  const [activeCategory, setActiveCategory] = useState(masterCheatSheets[0].id);
  const [copiedKey, setCopiedKey] = useState(null);

  const activeSheet = masterCheatSheets.find((s) => s.id === activeCategory) || masterCheatSheets[0];

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-3">
            <FileText className="w-3.5 h-3.5" /> High-Density Quick Reference
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Master Cheat Sheets &amp; Syntax Reference
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Instant syntax lookups, tag catalogs, selector formulas, and framework utility classes 
            for HTML5, CSS3, W3.CSS, JavaScript, and Web Publishing.
          </p>
        </div>

        <Link
          href="/playground"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-sm transition-all"
        >
          <Code2 className="w-4 h-4" />
          Test Syntax in Playground
        </Link>
      </div>

      {/* Category Pills Selector */}
      <div className="flex flex-wrap gap-2 pb-2">
        {masterCheatSheets.map((sheet) => (
          <button
            key={sheet.id}
            onClick={() => setActiveCategory(sheet.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
              sheet.id === activeSheet.id
                ? 'bg-brand-600 text-white shadow-brand-500/20'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
            }`}
          >
            {sheet.title}
          </button>
        ))}
      </div>

      {/* Sheet Content Display */}
      <div className="space-y-6">
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {activeSheet.title}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {activeSheet.description}
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeSheet.sections.map((sec, secIdx) => (
            <div
              key={secIdx}
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="px-4 py-3 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    {sec.title}
                  </h3>
                </div>

                <div className="p-4 divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                  {(sec.items || []).map((item, itemIdx) => {
                    const copyKey = `${secIdx}-${itemIdx}`;
                    const isCopied = copiedKey === copyKey;
                    const codeSnippet = item.code || item.syntax;
                    return (
                      <div key={itemIdx} className="py-2.5 flex items-start justify-between gap-3 group">
                        <div>
                          <code className="text-brand-600 dark:text-brand-400 font-mono font-bold bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                            {codeSnippet}
                          </code>
                          <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        <button
                          onClick={() => handleCopy(codeSnippet, copyKey)}
                          className="text-slate-400 hover:text-brand-600 transition-colors p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 opacity-0 group-hover:opacity-100 shrink-0"
                          title="Copy syntax"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {sec.footerNote && (
                <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{sec.footerNote}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
