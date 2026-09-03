'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Award, 
  ShieldCheck, 
  FileText,
  ExternalLink,
  ChevronRight,
  Sparkles,
  BarChart3,
  Check,
  Layers,
  Flame,
  ArrowRight
} from 'lucide-react';
import { unitsData, syllabusMeta } from '@/data/syllabusData';
import { useProgress } from '@/lib/progressContext';

export default function SyllabusPage() {
  const { completedTopics, toggleTopicCompleted, overallPercentage } = useProgress();
  const [selectedGroupFilter, setSelectedGroupFilter] = useState('all');

  return (
    <div className="space-y-12 max-w-6xl mx-auto py-4">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            NIELIT O-LEVEL (IT) • MODULE M2-R5.1
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold">
            Official Curriculum &amp; Examination Blueprint
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Web Designing &amp; Publishing Syllabus
        </h1>
        <p className="text-sm sm:text-base font-bold text-brand-600 dark:text-brand-400 hindi-text">
          वेब डिजाइनिंग एवं पब्लिशिंग — आधिकारिक पाठ्यक्रम एवं अंक विभाजन (Marks Distribution)
        </p>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          National Institute of Electronics &amp; Information Technology (NIELIT) standard 120-hour curriculum breakdown with official unit-wise marks allocation and interactive topic mastery tracker.
        </p>
      </div>

      {/* ================= TOP METRICS TILES ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            <Clock className="w-4 h-4 text-sky-500" /> Total Duration
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            120 Hours
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
            48h Theory + 72h Practical Labs
          </span>
        </div>

        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            <Award className="w-4 h-4 text-emerald-500" /> Total Marks
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            100 Marks
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
            Written Theory Exam (Pass: 50%)
          </span>
        </div>

        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            <Layers className="w-4 h-4 text-indigo-500" /> Syllabus Modules
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            8 Units
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
            87 Detailed Lesson Topics
          </span>
        </div>

        <div className="p-5 rounded-2xl border border-brand-200 dark:border-brand-900/60 bg-brand-50/50 dark:bg-brand-950/20 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-brand-600 dark:text-brand-400 mb-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-600" /> Your Syllabus Progress
          </div>
          <div className="text-2xl sm:text-3xl font-black text-brand-600 dark:text-brand-400">
            {overallPercentage}%
          </div>
          <span className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 block font-medium">
            {completedTopics.length} of 87 Topics Mastered
          </span>
        </div>
      </div>

      {/* ================= 3. OFFICIAL MARKS DISTRIBUTION (SECTION 3) ================= */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-brand-600" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                3. Marks Distribution (अंक विभाजन)
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Official NIELIT O-Level M2-R5.1 Module Unit Wise Marks Weightage
            </p>
          </div>
        </div>

        {/* Primary Official Table */}
        <div className="border border-appborder rounded-xl overflow-hidden shadow-xs bg-white dark:bg-slate-900">
          <div className="table-responsive">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#1e293b] text-white font-bold">
                <tr>
                  <th className="p-4 w-16 text-center">No.</th>
                  <th className="p-4">Module Unit</th>
                  <th className="p-4">Units Covered</th>
                  <th className="p-4 text-right w-48">Written Marks (Max.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {syllabusMeta.marksDistribution.map((row, idx) => (
                  <tr 
                    key={row.id || idx} 
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="p-4 font-mono font-bold text-center text-slate-500 dark:text-slate-400">
                      {idx + 1}
                    </td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">
                      {row.groupName}
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1.5">
                        {row.unitsCovered.map((u) => {
                          const unitNum = u.replace('Unit ', '');
                          return (
                            <Link
                              key={u}
                              href={`/units/unit-${unitNum}`}
                              className="px-2 py-0.5 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 font-mono text-[11px] font-bold hover:bg-brand-100 transition-colors"
                            >
                              {u} →
                            </Link>
                          );
                        })}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-black text-sm text-slate-900 dark:text-white">
                        {row.marks} Marks
                      </span>
                    </td>
                  </tr>
                ))}
                
                {/* Total Row */}
                <tr className="bg-brand-50/60 dark:bg-brand-950/40 border-t-2 border-slate-200 dark:border-slate-700 font-black">
                  <td className="p-4 text-center text-slate-700 dark:text-slate-300">6</td>
                  <td className="p-4 text-slate-900 dark:text-white text-base">Total Examination Marks</td>
                  <td className="p-4 text-xs font-mono text-slate-500">All 8 Units Combined</td>
                  <td className="p-4 text-right text-brand-600 dark:text-brand-400 text-base font-black">
                    100 Marks
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= 5 VISUAL MARKS WEIGHTAGE CARDS ================= */}
      <section className="space-y-4">
        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
          Module-Wise Weightage Breakdown &amp; Objectives
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {syllabusMeta.marksDistribution.map((group, idx) => (
            <div
              key={group.id || idx}
              className="p-5 rounded-xl border border-appborder bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between space-y-4 hover:border-brand-500/80 transition-all"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    GROUP {idx + 1}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-black">
                    {group.marks} MARKS ({group.percentage})
                  </span>
                </div>

                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                  {group.groupName}
                </h4>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {group.unitsCovered.map((u) => {
                    const unitNum = u.replace('Unit ', '');
                    return (
                      <Link
                        key={u}
                        href={`/units/unit-${unitNum}`}
                        className="text-xs font-bold text-brand-600 hover:underline"
                      >
                        {u} Notes →
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Progress Bar for Group */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>Weightage in Exam</span>
                <span className="font-black text-slate-900 dark:text-white">{group.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 8-UNIT COMPLETE TOPIC CHECKLIST ================= */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Complete Interactive Topic Checklist (All 8 Units)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Click any checkbox to track your completion, or click the topic title to jump directly to the full 18-part lesson notes.
          </p>
        </div>

        <div className="space-y-6">
          {unitsData.map((unit) => {
            const totalInUnit = unit.topics?.length || 0;
            const completedInUnit = unit.topics?.filter((t) => completedTopics.includes(t.slug)).length || 0;
            const unitPercent = totalInUnit > 0 ? Math.round((completedInUnit / totalInUnit) * 100) : 0;

            return (
              <div
                key={unit.slug}
                className="border border-appborder rounded-xl p-5 sm:p-6 bg-white dark:bg-slate-900 shadow-xs space-y-4"
              >
                {/* Unit Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                        UNIT {unit.unitNumber}
                      </span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                        {unit.marksWeight}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {unit.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 hindi-text">
                      {unit.hindiTitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                        {completedInUnit} / {totalInUnit} Done ({unitPercent}%)
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {unit.totalHours}h ({unit.theoryHours}h Th + {unit.practicalHours}h Lab)
                      </span>
                    </div>

                    <Link
                      href={`/units/${unit.slug}`}
                      className="px-3.5 py-1.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-2xs flex items-center gap-1"
                    >
                      <span>Study Unit</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Topics Checklist Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
                  {(unit.topics || []).map((topic, tIdx) => {
                    const isDone = completedTopics.includes(topic.slug);
                    return (
                      <div
                        key={topic.slug}
                        className={`p-2.5 rounded-lg border flex items-start gap-2.5 transition-all ${
                          isDone
                            ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20'
                            : 'border-appborder bg-slate-50/50 dark:bg-slate-800/40 hover:border-brand-400'
                        }`}
                      >
                        <button
                          onClick={() => toggleTopicCompleted(topic.slug)}
                          className="mt-0.5 shrink-0 transition-transform active:scale-90"
                          title={isDone ? 'Mark as Incomplete' : 'Mark as Complete'}
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100 dark:fill-emerald-950" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-400 hover:text-brand-500" />
                          )}
                        </button>

                        <div className="min-w-0 flex-1">
                          <Link
                            href={`/units/${unit.slug}/topics/${topic.slug}`}
                            className={`text-xs font-medium block leading-snug hover:text-brand-600 dark:hover:text-brand-400 transition-colors ${
                              isDone ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-200'
                            }`}
                          >
                            <span className="font-mono text-[10px] text-slate-400 mr-1">
                              {tIdx + 1}.
                            </span>
                            {topic.title}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
