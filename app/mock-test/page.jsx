'use client';

import React, { useState } from 'react';
import { masterMcqs } from '@/data/mcqsData';
import ExamEngine from '@/components/mcq/ExamEngine';
import { Award, Clock, AlertCircle, Play, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function MockTestPage() {
  const [testStarted, setTestStarted] = useState(false);
  const [examType, setExamType] = useState('full'); // 'full' (100 Qs) | 'speed' (25 Qs)

  const getExamQuestions = () => {
    if (examType === 'full') {
      // First 100 questions from question bank
      return masterMcqs.slice(0, 100);
    } else {
      // 25 questions speed test
      return masterMcqs.slice(0, 25);
    }
  };

  const questions = getExamQuestions();
  const duration = examType === 'full' ? 90 : 25;

  if (testStarted) {
    return (
      <div className="max-w-6xl mx-auto py-2">
        <ExamEngine
          questions={questions}
          examTitle={examType === 'full' ? 'Official 100-Mark Full Syllabus Mock Exam' : '25-Mark Speed Diagnostic Test'}
          durationMinutes={duration}
        />
      </div>
    );
  }

  return (
    <div className="space-y-10 max-w-4xl mx-auto py-6">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold mb-4 shadow-sm">
          <Award className="w-4 h-4 text-brand-600" />
          <span>Official NIELIT Exam Simulation Engine</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          O-Level M2-R5.1 Mock Examination
        </h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Simulate the actual examination environment with interactive question palette, 
          countdown timer, and comprehensive performance analysis.
        </p>
      </div>

      {/* Mode Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Full 100-Mark Mode */}
        <div 
          onClick={() => setExamType('full')}
          className={`p-6 rounded-2xl border cursor-pointer transition-all ${
            examType === 'full'
              ? 'border-brand-500 bg-brand-50/40 dark:bg-brand-950/40 ring-2 ring-brand-500/20 shadow-md'
              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-2.5 py-1 rounded bg-brand-600 text-white text-xs font-extrabold">
              RECOMMENDED
            </span>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              examType === 'full' ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300'
            }`}>
              {examType === 'full' && <CheckCircle2 className="w-4 h-4" />}
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Full 100-Mark Grand Mock
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            100 questions covering all 8 units with official weightages: 25 marks (Units 1-3), 
            20 marks (Unit 4), 15 marks (Unit 5), 20 marks (Unit 6), 20 marks (Units 7-8).
          </p>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Duration: 90 Minutes</span>
            <span>Pass Marks: 50/100</span>
          </div>
        </div>

        {/* 25-Question Speed Mode */}
        <div 
          onClick={() => setExamType('speed')}
          className={`p-6 rounded-2xl border cursor-pointer transition-all ${
            examType === 'speed'
              ? 'border-brand-500 bg-brand-50/40 dark:bg-brand-950/40 ring-2 ring-brand-500/20 shadow-md'
              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-extrabold">
              EXPRESS
            </span>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              examType === 'speed' ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300'
            }`}>
              {examType === 'speed' && <CheckCircle2 className="w-4 h-4" />}
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            25-Question Speed Test
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            A quick diagnostic check when you have limited time. Instant assessment of weak areas 
            across key HTML, CSS, W3.CSS, and JavaScript concepts.
          </p>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Duration: 25 Minutes</span>
            <span>Pass Marks: 13/25</span>
          </div>
        </div>

      </div>

      {/* Rules & Guidelines Card */}
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 bg-white dark:bg-slate-900 shadow-sm space-y-4">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-500" />
          Examination Rules &amp; Guidelines (NIELIT Official Pattern)
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-400">
          <p className="flex items-start gap-2">
            <span className="text-emerald-500 font-bold">•</span>
            <span><strong>No Negative Marking:</strong> Attempt all questions freely without fear of penalty.</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-emerald-500 font-bold">•</span>
            <span><strong>Review Flag:</strong> Mark uncertain questions to revisit before final submission.</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-emerald-500 font-bold">•</span>
            <span><strong>Passing Threshold:</strong> Minimum 50% score required to achieve qualifying grade.</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-emerald-500 font-bold">•</span>
            <span><strong>Detailed Analysis:</strong> Comprehensive unit-wise accuracy breakdowns shown immediately.</span>
          </p>
        </div>
      </div>

      {/* Launch CTA */}
      <div className="text-center pt-2">
        <button
          onClick={() => setTestStarted(true)}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-sm shadow-glow transition-all hover:scale-105"
        >
          <Play className="w-4 h-4 fill-current" />
          Start Examination ({examType === 'full' ? '100 Questions' : '25 Questions'})
        </button>
      </div>

    </div>
  );
}
