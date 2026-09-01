'use client';

import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw } from 'lucide-react';
import { useProgress } from '@/lib/progressContext';
import { useLanguage } from '@/lib/languageContext';

export default function MicroQuiz({ topicSlug, questions = [] }) {
  const { recordTopicScore } = useProgress();
  const { language } = useLanguage();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!questions || questions.length === 0) return null;

  const handleSelect = (qIdx, optId) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optId }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });
    if (recordTopicScore && topicSlug) {
      recordTopicScore(topicSlug, correctCount, questions.length);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const totalAnswered = Object.keys(selectedAnswers).length;
  const isComplete = totalAnswered === questions.length;

  let correctCount = 0;
  if (submitted) {
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) correctCount++;
    });
  }

  return (
    <div className="border border-brand-200 dark:border-brand-900/60 rounded-2xl p-5 bg-brand-50/30 dark:bg-brand-950/20 shadow-xs space-y-5 my-6">
      
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-xs">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-brand-700 dark:text-brand-400 block font-mono">
              CONCEPT RETENTION TEST
            </span>
            <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
              {language === 'en' 
                ? 'Topic Micro-Quiz' 
                : language === 'hi' 
                ? 'माइक्रो क्विज़ (Micro Quiz)' 
                : 'Topic Micro-Quiz (त्वरित ज्ञान जांच)'}
            </h3>
          </div>
        </div>

        {submitted && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-800 dark:text-brand-200 text-xs font-bold shadow-xs">
            <Award className="w-3.5 h-3.5" />
            <span>Score: {correctCount} / {questions.length}</span>
          </div>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-4 text-xs sm:text-sm">
        {questions.map((q, qIdx) => {
          const selected = selectedAnswers[qIdx];
          const isCorrect = selected === q.correctAnswer;

          return (
            <div
              key={qIdx}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-xs"
            >
              <p className="font-bold text-slate-900 dark:text-white leading-snug">
                Q{qIdx + 1}. {q.question}
              </p>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt) => {
                  let optStyle = 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:border-brand-400';

                  if (selected === opt.id) {
                    optStyle = 'border-brand-500 bg-brand-50 dark:bg-brand-950 text-brand-800 dark:text-brand-200 font-bold';
                  }

                  if (submitted) {
                    if (opt.id === q.correctAnswer) {
                      optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-bold';
                    } else if (selected === opt.id && !isCorrect) {
                      optStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950 text-rose-800 dark:text-rose-200 font-bold';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(qIdx, opt.id)}
                      disabled={submitted}
                      className={`p-2.5 rounded-lg border text-left flex items-start gap-2 text-xs transition-all ${optStyle}`}
                    >
                      <span className="w-4 h-4 rounded-full border flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {opt.id}
                      </span>
                      <span className="flex-1 leading-snug">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation upon submit */}
              {submitted && q.explanation && (
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong className="text-brand-600 dark:text-brand-400 mr-1 font-bold">
                    {language === 'en' ? 'Explanation:' : 'व्याख्या (Explanation):'}
                  </strong>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-2">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!isComplete}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
              isComplete
                ? 'bg-brand-600 hover:bg-brand-500 text-white cursor-pointer'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
            }`}
          >
            {language === 'en' ? 'Submit Quiz Answers' : 'उत्तर सबमिट करें (Submit)'}
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Retake Quiz' : 'पुनः प्रयास करें (Retake)'}</span>
          </button>
        )}
      </div>

    </div>
  );
}
