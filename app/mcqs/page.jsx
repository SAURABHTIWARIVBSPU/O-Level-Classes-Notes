import React from 'react';
import { ArrowRight, GraduationCap, Layers, ListChecks, Timer } from 'lucide-react';

import {
  Badge,
  Breadcrumbs,
  Button,
  CardLink,
  EmptyState,
  MetaItem,
  PageHeader,
  Panel,
  SectionHeading,
  IconTile,
  ModuleIcon,
} from '@/components/ui';
import { moduleVisual } from '@/lib/navigation';
import { LastScore } from '@/components/mcq/QuizCard';
import { masterMcqs } from '@/data/mcqsData';
import { unitsData } from '@/data/syllabusData';

export const metadata = {
  title: 'MCQ practice — O Level M2-R5.1',
  description:
    'Practise all 200 NIELIT O Level M2-R5.1 multiple-choice questions unit by unit, with the correct answer and a bilingual explanation after every question.',
};

export default function McqsHubPage() {
  const counts = new Map();
  masterMcqs.forEach((q) => {
    const key = Number(q.unit);
    counts.set(key, (counts.get(key) || 0) + 1);
  });

  const units = unitsData.map((u) => {
    const number = Number(u.unitNumber);
    return {
      slug: u.slug,
      number,
      label: u.unitNumber,
      title: u.title,
      hindiTitle: u.hindiTitle,
      count: counts.get(number) || 0,
    };
  });

  const total = masterMcqs.length;
  const covered = units.filter((u) => u.count > 0).length;

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs items={[{ label: 'MCQ practice' }]} className="mb-5" />

      <PageHeader
        icon={ListChecks}
        tone="amber"
        eyebrow="O Level · Module M2-R5.1"
        title="MCQ practice"
        hindiTitle="बहुविकल्पीय प्रश्न अभ्यास"
        description="Pick a unit and work through it one question at a time. Every answer is followed by the correct option and the reason behind it — nothing is timed, and nothing is lost if you get it wrong."
        actions={
          <>
            <Button href="/mock-test" variant="primary">
              <Timer className="w-4 h-4" aria-hidden="true" />
              Take the mock test
            </Button>
            <Button href="/mcqs/all" variant="secondary">
              <ListChecks className="w-4 h-4" aria-hidden="true" />
              All questions
            </Button>
          </>
        }
        meta={
          <>
            <MetaItem>
              <ListChecks className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {total} questions
            </MetaItem>
            <MetaItem>
              <Layers className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {covered} of {units.length} units covered
            </MetaItem>
            <MetaItem>
              <GraduationCap className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              Answer and explanation after every question
            </MetaItem>
          </>
        }
      />

      <div className="space-y-12">
        <section aria-labelledby="by-unit">
          <SectionHeading
            id="by-unit"
            eyebrow="Question bank"
            title="Practise by unit"
            description="Start with the unit you studied last. Your most recent result for each unit is shown on its card."
          />

          {total === 0 ? (
            <EmptyState
              title="The question bank is empty"
              description="No practice questions have been added yet. The unit notes are still the fastest way to revise."
              action={<Button href="/units/unit-1" variant="secondary">Open the unit notes</Button>}
            />
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {units.map((unit) => {
                const body = (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <IconTile tone={moduleVisual('olevel', unit.number).tone} icon={<ModuleIcon name={moduleVisual('olevel', unit.number).icon} />} />
                      {unit.count > 0 ? (
                        <Badge tone="neutral" className="tabular-nums">{unit.count} questions</Badge>
                      ) : (
                        <Badge tone="neutral">Coming soon</Badge>
                      )}
                    </div>
                    <p className="mt-4 eyebrow text-accent">Unit {unit.label}</p>
                    <h3 className="mt-1 text-h4 font-semibold text-ink">{unit.title}</h3>
                    {unit.hindiTitle ? (
                      <p className="mt-0.5 text-sm text-hindi hindi-text" lang="hi">{unit.hindiTitle}</p>
                    ) : null}
                    <div className="mt-4 flex items-center justify-between gap-2 min-h-[1.5rem]">
                      <LastScore quizId={`mcq-unit-${unit.number}`} />
                      {unit.count > 0 ? (
                        <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-accent">
                          Practise
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                      ) : (
                        <span className="ml-auto text-sm text-ink-3">No questions yet</span>
                      )}
                    </div>
                  </>
                );

                return (
                  <li key={unit.slug}>
                    {unit.count > 0 ? (
                      <CardLink href={`/mcqs/${unit.slug}`} className="h-full p-5">{body}</CardLink>
                    ) : (
                      <Panel className="h-full p-5">{body}</Panel>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <section aria-labelledby="whole-syllabus">
          <SectionHeading
            id="whole-syllabus"
            eyebrow="Across all units"
            title="When you are ready for the whole paper"
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li>
              <CardLink href="/mcqs/all" className="h-full p-5">
                <ListChecks className="w-5 h-5 text-accent" aria-hidden="true" />
                <h3 className="mt-3 text-h4 font-semibold text-ink">All {total} questions</h3>
                <p className="mt-1.5 text-base text-ink-2 leading-relaxed">
                  The full bank in one place, with search and filters by unit and difficulty. Untimed.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Open the full bank
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </CardLink>
            </li>
            <li>
              <CardLink href="/mock-test" className="h-full p-5">
                <Timer className="w-5 h-5 text-accent" aria-hidden="true" />
                <h3 className="mt-3 text-h4 font-semibold text-ink">Mock test</h3>
                <p className="mt-1.5 text-base text-ink-2 leading-relaxed">
                  A timed paper on the official blueprint: 100 questions in 90 minutes, 1 mark each, no negative
                  marking.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Read the brief and start
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </CardLink>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
