import React from 'react';
import { notFound } from 'next/navigation';
import { BookOpen, Layers, ListChecks, Timer } from 'lucide-react';

import { Breadcrumbs, Button, MetaItem, PageHeader } from '@/components/ui';
import { PracticeDeck } from '@/components/mcq/QuizCard';
import { masterMcqs } from '@/data/mcqsData';
import { unitsData } from '@/data/syllabusData';

const ALL = 'all';

export function generateStaticParams() {
  return [{ unitSlug: ALL }, ...unitsData.map((u) => ({ unitSlug: u.slug }))];
}

function resolveUnit(unitSlug) {
  if (unitSlug === ALL) return { slug: ALL, isAll: true };
  const unit = unitsData.find((u) => u.slug === unitSlug);
  if (!unit) return null;
  return {
    slug: unit.slug,
    isAll: false,
    number: Number(unit.unitNumber),
    label: unit.unitNumber,
    title: unit.title,
    hindiTitle: unit.hindiTitle,
  };
}

/* The unit number in syllabusData is a string ("01") and on a question it is a
   number (1) — comparing them without Number() is why this page used to show
   nothing at all. */
function questionsFor(unit) {
  if (!unit) return [];
  if (unit.isAll) return masterMcqs;
  return masterMcqs.filter((q) => Number(q.unit) === unit.number);
}

export async function generateMetadata({ params }) {
  const { unitSlug } = await Promise.resolve(params);
  const unit = resolveUnit(decodeURIComponent(unitSlug || ''));

  if (!unit) return { title: 'Unit not found' };

  if (unit.isAll) {
    return {
      title: `All ${masterMcqs.length} MCQs — O Level M2-R5.1`,
      description: `Search and practise the complete bank of ${masterMcqs.length} NIELIT O Level M2-R5.1 multiple-choice questions, filtered by unit and difficulty, with an explanation after every answer.`,
    };
  }

  const count = questionsFor(unit).length;
  return {
    title: `Unit ${unit.label} MCQs — ${unit.title}`,
    description: `${count} practice questions on ${unit.title} for NIELIT O Level M2-R5.1, each with the correct answer and the reasoning behind it.`,
  };
}

export default async function UnitMcqsPage({ params }) {
  const { unitSlug } = await Promise.resolve(params);
  const unit = resolveUnit(decodeURIComponent(unitSlug || ''));

  if (!unit) notFound();

  const questions = questionsFor(unit);
  const timedMinutes = Math.max(5, Math.round(questions.length * 0.9));

  const groups = unitsData.map((u) => ({
    value: String(Number(u.unitNumber)),
    label: `Unit ${u.unitNumber} — ${u.title}`,
  }));

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs
        items={[
          { label: 'MCQ practice', href: '/mcqs' },
          { label: unit.isAll ? 'All questions' : `Unit ${unit.label}` },
        ]}
        className="mb-5"
      />

      <PageHeader
        eyebrow={unit.isAll ? 'O Level · Whole syllabus' : `O Level · Unit ${unit.label}`}
        title={unit.isAll ? `All ${questions.length} questions` : `${unit.title} — MCQs`}
        hindiTitle={unit.isAll ? undefined : unit.hindiTitle}
        description={
          unit.isAll
            ? 'The complete question bank. Narrow it down by unit, by difficulty, or by a word in the question, then work through what is left one question at a time.'
            : 'Answer, read why the answer is right, move on. Nothing here is timed — the timed version of this unit is one tap away.'
        }
        actions={
          <>
            <Button href="/mcqs" variant="secondary">
              <Layers className="w-4 h-4" aria-hidden="true" />
              All units
            </Button>
            <Button href="/mock-test" variant="ghost">
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
            {questions.length > 0 && !unit.isAll ? (
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
        quizId={unit.isAll ? 'mcq-all' : `mcq-unit-${unit.number}`}
        groupLabel="Unit"
        groups={unit.isAll ? groups : []}
        showFilters={unit.isAll}
        emptyTitle={unit.isAll ? 'The question bank is empty' : `No questions for Unit ${unit.label} yet`}
        emptyDescription="There are no practice questions here yet. The notes for this unit are the next best thing."
        emptyAction={
          <>
            <Button href={`/units/${unit.isAll ? 'unit-1' : unit.slug}`} variant="primary">
              Read the notes
            </Button>
            <Button href="/mcqs" variant="secondary">Pick another unit</Button>
          </>
        }
        timed={
          unit.isAll || !questions.length
            ? null
            : {
                label: 'Timed test',
                examTitle: `Unit ${unit.label} timed test — ${unit.title}`,
                durationMinutes: timedMinutes,
                quizId: `mcq-unit-${unit.number}`,
                intro: `All ${questions.length} questions from Unit ${unit.label}, under the same rules as the real paper.`,
              }
        }
      />
    </div>
  );
}
