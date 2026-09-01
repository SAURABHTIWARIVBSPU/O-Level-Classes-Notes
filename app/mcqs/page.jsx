'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { masterMcqs } from '@/data/mcqsData';
import { unitsData } from '@/data/syllabusData';
import QuizCard from '@/components/mcq/QuizCard';
import { HelpCircle, Search, Filter, Award } from 'lucide-react';

export default function McqsPage() {
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredMcqs = useMemo(() => {
    return masterMcqs.filter((mcq) => {
      const matchUnit = selectedUnit === 'all' || mcq.unit.toString() === selectedUnit;
      const matchDiff = selectedDifficulty === 'all' || mcq.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
      const matchSearch = searchQuery === '' || 
        mcq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mcq.explanation.toLowerCase().includes(searchQuery.toLowerCase());
      return matchUnit && matchDiff && matchSearch;
    });
  }, [selectedUnit, selectedDifficulty, searchQuery]);

  const totalPages = Math.ceil(filteredMcqs.length / itemsPerPage);
  const paginatedMcqs = filteredMcqs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleUnitChange = (val) => {
    setSelectedUnit(val);
    setCurrentPage(1);
  };

  const handleDiffChange = (val) => {
    setSelectedDifficulty(val);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Complete 200 Questions Bank
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Chapter-Wise MCQs with Explanations
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Test your understanding topic by topic with detailed bilingual explanations, official difficulty ratings, 
            and instant feedback.
          </p>
        </div>

        <Link
          href="/mock-test"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-sm transition-all"
        >
          <Award className="w-4 h-4" />
          Take 100-Mark Mock Test
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-wrap items-center gap-3">
        
        {/* Search */}
        <div className="flex-1 min-w-[220px] relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            placeholder="Search MCQs by question or explanation..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        {/* Unit Selector */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-slate-500">Unit:</span>
          <select
            value={selectedUnit}
            onChange={(e) => handleUnitChange(e.target.value)}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-2 text-xs font-semibold focus:outline-none"
          >
            <option value="all">All 8 Units ({masterMcqs.length})</option>
            {unitsData.map((u) => (
              <option key={u.unitNumber} value={u.unitNumber.toString()}>
                Unit {u.unitNumber}: {u.title}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty Selector */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-slate-500">Difficulty:</span>
          <select
            value={selectedDifficulty}
            onChange={(e) => handleDiffChange(e.target.value)}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-2 text-xs font-semibold focus:outline-none"
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Showing {filteredMcqs.length} questions matching your criteria</span>
        {totalPages > 1 && (
          <span>Page {currentPage} of {totalPages}</span>
        )}
      </div>

      {/* MCQs List */}
      <div className="space-y-6">
        {paginatedMcqs.map((mcq, idx) => (
          <QuizCard
            key={mcq.id}
            mcq={mcq}
            questionIndex={(currentPage - 1) * itemsPerPage + idx}
            totalQuestions={filteredMcqs.length}
          />
        ))}

        {filteredMcqs.length === 0 && (
          <div className="p-12 text-center border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">No questions found</h4>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search query or filters.</p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Previous
          </button>
          
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              if (pageNum === 1 || pageNum === totalPages || Math.abs(pageNum - currentPage) <= 2) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                      currentPage === pageNum
                        ? 'bg-brand-600 text-white'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              }
              if (Math.abs(pageNum - currentPage) === 3) {
                return <span key={pageNum} className="text-xs text-slate-400">...</span>;
              }
              return null;
            })}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Next
          </button>
        </div>
      )}

    </div>
  );
}
