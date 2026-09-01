'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Target, Lightbulb, Play, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

export default function TryItYourself({
  task = "Practice this concept by creating an interactive code snippet.",
  hindiTask = "इस अवधारणा को कोड एडिटर में लिखकर स्वयं अभ्यास करें।",
  hints = [],
  starterCode = "",
  solutionCode = "",
}) {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const { language } = useLanguage();

  return (
    <div className="border-2 border-emerald-200 dark:border-emerald-900/60 rounded-2xl p-5 bg-emerald-50/40 dark:bg-emerald-950/20 shadow-xs space-y-4 my-6">
      
      {/* Title */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 dark:text-emerald-400 block font-mono">
              HANDS-ON CODING PRACTICE
            </span>
            <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
              {language === 'en' 
                ? 'Try It Yourself' 
                : language === 'hi' 
                ? 'स्वयं अभ्यास करें (Try It Yourself)' 
                : 'Try It Yourself (करके देखिए)'}
            </h3>
          </div>
        </div>

        <Link
          href="/playground"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs shrink-0"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>{language === 'en' ? 'Open Playground' : 'Launch Playground'}</span>
        </Link>
      </div>

      {/* Task Description */}
      <div className="space-y-1 text-xs sm:text-sm">
        <p className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
          <Target className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="underline decoration-emerald-500 underline-offset-2 font-bold">
            {language === 'en' ? 'Task:' : 'कार्य (Task):'}
          </span>
          <span>{task}</span>
        </p>
        {(language === 'both' || language === 'hi') && hindiTask && (
          <p className="text-slate-600 dark:text-slate-400 hindi-text pl-5">
            {hindiTask}
          </p>
        )}
      </div>

      {/* Action Row: Hints & Solution Toggles */}
      <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
        {hints.length > 0 && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/50 text-amber-900 dark:text-amber-200 font-bold transition-colors"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
            <span>
              {showHint 
                ? (language === 'en' ? 'Hide Hint' : 'सुझाव छुपाएं') 
                : (language === 'en' ? 'Show Hint' : language === 'hi' ? 'सुझाव देखें' : 'Show Hint (सुझाव)')}
            </span>
          </button>
        )}

        {solutionCode && (
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold transition-colors"
          >
            {showSolution ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>
              {showSolution 
                ? (language === 'en' ? 'Hide Solution' : 'हल छुपाएं') 
                : (language === 'en' ? 'View Solution' : language === 'hi' ? 'हल देखें' : 'View Solution (हल)')}
            </span>
          </button>
        )}
      </div>

      {/* Hints Card */}
      {showHint && hints.length > 0 && (
        <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 rounded-xl text-xs space-y-1">
          <span className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-amber-600" /> 
            {language === 'en' ? 'Solving Tips:' : 'समाधान के संकेत (Tips):'}
          </span>
          <ul className="list-disc list-inside space-y-0.5 text-slate-700 dark:text-slate-300">
            {hints.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Solution Code Card */}
      {showSolution && solutionCode && (
        <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-3 text-xs font-mono text-slate-200 space-y-2">
          <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> 
            {language === 'en' ? 'Verified Reference Solution:' : 'सत्यापित हल (Verified Solution):'}
          </span>
          <pre className="overflow-x-auto m-0 leading-relaxed max-h-48 text-[11px] text-emerald-300">
            {solutionCode}
          </pre>
        </div>
      )}

    </div>
  );
}
