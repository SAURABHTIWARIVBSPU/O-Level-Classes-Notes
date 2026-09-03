'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ChevronLeft, 
  BookOpen, 
  Clock, 
  HelpCircle, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  FileText
} from 'lucide-react';
import { cccChaptersData } from '@/data/cccSyllabusData';
import { cccTopicsData } from '@/data/cccTopicsData';

export default function CCCChapterHubPage({ params }) {
  const { chapterSlug } = params;
  const chapter = cccChaptersData.find((c) => c.slug === chapterSlug);

  if (!chapter) {
    notFound();
  }

  // Get all topics for this chapter
  const topics = cccTopicsData[chapterSlug] || [];

  return (
    <div className="space-y-10 py-4 max-w-7xl mx-auto">
      
      {/* Top Back Link */}
      <Link
        href="/ccc"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-600 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back to CCC Hub</span>
      </Link>

      {/* Chapter Hero Banner */}
      <div className="p-6 sm:p-8 rounded-xl bg-navy text-white border border-navy-800 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-accent-blue/20 text-sky-300 border border-accent-blue/30 text-xs font-mono font-bold">
            CHAPTER {chapter.chapterNumber}
          </span>
          <span className="px-3 py-1 rounded-lg bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-mono font-bold">
            {chapter.totalHours} Hours ({chapter.theoryHours}h Theory + {chapter.practicalHours}h Lab)
          </span>
          <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
            Weightage: {chapter.marksWeight}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          {chapter.title}
        </h1>

        <p className="text-lg sm:text-xl font-bold text-brand-400 hindi-text">
          {chapter.hindiTitle}
        </p>

        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          {chapter.description}
        </p>

        {/* Learning Outcomes */}
        <div className="pt-2 space-y-2 border-t border-navy-850">
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
            OFFICIAL LEARNING OUTCOMES:
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {chapter.learningOutcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick Action Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href={`/ccc/mcqs/${chapter.slug}`}
          className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-appborder hover:border-brand-500/80 transition-all flex items-center justify-between group shadow-xs cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block group-hover:text-brand-600 transition-colors">
                Chapter MCQs
              </span>
              <span className="text-[11px] text-slate-500">Practice questions</span>
            </div>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
        </Link>

        <Link
          href="/ccc/cheat-sheets"
          className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-appborder hover:border-brand-500/80 transition-all flex items-center justify-between group shadow-xs cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block group-hover:text-brand-600 transition-colors">
                LibreOffice Shortcuts
              </span>
              <span className="text-[11px] text-slate-500">Quick syntax cards</span>
            </div>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
        </Link>

        <Link
          href="/ccc/mock-test"
          className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-appborder hover:border-brand-500/80 transition-all flex items-center justify-between group shadow-xs cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block group-hover:text-brand-600 transition-colors">
                100-Mark Mock Test
              </span>
              <span className="text-[11px] text-slate-500">Timed exam simulator</span>
            </div>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
        </Link>
      </div>

      {/* Topics Directory */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            Lesson Notes ({topics.length} Topics)
          </h2>
          <span className="text-xs font-mono text-slate-500 font-semibold">
            18-Part Bilingual Structure
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((t, idx) => (
            <Link
              key={t.slug}
              href={`/ccc/chapters/${chapter.slug}/topics/${t.slug}`}
              className="p-5 sm:p-6 rounded-xl border border-appborder bg-white dark:bg-slate-900 hover:border-brand-500/80 shadow-xs transition-all flex flex-col justify-between space-y-3 group cursor-pointer"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider border bg-accent-blue/10 text-accent-blue border-accent-blue/20">
                    TOPIC {idx + 1}
                  </span>
                  <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">
                    {t.examImportance}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                  {t.title}
                </h3>
                
                <p className="text-xs font-bold text-brand-600 dark:text-brand-400 hindi-text">
                  {t.hindiTitle}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {t.simpleWords}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-brand-600 dark:text-brand-400">
                <span>Start Lesson →</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
