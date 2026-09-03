'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Award, Clock, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { cccMcqsData } from '@/data/cccMcqsData';
import ExamEngine from '@/components/mcq/ExamEngine';

export default function CCCMockTestPage() {
  // Use all CCC MCQs or multiply for full mock test simulation
  const mockQuestions = cccMcqsData;

  return (
    <div className="space-y-8 py-4 max-w-5xl mx-auto">
      
      {/* Top Back Link */}
      <div className="flex items-center justify-between border-b border-appborder pb-4">
        <Link
          href="/ccc"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to CCC Hub</span>
        </Link>

        <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400">
          Official Exam Mode
        </span>
      </div>

      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-xl bg-navy text-white border border-navy-800 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-mono font-bold">
            100 MARKS EXAM SIMULATOR
          </span>
          <span className="px-2.5 py-1 rounded-md bg-accent-blue/20 text-sky-300 border border-accent-blue/30 text-xs font-mono font-bold">
            90 Minutes Timed Test
          </span>
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
            Passing: 50% Marks
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          NIELIT CCC Full Mock Examination
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Simulate the exact NIELIT CCC online exam format. Test includes questions from all 9 chapters: LibreOffice (Writer, Calc, Impress), Ubuntu Linux, Computer Basics, Internet, Digital Finance, and Cyber Security.
        </p>

        {/* Grading Scheme */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-slate-800 text-center">
          <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700">
            <span className="text-[10px] text-slate-400 block font-mono">85% &amp; Above</span>
            <strong className="text-xs font-bold text-emerald-400">Grade &apos;S&apos; (Super)</strong>
          </div>
          <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700">
            <span className="text-[10px] text-slate-400 block font-mono">75% — 84%</span>
            <strong className="text-xs font-bold text-blue-400">Grade &apos;A&apos;</strong>
          </div>
          <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700">
            <span className="text-[10px] text-slate-400 block font-mono">65% — 74%</span>
            <strong className="text-xs font-bold text-teal-400">Grade &apos;B&apos;</strong>
          </div>
          <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700">
            <span className="text-[10px] text-slate-400 block font-mono">55% — 64%</span>
            <strong className="text-xs font-bold text-amber-400">Grade &apos;C&apos;</strong>
          </div>
          <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 col-span-2 sm:col-span-1">
            <span className="text-[10px] text-slate-400 block font-mono">50% — 54%</span>
            <strong className="text-xs font-bold text-slate-300">Grade &apos;D&apos; (Pass)</strong>
          </div>
        </div>
      </div>

      {/* Interactive Exam Engine */}
      <ExamEngine questions={mockQuestions} title="NIELIT CCC Official 100-Mark Mock Examination" />

    </div>
  );
}
