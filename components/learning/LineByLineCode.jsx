'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';
import { highlight } from '@/lib/highlight';

/**
 * Code explained one line at a time. Each line is a disclosure: tap it and the
 * explanation appears underneath, so a long example doesn't become a wall of
 * commentary.
 */
export default function LineByLineCode({ lines = [], language: lang = 'html' }) {
  const [openIndex, setOpenIndex] = useState(null);
  const { language } = useLanguage();

  if (!lines.length) return null;

  const showEnglish = language === 'both' || language === 'en';
  const showHindi = language === 'both' || language === 'hi';

  return (
    <div className="panel overflow-hidden">
      <div className="px-3.5 py-2 bg-sunken border-b border-line flex items-center justify-between gap-3">
        <span className="code-block__lang">Line by line</span>
        <span className="text-xs text-ink-4">Tap a line for the explanation</span>
      </div>

      <ol className="divide-y divide-line">
        {lines.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`lbl-${i}`}
                className={`w-full text-left px-3 py-2.5 flex items-center gap-3 transition-colors ${
                  isOpen ? 'bg-accent-soft' : 'hover:bg-sunken'
                }`}
              >
                <span className="font-mono text-2xs text-ink-4 tabular-nums w-5 text-right shrink-0 select-none">
                  {i + 1}
                </span>
                <code
                  className="flex-1 min-w-0 font-mono text-sm text-ink whitespace-pre overflow-x-auto no-scrollbar"
                  dangerouslySetInnerHTML={{ __html: highlight(item.code || '', lang) }}
                />
                <ChevronDown
                  className={`w-4 h-4 text-ink-4 shrink-0 transition-transform duration-fast ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {isOpen ? (
                <div id={`lbl-${i}`} className="px-3 pb-3 pl-11 space-y-1.5 border-t border-line pt-2.5">
                  {showEnglish && item.en ? (
                    <p className="text-base text-ink-2 leading-relaxed">{item.en}</p>
                  ) : null}
                  {showHindi && item.hi ? (
                    <p className="text-base text-ink-3 leading-relaxed hindi-text" lang="hi">{item.hi}</p>
                  ) : null}
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
