'use client';

import React from 'react';
import Link from 'next/link';
import { 
  HelpCircle, 
  BookOpen, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ChevronLeft
} from 'lucide-react';
import { cccChaptersData } from '@/data/cccSyllabusData';
import { cccMcqsData } from '@/data/cccMcqsData';

export default function CCCMCQsPortalPage() {
  return (
    <div className="space-y-10 py-4 max-w-7xl mx-auto">
      
      {/* Header Banner */}
      <div className="space-y-4 border-b border-appborder pb-8">
        <Link
          href="/ccc"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to CCC Hub</span>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 font-mono text-xs font-bold">
            200+ OFFICIAL EXAM QUESTIONS
          </span>
          <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/30 font-mono text-xs font-bold">
            Chapter-Wise MCQs &amp; True/False
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          CCC Chapter-Wise MCQ Question Bank
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          Practice official NIELIT CCC exam questions chapter by chapter with bilingual English and Hindi explanations, instant score checking, and answer review.
        </p>
      </div>

      {/* Chapter Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cccChaptersData.map((ch) => {
          const chapterMcqs = cccMcqsData.filter((m) => m.chapterSlug === ch.slug);
          return (
            <div
              key={ch.slug}
              className="p-5 sm:p-6 rounded-xl border border-appborder bg-white dark:bg-slate-900 hover:border-brand-500/80 transition-all flex flex-col justify-between space-y-4 shadow-xs group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider border bg-accent-blue/10 text-accent-blue border-accent-blue/20">
                    CHAPTER {ch.chapterNumber}
                  </span>
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 font-mono">
                    {chapterMcqs.length || 15}+ Questions
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                  {ch.title}
                </h3>
                
                <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 hindi-text">
                  {ch.hindiTitle}
                </p>

                <p className="text-xs text-slate-500 line-clamp-2">
                  {ch.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={`/ccc/mcqs/${ch.slug}`}
                  className="w-full py-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-brand-500 group-hover:text-white text-slate-700 dark:text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Practice Chapter {ch.chapterNumber} MCQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
