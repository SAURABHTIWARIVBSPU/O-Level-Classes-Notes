'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Circle, 
  Lightbulb, 
  AlertTriangle, 
  FileCode, 
  Copy, 
  Check, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  HelpCircle,
  Target,
  Bookmark,
  BookmarkCheck,
  Presentation,
  Play,
  Eye,
  EyeOff,
  X,
  Languages,
  Sparkles,
  Award,
  Terminal,
  Clock,
  Compass
} from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';
import { useProgress } from '@/lib/progressContext';
import LineByLineCode from './LineByLineCode';
import TryItYourself from './TryItYourself';
import MicroQuiz from './MicroQuiz';
import TopicNotesEditor from './TopicNotesEditor';
import MarkdownRenderer from '@/components/common/MarkdownRenderer';

export default function TopicContent({ topic, prevTopic, nextTopic }) {
  const { language, changeLanguage } = useLanguage();
  const { completedTopics, toggleTopicCompleted, isBookmarked, toggleBookmark } = useProgress();
  const [copied, setCopied] = useState(false);
  const [showLivePreview, setShowLivePreview] = useState(false);

  const isCompleted = completedTopics && completedTopics[topic.slug];
  const isSaved = isBookmarked ? isBookmarked(topic.slug) : false;

  const handleCopyCode = () => {
    if (topic.codeExample) {
      navigator.clipboard.writeText(topic.codeExample);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Determine educational template for Whiteboard
  let whiteboardTemplate = null;
  const slug = (topic.slug || '').toLowerCase();
  if (slug.includes('internet') || slug.includes('working-of-websites') || slug.includes('server') || slug.includes('client')) {
    whiteboardTemplate = 'client-server';
  } else if (slug.includes('front-end') || slug.includes('back-end')) {
    whiteboardTemplate = 'frontend-backend';
  } else if (slug.includes('box') || slug.includes('border') || slug.includes('margin') || slug.includes('padding')) {
    whiteboardTemplate = 'css-box-model';
  } else if (slug.includes('event') || slug.includes('javascript') || slug.includes('validation')) {
    whiteboardTemplate = 'js-event-flow';
  } else if (slug.includes('html') || slug.includes('structure') || slug.includes('head') || slug.includes('body')) {
    whiteboardTemplate = 'html-dom-tree';
  }

  const showEnglish = language === 'both' || language === 'en';
  const showHindi = language === 'both' || language === 'hi';
  const hasCodeSection = topic.syntax || topic.codeExample || (topic.lineByLine && topic.lineByLine.length > 0) || topic.outputExplanation;

  return (
    <article className="max-w-4xl mx-auto space-y-12 pb-24 text-slate-800 dark:text-slate-200">
      
      {/* =========================================================================
          1. CONTEXT ANCHOR & TOPIC HEADER
      ========================================================================= */}
      <header className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-4">
        
        {/* Breadcrumb Navigation & Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <Link href={`/units/${topic.unitSlug}`} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Unit {topic.unit}: {topic.unitTitle}</span>
            </Link>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-brand-600 dark:text-brand-400 font-mono font-bold uppercase tracking-wider">{topic.id}</span>
          </nav>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Bilingual Mode Toggle */}
            <div className="inline-flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-0.5 border border-slate-200 dark:border-slate-700 text-xs shadow-2xs">
              <button
                onClick={() => changeLanguage('both')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  language === 'both'
                    ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="द्विभाषी (Bilingual English + Hindi)"
              >
                द्विभाषी
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded-lg font-bold transition-all ${
                  language === 'en'
                    ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="English only"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('hi')}
                className={`px-2 py-1 rounded-lg font-bold transition-all ${
                  language === 'hi'
                    ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="हिन्दी केवल"
              >
                हिन्दी
              </button>
            </div>

            {/* Smartboard Classroom Link */}
            <Link
              href={whiteboardTemplate ? `/classroom?template=${whiteboardTemplate}` : `/classroom`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-300 dark:border-amber-700/80 bg-amber-50/80 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 hover:bg-amber-100 text-xs font-bold transition-all shadow-2xs"
              title="Open concept on Teacher Digital Board"
            >
              <Presentation className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span className="hidden sm:inline">Whiteboard</span>
            </Link>

            {/* Bookmark Toggle */}
            <button
              onClick={() => toggleBookmark && toggleBookmark(topic.slug)}
              className={`p-1.5 rounded-xl border text-xs font-bold transition-all ${
                isSaved
                  ? 'border-amber-400 bg-amber-50 dark:bg-amber-950/60 text-amber-600'
                  : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={isSaved ? 'Bookmarked' : 'Bookmark Topic'}
              aria-label="Bookmark Topic"
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4 fill-current" /> : <Bookmark className="w-4 h-4" />}
            </button>

            {/* Mark Topic Complete Toggle */}
            <button
              onClick={() => toggleTopicCompleted(topic.slug)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-2xs ${
                isCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                  : 'border border-slate-300 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900'
              }`}
            >
              {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Circle className="w-3.5 h-3.5 text-slate-400" />}
              <span>{isCompleted ? 'Completed' : 'Mark Complete'}</span>
            </button>
          </div>
        </div>

        {/* Topic Title & Hindi Title */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-mono text-xs font-bold uppercase tracking-wider">
              Topic {topic.id}
            </span>
            <span className="text-xs text-slate-400 font-medium">NIELIT M2-R5.1 Core Curriculum</span>
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

      {/* =========================================================================
          2. THE INTUITIVE PRIMER: EVERYDAY ANALOGY & SIMPLE WORDS (INTUITION FIRST!)
          Pedagogical Principle: Establish the mental model before abstract technical jargon
      ========================================================================= */}
      {(topic.simpleWords || topic.realWorldAnalogy) && (
        <section className="space-y-4">
          {/* Simple Words Explanation */}
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

          {/* Real-World Concept Analogy */}
          {topic.realWorldAnalogy && (
            <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border-l-4 border-indigo-500 text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-indigo-900 dark:text-indigo-300 mb-1.5">
                <Lightbulb className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>
                  {language === 'en' 
                    ? 'Real-World Concept Analogy' 
                    : language === 'hi' 
                    ? 'वास्तविक जीवन का उदाहरण (सरल एनालॉजी)' 
                    : 'Real-World Analogy (वास्तविक जीवन का उदाहरण)'}
                </span>
              </div>
              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
                {topic.realWorldAnalogy}
              </p>
            </div>
          )}
        </section>
      )}

      {/* =========================================================================
          3. FORMAL TECHNICAL DEFINITION & CURRICULUM RELEVANCE
      ========================================================================= */}
      <section className="space-y-4">
        {/* Definition Block */}
        <div className={`grid gap-4 ${language === 'both' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
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

        {/* Why It Matters for NIELIT & Real Projects */}
        {topic.whyImportant && (
          <div className="flex items-start gap-3 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80">
            <Target className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-900 dark:text-white font-bold mr-1">
                {language === 'en' ? 'Syllabus & Industry Relevance:' : 'परीक्षा एवं प्रोजेक्ट्स के लिए महत्व:'}
              </strong>
              {topic.whyImportant}
            </p>
          </div>
        )}
      </section>

      {/* =========================================================================
          4. STRUCTURED TECHNICAL LESSON (DETAILED BREAKDOWN)
          Editorial textbook layout via Content-Aware MarkdownRenderer
      ========================================================================= */}
      {topic.detailedExplanation && (
        <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 pb-2 text-slate-900 dark:text-white">
            <BookOpen className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
            <h2 className="text-lg sm:text-xl font-black tracking-tight">
              {language === 'en' 
                ? 'Detailed Technical Breakdown & Concepts' 
                : language === 'hi' 
                ? 'गहन तकनीकी विश्लेषण एवं अवधारणाएं' 
                : 'Detailed Technical Breakdown (गहन तकनीकी विश्लेषण)'}
            </h2>
          </div>

          <div className="prose-container">
            <MarkdownRenderer content={topic.detailedExplanation} />
          </div>
        </section>
      )}

      {/* =========================================================================
          5. UNIFIED CODE & SYNTAX STUDIO
          Groups Syntax + Code Demonstration + Live Preview + Line-by-Line + Output
      ========================================================================= */}
      {hasCodeSection && (
        <section className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                {language === 'en' ? 'Syntax & Code Studio' : 'कोड प्रयोगशाला एवं सिंटैक्स (Code Studio)'}
              </h2>
            </div>
            <Link
              href="/playground"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline"
              title="Open full-featured live editor"
            >
              <span>Full Playground</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Formal Syntax Specification */}
          {topic.syntax && (
            <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-sm">
              <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px] font-mono font-bold text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {language === 'en' ? 'Standard Syntax Specification' : 'मानक सिंटैक्स संरचना (Syntax Specification)'}
                </span>
                <span className="text-slate-500">W3C / ECMA Standard</span>
              </div>
              <pre className="p-4 text-xs font-mono text-emerald-400 overflow-x-auto m-0 leading-relaxed">
                <code>{topic.syntax}</code>
              </pre>
            </div>
          )}

          {/* Complete Runnable Code Snippet with Live Preview & Copy */}
          {topic.codeExample && (
            <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs">
                <span className="font-mono text-slate-300 font-bold flex items-center gap-1.5">
                  <FileCode className="w-4 h-4 text-brand-400" />
                  <span>Runnable Code Demonstration</span>
                </span>
                <div className="flex items-center gap-2">
                  
                  {/* Live Iframe Sandbox Preview Toggle */}
                  <button
                    onClick={() => setShowLivePreview(!showLivePreview)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      showLivePreview
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-800 hover:bg-slate-700 text-emerald-400'
                    }`}
                    title="Toggle live execution preview inside page"
                  >
                    {showLivePreview ? <EyeOff className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    <span>{showLivePreview ? 'Hide Preview' : 'Run Live Preview'}</span>
                  </button>

                  {/* Copy Code Button */}
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                    title="Copy code to clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto m-0 leading-relaxed max-h-[380px]">
                <code>{topic.codeExample}</code>
              </pre>

              {/* Sandboxed Live Preview */}
              {showLivePreview && (
                <div className="border-t-2 border-emerald-500 bg-white">
                  <div className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between text-[11px] font-mono font-bold text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1.5 text-emerald-600">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live Rendered Output (ब्राउज़र रेंडरिंग)
                    </span>
                    <span className="text-slate-400">Isolated Sandbox</span>
                  </div>
                  <iframe
                    title="Live Topic Preview"
                    srcDoc={topic.codeExample}
                    sandbox="allow-scripts"
                    className="w-full h-56 border-none bg-white block"
                  />
                </div>
              )}
            </div>
          )}

          {/* Line-by-Line Breakdown Component */}
          {topic.lineByLine && topic.lineByLine.length > 0 && (
            <LineByLineCode lines={topic.lineByLine} />
          )}

          {/* Browser Output & Rendering Details */}
          {topic.outputExplanation && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm leading-relaxed">
              <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] block mb-1">
                {language === 'en' ? 'Browser Output & DOM Execution:' : 'ब्राउज़र आउटपुट एवं रेंडरिंग व्याख्या:'}
              </span>
              <p className="text-slate-700 dark:text-slate-300">
                {topic.outputExplanation}
              </p>
            </div>
          )}
        </section>
      )}

      {/* =========================================================================
          6. HANDS-ON CODING CHALLENGE ("TRY IT YOURSELF")
          Single integrated practice exercise consolidating practiceTask
      ========================================================================= */}
      <section className="pt-6 border-t border-slate-200 dark:border-slate-800">
        <TryItYourself
          task={topic.practiceTask || `Re-create and customize the ${topic.title} implementation.`}
          hindiTask={topic.hindiTitle ? `${topic.hindiTitle} का स्वयं कोड लिखकर अभ्यास करें।` : null}
          hints={[
            'Open code playground and type standard structure.',
            'Verify closing tags and matching quotes for all attributes.',
            'Observe browser preview immediately on execution.'
          ]}
          starterCode={topic.codeExample || ''}
          solutionCode={topic.codeExample || ''}
        />
      </section>

      {/* =========================================================================
          7. EXAM MASTERY MATRIX: GOLDEN POINTS & COMMON MISTAKES
          Two-column high-contrast instructional takeaway layout
      ========================================================================= */}
      {((topic.importantPoints && topic.importantPoints.length > 0) || (topic.commonMistakes && topic.commonMistakes.length > 0)) && (
        <section className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white">
            <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-lg sm:text-xl font-black tracking-tight">
              {language === 'en' ? 'Exam Mastery & Strategic Pitfalls' : 'मुख्य परीक्षा बिंदु एवं सावधानियां (Exam Matrix)'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Golden Exam Points */}
            {topic.importantPoints && topic.importantPoints.length > 0 && (
              <div className="p-5 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border-l-4 border-emerald-500 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    {language === 'en' 
                      ? 'Golden Exam Points & Key Facts' 
                      : language === 'hi' 
                      ? 'मुख्य परीक्षा बिंदु (Golden Points)' 
                      : 'Golden Points (मुख्य परीक्षा बिंदु)'}
                  </span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {topic.importantPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                      <span className="leading-relaxed">{typeof pt === 'object' && pt !== null ? (pt.text || pt.point || pt.title || pt.desc || '') : pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Common Student Mistakes */}
            {topic.commonMistakes && topic.commonMistakes.length > 0 && (
              <div className="p-5 rounded-2xl bg-rose-50/40 dark:bg-rose-950/20 border-l-4 border-rose-500 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-rose-900 dark:text-rose-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span>
                    {language === 'en' 
                      ? 'Common Student Pitfalls & Mistakes' 
                      : language === 'hi' 
                      ? 'अक्सर होने वाली गलतियां एवं सावधानियां' 
                      : 'Common Mistakes (सावधानियां)'}
                  </span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {topic.commonMistakes.map((mistake, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{typeof mistake === 'object' && mistake !== null ? (mistake.text || mistake.mistake || mistake.title || mistake.desc || '') : mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Exam Perspective / Strategy Note */}
          {topic.examPerspective && (
            <div className="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-3">
              <Award className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-purple-900 dark:text-purple-300 block font-bold uppercase tracking-wider text-[11px] mb-0.5">
                  {language === 'en' ? 'NIELIT Examination Strategy & Trends:' : 'परीक्षा रणनीति एवं ट्रेंड्स:'}
                </strong>
                {topic.examPerspective}
              </div>
            </div>
          )}
        </section>
      )}

      {/* =========================================================================
          8. SYNTHESIS, RETENTION & SELF-ASSESSMENT
          Quick Takeaway + In-Topic MicroQuiz + Student Personal Notebook
      ========================================================================= */}
      <section className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-6">
        
        {/* Quick Revision Strip */}
        {topic.quickRevision && (
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
            <Bookmark className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <strong className="text-brand-700 dark:text-brand-400 font-extrabold uppercase tracking-wider text-[11px] mr-1.5">
                {language === 'en' ? 'Quick Revision Takeaway:' : 'त्वरित परीक्षा संक्षेप (Quick Revision):'}
              </strong>
              {topic.quickRevision}
            </p>
          </div>
        )}

        {/* Micro-Quiz Retention Test */}
        {topic.mcqs && topic.mcqs.length > 0 && (
          <MicroQuiz topicSlug={topic.slug} questions={topic.mcqs} />
        )}

        {/* Student Study Notebook */}
        <TopicNotesEditor topicSlug={topic.slug} topicTitle={topic.title} />
      </section>

      {/* =========================================================================
          9. ADJACENT TOPIC NAVIGATION
      ========================================================================= */}
      <nav className="border-t border-slate-200 dark:border-slate-800 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevTopic ? (
          <Link
            href={`/units/${prevTopic.unitSlug}/topics/${prevTopic.slug}`}
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
            href={`/units/${nextTopic.unitSlug}/topics/${nextTopic.slug}`}
            className="flex items-center justify-between gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-500 hover:shadow-sm text-right transition-all group sm:col-start-2"
          >
            <div className="min-w-0 text-left sm:text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">NEXT TOPIC</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate block">
                {nextTopic.title}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-brand-600 shrink-0 transition-colors" />
          </Link>
        ) : <div className="hidden sm:block" />}
      </nav>

    </article>
  );
}
