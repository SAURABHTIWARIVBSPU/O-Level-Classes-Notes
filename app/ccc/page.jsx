import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Clock } from 'lucide-react';

import { COURSES, getCourseMeta, getModules, moduleVisual } from '@/lib/navigation';
import { CourseCard } from '@/components/ui';
import { cccDifferencesData } from '@/data/cccDifferencesData';
import { cccOneLinersData } from '@/data/cccOneLinersData';
import { cccMcqsData } from '@/data/cccMcqsData';

export const metadata = {
  title: 'CCC — Course on Computer Concepts',
  description:
    'Start computers from zero. The NIELIT CCC course in nine chapters — bilingual notes in English and हिन्दी, chapter questions, and a 100-question mock test. No prior experience needed.',
};

function SectionTitle({ id, children, action }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-6">
      <h2 id={id} className="text-h2 font-semibold text-ink">{children}</h2>
      {action ? (
        <Link href={action.href} className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline underline-offset-2">
          {action.label}
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}

export default function CCCLandingPage() {
  const course = COURSES.ccc;
  const meta = getCourseMeta('ccc');
  const chapters = getModules('ccc');
  const topicCount = chapters.reduce((sum, c) => sum + (c.topics ? c.topics.length : 0), 0);

  const mcqByChapter = new Map();
  for (const q of cccMcqsData || []) {
    mcqByChapter.set(q.chapterSlug, (mcqByChapter.get(q.chapterSlug) || 0) + 1);
  }

  return (
    <div>
      {/* ------------------------------------------------------------- hero */}
      <section className="border-b border-line">
        <div className="shell shell-wide py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 min-w-0">
            <p className="eyebrow text-ccc">{course.module} · {course.level} · Free</p>
            <h1 className="mt-2 text-display font-semibold text-ink">Course on Computer Concepts (CCC)</h1>
            <p className="mt-1 text-lead text-hindi hindi-text" lang="hi">{meta.hindiCourseName}</p>
            <p className="mt-3 text-base sm:text-lead text-ink-2 max-w-measure-wide">
              CCC is the starting course. If you have never used a computer for more than WhatsApp, this is written
              for you — nine short chapters in English and हिन्दी, chapter-wise questions, and a mock test on the real
              pattern: 100 questions, 90 minutes, pass at 50%.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/ccc/chapters/chapter-1" className="btn btn-primary">Start Chapter 1</Link>
              <Link href="/ccc/mock-test" className="btn btn-secondary">Take the mock test</Link>
              <Link href="/ccc/syllabus" className="btn btn-ghost">Syllabus</Link>
            </div>
            <p className="mt-4 text-sm text-ink-3">
              {chapters.length} chapters · {topicCount} topics · {meta.durationTotalHours} hours · no entry requirement
            </p>
          </div>

          <div className="lg:col-span-5 min-w-0">
            <div className="panel overflow-hidden border border-line shadow-e3 bg-surface group">
              <div className="px-5 py-3 border-b border-line bg-surface flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="text-xs font-semibold text-ink">CCC Computer Concepts & Digital Literacy</span>
                </div>
                <span className="text-2xs font-semibold px-2 py-0.5 rounded bg-accent-soft text-accent">9 Chapters</span>
              </div>
              <div className="relative aspect-[4/3] bg-sunken overflow-hidden">
                <img
                  src="/images/hero-ccc-concepts.jpg"
                  alt="CCC Course on Computer Concepts curriculum visual"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-ink/5" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-surface/95 border border-line text-ink shadow-e1">
                    Official Exam Pattern
                  </span>
                  <Link
                    href="/ccc/mock-test"
                    className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md bg-accent text-accent-ink hover:bg-accent-hover transition-colors shadow-e1"
                  >
                    100 Qs Mock Test →
                  </Link>
                </div>
              </div>
              <div className="p-4 bg-surface border-t border-line">
                <div className="flex items-center justify-between text-xs text-ink-2">
                  <span className="font-medium">Word · Calc · Impress · Cyber Safety</span>
                  <span className="text-ink-3">Pass at 50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="shell shell-wide py-12">
        {/* ------------------------------------------------------ chapters */}
        <section aria-labelledby="chapters" className="mb-12">
          <SectionTitle id="chapters" action={{ href: '/ccc/notes', label: 'Full chapter notes' }}>
            All {chapters.length} chapters, every topic
          </SectionTitle>
          <div className="grid grid-cols-12 gap-5">
            {chapters.map((c) => (
              <div key={c.key} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <CourseCard
                  href={c.href}
                  eyebrow={`Chapter ${c.n}`}
                  title={c.title}
                  hindiTitle={c.hindiTitle}
                  description={c.description}
                  topics={c.topics.length}
                  hours={c.hours}
                  icon={moduleVisual('ccc', c.number).icon}
                  badge={c.marks}
                  cta="Start chapter"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------- revision row */}
        <div className="grid gap-10 lg:grid-cols-12 mb-12">
          <section aria-labelledby="ccc-differences" className="lg:col-span-5">
            <SectionTitle id="ccc-differences" action={{ href: '/ccc/differences', label: `All ${cccDifferencesData.length}` }}>
              Differences the exam asks
            </SectionTitle>
            <ol className="divide-y divide-line">
              {cccDifferencesData.slice(0, 8).map((d) => (
                <li key={d.id}>
                  <Link href={`/ccc/differences#${d.id}`} className="group flex items-center justify-between gap-3 py-2.5">
                    <span className="text-base font-medium text-ink group-hover:text-accent leading-snug">{d.englishTitle || d.title}</span>
                    <ChevronRight className="w-4 h-4 text-ink-4 group-hover:text-accent shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="ccc-one-liners" className="lg:col-span-7">
            <SectionTitle id="ccc-one-liners" action={{ href: '/ccc/one-liners', label: `All ${cccOneLinersData.length}` }}>
              One-liners for the last hour
            </SectionTitle>
            <ol className="space-y-2.5">
              {cccOneLinersData.slice(0, 6).map((o, i) => (
                <li key={o.id} className="flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded bg-accent-soft text-accent font-mono text-xs font-semibold grid place-items-center mt-0.5">{i + 1}</span>
                  <p className="text-base text-ink-2 leading-relaxed hindi-text" lang="hi">
                    {o.fact}
                    {o.category ? <span className="ml-2 text-xs text-ink-4 font-sans">{o.category}</span> : null}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* -------------------------------------------------------- practice */}
        <section aria-labelledby="ccc-practice" className="mb-12">
          <SectionTitle id="ccc-practice" action={{ href: '/ccc/mcqs', label: 'Question bank' }}>
            Practice sets
          </SectionTitle>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-2xs uppercase tracking-wider text-ink-3 border-b border-line">
                    <th className="py-2 pr-3 font-semibold">Chapter</th>
                    <th className="py-2 pr-3 font-semibold">Questions</th>
                    <th className="py-2 pr-3 font-semibold">Weight</th>
                    <th className="py-2 font-semibold sr-only">Open</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {chapters.map((c) => (
                    <tr key={c.key} className="group">
                      <td className="py-2.5 pr-3">
                        <Link href={c.mcqHref} className="font-medium text-ink group-hover:text-accent">
                          <span className="font-mono text-xs text-ink-4 mr-1.5">{c.number}</span>
                          {c.title}
                        </Link>
                      </td>
                      <td className="py-2.5 pr-3 tabular-nums text-ink-2">{mcqByChapter.get(c.key) || '—'}</td>
                      <td className="py-2.5 pr-3 text-ink-3">{c.marks || '—'}</td>
                      <td className="py-2.5 text-right">
                        <Link href={c.mcqHref} className="text-sm font-semibold text-accent hover:underline underline-offset-2">Practise</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="lg:col-span-4 space-y-3">
              <Link href="/ccc/mock-test" className="card-link p-4 block">
                <span className="block text-base font-semibold text-ink">CCC mock test</span>
                <span className="block text-sm text-ink-3 mt-0.5">100 questions · 90 minutes · no negative marking</span>
              </Link>
              <Link href="/ccc/cheat-sheets" className="card-link p-4 block">
                <span className="block text-base font-semibold text-ink">Cheat sheets</span>
                <span className="block text-sm text-ink-3 mt-0.5">LibreOffice shortcuts and quick tables</span>
              </Link>
              <Link href="/ccc/notes" className="card-link p-4 block">
                <span className="block text-base font-semibold text-ink">Full chapter notes</span>
                <span className="block text-sm text-ink-3 mt-0.5">Long-form reader, English and हिन्दी</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------- the exam */}
        <section aria-labelledby="exam-facts" className="mb-12">
          <SectionTitle id="exam-facts">About the CCC exam</SectionTitle>
          <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 max-w-measure-wide text-base">
            <div>
              <dt className="font-semibold text-ink">Pattern</dt>
              <dd className="mt-1 text-ink-2 leading-relaxed">{meta.examPattern}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Passing</dt>
              <dd className="mt-1 text-ink-2 leading-relaxed">{meta.passingCriteria}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Who it is for</dt>
              <dd className="mt-1 text-ink-2 leading-relaxed">{meta.eligibility}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Practical software</dt>
              <dd className="mt-1 text-ink-2 leading-relaxed">{meta.practicalEnvironment}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Jobs it maps to</dt>
              <dd className="mt-1 text-ink-2 leading-relaxed">{meta.jobRoles.join(' · ')}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Certificate</dt>
              <dd className="mt-1 text-ink-2 leading-relaxed">{meta.courseName}, {meta.courseCode}. {meta.organization} · {meta.revision}, in force from {meta.implementationDate}.</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-ink-3 inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            {meta.durationTotalHours} hours — {meta.theoryHours}h theory, {meta.practicalHours}h practical.
          </p>
        </section>
      </div>
    </div>
  );
}
