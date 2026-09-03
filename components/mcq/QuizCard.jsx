'use client';

import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Lightbulb } from 'lucide-react';

export default function QuizCard({ mcq, questionIndex, totalQuestions, onNext }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (optionId) => {
    if (isAnswered) return;
    setSelectedOption(optionId);
    setIsAnswered(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const isCorrect = selectedOption === mcq.correctAnswer;

  const difficultyColors = {
    Easy: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
    Medium: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
    Hard: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300',
  };

  return (
    <div className="border border-appborder rounded-xl p-5 md:p-6 bg-white dark:bg-slate-900 shadow-xs transition-all">
      
      {/* Header Badges */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
          Question {questionIndex !== undefined ? questionIndex + 1 : mcq.id}
          {totalQuestions ? ` of ${totalQuestions}` : ''}
        </span>
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${difficultyColors[mcq.difficulty] || difficultyColors.Medium}`}>
            {mcq.difficulty}
          </span>
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            Unit {mcq.unit}
          </span>
        </div>
      </div>

      {/* Question Text */}
      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-5">
        {mcq.question}
      </h3>

      {/* Options List */}
      <div className="space-y-2.5 mb-5">
        {mcq.options.map((opt) => {
          const isSelected = selectedOption === opt.id;
          const isTargetCorrect = opt.id === mcq.correctAnswer;

          let btnStyle = 'border-appborder bg-slate-50/60 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 hover:border-brand-400 hover:bg-brand-50/30';
          
          if (isAnswered) {
            if (isTargetCorrect) {
              btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-bold';
            } else if (isSelected && !isTargetCorrect) {
              btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200';
            } else {
              btnStyle = 'opacity-50 border-appborder text-slate-500';
            }
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={isAnswered}
              className={`w-full flex items-start gap-3 p-3.5 rounded-lg border text-left text-sm transition-all min-h-[44px] cursor-pointer ${btnStyle}`}
            >
              <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                isSelected ? 'bg-brand-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
              }`}>
                {opt.id}
              </span>
              <span className="flex-1 mt-0.5 leading-relaxed">{opt.text}</span>
              {isAnswered && isTargetCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              )}
              {isAnswered && isSelected && !isTargetCorrect && (
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Answer & Explanation Box */}
      {isAnswered && (
        <div className={`p-4 rounded-lg mb-4 text-xs leading-relaxed border ${
          isCorrect 
            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900 text-emerald-950 dark:text-emerald-200'
            : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900 text-rose-950 dark:text-rose-200'
        }`}>
          <div className="flex items-center gap-1.5 font-bold mb-1.5">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Correct Answer!</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Incorrect! Correct Answer: {mcq.correctAnswer}</span>
              </>
            )}
          </div>
          <p className="mt-1 text-slate-700 dark:text-slate-300">
            <strong>Explanation:</strong> {mcq.explanation}
          </p>
        </div>
      )}

      {/* Bottom Controls */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-semibold"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Question
        </button>

        {onNext && isAnswered && (
          <button
            onClick={onNext}
            className="px-4 py-1.5 bg-brand-600 hover:bg-brand-500 text-white rounded-lg text-xs font-bold shadow-sm transition-colors"
          >
            Next Question →
          </button>
        )}
      </div>

    </div>
  );
}
