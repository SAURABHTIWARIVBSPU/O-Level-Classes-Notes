'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  FileText, 
  HelpCircle,
  Sparkles,
  Layers,
  Flame,
  ChevronLeft
} from 'lucide-react';
import { cccChaptersData } from '@/data/cccSyllabusData';
import { cccTopicsData } from '@/data/cccTopicsData';
import { useProgress } from '@/lib/progressContext';

export default function CCCChapterPage({ params }) {
  const { chapterSlug } = params;
  const chapter = cccChaptersData.find((c) => c.slug === chapterSlug);

  if (!chapter) {
    notFound();
  }

  const topics = cccTopicsData[chapterSlug] || [];
  const { completedTopics } = useProgress();

  return (
    <div className="space-y-10 py-4 max-w-7xl mx-auto">
      
      {/* Top Back Link */}
      <Link
        href="/ccc"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back to CCC Hub</span>
      </Link>

      {/* Chapter Hero Banner */}
      <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono font-bold">
            CHAPTER {chapter.chapterNumber}
          </span>
          <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
            {chapter.totalHours} Hours ({chapter.theoryHours}h Theory + {chapter.practicalHours}h Lab)
          </span>
          <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
            Weightage: {chapter.marksWeight}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          {chapter.title}
        </h1>

        <p className="text-lg sm:text-xl font-bold text-teal-400 hindi-text">
          {chapter.hindiTitle}
        </p>

        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          {chapter.description}
        </p>

        {/* Learning Outcomes */}
        <div className="pt-2 space-y-2 border-t border-slate-800">
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
          className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-between group shadow-2xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block group-hover:text-emerald-600 transition-colors">
                Chapter MCQs
              </span>
              <span className="text-[11px] text-slate-500">Practice questions</span>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
        </Link>

        <Link
          href="/ccc/cheat-sheets"
          className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all flex items-center justify-between group shadow-2xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block group-hover:text-blue-600 transition-colors">
                LibreOffice Shortcuts
              </span>
              <span className="text-[11px] text-slate-500">Quick syntax cards</span>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
        </Link>

        <Link
          href="/ccc/mock-test"
          className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 transition-all flex items-center justify-between group shadow-2xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block group-hover:text-amber-600 transition-colors">
                100-Mark Mock Test
              </span>
              <span className="text-[11px] text-slate-500">Timed exam simulator</span>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
        </Link>
      </div>

      {/* Topics Directory */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900 dark:text-white">
            Lesson Notes ({topics.length} Topics)
          </h2>
          <span className="text-xs font-mono text-slate-500 font-bold">
            18-Part Bilingual Structure
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((t, idx) => (
            <Link
              key={t.slug}
              href={`/ccc/chapters/${chapter.slug}/topics/${t.slug}`}
              className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    TOPIC {idx + 1}
                  </span>
                  <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">
                    {t.examImportance}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {t.title}
                </h3>
                
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400 hindi-text">
                  {t.hindiTitle}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {t.simpleWords}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-blue-600">
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
