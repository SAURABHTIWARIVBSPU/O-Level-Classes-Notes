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
  Award
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

  return (
    <article className="max-w-4xl mx-auto space-y-8 pb-16">
      
      {/* ================= 1. Header with Unit Breadcrumbs & Interactive Actions ================= */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <Link href={`/units/${topic.unitSlug}`} className="hover:text-brand-600 transition-colors">
              Unit {topic.unit}: {topic.unitTitle}
            </Link>
            <span>/</span>
            <span className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-wider">{topic.id}</span>
          </div>

          {/* Action Row: Language Switcher, Bookmark, Whiteboard, Mark Complete */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Quick In-Page Language Switcher */}
            <div className="inline-flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 p-0.5 border border-slate-200 dark:border-slate-700 text-xs">
              <button
                onClick={() => changeLanguage('both')}
                className={`px-2 py-1 rounded-md font-bold transition-all ${
                  language === 'both'
                    ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Bilingual mode (English + Hindi)"
              >
                द्विभाषी
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded-md font-bold transition-all ${
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
                className={`px-2 py-1 rounded-md font-bold transition-all ${
                  language === 'hi'
                    ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Hindi only"
              >
                हिन्दी
              </button>
            </div>

            {/* Open in Digital Whiteboard */}
            <Link
              href={whiteboardTemplate ? `/classroom?template=${whiteboardTemplate}` : `/classroom`}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 text-xs font-bold transition-all shadow-xs"
              title="Open concept on Teacher Digital Board"
            >
              <Presentation className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span className="hidden sm:inline">Whiteboard</span>
            </Link>

            {/* Bookmark Button */}
            <button
              onClick={() => toggleBookmark && toggleBookmark(topic.slug)}
              className={`p-1.5 rounded-lg border text-xs font-bold transition-all ${
                isSaved
                  ? 'border-amber-400 bg-amber-50 dark:bg-amber-950/60 text-amber-600'
                  : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={isSaved ? 'Bookmarked' : 'Bookmark Topic'}
              aria-label="Bookmark Topic"
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4 fill-current" /> : <Bookmark className="w-4 h-4" />}
            </button>

            {/* Mark Complete Button */}
            <button
              onClick={() => toggleTopicCompleted(topic.slug)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all shadow-xs ${
                isCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                  : 'border border-slate-300 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-slate-200'
              }`}
            >
              {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Circle className="w-3.5 h-3.5 text-slate-400" />}
              <span>{isCompleted ? 'Completed' : 'Mark Complete'}</span>
            </button>
          </div>
        </div>

        {/* Titles */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {topic.title}
          </h1>
          {topic.hindiTitle && (language === 'both' || language === 'hi') && (
            <h2 className="text-lg sm:text-xl font-bold text-slate-600 dark:text-slate-300 mt-1.5 hindi-text">
              {topic.hindiTitle}
            </h2>
          )}
        </div>
      </div>

      {/* ================= 2. Definitions Box (English / Hindi / Bilingual) ================= */}
      <div className={`grid gap-4 ${language === 'both' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        {(language === 'both' || language === 'en') && topic.definitionEnglish && (
          <div className="p-5 rounded-2xl border border-brand-200 dark:border-brand-900/60 bg-brand-50/40 dark:bg-brand-950/20 shadow-xs">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-700 dark:text-brand-400 block mb-2 font-mono">
              Official Technical Definition (English)
            </span>
            <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              {topic.definitionEnglish}
            </p>
          </div>
        )}

        {(language === 'both' || language === 'hi') && topic.definitionHindi && (
          <div className="p-5 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 shadow-xs">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 block mb-2 font-mono">
              आधिकारिक तकनीकी परिभाषा (हिन्दी)
            </span>
            <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium hindi-text">
              {topic.definitionHindi}
            </p>
          </div>
        )}
      </div>

      {/* ================= 3. In Simple Words (साधारण शब्दों में) ================= */}
      {topic.simpleWords && (language === 'both' || language === 'hi') && (
        <div className="p-5 rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 flex items-start gap-3.5 shadow-xs">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 mb-1">
              {language === 'hi' ? 'सरल शब्दों में व्याख्या' : 'In Simple Words (साधारण शब्दों में सरल व्याख्या)'}
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {topic.simpleWords}
            </p>
          </div>
        </div>
      )}

      {/* ================= 4. Why It Matters for O-Level ================= */}
      {topic.whyImportant && (
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-xl bg-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1">
              {language === 'en' 
                ? 'Why It Matters for NIELIT Exam & Real-World Projects' 
                : language === 'hi' 
                ? 'परीक्षा एवं प्रोजेक्ट्स के लिए क्यों महत्वपूर्ण है?' 
                : 'Why It Matters for O-Level (यह क्यों महत्वपूर्ण है?)'}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {topic.whyImportant}
            </p>
          </div>
        </div>
      )}

      {/* ================= 5. Detailed Technical Breakdown (Clean Markdown Rendered) ================= */}
      {topic.detailedExplanation && (
        <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 bg-white dark:bg-slate-900 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="w-8 h-8 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {language === 'en' 
                  ? 'Detailed Technical Breakdown & Concepts' 
                  : language === 'hi' 
                  ? 'गहन तकनीकी विश्लेषण एवं अवधारणाएं' 
                  : 'Detailed Technical Breakdown (गहन तकनीकी विश्लेषण)'}
              </h2>
              <span className="text-[11px] text-slate-400">
                Core textbook reference &amp; structured lesson material
              </span>
            </div>
          </div>

          {/* Render Markdown with clean semantic elements without raw # or ** */}
          <MarkdownRenderer content={topic.detailedExplanation} />
        </div>
      )}

      {/* ================= 6. Formal Syntax Specification ================= */}
      {topic.syntax && (
        <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs bg-slate-950">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400">
            <span className="font-bold text-slate-300">
              {language === 'en' ? 'Standard Syntax Specification' : 'Formal Syntax Specification (मानक सिंटैक्स संरचना)'}
            </span>
            <span className="text-emerald-400">W3C Compliant</span>
          </div>
          <pre className="p-4 text-xs font-mono text-emerald-400 overflow-x-auto m-0 leading-relaxed">
            {topic.syntax}
          </pre>
        </div>
      )}

      {/* ================= 7. Code Demonstration with Live Playground Integration ================= */}
      {topic.codeExample && (
        <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-md bg-slate-950">
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs">
            <span className="font-mono text-slate-300 font-bold flex items-center gap-1.5">
              <FileCode className="w-4 h-4 text-brand-400" /> 
              <span>Complete Runnable Demonstration</span>
            </span>
            <div className="flex items-center gap-2">
              
              {/* Toggle Live Preview Inside Page */}
              <button
                onClick={() => setShowLivePreview(!showLivePreview)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  showLivePreview
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-800 hover:bg-slate-700 text-emerald-400'
                }`}
                title="Toggle live execution preview"
              >
                {showLivePreview ? <EyeOff className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{showLivePreview ? 'Hide Preview' : 'Run Live Preview'}</span>
              </button>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                title="Copy code to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>

              <Link
                href="/playground"
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition-colors"
                title="Open in Sandbox Playground"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Playground</span>
              </Link>
            </div>
          </div>

          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto m-0 leading-relaxed max-h-[380px]">
            {topic.codeExample}
          </pre>

          {/* Live Sandboxed Iframe Preview */}
          {showLivePreview && (
            <div className="border-t-2 border-emerald-500 bg-white">
              <div className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between text-[11px] font-mono font-bold text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1 text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Rendered Output (ब्राउज़र रेंडरिंग)
                </span>
                <span>Isolated Sandbox</span>
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

      {/* Line-by-Line Code Breakdown */}
      {topic.lineByLine && topic.lineByLine.length > 0 && (
        <LineByLineCode lines={topic.lineByLine} />
      )}

      {/* ================= 8. Output Explanation ================= */}
      {topic.outputExplanation && (
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 shadow-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            {language === 'en' 
              ? 'Output & Browser Rendering Details' 
              : language === 'hi' 
              ? 'आउटपुट एवं ब्राउज़र रेंडरिंग व्याख्या' 
              : 'Output & Rendering Explanation (आउटपुट की व्याख्या)'}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {topic.outputExplanation}
          </p>
        </div>
      )}

      {/* ================= 9. Interactive Hands-On Challenge: Try It Yourself ================= */}
      <TryItYourself
        task={topic.practiceTask || `Re-create and customize the ${topic.title} code snippet.`}
        hindiTask={topic.hindiTitle ? `${topic.hindiTitle} का स्वयं कोड लिखकर अभ्यास करें।` : null}
        hints={[
          'Open code playground and type standard structure.',
          'Verify closing tags and matching quotes for all attributes.',
          'Observe browser preview immediately on execution.'
        ]}
        starterCode={topic.codeExample || ''}
        solutionCode={topic.codeExample || ''}
      />

      {/* ================= 10. Real-World Analogy ================= */}
      {topic.realWorldAnalogy && (
        <div className="p-5 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 flex items-start gap-3.5 shadow-xs">
          <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300 mb-1">
              {language === 'en' 
                ? 'Real-World Concept Analogy' 
                : language === 'hi' 
                ? 'वास्तविक जीवन का उदाहरण (सरल एनालॉजी)' 
                : 'Real-World Analogy (वास्तविक जीवन का उदाहरण)'}
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {topic.realWorldAnalogy}
            </p>
          </div>
        </div>
      )}

      {/* ================= 11. Golden Points & Common Mistakes Split ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Important Points */}
        {topic.importantPoints && topic.importantPoints.length > 0 && (
          <div className="p-5 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/30 dark:bg-emerald-950/20 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
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
                  <span className="text-emerald-600 font-bold shrink-0">•</span>
                  <span>{typeof pt === 'object' && pt !== null ? (pt.text || pt.point || pt.title || pt.desc || '') : pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Common Mistakes */}
        {topic.commonMistakes && topic.commonMistakes.length > 0 && (
          <div className="p-5 rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/30 dark:bg-rose-950/20 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300 mb-3 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>
                {language === 'en' 
                  ? 'Common Student Pitfalls & Mistakes' 
                  : language === 'hi' 
                  ? 'अक्सर होने वाली गलतियां एवं सावधानियां' 
                  : 'Common Student Mistakes (सावधानियां एवं गलतियां)'}
              </span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {topic.commonMistakes.map((mistake, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <X className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                  <span>{typeof mistake === 'object' && mistake !== null ? (mistake.text || mistake.mistake || mistake.title || mistake.desc || '') : mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ================= 12. Exam Perspective ================= */}
      {topic.examPerspective && (
        <div className="p-5 rounded-2xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/40 dark:bg-purple-950/20 shadow-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-purple-900 dark:text-purple-300 mb-1.5 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-purple-600" />
            <span>
              {language === 'en' 
                ? 'NIELIT Examination Strategy & Trends' 
                : language === 'hi' 
                ? 'परीक्षा के दृष्टिकोण से महत्वपूर्ण टिप्स' 
                : 'NIELIT Exam Perspective (परीक्षा के दृष्टिकोण से)'}
            </span>
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {topic.examPerspective}
          </p>
        </div>
      )}

      {/* ================= 13. Micro-Quiz ================= */}
      {topic.mcqs && topic.mcqs.length > 0 && (
        <MicroQuiz topicSlug={topic.slug} questions={topic.mcqs} />
      )}

      {/* ================= 14. Quick Revision Summary Card ================= */}
      {topic.quickRevision && (
        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex items-center gap-3">
          <Bookmark className="w-5 h-5 text-brand-600 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
            <strong className="text-brand-600 mr-1.5">
              {language === 'en' ? 'Quick Takeaway:' : 'Quick Revision (संक्षेप):'}
            </strong> 
            {topic.quickRevision}
          </p>
        </div>
      )}

      {/* ================= 15. Student Study Notes ================= */}
      <TopicNotesEditor topicSlug={topic.slug} topicTitle={topic.title} />

      {/* ================= 16. Practice Task / Lab Assignment ================= */}
      {topic.practiceTask && (
        <div className="p-5 rounded-2xl border border-cyan-200 dark:border-cyan-900/60 bg-cyan-50/40 dark:bg-cyan-950/20 shadow-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-900 dark:text-cyan-300 mb-1">
            {language === 'en' 
              ? 'Practical Lab Assignment' 
              : language === 'hi' 
              ? 'प्रैक्टिकल लैब अभ्यास कार्य' 
              : 'Practical Hands-on Assignment (प्रैक्टिकल कार्य)'}
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            {topic.practiceTask}
          </p>
          <Link
            href="/playground"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-300 hover:underline"
          >
            Launch Code Playground to Practice →
          </Link>
        </div>
      )}

      {/* ================= 17. Next / Previous Navigation Bar ================= */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {prevTopic ? (
          <Link
            href={`/units/${prevTopic.unitSlug}/topics/${prevTopic.slug}`}
            className="flex items-center gap-2 p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-500 text-left transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-brand-600 shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">PREVIOUS TOPIC</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate block">
                {prevTopic.title}
              </span>
            </div>
          </Link>
        ) : <div className="hidden sm:block" />}

        {nextTopic ? (
          <Link
            href={`/units/${nextTopic.unitSlug}/topics/${nextTopic.slug}`}
            className="flex items-center justify-between gap-2 p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-500 text-right transition-colors group sm:col-start-2"
          >
            <div className="min-w-0 text-left sm:text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">NEXT TOPIC</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate block">
                {nextTopic.title}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-brand-600 shrink-0" />
          </Link>
        ) : <div className="hidden sm:block" />}
      </div>

    </article>
  );
}
