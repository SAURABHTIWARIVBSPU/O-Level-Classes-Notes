'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  AlertTriangle, 
  Lightbulb, 
  HelpCircle, 
  Clock, 
  Languages,
  FileText,
  Layers,
  ArrowLeft,
  ArrowRight,
  BookMarked
} from 'lucide-react';
import { cccChaptersData } from '@/data/cccSyllabusData';
import { cccTopicsData } from '@/data/cccTopicsData';
import MarkdownRenderer from '@/components/common/MarkdownRenderer';
import MicroQuiz from '@/components/learning/MicroQuiz';
import { useProgress } from '@/lib/progressContext';

export default function CCCTopicPage({ params }) {
  const chapterSlug = decodeURIComponent(params?.chapterSlug || '');
  const topicSlug = decodeURIComponent(params?.topicSlug || '');
  const chapter = cccChaptersData.find((c) => c.slug === chapterSlug);

  if (!chapter) {
    notFound();
  }

  const topics = cccTopicsData[chapterSlug] || [];
  const topicIndex = topics.findIndex((t) => t.slug === topicSlug);

  if (topicIndex === -1) {
    notFound();
  }

  const topic = topics[topicIndex];
  const prevTopic = topicIndex > 0 ? topics[topicIndex - 1] : null;
  const nextTopic = topicIndex < topics.length - 1 ? topics[topicIndex + 1] : null;

  const [langMode, setLangMode] = useState('bilingual'); // 'bilingual', 'en', 'hi'
  const { completedTopics, toggleTopicCompleted } = useProgress();
  const isCompleted = completedTopics.includes(topic.slug);

  return (
    <div className="space-y-8 py-4 max-w-5xl mx-auto">
      
      {/* Top Navigation Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <Link
          href={`/ccc/chapters/${chapter.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Chapter {chapter.chapterNumber}: {chapter.title}</span>
        </Link>

        {/* Language Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
          <Languages className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-1" />
          <button
            onClick={() => setLangMode('bilingual')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              langMode === 'bilingual' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
            }`}
          >
            द्विभाषी
          </button>
          <button
            onClick={() => setLangMode('en')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              langMode === 'en' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLangMode('hi')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              langMode === 'hi' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
            }`}
          >
            हिन्दी
          </button>
        </div>
      </div>

      {/* Topic Title & Overview */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold">
            TOPIC {topicIndex + 1} OF {topics.length}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold">
            {topic.examImportance}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          {topic.title}
        </h1>

        <p className="text-lg font-bold text-blue-600 dark:text-blue-400 hindi-text">
          {topic.hindiTitle}
        </p>

        {/* Simple Words Card */}
        <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/60 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold font-mono text-blue-700 dark:text-blue-300 uppercase">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>साधारण शब्दों में (In Simple Words):</span>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            {topic.simpleWords}
          </p>
        </div>
      </div>

      {/* 1. Official Definition Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {(langMode === 'bilingual' || langMode === 'en') && (
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-2xs">
            <span className="text-[11px] font-mono font-bold text-blue-600 uppercase block">
              ENGLISH DEFINITION
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {topic.definitionEnglish}
            </p>
          </div>
        )}

        {(langMode === 'bilingual' || langMode === 'hi') && (
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-2xs">
            <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase block">
              हिंदी परिभाषा
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed hindi-text">
              {topic.definitionHindi}
            </p>
          </div>
        )}
      </div>

      {/* 2. Detailed Technical Explanation (MarkdownRenderer) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-3">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span>DETAILED EXPLANATION &amp; CONCEPTS</span>
        </div>

        <MarkdownRenderer content={topic.detailedExplanation} />
      </div>

      {/* 3. Real World Analogy */}
      {topic.realWorldAnalogy && (
        <div className="p-6 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 uppercase">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>दैनिक जीवन से उदाहरण (Real-World Analogy):</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {topic.realWorldAnalogy}
          </p>
        </div>
      )}

      {/* 4. Golden Points & Exam Traps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Golden Points */}
        <div className="p-5 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-800 dark:text-amber-300 uppercase">
            <Award className="w-4 h-4 text-amber-500" />
            <span>गोल्डन प्वाइंट्स (Important Exam Facts):</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {topic.importantPoints?.map((pt, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>{typeof pt === 'object' && pt !== null ? (pt.text || pt.point || pt.title || pt.desc || '') : pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Common Traps */}
        <div className="p-5 rounded-2xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-800 dark:text-rose-300 uppercase">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
            <span>सामान्य गलतियां एवं सावधानियां (Common Traps):</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {topic.commonMistakes?.map((m, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                <span>{typeof m === 'object' && m !== null ? (m.text || m.mistake || m.title || m.desc || '') : m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 5. Micro Quiz */}
      {topic.microQuiz && topic.microQuiz.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>TOPIC RETENTION MICRO-QUIZ</span>
          </div>
          <MicroQuiz questions={topic.microQuiz} topicTitle={topic.title} />
        </div>
      )}

      {/* Bottom Prev / Next Navigation Bar */}
      <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-6">
        {prevTopic ? (
          <Link
            href={`/ccc/chapters/${chapter.slug}/topics/${prevTopic.slug}`}
            className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Prev: {prevTopic.title}</span>
          </Link>
        ) : <div />}

        {nextTopic ? (
          <Link
            href={`/ccc/chapters/${chapter.slug}/topics/${nextTopic.slug}`}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
          >
            <span>Next: {nextTopic.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <Link
            href={`/ccc/mcqs/${chapter.slug}`}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
          >
            <span>Take Chapter MCQs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

    </div>
  );
}
