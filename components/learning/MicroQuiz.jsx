'use client';

import React, { useMemo, useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { useProgress } from '@/lib/progressContext';
import { Button, Panel, ProgressBar } from '@/components/ui';

/**
 * A short self-check at the end of a topic.
 *
 * Correct/incorrect is signalled with an icon *and* a colour, never colour
 * alone, and options are real radio inputs so keyboard and screen-reader users
 * get the same behaviour as everyone else.
 */
export default function MicroQuiz({ topicSlug, questions = [] }) {
  const { recordTopicScore } = useProgress();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = questions.length > 0 && answeredCount === questions.length;

  const correctCount = useMemo(
    () => questions.reduce((n, q, i) => (answers[i] === q.correctAnswer ? n + 1 : n), 0),
    [answers, questions],
  );

  if (!questions.length) return null;

  const submit = () => {
    setSubmitted(true);
    const score = questions.reduce((n, q, i) => (answers[i] === q.correctAnswer ? n + 1 : n), 0);
    if (topicSlug) recordTopicScore(topicSlug, score, questions.length);
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const pct = Math.round((correctCount / questions.length) * 100);

  return (
    <Panel className="p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <p className="eyebrow">Quick check</p>
          <p className="text-base text-ink-3 mt-0.5">
            {questions.length} question{questions.length === 1 ? '' : 's'} on what you just read
          </p>
        </div>
        {submitted ? (
          <span className="text-h3 font-semibold text-ink tabular-nums shrink-0">
            {correctCount}<span className="text-ink-4">/{questions.length}</span>
          </span>
        ) : null}
      </div>

      <ol className="space-y-6">
        {questions.map((q, qi) => {
          const chosen = answers[qi];
          const options = q.options || [];

          return (
            <li key={qi}>
              <fieldset>
                <legend className="text-prose text-ink font-medium leading-relaxed mb-3">
                  <span className="font-mono text-xs text-ink-4 mr-2">{qi + 1}.</span>
                  {q.question}
                </legend>

                <div className="space-y-1.5">
                  {options.map((opt, oi) => {
                    const value = opt.id ?? oi;
                    const text = typeof opt === 'string' ? opt : opt.text;
                    const isChosen = chosen === value;
                    const isRight = submitted && value === q.correctAnswer;
                    const isWrong = submitted && isChosen && value !== q.correctAnswer;

                    const tone = isRight
                      ? 'border-ok-line bg-ok-soft'
                      : isWrong
                        ? 'border-danger-line bg-danger-soft'
                        : isChosen
                          ? 'border-accent-line bg-accent-soft'
                          : 'border-line hover:border-line-strong';

                    return (
                      <label
                        key={value}
                        className={`flex items-start gap-2.5 px-3 py-2.5 rounded-lg border cursor-pointer transition-colors ${tone} ${submitted ? 'cursor-default' : ''}`}
                      >
                        <input
                          type="radio"
                          name={`mq-${topicSlug}-${qi}`}
                          value={String(value)}
                          checked={isChosen}
                          disabled={submitted}
                          onChange={() => setAnswers((a) => ({ ...a, [qi]: value }))}
                          className="mt-1 accent-[rgb(var(--c-accent))] shrink-0"
                        />
                        <span className="text-base text-ink-2 leading-relaxed flex-1">{text}</span>
                        {isRight ? <CheckCircle2 className="w-4 h-4 mt-0.5 text-ok shrink-0" aria-label="Correct answer" /> : null}
                        {isWrong ? <XCircle className="w-4 h-4 mt-0.5 text-danger shrink-0" aria-label="Your answer, incorrect" /> : null}
                      </label>
                    );
                  })}
                </div>

                {submitted && q.explanation ? (
                  <p className="mt-2.5 text-base text-ink-2 leading-relaxed border-l-2 border-line pl-3">
                    {q.explanation}
                  </p>
                ) : null}
              </fieldset>
            </li>
          );
        })}
      </ol>

      <div className="mt-5 pt-4 border-t border-line flex flex-wrap items-center justify-between gap-3">
        {submitted ? (
          <>
            <ProgressBar
              className="flex-1 min-w-[12rem]"
              value={pct}
              tone={pct >= 70 ? 'ok' : pct >= 40 ? 'warn' : 'danger'}
              label={pct >= 70 ? 'Solid — move on' : 'Worth re-reading this topic'}
            />
            <Button size="sm" icon={RotateCcw} onClick={reset}>Try again</Button>
          </>
        ) : (
          <>
            <p className="text-sm text-ink-3">{answeredCount} of {questions.length} answered</p>
            <Button variant="primary" size="sm" onClick={submit} disabled={!allAnswered}>
              Check answers
            </Button>
          </>
        )}
      </div>
    </Panel>
  );
}
