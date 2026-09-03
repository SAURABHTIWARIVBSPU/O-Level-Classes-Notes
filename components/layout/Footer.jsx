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
  ExternalLink,
  Laptop
} from 'lucide-react';
import { unitsData } from '@/data/syllabusData';
import { cccChaptersData } from '@/data/cccSyllabusData';
import { useFullscreen } from '@/lib/fullscreenContext';

export default function Footer() {
  const { isFullscreen } = useFullscreen();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isFullscreen) {
    return null;
  }

  const highYieldTopics = [
    { title: 'CCC Ch 1: Computer & Hardware', href: '/ccc/chapters/chapter-1' },
    { title: 'CCC Ch 3: LibreOffice Writer', href: '/ccc/chapters/chapter-3' },
    { title: 'CCC Ch 4: LibreOffice Calc', href: '/ccc/chapters/chapter-4' },
    { title: 'CCC Ch 5: LibreOffice Impress', href: '/ccc/chapters/chapter-5' },
    { title: 'CCC Ch 8: UPI & Digital Banking', href: '/ccc/chapters/chapter-8' },
    { title: 'CCC 100-Mark Mock Test', href: '/ccc/mock-test' },
    { title: 'O-Level HTML DOM Tree', href: '/units/unit-3/topics/head-section-and-elements' },
    { title: 'O-Level CSS Box Model', href: '/units/unit-4/topics/introduction-to-css' },
    { title: 'O-Level JavaScript Events', href: '/units/unit-6/topics/client-side-scripting-intro' }
  ];

  return (
    <footer className="border-t border-appborder bg-white dark:bg-darkbg text-slate-700 dark:text-slate-300 transition-colors duration-200 mt-20">
      
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
                  NIELIT Learning Studio
                </span>
                <span className="text-[11px] font-mono text-brand-600 dark:text-brand-400 font-bold block">
                  O-LEVEL (M2-R5.1) &amp; CCC (REVISION 3)
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              The premier bilingual interactive learning platform for 
              <strong> NIELIT O-Level (Web Designing)</strong> &amp; 
              <strong> CCC (Course on Computer Concepts)</strong>. Complete 18-part notes, digital whiteboard, live sandbox, and exam simulators.
            </p>

            {/* Dual Course Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <Link href="/" className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-appborder px-2.5 py-1 rounded-lg shadow-2xs font-mono text-[11px] hover:text-brand-600">
                <GraduationCap className="w-3.5 h-3.5 text-brand-600" />
                O-Level M2-R5.1 (120h)
              </Link>
              <Link href="/ccc" className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-appborder px-2.5 py-1 rounded-lg shadow-2xs font-mono text-[11px] hover:text-brand-600">
                <Laptop className="w-3.5 h-3.5 text-accent-blue" />
                CCC Course (80h)
              </Link>
            </div>
          </div>

          {/* CCC Modules 01 - 09 (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
              <Laptop className="w-3.5 h-3.5 text-accent-blue" />
              <span>CCC Modules (80H)</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/ccc/chapters/chapter-1" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors block">
                  Ch 1: Intro to Computer &amp; Hardware
                </Link>
              </li>
              <li>
                <Link href="/ccc/chapters/chapter-2" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors block">
                  Ch 2: Operating System (Linux/Windows)
                </Link>
              </li>
              <li>
                <Link href="/ccc/chapters/chapter-3" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors block">
                  Ch 3: LibreOffice Writer (.odt)
                </Link>
              </li>
              <li>
                <Link href="/ccc/chapters/chapter-4" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors block">
                  Ch 4: LibreOffice Calc (.ods)
                </Link>
              </li>
              <li>
                <Link href="/ccc/chapters/chapter-5" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors block">
                  Ch 5: LibreOffice Impress (.odp)
                </Link>
              </li>
              <li>
                <Link href="/ccc/chapters/chapter-8" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors block">
                  Ch 8: UPI, AEPS &amp; Net Banking
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/ccc/syllabus" className="font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1">
                  <span>80H CCC Blueprint</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* O-Level M2-R5.1 Units (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-brand-600" />
              <span>O-Level Units</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              {unitsData.slice(0, 5).map((unit) => (
                <li key={unit.slug}>
                  <Link 
                    href={`/units/${unit.slug}`} 
                    className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors block"
                  >
                    U0{unit.unitNumber}: {unit.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/syllabus" className="font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1">
                  <span>100M O-Level Blueprint</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice, MCQs & Mock Simulators (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Exams &amp; Simulators</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/ccc/mock-test" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>CCC 100-Mark Mock Exam</span>
                </Link>
              </li>
              <li>
                <Link href="/ccc/mcqs" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>CCC 200+ Chapter MCQs</span>
                </Link>
              </li>
              <li>
                <Link href="/ccc/cheat-sheets" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>LibreOffice Shortcuts</span>
                </Link>
              </li>
              <li>
                <Link href="/classroom" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-1.5">
                  <Presentation className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                  <span>Digital Board Classroom</span>
                </Link>
              </li>
              <li>
                <Link href="/playground" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span>Live Code Sandbox</span>
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
                className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-appborder text-[11px] font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 hover:border-brand-500 transition-colors shadow-2xs"
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
              © 2026 NIELIT Standard Learning Portal • O-Level (M2-R5.1) &amp; CCC (Course on Computer Concepts)
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              National Institute of Electronics &amp; Information Technology (NIELIT) Open Educational Platform.
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
