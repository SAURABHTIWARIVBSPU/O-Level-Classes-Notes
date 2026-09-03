'use client';

import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  GraduationCap, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Award,
  Sparkles,
  Layers,
  FileText
} from 'lucide-react';
import { cccChaptersData, cccSyllabusMeta } from '@/data/cccSyllabusData';
import { useProgress } from '@/lib/progressContext';

export default function CCCSyllabusPage() {
  const { completedTopics, toggleTopicCompleted } = useProgress();

  return (
    <div className="space-y-12 py-4 max-w-7xl mx-auto">
      
      {/* Header Banner */}
      <div className="space-y-4 border-b border-appborder pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue font-mono text-xs font-bold">
            {cccSyllabusMeta.organization}
          </span>
          <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-600 dark:text-brand-400 font-mono text-xs font-bold">
            {cccSyllabusMeta.courseCode} • {cccSyllabusMeta.revision} (w.e.f. {cccSyllabusMeta.implementationDate})
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold">
            {cccSyllabusMeta.durationTotalHours} Hours (32 Theory + 48 Practical)
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          {cccSyllabusMeta.courseName}
        </h1>
        
        <p className="text-lg sm:text-xl font-extrabold text-navy dark:text-brand-400 hindi-text">
          {cccSyllabusMeta.hindiCourseName}
        </p>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          {cccSyllabusMeta.purpose}
        </p>

        {/* Target Job Roles & Practical Platform Strip */}
        <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <span className="font-bold text-slate-700 dark:text-slate-300">Target Job Roles:</span>
            {cccSyllabusMeta.jobRoles.map((role) => (
              <span key={role} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 font-medium text-slate-700 dark:text-slate-300 border border-appborder">
                {role}
              </span>
            ))}
          </div>
          <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-medium">
            <span>Practical Lab: <strong>Ubuntu Linux &amp; LibreOffice</strong></span>
          </div>
        </div>

        {/* 4 Key Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-appborder shadow-2xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase block">Total Duration</span>
            <strong className="text-base font-black text-slate-900 dark:text-white">80 Hours</strong>
            <span className="text-[10px] text-slate-500 block">32h Theory + 48h Lab</span>
          </div>

          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-appborder shadow-2xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase block">Exam Pattern</span>
            <strong className="text-base font-black text-slate-900 dark:text-white">100 Questions</strong>
            <span className="text-[10px] text-slate-500 block">Online MCQs &amp; True/False</span>
          </div>

          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-appborder shadow-2xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase block">Exam Duration</span>
            <strong className="text-base font-black text-slate-900 dark:text-white">90 Minutes</strong>
            <span className="text-[10px] text-slate-500 block">No Negative Marking</span>
          </div>

          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-appborder shadow-2xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase block">Passing Grade</span>
            <strong className="text-base font-black text-slate-900 dark:text-white">50% Marks</strong>
            <span className="text-[10px] text-slate-500 block">Grade S (85%+) to D</span>
          </div>
        </div>
      </div>

      {/* Official 9 Chapters Table */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            OFFICIAL NIELIT BLUEPRINT
          </span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Chapter-Wise Duration &amp; Syllabus Outline
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Official breakdown of 9 modules from Revision 3 curriculum implemented w.e.f. 01st June, 2019
          </p>
        </div>

        <div className="table-responsive rounded-xl border border-appborder shadow-xs bg-white dark:bg-slate-900">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold border-b border-appborder">
              <tr>
                <th className="p-4 w-16 text-center">Ch. No.</th>
                <th className="p-4">Chapter Title &amp; Hindi Name</th>
                <th className="p-4 text-center">Theory</th>
                <th className="p-4 text-center">Lab</th>
                <th className="p-4 text-center">Total</th>
                <th className="p-4 text-center">Weightage</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              {cccChaptersData.map((ch) => (
                <tr key={ch.slug} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 text-center font-mono font-bold text-accent-blue">
                    {ch.chapterNumber}
                  </td>
                  <td className="p-4 space-y-0.5">
                    <strong className="text-slate-900 dark:text-white block font-bold">
                      {ch.title}
                    </strong>
                    <span className="text-xs text-brand-600 dark:text-brand-400 hindi-text font-medium block">
                      {ch.hindiTitle}
                    </span>
                  </td>
                  <td className="p-4 text-center font-mono">{ch.theoryHours}h</td>
                  <td className="p-4 text-center font-mono">{ch.practicalHours}h</td>
                  <td className="p-4 text-center font-mono font-bold text-slate-900 dark:text-white">
                    {ch.totalHours}h
                  </td>
                  <td className="p-4 text-center font-mono text-amber-600 dark:text-amber-400 font-bold">
                    {ch.marksWeight}
                  </td>
                  <td className="p-4 text-right">
                    <Link
                      href={`/ccc/chapters/${ch.slug}`}
                      className="px-3 py-1.5 rounded-lg bg-brand-50 hover:bg-brand-500 hover:text-white text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 font-bold text-xs transition-all inline-flex items-center gap-1 shadow-2xs"
                    >
                      <span>Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-100 dark:bg-slate-800/80 font-black text-slate-900 dark:text-white">
                <td className="p-4 text-center" colSpan={2}>
                  TOTAL DURATION &amp; MARKS
                </td>
                <td className="p-4 text-center font-mono">32h</td>
                <td className="p-4 text-center font-mono">48h</td>
                <td className="p-4 text-center font-mono text-accent-blue font-black">
                  80h
                </td>
                <td className="p-4 text-center font-mono text-amber-500 font-black">
                  100 Marks
                </td>
                <td className="p-4 text-right font-mono text-xs text-emerald-500">
                  Pass: 50%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Chapter Checklists */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            INTERACTIVE TOPIC DIRECTORY
          </span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Topic Checklists for All 9 Modules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {cccChaptersData.map((ch) => (
            <div
              key={ch.slug}
              className="p-5 sm:p-6 rounded-xl border border-appborder bg-white dark:bg-slate-900 space-y-4 shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-mono font-bold text-accent-blue block">
                    CHAPTER {ch.chapterNumber}
                  </span>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {ch.title}
                  </h3>
                </div>
                <Link
                  href={`/ccc/chapters/${ch.slug}`}
                  className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-2">
                {ch.topics.map((t, idx) => (
                  <div
                    key={t.slug}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-appborder flex items-center justify-between text-xs"
                  >
                    <Link
                      href={`/ccc/chapters/${ch.slug}/topics/${t.slug}`}
                      className="font-medium text-slate-700 dark:text-slate-300 hover:text-brand-600 transition-colors flex items-center gap-2"
                    >
                      <span className="font-mono text-[10px] text-slate-400">{idx + 1}.</span>
                      <span>{t.title}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
