'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  ListChecks,
  RotateCcw,
  Search,
  Target,
  Timer,
  Trophy,
  XCircle,
} from 'lucide-react';

import {
  Badge,
  Button,
  Callout,
  EmptyState,
  Panel,
  ProgressBar,
  Segmented,
  StatTile,
  cx,
} from '@/components/ui';
import { useProgress } from '@/lib/progressContext';
import ExamEngine from '@/components/mcq/ExamEngine';

/* ==========================================================================
   The practice surface — untimed, forgiving, explains itself.

   QuizCard      one question, answered once, with the reason it is right
   PracticeDeck  a set of questions worked through one at a time
   LastScore     the small "how you did last time" badge used on the hubs
   ========================================================================== */

const DEVANAGARI = /[ऀ-ॿ]/;
const isHindi = (text = '') => DEVANAGARI.test(text);

const DIFFICULTY_TONE = { Easy: 'ok', Medium: 'warn', Hard: 'danger' };

function labelFor(mcq, groupLabel = 'Unit') {
  if (mcq?.unit !== undefined && mcq?.unit !== null) return `${groupLabel} ${mcq.unit}`;
  if (mcq?.chapterName) return mcq.chapterName;
  return null;
}

/* ---------------------------------------------------------------- QuizCard */

export default function QuizCard({
  mcq,
  questionIndex,
  totalQuestions,
  onNext,
  onAnswer,
  groupLabel = 'Unit',
  keyboard = false,
}) {
  const { toggleSavedMcq, isMcqSaved } = useProgress();

  const [selected, setSelected] = useState(null);
  const [optionFocus, setOptionFocus] = useState(0);
  const answered = selected !== null;
  const isCorrect = answered && selected === mcq.correctAnswer;

  const idPrefix = `quiz-${mcq.id}`;
  const saved = isMcqSaved(mcq.id);
  const group = labelFor(mcq, groupLabel);

  /* A new question means a clean card. */
  useEffect(() => {
    setSelected(null);
    setOptionFocus(0);
  }, [mcq.id]);

  const select = useCallback(
    (optionId) => {
      if (selected !== null) return;
      setSelected(optionId);
      onAnswer?.(optionId === mcq.correctAnswer, mcq);
    },
    [selected, mcq, onAnswer],
  );

  const reset = () => {
    setSelected(null);
    setOptionFocus(0);
  };

  const onOptionKeyDown = (e, index) => {
    const count = mcq.options.length;
    let next = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (index + 1) % count;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (index - 1 + count) % count;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = count - 1;
    if (next === null) return;
    e.preventDefault();
    setOptionFocus(next);
    document.getElementById(`${idPrefix}-opt-${next}`)?.focus();
  };

  /* 1–4 picks an option, when this card is the only one on screen. */
  useEffect(() => {
    if (!keyboard || answered) return undefined;
    const handler = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = e.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target?.isContentEditable) return;
      if (e.key < '1' || e.key > '9') return;
      const idx = Number(e.key) - 1;
      if (idx >= mcq.options.length) return;
      e.preventDefault();
      select(mcq.options[idx].id);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [keyboard, answered, mcq.options, select]);

  const questionHindi = isHindi(mcq.question);
  const explanationHindi = isHindi(mcq.explanation || '');

  return (
    <Panel as="article" className="p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className="text-xs font-semibold text-ink-3 tabular-nums">
          {questionIndex !== undefined ? `Question ${questionIndex + 1}` : `Question ${mcq.id}`}
          {totalQuestions ? ` of ${totalQuestions}` : ''}
        </span>
        <div className="flex items-center gap-2">
          {group ? <Badge tone="neutral">{group}</Badge> : null}
          {mcq.difficulty ? (
            <Badge tone={DIFFICULTY_TONE[mcq.difficulty] || 'neutral'}>{mcq.difficulty}</Badge>
          ) : null}
          <Button
            variant="ghost"
            size="sm"
            icon={saved ? BookmarkCheck : Bookmark}
            aria-label={saved ? 'Remove this question from saved' : 'Save this question'}
            aria-pressed={saved}
            onClick={() => toggleSavedMcq(mcq.id)}
          >
            <span className="sr-only sm:not-sr-only">{saved ? 'Saved' : 'Save'}</span>
          </Button>
        </div>
      </div>

      <h2
        id={`${idPrefix}-question`}
        className={cx(
          'text-prose sm:text-prose-lg font-medium text-ink leading-relaxed',
          !mcq.englishQuestion && questionHindi && 'hindi-text',
        )}
        lang={!mcq.englishQuestion && questionHindi ? 'hi' : undefined}
      >
        {mcq.englishQuestion || mcq.question}
      </h2>
      {mcq.englishQuestion && mcq.englishQuestion !== mcq.question ? (
        <p className="mt-1.5 text-prose text-ink-2 leading-relaxed hindi-text" lang="hi">
          {mcq.question}
        </p>
      ) : null}

      <div role="radiogroup" aria-labelledby={`${idPrefix}-question`} className="mt-5 space-y-2.5">
        {mcq.options.map((opt, i) => {
          const isTarget = opt.id === mcq.correctAnswer;
          const isPicked = selected === opt.id;
          const hindi = isHindi(opt.text);

          const state = !answered
            ? 'idle'
            : isTarget
              ? 'correct'
              : isPicked
                ? 'wrong'
                : 'muted';

          return (
            <button
              key={opt.id}
              id={`${idPrefix}-opt-${i}`}
              type="button"
              role="radio"
              aria-checked={isPicked}
              tabIndex={answered ? (isPicked ? 0 : -1) : i === optionFocus ? 0 : -1}
              aria-disabled={answered}
              onClick={() => select(opt.id)}
              onKeyDown={(e) => onOptionKeyDown(e, i)}
              className={cx(
                'w-full min-h-[44px] flex items-start gap-3 p-3 sm:p-3.5 rounded-lg border text-left',
                'transition-colors duration-fast aria-disabled:cursor-default',
                state === 'idle' && 'bg-surface border-line hover:border-line-strong hover:bg-sunken',
                state === 'correct' && 'bg-ok-soft border-ok-line',
                state === 'wrong' && 'bg-danger-soft border-danger-line',
                state === 'muted' && 'bg-surface border-line opacity-70',
              )}
            >
              <span
                className={cx(
                  'shrink-0 w-6 h-6 mt-px rounded-md grid place-items-center text-xs font-semibold',
                  state === 'idle' && 'bg-sunken border border-line text-ink-2',
                  state === 'correct' && 'bg-ok text-ink-inv',
                  state === 'wrong' && 'bg-danger text-ink-inv',
                  state === 'muted' && 'bg-sunken border border-line text-ink-4',
                )}
                aria-hidden="true"
              >
                {state === 'correct' ? (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                ) : state === 'wrong' ? (
                  <XCircle className="w-3.5 h-3.5" />
                ) : (
                  opt.id
                )}
              </span>
              <span
                className={cx(
                  'flex-1 text-base leading-relaxed',
                  state === 'correct' && 'text-ok-ink font-medium',
                  state === 'wrong' && 'text-danger-ink',
                  state === 'idle' && 'text-ink-2',
                  state === 'muted' && 'text-ink-3',
                  hindi && 'hindi-text',
                )}
                lang={hindi ? 'hi' : undefined}
              >
                <span className="sr-only">{`Option ${opt.id}: `}</span>
                {opt.text}
                {answered && isTarget ? <span className="sr-only"> — correct answer</span> : null}
                {answered && isPicked && !isTarget ? <span className="sr-only"> — your answer</span> : null}
              </span>
            </button>
          );
        })}
      </div>

      {answered ? (
        <Callout
          kind={isCorrect ? 'tip' : 'danger'}
          label={isCorrect ? 'Correct' : `Not quite — the answer is ${mcq.correctAnswer}`}
          icon={isCorrect ? CheckCircle2 : XCircle}
          className="mt-5 mb-0"
        >
          <p
            className={cx('text-base leading-relaxed', explanationHindi && 'hindi-text')}
            lang={explanationHindi ? 'hi' : undefined}
          >
            {mcq.explanation}
          </p>
        </Callout>
      ) : null}

      <div className="mt-5 pt-4 border-t border-line flex flex-wrap items-center justify-between gap-2">
        <Button variant="ghost" icon={RotateCcw} onClick={reset} disabled={!answered}>
          Try again
        </Button>
        {onNext ? (
          <Button variant={answered ? 'primary' : 'secondary'} size="lg" iconRight={ArrowRight} onClick={onNext}>
            Next question
          </Button>
        ) : null}
      </div>
    </Panel>
  );
}

/* --------------------------------------------------------------- LastScore */

/**
 * Recorded practice results live in localStorage, so this renders nothing at
 * all until the client has read them — never a wrong number, never a flash.
 */
export function LastScore({ quizId, className = '' }) {
  const { quizScores, isLoaded } = useProgress();
  const record = quizScores?.[quizId];
  if (!isLoaded || !record || !record.total) return null;

  const pct = Math.round((record.score / record.total) * 100);
  const tone = pct >= 70 ? 'ok' : pct >= 50 ? 'warn' : 'danger';
  const Icon = pct >= 70 ? CheckCircle2 : pct >= 50 ? Target : XCircle;

  return (
    <Badge tone={tone} icon={Icon} className={className}>
      <span className="tabular-nums">Last {record.score}/{record.total} · {pct}%</span>
    </Badge>
  );
}

/* ------------------------------------------------------------ PracticeDeck */

const DIFFICULTIES = ['Easy', 'Medium', 'Hard'];

export function PracticeDeck({
  questions = [],
  quizId,
  groupLabel = 'Unit',
  groups = [],
  showFilters = false,
  timed = null,
  emptyTitle = 'No questions here yet',
  emptyDescription = 'This set has no questions attached to it yet.',
  emptyAction = null,
}) {
  const { recordQuizScore } = useProgress();

  const [mode, setMode] = useState('practice');
  const [query, setQuery] = useState('');
  const [groupFilter, setGroupFilter] = useState('all');
  const [difficulty, setDifficulty] = useState('all');
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState({});
  const [finished, setFinished] = useState(false);
  const headingRef = useRef(null);
  const movedRef = useRef(false);

  const hasDifficulty = useMemo(() => questions.some((q) => q.difficulty), [questions]);

  const deck = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return questions.filter((q) => {
      if (groupFilter !== 'all' && String(q.unit ?? q.chapterSlug) !== groupFilter) return false;
      if (difficulty !== 'all' && q.difficulty !== difficulty) return false;
      if (!needle) return true;
      return (
        q.question?.toLowerCase().includes(needle) ||
        q.englishQuestion?.toLowerCase().includes(needle) ||
        q.explanation?.toLowerCase().includes(needle)
      );
    });
  }, [questions, query, groupFilter, difficulty]);

  /* A different set of questions is a different session. */
  useEffect(() => {
    setIndex(0);
    setResults({});
    setFinished(false);
  }, [query, groupFilter, difficulty]);

  useEffect(() => {
    if (movedRef.current) headingRef.current?.focus?.();
  }, [index]);

  const attempted = Object.keys(results).length;
  const correct = Object.values(results).filter(Boolean).length;
  const accuracy = attempted ? Math.round((correct / attempted) * 100) : 0;

  /* Recording is a side effect of the running tally, kept out of the state
     updater. recordQuizScore is held in a ref because the provider hands back
     a new function on every write — putting it in the dependency list would
     make this record forever. */
  const recordRef = useRef(recordQuizScore);
  recordRef.current = recordQuizScore;

  useEffect(() => {
    if (!quizId || !attempted) return;
    recordRef.current(quizId, correct, attempted);
  }, [quizId, attempted, correct]);

  const handleAnswer = (wasCorrect, mcq) => {
    setResults((prev) => (prev[mcq.id] !== undefined ? prev : { ...prev, [mcq.id]: wasCorrect }));
  };

  const goTo = (i) => {
    movedRef.current = true;
    setIndex(Math.max(0, Math.min(deck.length - 1, i)));
  };

  const restart = () => {
    setResults({});
    setIndex(0);
    setFinished(false);
  };

  if (!questions.length) {
    return <EmptyState icon={ListChecks} title={emptyTitle} description={emptyDescription} action={emptyAction} />;
  }

  if (mode === 'timed' && timed) {
    return (
      <div className="space-y-5">
        <ModeSwitch mode={mode} onChange={setMode} timedLabel={timed.label} />
        <ExamEngine
          questions={questions}
          examTitle={timed.examTitle}
          durationMinutes={timed.durationMinutes}
          quizId={timed.quizId || quizId}
          groupLabel={groupLabel}
          intro={timed.intro}
          markingScheme={timed.markingScheme}
        />
      </div>
    );
  }

  const current = deck[Math.min(index, Math.max(0, deck.length - 1))];
  const progress = deck.length ? Math.round(((index + (finished ? 1 : 0)) / deck.length) * 100) : 0;

  return (
    <div className="space-y-5">
      {timed ? <ModeSwitch mode={mode} onChange={setMode} timedLabel={timed.label} /> : null}

      {showFilters ? (
        <Panel as="form" className="p-4" role="search" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] gap-3">
            <div>
              <label htmlFor="mcq-search" className="eyebrow block mb-1.5">Search</label>
              <div className="relative">
                <Search
                  className="w-4 h-4 text-ink-4 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="mcq-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Word in the question or the explanation"
                  className="input h-11 sm:h-[2.375rem] pl-9"
                />
              </div>
            </div>

            {groups.length ? (
              <div>
                <label htmlFor="mcq-group" className="eyebrow block mb-1.5">{groupLabel}</label>
                <select
                  id="mcq-group"
                  value={groupFilter}
                  onChange={(e) => setGroupFilter(e.target.value)}
                  className="input h-11 sm:h-[2.375rem]"
                >
                  <option value="all">All {groupLabel.toLowerCase()}s</option>
                  {groups.map((g) => (
                    <option key={g.value} value={g.value}>{g.label}</option>
                  ))}
                </select>
              </div>
            ) : null}

            {hasDifficulty ? (
              <div>
                <label htmlFor="mcq-difficulty" className="eyebrow block mb-1.5">Difficulty</label>
                <select
                  id="mcq-difficulty"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="input h-11 sm:h-[2.375rem]"
                >
                  <option value="all">Any difficulty</option>
                  {DIFFICULTIES.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            ) : null}
          </div>
        </Panel>
      ) : null}

      {!deck.length ? (
        <EmptyState
          icon={Search}
          title={query ? `Nothing matches “${query}”` : 'Nothing matches these filters'}
          description="Try a shorter word, or clear the filters to see the whole set again."
          action={
            <Button
              variant="secondary"
              onClick={() => {
                setQuery('');
                setGroupFilter('all');
                setDifficulty('all');
              }}
            >
              Clear filters
            </Button>
          }
        />
      ) : finished ? (
        <Panel className="p-5 sm:p-6">
          <p className="eyebrow mb-2">Session summary</p>
          <h2 ref={headingRef} tabIndex={-1} className="text-h2 font-semibold text-ink">
            {attempted === deck.length ? 'Set finished' : 'Where you got to'}
          </h2>
          <div className="mt-5 grid grid-cols-2 lg:grid-cols-3 gap-3">
            <StatTile label="Answered" value={`${attempted}/${deck.length}`} icon={ListChecks} />
            <StatTile label="Correct" value={correct} icon={Trophy} />
            <StatTile label="Accuracy" value={`${accuracy}%`} icon={Target} />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button variant="primary" icon={RotateCcw} onClick={restart}>Practise again</Button>
            {timed ? (
              <Button variant="secondary" icon={Timer} onClick={() => setMode('timed')}>
                Take the timed test
              </Button>
            ) : null}
          </div>
        </Panel>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <p ref={headingRef} tabIndex={-1} className="text-sm text-ink-2 tabular-nums">
              Question <span className="font-semibold text-ink">{index + 1}</span> of {deck.length}
            </p>
            <p className="text-sm text-ink-3 tabular-nums">
              {attempted ? `${correct} right of ${attempted} answered · ${accuracy}%` : 'Nothing answered yet'}
            </p>
          </div>
          <ProgressBar value={progress} showValue={false} label="Progress through this set" />

          <QuizCard
            key={current.id}
            mcq={current}
            questionIndex={index}
            totalQuestions={deck.length}
            groupLabel={groupLabel}
            keyboard
            onAnswer={handleAnswer}
            onNext={index === deck.length - 1 ? () => setFinished(true) : () => goTo(index + 1)}
          />

          <div className="flex items-center justify-between gap-2">
            <Button
              variant="secondary"
              size="lg"
              icon={ArrowLeft}
              disabled={index === 0}
              onClick={() => goTo(index - 1)}
            >
              Previous
            </Button>
            <Button variant="ghost" onClick={() => setFinished(true)}>
              End session
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

function ModeSwitch({ mode, onChange, timedLabel = 'Timed test' }) {
  return (
    <div className="flex items-center justify-between gap-3 flex-wrap">
      <Segmented
        ariaLabel="Practice mode"
        value={mode}
        onChange={onChange}
        options={[
          { value: 'practice', label: 'Practice' },
          { value: 'timed', label: timedLabel },
        ]}
      />
      <p className="text-xs text-ink-3">
        {mode === 'practice'
          ? 'No timer. The answer and the reason appear as soon as you choose.'
          : 'A timed paper. Answers stay hidden until you submit.'}
      </p>
    </div>
  );
}
