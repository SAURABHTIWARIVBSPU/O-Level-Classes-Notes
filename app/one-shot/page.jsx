'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react';
import { unitsData } from '@/data/syllabusData';

export default function OneShotHubPage() {
  return (
    <div className="space-y-10 max-w-5xl mx-auto py-4">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold mb-3">
          <Clock className="w-3.5 h-3.5 text-brand-600" /> Rapid Exam Revision Mode
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          One-Shot Full Chapter Revision
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Need to revise a full unit in 15 minutes before your exam? Read all syllabus topics 
          consolidated into a single fast-scrolling, high-yield revision flow.
        </p>
      </div>

      {/* Units Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {unitsData.map((unit) => (
          <Link
            key={unit.unitNumber}
            href={`/one-shot/${unit.slug}`}
            className="group p-5 sm:p-6 rounded-xl border border-appborder bg-white dark:bg-slate-900 hover:border-brand-500/80 shadow-xs transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-bold mb-2.5">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider border bg-brand-50 text-brand-700 dark:bg-brand-950/80 dark:text-brand-300 border-brand-200 dark:border-brand-800">
                  UNIT 0{unit.unitNumber} ONE-SHOT
                </span>
                <span className="text-slate-400 font-medium text-[11px]">
                  {unit.totalHours} Hours • {unit.topics.length} Topics
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors leading-snug">
                {unit.title}
              </h3>
              <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-1 hindi-text">
                {unit.hindiTitle}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-brand-600 dark:text-brand-400">
              <span>Read Full Unit in 1-Shot</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
