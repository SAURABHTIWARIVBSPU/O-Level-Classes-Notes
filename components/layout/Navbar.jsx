'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ChevronDown,
  BookOpen,
  HelpCircle,
  Award,
  FileText,
  Columns,
  Code2,
  Terminal,
  Presentation,
  CheckCircle2,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { useTheme } from '@/lib/themeContext';
import { useLanguage } from '@/lib/languageContext';
import { useProgress } from '@/lib/progressContext';
import { useFullscreen } from '@/lib/fullscreenContext';
import { unitsData } from '@/data/syllabusData';
import { cccChaptersData } from '@/data/cccSyllabusData';

export default function Navbar() {
  const pathname = usePathname();
  const isCccCourse = pathname.startsWith('/ccc');

  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const { streak } = useProgress();
  const { isFullscreen } = useFullscreen();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fullscreen hides navbar
  if (isFullscreen) {
    return null;
  }

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header 
      ref={navRef} 
      className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors select-none"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[54px] gap-2">
          
          {/* ================= 1. Brand Logo & Course Indicator ================= */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link 
              href={isCccCourse ? "/ccc" : "/"} 
              className="flex items-center gap-2.5 group focus:outline-none py-1"
            >
              <div className="h-7 sm:h-8 flex items-center bg-white rounded-md p-0.5 border border-slate-200/80 dark:border-slate-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/logo.png" 
                  alt="MSITM" 
                  className="h-6 sm:h-7 w-auto object-contain"
                />
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {isCccCourse ? "CCC Studio" : "O-Level Studio"}
                </span>
                <span className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded text-white tracking-wider ${
                  isCccCourse ? "bg-blue-600" : "bg-brand-600"
                }`}>
                  {isCccCourse ? "CCC (80H)" : "M2-R5.1"}
                </span>
              </div>
            </Link>
          </div>

          {/* ================= 2. Course Switcher Pill (O-Level vs CCC) ================= */}
          <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700 text-[11px] font-bold">
            <Link
              href="/"
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
                !isCccCourse 
                  ? "bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-2xs font-extrabold" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              <span>O-Level (M2-R5.1)</span>
            </Link>

            <Link
              href="/ccc"
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
                isCccCourse 
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs font-extrabold" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>CCC Computer Concepts</span>
            </Link>
          </div>

          {/* ================= 3. Contextual Navigation Links ================= */}
          <nav className="hidden lg:flex items-center gap-1 h-full text-xs font-semibold">
            
            {/* If on CCC Course */}
            {isCccCourse ? (
              <>
                {/* CCC Chapters Dropdown */}
                <div className="relative h-full flex items-center">
                  <button
                    onClick={() => toggleDropdown('cccChapters')}
                    onMouseEnter={() => setActiveDropdown('cccChapters')}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-all ${
                      activeDropdown === 'cccChapters' || pathname.startsWith('/ccc/chapters')
                        ? 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>9 Chapters</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'cccChapters' ? 'rotate-180' : ''}`} />
                  </button>

                  {activeDropdown === 'cccChapters' && (
                    <div 
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute left-0 top-[48px] w-[360px] rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150 space-y-1"
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pb-1 mb-1 border-b border-slate-100 dark:border-slate-800">
                        Official CCC Modules (80 Hours)
                      </div>
                      {cccChaptersData.map((ch) => (
                        <Link
                          key={ch.slug}
                          href={`/ccc/chapters/${ch.slug}`}
                          className="block px-2.5 py-1.5 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-slate-800 dark:hover:text-blue-300 transition-colors"
                        >
                          <span className="font-mono text-[10px] text-slate-400 mr-1.5">Ch {ch.chapterNumber}</span>
                          <span>{ch.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/ccc/syllabus"
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    pathname === '/ccc/syllabus' ? 'bg-slate-100 dark:bg-slate-800 text-blue-600 font-bold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  80H Syllabus
                </Link>

                <Link
                  href="/ccc/mcqs"
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    pathname.startsWith('/ccc/mcqs') ? 'bg-slate-100 dark:bg-slate-800 text-emerald-600 font-bold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  200 MCQs
                </Link>

                <Link
                  href="/ccc/mock-test"
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    pathname === '/ccc/mock-test' ? 'bg-slate-100 dark:bg-slate-800 text-amber-600 font-bold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  100M Mock Test
                </Link>

                <Link
                  href="/ccc/cheat-sheets"
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    pathname === '/ccc/cheat-sheets' ? 'bg-slate-100 dark:bg-slate-800 text-indigo-600 font-bold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  Shortcuts
                </Link>

                <Link
                  href="/ccc/one-liners"
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    pathname === '/ccc/one-liners' ? 'bg-slate-100 dark:bg-slate-800 text-purple-600 font-bold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  100 Points
                </Link>
              </>
            ) : (
              /* If on O-Level Course */
              <>
                {/* Tutorials & Syllabus Dropdown */}
                <div className="relative h-full flex items-center">
                  <button
                    onClick={() => toggleDropdown('tutorials')}
                    onMouseEnter={() => setActiveDropdown('tutorials')}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-all ${
                      pathname.startsWith('/units') || activeDropdown === 'tutorials'
                        ? 'bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>Tutorials</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'tutorials' ? 'rotate-180' : ''}`} />
                  </button>

                  {activeDropdown === 'tutorials' && (
                    <div 
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute left-0 top-[48px] w-[460px] rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-4 z-50 animate-in fade-in slide-in-from-top-1 duration-150 grid grid-cols-2 gap-4"
                    >
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pb-1 mb-1 border-b border-slate-100 dark:border-slate-800">
                          Syllabus Units (01-08)
                        </div>
                        {unitsData.map((u) => (
                          <Link
                            key={u.slug}
                            href={`/units/${u.slug}`}
                            className="block px-2 py-1 rounded text-xs text-slate-700 dark:text-slate-300 hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-slate-800 transition-colors"
                          >
                            <span className="font-mono text-[10px] text-slate-400 mr-1">U{u.unitNumber}</span>
                            <span>{u.title}</span>
                          </Link>
                        ))}
                      </div>

                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pb-1 mb-1 border-b border-slate-100 dark:border-slate-800">
                          Revision Vault
                        </div>
                        <Link href="/syllabus" className="block px-2 py-1 rounded text-xs text-slate-700 dark:text-slate-300 hover:bg-brand-50">
                          100M Syllabus Blueprint
                        </Link>
                        <Link href="/one-liners" className="block px-2 py-1 rounded text-xs text-slate-700 dark:text-slate-300 hover:bg-brand-50">
                          100 Golden Points
                        </Link>
                        <Link href="/differences" className="block px-2 py-1 rounded text-xs text-slate-700 dark:text-slate-300 hover:bg-brand-50">
                          17 Concept Differences
                        </Link>
                        <Link href="/cheat-sheets" className="block px-2 py-1 rounded text-xs text-slate-700 dark:text-slate-300 hover:bg-brand-50">
                          Syntax Cheat Sheets
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/classroom"
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    pathname === '/classroom' ? 'bg-amber-50 dark:bg-amber-950 text-amber-600 font-bold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  Digital Board
                </Link>

                <Link
                  href="/playground"
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    pathname === '/playground' ? 'bg-sky-50 dark:bg-sky-950 text-sky-600 font-bold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  Playground
                </Link>

                <Link
                  href="/mcqs"
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    pathname.startsWith('/mcqs') ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 font-bold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  200 MCQs
                </Link>

                <Link
                  href="/mock-test"
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    pathname === '/mock-test' ? 'bg-rose-50 dark:bg-rose-950 text-rose-600 font-bold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  Mock Test
                </Link>
              </>
            )}
          </nav>

          {/* ================= 4. Global Action Icons ================= */}
          <div className="flex items-center gap-1.5 shrink-0">
            <Link
              href="/search"
              aria-label="Search"
              className="p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Search className="w-4 h-4" />
            </Link>

            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 py-3 space-y-3 animate-in fade-in">
            {/* Course Switcher */}
            <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold">
              <Link
                href="/"
                className={`flex-1 py-1.5 text-center rounded-lg ${!isCccCourse ? 'bg-white dark:bg-slate-900 text-brand-600 font-bold shadow-2xs' : 'text-slate-600'}`}
              >
                O-Level M2-R5.1
              </Link>
              <Link
                href="/ccc"
                className={`flex-1 py-1.5 text-center rounded-lg ${isCccCourse ? 'bg-white dark:bg-slate-900 text-blue-600 font-bold shadow-2xs' : 'text-slate-600'}`}
              >
                CCC Course
              </Link>
            </div>

            {isCccCourse ? (
              <div className="space-y-1 text-sm font-medium">
                <Link href="/ccc" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  CCC Home Studio
                </Link>
                <Link href="/ccc/syllabus" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  80-Hour Syllabus Blueprint
                </Link>
                <Link href="/ccc/mcqs" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  200+ Chapter MCQs
                </Link>
                <Link href="/ccc/mock-test" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  100-Mark Mock Simulator
                </Link>
                <Link href="/ccc/cheat-sheets" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  LibreOffice Cheat Sheets
                </Link>
                <Link href="/ccc/one-liners" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  100 Golden Points
                </Link>
              </div>
            ) : (
              <div className="space-y-1 text-sm font-medium">
                <Link href="/" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  O-Level Home
                </Link>
                <Link href="/syllabus" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  100M Syllabus Blueprint
                </Link>
                <Link href="/classroom" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  Digital Board Classroom
                </Link>
                <Link href="/playground" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  Code Playground
                </Link>
                <Link href="/mcqs" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  200 MCQs
                </Link>
                <Link href="/mock-test" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  100-Mark Mock Exam
                </Link>
              </div>
            )}
          </div>
        )}

      </div>
    </header>
  );
}
