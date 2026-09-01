'use client';

import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  Flag, 
  AlertCircle, 
  RotateCcw, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  X,
  XCircle,
  FileCheck
} from 'lucide-react';
import { useProgress } from '@/lib/progressContext';

export default function ExamEngine({ questions, examTitle = 'Full Syllabus Mock Exam (100 Marks)', durationMinutes = 60 }) {
  const { recordQuizScore } = useProgress();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [qIndex]: selectedOptionId }
  const [markedForReview, setMarkedForReview] = useState({}); // { [qIndex]: true }
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionId) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionId,
    }));
  };

  const handleClearAnswer = () => {
    if (isSubmitted) return;
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });
  };

  const toggleMarkForReview = () => {
    if (isSubmitted) return;
    setMarkedForReview((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex],
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setShowSubmitModal(false);

    // Calculate score
    let score = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) {
        score++;
      }
    });

    recordQuizScore('mock-exam', score, questions.length);
  };

  const currentQuestion = questions[currentIndex];

  // Metrics for summary
  const answeredCount = Object.keys(answers).length;
  const reviewCount = Object.values(markedForReview).filter(Boolean).length;
  const unattemptedCount = questions.length - answeredCount;

  // Results calculation
  let correctCount = 0;
  let unitScores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 };
  let unitTotals = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 };

  if (isSubmitted) {
    questions.forEach((q, idx) => {
      unitTotals[q.unit] = (unitTotals[q.unit] || 0) + 1;
      if (answers[idx] === q.correctAnswer) {
        correctCount++;
        unitScores[q.unit] = (unitScores[q.unit] || 0) + 1;
      }
    });
  }

  const scorePercentage = Math.round((correctCount / questions.length) * 100);
  let grade = 'F (Fail)';
  if (scorePercentage >= 85) grade = 'S (Super Outstanding)';
  else if (scorePercentage >= 75) grade = 'A (Excellent)';
  else if (scorePercentage >= 65) grade = 'B (Good)';
  else if (scorePercentage >= 50) grade = 'C (Satisfactory)';

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Timer */}
      <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-white dark:bg-slate-900 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
            {examTitle}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Total: {questions.length} Questions | Maximum Marks: 100 | Passing: 50%
          </p>
        </div>

        {!isSubmitted ? (
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono font-bold text-sm ${
              timeLeft < 300 
                ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 animate-pulse' 
                : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
            }`}>
              <Clock className="w-4 h-4 text-brand-600" />
              <span>{formatTime(timeLeft)}</span>
            </div>
            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold shadow-sm transition-colors"
            >
              Submit Exam
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-300">
              Exam Completed
            </span>
          </div>
        )}
      </div>

      {/* Main Examination View */}
      {!isSubmitted ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Active Question Box (Cols 1-3) */}
          <div className="lg:col-span-3 border border-slate-200 dark:border-slate-800 rounded-xl p-6 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between min-h-[460px]">
            <div>
              {/* Question Meta */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300">
                    Unit {currentQuestion.unit}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    1 Mark
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed mb-6">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((opt) => {
                  const isSelected = answers[currentIndex] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`w-full flex items-start gap-3 p-3.5 rounded-lg border text-left text-sm transition-all ${
                        isSelected
                          ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/60 text-brand-900 dark:text-brand-100 font-semibold shadow-sm'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected ? 'bg-brand-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {opt.id}
                      </span>
                      <span className="flex-1 mt-0.5">{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Question Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMarkForReview}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                    markedForReview[currentIndex]
                      ? 'bg-purple-100 dark:bg-purple-950/80 border-purple-300 dark:border-purple-800 text-purple-800 dark:text-purple-300'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  {markedForReview[currentIndex] ? 'Marked for Review' : 'Mark for Review'}
                </button>
                {answers[currentIndex] && (
                  <button
                    onClick={handleClearAnswer}
                    className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline"
                  >
                    Clear Response
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((prev) => prev - 1)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold disabled:opacity-40"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button
                  disabled={currentIndex === questions.length - 1}
                  onClick={() => setCurrentIndex((prev) => prev + 1)}
                  className="flex items-center gap-1 px-4 py-1.5 rounded-lg bg-brand-600 text-white text-xs font-bold hover:bg-brand-500 disabled:opacity-40"
                >
                  Save & Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Question Palette Sidebar (Col 4) */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-900 shadow-sm flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
              Question Palette
            </h4>

            {/* Status Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <span className="w-3 h-3 rounded bg-emerald-500"></span> Answered ({answeredCount})
              </span>
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <span className="w-3 h-3 rounded bg-purple-500"></span> Marked ({reviewCount})
              </span>
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <span className="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700"></span> Not Visited ({unattemptedCount})
              </span>
            </div>

            {/* Numbers Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-1.5 overflow-y-auto max-h-[340px] pr-1">
              {questions.map((q, idx) => {
                const isCurrent = currentIndex === idx;
                const hasAnswer = answers[idx] !== undefined;
                const isMarked = markedForReview[idx];

                let cellColor = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
                if (hasAnswer && isMarked) {
                  cellColor = 'bg-purple-600 text-white font-bold';
                } else if (hasAnswer) {
                  cellColor = 'bg-emerald-600 text-white font-bold';
                } else if (isMarked) {
                  cellColor = 'bg-purple-400 text-white font-bold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-8 rounded text-xs font-bold transition-all flex items-center justify-center ${cellColor} ${
                      isCurrent ? 'ring-2 ring-brand-500 scale-105 shadow' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      ) : (
        /* Results & Analytics Dashboard */
        <div className="space-y-8">
          
          {/* Top Scorecard */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              Official Examination Result
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              NIELIT O-Level IT Module M2-R5.1: Web Designing & Publishing
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-2xl mx-auto">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-500 font-semibold">Total Score</span>
                <div className="text-2xl font-extrabold text-brand-600 mt-1">
                  {correctCount} / {questions.length}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-500 font-semibold">Percentage</span>
                <div className="text-2xl font-extrabold text-brand-600 mt-1">
                  {scorePercentage}%
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-500 font-semibold">Qualifying Status</span>
                <div className={`text-xl font-extrabold mt-1 ${scorePercentage >= 50 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {scorePercentage >= 50 ? 'PASSED' : 'FAILED'}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-500 font-semibold">Grade</span>
                <div className="text-lg font-extrabold text-purple-600 mt-1">
                  {grade}
                </div>
              </div>
            </div>
          </div>

          {/* Unit-wise Performance Breakdown */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 bg-white dark:bg-slate-900 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4">
              Unit-Wise Performance & Weak Area Analysis
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((unitNum) => {
                const uScore = unitScores[unitNum] || 0;
                const uTotal = unitTotals[unitNum] || 1;
                const uPct = Math.round((uScore / uTotal) * 100);
                return (
                  <div key={unitNum} className="p-3.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      <span>Unit {unitNum}</span>
                      <span>{uScore} / {uTotal} ({uPct}%)</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          uPct >= 70 ? 'bg-emerald-500' : uPct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${uPct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Complete Answer Key with Explanations */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 bg-white dark:bg-slate-900 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-6">
              Complete Question Review & Answer Key
            </h4>
            <div className="space-y-6">
              {questions.map((q, idx) => {
                const userAns = answers[idx];
                const isUserCorrect = userAns === q.correctAnswer;
                return (
                  <div 
                    key={q.id} 
                    className={`p-4 rounded-xl border ${
                      isUserCorrect 
                        ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20' 
                        : 'border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold mb-2">
                      <span className="text-slate-600 dark:text-slate-400">
                        Q{idx + 1} (Unit {q.unit})
                      </span>
                      <span className={isUserCorrect ? 'text-emerald-600 inline-flex items-center gap-1' : 'text-rose-600 inline-flex items-center gap-1'}>
                        {isUserCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Correct (+1)</span>
                          </>
                        ) : userAns ? (
                          <>
                            <XCircle className="w-3.5 h-3.5" />
                            <span>Wrong ({userAns})</span>
                          </>
                        ) : (
                          <span>Unattempted (0)</span>
                        )}
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                      {q.question}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                      {q.options.map((opt) => (
                        <div
                          key={opt.id}
                          className={`p-2 rounded border ${
                            opt.id === q.correctAnswer
                              ? 'border-emerald-500 bg-emerald-100/80 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 font-bold'
                              : opt.id === userAns
                              ? 'border-rose-500 bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-200'
                              : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          <b>{opt.id})</b> {opt.text}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded border border-slate-200 dark:border-slate-800">
                      <strong>Explanation:</strong> {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* Confirmation Submit Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Ready to Submit Examination?
            </h3>
            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg">
              <p>• Total Questions: <strong>{questions.length}</strong></p>
              <p>• Answered: <strong className="text-emerald-600">{answeredCount}</strong></p>
              <p>• Marked for Review: <strong className="text-purple-600">{reviewCount}</strong></p>
              <p>• Unanswered: <strong className="text-rose-600">{unattemptedCount}</strong></p>
              <p>• Time Remaining: <strong>{formatTime(timeLeft)}</strong></p>
            </div>
            <p className="text-xs text-slate-500">
              Once submitted, your final score and detailed unit-wise analysis will be calculated.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Continue Test
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-2 rounded-lg text-xs font-bold bg-brand-600 hover:bg-brand-500 text-white shadow-sm transition-colors"
              >
                Confirm Submit
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
