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
  ShieldCheck,
  Languages,
  Flame,
  Check,
  Play,
  Monitor,
  GraduationCap,
  FolderGit2,
  ExternalLink,
  Laptop,
  Cpu,
  Layers,
  FileSpreadsheet,
  Globe,
  Mail,
  CreditCard,
  Lock
} from 'lucide-react';
import { cccChaptersData, cccSyllabusMeta } from '@/data/cccSyllabusData';
import { useProgress } from '@/lib/progressContext';
import { useLanguage } from '@/lib/languageContext';

export default function CCCLandingPage() {
  const { streak, overallPercentage } = useProgress();
  const { language } = useLanguage();
  const [activeOfficeTab, setActiveOfficeTab] = useState('writer');

  const officeSnippets = {
    writer: {
      app: "LibreOffice Writer",
      shortcut: "Ctrl + Shift + P (Superscript X²)",
      ext: ".odt",
      desc: "Create letters, reports, and books with Mail Merge, table formatting, and PDF export.",
      keys: ["Ctrl+F12 (Table)", "Ctrl+Shift+O (Print Preview)", "F7 (Spell Check)", "Ctrl+Shift+S (Save As)"]
    },
    calc: {
      app: "LibreOffice Calc",
      shortcut: "Ctrl + ; (Current Date)",
      ext: ".ods",
      desc: "1,048,576 Rows & 1,024 Columns (AMJ). Built-in formulas: =SUM(), =AVERAGE(), =COUNT(), =NOW().",
      keys: ["AMJ (Last Col)", "Ctrl+Shift+; (Time)", "F2 (Edit Cell)", "Ctrl+1 (Format Cell)"]
    },
    impress: {
      app: "LibreOffice Impress",
      shortcut: "F5 (Start Show) | Shift + F5 (Current Slide)",
      ext: ".odp",
      desc: "Design presentations with Master Slides, custom animations, transitions, and 5%-3000% zoom.",
      keys: ["Ctrl+M (New Slide)", "Esc (Exit Show)", "Ctrl+F5 (Sidebar)", "View ➔ Master Slide"]
    }
  };

  return (
    <div className="space-y-16 py-2 max-w-7xl mx-auto">
      
      {/* =========================================================================
          1. ULTRA-MODERN 2-COLUMN HERO SECTION: CCC Curriculum Showcase
      ========================================================================= */}
      <section className="relative pt-4 pb-8 lg:pt-8 lg:pb-12 border-b border-slate-200 dark:border-slate-800">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-navy/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: HERO HEADLINE & CTAs ================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Accreditation Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-mono font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>NIELIT COURSE ON COMPUTER CONCEPTS [CCC]</span>
              </div>

              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold font-mono">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>Revision 3 (Official 80 Hours)</span>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Course on Computer Concepts
              </h1>
              
              <div className="pt-1">
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-navy dark:text-brand-400 hindi-text block leading-relaxed">
                  कंप्यूटर अवधारणाओं पर पाठ्यक्रम (CCC) — संपूर्ण अध्ययन मंच
                </span>
              </div>
            </div>

            {/* Value Proposition */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
              The complete bilingual learning studio for NIELIT CCC aspirants. Master 
              <strong className="text-slate-900 dark:text-white font-semibold"> LibreOffice (Writer, Calc, Impress)</strong>, 
              <strong className="text-slate-900 dark:text-white font-semibold"> Ubuntu OS</strong>, 
              <strong className="text-slate-900 dark:text-white font-semibold"> Digital Banking (UPI/AEPS)</strong>, and 
              <strong className="text-slate-900 dark:text-white font-semibold"> 100-Question Exam Simulator</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/ccc/chapters/chapter-1"
                className="px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Start Learning Chapter 01</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/ccc/notes"
                className="px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-appborder text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-2xs"
              >
                <FileText className="w-4 h-4 text-accent-blue" />
                <span>Unit Notes &amp; PDF Library</span>
              </Link>

              <Link
                href="/ccc/syllabus"
                className="px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-appborder text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-2xs"
              >
                <BookOpen className="w-4 h-4 text-navy dark:text-brand-400" />
                <span>80H Syllabus</span>
              </Link>

              <Link
                href="/ccc/mock-test"
                className="px-5 py-3.5 rounded-xl bg-brand-50 dark:bg-brand-950/50 hover:bg-brand-100 dark:hover:bg-brand-900/40 border border-brand-200 dark:border-brand-800 text-brand-900 dark:text-brand-300 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-2xs"
              >
                <Award className="w-4 h-4 text-brand-600" />
                <span>100M Mock Test</span>
              </Link>
            </div>

            {/* Credibility & Specification Mini-Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 block">Total Duration</span>
                <strong className="text-sm font-black text-slate-900 dark:text-white">80 Hours</strong>
                <span className="text-[10px] text-slate-500 block">32h Th + 48h Lab</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 block">Official Format</span>
                <strong className="text-sm font-black text-slate-900 dark:text-white">100 Questions</strong>
                <span className="text-[10px] text-slate-500 block">90 Mins • Pass 50%</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 block">FOSS Ecosystem</span>
                <strong className="text-sm font-black text-slate-900 dark:text-white">LibreOffice</strong>
                <span className="text-[10px] text-slate-500 block">Writer, Calc, Impress</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 block">Bilingual</span>
                <strong className="text-sm font-black text-slate-900 dark:text-white">100% Dual</strong>
                <span className="text-[10px] text-slate-500 block">English + हिन्दी</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE LIBREOFFICE SHOWCASE ================= */}
          <div className="lg:col-span-5 relative">
            
            {/* FOSS Window Frame */}
            <div className="relative rounded-xl border border-slate-800 bg-slate-950 text-white shadow-xs overflow-hidden">
              
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
                    onClick={() => setActiveOfficeTab('writer')}
                    className={`px-2.5 py-0.5 rounded transition-all cursor-pointer ${
                      activeOfficeTab === 'writer' ? 'bg-brand-500 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Writer (.odt)
                  </button>
                  <button
                    onClick={() => setActiveOfficeTab('calc')}
                    className={`px-2.5 py-0.5 rounded transition-all cursor-pointer ${
                      activeOfficeTab === 'calc' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Calc (.ods)
                  </button>
                  <button
                    onClick={() => setActiveOfficeTab('impress')}
                    className={`px-2.5 py-0.5 rounded transition-all cursor-pointer ${
                      activeOfficeTab === 'impress' ? 'bg-amber-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Impress (.odp)
                  </button>
                </div>

                <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  FOSS
                </span>
              </div>

              {/* Showcase Body */}
              <div className="p-5 font-mono text-xs space-y-3 bg-slate-950">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-sm text-brand-400">{officeSnippets[activeOfficeTab].app}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    Ext: {officeSnippets[activeOfficeTab].ext}
                  </span>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed font-sans">
                  {officeSnippets[activeOfficeTab].desc}
                </p>

                {/* Hotkeys Mini Strip */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Frequent Exam Hotkeys:</span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {officeSnippets[activeOfficeTab].keys.map((k, idx) => (
                      <div key={idx} className="p-1.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-brand-300 font-mono">
                        {k}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action Bar */}
              <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                    ★
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-white block">Official NIELIT FOSS Standard</span>
                    <span className="text-[10px] text-slate-400">Ubuntu Linux &amp; LibreOffice</span>
                  </div>
                </div>

                <Link
                  href="/ccc/cheat-sheets"
                  className="px-3 py-1.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-[11px] font-bold transition-all flex items-center gap-1 shadow-xs"
                >
                  <span>All Shortcuts</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="hidden sm:flex items-center gap-1.5 absolute -bottom-3 -left-3 px-3 py-1 rounded-xl bg-slate-900 border border-brand-500/40 text-brand-300 text-xs font-bold shadow-xl">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>100-Question Exam Simulator</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 absolute -top-3 -right-3 px-3 py-1 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 text-xs font-bold shadow-xl">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>80h Official Blueprint</span>
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
            PROVEN CCC STUDY METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            How to Clear NIELIT CCC with Grade &apos;S&apos;
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Follow our structured 3-tier study pipeline designed specifically for NIELIT CCC online examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Step 1 */}
          <div className="p-5 sm:p-6 rounded-xl border border-appborder bg-white dark:bg-slate-900 shadow-xs space-y-4 hover:border-brand-500/80 transition-all group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider border bg-accent-blue/10 text-accent-blue border-accent-blue/20">
                  STEP 01
                </span>
                <span className="text-[11px] font-mono text-slate-400">Concepts</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors leading-snug">
                Read 18-Part Chapter Notes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Every chapter covers LibreOffice interfaces, shortcuts, Linux commands, UPI/AEPS finance rules, and cyber security traps in Hindi &amp; English.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <Link href="/ccc/chapters/chapter-1" className="text-xs font-semibold text-accent-blue hover:underline inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                <span>Explore Chapter 1 Notes</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-5 sm:p-6 rounded-xl border border-appborder bg-white dark:bg-slate-900 shadow-xs space-y-4 hover:border-brand-500/80 transition-all group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider border bg-brand-50 text-brand-700 dark:bg-brand-950/80 dark:text-brand-300 border-brand-200 dark:border-brand-800">
                  STEP 02
                </span>
                <span className="text-[11px] font-mono text-slate-400">Shortcuts</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors leading-snug">
                Master LibreOffice &amp; Tools
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Learn Writer (.odt), Calc (.ods), and Impress (.odp) hotkeys, Calc formulas (=SUM, =COUNT, =NOW), and digital banking USSD (*99#) codes.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <Link href="/ccc/cheat-sheets" className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                <span>Open Shortcut Cheat Sheets</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-5 sm:p-6 rounded-xl border border-appborder bg-white dark:bg-slate-900 shadow-xs space-y-4 hover:border-brand-500/80 transition-all group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider border bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
                  STEP 03
                </span>
                <span className="text-[11px] font-mono text-slate-400">Simulation</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors leading-snug">
                100-Question Mock Exam
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Experience the official 90-minute 100-question timed exam environment with instant grading, grade badges (S, A, B, C, D), and question analysis.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <Link href="/ccc/mock-test" className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                <span>Start Full Mock Exam</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. COMPLETE 9-CHAPTER SYLLABUS DIRECTORY (80 Hours)
      ========================================================================= */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-appborder pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              OFFICIAL CCC SYLLABUS DIRECTORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
              All 9 Chapters (80 Hours Blueprint)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Explore chapter notes, shortcuts, questions, and practical tasks for each CCC module
            </p>
          </div>

          <Link
            href="/ccc/syllabus"
            className="px-4 py-2 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-bold text-xs hover:bg-brand-100 transition-colors flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View Full 80H Blueprint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {cccChaptersData.map((ch) => (
            <div
              key={ch.slug}
              className="p-5 sm:p-6 rounded-xl border border-appborder bg-white dark:bg-slate-900 hover:border-brand-500/80 transition-all flex flex-col justify-between group space-y-4 shadow-xs"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider border bg-accent-blue/10 text-accent-blue border-accent-blue/20">
                    CHAPTER {ch.chapterNumber}
                  </span>
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 font-mono">
                    {ch.totalHours} Hours ({ch.marksWeight})
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug line-clamp-1">
                  {ch.title}
                </h3>
                
                <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 hindi-text line-clamp-1">
                  {ch.hindiTitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {ch.description}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>{ch.topics?.length || 8} Topics</span>
                  <span className="font-mono font-semibold">
                    {ch.theoryHours}h Th • {ch.practicalHours}h Lab
                  </span>
                </div>

                <Link
                  href={`/ccc/chapters/${ch.slug}`}
                  className="w-full py-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-brand-500 group-hover:text-white text-slate-700 dark:text-slate-200 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Chapter {ch.chapterNumber}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. FAST-TRACK REVISION VAULT
      ========================================================================= */}
      <section className="p-6 sm:p-8 rounded-xl bg-navy text-white border border-navy-800 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              FAST-TRACK EXAM REVISION
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              CCC Last-Minute Exam Preparation Vault
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Golden facts, side-by-side differences, and LibreOffice shortcut tables
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/ccc/one-liners"
            className="p-5 rounded-lg bg-navy-800/80 border border-navy-700 hover:border-amber-400 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 font-mono">100 POINTS</span>
                <FileText className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                100 Golden Points
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Curated memory pointers, memory bits, protocol ports, and repeated CCC questions.
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 pt-3 mt-3 border-t border-navy-700">
              <span>Read Golden Points</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          <Link
            href="/ccc/differences"
            className="p-5 rounded-lg bg-navy-800/80 border border-navy-700 hover:border-accent-blue transition-all flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-accent-blue font-mono">DIFFERENCES</span>
                <Columns className="w-4 h-4 text-accent-blue" />
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-sky-300 transition-colors">
                Concept Differences
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                RAM vs ROM, NEFT vs RTGS vs IMPS, IPv4 vs IPv6, and LibreOffice vs MS Office tables.
              </p>
            </div>
            <span className="text-xs font-semibold text-accent-blue group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 pt-3 mt-3 border-t border-navy-700">
              <span>Compare Concepts</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          <Link
            href="/ccc/cheat-sheets"
            className="p-5 rounded-lg bg-navy-800/80 border border-navy-700 hover:border-brand-400 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand-400 font-mono">SHORTCUTS</span>
                <Code2 className="w-4 h-4 text-brand-400" />
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-brand-300 transition-colors">
                LibreOffice Cheat Sheets
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complete shortcut tables for Writer, Calc, Impress, Calc formulas, and USSD financial codes.
              </p>
            </div>
            <span className="text-xs font-semibold text-brand-400 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 pt-3 mt-3 border-t border-navy-700">
              <span>View Cheat Sheets</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          5. FINAL CALL TO ACTION
      ========================================================================= */}
      <section className="text-center p-8 sm:p-10 rounded-xl bg-navy text-white border border-navy-800 shadow-sm space-y-4">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          Ready to Ace NIELIT CCC with Grade &apos;S&apos;?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Start your learning journey now with Chapter 01. Complete interactive notes, shortcuts, and practice quizzes are 100% free with zero registration.
        </p>
        <div className="pt-2">
          <Link
            href="/ccc/chapters/chapter-1"
            className="px-6 py-3 rounded-lg bg-brand-500 text-white hover:bg-brand-600 font-bold text-xs sm:text-sm shadow-2xs transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Start Chapter 01 (Introduction to Computer)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
