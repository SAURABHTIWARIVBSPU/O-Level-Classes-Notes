'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Presentation, 
  Terminal, 
  HelpCircle, 
  FileText, 
  Columns, 
  Code2, 
  Award, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ChevronRight,
  Layers,
  Zap,
  ShieldCheck,
  Languages,
  Flame,
  Check,
  Play,
  Monitor,
  GraduationCap,
  FolderGit2,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { unitsData, syllabusMeta } from '@/data/syllabusData';
import { useProgress } from '@/lib/progressContext';
import { useLanguage } from '@/lib/languageContext';

export default function HomePage() {
  const { streak, overallPercentage, completedTopics } = useProgress();
  const { language, changeLanguage } = useLanguage();
  const [activeCodeTab, setActiveCodeTab] = useState('html');

  const codeSnippets = {
    html: `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <title>NIELIT M2-R5.1</title>
</head>
<body>
  <header class="studio-header">
    <h1>Web Designing & Publishing</h1>
    <p>वेब डिजाइनिंग एवं पब्लिशिंग</p>
  </header>
  <main class="grid-layout">
    <article>HTML5 + CSS3 + JS</article>
  </main>
</body>
</html>`,
    css: `/* CSS3 Modern Flexbox Layout */
.studio-header {
  background: linear-gradient(135deg, #0284c7, #4f46e5);
  color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  text-align: center;
}
.grid-layout {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}`,
    js: `// Client-Side Form Validation (Unit 6)
function validateEmail(input) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!regex.test(input.value)) {
    alert("कृपया वैध ईमेल दर्ज करें!");
    return false;
  }
  return true;
}`
  };

  return (
    <div className="space-y-16 py-2 max-w-7xl mx-auto">
      
      {/* =========================================================================
          1. ULTRA-MODERN 2-COLUMN HERO SECTION: Sleek, Integrated & Engaging
      ========================================================================= */}
      <section className="relative pt-4 pb-8 lg:pt-8 lg:pb-12 border-b border-slate-200 dark:border-slate-800">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: HERO HEADLINE & CTAs ================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Accreditation Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/80 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-mono font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>NIELIT O-LEVEL (IT) • MODULE M2-R5.1</span>
              </div>

              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold font-mono">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>2026 Updated Edition</span>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Web Designing &amp; Publishing
              </h1>
              
              <div className="pt-1">
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-indigo-300 dark:to-teal-300 hindi-text block leading-relaxed">
                  वेब डिजाइनिंग एवं पब्लिशिंग (M2-R5.1)
                </span>
              </div>
            </div>

            {/* Value Proposition */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
              The complete bilingual interactive learning platform for NIELIT aspirants and digital smartboard instructors. 
              Master web development with <strong className="text-slate-900 dark:text-white font-semibold">18-part notes</strong>, 
              <strong className="text-slate-900 dark:text-white font-semibold"> live in-browser coding</strong>, and 
              <strong className="text-slate-900 dark:text-white font-semibold"> 200+ exam MCQs</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/units/unit-1"
                className="px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Start Learning Unit 01</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/syllabus"
                className="px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-2xs"
              >
                <BookOpen className="w-4 h-4 text-brand-600" />
                <span>100M Syllabus Blueprint</span>
              </Link>

              <Link
                href="/classroom"
                className="px-5 py-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 hover:bg-amber-100 dark:hover:bg-amber-900/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-2xs"
              >
                <Presentation className="w-4 h-4 text-amber-500" />
                <span>Digital Smart Board</span>
              </Link>
            </div>

            {/* Credibility & Specification Mini-Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 block">Total Duration</span>
                <strong className="text-sm font-black text-slate-900 dark:text-white">120 Hours</strong>
                <span className="text-[10px] text-slate-500 block">48h Th + 72h Lab</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 block">Exam Blueprint</span>
                <strong className="text-sm font-black text-slate-900 dark:text-white">100 Marks</strong>
                <span className="text-[10px] text-slate-500 block">Theory + Practical</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 block">Question Bank</span>
                <strong className="text-sm font-black text-slate-900 dark:text-white">200+ MCQs</strong>
                <span className="text-[10px] text-slate-500 block">Timed Mock Tests</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 block">Clarity</span>
                <strong className="text-sm font-black text-slate-900 dark:text-white">100% Bilingual</strong>
                <span className="text-[10px] text-slate-500 block">English + हिन्दी</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE CODE & VISUAL STUDIO ================= */}
          <div className="lg:col-span-5 relative">
            
            {/* Window Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 via-indigo-500/20 to-sky-500/20 rounded-3xl blur-2xl pointer-events-none" />

            {/* IDE Window Frame */}
            <div className="relative rounded-2xl border border-slate-700/80 bg-slate-950 text-white shadow-2xl overflow-hidden backdrop-blur-md">
              
              {/* Window Header */}
              <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveCodeTab('html')}
                    className={`px-2.5 py-0.5 rounded transition-all ${
                      activeCodeTab === 'html' ? 'bg-brand-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    index.html
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('css')}
                    className={`px-2.5 py-0.5 rounded transition-all ${
                      activeCodeTab === 'css' ? 'bg-brand-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    style.css
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('js')}
                    className={`px-2.5 py-0.5 rounded transition-all ${
                      activeCodeTab === 'js' ? 'bg-brand-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    script.js
                  </button>
                </div>

                <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
              </div>

              {/* Code Body */}
              <div className="p-4 font-mono text-[11px] leading-relaxed text-slate-200 overflow-x-auto bg-slate-950 max-h-60 sm:max-h-64">
                <pre className="text-emerald-300">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Live Rendered Output Bar */}
              <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                    ▶
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-white block">Instant Client Sandbox</span>
                    <span className="text-[10px] text-slate-400">Zero Setup Required</span>
                  </div>
                </div>

                <Link
                  href="/playground"
                  className="px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-[11px] font-bold transition-all flex items-center gap-1 shadow-sm"
                >
                  <span>Open Sandbox</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="hidden sm:flex items-center gap-1.5 absolute -bottom-3 -left-3 px-3 py-1 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-xl">
              <Presentation className="w-3.5 h-3.5 text-amber-400" />
              <span>Smart Touchboard Native</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 absolute -top-3 -right-3 px-3 py-1 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 text-xs font-bold shadow-xl">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>100-Mark Blueprint</span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. HOW IT WORKS: 3-Step Guided Learning Methodology
      ========================================================================= */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            PROVEN STUDY METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            How to Study &amp; Score Grade &apos;S&apos;
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Follow our structured 3-tier study pipeline designed specifically for NIELIT O-Level examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4 hover:border-brand-500 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center font-black text-lg shadow-sm">
              01
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-brand-600 dark:text-brand-400 uppercase">
                STEP 1: BILINGUAL CONCEPTS
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Read Structured 18-Part Notes
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Every topic contains official definitions, simple real-world analogies, line-by-line code breakdowns, golden points, and NIELIT exam traps in both English and Hindi.
            </p>
            <div className="pt-2">
              <Link href="/units/unit-1" className="text-xs font-bold text-brand-600 hover:underline flex items-center gap-1">
                Explore Unit 1 Notes <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4 hover:border-sky-500 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-black text-lg shadow-sm">
              02
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-sky-600 dark:text-sky-400 uppercase">
                STEP 2: PRACTICAL HANDS-ON
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Run Code in Live Sandbox
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              No need to install heavy software. Write HTML5, CSS3, W3.CSS, and JavaScript code in your browser with instant live output and fullscreen teacher whiteboard mode.
            </p>
            <div className="pt-2">
              <Link href="/playground" className="text-xs font-bold text-sky-600 hover:underline flex items-center gap-1">
                Open Code Sandbox <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4 hover:border-emerald-500 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-lg shadow-sm">
              03
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                STEP 3: EXAM RETENTION
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Practice 200 MCQs &amp; Mock Tests
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Test your recall with unit-wise micro-quizzes, 100 golden exam points, 17 concept difference tables, and full 100-mark timed examination simulation.
            </p>
            <div className="pt-2">
              <Link href="/mcqs" className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1">
                Take MCQ Practice <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OFFICIAL SYLLABUS ROADMAP: All 8 Units Directory
      ========================================================================= */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              COMPLETE SYLLABUS DIRECTORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
              8 Core Syllabus Modules (120 Hours)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Explore lesson plans, theory notes, runnable code examples, and practice questions for each unit
            </p>
          </div>

          <Link
            href="/syllabus"
            className="px-4 py-2 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-bold text-xs hover:bg-brand-100 transition-colors flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View Marks Distribution Table (100M)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {unitsData.map((unit) => (
            <div
              key={unit.slug}
              className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-500 dark:hover:border-brand-500 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                    UNIT {unit.unitNumber}
                  </span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">
                    {unit.totalHours} Hours
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors leading-snug">
                  {unit.title}
                </h3>
                
                <p className="text-xs font-bold text-brand-600 dark:text-brand-400 hindi-text">
                  {unit.hindiTitle}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {unit.description}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>{unit.topics?.length || 8} Topics</span>
                  <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                    {unit.theoryHours}h Th + {unit.practicalHours}h Lab
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/units/${unit.slug}`}
                    className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-brand-600 group-hover:text-white text-slate-800 dark:text-slate-200 text-xs font-bold transition-all text-center flex items-center justify-center gap-1"
                  >
                    <span>Explore Unit {unit.unitNumber}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. SPECIALIZED LEARNING STUDIOS: Smartboard, Sandbox, MCQs, Revision
      ========================================================================= */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            INTERACTIVE SUITE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Specialized Learning Portals &amp; Tools
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Everything you need for teaching in digital classrooms and self-paced exam practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Digital Smartboard */}
          <Link
            href="/classroom"
            className="p-6 rounded-3xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 hover:border-amber-500 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
                <Presentation className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                Digital Board Studio
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Touchscreen canvas for sketching web architectures with built-in vector templates (DOM Tree, Box Model, Client-Server) and split live code.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1">
              Launch Smartboard →
            </span>
          </Link>

          {/* Card 2: Code Sandbox */}
          <Link
            href="/playground"
            className="p-6 rounded-3xl border border-sky-200 dark:border-sky-900/60 bg-sky-50/40 dark:bg-sky-950/20 hover:border-sky-500 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-bold shadow-md">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                Live Code Playground
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Browser-based editor for HTML5, CSS3, W3.CSS, and JavaScript with instant output, preloaded NIELIT practical templates, and fullscreen view.
              </p>
            </div>
            <span className="text-xs font-bold text-sky-700 dark:text-sky-300 flex items-center gap-1">
              Open Sandbox →
            </span>
          </Link>

          {/* Card 3: 200 MCQ Bank */}
          <Link
            href="/mcqs"
            className="p-6 rounded-3xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 hover:border-emerald-500 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                200 MCQ Exam Bank
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Unit-wise multiple choice questions with bilingual Hindi/English explanations, instant answer validation, and score calculation.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
              Practice MCQs →
            </span>
          </Link>

          {/* Card 4: Mock Test Simulator */}
          <Link
            href="/mock-test"
            className="p-6 rounded-3xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 hover:border-rose-500 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-rose-600 transition-colors">
                100-Mark Mock Exam
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Full-length timed mock examination simulating the official NIELIT exam pattern with question palette and grade performance analysis.
              </p>
            </div>
            <span className="text-xs font-bold text-rose-700 dark:text-rose-300 flex items-center gap-1">
              Start Mock Exam →
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          5. RAPID REVISION VAULT: 100 Golden Points, Differences, Cheat Sheets
      ========================================================================= */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              FAST-TRACK EXAM REVISION
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              Last-Minute Exam Preparation Vault
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              High-yield facts, side-by-side comparison tables, and syntax quick-references
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/one-liners"
            className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-amber-400 transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                100 Golden Points
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Curated memory pointers and high-frequency exam facts for instant pre-exam recall.
            </p>
          </Link>

          <Link
            href="/differences"
            className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-cyan-400 transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                <Columns className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                17 Concept Differences
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Side-by-side comparison tables: HTML vs HTML5, Class vs ID, CSS vs W3.CSS, and more.
            </p>
          </Link>

          <Link
            href="/cheat-sheets"
            className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-indigo-400 transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-indigo-300 transition-colors">
                Syntax Cheat Sheets
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Quick syntax lookups for HTML tags, CSS properties, JavaScript methods, and W3.CSS classes.
            </p>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          6. FINAL CALL TO ACTION BANNER: Inspiring Call to Action
      ========================================================================= */}
      <section className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-700 text-white shadow-xl space-y-4">
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
          Ready to Clear NIELIT O-Level with High Marks?
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-brand-100 max-w-xl mx-auto leading-relaxed">
          Start your learning journey now with Unit 01. Complete interactive notes, runnable code, and practice quizzes are 100% free with zero registration.
        </p>
        <div className="pt-2">
          <Link
            href="/units/unit-1"
            className="px-8 py-3.5 rounded-xl bg-white text-brand-700 hover:bg-brand-50 font-black text-sm shadow-xl transition-all inline-flex items-center gap-2"
          >
            <span>Start Unit 01 (Introduction to Web Design)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
