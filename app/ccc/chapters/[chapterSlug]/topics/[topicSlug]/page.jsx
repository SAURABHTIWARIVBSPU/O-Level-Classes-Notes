'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  BookOpen, 
  ChevronLeft, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  AlertTriangle, 
  Lightbulb, 
  HelpCircle, 
  Languages, 
  ArrowLeft, 
  ArrowRight, 
  X,
  Compass
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
  const isCompleted = completedTopics && completedTopics[topic.slug];

  const showEnglish = langMode === 'bilingual' || langMode === 'en';
  const showHindi = langMode === 'bilingual' || langMode === 'hi';

  return (
    <article className="max-w-4xl mx-auto space-y-12 py-4 pb-24 text-slate-800 dark:text-slate-200">
      
      {/* 1. Context Anchor & Navigation */}
      <header className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <Link
              href={`/ccc/chapters/${chapter.slug}`}
              className="inline-flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Chapter {chapter.chapterNumber}: {chapter.title}</span>
            </Link>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-brand-600 dark:text-brand-400 font-mono font-bold uppercase tracking-wider">Topic {topicIndex + 1}</span>
          </nav>

          {/* Action Row: Language Switcher & Complete */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold shadow-2xs">
              <button
                onClick={() => setLangMode('bilingual')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  langMode === 'bilingual'
                    ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                द्विभाषी
              </button>
              <button
                onClick={() => setLangMode('en')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  langMode === 'en'
                    ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLangMode('hi')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  langMode === 'hi'
                    ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                हिन्दी
              </button>
            </div>

            <button
              onClick={() => toggleTopicCompleted && toggleTopicCompleted(topic.slug)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-2xs ${
                isCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                  : 'border border-slate-300 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900'
              }`}
            >
              {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <span className="w-3.5 h-3.5 rounded-full border border-slate-400" />}
              <span>{isCompleted ? 'Completed' : 'Mark Complete'}</span>
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-mono text-xs font-bold uppercase tracking-wider">
              TOPIC {topicIndex + 1} OF {topics.length}
            </span>
            {topic.examImportance && (
              <span className="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-xs font-bold">
                {topic.examImportance}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {topic.title}
          </h1>

          {topic.hindiTitle && showHindi && (
            <h2 className="text-lg sm:text-xl font-bold text-slate-600 dark:text-slate-300 hindi-text leading-snug">
              {topic.hindiTitle}
            </h2>
          )}
        </div>
      </header>

      {/* 2. Intuitive Primer (Everyday Analogy & Simple Words - Intuition First!) */}
      {(topic.simpleWords || topic.realWorldAnalogy) && (
        <section className="space-y-4">
          {topic.simpleWords && showHindi && (
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border-l-4 border-amber-500 text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-1.5">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>साधारण शब्दों में सरल समझ (Intuitive Concept Primer)</span>
              </div>
              <p className="text-sm sm:text-[15px] leading-relaxed hindi-text text-slate-800 dark:text-slate-200 font-medium">
                {topic.simpleWords}
              </p>
            </div>
          )}

          {topic.realWorldAnalogy && (
            <div className="p-4 sm:p-5 rounded-2xl bg-accent-blue/5 dark:bg-accent-blue/10 border-l-4 border-accent-blue text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-accent-blue dark:text-sky-300 mb-1.5">
                <Sparkles className="w-4 h-4 text-accent-blue shrink-0" />
                <span>दैनिक जीवन से उदाहरण (Real-World Analogy):</span>
              </div>
              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
                {topic.realWorldAnalogy}
              </p>
            </div>
          )}
        </section>
      )}

      {/* 3. Formal Technical Definition */}
      {(topic.definitionEnglish || topic.definitionHindi) && (
        <section className="space-y-4">
          <div className={`grid gap-4 ${langMode === 'bilingual' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
            {showEnglish && topic.definitionEnglish && (
              <div className="border-l-4 border-brand-600 pl-4 py-2 space-y-1">
                <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-brand-700 dark:text-brand-400 block">
                  Technical Definition (English)
                </span>
                <p className="text-sm sm:text-[15px] text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  {topic.definitionEnglish}
                </p>
              </div>
            )}

            {showHindi && topic.definitionHindi && (
              <div className="border-l-4 border-indigo-500 pl-4 py-2 space-y-1">
                <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 block">
                  आधिकारिक तकनीकी परिभाषा (हिन्दी)
                </span>
                <p className="text-sm sm:text-[15px] text-slate-800 dark:text-slate-200 leading-relaxed font-medium hindi-text">
                  {topic.definitionHindi}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. Detailed Technical Explanation (Editorial Prose) */}
      {topic.detailedExplanation && (
        <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 pb-2 text-slate-900 dark:text-white">
            <BookOpen className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
            <h2 className="text-lg sm:text-xl font-black tracking-tight">
              {langMode === 'en' 
                ? 'Detailed Technical Breakdown & Concepts' 
                : langMode === 'hi' 
                ? 'गहन तकनीकी विश्लेषण एवं अवधारणाएं' 
                : 'Detailed Technical Breakdown (गहन तकनीकी विश्लेषण)'}
            </h2>
          </div>

          <div className="prose-container">
            <MarkdownRenderer content={topic.detailedExplanation} />
          </div>
        </section>
      )}

      {/* 5. Golden Points & Exam Traps */}
      {((topic.importantPoints && topic.importantPoints.length > 0) || (topic.commonMistakes && topic.commonMistakes.length > 0)) && (
        <section className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white">
            <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-lg sm:text-xl font-black tracking-tight">
              {langMode === 'en' ? 'Exam Mastery & Strategic Pitfalls' : 'मुख्य परीक्षा बिंदु एवं सावधानियां (Exam Matrix)'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Golden Points */}
            {topic.importantPoints && topic.importantPoints.length > 0 && (
              <div className="p-5 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border-l-4 border-emerald-500 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>गोल्डन परीक्षा बिंदु (Golden Facts):</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {topic.importantPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                      <span className="leading-relaxed">{typeof pt === 'object' && pt !== null ? (pt.text || pt.point || pt.title || pt.desc || '') : pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Common Mistakes / Traps */}
            {topic.commonMistakes && topic.commonMistakes.length > 0 && (
              <div className="p-5 rounded-2xl bg-rose-50/40 dark:bg-rose-950/20 border-l-4 border-rose-500 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-rose-900 dark:text-rose-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span>सामान्य गलतियां एवं सावधानियां (Common Traps):</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {topic.commonMistakes.map((m, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{typeof m === 'object' && m !== null ? (m.text || m.mistake || m.title || m.desc || '') : m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. Micro Quiz */}
      {topic.microQuiz && topic.microQuiz.length > 0 && (
        <section className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <MicroQuiz topicSlug={topic.slug} questions={topic.microQuiz} />
        </section>
      )}

      {/* 7. Bottom Navigation */}
      <nav className="border-t border-slate-200 dark:border-slate-800 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevTopic ? (
          <Link
            href={`/ccc/chapters/${chapter.slug}/topics/${prevTopic.slug}`}
            className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-500 hover:shadow-sm text-left transition-all group"
          >
            <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-brand-600 shrink-0 transition-colors" />
            <div className="min-w-0">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">PREVIOUS TOPIC</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate block">
                {prevTopic.title}
              </span>
            </div>
          </Link>
        ) : <div className="hidden sm:block" />}

        {nextTopic ? (
          <Link
            href={`/ccc/chapters/${chapter.slug}/topics/${nextTopic.slug}`}
            className="flex items-center justify-between gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-500 hover:shadow-sm text-right transition-all group sm:col-start-2"
          >
            <div className="min-w-0 text-left sm:text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">NEXT TOPIC</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate block">
                {nextTopic.title}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-brand-600 shrink-0 transition-colors" />
          </Link>
        ) : (
          <Link
            href={`/ccc/mcqs/${chapter.slug}`}
            className="flex items-center justify-between gap-3 p-4 rounded-2xl border border-emerald-500 bg-emerald-600 hover:bg-emerald-500 text-white text-right transition-all shadow-sm sm:col-start-2"
          >
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-100 block tracking-wider">CHAPTER COMPLETED</span>
              <span className="text-xs sm:text-sm font-bold truncate block">Take Chapter MCQs</span>
            </div>
            <ArrowRight className="w-5 h-5 text-white shrink-0" />
          </Link>
        )}
      </nav>

    </article>
  );
}
