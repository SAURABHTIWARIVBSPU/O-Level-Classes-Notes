import React from 'react';
import Link from 'next/link';
import { Award, BookOpen, FileText, GraduationCap, Layers, ListChecks, Target } from 'lucide-react';
import {
  Badge,
  Breadcrumbs,
  Button,
  MetaItem,
  PageHeader,
  Panel,
  ScrollTable,
  StatTile,
} from '@/components/ui';
import { getCourseMeta, getModules } from '@/lib/navigation';

export const metadata = {
  title: 'Syllabus and exam blueprint — O Level M2-R5.1',
  description:
    'The official NIELIT O Level M2-R5.1 Web Designing & Publishing syllabus: how the 100 written marks are split across five unit groups, theory and practical hours for all 8 units, and the learning objective behind each one.',
};

/* 44px targets on touch, the standard control height from `sm` up. */
const TOUCH = 'min-h-11 sm:min-h-0';

function unitSlugFromLabel(label = '') {
  const number = String(label).replace(/[^0-9]/g, '');
  return number ? `/units/unit-${number}` : '/syllabus';
}

export default function OLevelSyllabusPage() {
  const meta = getCourseMeta('olevel');
  const modules = getModules('olevel');

  const totalMarks = meta.writtenMarksMax || 100;
  const groups = meta.marksDistribution || [];
  const totalTopics = modules.reduce((count, module) => count + (module.topics?.length || 0), 0);

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs items={[{ label: 'Syllabus & blueprint' }]} className="mb-5" />

      <PageHeader
        eyebrow={`NIELIT O Level · ${meta.moduleCode}`}
        title="Syllabus and exam blueprint"
        hindiTitle={`${meta.hindiModuleName} — पाठ्यक्रम एवं अंक विभाजन`}
        description={meta.purpose}
        actions={
          <>
            <Button variant="primary" href="/notes" className={TOUCH}>
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              Read the notes
            </Button>
            <Button variant="secondary" href="/mock-test" className={TOUCH}>
              <Target className="w-4 h-4" aria-hidden="true" />
              Mock test
            </Button>
          </>
        }
        meta={
          <>
            <MetaItem>
              <GraduationCap className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {meta.moduleName}
            </MetaItem>
            <MetaItem>
              <Layers className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {modules.length} units · {totalTopics} topics
            </MetaItem>
          </>
        }
      />

      {/* ------------------------------------------------------ at a glance */}
      <section aria-labelledby="course-shape" className="mb-12">
        <h2 id="course-shape" className="sr-only">
          Course at a glance
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <StatTile
            label="Total duration"
            value={`${meta.durationTotalHours} h`}
            hint={`${meta.theoryHours}h theory + ${meta.practicalHours}h practical`}
          />
          <StatTile
            label="Written paper"
            value={`${totalMarks} marks`}
            hint="Written theory exam (pass: 50%)"
          />
          <StatTile label="Units" value={modules.length} hint="In syllabus order" />
          <StatTile label="Topics" value={totalTopics} hint="Examinable syllabus points" />
        </div>
      </section>

      {/* --------------------------------------------- marks distribution */}
      <section aria-labelledby="marks-distribution" className="mb-12">
        <h2 id="marks-distribution" className="text-h2 font-semibold text-ink">
          Marks distribution
        </h2>
        <p className="mt-1.5 mb-6 text-base text-ink-2 max-w-measure leading-relaxed">
          Marks are awarded per group of units, not per unit. Each bar below is measured against the
          whole {totalMarks}-mark paper, so the length of a bar is the share of the paper that group
          is worth.
        </p>

        <ol className="space-y-6">
          {groups.map((group, index) => {
            const share = Math.max(0, Math.min(100, (group.marks / totalMarks) * 100));
            return (
              <li key={group.id || index}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-h4 font-medium text-ink">
                    <span className="font-mono text-sm text-ink-4 mr-2">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {group.groupName}
                  </h3>
                  <p className="text-sm text-ink-2 tabular-nums shrink-0">
                    <span className="font-semibold text-ink">{group.marks}</span> of {totalMarks}{' '}
                    marks · {group.percentage}
                  </p>
                </div>

                <div
                  className="mt-2.5 h-2 w-full rounded-full bg-sunken border border-line overflow-hidden"
                  aria-hidden="true"
                >
                  <div className="h-full rounded-full bg-accent" style={{ width: `${share}%` }} />
                </div>

                <div className="mt-2.5 flex flex-wrap gap-2">
                  {(group.unitsCovered || []).map((label) => (
                    <Link
                      key={label}
                      href={unitSlugFromLabel(label)}
                      className={`btn btn-secondary btn-sm ${TOUCH}`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </li>
            );
          })}

          <li className="pt-5 border-t border-line">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-h4 font-semibold text-ink">Total written marks</h3>
              <p className="text-sm text-ink tabular-nums font-semibold shrink-0">
                {totalMarks} of {totalMarks} marks · 100%
              </p>
            </div>
            <div
              className="mt-2.5 h-2 w-full rounded-full bg-sunken border border-line overflow-hidden"
              aria-hidden="true"
            >
              <div className="h-full w-full rounded-full bg-accent" />
            </div>
            <p className="mt-2.5 text-sm text-ink-3">
              All {modules.length} units combined, across {groups.length} mark groups.
            </p>
          </li>
        </ol>
      </section>

      {/* ---------------------------------------------------- exam pattern */}
      <section aria-labelledby="exam-pattern" className="mb-12">
        <h2 id="exam-pattern" className="text-h2 font-semibold text-ink">
          Exam pattern
        </h2>
        <p className="mt-1.5 mb-6 text-base text-ink-2 max-w-measure leading-relaxed">
          What the module is assessed on, and what it is meant to leave you able to do.
        </p>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
          <Panel className="p-5">
            <h3 className="text-h4 font-semibold text-ink">The paper</h3>
            <dl className="mt-4 divide-y divide-line">
              {[
                { term: 'Module', detail: `${meta.moduleName} (${meta.moduleCode})` },
                { term: 'Written paper', detail: `${totalMarks} marks, all 8 units` },
                { term: 'Mark groups', detail: `${groups.length} groups of units` },
                {
                  term: 'Course hours',
                  detail: `${meta.durationTotalHours} hours — ${meta.theoryHours} theory, ${meta.practicalHours} practical`,
                },
              ].map((row) => (
                <div key={row.term} className="flex flex-wrap gap-x-4 gap-y-0.5 py-2.5 first:pt-0">
                  <dt className="text-sm text-ink-3 w-32 shrink-0">{row.term}</dt>
                  <dd className="text-base text-ink flex-1 min-w-0">{row.detail}</dd>
                </div>
              ))}
            </dl>
          </Panel>

          <Panel className="p-5">
            <h3 className="text-h4 font-semibold text-ink">Module objectives</h3>
            <p className="mt-1 text-sm text-ink-3">
              On completing this module a learner should be able to:
            </p>
            <ul className="mt-3 space-y-2">
              {(meta.objectives || []).map((objective, i) => (
                <li key={i} className="flex items-start gap-2.5 text-base text-ink-2">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{objective}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>

      {/* -------------------------------------------------- units and hours */}
      <section aria-labelledby="units-and-hours" className="mb-12">
        <h2 id="units-and-hours" className="text-h2 font-semibold text-ink">
          Units and hours
        </h2>
        <p className="mt-1.5 mb-6 text-base text-ink-2 max-w-measure leading-relaxed">
          The official teaching split for each unit. Practical hours outnumber theory hours across
          the module, which is what the practical exam is built on.
        </p>

        {/* Tablet and up: one table, scrolling inside its own container */}
        <div className="hidden sm:block">
          <ScrollTable>
            <table>
              <caption className="sr-only">
                Theory, practical and total hours for each unit, with its mark group
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="w-14">
                    Unit
                  </th>
                  <th scope="col">Title</th>
                  <th scope="col">Theory</th>
                  <th scope="col">Practical</th>
                  <th scope="col">Total</th>
                  <th scope="col">Mark group</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((module) => (
                  <tr key={module.key}>
                    <td className="font-mono tabular-nums">{module.number}</td>
                    <td>
                      <Link href={module.href} className="text-ink hover:text-accent font-medium">
                        {module.title}
                      </Link>
                      {module.hindiTitle ? (
                        <span className="block text-xs text-hindi hindi-text" lang="hi">
                          {module.hindiTitle}
                        </span>
                      ) : null}
                    </td>
                    <td className="tabular-nums">{module.theoryHours} h</td>
                    <td className="tabular-nums">{module.practicalHours} h</td>
                    <td className="tabular-nums font-medium">{module.hours} h</td>
                    <td>{module.marksGroup}</td>
                  </tr>
                ))}
                <tr>
                  <td />
                  <td className="font-semibold">All units</td>
                  <td className="tabular-nums font-semibold">{meta.theoryHours} h</td>
                  <td className="tabular-nums font-semibold">{meta.practicalHours} h</td>
                  <td className="tabular-nums font-semibold">{meta.durationTotalHours} h</td>
                  <td className="tabular-nums font-semibold">{totalMarks} marks</td>
                </tr>
              </tbody>
            </table>
          </ScrollTable>
        </div>

        {/* 320px: the same numbers, stacked — never a shrunken six-column table */}
        <ul className="sm:hidden space-y-2.5">
          {modules.map((module) => (
            <li key={module.key} className="panel overflow-hidden">
              <div className="px-3.5 py-2.5 bg-sunken border-b border-line">
                <p className="text-sm font-semibold text-ink">
                  <span className="font-mono text-ink-3 mr-2 tabular-nums">{module.number}</span>
                  <Link href={module.href} className="hover:text-accent">
                    {module.title}
                  </Link>
                </p>
                {module.marksGroup ? (
                  <p className="mt-0.5 text-xs text-ink-3">{module.marksGroup}</p>
                ) : null}
              </div>
              <dl className="grid grid-cols-3 divide-x divide-line">
                {[
                  { term: 'Theory', value: module.theoryHours },
                  { term: 'Practical', value: module.practicalHours },
                  { term: 'Total', value: module.hours },
                ].map((cell) => (
                  <div key={cell.term} className="px-3 py-2.5">
                    <dt className="eyebrow">{cell.term}</dt>
                    <dd className="mt-0.5 text-base font-medium text-ink tabular-nums">
                      {cell.value} h
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
          <li className="panel px-3.5 py-3 flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-ink">All units</span>
            <span className="text-sm text-ink-2 tabular-nums">
              {meta.theoryHours}h + {meta.practicalHours}h = {meta.durationTotalHours}h
            </span>
          </li>
        </ul>
      </section>

      {/* ---------------------------------------------------- unit by unit */}
      <section aria-labelledby="unit-detail">
        <h2 id="unit-detail" className="text-h2 font-semibold text-ink">
          Unit by unit
        </h2>
        <p className="mt-1.5 mb-6 text-base text-ink-2 max-w-measure leading-relaxed">
          What each unit expects you to be able to do, and every syllabus topic inside it.
        </p>

        <ol className="space-y-4 sm:space-y-5">
          {modules.map((module) => {
            const topics = module.topics || [];
            return (
              <li key={module.key} className="panel p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="accent" mono>
                    Unit {module.number}
                  </Badge>
                  {module.marksGroup ? <Badge tone="exam">{module.marksGroup}</Badge> : null}
                  <span className="text-xs text-ink-3 tabular-nums ml-auto">
                    {module.hours} h · {topics.length} topics
                  </span>
                </div>

                <h3 className="mt-3 text-h3 font-semibold text-ink leading-snug">
                  <Link
                    href={module.href}
                    className="hover:text-accent transition-colors duration-fast"
                  >
                    {module.title}
                  </Link>
                </h3>
                {module.hindiTitle ? (
                  <p className="mt-1 text-base text-hindi hindi-text" lang="hi">
                    {module.hindiTitle}
                  </p>
                ) : null}
                {module.description ? (
                  <p className="mt-2.5 text-base text-ink-2 leading-relaxed max-w-measure">
                    {module.description}
                  </p>
                ) : null}

                {module.objectives?.length ? (
                  <div className="mt-4">
                    <p className="eyebrow mb-2">Learning objectives</p>
                    <ul className="space-y-1.5">
                      {module.objectives.map((objective, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-base text-ink-2">
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full bg-ok shrink-0"
                            aria-hidden="true"
                          />
                          <span className="leading-relaxed">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {topics.length ? (
                  <details className="mt-4">
                    <summary className="flex items-center text-sm font-medium text-ink-2 hover:text-ink cursor-pointer min-h-11 sm:min-h-0">
                      All {topics.length} topics in this unit
                    </summary>
                    <ol className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                      {topics.map((topic, i) => (
                        <li key={topic.slug} className="flex items-start gap-2">
                          <span className="text-xs font-mono text-ink-4 tabular-nums mt-1 shrink-0">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <Link
                            href={topic.href}
                            className="text-base text-ink-2 hover:text-accent leading-snug"
                          >
                            {topic.title}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </details>
                ) : null}

                <div className="mt-5 pt-4 border-t border-line flex flex-wrap items-center gap-2">
                  <Button variant="secondary" href={module.href} className={TOUCH}>
                    <Layers className="w-4 h-4" aria-hidden="true" />
                    Topic notes
                  </Button>
                  <Button variant="ghost" href={module.notesHref} className={TOUCH}>
                    <FileText className="w-4 h-4" aria-hidden="true" />
                    Full unit notes
                  </Button>
                  <Button variant="ghost" href={module.mcqHref} className={TOUCH}>
                    <ListChecks className="w-4 h-4" aria-hidden="true" />
                    MCQ practice
                  </Button>
                  {module.oneShotHref ? (
                    <Button variant="ghost" href={module.oneShotHref} className={TOUCH}>
                      <Award className="w-4 h-4" aria-hidden="true" />
                      One-shot revision
                    </Button>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
