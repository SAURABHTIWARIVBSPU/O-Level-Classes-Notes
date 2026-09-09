import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, GraduationCap, ListChecks, Timer } from 'lucide-react';

import {
  Badge,
  Breadcrumbs,
  Button,
  MetaItem,
  PageHeader,
  ProgressBar,
  ScrollTable,
  SectionHeading,
  StatTile,
} from '@/components/ui';
import { getCourseMeta, getModules } from '@/lib/navigation';

export const metadata = {
  title: 'CCC syllabus and exam blueprint',
  description:
    'The official NIELIT CCC blueprint: all nine chapters with theory hours, practical hours and exam weightage, plus the learning outcomes and topic list for each chapter.',
};

/** "10-12 Marks" → 12. The upper bound is what a chapter can actually cost you. */
function marksCeiling(marks) {
  const numbers = String(marks || '').match(/\d+/g);
  if (!numbers) return 0;
  return Math.max(...numbers.map(Number));
}

const stripLeadingZero = (n) => String(n || '').replace(/^0+/, '') || String(n);

export default function CCCSyllabusPage() {
  const meta = getCourseMeta('ccc');
  const chapters = getModules('ccc');

  const peak = Math.max(1, ...chapters.map((c) => marksCeiling(c.marks)));
  const totals = chapters.reduce(
    (acc, c) => ({
      theory: acc.theory + (c.theoryHours || 0),
      practical: acc.practical + (c.practicalHours || 0),
      hours: acc.hours + (c.hours || 0),
      topics: acc.topics + (c.topics ? c.topics.length : 0),
    }),
    { theory: 0, practical: 0, hours: 0, topics: 0 },
  );

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs className="mb-5" items={[{ label: 'CCC', href: '/ccc' }, { label: 'Syllabus' }]} />

      <PageHeader
        eyebrow={`${meta.revision} · in force from ${meta.implementationDate}`}
        title="CCC syllabus and exam blueprint"
        hindiTitle={meta.hindiCourseName}
        description={meta.purpose}
        actions={
          <>
            <Button variant="primary" href="/ccc/chapters/chapter-1" iconRight={ArrowRight}>
              Start Chapter 1
            </Button>
            <Button variant="secondary" href="/ccc/notes">
              Full notes
            </Button>
          </>
        }
        meta={
          <>
            <MetaItem icon={ListChecks}>
              {chapters.length} chapters · {totals.topics} topics
            </MetaItem>
            <MetaItem icon={Clock}>{meta.durationTotalHours} hours</MetaItem>
            <MetaItem icon={Timer}>90-minute paper</MetaItem>
            <MetaItem icon={GraduationCap}>{meta.organization}</MetaItem>
          </>
        }
      />

      <div className="space-y-12">
        {/* ---------------------------------------------------- the exam itself */}
        <section aria-labelledby="exam-shape">
          <SectionHeading
            id="exam-shape"
            eyebrow="The paper"
            title="What the exam asks for"
            description={meta.examPattern}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <StatTile
              label="Course length"
              value={`${meta.durationTotalHours}h`}
              hint={`${meta.theoryHours}h theory + ${meta.practicalHours}h practical`}
              icon={Clock}
            />
            <StatTile label="Questions" value="100" hint="MCQ and true/false" icon={ListChecks} />
            <StatTile label="Time" value="90 min" hint="No negative marking" icon={Timer} />
            <StatTile label="Pass mark" value="50%" hint="Grade D or higher" icon={GraduationCap} />
          </div>
          <p className="mt-4 text-sm text-ink-3 max-w-measure">
            Practical work is done in {meta.practicalEnvironment}
          </p>
        </section>

        {/* -------------------------------------------------- chapter blueprint */}
        <section aria-labelledby="blueprint">
          <SectionHeading
            id="blueprint"
            eyebrow="Official blueprint"
            title="Hours and weightage, chapter by chapter"
            description="Bar length compares each chapter against the heaviest one, so you can see where the marks actually sit."
          />

          {/* Tablet and up: the real table */}
          <div className="hidden sm:block">
            <ScrollTable>
              <table>
                <caption className="sr-only">
                  NIELIT CCC chapters with theory hours, practical hours, total hours and exam
                  weightage
                </caption>
                <thead>
                  <tr>
                    <th scope="col" className="w-12">
                      No.
                    </th>
                    <th scope="col">Chapter</th>
                    <th scope="col" className="w-16">
                      Theory
                    </th>
                    <th scope="col" className="w-20">
                      Practical
                    </th>
                    <th scope="col" className="w-16">
                      Total
                    </th>
                    <th scope="col" className="w-1/4">
                      Weightage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {chapters.map((chapter) => (
                    <tr key={chapter.key}>
                      <td className="tabular-nums">{stripLeadingZero(chapter.number)}</td>
                      <td>
                        <Link
                          href={chapter.href}
                          className="font-medium text-ink hover:text-accent transition-colors duration-fast"
                        >
                          {chapter.title}
                        </Link>
                        {chapter.hindiTitle ? (
                          <span className="block mt-0.5 text-xs text-hindi hindi-text" lang="hi">
                            {chapter.hindiTitle}
                          </span>
                        ) : null}
                      </td>
                      <td className="tabular-nums">{chapter.theoryHours ?? '—'}h</td>
                      <td className="tabular-nums">{chapter.practicalHours ?? '—'}h</td>
                      <td className="tabular-nums font-medium text-ink">{chapter.hours ?? '—'}h</td>
                      <td>
                        <ProgressBar
                          value={(marksCeiling(chapter.marks) / peak) * 100}
                          label={chapter.marks}
                          showValue={false}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-sunken">
                    <th
                      scope="row"
                      colSpan={2}
                      className="px-3.5 py-2.5 border-t border-line text-left text-sm font-semibold text-ink"
                    >
                      Whole course · {chapters.length} chapters
                    </th>
                    <td className="px-3.5 py-2.5 border-t border-line text-sm font-medium text-ink tabular-nums">
                      {totals.theory}h
                    </td>
                    <td className="px-3.5 py-2.5 border-t border-line text-sm font-medium text-ink tabular-nums">
                      {totals.practical}h
                    </td>
                    <td className="px-3.5 py-2.5 border-t border-line text-sm font-medium text-ink tabular-nums">
                      {totals.hours}h
                    </td>
                    <td className="px-3.5 py-2.5 border-t border-line text-sm font-medium text-ink">
                      100 marks
                    </td>
                  </tr>
                </tfoot>
              </table>
            </ScrollTable>
          </div>

          {/* 320px: the same rows, stacked — a six-column table is not readable here */}
          <ul className="sm:hidden space-y-2.5">
            {chapters.map((chapter) => (
              <li key={chapter.key} className="panel overflow-hidden">
                <Link href={chapter.href} className="block px-4 py-3 border-b border-line">
                  <span className="eyebrow block mb-1">Chapter {stripLeadingZero(chapter.number)}</span>
                  <span className="block text-h4 font-medium text-ink leading-snug">
                    {chapter.title}
                  </span>
                  {chapter.hindiTitle ? (
                    <span className="block mt-0.5 text-sm text-hindi hindi-text" lang="hi">
                      {chapter.hindiTitle}
                    </span>
                  ) : null}
                </Link>
                <dl className="px-4 py-3 grid grid-cols-3 gap-3">
                  <div>
                    <dt className="eyebrow">Theory</dt>
                    <dd className="text-base text-ink tabular-nums">{chapter.theoryHours ?? '—'}h</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Practical</dt>
                    <dd className="text-base text-ink tabular-nums">
                      {chapter.practicalHours ?? '—'}h
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Total</dt>
                    <dd className="text-base text-ink tabular-nums">{chapter.hours ?? '—'}h</dd>
                  </div>
                </dl>
                <div className="px-4 pb-3">
                  <ProgressBar
                    value={(marksCeiling(chapter.marks) / peak) * 100}
                    label={chapter.marks}
                    showValue={false}
                  />
                </div>
              </li>
            ))}
            <li className="well px-4 py-3 flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-ink">Whole course</span>
              <span className="text-sm text-ink-2 tabular-nums">
                {totals.hours}h · 100 marks
              </span>
            </li>
          </ul>
        </section>

        {/* --------------------------------------------------- learning outcomes */}
        <section aria-labelledby="outcomes">
          <SectionHeading
            id="outcomes"
            eyebrow="Learning outcomes"
            title="What each chapter should leave you able to do"
            description="The outcomes below are the official NIELIT wording. The topic links go straight to the reading pages."
          />

          <div className="divide-y divide-line border-t border-line">
            {chapters.map((chapter) => (
              <article key={chapter.key} className="py-8 first:pt-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="min-w-0">
                    <p className="eyebrow mb-1.5">Chapter {stripLeadingZero(chapter.number)}</p>
                    <h3 className="text-h3 font-semibold text-ink">{chapter.title}</h3>
                    {chapter.hindiTitle ? (
                      <p className="mt-0.5 text-base text-hindi hindi-text" lang="hi">
                        {chapter.hindiTitle}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {chapter.hours ? <Badge tone="neutral">{chapter.hours} hours</Badge> : null}
                    {chapter.marks ? <Badge tone="exam">{chapter.marks}</Badge> : null}
                  </div>
                </div>

                {chapter.objectives && chapter.objectives.length ? (
                  <ul className="space-y-2.5 max-w-measure">
                    {chapter.objectives.map((objective, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-ok" aria-hidden="true" />
                        <span className="text-base text-ink-2 leading-relaxed">{objective}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {chapter.topics && chapter.topics.length ? (
                  <div className="mt-5">
                    <p className="eyebrow mb-2">
                      {chapter.topics.length} {chapter.topics.length === 1 ? 'topic' : 'topics'}
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {chapter.topics.map((topic) => (
                        <li key={topic.slug} className="min-w-0">
                          <Link
                            href={topic.href}
                            className="flex items-center min-h-11 px-3 py-2 rounded-md border border-line bg-surface text-sm text-ink-2 hover:text-ink hover:border-line-strong transition-colors duration-fast"
                          >
                            {topic.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-5">
                  <Button variant="secondary" size="sm" href={chapter.href} iconRight={ArrowRight}>
                    Open Chapter {stripLeadingZero(chapter.number)}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------------ closing */}
        <section aria-labelledby="syllabus-next">
          <h2 id="syllabus-next" className="text-h2 font-semibold text-ink">
            Where to go from here
          </h2>
          <p className="mt-2 text-base text-ink-2 leading-relaxed max-w-measure">
            {meta.eligibility} Everything above is covered by the reading pages, the chapter
            questions and the mock test.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button variant="primary" href="/ccc/chapters/chapter-1" iconRight={ArrowRight}>
              Start Chapter 1
            </Button>
            <Button variant="secondary" href="/ccc/mcqs">
              Chapter questions
            </Button>
            <Button variant="ghost" href="/ccc/mock-test">
              Mock test
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
