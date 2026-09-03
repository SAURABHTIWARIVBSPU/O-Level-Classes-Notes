'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Download, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Award, 
  Search, 
  ArrowRight,
  ExternalLink,
  Layers,
  GraduationCap,
  ShieldCheck,
  Check
} from 'lucide-react';
import { cccUnitNotesList, cccNotesMeta } from '@/data/cccNotesData';
import { cccSyllabusMeta } from '@/data/cccSyllabusData';

export default function CCCNotesLibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('all');

  const filteredUnits = cccUnitNotesList.filter((unit) => {
    const matchesSearch = 
      unit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.hindiTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFilter = selectedUnit === 'all' || unit.slug === selectedUnit;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-12 py-4 max-w-7xl mx-auto">
      
      {/* =========================================================================
          1. HERO BANNER: CCC Unit-Wise Detailed Notes & PDF Library
      ========================================================================= */}
      <section className="relative p-6 sm:p-8 rounded-xl bg-navy text-white shadow-sm overflow-hidden border border-navy-800 space-y-6">
        <div className="relative z-10 space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-accent-blue/20 border border-accent-blue/30 text-sky-200 font-mono text-xs font-bold shadow-2xs">
              OFFICIAL NIELIT CCC (80 HOURS)
            </span>
            <span className="px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 font-mono text-xs font-bold">
              9 UNIT STUDY NOTES • PDF LIBRARY
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            CCC Unit-Wise Detailed Notes &amp; PDF Library
          </h1>

          <p className="text-base sm:text-lg font-bold text-blue-300 hindi-text">
            सी.सी.सी. संपूर्ण 9 यूनिट्स के विस्तृत अध्ययन नोट्स एवं डाउनलोड करने योग्य डिजिटल पीडीएफ
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Authored strictly according to the official NIELIT CCC curriculum. Every unit contains complete in-depth textbook concepts, LibreOffice Writer/Calc/Impress guides, comparison tables, step-by-step procedures, and golden exam facts.
          </p>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <span className="text-[11px] font-bold text-blue-200 uppercase block">Total Units</span>
              <strong className="text-lg font-black text-white">9 Units</strong>
              <span className="text-[10px] text-slate-300 block">All 73 Topics</span>
            </div>

            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <span className="text-[11px] font-bold text-blue-200 uppercase block">Digital Textbook</span>
              <strong className="text-lg font-black text-white">76 Pages</strong>
              <span className="text-[10px] text-slate-300 block">Print-Ready A4</span>
            </div>

            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <span className="text-[11px] font-bold text-blue-200 uppercase block">Reading Mode</span>
              <strong className="text-lg font-black text-white">In-App + PDF</strong>
              <span className="text-[10px] text-slate-300 block">Mobile &amp; PC</span>
            </div>

            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <span className="text-[11px] font-bold text-blue-200 uppercase block">Access</span>
              <strong className="text-lg font-black text-emerald-400">100% Free</strong>
              <span className="text-[10px] text-slate-300 block">Direct Download</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SEARCH & UNIT FILTER STRIP
      ========================================================================= */}
      <section className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
        
        {/* Search Bar */}
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topics, LibreOffice, UPI, IoT, shortcuts..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Unit Dropdown Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs font-bold text-slate-500 shrink-0">Filter Unit:</span>
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          >
            <option value="all">All 9 Units (73 Topics)</option>
            {cccUnitNotesList.map((u) => (
              <option key={u.slug} value={u.slug}>
                Unit {u.unitNumberPadded}: {u.title}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* =========================================================================
          3. UNIT NOTES CARDS GRID (All 9 Units)
      ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-appborder pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent-blue" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Official Unit Notes Modules ({filteredUnits.length} of {cccUnitNotesList.length})
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Click &quot;Read Notes&quot; to study online or &quot;Download PDF&quot;
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredUnits.map((unit) => (
            <div
              key={unit.slug}
              className="flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-appborder hover:border-brand-500/80 transition-all shadow-xs group"
            >
              <div className="space-y-4">
                
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border ${unit.badgeColor}`}>
                    UNIT {unit.unitNumberPadded}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 font-bold">
                    {unit.officialSection}
                  </span>
                </div>

                {/* Unit Titles */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                    {unit.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 hindi-text mt-0.5">
                    {unit.hindiTitle}
                  </p>
                </div>

                {/* Specs Pill Strip */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800">
                    {unit.topicCount} Topics
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800">
                    {unit.pageCount} Pages
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800">
                    {unit.totalHours}h Duration
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-semibold">
                    {unit.marksWeight}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {unit.description}
                </p>

                {/* Bulleted Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    Key Topics Covered:
                  </span>
                  <ul className="space-y-1">
                    {unit.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                        <Check className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Action Buttons */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <Link
                  href={`/ccc/notes/${unit.slug}`}
                  className="flex-1 px-3 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Notes</span>
                </Link>

                <a
                  href={unit.pdfUrl}
                  download={unit.pdfFileName}
                  className="px-2.5 py-2 rounded-lg border border-appborder hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-1 shadow-2xs"
                  title={`Download English PDF (${unit.pdfFileName})`}
                >
                  <Download className="w-3.5 h-3.5 text-navy dark:text-brand-400" />
                  <span>EN</span>
                </a>

                {unit.hiPdfUrl && (
                  <a
                    href={unit.hiPdfUrl}
                    download={unit.hiPdfFileName}
                    className="px-2.5 py-2 rounded-lg border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold text-xs transition-all flex items-center justify-center gap-1 shadow-2xs"
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
      </section>

      {/* =========================================================================
          4. SYLLABUS COMPLIANCE & EXAM READINESS GUARANTEE
      ========================================================================= */}
      <section className="p-5 sm:p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-appborder space-y-4 shadow-xs">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-500" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            100% Official NIELIT CCC Syllabus Traceability
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
          Every note, table, flowchart, and PDF in this library is strictly indexed against the official NIELIT Course on Computer Concepts syllabus blueprint. No outside topics are added, and no required syllabus competencies are omitted.
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <Link
            href="/ccc/syllabus"
            className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-appborder text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-brand-600 flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
          >
            <span>View 80-Hour Syllabus Blueprint</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/ccc/mcqs"
            className="px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
          >
            <span>Practice Chapter MCQs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
