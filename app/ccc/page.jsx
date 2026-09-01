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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: HERO HEADLINE & CTAs ================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Accreditation Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold shadow-2xs">
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
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 dark:from-teal-300 dark:via-sky-300 dark:to-indigo-300 hindi-text block leading-relaxed">
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
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Start Learning Chapter 01</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/ccc/syllabus"
                className="px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-2xs"
              >
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>80H Syllabus Blueprint</span>
              </Link>

              <Link
                href="/ccc/mock-test"
                className="px-5 py-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 hover:bg-amber-100 dark:hover:bg-amber-900/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-2xs"
              >
                <Award className="w-4 h-4 text-amber-500" />
                <span>100-Mark Mock Simulator</span>
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
            
            {/* Window Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-teal-500/20 rounded-3xl blur-2xl pointer-events-none" />

            {/* FOSS Window Frame */}
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
                    onClick={() => setActiveOfficeTab('writer')}
                    className={`px-2.5 py-0.5 rounded transition-all ${
                      activeOfficeTab === 'writer' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Writer (.odt)
                  </button>
                  <button
                    onClick={() => setActiveOfficeTab('calc')}
                    className={`px-2.5 py-0.5 rounded transition-all ${
                      activeOfficeTab === 'calc' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Calc (.ods)
                  </button>
                  <button
                    onClick={() => setActiveOfficeTab('impress')}
                    className={`px-2.5 py-0.5 rounded transition-all ${
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
                  <span className="font-bold text-sm text-blue-300">{officeSnippets[activeOfficeTab].app}</span>
                  <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800 text-[10px] font-bold">
                    {officeSnippets[activeOfficeTab].ext}
                  </span>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed font-sans">
                  {officeSnippets[activeOfficeTab].desc}
                </p>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Top Exam Shortcuts:</span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {officeSnippets[activeOfficeTab].keys.map((k, i) => (
                      <div key={i} className="p-1.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-emerald-300">
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
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold transition-all flex items-center gap-1 shadow-sm"
                >
                  <span>All Shortcuts</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="hidden sm:flex items-center gap-1.5 absolute -bottom-3 -left-3 px-3 py-1 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-xl">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
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
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            PROVEN CCC STUDY METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            How to Clear NIELIT CCC with Grade &apos;S&apos;
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Follow our structured 3-tier study pipeline designed specifically for NIELIT CCC online examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4 hover:border-blue-500 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-lg shadow-sm">
              01
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                STEP 1: BILINGUAL CONCEPTS
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Read 18-Part Chapter Notes
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Every chapter covers LibreOffice interfaces, shortcuts, Linux commands, UPI/AEPS finance rules, and cyber security traps in Hindi &amp; English.
            </p>
            <div className="pt-2">
              <Link href="/ccc/chapters/chapter-1" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
                Explore Chapter 1 Notes <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4 hover:border-teal-500 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-black text-lg shadow-sm">
              02
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-teal-600 dark:text-teal-400 uppercase">
                STEP 2: SHORTCUTS &amp; LABS
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Master LibreOffice &amp; Tools
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Learn Writer (.odt), Calc (.ods), and Impress (.odp) hotkeys, Calc formulas (=SUM, =COUNT, =NOW), and digital banking USSD (*99#) codes.
            </p>
            <div className="pt-2">
              <Link href="/ccc/cheat-sheets" className="text-xs font-bold text-teal-600 hover:underline flex items-center gap-1">
                Open Shortcut Cheat Sheets <ChevronRight className="w-3.5 h-3.5" />
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
                STEP 3: EXAM SIMULATION
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                100-Question Mock Exam
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Experience the official 90-minute 100-question timed exam environment with instant grading, grade badges (S, A, B, C, D), and question analysis.
            </p>
            <div className="pt-2">
              <Link href="/ccc/mock-test" className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1">
                Start Full Mock Exam <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. COMPLETE 9-CHAPTER SYLLABUS DIRECTORY (80 Hours)
      ========================================================================= */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
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
            className="px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold text-xs hover:bg-blue-100 transition-colors flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View Full 80H Blueprint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cccChaptersData.map((ch) => (
            <div
              key={ch.slug}
              className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    CHAPTER {ch.chapterNumber}
                  </span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">
                    {ch.totalHours} Hours ({ch.marksWeight})
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors leading-snug">
                  {ch.title}
                </h3>
                
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400 hindi-text">
                  {ch.hindiTitle}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {ch.description}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>{ch.topics?.length || 8} Topics</span>
                  <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                    {ch.theoryHours}h Th + {ch.practicalHours}h Lab
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/ccc/chapters/${ch.slug}`}
                    className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-600 group-hover:text-white text-slate-800 dark:text-slate-200 text-xs font-bold transition-all text-center flex items-center justify-center gap-1"
                  >
                    <span>Explore Chapter {ch.chapterNumber}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. FAST-TRACK REVISION VAULT
      ========================================================================= */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
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
              Curated memory pointers, memory bits, protocol ports, and repeated CCC questions.
            </p>
          </Link>

          <Link
            href="/ccc/differences"
            className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-cyan-400 transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                <Columns className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                Concept Differences
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              RAM vs ROM, NEFT vs RTGS vs IMPS, IPv4 vs IPv6, and LibreOffice vs MS Office tables.
            </p>
          </Link>

          <Link
            href="/ccc/cheat-sheets"
            className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-indigo-400 transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-indigo-300 transition-colors">
                LibreOffice Cheat Sheets
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Complete shortcut tables for Writer, Calc, Impress, Calc formulas, and USSD financial codes.
            </p>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          5. FINAL CALL TO ACTION
      ========================================================================= */}
      <section className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-xl space-y-4">
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
          Ready to Ace NIELIT CCC with Grade &apos;S&apos;?
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
          Start your learning journey now with Chapter 01. Complete interactive notes, shortcuts, and practice quizzes are 100% free with zero registration.
        </p>
        <div className="pt-2">
          <Link
            href="/ccc/chapters/chapter-1"
            className="px-8 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-black text-sm shadow-xl transition-all inline-flex items-center gap-2"
          >
            <span>Start Chapter 01 (Introduction to Computer)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
