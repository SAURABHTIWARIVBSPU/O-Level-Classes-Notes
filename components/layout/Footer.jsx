'use client';

import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  GraduationCap, 
  ShieldCheck, 
  Heart, 
  Presentation, 
  Terminal, 
  BookMarked,
  HelpCircle,
  Award,
  FileText,
  Columns,
  Code2,
  FolderGit2,
  Flame,
  Search,
  ArrowUp,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { unitsData, syllabusMeta } from '@/data/syllabusData';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const highYieldTopics = [
    { title: 'HTML DOM Tree', href: '/units/unit-3/topics/head-section-and-elements' },
    { title: 'CSS Box Model', href: '/units/unit-4/topics/introduction-to-css' },
    { title: 'HTML5 Semantic Tags', href: '/units/unit-3/topics/html5-new-semantic-elements' },
    { title: 'W3.CSS 12-Col Grid', href: '/units/unit-5/topics/website-development-using-w3-css' },
    { title: 'Client-Server Model', href: '/units/unit-1/topics/working-of-websites' },
    { title: 'JavaScript Event Flow', href: '/units/unit-6/topics/client-side-scripting-intro' },
    { title: 'AngularJS Directives', href: '/units/unit-6/topics/angular-js-directives-ng-app-model' },
    { title: 'Web Publishing & FTP', href: '/units/unit-8/topics/overview-of-web-publishing' },
    { title: '17 Concept Differences', href: '/differences' },
    { title: '100 Golden Points', href: '/one-liners' },
    { title: 'Syntax Cheat Sheets', href: '/cheat-sheets' },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 transition-colors duration-200 mt-20">
      
      {/* ================= 1. PRIMARY MULTI-COLUMN NAVIGATION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Brand & Accreditation Column (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 bg-white p-1 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/logo.png" 
                  alt="MSITM Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-black text-base tracking-tight text-slate-900 dark:text-white block">
                  O-Level Learning Studio
                </span>
                <span className="text-[11px] font-mono text-brand-600 dark:text-brand-400 font-bold block">
                  NIELIT MODULE M2-R5.1
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              The premier bilingual interactive learning platform for NIELIT O-Level IT 
              <strong> Module M2-R5.1 (Web Designing &amp; Publishing)</strong>. Complete 18-part notes, digital touchscreen whiteboard, live code sandbox, and 200 MCQ exam questions.
            </p>

            {/* Accreditation Specification Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-lg shadow-2xs font-mono text-[11px]">
                <GraduationCap className="w-3.5 h-3.5 text-brand-600" />
                120h Curriculum
              </span>
              <span className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-lg shadow-2xs font-mono text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                100 Marks Blueprint
              </span>
              <span className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-lg shadow-2xs font-mono text-[11px]">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                2026 Edition
              </span>
            </div>
          </div>

          {/* Syllabus Units 01 - 04 (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-brand-600" />
              <span>Units 01 — 04</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {unitsData.slice(0, 4).map((unit) => (
                <li key={unit.slug}>
                  <Link 
                    href={`/units/${unit.slug}`} 
                    className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors block py-0.5"
                  >
                    <span className="font-mono text-[11px] text-slate-400 mr-1">U{unit.unitNumber}</span>
                    {unit.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Syllabus Units 05 - 08 (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              <span>Units 05 — 08</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {unitsData.slice(4, 8).map((unit) => (
                <li key={unit.slug}>
                  <Link 
                    href={`/units/${unit.slug}`} 
                    className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors block py-0.5"
                  >
                    <span className="font-mono text-[11px] text-slate-400 mr-1">U{unit.unitNumber}</span>
                    {unit.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link 
                  href="/syllabus" 
                  className="font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
                >
                  <span>Marks Blueprint (100M)</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Interactive Tools & Practice (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-sky-600" />
              <span>Practice &amp; Labs</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/classroom" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Presentation className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Digital Board</span>
                </Link>
              </li>
              <li>
                <Link href="/playground" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span>Code Playground</span>
                </Link>
              </li>
              <li>
                <Link href="/mcqs" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>200 MCQ Bank</span>
                </Link>
              </li>
              <li>
                <Link href="/mock-test" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>100-Mark Mock Test</span>
                </Link>
              </li>
              <li>
                <Link href="/practical" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                  <span>Practical Workbook</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Revision & Utilities (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-purple-600" />
              <span>Revision Vault</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/one-liners" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>100 Golden Points</span>
                </Link>
              </li>
              <li>
                <Link href="/differences" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-1.5">
                  <Columns className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span>17 Differences</span>
                </Link>
              </li>
              <li>
                <Link href="/cheat-sheets" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>Syntax Cheat Sheets</span>
                </Link>
              </li>
              <li>
                <Link href="/one-shot" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>One-Shot Revision</span>
                </Link>
              </li>
              <li>
                <Link href="/saved" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-1.5">
                  <BookMarked className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                  <span>My Saved Notes</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= 2. HIGH-YIELD TOPICS REDIRECT STRIP ================= */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>POPULAR EXAM TOPIC REDIRECTS:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {highYieldTopics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
              >
                {topic.title} →
              </Link>
            ))}
          </div>
        </div>

        {/* ================= 3. BOTTOM COPYRIGHT & ACCREDITATION STRIP ================= */}
        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-semibold text-slate-700 dark:text-slate-300">
              © 2026 NIELIT O-Level (IT) Curriculum • M2-R5.1 Web Designing &amp; Publishing
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              National Institute of Electronics &amp; Information Technology (NIELIT) Standard Open Educational Portal.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-2xs"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
