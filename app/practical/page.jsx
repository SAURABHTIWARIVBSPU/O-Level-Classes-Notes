'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { masterPracticals } from '@/data/practicalsData';
import { Code2, Play, Copy, Check, FileCode, CheckCircle2, ChevronRight } from 'lucide-react';

export default function PracticalPage() {
  const [activeLabId, setActiveLabId] = useState(masterPracticals[0].id);
  const [copied, setCopied] = useState(false);

  const activeLab = masterPracticals.find((l) => l.id === activeLabId) || masterPracticals[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeLab.code || activeLab.codeSolution || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-3">
            <Code2 className="w-3.5 h-3.5" /> 72-Hour Practical Lab Curriculum
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Practical Lab Assignments &amp; Workbook
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Step-by-step hands-on laboratory exercises designed for the 72-hour practical syllabus requirements. 
            Test and run full solutions instantly in the integrated sandbox.
          </p>
        </div>

        <Link
          href="/playground"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm transition-all"
        >
          <Play className="w-4 h-4 fill-current" />
          Launch Code Playground
        </Link>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Exercise Directory (Col 1) */}
        <div className="space-y-2 max-h-[640px] overflow-y-auto pr-1">
          {masterPracticals.map((lab, idx) => (
            <button
              key={lab.id}
              onClick={() => setActiveLabId(lab.id)}
              className={`w-full text-left p-3.5 rounded-xl border text-xs font-bold transition-all ${
                lab.id === activeLab.id
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] uppercase font-mono font-bold text-slate-400">
                  EXERCISE 0{idx + 1}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                  Unit {lab.unit}
                </span>
              </div>
              <p className="leading-snug">{lab.title}</p>
            </button>
          ))}
        </div>

        {/* Right Active Lab Specification (Cols 2-3) */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                UNIT {activeLab.unit} LAB ASSIGNMENT
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {activeLab.title}
              </h2>
            </div>

            {/* Problem Statement */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Objective &amp; Problem Statement (समस्या विवरण)
              </h4>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                {activeLab.objective || activeLab.problemStatement}
              </p>
            </div>

            {/* Steps to Execute */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Step-by-Step Lab Instructions
              </h4>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {(activeLab.steps || []).map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="flex-1 leading-relaxed">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Full Code Solution Box */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-md bg-slate-950">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs">
              <span className="font-mono text-slate-300 font-bold flex items-center gap-1.5">
                <FileCode className="w-4 h-4 text-emerald-400" /> Complete Solution Code
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <Link
                  href="/playground"
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run in Playground</span>
                </Link>
              </div>
            </div>
            <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto m-0 leading-relaxed max-h-[380px]">
              {activeLab.code || activeLab.codeSolution}
            </pre>
          </div>

          {/* Expected Output */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs text-slate-600 dark:text-slate-400">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">
              Expected Output &amp; Verification:
            </h4>
            <p className="leading-relaxed">{activeLab.expectedOutput}</p>
          </div>

        </div>

      </div>

    </div>
  );
}
