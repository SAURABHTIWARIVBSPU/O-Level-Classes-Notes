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
  ChevronDown
} from 'lucide-react';
import { useTheme } from '@/lib/themeContext';
import { useLanguage } from '@/lib/languageContext';
import { useProgress } from '@/lib/progressContext';
import { useFullscreen } from '@/lib/fullscreenContext';
import { unitsData } from '@/data/syllabusData';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const { streak } = useProgress();
  const { isFullscreen } = useFullscreen();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'tutorials' | 'practice' | 'exams' | null
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

  // When any tool is in fullscreen, completely hide the global header
  if (isFullscreen) {
    return null;
  }

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const isTutorialsActive = 
    pathname.startsWith('/units') || 
    pathname === '/syllabus' || 
    pathname.startsWith('/one-shot') || 
    pathname === '/one-liners' || 
    pathname === '/differences' || 
    pathname === '/cheat-sheets';

  const isPracticeActive = 
    pathname === '/playground' || 
    pathname === '/practical' || 
    pathname === '/projects';

  const isExamsActive = 
    pathname.startsWith('/mcqs') || 
    pathname === '/mock-test' || 
    pathname === '/dashboard';

  return (
    <header 
      ref={navRef} 
      className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors select-none"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[52px]">
          
          {/* ================= 1. Brand Logo ================= */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group focus:outline-none py-1">
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
                  O-Level Studio
                </span>
                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-brand-600 text-white tracking-wider">
                  M2-R5.1
                </span>
              </div>
            </Link>
          </div>

          {/* ================= 2. Tutorial-Style Text Navigation ================= */}
          <nav className="hidden xl:flex items-center gap-1 h-full text-xs font-semibold">
            
            {/* Tutorials & Syllabus Dropdown */}
            <div className="relative h-full flex items-center">
              <button
                onClick={() => toggleDropdown('tutorials')}
                onMouseEnter={() => setActiveDropdown('tutorials')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-all ${
                  isTutorialsActive || activeDropdown === 'tutorials'
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
                  className="absolute left-0 top-[48px] w-[500px] rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-4 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {/* Left Column: Syllabus Units */}
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 pb-1.5 mb-1 border-b border-slate-100 dark:border-slate-800">
                        Syllabus Units
                      </div>
                      <div className="space-y-0.5">
                        {unitsData.slice(0, 8).map((u) => (
                          <Link
                            key={u.slug}
                            href={`/units/${u.slug}`}
                            className="block px-2 py-1 rounded text-xs text-slate-700 dark:text-slate-300 hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-slate-800 dark:hover:text-brand-300 transition-colors"
                          >
                            <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 mr-1.5">U0{u.unitNumber}</span>
                            <span>{u.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Revision & Reference */}
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 pb-1.5 mb-1 border-b border-slate-100 dark:border-slate-800">
                        Exam &amp; Revision
                      </div>
                      <div className="space-y-0.5">
                        <Link
                          href="/syllabus"
                          className="block px-2 py-1 rounded text-xs text-slate-700 dark:text-slate-300 hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-slate-800 dark:hover:text-brand-300 transition-colors"
                        >
                          120-Hour Syllabus Blueprint
                        </Link>
                        <Link
                          href="/one-shot"
                          className="block px-2 py-1 rounded text-xs text-slate-700 dark:text-slate-300 hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-slate-800 dark:hover:text-brand-300 transition-colors"
                        >
                          One-Shot Rapid Revision
                        </Link>
                        <Link
                          href="/one-liners"
                          className="block px-2 py-1 rounded text-xs text-slate-700 dark:text-slate-300 hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-slate-800 dark:hover:text-brand-300 transition-colors"
                        >
                          100 Golden Exam Points
                        </Link>
                        <Link
                          href="/differences"
                          className="block px-2 py-1 rounded text-xs text-slate-700 dark:text-slate-300 hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-slate-800 dark:hover:text-brand-300 transition-colors"
                        >
                          17 Concept Differences
                        </Link>
                        <Link
                          href="/cheat-sheets"
                          className="block px-2 py-1 rounded text-xs text-slate-700 dark:text-slate-300 hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-slate-800 dark:hover:text-brand-300 transition-colors"
                        >
                          Syntax Cheat Sheets
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Practice & Lab Dropdown */}
            <div className="relative h-full flex items-center">
              <button
                onClick={() => toggleDropdown('practice')}
                onMouseEnter={() => setActiveDropdown('practice')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-all ${
                  isPracticeActive || activeDropdown === 'practice'
                    ? 'bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>Practice &amp; Lab</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'practice' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'practice' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-[48px] w-64 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150 space-y-1"
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 py-1">
                    Hands-On Environments
                  </div>
                  <Link
                    href="/playground"
                    className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="block text-slate-900 dark:text-white font-bold">Live Code Playground</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Interactive HTML/CSS/JS sandbox</span>
                  </Link>

                  <Link
                    href="/practical"
                    className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="block text-slate-900 dark:text-white font-bold">72h Practical Lab</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Official syllabus practical exercises</span>
                  </Link>

                  <Link
                    href="/projects"
                    className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="block text-slate-900 dark:text-white font-bold">Capstone Projects</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">8 real-world website builds</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Exams & Tests Dropdown */}
            <div className="relative h-full flex items-center">
              <button
                onClick={() => toggleDropdown('exams')}
                onMouseEnter={() => setActiveDropdown('exams')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-all ${
                  isExamsActive || activeDropdown === 'exams'
                    ? 'bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>Tests &amp; MCQs</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'exams' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'exams' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-[48px] w-64 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150 space-y-1"
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 py-1">
                    Exam Simulations
                  </div>
                  <Link
                    href="/mcqs"
                    className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="block text-slate-900 dark:text-white font-bold">200 MCQ Bank</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Unit-wise practice with solutions</span>
                  </Link>

                  <Link
                    href="/mock-test"
                    className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="block text-slate-900 dark:text-white font-bold">Timed Mock Exam</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">100-mark full test simulation</span>
                  </Link>

                  <Link
                    href="/dashboard"
                    className="block px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="block text-slate-900 dark:text-white font-bold">Performance Dashboard</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Track progress &amp; weak areas</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Digital Board Direct Link */}
            <Link
              href="/classroom"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                pathname === '/classroom'
                  ? 'bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-bold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <span>Digital Board</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Interactive Teacher Board" />
            </Link>

            {/* My Notes Direct Link */}
            <Link
              href="/saved"
              className={`px-3 py-1.5 rounded-md transition-all ${
                pathname === '/saved'
                  ? 'bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-bold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <span>My Notes</span>
            </Link>

          </nav>

          {/* ================= 3. Right Utility Tools ================= */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Compact Search Trigger */}
            <Link
              href="/search"
              className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 text-xs hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
              title="Search topics, MCQs, syntax (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden md:inline text-[11px]">Search...</span>
              <kbd className="hidden lg:inline text-[9px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded font-mono text-slate-600 dark:text-slate-300">⌘K</kbd>
            </Link>

            {/* Language Segmented Control */}
            <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-md border border-slate-200 dark:border-slate-700 text-[11px] font-semibold">
              <button
                onClick={() => changeLanguage('both')}
                className={`px-2 py-0.5 rounded transition-all ${
                  language === 'both'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
                title="Bilingual: English + Hindi"
              >
                द्विभाषी
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-0.5 rounded transition-all ${
                  language === 'en'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('hi')}
                className={`px-2 py-0.5 rounded transition-all ${
                  language === 'hi'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                हिन्दी
              </button>
            </div>

            {/* Study Streak Badge */}
            <Link
              href="/dashboard"
              className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-300 text-[11px] font-bold"
              title="Daily study streak"
            >
              <span>{streak}d</span>
            </Link>

            {/* Code Lab Quick Button */}
            <Link
              href="/playground"
              className="hidden lg:inline-flex items-center px-2.5 py-1 rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold hover:bg-brand-600 dark:hover:bg-brand-400 dark:hover:text-white transition-colors"
            >
              Playground
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle light or dark theme"
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Mobile / Tablet Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 text-slate-700 dark:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* ================= 4. Responsive Mobile / Tablet Drawer ================= */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-1 duration-150">
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Teaching Language:</span>
            <div className="flex items-center gap-1 bg-slate-200 dark:bg-slate-700 p-0.5 rounded text-xs font-semibold">
              <button
                onClick={() => changeLanguage('both')}
                className={`px-2 py-0.5 rounded ${language === 'both' ? 'bg-brand-600 text-white font-bold' : 'text-slate-600 dark:text-slate-300'}`}
              >
                द्विभाषी
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-0.5 rounded ${language === 'en' ? 'bg-brand-600 text-white font-bold' : 'text-slate-600 dark:text-slate-300'}`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('hi')}
                className={`px-2 py-0.5 rounded ${language === 'hi' ? 'bg-brand-600 text-white font-bold' : 'text-slate-600 dark:text-slate-300'}`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          {/* Quick Nav Row */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
            <Link
              href="/classroom"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-300"
            >
              Digital Board
            </Link>
            <Link
              href="/playground"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 text-indigo-800 dark:text-indigo-300"
            >
              Playground
            </Link>
            <Link
              href="/saved"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900 text-purple-800 dark:text-purple-300"
            >
              My Notes
            </Link>
          </div>

          {/* Section: Syllabus Modules */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1.5">
              Syllabus Units
            </span>
            <div className="grid grid-cols-2 gap-1">
              {unitsData.slice(0, 8).map((u) => (
                <Link
                  key={u.slug}
                  href={`/units/${u.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-brand-500"
                >
                  <span className="font-mono text-[10px] text-slate-400 mr-1">U0{u.unitNumber}</span>
                  <span>{u.title.split(' ')[0]}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Section: Study & Exam Resources */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1.5">
              Study &amp; Exam Portals
            </span>
            <div className="grid grid-cols-2 gap-1 text-xs">
              <Link
                href="/syllabus"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                Syllabus Blueprint
              </Link>
              <Link
                href="/one-shot"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                One-Shot Revision
              </Link>
              <Link
                href="/one-liners"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                100 Golden Points
              </Link>
              <Link
                href="/differences"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                17 Differences
              </Link>
              <Link
                href="/cheat-sheets"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                Cheat Sheets
              </Link>
              <Link
                href="/mcqs"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                200 MCQ Bank
              </Link>
              <Link
                href="/mock-test"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                100-Mark Mock Exam
              </Link>
              <Link
                href="/practical"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                72h Practical Lab
              </Link>
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                Capstone Projects
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                Progress Dashboard
              </Link>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
