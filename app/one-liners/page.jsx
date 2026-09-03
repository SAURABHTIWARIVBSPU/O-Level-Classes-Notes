'use client';

import React, { useState, useMemo } from 'react';
import { masterOneLiners } from '@/data/oneLinersData';
import { unitsData } from '@/data/syllabusData';
import { FileText, Search, Bookmark, CheckCircle2, Star } from 'lucide-react';

export default function OneLinersPage() {
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarked, setBookmarked] = useState([]);

  const toggleBookmark = (id) => {
    setBookmarked((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredOneLiners = useMemo(() => {
    return masterOneLiners.filter((item) => {
      const matchUnit = selectedUnit === 'all' || item.unit.toString() === selectedUnit;
      const textToSearch = `${item.text || ''} ${item.point || ''} ${item.hindiPoint || ''} ${item.tag || ''}`.toLowerCase();
      const matchSearch = searchQuery === '' || textToSearch.includes(searchQuery.toLowerCase());
      return matchUnit && matchSearch;
    });
  }, [selectedUnit, searchQuery]);

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      
      {/* Header */}
      <div className="border-b border-appborder pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 text-xs font-bold mb-3">
          <FileText className="w-3.5 h-3.5 text-brand-600" /> High-Yield Revision Bank
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          100 Golden One-Liners (गोल्डन वन-लाइनर्स)
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          The ultimate last-minute revision bullet points extracted directly from 10 years of NIELIT 
          M2-R5.1 exams. Categorized unit by unit for rapid recall.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-xl border border-appborder bg-white dark:bg-slate-900 shadow-sm flex flex-wrap items-center gap-3">
        
        {/* Search */}
        <div className="flex-1 min-w-[240px] relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search keywords (e.g. Doctype, Box model, Brendan Eich)..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-appborder rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        {/* Unit Selector */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-slate-500">Unit:</span>
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-2 text-xs font-semibold focus:outline-none"
          >
            <option value="all">All 8 Units ({masterOneLiners.length})</option>
            {unitsData.map((u) => (
              <option key={u.unitNumber} value={u.unitNumber.toString()}>
                Unit {u.unitNumber}: {u.title}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Quick Count */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Displaying {filteredOneLiners.length} of 100 golden bullet points</span>
        {bookmarked.length > 0 && (
          <span className="font-bold text-amber-600 flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
            <span>{bookmarked.length} Bookmarked for Review</span>
          </span>
        )}
      </div>

      {/* List */}
      <div className="space-y-3">
        {filteredOneLiners.map((item) => {
          const isSaved = bookmarked.includes(item.id);
          return (
            <div
              key={item.id}
              className={`p-4 rounded-xl border transition-all ${
                isSaved
                  ? 'border-amber-400 bg-amber-50/40 dark:bg-amber-950/20 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    #{item.id}
                  </span>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                      {item.text || item.point}
                    </p>
                    {item.hindiPoint && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 hindi-text leading-relaxed">
                        {item.hindiPoint}
                      </p>
                    )}
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                        Unit {item.unit}
                      </span>
                      <span className="text-[10px] font-semibold text-brand-600 dark:text-brand-400">
                        #{item.tag}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleBookmark(item.id)}
                  className={`p-1.5 rounded-lg transition-colors ${
                    isSaved
                      ? 'text-amber-500 hover:bg-amber-100 dark:hover:bg-amber-950'
                      : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  title={isSaved ? 'Remove bookmark' : 'Bookmark this point'}
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
          );
        })}

        {filteredOneLiners.length === 0 && (
          <div className="p-12 text-center border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl">
            <FileText className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">No one-liners found</h4>
            <p className="text-xs text-slate-500 mt-1">Try another search term or unit filter.</p>
          </div>
        )}
      </div>

    </div>
  );
}
