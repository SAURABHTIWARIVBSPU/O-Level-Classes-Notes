'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { masterMcqs } from '@/data/mcqsData';
import { unitsData } from '@/data/syllabusData';
import QuizCard from '@/components/mcq/QuizCard';
import { ArrowLeft, HelpCircle, Award } from 'lucide-react';

export default function UnitMcqsPage({ params }) {
  const { unitSlug } = params;
  const unit = unitsData.find((u) => u.slug === unitSlug);

  if (!unit) {
    notFound();
  }

  const unitMcqs = masterMcqs.filter((m) => m.unit === unit.unitNumber);

  return (
    <div className="space-y-8 max-w-4xl mx-auto py-4">
      
      {/* Header */}
      <div>
        <Link
          href={`/units/${unit.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-600 transition-colors mb-3"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Unit {unit.unitNumber} Overview
        </Link>

        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-1">
              Unit {unit.unitNumber} Practice Question Bank
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {unit.title} — MCQs ({unitMcqs.length})
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Master every concept of this unit through targeted multiple-choice practice.
            </p>
          </div>

          <Link
            href="/mock-test"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-sm transition-all"
          >
            <Award className="w-4 h-4" />
            Full 100-Mark Mock Test
          </Link>
        </div>
      </div>

      {/* MCQs */}
      <div className="space-y-6">
        {unitMcqs.map((mcq, idx) => (
          <QuizCard
            key={mcq.id}
            mcq={mcq}
            questionIndex={idx}
            totalQuestions={unitMcqs.length}
          />
        ))}

        {unitMcqs.length === 0 && (
          <p className="text-xs text-slate-500 text-center py-12">
            No MCQs available specifically for this unit.
          </p>
        )}
      </div>

    </div>
  );
}
