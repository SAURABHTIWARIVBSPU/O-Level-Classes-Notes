'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  GraduationCap,
  Hash,
  HelpCircle,
  Layers,
  ListChecks,
  Timer,
} from 'lucide-react';

import {
  Breadcrumbs,
  Button,
  CardLink,
  EmptyState,
  MetaItem,
  PageHeader,
  ModuleIcon,
  ProgressBar,
  SectionHeading,
  StatTile,
} from '@/components/ui';
import { getModule, getModules, moduleVisual } from '@/lib/navigation';
import { useProgress } from '@/lib/progressContext';

/**
 * Chapter overview: what this chapter covers, what you should be able to do
 * afterwards, the ordered topic list with your own progress on it, and where to
 * go next (questions, long-form notes, cheat sheets, mock test).
 *
 * Client component: the topic list shows per-topic completion from useProgress,
 * which is localStorage-backed and therefore cannot be resolved on the server.
 */
export default function CCCChapterPage({ params }) {
  const { completedTopics } = useProgress();

  const chapterSlug = decodeURIComponent(params?.chapterSlug || '');
  const chapter = getModule('ccc', chapterSlug);

  const position = useMemo(() => {
    const all = getModules('ccc');
    const i = all.findIndex((m) => m.key === chapterSlug);
    return {
      total: all.length,
      prev: i > 0 ? all[i - 1] : null,
      next: i > -1 && i < all.length - 1 ? all[i + 1] : null,
    };
  }, [chapterSlug]);

  if (!chapter) notFound();

  const done = Array.isArray(completedTopics) ? completedTopics : [];
  const topics = chapter.topics || [];
  const completed = topics.filter((t) => done.includes(t.slug)).length;
  const percent = topics.length ? Math.round((completed / topics.length) * 100) : 0;

  const chapterNumber = String(chapter.number || '').replace(/^0+/, '') || chapter.number;
  const unitNumber = Number(chapter.number) || chapterNumber;
  const notesHref = `/ccc/notes/unit-${unitNumber}`;
  const firstTopic = topics.find((t) => !done.includes(t.slug)) || topics[0];

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs
        className="mb-5"
        items={[
          { label: 'CCC', href: '/ccc' },
          { label: 'Chapters', href: '/ccc/syllabus' },
          { label: `Chapter ${chapterNumber}` },
        ]}
      />

      <PageHeader
        icon={<ModuleIcon name={moduleVisual('ccc', chapter.number).icon} />}
        tone={moduleVisual('ccc', chapter.number).tone}
        eyebrow={`Chapter ${chapterNumber} of ${position.total}`}
        title={chapter.title}
        hindiTitle={chapter.hindiTitle}
        description={chapter.description}
        actions={
          firstTopic ? (
            <>
              <Button variant="primary" href={firstTopic.href} iconRight={ArrowRight}>
                {completed > 0 && completed < topics.length ? 'Continue chapter' : 'Start reading'}
              </Button>
              <Button variant="secondary" href={`/ccc/mcqs/${chapter.key}`}>
                Chapter questions
              </Button>
            </>
          ) : null
        }
        meta={
          <>
            <MetaItem icon={Layers}>
              {topics.length} {topics.length === 1 ? 'topic' : 'topics'}
            </MetaItem>
            {chapter.hours ? <MetaItem icon={Clock}>{chapter.hours} hours</MetaItem> : null}
            {chapter.marks ? <MetaItem icon={Hash}>{chapter.marks}</MetaItem> : null}
            <MetaItem icon={CheckCircle2}>
              {completed} of {topics.length} done
            </MetaItem>
          </>
        }
      />

      <div className="space-y-12">
        {/* ------------------------------------------------------- at a glance */}
        <section aria-labelledby="chapter-at-a-glance">
          <SectionHeading
            id="chapter-at-a-glance"
            eyebrow="At a glance"
            title="Time and weightage"
            description="Hours are the official NIELIT contact hours for this chapter; weightage is its share of the 100-question paper."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <StatTile label="Theory" value={`${chapter.theoryHours ?? '—'}h`} hint="Classroom hours" icon={BookOpen} />
            <StatTile label="Practical" value={`${chapter.practicalHours ?? '—'}h`} hint="Lab hours" icon={Timer} tone="amber" />
            <StatTile label="Total" value={`${chapter.hours ?? '—'}h`} hint="Per NIELIT blueprint" icon={Clock} tone="sky" />
            <StatTile label="Weightage" value={chapter.marks || '—'} hint="In the exam" icon={GraduationCap} tone="rose" />
          </div>

          {topics.length ? (
            <ProgressBar
              className="mt-5 max-w-measure"
              value={percent}
              label={`Your progress in this chapter — ${completed} of ${topics.length} topics`}
            />
          ) : null}
        </section>

        {/* -------------------------------------------------- learning outcomes */}
        {chapter.objectives && chapter.objectives.length ? (
          <section aria-labelledby="chapter-outcomes">
            <SectionHeading
              id="chapter-outcomes"
              eyebrow="Learning outcomes"
              title="What you should be able to do"
              description="Straight from the official NIELIT curriculum for this chapter."
            />
            <ul className="space-y-3 max-w-measure">
              {chapter.objectives.map((objective, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-ok" aria-hidden="true" />
                  <span className="text-base text-ink-2 leading-relaxed">{objective}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* -------------------------------------------------------- topic list */}
        <section aria-labelledby="chapter-topics">
          <SectionHeading
            id="chapter-topics"
            eyebrow="Read in this order"
            title={`${topics.length} ${topics.length === 1 ? 'topic' : 'topics'} in this chapter`}
            description="Each topic is a short bilingual reading page with key points, common mistakes and a two-question check."
          />

          {topics.length ? (
            <ol className="space-y-2.5">
              {topics.map((topic, i) => {
                const isDone = done.includes(topic.slug);
                return (
                  <li key={topic.slug}>
                    <CardLink href={topic.href} className="group p-4 flex items-start gap-3.5">
                      <span
                        className={`shrink-0 grid place-items-center w-9 h-9 rounded-xl text-xs font-semibold font-mono tabular-nums ${
                          isDone
                            ? 'bg-ok-soft text-ok'
                            : 'bg-accent-soft text-accent'
                        }`}
                        aria-hidden="true"
                      >
                        {isDone ? <CheckCircle2 className="w-4 h-4 text-ok" /> : i + 1}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-h4 font-semibold text-ink leading-snug group-hover:text-accent transition-colors">
                          {topic.title}
                        </span>
                        {topic.hindiTitle ? (
                          <span className="block mt-0.5 text-sm text-hindi hindi-text" lang="hi">
                            {topic.hindiTitle}
                          </span>
                        ) : null}
                        <span className="sr-only">
                          {isDone ? ' — completed' : ` — topic ${i + 1} of ${topics.length}`}
                        </span>
                      </span>

                      <ArrowRight
                        className="w-4 h-4 mt-1 shrink-0 text-ink-4 group-hover:text-accent transition-colors duration-fast"
                        aria-hidden="true"
                      />
                    </CardLink>
                  </li>
                );
              })}
            </ol>
          ) : (
            <EmptyState
              icon={BookOpen}
              title="No topics listed yet"
              description="This chapter has no reading pages in the syllabus index. The long-form notes cover the same ground."
              action={<Button variant="primary" href={notesHref}>Open the full notes</Button>}
            />
          )}
        </section>

        {/* ------------------------------------------------------ what's next */}
        <section aria-labelledby="chapter-next">
          <SectionHeading
            id="chapter-next"
            eyebrow="After the reading"
            title="Practise and revise this chapter"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <CardLink href={`/ccc/mcqs/${chapter.key}`} className="p-5 group">
              <HelpCircle className="w-5 h-5 text-accent mb-3" aria-hidden="true" />
              <span className="block text-h4 font-semibold text-ink group-hover:text-accent transition-colors duration-fast">
                Chapter {chapterNumber} questions
              </span>
              <span className="block mt-1 text-sm text-ink-3">
                Exam-pattern MCQs with explanations.
              </span>
            </CardLink>

            <CardLink href={notesHref} className="p-5 group">
              <FileText className="w-5 h-5 text-accent mb-3" aria-hidden="true" />
              <span className="block text-h4 font-semibold text-ink group-hover:text-accent transition-colors duration-fast">
                Full chapter notes
              </span>
              <span className="block mt-1 text-sm text-ink-3">
                The long-form unit, English and हिन्दी.
              </span>
            </CardLink>

            <CardLink href="/ccc/cheat-sheets" className="p-5 group">
              <ListChecks className="w-5 h-5 text-accent mb-3" aria-hidden="true" />
              <span className="block text-h4 font-semibold text-ink group-hover:text-accent transition-colors duration-fast">
                Cheat sheets
              </span>
              <span className="block mt-1 text-sm text-ink-3">
                LibreOffice shortcuts and quick reference tables.
              </span>
            </CardLink>

            <CardLink href="/ccc/mock-test" className="p-5 group">
              <GraduationCap className="w-5 h-5 text-accent mb-3" aria-hidden="true" />
              <span className="block text-h4 font-semibold text-ink group-hover:text-accent transition-colors duration-fast">
                Full mock test
              </span>
              <span className="block mt-1 text-sm text-ink-3">
                100 questions in 90 minutes, all chapters.
              </span>
            </CardLink>
          </div>
        </section>

        {/* ------------------------------------------------- chapter prev/next */}
        {position.prev || position.next ? (
          <nav aria-label="Chapter navigation" className="pt-8 border-t border-line grid gap-3 sm:grid-cols-2">
            {position.prev ? (
              <CardLink href={position.prev.href} className="p-4">
                <span className="block eyebrow mb-1">Previous chapter</span>
                <span className="block text-base font-medium text-ink leading-snug">
                  {position.prev.title}
                </span>
              </CardLink>
            ) : (
              <span className="hidden sm:block" />
            )}
            {position.next ? (
              <CardLink href={position.next.href} className="p-4 sm:text-right">
                <span className="block eyebrow mb-1">Next chapter</span>
                <span className="block text-base font-medium text-ink leading-snug">
                  {position.next.title}
                </span>
              </CardLink>
            ) : null}
          </nav>
        ) : null}

        <p className="text-sm text-ink-3">
          Looking for the whole course?{' '}
          <Link href="/ccc/syllabus" className="text-accent hover:underline">
            See all nine chapters and the exam blueprint
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
