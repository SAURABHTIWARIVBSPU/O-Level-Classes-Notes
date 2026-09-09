'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Flame,
  PlayCircle,
  Presentation,
  RotateCcw,
  Target,
  TrendingDown,
} from 'lucide-react';

import {
  Breadcrumbs,
  PageHeader,
  SectionHeading,
  Panel,
  CardLink,
  Button,
  Badge,
  ProgressBar,
  EmptyState,
  Skeleton,
  MetaItem,
} from '@/components/ui';
import { getModules, getCourseTopics } from '@/lib/navigation';
import { useProgress } from '@/lib/progressContext';

/* ------------------------------------------------------------------ helpers */

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
}

function accuracyTone(pct) {
  if (pct >= 70) return 'ok';
  if (pct >= 50) return 'warn';
  return 'danger';
}

/** One number, one plain-language line saying what it means. */
function Stat({ label, value, suffix, meaning }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <p className="mt-1.5 text-h2 font-semibold text-ink tabular-nums">
        {value}
        {suffix ? <span className="ml-1 text-base font-medium text-ink-3">{suffix}</span> : null}
      </p>
      <p className="mt-1.5 text-sm text-ink-3 leading-relaxed">{meaning}</p>
    </div>
  );
}

/* -------------------------------------------------------------------- page */

export default function DashboardClient() {
  const {
    completedTopics,
    quizScores,
    topicScores,
    bookmarks,
    savedMcqs,
    personalNotes,
    lastVisited,
    streak,
    isLoaded,
    weakTopics,
    resetProgress,
  } = useProgress();

  const modules = useMemo(() => getModules('olevel'), []);
  const topics = useMemo(() => getCourseTopics('olevel'), []);

  /* `completedTopics` is an ARRAY of slugs — never index it like an object. */
  const doneSet = useMemo(
    () => new Set(Array.isArray(completedTopics) ? completedTopics : []),
    [completedTopics],
  );

  const totalTopics = topics.length;
  const doneCount = useMemo(() => topics.filter((t) => doneSet.has(t.slug)).length, [topics, doneSet]);
  const overallPct = totalTopics ? Math.round((doneCount / totalTopics) * 100) : 0;

  const unitRows = useMemo(
    () =>
      modules.map((m) => {
        const total = m.topics.length;
        const done = m.topics.filter((t) => doneSet.has(t.slug)).length;
        return { ...m, done, total, pct: total ? Math.round((done / total) * 100) : 0 };
      }),
    [modules, doneSet],
  );

  /* What to open next: the last topic read, or the first one still unfinished. */
  const nextUp = useMemo(() => {
    if (lastVisited?.slug) {
      const known = topics.find((t) => t.slug === lastVisited.slug);
      return {
        title: known?.title || lastVisited.title || 'Continue reading',
        href: known?.href || `/units/${lastVisited.unitSlug || 'unit-1'}/topics/${lastVisited.slug}`,
        context: known ? `Unit ${Number(known.moduleNumber)} · ${known.moduleTitle}` : 'Where you stopped',
        resumed: true,
      };
    }
    const first = topics.find((t) => !doneSet.has(t.slug));
    if (!first) return null;
    return {
      title: first.title,
      href: first.href,
      context: `Unit ${Number(first.moduleNumber)} · ${first.moduleTitle}`,
      resumed: false,
    };
  }, [lastVisited, topics, doneSet]);

  const weak = useMemo(() => {
    const list = Array.isArray(weakTopics) ? weakTopics : [];
    return list.map((w) => {
      const known = topics.find((t) => t.slug === w.slug);
      const unitSlug = known?.moduleKey || `unit-${Number(w.unit) || 1}`;
      return {
        ...w,
        title: known?.title || w.title || w.slug,
        href: known?.href || `/units/${unitSlug}/topics/${w.slug}`,
        mcqHref: `/mcqs/${unitSlug}`,
        unitNumber: known ? Number(known.moduleNumber) : Number(w.unit) || 1,
      };
    });
  }, [weakTopics, topics]);

  const recentScores = useMemo(() => {
    const rows = [];

    Object.entries(quizScores || {}).forEach(([id, data]) => {
      if (!data || !data.total) return;
      rows.push({
        key: `quiz-${id}`,
        label: id === 'mock-exam' ? 'Mock test' : id.replace(/-/g, ' '),
        sub: 'Full paper',
        correct: data.score,
        total: data.total,
        date: data.date,
        href: '/mock-test',
      });
    });

    Object.entries(topicScores || {}).forEach(([slug, data]) => {
      if (!data || !data.total) return;
      const known = topics.find((t) => t.slug === slug);
      rows.push({
        key: `topic-${slug}`,
        label: known?.title || slug,
        sub: known ? `Unit ${Number(known.moduleNumber)} quiz` : 'Topic quiz',
        correct: data.correct,
        total: data.total,
        date: data.date,
        href: known?.href || '/mcqs',
      });
    });

    return rows.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
  }, [quizScores, topicScores, topics]);

  const bookmarkCount = Array.isArray(bookmarks) ? bookmarks.length : 0;
  const savedMcqCount = Array.isArray(savedMcqs) ? savedMcqs.length : 0;
  const noteCount = Object.keys(personalNotes || {}).length;
  const savedTotal = bookmarkCount + savedMcqCount + noteCount;

  const hasProgress =
    doneCount > 0 || Boolean(lastVisited?.slug) || recentScores.length > 0 || savedTotal > 0;

  /* ------------------------------------------------------------- loading */

  if (!isLoaded) {
    return (
      <div className="shell shell-wide py-8 sm:py-10">
        <PageHeader
          eyebrow="Your progress"
          title="Dashboard"
          description="Reading your saved progress from this browser…"
        />
        <Panel className="p-5 sm:p-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-7 w-20" />
                <Skeleton className="h-3 w-full" />
              </div>
            ))}
          </div>
          <Skeleton className="h-1.5 w-full mt-6 rounded-full" />
        </Panel>
        <div className="mt-8 space-y-3">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-16 w-full rounded-xl" />
          ))}
        </div>
        <p className="sr-only" role="status">
          Loading your progress
        </p>
      </div>
    );
  }

  /* --------------------------------------------------------------- empty */

  if (!hasProgress) {
    const firstTopic = topics[0];

    return (
      <div className="shell shell-wide py-8 sm:py-10">
        <Breadcrumbs className="mb-5" items={[{ label: 'Progress' }]} />
        <PageHeader
          eyebrow="Your progress"
          title="Dashboard"
          hindiTitle="आपकी प्रगति"
          description="Nothing tracked yet. Read one topic and this page fills up — everything is stored in this browser only, so there is no account to make."
        />

        <EmptyState
          icon={BookOpen}
          title="Start with the first topic"
          description="Open a topic, read it, and tick “mark as done” at the end. Your streak, your unit bars and your weak areas all follow from that."
          action={
            <>
              <Button href={firstTopic ? firstTopic.href : '/units/unit-1'} variant="primary" icon={PlayCircle}>
                Start Unit 1
              </Button>
              <Button href="/syllabus" variant="secondary">
                See the whole syllabus
              </Button>
            </>
          }
        />

        <section aria-labelledby="what-appears" className="mt-12">
          <SectionHeading
            id="what-appears"
            title="What shows up here"
            description="Three things this page will answer once you have done some work."
          />
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-3 max-w-measure-wide">
            <div>
              <dt className="text-h4 font-semibold text-ink">Where you stopped</dt>
              <dd className="mt-1 text-base text-ink-2 leading-relaxed">
                One button that reopens the last topic you were reading.
              </dd>
            </div>
            <div>
              <dt className="text-h4 font-semibold text-ink">How far each unit is</dt>
              <dd className="mt-1 text-base text-ink-2 leading-relaxed">
                A bar per unit, so you can see at a glance which one is lagging.
              </dd>
            </div>
            <div>
              <dt className="text-h4 font-semibold text-ink">What you keep getting wrong</dt>
              <dd className="mt-1 text-base text-ink-2 leading-relaxed">
                Topics where your quiz score fell below 70%, with a link straight to more practice.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    );
  }

  /* ------------------------------------------------------------- populated */

  return (
    <div className="shell shell-wide py-8 sm:py-10">
      <Breadcrumbs className="mb-5" items={[{ label: 'Progress' }]} />

      <PageHeader
        eyebrow="Your progress"
        title="Dashboard"
        hindiTitle="आपकी प्रगति"
        description="Where you are in the O Level syllabus and what to do next. All of it is stored in this browser only."
        actions={
          <Button variant="ghost" icon={RotateCcw} onClick={resetProgress}>
            Reset progress
          </Button>
        }
        meta={
          <>
            <MetaItem icon={CheckCircle2}>
              {doneCount} of {totalTopics} topics done
            </MetaItem>
            <MetaItem icon={Flame}>
              {streak} day{streak === 1 ? '' : 's'} in a row
            </MetaItem>
          </>
        }
      />

      {/* ------------------------------------------- continue where you left off */}
      {nextUp ? (
        <section aria-labelledby="continue-heading" className="mb-6">
          <h2 id="continue-heading" className="sr-only">
            Continue studying
          </h2>
          <div className="rounded-xl border border-accent-line bg-accent-soft p-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="eyebrow text-accent-ink">
                {nextUp.resumed ? 'Continue where you left off' : 'Next topic in the syllabus'}
              </p>
              <p className="mt-1 text-h3 font-semibold text-ink truncate">{nextUp.title}</p>
              <p className="mt-0.5 text-sm text-ink-2">{nextUp.context}</p>
            </div>
            <Button href={nextUp.href} variant="primary" size="lg" iconRight={ArrowRight} className="shrink-0">
              {nextUp.resumed ? 'Resume' : 'Start'}
            </Button>
          </div>
        </section>
      ) : (
        <section aria-labelledby="continue-heading" className="mb-6">
          <h2 id="continue-heading" className="sr-only">
            Continue studying
          </h2>
          <div className="rounded-xl border border-ok-line bg-ok-soft p-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="eyebrow text-ok-ink">Every topic is marked done</p>
              <p className="mt-1 text-h3 font-semibold text-ink">Time to test it under exam conditions</p>
            </div>
            <Button href="/mock-test" variant="primary" size="lg" iconRight={ArrowRight} className="shrink-0">
              Take the mock test
            </Button>
          </div>
        </section>
      )}

      {/* ---------------------------------------------------------- headline stats */}
      <section aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">
          Your numbers
        </h2>
        <Panel className="p-5 sm:p-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <Stat
              label="Syllabus covered"
              value={`${overallPct}%`}
              meaning={`You have marked ${doneCount} of the ${totalTopics} O Level topics as done.`}
            />
            <Stat
              label="Topics done"
              value={doneCount}
              suffix={`/ ${totalTopics}`}
              meaning="Tick “mark as done” at the end of a topic page to move this."
            />
            <Stat
              label="Day streak"
              value={streak}
              suffix={streak === 1 ? 'day' : 'days'}
              meaning={`Days in a row you have opened this site. Come back tomorrow to make it ${streak + 1}.`}
            />
          </div>
          <ProgressBar className="mt-6" value={overallPct} label="Whole syllabus" />
        </Panel>
      </section>

      {/* --------------------------------------------------------- unit progress */}
      <section aria-labelledby="units-heading" className="mt-12">
        <SectionHeading
          id="units-heading"
          title="Unit by unit"
          description="A longer bar means more of that unit is behind you. Short bars are where your next study hour goes."
          action={
            <Button href="/syllabus" variant="ghost" size="sm" iconRight={ArrowRight}>
              Syllabus
            </Button>
          }
        />
        <Panel>
          <ul className="divide-y divide-line">
            {unitRows.map((unit) => (
              <li key={unit.key} className="p-4 sm:p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold text-ink min-w-0">
                    <Link href={unit.href} className="hover:text-accent transition-colors duration-fast">
                      <span className="font-mono text-xs text-ink-3 mr-2 tabular-nums">
                        U{String(Number(unit.number)).padStart(2, '0')}
                      </span>
                      {unit.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-ink-3 tabular-nums shrink-0">
                    {unit.done} of {unit.total} topics
                  </p>
                </div>

                <ProgressBar
                  className="mt-3"
                  value={unit.pct}
                  showValue={false}
                  tone={unit.pct === 100 ? 'ok' : 'accent'}
                  label={`${unit.title} progress`}
                />

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="text-xs font-semibold text-ink tabular-nums">{unit.pct}%</span>
                  <Link href={unit.href} className="text-xs font-medium text-accent hover:underline">
                    Open the topics
                  </Link>
                  {unit.mcqHref ? (
                    <Link href={unit.mcqHref} className="text-xs font-medium text-ink-2 hover:text-ink">
                      Practise MCQs
                    </Link>
                  ) : null}
                  {unit.pct === 100 ? (
                    <Badge tone="ok" icon={CheckCircle2}>
                      Done
                    </Badge>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </section>

      {/* ------------------------------------------------------------ weak topics */}
      <section aria-labelledby="weak-heading" className="mt-12">
        <SectionHeading
          id="weak-heading"
          title="Worth revising"
          description="Topics where you scored under 70% on the in-topic quiz. These are the cheapest marks left on the table."
        />
        {weak.length === 0 ? (
          <EmptyState
            icon={Target}
            title="Nothing flagged yet"
            description="Take the short quiz at the end of a topic. Anything you score under 70% on shows up here with a link back to it."
            action={
              <Button href="/mcqs" variant="secondary">
                Practise MCQs
              </Button>
            }
          />
        ) : (
          <Panel>
            <ul className="divide-y divide-line">
              {weak.map((item) => (
                <li key={item.slug} className="p-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <TrendingDown className="w-3.5 h-3.5 text-danger shrink-0" aria-hidden="true" />
                      <Badge tone={accuracyTone(item.accuracy)}>{item.accuracy}% correct</Badge>
                      <span className="text-xs text-ink-3">Unit {item.unitNumber}</span>
                    </div>
                    <h3 className="mt-1.5 text-base font-medium text-ink">{item.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <Button href={item.href} size="sm" variant="secondary">
                      Read it again
                    </Button>
                    <Button href={item.mcqHref} size="sm" variant="soft">
                      Practise this unit
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        )}
      </section>

      {/* ----------------------------------------------------------- recent scores */}
      <section aria-labelledby="scores-heading" className="mt-12">
        <SectionHeading
          id="scores-heading"
          title="Recent scores"
          description="Your last few quiz attempts, newest first. Anything under 70% is flagged above."
          action={
            <Button href="/mock-test" variant="ghost" size="sm" iconRight={ArrowRight}>
              Mock test
            </Button>
          }
        />
        {recentScores.length === 0 ? (
          <EmptyState
            icon={ClipboardList}
            title="No attempts recorded"
            description="Finish a topic quiz or a full mock test and the score lands here, so you can see whether you are actually improving."
            action={
              <Button href="/mock-test" variant="secondary">
                Take a mock test
              </Button>
            }
          />
        ) : (
          <Panel>
            <ul className="divide-y divide-line">
              {recentScores.map((row) => {
                const pct = row.total ? Math.round((row.correct / row.total) * 100) : 0;
                return (
                  <li key={row.key} className="p-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <div className="min-w-0">
                      <Link href={row.href} className="text-base font-medium text-ink hover:text-accent transition-colors duration-fast">
                        {row.label}
                      </Link>
                      <p className="text-xs text-ink-3">
                        {row.sub}
                        {row.date ? ` · ${formatDate(row.date)}` : ''}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-base font-semibold text-ink tabular-nums">
                        {row.correct}/{row.total}
                      </span>
                      <Badge tone={accuracyTone(pct)}>{pct}%</Badge>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Panel>
        )}
      </section>

      {/* -------------------------------------------------------------- shortcuts */}
      <section aria-labelledby="shortcuts-heading" className="mt-12">
        <SectionHeading id="shortcuts-heading" title="Your workspace" />
        <div className="grid gap-4 sm:grid-cols-2">
          <CardLink href="/saved" className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="eyebrow">Saved</p>
                <h3 className="mt-1 text-h4 font-semibold text-ink">Bookmarks, MCQs and notes</h3>
                <p className="mt-1 text-sm text-ink-2">
                  {bookmarkCount} bookmark{bookmarkCount === 1 ? '' : 's'} · {savedMcqCount} MCQ
                  {savedMcqCount === 1 ? '' : 's'} · {noteCount} note{noteCount === 1 ? '' : 's'}
                </p>
              </div>
              <BookMarked className="w-4 h-4 text-ink-4 shrink-0" aria-hidden="true" />
            </div>
          </CardLink>

          <CardLink href="/classroom" className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="eyebrow">Tools</p>
                <h3 className="mt-1 text-h4 font-semibold text-ink">Digital classroom</h3>
                <p className="mt-1 text-sm text-ink-2">Whiteboard and live editor side by side.</p>
              </div>
              <Presentation className="w-4 h-4 text-ink-4 shrink-0" aria-hidden="true" />
            </div>
          </CardLink>

          <CardLink href="/practical" className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="eyebrow">Practice</p>
                <h3 className="mt-1 text-h4 font-semibold text-ink">Practical lab</h3>
                <p className="mt-1 text-sm text-ink-2">Exam exercises with steps and model answers.</p>
              </div>
              <ClipboardList className="w-4 h-4 text-ink-4 shrink-0" aria-hidden="true" />
            </div>
          </CardLink>

          <CardLink href="/one-shot" className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="eyebrow">Revise</p>
                <h3 className="mt-1 text-h4 font-semibold text-ink">One-shot revision</h3>
                <p className="mt-1 text-sm text-ink-2">A whole unit in a single sitting.</p>
              </div>
              <CalendarDays className="w-4 h-4 text-ink-4 shrink-0" aria-hidden="true" />
            </div>
          </CardLink>
        </div>
      </section>
    </div>
  );
}
