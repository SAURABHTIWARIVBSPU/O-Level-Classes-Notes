'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code } from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

export default function LineByLineCode({ lines = [] }) {
  const [activeLine, setActiveLine] = useState(null);
  const { language } = useLanguage();

  if (!lines || lines.length === 0) return null;

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900/60 my-4 text-xs shadow-xs">
      <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <Code className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
          <span>
            {language === 'en' 
              ? 'Line-by-Line Code Explanation' 
              : language === 'hi' 
              ? 'कोड की प्रत्येक पंक्ति का विश्लेषण' 
              : 'Line-by-Line Code Breakdown (कोड की हर पंक्ति का अर्थ)'}
          </span>
        </span>
        <span className="text-[11px] text-slate-500 dark:text-slate-400">
          Click line to toggle explanation
        </span>
      </div>

      <div className="divide-y divide-slate-200 dark:divide-slate-800/60 font-mono">
        {lines.map((item, idx) => {
          const isOpen = activeLine === idx;
          return (
            <div key={idx} className="transition-colors">
              <button
                onClick={() => setActiveLine(isOpen ? null : idx)}
                className={`w-full text-left p-2.5 flex items-center justify-between gap-3 transition-colors ${
                  isOpen
                    ? 'bg-brand-50/80 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300'
                    : 'hover:bg-slate-100/70 dark:hover:bg-slate-800/40 text-slate-800 dark:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3 overflow-x-auto">
                  <span className="text-slate-400 dark:text-slate-600 font-bold select-none text-[11px] w-6 text-right shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-bold whitespace-nowrap">{item.code}</span>
                </div>
                <div className="shrink-0 text-slate-400">
                  {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-11 py-2.5 bg-brand-50/40 dark:bg-brand-950/20 text-slate-700 dark:text-slate-300 space-y-1 font-sans border-t border-brand-100 dark:border-brand-900/40">
                  {(language === 'both' || language === 'en') && item.en && (
                    <p className="font-medium text-xs leading-relaxed">
                      {language === 'both' && <strong className="text-brand-700 dark:text-brand-400 mr-1">English:</strong>}
                      {item.en}
                    </p>
                  )}
                  {(language === 'both' || language === 'hi') && item.hi && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 hindi-text leading-relaxed">
                      {language === 'both' && <strong className="text-brand-700 dark:text-brand-400 mr-1">हिन्दी:</strong>}
                      {item.hi}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
