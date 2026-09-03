'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, HelpCircle, BookOpen, Award } from 'lucide-react';
import { cccChaptersData } from '@/data/cccSyllabusData';
import { cccMcqsData } from '@/data/cccMcqsData';
import ExamEngine from '@/components/mcq/ExamEngine';

export default function CCCChapterMCQsPage({ params }) {
  const { chapterSlug } = params;
  const chapter = cccChaptersData.find((c) => c.slug === chapterSlug);

  if (!chapter) {
    notFound();
  }

  // Get MCQs for this chapter (or fall back to all if needed)
  let mcqs = cccMcqsData.filter((m) => m.chapterSlug === chapterSlug);
  if (mcqs.length === 0) {
    mcqs = cccMcqsData.slice(0, 10);
  }

  return (
    <div className="space-y-8 py-4 max-w-4xl mx-auto">
      
      {/* Top Back Link */}
      <div className="flex items-center justify-between border-b border-appborder pb-4">
        <Link
          href="/ccc/mcqs"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Chapter MCQs</span>
        </Link>

        <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400">
          Chapter {chapter.chapterNumber} Practice
        </span>
      </div>

      {/* Header Info */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-accent-blue/10 text-accent-blue border border-accent-blue/20 font-mono text-xs font-bold">
            CHAPTER {chapter.chapterNumber}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold">
            {mcqs.length} Questions
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
          {chapter.title} — Practice MCQs
        </h1>
        
        <p className="text-sm font-bold text-brand-600 dark:text-brand-400 hindi-text">
          {chapter.hindiTitle}
        </p>
      </div>

      {/* Interactive Exam Engine */}
      <ExamEngine questions={mcqs} title={`CCC Chapter ${chapter.chapterNumber}: ${chapter.title}`} />

    </div>
  );
}
