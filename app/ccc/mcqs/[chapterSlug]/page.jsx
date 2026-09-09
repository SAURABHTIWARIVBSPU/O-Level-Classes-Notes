import React from 'react';
import { notFound } from 'next/navigation';
import { BookOpen, Layers, ListChecks, Timer } from 'lucide-react';

import { Breadcrumbs, Button, MetaItem, PageHeader } from '@/components/ui';
import { PracticeDeck } from '@/components/mcq/QuizCard';
import { cccChaptersData } from '@/data/cccSyllabusData';
import { cccMcqsData } from '@/data/cccMcqsData';

const ALL = 'all';

export function generateStaticParams() {
  return [{ chapterSlug: ALL }, ...cccChaptersData.map((c) => ({ chapterSlug: c.slug }))];
}

function resolveChapter(chapterSlug) {
  if (chapterSlug === ALL) return { slug: ALL, isAll: true };
  const chapter = cccChaptersData.find((c) => c.slug === chapterSlug);
  if (!chapter) return null;
  return {
    slug: chapter.slug,
    isAll: false,
    label: chapter.chapterNumber,
    title: chapter.title,
    hindiTitle: chapter.hindiTitle,
  };
}

function questionsFor(chapter) {
  if (!chapter) return [];
  if (chapter.isAll) return cccMcqsData;
  return cccMcqsData.filter((q) => q.chapterSlug === chapter.slug);
}

export async function generateMetadata({ params }) {
  const { chapterSlug } = await Promise.resolve(params);
  const chapter = resolveChapter(decodeURIComponent(chapterSlug || ''));

  if (!chapter) return { title: 'Chapter not found' };

  if (chapter.isAll) {
    return {
      title: `All ${cccMcqsData.length} MCQs — CCC`,
      description:
        'Search and practise every NIELIT CCC multiple-choice question across all nine chapters, in Hindi and English, with an explanation after each answer.',
    };
  }

  const count = questionsFor(chapter).length;
  return {
    title: `Chapter ${chapter.label} MCQs — ${chapter.title}`,
    description: `${count} NIELIT CCC practice questions on ${chapter.title}, in Hindi and English, each with the correct answer and a short explanation.`,
  };
}

export default async function CccChapterMcqsPage({ params }) {
  const { chapterSlug } = await Promise.resolve(params);
  const chapter = resolveChapter(decodeURIComponent(chapterSlug || ''));

  if (!chapter) notFound();

  const questions = questionsFor(chapter);
  const timedMinutes = Math.max(5, Math.round(questions.length * 0.9));

  const groups = cccChaptersData.map((c) => ({
    value: c.slug,
    label: `Chapter ${c.chapterNumber} — ${c.title}`,
  }));

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs
        items={[
          { label: 'CCC', href: '/ccc' },
          { label: 'MCQ practice', href: '/ccc/mcqs' },
          { label: chapter.isAll ? 'All questions' : `Chapter ${chapter.label}` },
        ]}
        className="mb-5"
      />

      <PageHeader
        eyebrow={chapter.isAll ? 'CCC · Whole course' : `CCC · Chapter ${chapter.label}`}
        title={chapter.isAll ? `All ${questions.length} questions` : `${chapter.title} — MCQs`}
        hindiTitle={chapter.isAll ? undefined : chapter.hindiTitle}
        description={
          chapter.isAll
            ? 'Every CCC question in one set. Filter by chapter or search for a word, then work through what is left.'
            : 'Answer, read why the answer is right, move on. Nothing here is timed — switch to the timed version whenever you want to test yourself.'
        }
        actions={
          <>
            <Button href="/ccc/mcqs" variant="secondary">
              <Layers className="w-4 h-4" aria-hidden="true" />
              All chapters
            </Button>
            <Button href="/ccc/mock-test" variant="ghost">
              <Timer className="w-4 h-4" aria-hidden="true" />
              Mock test
            </Button>
          </>
        }
        meta={
          <>
            <MetaItem>
              <ListChecks className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {questions.length} questions
            </MetaItem>
            {questions.length > 0 && !chapter.isAll ? (
              <MetaItem>
                <Timer className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                Timed version: {timedMinutes} minutes
              </MetaItem>
            ) : null}
            <MetaItem>
              <BookOpen className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              Explanation after every answer
            </MetaItem>
          </>
        }
      />

      <PracticeDeck
        questions={questions}
        quizId={chapter.isAll ? 'ccc-mcq-all' : `ccc-mcq-${chapter.slug}`}
        groupLabel="Chapter"
        groups={chapter.isAll ? groups : []}
        showFilters={chapter.isAll}
        emptyTitle={
          chapter.isAll ? 'The question bank is empty' : `No questions for Chapter ${chapter.label} yet`
        }
        emptyDescription="There are no practice questions here yet. The notes for this chapter are the next best thing."
        emptyAction={
          <>
            <Button href={`/ccc/chapters/${chapter.isAll ? 'chapter-1' : chapter.slug}`} variant="primary">
              Read the notes
            </Button>
            <Button href="/ccc/mcqs" variant="secondary">Pick another chapter</Button>
          </>
        }
        timed={
          chapter.isAll || !questions.length
            ? null
            : {
                label: 'Timed test',
                examTitle: `Chapter ${chapter.label} timed test — ${chapter.title}`,
                durationMinutes: timedMinutes,
                quizId: `ccc-mcq-${chapter.slug}`,
                intro: `All ${questions.length} questions from Chapter ${chapter.label}, under exam rules.`,
              }
        }
      />
    </div>
  );
}
