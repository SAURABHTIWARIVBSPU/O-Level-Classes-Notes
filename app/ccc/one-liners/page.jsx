'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, FileText, Search, Sparkles, Award, CheckCircle2, Bookmark } from 'lucide-react';
import { cccOneLinersData } from '@/data/cccOneLinersData';

export default function CCCOneLinersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Basics', 'Writer', 'Calc', 'Impress', 'Internet', 'Finance', 'Security'];

  const filteredPoints = cccOneLinersData.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.fact.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.englishFact.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 py-4 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="space-y-4 border-b border-appborder pb-6">
        <Link
          href="/ccc"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to CCC Hub</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 font-mono text-xs font-bold">
            HIGH-YIELD REVISION VAULT
          </span>
          <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/30 font-mono text-xs font-bold">
            {cccOneLinersData.length} Golden Facts
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          CCC 100 Golden Exam One-Liners
        </h1>

        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          High-frequency examination facts, shortcut keys, memory bits, protocol ports, and digital finance codes for rapid revision before appearing in the CCC exam.
        </p>

        {/* Search & Filter Strip */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search facts, shortcuts, or terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-appborder bg-white dark:bg-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat ? 'bg-brand-500 text-white shadow-2xs font-bold' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Points Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPoints.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-appborder hover:border-brand-500/80 transition-all space-y-2 shadow-xs group"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider border bg-accent-blue/10 text-accent-blue border-accent-blue/20">
                POINT #{item.id}
              </span>
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase font-mono">
                {item.category}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hindi-text leading-relaxed">
              {item.fact}
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-normal pt-1 border-t border-slate-100 dark:border-slate-800/60">
              {item.englishFact}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
