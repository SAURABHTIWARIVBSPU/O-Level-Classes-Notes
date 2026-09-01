'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { unitsData } from '@/data/syllabusData';
import { topicsByUnit } from '@/data/topicsData';
import { useProgress } from '@/lib/progressContext';
import { 
  BookOpen, 
  Clock, 
  Award, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  ArrowLeft, 
  HelpCircle, 
  Presentation, 
  Flame,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  BarChart3
} from 'lucide-react';

export default function UnitOverviewPage({ params }) {
  const { unitSlug } = params;
  const unitIndex = unitsData.findIndex((u) => u.slug === unitSlug);
  const unit = unitsData[unitIndex];

  if (!unit) {
    notFound();
  }

  const prevUnit = unitIndex > 0 ? unitsData[unitIndex - 1] : null;
  const nextUnit = unitIndex < unitsData.length - 1 ? unitsData[unitIndex + 1] : null;

  const topics = unit.topics || topicsByUnit[unit.unitNumber] || [];
  const { completedTopics, toggleTopicCompleted } = useProgress();

  const completedCount = topics.filter((t) => completedTopics.includes(t.slug)).length;
  const unitProgress = topics.length > 0 ? Math.round((completedCount / topics.length) * 100) : 0;

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      
      {/* ================= 1. Breadcrumb & Back Link ================= */}
      <div className="flex items-center justify-between">
        <Link
          href="/syllabus"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Full Syllabus Blueprint
        </Link>
        <span className="text-xs font-mono font-bold text-slate-400">
          Module M2-R5.1 • NIELIT
        </span>
      </div>

      {/* ================= 2. Hero Banner ================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white shadow-xl border border-slate-700/60 relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-mono font-bold tracking-wider">
              <span>UNIT {unit.unitNumber}</span>
              <span>•</span>
              <span>Section {unit.officialSection || '16.6'}</span>
            </div>

            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold font-mono">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{unit.marksWeight || 'Exam Core'}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
            {unit.title}
          </h1>

          <p className="text-sm sm:text-base text-brand-300 font-bold hindi-text">
            {unit.hindiTitle}
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
            {unit.description}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {topics.length > 0 && (
              <Link
                href={`/units/${unit.slug}/topics/${topics[0].slug}`}
                className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
              >
                <span>Start Learning (Topic 1)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}

            <Link
              href={`/mcqs/${unit.slug}`}
              className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 text-xs font-bold transition-all flex items-center gap-2"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Unit MCQs</span>
            </Link>

            <Link
              href={`/one-shot/${unit.slug}`}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all flex items-center gap-2"
            >
              <Flame className="w-3.5 h-3.5 text-rose-400" />
              <span>One-Shot Revision</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= 3. Unit Metrics & Progress Bar ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-1">
            <Clock className="w-4 h-4 text-brand-600" /> Allocated Duration
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-white">
            {unit.totalHours} Hours
          </div>
          <span className="text-[11px] text-slate-500">
            {unit.theoryHours}h Theory + {unit.practicalHours}h Practical
          </span>
        </div>

        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-1">
            <Award className="w-4 h-4 text-emerald-600" /> Exam Weightage
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-white">
            {unit.marksWeight || 'Exam Core'}
          </div>
          <span className="text-[11px] text-slate-500">
            {unit.marksGroup || 'Part of written evaluation'}
          </span>
        </div>

        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
            <span>Unit Progress</span>
            <span className="text-brand-600 font-bold">{unitProgress}%</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden mt-2">
            <div
              className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
              style={{ width: `${unitProgress}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-500 mt-2 block">
            {completedCount} of {topics.length} topics completed
          </span>
        </div>
      </div>

      {/* ================= 4. Official Learning Objectives ================= */}
      {unit.learningObjectives && unit.learningObjectives.length > 0 && (
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-600" /> Official NIELIT Learning Objectives
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
            {unit.learningObjectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ================= 5. Interactive Syllabus Topics List ================= */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
              Syllabus Topics &amp; Lessons ({topics.length})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click any topic to read full bilingual notes, interactive code boxes, and micro-quizzes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {topics.map((t, idx) => {
            const isDone = completedTopics.includes(t.slug);
            return (
              <div
                key={t.slug}
                className={`p-4 rounded-2xl border transition-all flex items-start gap-3 group ${
                  isDone
                    ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/30 dark:bg-emerald-950/20'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-500 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleTopicCompleted(t.slug)}
                  className="mt-1 shrink-0 transition-transform active:scale-90"
                  title={isDone ? 'Mark as incomplete' : 'Mark as completed'}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100 dark:fill-emerald-950" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-400 group-hover:text-brand-500" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      #{idx + 1}
                    </span>
                  </div>

                  <Link
                    href={`/units/${unit.slug}/topics/${t.slug}`}
                    className="font-bold text-sm text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors block"
                  >
                    {t.title}
                  </Link>

                  {t.hindiTitle && (
                    <p className="text-xs text-brand-600 dark:text-brand-400 font-medium hindi-text mt-0.5">
                      {t.hindiTitle}
                    </p>
                  )}
                </div>

                <Link
                  href={`/units/${unit.slug}/topics/${t.slug}`}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-brand-600 group-hover:text-white text-slate-600 dark:text-slate-300 text-xs font-bold transition-all shrink-0 self-center"
                >
                  Study →
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= 6. Navigation Footer ================= */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        {prevUnit ? (
          <Link
            href={`/units/${prevUnit.slug}`}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-brand-600"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Unit {prevUnit.unitNumber}: {prevUnit.title}</span>
          </Link>
        ) : <div />}

        {nextUnit ? (
          <Link
            href={`/units/${nextUnit.slug}`}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-brand-600"
          >
            <span>Unit {nextUnit.unitNumber}: {nextUnit.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : <div />}
      </div>

    </div>
  );
}
