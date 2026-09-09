'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search, Menu, X, Sun, Moon, ChevronDown, Check, Languages, GraduationCap,
} from 'lucide-react';

import { useTheme } from '@/lib/themeContext';
import { useLanguage } from '@/lib/languageContext';
import { COURSES, courseFromPath, navForCourse, isActivePath, getModules } from '@/lib/navigation';
import CommandPalette from './CommandPalette';
import MobileNav from './MobileNav';

/* ------------------------------------------------------------- dropdown */

function NavMenu({ group, pathname }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timer = useRef(null);

  const anyActive = group.items.some((i) => isActivePath(pathname, i.href, i.match));

  useEffect(() => {
    const onDocClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
      clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => { clearTimeout(timer.current); setOpen(true); }}
      onMouseLeave={() => { timer.current = setTimeout(() => setOpen(false), 120); }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`inline-flex items-center gap-1 h-8 px-2.5 rounded-lg text-sm font-medium transition-colors ${
          anyActive ? 'text-ink bg-sunken' : 'text-ink-2 hover:text-ink hover:bg-sunken'
        }`}
      >
        {group.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-fast ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {open ? (
        <div className="absolute left-0 top-full pt-1.5 z-header">
          <div className="w-72 rounded-xl border border-line bg-overlay shadow-e3 p-1.5 animate-fade-in">
            {group.items.map((item) => {
              const active = isActivePath(pathname, item.href, item.match);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-2.5 py-2 rounded-lg transition-colors ${
                    active ? 'bg-accent-soft' : 'hover:bg-sunken'
                  }`}
                >
                  <span className={`block text-base font-medium ${active ? 'text-accent' : 'text-ink'}`}>
                    {item.label}
                  </span>
                  {item.desc ? <span className="block text-xs text-ink-3 mt-0.5">{item.desc}</span> : null}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------- course switcher */

function CourseSwitcher({ course, pathname }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Current course: ${course.name}. Change course`}
        className="inline-flex items-center gap-1.5 h-8 pl-2 pr-1.5 rounded-lg border border-line bg-surface hover:border-line-strong transition-colors"
      >
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: `rgb(var(${course.accentVar}))` }}
          aria-hidden="true"
        />
        <span className="text-sm font-semibold text-ink">{course.name}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-ink-3 transition-transform duration-fast ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {open ? (
        <div className="absolute left-0 top-full mt-1.5 w-[19rem] rounded-xl border border-line bg-overlay shadow-e3 p-1.5 z-header animate-fade-in" role="listbox">
          {Object.values(COURSES).map((c) => {
            const active = c.key === course.key;
            return (
              <Link
                key={c.key}
                href={c.home}
                role="option"
                aria-selected={active}
                className={`flex items-start gap-2.5 px-2.5 py-2.5 rounded-lg transition-colors ${active ? 'bg-accent-soft' : 'hover:bg-sunken'}`}
              >
                <span
                  className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: `rgb(var(${c.accentVar}))` }}
                  aria-hidden="true"
                />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5">
                    <span className={`text-base font-semibold ${active ? 'text-accent' : 'text-ink'}`}>{c.fullName}</span>
                    {active ? <Check className="w-3.5 h-3.5 text-accent" aria-hidden="true" /> : null}
                  </span>
                  <span className="block text-xs text-ink-3 mt-0.5">{c.subject} · {c.level}</span>
                </span>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------- language toggle */

const LANGUAGES = [
  { value: 'both', short: 'EN+हि', label: 'English and Hindi' },
  { value: 'en', short: 'EN', label: 'English only' },
  { value: 'hi', short: 'हिन्दी', label: 'Hindi only' },
];

function LanguageToggle() {
  const { language, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const current = LANGUAGES.find((l) => l.value === language) || LANGUAGES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`Reading language: ${current.label}. Change`}
        className="btn btn-ghost btn-sm gap-1.5"
      >
        <Languages className="w-4 h-4" aria-hidden="true" />
        <span className="hidden md:inline">{current.short}</span>
      </button>
      {open ? (
        <div className="absolute right-0 top-full mt-1.5 w-48 rounded-xl border border-line bg-overlay shadow-e3 p-1.5 z-header animate-fade-in">
          {LANGUAGES.map((l) => (
            <button
              key={l.value}
              type="button"
              onClick={() => { changeLanguage(l.value); setOpen(false); }}
              className={`w-full flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg text-left text-base transition-colors ${
                language === l.value ? 'bg-accent-soft text-accent font-medium' : 'text-ink hover:bg-sunken'
              }`}
            >
              {l.label}
              {language === l.value ? <Check className="w-3.5 h-3.5" aria-hidden="true" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------ theme toggle */

function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn btn-ghost btn-sm btn-icon"
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {mounted && theme === 'dark'
        ? <Sun className="w-4 h-4" aria-hidden="true" />
        : <Moon className="w-4 h-4" aria-hidden="true" />}
    </button>
  );
}

/* ------------------------------------------------------------------ navbar */

export default function Navbar() {
  const pathname = usePathname() || '/';
  const course = courseFromPath(pathname);
  const nav = navForCourse(course.key);

  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      // "/" opens search, but not while the user is typing in a field
      if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) && !e.target.isContentEditable) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => { setDrawerOpen(false); }, [pathname]);

  const closeSearch = useCallback(() => setSearchOpen(false), []);

  return (
    <>
      <header className="sticky top-0 z-header bg-surface/95 supports-[backdrop-filter]:bg-surface/85 backdrop-blur-sm border-b border-line no-print">
        <div className="shell shell-wide flex items-center gap-3 h-[var(--header-h)]">

          {/* Brand + course */}
          <div className="flex items-center gap-2.5 min-w-0">
            <Link href={course.home} className="flex items-center gap-2 shrink-0 group" aria-label={`${course.fullName} home`}>
              <span className="w-7 h-7 rounded-lg bg-ink grid place-items-center shrink-0">
                <GraduationCap className="w-4 h-4 text-ink-inv" aria-hidden="true" />
              </span>
              <span className="hidden sm:block text-base font-semibold text-ink tracking-tight">NIELIT</span>
            </Link>
            <span className="hidden sm:block w-px h-5 bg-line" aria-hidden="true" />
            <CourseSwitcher course={course} pathname={pathname} />
          </div>

          {/* Primary nav */}
          <nav className="hidden lg:flex items-center gap-0.5 ml-2" aria-label="Main">
            {nav.map((group) => (
              <NavMenu key={group.label} group={group} pathname={pathname} />
            ))}
          </nav>

          {/* Utilities */}
          <div className="ml-auto flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 h-8 pl-2.5 pr-1.5 rounded-lg border border-line bg-sunken text-ink-3 hover:border-line-strong hover:text-ink-2 transition-colors"
              aria-label="Search (press Control K)"
            >
              <Search className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="text-sm hidden md:inline">Search</span>
              <kbd className="hidden md:inline-flex items-center h-5 px-1.5 rounded border border-line bg-surface font-mono text-2xs text-ink-4">⌘K</kbd>
            </button>

            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="sm:hidden btn btn-ghost btn-sm btn-icon"
              aria-label="Search"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
            </button>

            <LanguageToggle />
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden btn btn-ghost btn-sm btn-icon"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
            >
              <Menu className="w-4.5 h-4.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <CommandPalette open={searchOpen} onClose={closeSearch} />
      <MobileNav
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        course={course}
        nav={nav}
        modules={getModules(course.key)}
        pathname={pathname}
      />
    </>
  );
}
