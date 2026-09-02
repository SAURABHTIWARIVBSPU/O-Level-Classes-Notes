'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Download, 
  Search, 
  FileText, 
  Clock, 
  Layers, 
  Award, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { oLevelNotesMeta, oLevelUnitNotesList } from '@/data/oLevelNotesData';

export default function OLevelNotesHubPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('ALL');

  const filteredUnits = useMemo(() => {
    return oLevelUnitNotesList.filter((unit) => {
      const matchesSearch = 
        unit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        unit.hindiTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        unit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        unit.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesGroup = selectedGroup === 'ALL' || unit.marksGroup === selectedGroup;

      return matchesSearch && matchesGroup;
    });
  }, [searchQuery, selectedGroup]);

  return (
    <div className="space-y-8 py-4 max-w-6xl mx-auto">
      
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-6 sm:p-8 shadow-xl border border-blue-800/40">
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-blue-300" />
            <span>NIELIT O-Level {oLevelNotesMeta.courseCode} Official Curriculum</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Unit-Wise Detailed Notes & Digital PDF Library
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Textbook-quality study material for <strong className="text-white">M2-R5.1: Web Designing and Publishing</strong>.
            Authored strictly according to the official NIELIT syllabus across all 8 Units (87 topics).
            Read online interactively or download high-resolution study books.
          </p>

          {/* Quick Metrics Strip */}
          <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Layers className="w-4 h-4 text-blue-400" />
              <span><strong>8</strong> Curriculum Units</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span><strong>87</strong> Topics (100% Covered)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span><strong>120</strong> Hours (48T + 72P)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span><strong>95</strong> Pages of Detailed Notes</span>
            </div>
          </div>
        </div>

        {/* Decorative backdrop elements */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute right-10 bottom-0 opacity-10 text-white pointer-events-none hidden lg:block">
          <BookOpen className="w-64 h-64" />
        </div>
      </div>

      {/* 2. Controls & Search Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Search Field */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search units, topics, HTML, CSS..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div>

        {/* Group Filter */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {['ALL', 'Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5'].map((grp) => (
            <button
              key={grp}
              onClick={() => setSelectedGroup(grp)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedGroup === grp
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {grp}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Units Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredUnits.map((unit) => (
          <div
            key={unit.slug}
            className="group flex flex-col justify-between bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200"
          >
            <div className="space-y-4">
              {/* Unit Header Bar */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 text-[10px] font-black rounded uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                      Unit {unit.unitNumberPadded}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      Sec {unit.officialSection}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {unit.marksWeight}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {unit.title}
                  </h2>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {unit.hindiTitle}
                  </p>
                </div>

                {/* PDF Badge */}
                <div className="text-right shrink-0">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    <FileText className="w-3.5 h-3.5 text-blue-500" />
                    <span>{unit.pageCount} Pages</span>
                  </span>
                  <p className="text-[10px] text-slate-400 mt-0.5">{unit.fileSizeKb}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                {unit.description}
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Core Syllabus Competencies:
                </p>
                <div className="grid grid-cols-1 gap-1">
                  {unit.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-2 pt-5 mt-4 border-t border-slate-100 dark:border-slate-800">
              <Link
                href={`/notes/${unit.slug}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Notes</span>
              </Link>

              <a
                href={unit.pdfUrl}
                download={unit.pdfFileName}
                className="inline-flex items-center justify-center gap-1 px-2.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors"
                title={`Download English PDF (${unit.pdfFileName})`}
              >
                <Download className="w-3.5 h-3.5 text-blue-500" />
                <span>EN</span>
              </a>

              {unit.hiPdfUrl && (
                <a
                  href={unit.hiPdfUrl}
                  download={unit.hiPdfFileName}
                  className="inline-flex items-center justify-center gap-1 px-2.5 py-2.5 rounded-lg border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold text-xs transition-colors"
                  title={`Download Hindi PDF (${unit.hiPdfFileName})`}
                >
                  <Download className="w-3.5 h-3.5 text-emerald-500" />
                  <span>हिन्दी</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredUnits.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
          <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800 dark:text-white">No Notes Found</h3>
          <p className="text-xs text-slate-500 mt-1">Try adjusting your search terms or filter.</p>
        </div>
      )}

    </div>
  );
}
