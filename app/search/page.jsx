'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, BookOpen, FileText, ChevronRight, X } from 'lucide-react';
import { allTopics } from '@/data/topicsData';
import { unitsData } from '@/data/syllabusData';
import { oneLinersData } from '@/data/oneLinersData';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return { units: [], topics: [], oneLiners: [] };
    }

    const matchedUnits = unitsData.filter(
      (u) =>
        u.title.toLowerCase().includes(q) ||
        u.hindiTitle?.toLowerCase().includes(q) ||
        u.description?.toLowerCase().includes(q)
    );

    const matchedTopics = allTopics
      .filter(
        (t) =>
          t.title?.toLowerCase().includes(q) ||
          t.hindiTitle?.toLowerCase().includes(q) ||
          t.slug?.toLowerCase().includes(q)
      )
      .slice(0, 15);

    const matchedOneLiners = oneLinersData
      .filter(
        (o) =>
          o.text?.toLowerCase().includes(q) ||
          o.unitName?.toLowerCase().includes(q) ||
          o.tag?.toLowerCase().includes(q)
      )
      .slice(0, 10);

    return {
      units: matchedUnits,
      topics: matchedTopics,
      oneLiners: matchedOneLiners,
    };
  }, [query]);

  const totalMatches =
    filteredResults.units.length +
    filteredResults.topics.length +
    filteredResults.oneLiners.length;

  return (
    <div className="space-y-6 max-w-4xl mx-auto py-4">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Search O-Level Notes &amp; Syllabus
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Find any concept, syllabus topic, HTML tag, CSS property, or golden exam point.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by topic, keyword, HTML tag, CSS selector, or Hindi term..."
          autoFocus
          className="w-full pl-11 pr-10 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-xs"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results or Prompts */}
      {!query.trim() ? (
        <div className="p-8 text-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 space-y-2">
          <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
            Type a term like <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">HTML5</span>, <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">CSS Flexbox</span>, <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">W3.CSS</span>, or <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">JavaScript</span> to find notes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {['Client-Server', 'Box Model', 'Table', 'DOM Tree', 'AngularJS', 'One-Shot', 'Photoshop'].map((suggest) => (
              <button
                key={suggest}
                onClick={() => setQuery(suggest)}
                className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 hover:border-brand-500"
              >
                {suggest}
              </button>
            ))}
          </div>
        </div>
      ) : totalMatches === 0 ? (
        <div className="p-8 text-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
            No results found for &ldquo;{query}&rdquo;
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Try checking for spelling errors or searching for broader terms like HTML, CSS, or JS.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Matched Syllabus Units */}
          {filteredResults.units.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Syllabus Units ({filteredResults.units.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredResults.units.map((unit) => (
                  <Link
                    key={unit.slug}
                    href={`/units/${unit.slug}`}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-500 flex items-center justify-between transition-colors"
                  >
                    <div>
                      <span className="text-[10px] font-bold font-mono text-slate-400 mr-1">
                        UNIT {unit.unitNumber}
                      </span>
                      <strong className="text-xs text-slate-900 dark:text-white block">
                        {unit.title}
                      </strong>
                      <span className="text-[11px] text-brand-600 dark:text-brand-400">
                        {unit.hindiTitle}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Matched Topics */}
          {filteredResults.topics.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Topics &amp; Lessons ({filteredResults.topics.length})
              </h2>
              <div className="space-y-1.5">
                {filteredResults.topics.map((topic) => (
                  <Link
                    key={topic.slug}
                    href={`/units/unit-${topic.unit || 1}?topic=${topic.slug}`}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-500 flex items-center justify-between transition-colors"
                  >
                    <div>
                      <strong className="text-xs text-slate-900 dark:text-white block">
                        {topic.title}
                      </strong>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {topic.hindiTitle}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Matched Golden One-Liners */}
          {filteredResults.oneLiners.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Golden Exam Points ({filteredResults.oneLiners.length})
              </h2>
              <div className="space-y-1.5">
                {filteredResults.oneLiners.map((ol) => (
                  <Link
                    key={ol.id}
                    href="/one-liners"
                    className="p-3 rounded-xl border border-rose-100 dark:border-rose-950/60 bg-rose-50/40 dark:bg-rose-950/20 hover:border-rose-500 block transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1 text-[10px] font-bold text-rose-600 dark:text-rose-400">
                      <span>POINT #{ol.id}</span>
                      <span>•</span>
                      <span>{ol.unitName} ({ol.tag})</span>
                    </div>
                    <p className="text-xs font-medium text-slate-900 dark:text-white">
                      {ol.text}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
