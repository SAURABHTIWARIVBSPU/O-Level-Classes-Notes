'use client';

import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Flag,
  Keyboard,
  LayoutGrid,
  ListChecks,
  MinusCircle,
  Play,
  RotateCcw,
  ShieldCheck,
  Target,
  Timer,
  Trophy,
  X,
  XCircle,
} from 'lucide-react';

import {
  Badge,
  Button,
  EmptyState,
  Panel,
  ProgressBar,
  SectionHeading,
  Segmented,
  StatTile,
  cx,
} from '@/components/ui';
import { useProgress } from '@/lib/progressContext';

/* ==========================================================================
   ExamEngine — the timed test surface.

   Three states, in order, and never two at once:

     brief    what is covered, how many questions, how long, how it is marked
     running  one question at a time, a quiet timer, a palette
     done     score, accuracy, time taken, per-unit bars, full answer review

   Students arrive here stressed. The rule for every decision below is: say
   the true thing plainly, keep the surface still, and never let colour be the
   only thing carrying a meaning.
   ========================================================================== */

/* Grade bands — unchanged from the previous engine so recorded scores and the
   dashboard keep meaning the same thing. */
const GRADE_BANDS = [
  { min: 85, label: 'S', name: 'Super outstanding' },
  { min: 75, label: 'A', name: 'Excellent' },
  { min: 65, label: 'B', name: 'Good' },
  { min: 50, label: 'C', name: 'Satisfactory' },
  { min: 0, label: 'F', name: 'Not qualified' },
];

export function gradeFor(percentage) {
  return GRADE_BANDS.find((b) => percentage >= b.min) || GRADE_BANDS[GRADE_BANDS.length - 1];
}

export { GRADE_BANDS };

const WARN_SECONDS = 5 * 60;

const DEVANAGARI = /[ऀ-ॿ]/;
const isHindi = (text = '') => DEVANAGARI.test(text);

function formatClock(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(sec)}` : `${pad(m)}:${pad(sec)}`;
}

function spokenDuration(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  if (m === 0) return `${sec} second${sec === 1 ? '' : 's'}`;
  if (sec === 0) return `${m} minute${m === 1 ? '' : 's'}`;
  return `${m} minute${m === 1 ? '' : 's'} ${sec} second${sec === 1 ? '' : 's'}`;
}

/** One question belongs to one group: a unit (O Level) or a chapter (CCC). */
function groupOf(question, groupLabel) {
  if (question?.unit !== undefined && question?.unit !== null) {
    return { key: `u-${question.unit}`, label: `${groupLabel || 'Unit'} ${question.unit}` };
  }
  if (question?.chapterName) {
    return { key: question.chapterSlug || question.chapterName, label: question.chapterName };
  }
  if (question?.chapterSlug) {
    return { key: question.chapterSlug, label: question.chapterSlug.replace(/-/g, ' ') };
  }
  return { key: 'all', label: 'All questions' };
}

/* ------------------------------------------------------------------ Timer */
/**
 * Owns its own second-by-second state so a tick re-renders 3 digits, never
 * the question or the 100-cell palette.
 */
const ExamTimer = memo(function ExamTimer({ deadline, onExpire }) {
  const [left, setLeft] = useState(() => Math.max(0, Math.round((deadline - Date.now()) / 1000)));
  const firedRef = useRef(false);
  const expireRef = useRef(onExpire);

  useEffect(() => {
    expireRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    firedRef.current = false;
    const tick = () => {
      const remaining = Math.max(0, Math.round((deadline - Date.now()) / 1000));
      setLeft(remaining);
      if (remaining <= 0 && !firedRef.current) {
        firedRef.current = true;
        expireRef.current?.();
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [deadline]);

  const warning = left <= WARN_SECONDS;

  return (
    <div
      className={cx(
        'inline-flex items-center gap-2 h-9 px-3 rounded-md border tabular-nums',
        warning
          ? 'bg-warn-soft border-warn-line text-warn-ink'
          : 'bg-sunken border-line text-ink',
      )}
    >
      {warning ? (
        <AlertTriangle className="w-4 h-4 text-warn shrink-0" aria-hidden="true" />
      ) : (
        <Clock className="w-4 h-4 text-ink-3 shrink-0" aria-hidden="true" />
      )}
      <span className="text-sm font-semibold" aria-hidden="true">{formatClock(left)}</span>
      <span className="sr-only" role="timer" aria-live="off">
        {spokenDuration(left)} remaining
      </span>
      {/* Flips from empty to text exactly once, so it is announced once. */}
      <span className="sr-only" aria-live="polite">
        {warning ? 'Five minutes remaining.' : ''}
      </span>
      {warning ? <span className="text-2xs font-semibold uppercase tracking-wide">left</span> : null}
    </div>
  );
});

/* ---------------------------------------------------------------- Palette */

function paletteState(index, { answers, flags }) {
  const answered = answers[index] !== undefined;
  const flagged = Boolean(flags[index]);
  if (answered && flagged) return 'both';
  if (answered) return 'answered';
  if (flagged) return 'flagged';
  return 'open';
}

const PALETTE_STYLES = {
  answered: 'bg-ok-soft border-ok-line text-ok-ink',
  flagged: 'bg-warn-soft border-warn-line text-warn-ink',
  both: 'bg-ok-soft border-warn-line text-ok-ink',
  open: 'bg-surface border-line text-ink-2',
};

const Palette = memo(function Palette({ questions, answers, flags, currentIndex, onJump }) {
  return (
    <ol className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-5 gap-1.5" aria-label="Question palette">
      {questions.map((q, i) => {
        const state = paletteState(i, { answers, flags });
        const current = i === currentIndex;
        const flagged = Boolean(flags[i]);
        return (
          <li key={q.id ?? i}>
            <button
              type="button"
              onClick={() => onJump(i)}
              aria-current={current ? 'true' : undefined}
              className={cx(
                'relative w-full min-h-[44px] rounded-md border text-sm font-semibold tabular-nums',
                'transition-colors duration-fast hover:border-line-strong',
                PALETTE_STYLES[state],
                current && 'ring-2 ring-accent ring-offset-2 ring-offset-surface',
              )}
            >
              {i + 1}
              {flagged ? (
                <Flag className="absolute top-0.5 right-0.5 w-2.5 h-2.5 text-warn" aria-hidden="true" />
              ) : null}
              <span className="sr-only">
                {` — ${state === 'open' ? 'not answered' : state === 'flagged' ? 'flagged, not answered' : state === 'both' ? 'answered and flagged' : 'answered'}`}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
});

function PaletteLegend({ answered, flagged, unanswered }) {
  return (
    <dl className="grid grid-cols-1 gap-1.5 text-xs">
      <div className="flex items-center justify-between gap-3">
        <dt className="inline-flex items-center gap-2 text-ink-2">
          <span className="w-3 h-3 rounded-sm bg-ok-soft border border-ok-line" aria-hidden="true" />
          Answered
        </dt>
        <dd className="font-semibold text-ink tabular-nums">{answered}</dd>
      </div>
      <div className="flex items-center justify-between gap-3">
        <dt className="inline-flex items-center gap-2 text-ink-2">
          <Flag className="w-3 h-3 text-warn" aria-hidden="true" />
          Flagged
        </dt>
        <dd className="font-semibold text-ink tabular-nums">{flagged}</dd>
      </div>
      <div className="flex items-center justify-between gap-3">
        <dt className="inline-flex items-center gap-2 text-ink-2">
          <span className="w-3 h-3 rounded-sm bg-surface border border-line" aria-hidden="true" />
          Not answered
        </dt>
        <dd className="font-semibold text-ink tabular-nums">{unanswered}</dd>
      </div>
    </dl>
  );
}

/* ----------------------------------------------------------------- Dialog */

function Dialog({ open, onClose, labelledBy, describedBy, children, className = '' }) {
  const ref = useRef(null);
  const restoreRef = useRef(null);
  const closeRef = useRef(onClose);

  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return undefined;
    restoreRef.current = document.activeElement;
    const node = ref.current;
    const focusable = node?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    (focusable?.[0] || node)?.focus?.();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        closeRef.current?.();
        return;
      }
      if (e.key !== 'Tab' || !node) return;
      const items = Array.from(
        node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
      ).filter((el) => !el.disabled);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown, true);
    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      restoreRef.current?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-dialog flex items-end sm:items-center justify-center">
      <button
        type="button"
        aria-label="Close"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 cursor-default"
      />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        tabIndex={-1}
        className={cx(
          'relative w-full sm:max-w-md bg-overlay border border-line shadow-e3',
          'rounded-t-2xl sm:rounded-2xl p-5 animate-slide-up-sheet sm:animate-fade-in',
          'max-h-[85vh] overflow-y-auto',
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ Option rows */

function OptionRow({ id, option, index, checked, tabbable, onSelect, onKeyDown }) {
  const hindi = isHindi(option.text);
  return (
    <button
      id={id}
      type="button"
      role="radio"
      aria-checked={checked}
      tabIndex={tabbable ? 0 : -1}
      onClick={() => onSelect(option.id)}
      onKeyDown={(e) => onKeyDown(e, index)}
      className={cx(
        'w-full min-h-[44px] flex items-start gap-3 p-3 sm:p-3.5 rounded-lg border text-left',
        'transition-colors duration-fast',
        checked
          ? 'bg-accent-soft border-accent-line'
          : 'bg-surface border-line hover:border-line-strong hover:bg-sunken',
      )}
    >
      <span
        className={cx(
          'shrink-0 w-6 h-6 mt-px rounded-md grid place-items-center text-xs font-semibold',
          checked ? 'bg-accent text-ink-inv' : 'bg-sunken border border-line text-ink-2',
        )}
        aria-hidden="true"
      >
        {checked ? <CheckCircle2 className="w-3.5 h-3.5" /> : option.id}
      </span>
      <span
        className={cx('flex-1 text-base leading-relaxed', checked ? 'text-ink font-medium' : 'text-ink-2', hindi && 'hindi-text')}
        lang={hindi ? 'hi' : undefined}
      >
        <span className="sr-only">{`Option ${option.id}: `}</span>
        {option.text}
      </span>
    </button>
  );
}

/* ------------------------------------------------------------ Review item */

const REVIEW_STATUS = {
  correct: { tone: 'ok', icon: CheckCircle2, label: 'Correct' },
  wrong: { tone: 'danger', icon: XCircle, label: 'Incorrect' },
  skipped: { tone: 'neutral', icon: MinusCircle, label: 'Not answered' },
};

function ReviewItem({ question, index, given, groupLabel }) {
  const status = given === undefined ? 'skipped' : given === question.correctAnswer ? 'correct' : 'wrong';
  const spec = REVIEW_STATUS[status];
  const StatusIcon = spec.icon;
  const group = groupOf(question, groupLabel);
  const questionHindi = isHindi(question.question);
  const explanationHindi = isHindi(question.explanation || '');

  return (
    <li
      className={cx(
        'panel p-4 sm:p-5 border-l-4',
        status === 'correct' && 'border-l-ok',
        status === 'wrong' && 'border-l-danger',
        status === 'skipped' && 'border-l-line-strong',
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="text-xs font-semibold text-ink-3 tabular-nums">
          Question {index + 1}
          <span className="text-ink-4"> · </span>
          {group.label}
        </span>
        <Badge tone={spec.tone} icon={StatusIcon}>{spec.label}</Badge>
      </div>

      {question.englishQuestion ? (
        <p className="text-prose font-medium text-ink leading-relaxed">{question.englishQuestion}</p>
      ) : null}
      {!question.englishQuestion || question.englishQuestion !== question.question ? (
        <p
          className={cx(
            'text-prose leading-relaxed',
            question.englishQuestion ? 'mt-1 text-ink-2' : 'font-medium text-ink',
            questionHindi && 'hindi-text',
          )}
          lang={questionHindi ? 'hi' : undefined}
        >
          {question.question}
        </p>
      ) : null}

      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {question.options.map((opt) => {
          const isAnswer = opt.id === question.correctAnswer;
          const isGiven = opt.id === given;
          const hindi = isHindi(opt.text);
          return (
            <li
              key={opt.id}
              className={cx(
                'flex items-start gap-2 p-2.5 rounded-md border text-sm',
                isAnswer && 'bg-ok-soft border-ok-line text-ok-ink',
                !isAnswer && isGiven && 'bg-danger-soft border-danger-line text-danger-ink',
                !isAnswer && !isGiven && 'bg-surface border-line text-ink-3',
              )}
            >
              {isAnswer ? (
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-ok" aria-hidden="true" />
              ) : isGiven ? (
                <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-danger" aria-hidden="true" />
              ) : (
                <span className="w-4 h-4 shrink-0 mt-0.5 grid place-items-center text-2xs font-semibold text-ink-4" aria-hidden="true">
                  {opt.id}
                </span>
              )}
              <span className={cx('flex-1 leading-relaxed', hindi && 'hindi-text')} lang={hindi ? 'hi' : undefined}>
                {isAnswer ? <span className="sr-only">Correct answer: </span> : null}
                {isGiven && !isAnswer ? <span className="sr-only">Your answer: </span> : null}
                {opt.text}
              </span>
            </li>
          );
        })}
      </ul>

      {question.explanation ? (
        <div className="mt-3 p-3 rounded-md bg-sunken border border-line">
          <p className="eyebrow mb-1">Why</p>
          <p
            className={cx('text-base text-ink-2 leading-relaxed', explanationHindi && 'hindi-text')}
            lang={explanationHindi ? 'hi' : undefined}
          >
            {question.explanation}
          </p>
        </div>
      ) : null}
    </li>
  );
}

/* ================================================================== Engine */

export default function ExamEngine({
  questions = [],
  modes = null,
  examTitle,
  title,
  durationMinutes = 60,
  quizId = 'mock-exam',
  passPercent = 50,
  groupLabel = 'Unit',
  intro,
  markingScheme,
  practiceHref,
  practiceLabel = 'Practise without a timer',
  headingLevel = 'h2',
}) {
  const { recordQuizScore } = useProgress();

  const heading = examTitle || title || 'Mock test';
  const Heading = headingLevel === 'h3' ? 'h3' : 'h2';

  const modeList = useMemo(() => {
    if (Array.isArray(modes) && modes.length) return modes;
    return [
      {
        key: 'default',
        label: heading,
        questions,
        durationMinutes,
      },
    ];
  }, [modes, questions, durationMinutes, heading]);

  const [modeKey, setModeKey] = useState(modeList[0]?.key);
  const activeMode = modeList.find((m) => m.key === modeKey) || modeList[0];
  const activeQuestions = activeMode?.questions?.length ? activeMode.questions : questions;
  const activeDuration = activeMode?.durationMinutes || durationMinutes;

  const [phase, setPhase] = useState('brief');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flags, setFlags] = useState({});
  const [optionFocus, setOptionFocus] = useState(0);
  const [deadline, setDeadline] = useState(null);
  const [startedAt, setStartedAt] = useState(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [reviewFilter, setReviewFilter] = useState('all');

  const idPrefix = useMemo(() => `exam-${quizId}`, [quizId]);
  const questionHeadingRef = useRef(null);
  const submittedRef = useRef(false);

  const total = activeQuestions.length;
  const answeredCount = Object.keys(answers).length;
  const flaggedCount = Object.values(flags).filter(Boolean).length;
  const unansweredCount = total - answeredCount;

  /* --------------------------------------------------------- brief data */

  const groupSummary = useMemo(() => {
    const map = new Map();
    activeQuestions.forEach((q) => {
      const g = groupOf(q, groupLabel);
      const row = map.get(g.key) || { key: g.key, label: g.label, total: 0, correct: 0 };
      row.total += 1;
      map.set(g.key, row);
    });
    return Array.from(map.values());
  }, [activeQuestions, groupLabel]);

  /* ------------------------------------------------------------- scoring */

  const result = useMemo(() => {
    if (phase !== 'done') return null;
    let correct = 0;
    const byGroup = new Map();
    activeQuestions.forEach((q, i) => {
      const g = groupOf(q, groupLabel);
      const row = byGroup.get(g.key) || { key: g.key, label: g.label, total: 0, correct: 0 };
      row.total += 1;
      if (answers[i] !== undefined && answers[i] === q.correctAnswer) {
        correct += 1;
        row.correct += 1;
      }
      byGroup.set(g.key, row);
    });
    const attempted = Object.keys(answers).length;
    const percentage = total ? Math.round((correct / total) * 100) : 0;
    const accuracy = attempted ? Math.round((correct / attempted) * 100) : 0;
    return {
      correct,
      attempted,
      wrong: attempted - correct,
      skipped: total - attempted,
      percentage,
      accuracy,
      passed: percentage >= passPercent,
      grade: gradeFor(percentage),
      groups: Array.from(byGroup.values()),
    };
  }, [phase, activeQuestions, answers, groupLabel, total, passPercent]);

  /* ------------------------------------------------------------ actions */

  const start = useCallback(() => {
    submittedRef.current = false;
    setAnswers({});
    setFlags({});
    setCurrentIndex(0);
    setOptionFocus(0);
    setTimeTaken(0);
    setReviewFilter('all');
    const now = Date.now();
    setStartedAt(now);
    setDeadline(now + activeDuration * 60 * 1000);
    setPhase('running');
  }, [activeDuration]);

  const submit = useCallback(() => {
    if (submittedRef.current) return;
    submittedRef.current = true;

    let score = 0;
    activeQuestions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) score += 1;
    });

    const elapsed = startedAt ? Math.round((Date.now() - startedAt) / 1000) : 0;
    setTimeTaken(Math.min(elapsed, activeDuration * 60));
    setConfirmOpen(false);
    setPaletteOpen(false);
    setPhase('done');

    recordQuizScore(quizId, score, activeQuestions.length);
  }, [activeQuestions, answers, startedAt, activeDuration, recordQuizScore, quizId]);

  const goTo = useCallback(
    (index) => {
      setCurrentIndex((prev) => {
        const next = Math.max(0, Math.min(total - 1, index));
        if (next !== prev) setOptionFocus(0);
        return next;
      });
    },
    [total],
  );

  const selectOption = useCallback(
    (optionId) => {
      setAnswers((prev) => ({ ...prev, [currentIndex]: optionId }));
    },
    [currentIndex],
  );

  const clearAnswer = useCallback(() => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[currentIndex];
      return next;
    });
  }, [currentIndex]);

  const toggleFlag = useCallback(() => {
    setFlags((prev) => ({ ...prev, [currentIndex]: !prev[currentIndex] }));
  }, [currentIndex]);

  const jumpTo = useCallback(
    (i) => {
      goTo(i);
      setPaletteOpen(false);
    },
    [goTo],
  );

  /* ------------------------------------------------------- keyboard map */

  const dialogOpen = confirmOpen || paletteOpen;

  useEffect(() => {
    if (phase !== 'running' || dialogOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const el = e.target;
      const tag = el?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el?.isContentEditable) return;

      const q = activeQuestions[currentIndex];
      if (!q) return;

      if (e.key >= '1' && e.key <= '9') {
        const idx = Number(e.key) - 1;
        if (idx < q.options.length) {
          e.preventDefault();
          setAnswers((prev) => ({ ...prev, [currentIndex]: q.options[idx].id }));
          setOptionFocus(idx);
        }
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(currentIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(currentIndex - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFlag();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [phase, dialogOpen, activeQuestions, currentIndex, goTo, toggleFlag]);

  /* Move focus to the new question so screen readers and the keyboard follow. */
  useEffect(() => {
    if (phase !== 'running') return;
    questionHeadingRef.current?.focus?.();
  }, [currentIndex, phase]);

  const onOptionKeyDown = useCallback(
    (e, index) => {
      const q = activeQuestions[currentIndex];
      if (!q) return;
      const count = q.options.length;
      let next = null;
      if (e.key === 'ArrowDown') next = (index + 1) % count;
      else if (e.key === 'ArrowUp') next = (index - 1 + count) % count;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = count - 1;
      if (next === null) return;
      e.preventDefault();
      setOptionFocus(next);
      setAnswers((prev) => ({ ...prev, [currentIndex]: q.options[next].id }));
      const node = document.getElementById(`${idPrefix}-opt-${next}`);
      node?.focus?.();
    },
    [activeQuestions, currentIndex, idPrefix],
  );

  /* ------------------------------------------------------------- render */

  if (!total) {
    return (
      <EmptyState
        icon={ListChecks}
        title="No questions in this paper yet"
        description="This test has no questions attached. Try the practice bank while it is being written."
        action={practiceHref ? <Button href={practiceHref} variant="secondary">{practiceLabel}</Button> : null}
      />
    );
  }

  /* ---------------------------------------------------------- 1. brief */

  if (phase === 'brief') {
    const marking = markingScheme || [
      '1 mark for every correct answer.',
      'No negative marking — a wrong answer costs nothing, so leave nothing blank.',
      `You qualify at ${passPercent}% or above.`,
    ];

    return (
      <div className="space-y-6">
        <Panel className="p-5 sm:p-6">
          <p className="eyebrow mb-2">Before you start</p>
          <Heading className="text-h2 font-semibold text-ink">{heading}</Heading>
          {intro ? <p className="mt-2 text-base text-ink-2 leading-relaxed max-w-measure">{intro}</p> : null}

          {modeList.length > 1 ? (
            <fieldset className="mt-6">
              <legend className="eyebrow mb-2">Choose a paper</legend>
              <div role="radiogroup" aria-label="Choose a paper" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {modeList.map((mode) => {
                  const selected = mode.key === modeKey;
                  const count = mode.questions?.length || 0;
                  return (
                    <button
                      key={mode.key}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setModeKey(mode.key)}
                      className={cx(
                        'text-left p-4 rounded-xl border min-h-[44px] transition-colors duration-fast',
                        selected
                          ? 'bg-accent-soft border-accent-line'
                          : 'bg-surface border-line hover:border-line-strong',
                      )}
                    >
                      <span className="flex items-start justify-between gap-2">
                        <span className="text-h4 font-semibold text-ink">{mode.label}</span>
                        <span
                          className={cx(
                            'shrink-0 w-5 h-5 rounded-full border grid place-items-center',
                            selected ? 'bg-accent border-accent text-ink-inv' : 'border-line-strong',
                          )}
                          aria-hidden="true"
                        >
                          {selected ? <CheckCircle2 className="w-3.5 h-3.5" /> : null}
                        </span>
                      </span>
                      {mode.description ? (
                        <span className="mt-1.5 block text-sm text-ink-2 leading-relaxed">{mode.description}</span>
                      ) : null}
                      <span className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-3 tabular-nums">
                        <span>{count} questions</span>
                        <span>{mode.durationMinutes || durationMinutes} minutes</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ) : null}

          <dl className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg bg-sunken border border-line">
              <dt className="eyebrow">Questions</dt>
              <dd className="mt-1 text-h3 font-semibold text-ink tabular-nums">{total}</dd>
            </div>
            <div className="p-3 rounded-lg bg-sunken border border-line">
              <dt className="eyebrow">Duration</dt>
              <dd className="mt-1 text-h3 font-semibold text-ink tabular-nums">{activeDuration} min</dd>
            </div>
            <div className="p-3 rounded-lg bg-sunken border border-line">
              <dt className="eyebrow">Maximum marks</dt>
              <dd className="mt-1 text-h3 font-semibold text-ink tabular-nums">{total}</dd>
            </div>
            <div className="p-3 rounded-lg bg-sunken border border-line">
              <dt className="eyebrow">Pass mark</dt>
              <dd className="mt-1 text-h3 font-semibold text-ink tabular-nums">
                {Math.ceil((passPercent / 100) * total)}
              </dd>
            </div>
          </dl>
        </Panel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Panel className="p-5">
            <h3 className="text-h4 font-semibold text-ink flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-ink-3" aria-hidden="true" />
              How it is marked
            </h3>
            <ul className="mt-3 space-y-2">
              {marking.map((line, i) => (
                <li key={i} className="flex items-start gap-2 text-base text-ink-2 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-ok" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
              <li className="flex items-start gap-2 text-base text-ink-2 leading-relaxed">
                <Clock className="w-4 h-4 mt-1 shrink-0 text-ink-3" aria-hidden="true" />
                <span>
                  The timer starts when you press start and submits the paper for you when it runs out.
                  It turns amber for the last 5 minutes.
                </span>
              </li>
            </ul>
          </Panel>

          <Panel className="p-5">
            <h3 className="text-h4 font-semibold text-ink flex items-center gap-2">
              <Target className="w-4 h-4 text-ink-3" aria-hidden="true" />
              What is covered
            </h3>
            <ul className="mt-3 space-y-1.5">
              {groupSummary.map((g) => (
                <li key={g.key} className="flex items-center justify-between gap-3 text-base">
                  <span className="text-ink-2 min-w-0 truncate">{g.label}</span>
                  <span className="text-ink font-medium tabular-nums shrink-0">{g.total}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <Panel className="p-5">
          <h3 className="text-h4 font-semibold text-ink flex items-center gap-2">
            <Keyboard className="w-4 h-4 text-ink-3" aria-hidden="true" />
            Keyboard
          </h3>
          <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {[
              ['1 – 4', 'choose that option'],
              ['↑ ↓', 'move through the options'],
              ['← →', 'previous / next question'],
              ['F', 'flag this question for review'],
            ].map(([keys, what]) => (
              <div key={keys} className="flex items-center gap-3">
                <dt className="shrink-0 px-2 py-0.5 rounded-md bg-sunken border border-line font-mono text-2xs text-ink-2">
                  {keys}
                </dt>
                <dd className="text-ink-2">{what}</dd>
              </div>
            ))}
          </dl>
        </Panel>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg" icon={Play} onClick={start}>
            Start the test
          </Button>
          {practiceHref ? (
            <Button href={practiceHref} variant="ghost" size="lg">{practiceLabel}</Button>
          ) : null}
        </div>
      </div>
    );
  }

  /* -------------------------------------------------------- 2. running */

  if (phase === 'running') {
    const question = activeQuestions[currentIndex];
    const given = answers[currentIndex];
    const flagged = Boolean(flags[currentIndex]);
    const group = groupOf(question, groupLabel);
    const questionHindi = isHindi(question.question);
    const progress = total ? Math.round((answeredCount / total) * 100) : 0;

    const paletteBlock = (
      <>
        <PaletteLegend answered={answeredCount} flagged={flaggedCount} unanswered={unansweredCount} />
        <hr className="rule my-4" />
        <Palette
          questions={activeQuestions}
          answers={answers}
          flags={flags}
          currentIndex={currentIndex}
          onJump={jumpTo}
        />
      </>
    );

    return (
      <div className="space-y-4">
        {/* Exam bar — stays with you while you scroll */}
        <div className="sticky top-header z-30 bg-ground py-2">
          <div className="panel shadow-e1 p-3 sm:p-4 flex flex-wrap items-center gap-3 justify-between">
            <div className="min-w-0">
              <Heading className="text-h4 font-semibold text-ink truncate">{heading}</Heading>
              <p className="text-xs text-ink-3 tabular-nums">
                Question {currentIndex + 1} of {total} · {answeredCount} answered
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ExamTimer deadline={deadline} onExpire={submit} />
              <Button
                variant="secondary"
                className="lg:hidden"
                icon={LayoutGrid}
                onClick={() => setPaletteOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={paletteOpen}
                aria-controls={`${idPrefix}-palette-sheet`}
              >
                <span className="sr-only sm:not-sr-only">Palette</span>
              </Button>
              <Button variant="primary" onClick={() => setConfirmOpen(true)}>
                Submit
              </Button>
            </div>
          </div>
        </div>

        <ProgressBar value={progress} label="Answered" className="px-0.5" />

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_18rem] gap-4 lg:gap-6 items-start">
          {/* Question */}
          <Panel as="section" className="p-4 sm:p-6" aria-label={`Question ${currentIndex + 1}`}>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-line">
              <span className="text-xs font-semibold text-ink-3 tabular-nums">
                Question {currentIndex + 1} of {total}
              </span>
              <div className="flex items-center gap-2">
                <Badge tone="neutral">{group.label}</Badge>
                <Badge tone="exam">1 mark</Badge>
                {question.difficulty ? <Badge tone="neutral">{question.difficulty}</Badge> : null}
              </div>
            </div>

            <h3
              id={`${idPrefix}-question`}
              ref={questionHeadingRef}
              tabIndex={-1}
              className={cx(
                'text-prose sm:text-prose-lg font-medium text-ink leading-relaxed',
                !question.englishQuestion && questionHindi && 'hindi-text',
              )}
              lang={!question.englishQuestion && questionHindi ? 'hi' : undefined}
            >
              {question.englishQuestion || question.question}
            </h3>
            {question.englishQuestion && question.question !== question.englishQuestion ? (
              <p className="mt-1.5 text-prose text-ink-2 leading-relaxed hindi-text" lang="hi">
                {question.question}
              </p>
            ) : null}

            <div
              role="radiogroup"
              aria-labelledby={`${idPrefix}-question`}
              className="mt-5 space-y-2.5"
            >
              {question.options.map((opt, i) => (
                <OptionRow
                  key={opt.id}
                  id={`${idPrefix}-opt-${i}`}
                  option={opt}
                  index={i}
                  checked={given === opt.id}
                  tabbable={given === undefined ? i === optionFocus : given === opt.id}
                  onSelect={selectOption}
                  onKeyDown={onOptionKeyDown}
                />
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-line flex flex-wrap items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant={flagged ? 'soft' : 'ghost'}
                  icon={Flag}
                  onClick={toggleFlag}
                  aria-pressed={flagged}
                >
                  {flagged ? 'Flagged' : 'Flag'}
                </Button>
                {given !== undefined ? (
                  <Button variant="ghost" icon={RotateCcw} onClick={clearAnswer}>
                    Clear
                  </Button>
                ) : null}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={ArrowLeft}
                  disabled={currentIndex === 0}
                  onClick={() => goTo(currentIndex - 1)}
                >
                  <span className="sr-only sm:not-sr-only">Previous</span>
                </Button>
                {currentIndex === total - 1 ? (
                  <Button variant="primary" size="lg" onClick={() => setConfirmOpen(true)}>
                    Review &amp; submit
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    size="lg"
                    iconRight={ArrowRight}
                    onClick={() => goTo(currentIndex + 1)}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          </Panel>

          {/* Palette — column on desktop, sheet on mobile */}
          <Panel as="aside" className="hidden lg:block p-4 sticky top-[9rem]" aria-label="Question palette">
            <h3 className="eyebrow mb-3">Palette</h3>
            {paletteBlock}
          </Panel>
        </div>

        {/* Mobile palette sheet */}
        <Dialog
          open={paletteOpen}
          onClose={() => setPaletteOpen(false)}
          labelledBy={`${idPrefix}-palette-title`}
        >
          <div id={`${idPrefix}-palette-sheet`}>
            <div className="flex items-center justify-between gap-3 mb-4">
              <h3 id={`${idPrefix}-palette-title`} className="text-h4 font-semibold text-ink">
                Question palette
              </h3>
              <Button
                variant="ghost"
                iconOnly
                icon={X}
                aria-label="Close question palette"
                onClick={() => setPaletteOpen(false)}
              />
            </div>
            {paletteBlock}
          </div>
        </Dialog>

        {/* Submit confirmation */}
        <Dialog
          open={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          labelledBy={`${idPrefix}-confirm-title`}
          describedBy={`${idPrefix}-confirm-body`}
        >
          <h3 id={`${idPrefix}-confirm-title`} className="text-h3 font-semibold text-ink">
            Submit the paper?
          </h3>
          <div id={`${idPrefix}-confirm-body`} className="mt-4 space-y-3">
            <dl className="grid grid-cols-2 gap-2">
              <div className="p-3 rounded-lg bg-sunken border border-line">
                <dt className="eyebrow">Answered</dt>
                <dd className="mt-0.5 text-h4 font-semibold text-ink tabular-nums">{answeredCount}</dd>
              </div>
              <div className="p-3 rounded-lg bg-sunken border border-line">
                <dt className="eyebrow">Not answered</dt>
                <dd className="mt-0.5 text-h4 font-semibold text-ink tabular-nums">{unansweredCount}</dd>
              </div>
            </dl>
            {unansweredCount > 0 ? (
              <p className="flex items-start gap-2 text-base text-ink-2 leading-relaxed">
                <AlertTriangle className="w-4 h-4 mt-1 shrink-0 text-warn" aria-hidden="true" />
                <span>
                  {unansweredCount} question{unansweredCount === 1 ? ' is' : 's are'} still blank. There is no
                  negative marking, so a guess is always better than a blank.
                </span>
              </p>
            ) : (
              <p className="flex items-start gap-2 text-base text-ink-2 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-ok" aria-hidden="true" />
                <span>Every question has an answer. Submitting shows your score and the full answer key.</span>
              </p>
            )}
          </div>
          <div className="mt-5 flex items-center justify-end gap-2">
            <Button variant="ghost" onClick={() => setConfirmOpen(false)}>Keep working</Button>
            <Button variant="primary" onClick={submit}>Submit paper</Button>
          </div>
        </Dialog>
      </div>
    );
  }

  /* ---------------------------------------------------------- 3. done */

  const filters = [
    { value: 'all', label: `All ${total}` },
    { value: 'wrong', label: `Wrong ${result.wrong}` },
    { value: 'skipped', label: `Skipped ${result.skipped}` },
    { value: 'flagged', label: `Flagged ${flaggedCount}` },
  ];

  const reviewList = activeQuestions
    .map((q, i) => ({ q, i }))
    .filter(({ q, i }) => {
      if (reviewFilter === 'wrong') return answers[i] !== undefined && answers[i] !== q.correctAnswer;
      if (reviewFilter === 'skipped') return answers[i] === undefined;
      if (reviewFilter === 'flagged') return Boolean(flags[i]);
      return true;
    });

  return (
    <div className="space-y-10">
      <section aria-labelledby={`${idPrefix}-result-title`} className="space-y-5">
        <Panel className="p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="eyebrow mb-2">Result</p>
              <Heading id={`${idPrefix}-result-title`} className="text-h2 font-semibold text-ink">
                {heading}
              </Heading>
            </div>
            <Badge tone={result.passed ? 'ok' : 'danger'} icon={result.passed ? CheckCircle2 : XCircle}>
              {result.passed ? `Qualified · Grade ${result.grade.label}` : `Not qualified · Grade ${result.grade.label}`}
            </Badge>
          </div>

          <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3">
            <StatTile
              label="Score"
              value={`${result.correct}/${total}`}
              hint={`${result.percentage}% of the paper`}
              icon={Trophy}
            />
            <StatTile
              label="Accuracy"
              value={`${result.accuracy}%`}
              hint={`${result.correct} right of ${result.attempted} attempted`}
              icon={Target}
            />
            <StatTile
              label="Time taken"
              value={formatClock(timeTaken)}
              hint={`of ${activeDuration} minutes`}
              icon={Timer}
            />
            <StatTile
              label="Grade"
              value={result.grade.label}
              hint={result.grade.name}
              icon={ShieldCheck}
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button variant="primary" icon={RotateCcw} onClick={() => setPhase('brief')}>
              Take it again
            </Button>
            {practiceHref ? (
              <Button href={practiceHref} variant="secondary">{practiceLabel}</Button>
            ) : null}
          </div>
        </Panel>
      </section>

      <section aria-labelledby={`${idPrefix}-breakdown`}>
        <SectionHeading
          id={`${idPrefix}-breakdown`}
          title={`${groupLabel}-wise breakdown`}
          description="Where the marks came from, and where to go back to the notes."
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {result.groups.map((g) => {
            const pct = g.total ? Math.round((g.correct / g.total) * 100) : 0;
            const verdict =
              pct >= 70
                ? { tone: 'ok', icon: CheckCircle2, label: 'Strong' }
                : pct >= 50
                  ? { tone: 'warn', icon: AlertTriangle, label: 'Shaky' }
                  : { tone: 'danger', icon: XCircle, label: 'Revise' };
            return (
              <li key={g.key} className="panel p-4">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-base font-medium text-ink min-w-0 truncate">{g.label}</span>
                  <Badge tone={verdict.tone} icon={verdict.icon}>{verdict.label}</Badge>
                </div>
                <ProgressBar
                  value={pct}
                  label={`${g.correct} of ${g.total} correct`}
                  tone="accent"
                />
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby={`${idPrefix}-review`}>
        <SectionHeading
          id={`${idPrefix}-review`}
          title="Answer review"
          description="Every question, the right answer and why it is right."
          action={
            <div className="max-w-full overflow-x-auto no-scrollbar">
              <Segmented
                options={filters}
                value={reviewFilter}
                onChange={setReviewFilter}
                ariaLabel="Filter the answer review"
              />
            </div>
          }
        />
        {reviewList.length ? (
          <ul className="space-y-4">
            {reviewList.map(({ q, i }) => (
              <ReviewItem key={q.id ?? i} question={q} index={i} given={answers[i]} groupLabel={groupLabel} />
            ))}
          </ul>
        ) : (
          <EmptyState
            icon={CheckCircle2}
            title="Nothing in this list"
            description={
              reviewFilter === 'wrong'
                ? 'You did not get a single question wrong.'
                : reviewFilter === 'skipped'
                  ? 'You attempted every question.'
                  : 'You did not flag any question during the test.'
            }
            action={<Button variant="secondary" onClick={() => setReviewFilter('all')}>Show all questions</Button>}
          />
        )}
      </section>
    </div>
  );
}
