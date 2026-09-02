'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Download, 
  ChevronLeft, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Lightbulb, 
  FileText, 
  Code, 
  Copy, 
  Check, 
  Layers, 
  GraduationCap,
  Languages,
  FileDown
} from 'lucide-react';
import UnitPdfReader from './UnitPdfReader';
import { getLocalizedUnit, UI_LABELS } from '@/data/canonicalNotes/localizationHelper';

function CodeBlockRenderer({ code, language }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-slate-700/60 bg-slate-950 text-slate-100 shadow-md my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-xs">
        <span className="font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
          <Code className="w-3.5 h-3.5" />
          <span>{language || 'CODE SNIPPET'}</span>
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300 transition-colors"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="p-4 text-xs font-mono overflow-x-auto leading-relaxed text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function CanonicalWebReader({
  unitData,
  courseMeta,
  prevUnit,
  nextUnit,
  backHref,
  backLabel
}) {
  const [activeTab, setActiveTab] = useState('notes'); // 'notes' | 'pdf'
  const [currentLang, setCurrentLang] = useState('en'); // 'en' | 'hi'

  // Hydrate user's saved language preference on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('olevel_lang_pref');
      if (saved === 'hi' || saved === 'en') {
        setCurrentLang(saved);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleLangChange = (lang) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('olevel_lang_pref', lang);
    } catch (e) {
      console.error(e);
    }
  };

  if (!unitData) {
    return (
      <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
        <p className="text-slate-500">Unit notes content not found.</p>
        <Link href={backHref || '/'} className="mt-4 inline-block text-blue-600 font-bold text-sm">
          Return to Hub
        </Link>
      </div>
    );
  }

  // Get canonical localized data with guaranteed 100% field parity
  const localized = getLocalizedUnit(unitData, currentLang);
  const labels = UI_LABELS[currentLang] || UI_LABELS.en;
  const isOLevel = unitData.courseId === 'O_LEVEL' || courseMeta?.courseId === 'O_LEVEL';

  // Active PDF for viewer based on current language
  const activePdfUrl = currentLang === 'hi' ? (unitData.hiPdfUrl || unitData.pdfUrl) : unitData.pdfUrl;
  const activePdfName = currentLang === 'hi' ? (unitData.hiPdfFileName || unitData.pdfFileName) : unitData.pdfFileName;

  return (
    <div className="space-y-8 py-4 max-w-5xl mx-auto">
      
      {/* 1. Top Navigation & Action Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <Link
          href={backHref || '/notes'}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{backLabel || 'Back to Notes Library'}</span>
        </Link>

        {/* View Mode Tab Switcher + Bilingual Switcher + Download PDF Buttons */}
        <div className="flex items-center gap-2.5 flex-wrap">
          
          {/* Language Toggle: English | हिन्दी */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold shadow-2xs">
            <span className="px-2 text-slate-400 dark:text-slate-500 flex items-center gap-1">
              <Languages className="w-3.5 h-3.5" />
            </span>
            <button
              onClick={() => handleLangChange('en')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currentLang === 'en'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs font-extrabold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLangChange('hi')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currentLang === 'hi'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs font-extrabold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              हिन्दी
            </button>
          </div>

          {/* View Mode Tabs: Notes vs PDF */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
            <button
              onClick={() => setActiveTab('notes')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'notes'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs font-extrabold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{currentLang === 'hi' ? 'वेब रीडर' : 'Interactive Web Reader'}</span>
            </button>

            <button
              onClick={() => setActiveTab('pdf')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'pdf'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs font-extrabold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{currentLang === 'hi' ? 'पीडीएफ व्यूअर' : 'Textbook PDF Viewer'}</span>
            </button>
          </div>

          {/* Download PDF Actions (Dual English + Hindi options) */}
          <div className="flex items-center gap-1.5">
            <a
              href={unitData.pdfUrl}
              download={unitData.pdfFileName}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm"
              title={`Download English PDF (${unitData.pdfFileName})`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{currentLang === 'hi' ? 'अंग्रेजी PDF' : 'English PDF'}</span>
            </a>

            {unitData.hiPdfUrl && (
              <a
                href={unitData.hiPdfUrl}
                download={unitData.hiPdfFileName}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
                title={`Download Hindi PDF (${unitData.hiPdfFileName})`}
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{currentLang === 'hi' ? 'हिन्दी PDF' : 'Hindi PDF'}</span>
              </a>
            )}
          </div>

        </div>
      </div>

      {/* 2. Unit Title & Course Identity Banner */}
      <div className="space-y-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white border border-blue-800/40 shadow-xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-blue-300" />
            <span>{unitData.courseShortName || 'NIELIT'}</span>
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 text-white font-mono text-[11px] font-bold">
            {currentLang === 'hi' ? `इकाई ${unitData.unitNumberPadded}` : `UNIT ${unitData.unitNumberPadded}`} • SECTION {unitData.officialSection}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-mono text-[11px] font-bold">
            {localized.topics.length} {currentLang === 'hi' ? 'पाठ्यक्रम विषय' : 'SYLLABUS TOPICS'}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 font-mono text-[11px] font-bold">
            {unitData.totalHours} {currentLang === 'hi' ? 'घंटे' : 'HOURS'} ({unitData.theoryHours}T + {unitData.practicalHours}P)
          </span>
          <span className="px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 font-mono text-[11px] font-bold">
            {currentLang === 'hi' ? 'हिन्दी माध्यम' : 'English Edition'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
          {localized.title}
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          {localized.introduction}
        </p>

        {/* What You Will Master In This Unit */}
        {localized.whatYouWillLearn && localized.whatYouWillLearn.length > 0 && (
          <div className="pt-4 border-t border-white/10 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-300 block">
              {labels.whatYouWillLearn}:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {localized.whatYouWillLearn.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* =========================================================================
          TAB 1: INTERACTIVE WEB READER (100% Content Parity with PDF)
      ========================================================================= */}
      {activeTab === 'notes' && (
        <div className="space-y-12">
          
          {/* Quick Topic Jump Strip */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 sticky top-16 z-20 backdrop-blur-md bg-white/95 dark:bg-slate-900/95">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
              {currentLang === 'hi' ? `त्वरित विषय नेविगेशन (${localized.topics.length} विषय):` : `Quick Topic Jump (${localized.topics.length} Syllabus Topics):`}
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
              {localized.topics.map((t) => (
                <a
                  key={t.code}
                  href={`#topic-${t.code}`}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors whitespace-nowrap"
                >
                  <span className="font-bold mr-1">{t.code}</span>
                  <span>{t.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Sequential Topic Cards */}
          <div className="space-y-14">
            {localized.topics.map((topic) => (
              <section
                key={topic.code}
                id={`topic-${topic.code}`}
                className="scroll-mt-28 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
              >
                {/* Topic Header Bar */}
                <div className="border-b border-slate-100 dark:border-slate-800 pb-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-xs font-mono font-bold rounded bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 uppercase tracking-wider">
                      {currentLang === 'hi' ? `विषय ${topic.code}` : `Topic ${topic.code}`}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {unitData.courseShortName} Curriculum
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    {topic.title}
                  </h2>
                </div>

                {/* 1. What is this? */}
                {topic.whatIsIt && (
                  <div className="space-y-1.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                      <span>{labels.whatIsIt}</span>
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-5">
                      {topic.whatIsIt}
                    </p>
                  </div>
                )}

                {/* 2. Why is it important? */}
                {topic.whyImportant && (
                  <div className="space-y-1.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{labels.whyImportant}</span>
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-5">
                      {topic.whyImportant}
                    </p>
                  </div>
                )}

                {/* 3. How does it work? */}
                {topic.howItWorks && (
                  <div className="space-y-1.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{labels.howItWorks}</span>
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-5">
                      {topic.howItWorks}
                    </p>
                  </div>
                )}

                {/* Formatted Code Block (Code syntax is kept in original language) */}
                {topic.codeSnippet && (
                  <div className="pt-2">
                    <CodeBlockRenderer
                      code={topic.codeSnippet}
                      language={topic.codeLanguage || 'SOURCE CODE'}
                    />
                  </div>
                )}

                {/* 4. Key Components / Characteristics */}
                {topic.componentsOrTypes && topic.componentsOrTypes.length > 0 && (
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span>{topic.componentsTitle || labels.keyComponents}</span>
                    </h4>
                    <ul className="space-y-2">
                      {topic.componentsOrTypes.map((comp, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                          <span className="leading-relaxed">{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Comparison / Specification Table */}
                {topic.table && (
                  <div className="space-y-2 pt-2">
                    {topic.tableTitle && (
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {topic.tableTitle}
                      </h4>
                    )}
                    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                          <tr>
                            {topic.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-4 py-2.5">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          {topic.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-4 py-2.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 5. Practical Real-World Example */}
                {topic.practicalExample && (
                  <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-xs">
                      <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>{labels.practicalExample}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed pl-6">
                      {topic.practicalExample}
                    </p>
                  </div>
                )}

                {/* 6. Key Technical Facts & Syllabus Highlights */}
                {topic.importantPoints && topic.importantPoints.length > 0 && (
                  <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 space-y-2">
                    <div className="flex items-center gap-2 text-blue-900 dark:text-blue-300 font-bold text-xs">
                      <Award className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>{labels.examPoints}</span>
                    </div>
                    <ul className="space-y-1.5 pl-6">
                      {topic.importantPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs sm:text-sm text-blue-950 dark:text-blue-200 list-disc leading-relaxed">
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 7. Quick Topic Recap */}
                {topic.quickRevision && (
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                    <span className="font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider shrink-0 mt-0.5">
                      {labels.quickRecap}:
                    </span>
                    <span className="leading-relaxed">{topic.quickRevision}</span>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Unit Revision Checklist */}
          {localized.unitRevision && localized.unitRevision.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {labels.revisionTitle}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {labels.revisionHeading}
                </h3>
              </div>
              <ul className="space-y-2">
                {localized.unitRevision.map((rev, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{rev}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Terms, Acronyms & Full Forms Table */}
          {localized.keyTerms && localized.keyTerms.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Glossary & Official Standards
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {labels.keyTermsTitle}
                </h3>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      {labels.termHeaders.map((h, hIdx) => (
                        <th key={hIdx} className="px-4 py-2.5">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {localized.keyTerms.map((t, tIdx) => (
                      <tr key={tIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="px-4 py-2.5 font-bold font-mono text-blue-600 dark:text-blue-400">
                          {t.term}
                        </td>
                        <td className="px-4 py-2.5 font-semibold text-slate-900 dark:text-slate-100">
                          {t.fullForm}
                        </td>
                        <td className="px-4 py-2.5 text-slate-600 dark:text-slate-300 leading-relaxed">
                          {t.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      )}

      {/* =========================================================================
          TAB 2: TEXTBOOK PDF VIEWER (Supports Both English & Hindi PDF)
      ========================================================================= */}
      {activeTab === 'pdf' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
            <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Viewing PDF: <strong className="text-blue-600 dark:text-blue-400">{activePdfName}</strong></span>
            </span>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-[11px]">PDF Language:</span>
              <button
                onClick={() => handleLangChange('en')}
                className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors ${
                  currentLang === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                English PDF
              </button>
              {unitData.hiPdfUrl && (
                <button
                  onClick={() => handleLangChange('hi')}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors ${
                    currentLang === 'hi'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  हिन्दी PDF
                </button>
              )}
            </div>
          </div>

          <UnitPdfReader
            pdfUrl={activePdfUrl}
            fileName={activePdfName}
            unitTitle={localized.title}
            unitNumber={unitData.unitNumber}
            pageCount={unitData.pageCount || 10}
          />
        </div>
      )}

      {/* 3. Bottom Unit Navigation Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        {prevUnit ? (
          <Link
            href={isOLevel ? `/notes/${prevUnit.slug}` : `/ccc/notes/${prevUnit.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            <div className="text-left">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                {currentLang === 'hi' ? 'पिछली इकाई' : 'Previous Unit'}
              </span>
              <span>Unit {prevUnit.unitNumberPadded || prevUnit.unitNumber}: {prevUnit.title}</span>
            </div>
          </Link>
        ) : <div />}

        {nextUnit ? (
          <Link
            href={isOLevel ? `/notes/${nextUnit.slug}` : `/ccc/notes/${nextUnit.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors"
          >
            <div className="text-right">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                {currentLang === 'hi' ? 'अगली इकाई' : 'Next Unit'}
              </span>
              <span>Unit {nextUnit.unitNumberPadded || nextUnit.unitNumber}: {nextUnit.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </Link>
        ) : <div />}
      </div>

    </div>
  );
}
