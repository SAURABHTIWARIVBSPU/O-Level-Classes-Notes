'use client';

import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Calendar, 
  Award, 
  BookOpen, 
  Clock, 
  RotateCcw, 
  ArrowRight, 
  TrendingUp, 
  Circle, 
  PlayCircle, 
  AlertTriangle, 
  Bookmark, 
  BookMarked, 
  Presentation, 
  Target 
} from 'lucide-react';
import { useProgress } from '@/lib/progressContext';
import { unitsData } from '@/data/syllabusData';
import { allTopics } from '@/data/topicsData';

export default function DashboardPage() {
  const { 
    completedTopics, 
    quizScores, 
    lastVisited, 
    streak, 
    overallPercentage,
    totalTopics,
    completedCount,
    toggleTopicCompleted,
    resetProgress,
    weakTopics = [],
    bookmarks = [],
    personalNotes = {}
  } = useProgress();

  const mockScore = quizScores['mock-exam'];
  const notesCount = Object.keys(personalNotes).length;

  return (
    <div className="space-y-10 max-w-5xl mx-auto py-4">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold mb-3">
            <TrendingUp className="w-3.5 h-3.5" /> Student Analytics &amp; Progress Tracker
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Your Learning Dashboard
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Real-time tracking of syllabus mastery, active streaks, mock exam scores, and 
            unit-wise preparation readiness.
          </p>
        </div>

        <button
          onClick={resetProgress}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-bold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Progress
        </button>
      </div>

      {/* Primary KPI Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1: Syllabus Mastery */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Syllabus Done</span>
            <div className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-950 text-brand-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-black text-slate-900 dark:text-white">{overallPercentage}%</span>
            <span className="text-xs text-slate-400 block mt-0.5">{completedCount} of {totalTopics} Topics</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
            <div className="bg-brand-600 h-full rounded-full transition-all" style={{ width: `${overallPercentage}%` }} />
          </div>
        </div>

        {/* KPI 2: Study Streak */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Streak</span>
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-black text-amber-500">{streak} Days</span>
            <span className="text-xs text-slate-400 block mt-0.5">Keep learning daily!</span>
          </div>
          <div className="text-[11px] text-emerald-600 font-bold mt-3 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Streak Active Today</span>
          </div>
        </div>

        {/* KPI 3: Mock Exam Best */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mock Exam Score</span>
            <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-black text-slate-900 dark:text-white">
              {mockScore ? `${mockScore.score}/${mockScore.total}` : 'Not Taken'}
            </span>
            <span className="text-xs text-slate-400 block mt-0.5">
              {mockScore ? `${Math.round((mockScore.score / mockScore.total) * 100)}% Accuracy` : '100-Mark Full Simulation'}
            </span>
          </div>
          <Link href="/mock-test" className="text-xs font-bold text-purple-600 hover:underline mt-3 block">
            {mockScore ? 'Retake Exam →' : 'Take Exam Now →'}
          </Link>
        </div>

        {/* KPI 4: Lab Completion */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Practical Labs</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-black text-slate-900 dark:text-white">72 Hours</span>
            <span className="text-xs text-slate-400 block mt-0.5">8 Practical Exercises</span>
          </div>
          <Link href="/practical" className="text-xs font-bold text-emerald-600 hover:underline mt-3 block">
            Open Lab Workbook →
          </Link>
        </div>

      </div>

      {/* Resume Card (If Last Visited) */}
      {lastVisited && (
        <div className="border border-brand-200 dark:border-brand-900/80 bg-brand-50/60 dark:bg-brand-950/30 p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <PlayCircle className="w-7 h-7 text-brand-600 shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-bold text-brand-600 dark:text-brand-400">
                Continue Where You Left Off
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {lastVisited.title}
              </h3>
            </div>
          </div>

          <Link
            href={`/units/${lastVisited.unitSlug}/topics/${lastVisited.slug}`}
            className="px-5 py-2 bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold rounded-xl shadow-sm transition-all hover:scale-105"
          >
            Resume Lesson →
          </Link>
        </div>
      )}

      {/* Weak Areas & Remedial Practice (Section 27) */}
      {weakTopics && weakTopics.length > 0 && (
        <div className="border border-amber-300 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 p-5 rounded-2xl space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <h3 className="text-base font-black tracking-tight">
              Diagnostic Report: Topics Needing Remedial Revision
            </h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Based on your recent micro-quizzes, your score is below 70% in the following topics. Revise these concepts to secure top marks:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {weakTopics.map((wt) => (
              <div
                key={wt.slug}
                className="p-3.5 rounded-xl border border-amber-200 dark:border-amber-900/80 bg-white dark:bg-slate-900 flex items-center justify-between gap-3 shadow-xs"
              >
                <div>
                  <span className="text-[10px] font-bold text-amber-600 font-mono">
                    Unit {wt.unit} • Score: {wt.accuracy}%
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                    {wt.title}
                  </h4>
                </div>
                <Link
                  href={`/units/unit-${wt.unit}/topics/${wt.slug}`}
                  className="px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-[11px] font-bold shrink-0 transition-colors"
                >
                  Revise
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Personal Study Workspace Summary (Bookmarks & Notes) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/saved"
          className="p-5 rounded-2xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/40 dark:bg-purple-950/20 hover:border-purple-400 transition-all group flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-sm">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-purple-600 dark:text-purple-400 block">
                PERSONAL WORKSPACE
              </span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Saved Notes &amp; Bookmarks
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {bookmarks.length} topics bookmarked • {notesCount} personal study notes
              </p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link
          href="/classroom"
          className="p-5 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 hover:border-blue-400 transition-all group flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 block">
                TEACHER &amp; STUDENT STUDIO
              </span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Digital Board Classroom
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Interactive whiteboard + live split code execution
              </p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Unit-Wise Progress Cards */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Unit-Wise Preparation Breakdown
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {unitsData.map((unit) => {
            const unitDone = unit.topics.filter(t => completedTopics.includes(t.slug)).length;
            const unitPct = Math.round((unitDone / unit.topics.length) * 100);

            return (
              <div
                key={unit.unitNumber}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className="text-brand-600 dark:text-brand-400 font-mono">
                      UNIT 0{unit.unitNumber}
                    </span>
                    <span className="text-slate-500">{unitDone} / {unit.topics.length} Done</span>
                  </div>
                  
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {unit.title}
                  </h4>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1.5">
                    <span>Mastery</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{unitPct}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        unitPct >= 80 ? 'bg-emerald-500' : unitPct >= 40 ? 'bg-brand-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${unitPct}%` }}
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <Link
                      href={`/units/${unit.slug}`}
                      className="text-xs font-bold text-brand-600 hover:underline"
                    >
                      View Topics →
                    </Link>
                    <Link
                      href={`/mcqs/${unit.slug}`}
                      className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      Practice MCQs
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
