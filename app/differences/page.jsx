'use client';

import React, { useState } from 'react';
import { masterDifferences } from '@/data/differencesData';
import { Columns, Search, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function DifferencesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState(masterDifferences[0].id);

  const filteredDiffs = masterDifferences.filter((d) => 
    d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.hindiTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeDiff = masterDifferences.find((d) => d.id === selectedId) || masterDifferences[0];

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      
      {/* Header */}
      <div className="border-b border-appborder pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 text-xs font-bold mb-3">
          <Columns className="w-3.5 h-3.5 text-brand-600" /> 17 Side-by-Side Comparison Tables
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Concept Comparison &amp; Differences Cards
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Side-by-side comparative matrices resolving the most frequently confused concepts in 
          NIELIT exams, complete with golden comparison criteria and real-world analogies.
        </p>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Selector Sidebar (Col 1) */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter comparisons..."
              className="w-full pl-9 pr-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-1.5 max-h-[580px] overflow-y-auto pr-1">
            {filteredDiffs.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedId(d.id)}
                className={`w-full text-left p-3 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                  d.id === activeDiff.id
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 shadow-2xs'
                    : 'border-appborder bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-brand-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="truncate font-bold">{d.title}</span>
                  <span className="text-[10px] text-slate-400 font-mono shrink-0 ml-2">
                    Unit {d.unit}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-normal truncate mt-0.5 hindi-text">
                  {d.hindiTitle}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Table (Cols 2-3) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="border border-appborder rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-xs">
            
            {/* Table Header Banner */}
            <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-800/60 border-b border-appborder">
              <span className="text-[11px] font-bold text-brand-600 dark:text-brand-400 block mb-1">
                UNIT {activeDiff.unit} COMPARATIVE ANALYSIS
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {activeDiff.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 hindi-text">
                {activeDiff.hindiTitle}
              </p>
            </div>

            {/* Comparison Matrix Table */}
            {(() => {
              const titleParts = (activeDiff.title || '').split(/ vs\.? /i);
              const colA = activeDiff.itemA || titleParts[0] || 'Item A';
              const colB = activeDiff.itemB || titleParts[1] || 'Item B';
              const rows = activeDiff.comparison || activeDiff.criteria || [];

              return (
                <div className="table-responsive">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-appborder">
                      <tr>
                        <th className="p-3.5 w-1/4">Feature / Aspect</th>
                        <th className="p-3.5 text-brand-600 dark:text-brand-400">{colA}</th>
                        <th className="p-3.5 text-navy dark:text-brand-300">{colB}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {rows.map((c, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                          <td className="p-3.5 font-bold text-slate-900 dark:text-white bg-slate-50/40 dark:bg-slate-800/20">
                            {c.feature || c.name}
                          </td>
                          <td className="p-3.5 text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                            {c.itemA || c.valA}
                          </td>
                          <td className="p-3.5 text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                            {c.itemB || c.valB}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })()}

            {/* Bottom Real-World Analogy / Takeaway Box */}
            {(activeDiff.analogy || activeDiff.goldenTakeaway) && (
              <div className="p-5 bg-brand-50/60 dark:bg-brand-950/40 border-t border-brand-100 dark:border-brand-900 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-900 dark:text-brand-300 mb-1">
                    Real-World Analogy &amp; Exam Takeaway (वास्तविक जीवन का उदाहरण)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeDiff.analogy || activeDiff.goldenTakeaway}
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
