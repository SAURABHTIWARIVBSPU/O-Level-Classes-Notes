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
import { cccChaptersData } from '@/data/cccSyllabusData';
import { cccMcqsData } from '@/data/cccMcqsData';

export const metadata = {
  title: 'MCQ practice — CCC',
  description:
    'Chapter-wise NIELIT CCC practice questions in Hindi and English, from computer basics and Ubuntu to LibreOffice, digital payments and cyber safety — each with the answer and the reason behind it.',
};

export default function CccMcqsHubPage() {
  const counts = new Map();
  cccMcqsData.forEach((q) => {
    counts.set(q.chapterSlug, (counts.get(q.chapterSlug) || 0) + 1);
  });

  const chapters = cccChaptersData.map((c) => ({
    slug: c.slug,
    label: c.chapterNumber,
    title: c.title,
    hindiTitle: c.hindiTitle,
    count: counts.get(c.slug) || 0,
  }));

  const total = cccMcqsData.length;
  const covered = chapters.filter((c) => c.count > 0).length;

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs
        items={[{ label: 'CCC', href: '/ccc' }, { label: 'MCQ practice' }]}
        className="mb-5"
      />

      <PageHeader
        icon={ListChecks}
        tone="amber"
        eyebrow="CCC · Course on Computer Concepts"
        title="MCQ practice"
        hindiTitle="बहुविकल्पीय प्रश्न अभ्यास"
        description="Chapter by chapter, in Hindi with the English question alongside. Choose an option and the answer appears straight away, with a short explanation of why it is the answer."
        actions={
          <>
            <Button href="/ccc/mock-test" variant="primary">
              <Timer className="w-4 h-4" aria-hidden="true" />
              Take the mock test
            </Button>
            <Button href="/ccc/mcqs/all" variant="secondary">
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
              {covered} of {chapters.length} chapters covered
            </MetaItem>
            <MetaItem>
              <GraduationCap className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span lang="hi" className="hindi-text">हिन्दी</span>
              <span>+ English on every question</span>
            </MetaItem>
          </>
        }
      />

      <div className="space-y-12">
        <section aria-labelledby="by-chapter">
          <SectionHeading
            id="by-chapter"
            eyebrow="Question bank"
            title="Practise by chapter"
            description="Your most recent result for each chapter is shown on its card."
          />

          {total === 0 ? (
            <EmptyState
              title="The question bank is empty"
              description="No CCC practice questions have been added yet. The chapter notes are still the fastest way to revise."
              action={<Button href="/ccc/chapters/chapter-1" variant="secondary">Open the chapter notes</Button>}
            />
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {chapters.map((chapter) => {
                const body = (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <IconTile tone={moduleVisual('ccc', chapter.label).tone} icon={<ModuleIcon name={moduleVisual('ccc', chapter.label).icon} />} />
                      {chapter.count > 0 ? (
                        <Badge tone="neutral" className="tabular-nums">{chapter.count} questions</Badge>
                      ) : (
                        <Badge tone="neutral">Coming soon</Badge>
                      )}
                    </div>
                    <p className="mt-4 eyebrow text-accent">Chapter {chapter.label}</p>
                    <h3 className="mt-1 text-h4 font-bold text-ink">{chapter.title}</h3>
                    {chapter.hindiTitle ? (
                      <p className="mt-0.5 text-sm text-hindi hindi-text" lang="hi">{chapter.hindiTitle}</p>
                    ) : null}
                    <div className="mt-4 flex items-center justify-between gap-2 min-h-[1.5rem]">
                      <LastScore quizId={`ccc-mcq-${chapter.slug}`} />
                      {chapter.count > 0 ? (
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
                  <li key={chapter.slug}>
                    {chapter.count > 0 ? (
                      <CardLink href={`/ccc/mcqs/${chapter.slug}`} className="h-full p-5">{body}</CardLink>
                    ) : (
                      <Panel className="h-full p-5">{body}</Panel>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <section aria-labelledby="whole-course">
          <SectionHeading
            id="whole-course"
            eyebrow="Across all chapters"
            title="When you are ready for the whole course"
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li>
              <CardLink href="/ccc/mcqs/all" className="h-full p-5">
                <ListChecks className="w-5 h-5 text-accent" aria-hidden="true" />
                <h3 className="mt-3 text-h4 font-bold text-ink">All {total} questions</h3>
                <p className="mt-1.5 text-base text-ink-2 leading-relaxed">
                  Every chapter in one set, with a search box and a chapter filter. Untimed.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Open the full bank
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </CardLink>
            </li>
            <li>
              <CardLink href="/ccc/mock-test" className="h-full p-5">
                <Timer className="w-5 h-5 text-accent" aria-hidden="true" />
                <h3 className="mt-3 text-h4 font-bold text-ink">Mock test</h3>
                <p className="mt-1.5 text-base text-ink-2 leading-relaxed">
                  A timed paper across all nine chapters — one mark per question, no negative marking, qualify at
                  50%.
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
