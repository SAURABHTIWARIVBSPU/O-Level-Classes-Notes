'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { unitsData } from '@/data/syllabusData';
import { topicsByUnit } from '@/data/topicsData';
import { ArrowLeft, BookOpen, CheckCircle2, Bookmark, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

export default function UnitOneShotPage({ params }) {
  const { unitSlug } = params;
  const unit = unitsData.find((u) => u.slug === unitSlug);

  if (!unit) {
    notFound();
  }

  const topics = topicsByUnit[unit.unitNumber] || [];
  const { language } = useLanguage();

  return (
    <div className="space-y-10 max-w-4xl mx-auto py-4">
      
      {/* Header */}
      <div>
        <Link
          href="/one-shot"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-600 transition-colors mb-3"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to One-Shot Hub
        </Link>

        <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 font-mono block mb-1">
            ONE-SHOT RAPID REVISION • UNIT 0{unit.unitNumber}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {unit.title}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 hindi-text">
            {unit.hindiTitle}
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs font-semibold text-slate-500">
            <span>{topics.length} Syllabus Topics</span>
            <span>•</span>
            <span>Estimated Reading Time: 15 Minutes</span>
          </div>
        </div>
      </div>

      {/* Table of Contents Pill Bar */}
      <div className="p-4 rounded-xl border border-appborder bg-white dark:bg-slate-900 shadow-xs">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
          Jump to Topic:
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {topics.map((t, idx) => (
            <a
              key={t.slug}
              href={`#topic-${t.slug}`}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-50 hover:text-brand-600 transition-colors"
            >
              {idx + 1}. {t.title.split(' ')[0]}
            </a>
          ))}
        </div>
      </div>

      {/* Topics Rapid-Revision Stream */}
      <div className="space-y-6 sm:space-y-8">
        {topics.map((topic, idx) => (
          <div
            key={topic.slug}
            id={`topic-${topic.slug}`}
            className="border border-appborder rounded-xl p-5 sm:p-6 bg-white dark:bg-slate-900 shadow-xs space-y-4 scroll-mt-20"
          >
            {/* Topic Header */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
              <span className="text-xs font-bold font-mono text-brand-600 dark:text-brand-400">
                #{idx + 1} of {topics.length}
              </span>
              <Link
                href={`/units/${unit.slug}/topics/${topic.slug}`}
                className="flex items-center gap-1 text-xs font-bold text-brand-600 hover:underline"
              >
                <span>Open Full 18-Part Notes</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {topic.title}
            </h3>

            {/* Bilingual Definitions */}
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {(language === 'both' || language === 'en') && (
                <p>
                  <strong>Definition:</strong> {topic.definitionEnglish}
                </p>
              )}
              {(language === 'both' || language === 'hi') && topic.definitionHindi && (
                <p className="hindi-text text-slate-600 dark:text-slate-400">
                  <strong>हिन्दी:</strong> {topic.definitionHindi}
                </p>
              )}
            </div>

            {/* In Simple Words */}
            {topic.simpleWords && (
              <div className="p-3.5 rounded-lg bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 text-xs text-slate-700 dark:text-slate-300">
                <strong>साधारण शब्दों में:</strong> {topic.simpleWords}
              </div>
            )}

            {/* Golden Points */}
            {topic.importantPoints && topic.importantPoints.length > 0 && (
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block">
                  Key Exam Points:
                </span>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {topic.importantPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Revision Box */}
            {topic.quickRevision && (
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/80 text-[11px] font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                <span><strong className="text-brand-600 dark:text-brand-400">Quick Revision:</strong> {topic.quickRevision}</span>
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  );
}
