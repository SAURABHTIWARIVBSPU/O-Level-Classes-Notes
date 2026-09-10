import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search, ChevronRight, Clock, BookOpen } from 'lucide-react';

import { COURSES, getModules, getCourseMeta } from '@/lib/navigation';
import { differencesData } from '@/data/differencesData';
import { oneLinersData } from '@/data/oneLinersData';
import { cheatSheetsData } from '@/data/cheatSheetsData';
import { masterMcqs } from '@/data/mcqsData';
import ContinueLearning from '@/components/learning/ContinueLearning';

export const metadata = {
  title: 'NIELIT O Level & CCC — Notes, Revision and Exam Practice',
  description:
    'Study notes in English and हिन्दी for NIELIT O Level M2-R5.1 (Web Designing & Publishing) and CCC. Topic-by-topic explanations, comparison tables, one-liners, 200+ MCQs and timed mock tests.',
  alternates: { canonical: '/' },
};

const units = getModules('olevel');
const chapters = getModules('ccc');
const meta = getCourseMeta('olevel');
const OLEVEL_TOPICS = units.reduce((n, u) => n + u.topics.length, 0);
const CCC_TOPICS = chapters.reduce((n, u) => n + u.topics.length, 0);

const MCQ_BY_UNIT = new Map();
for (const q of masterMcqs) MCQ_BY_UNIT.set(Number(q.unit), (MCQ_BY_UNIT.get(Number(q.unit)) || 0) + 1);

const QUICK_SEARCHES = [
  'HTML tags', 'CSS box model', 'Internet vs WWW', 'RAM vs ROM', 'JavaScript events',
  'W3.CSS grid', 'LibreOffice shortcuts', 'Digital payments',
];

/* ------------------------------------------------------------ helpers */

function SectionTitle({ id, children, action }) {
  return (
    <div className="flex items-end justify-between gap-4 pb-2.5 mb-4 border-b-2 border-ink">
      <h2 id={id} className="text-h2 font-bold text-ink">{children}</h2>
      {action ? (
        <Link href={action.href} className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline underline-offset-2">
          {action.label}
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}

function TopicList({ module, limit }) {
  const items = limit ? module.topics.slice(0, limit) : module.topics;
  const rest = module.topics.length - items.length;
  return (
    <ul className="space-y-1">
      {items.map((t) => (
        <li key={t.slug}>
          <Link href={t.href} className="group flex items-start gap-2 py-0.5 text-[15px] leading-snug text-ink-2 hover:text-accent">
            <ChevronRight className="w-3.5 h-3.5 mt-1 text-ink-4 group-hover:text-accent shrink-0" aria-hidden="true" />
            <span>{t.title}</span>
          </Link>
        </li>
      ))}
      {rest > 0 ? (
        <li>
          <Link href={module.href} className="inline-block pl-5 py-0.5 text-sm font-semibold text-accent hover:underline underline-offset-2">
            + {rest} more {rest === 1 ? 'topic' : 'topics'}
          </Link>
        </li>
      ) : null}
    </ul>
  );
}

/* --------------------------------------------------------------- page */

export default function HomePage() {
  return (
    <div>
      {/* ------------------------------------------------------ search hero */}
      <section className="hero-band border-b border-line">
        <div className="shell py-10 sm:py-14 text-center">
          <p className="eyebrow text-accent">Free · English + हिन्दी · Updated for the current syllabus</p>
          <h1 className="mt-2 text-h1 sm:text-display font-bold text-ink">
            NIELIT O Level &amp; CCC study notes
          </h1>
          <p className="mt-3 text-base sm:text-lead text-ink-2 max-w-2xl mx-auto">
            {OLEVEL_TOPICS + CCC_TOPICS} topic pages, {masterMcqs.length}+ explained questions, comparison tables,
            one-liners and timed mock tests — written the way a teacher explains, in the language you think in.
          </p>

          <form action="/search" method="get" role="search" className="mt-6 max-w-2xl mx-auto">
            <label htmlFor="home-search" className="sr-only">Search topics</label>
            <div className="flex items-center h-12 sm:h-14 rounded-lg bg-surface border-2 border-line-strong focus-within:border-accent shadow-e1 pl-4 pr-1.5">
              <Search className="w-5 h-5 text-ink-3 shrink-0" aria-hidden="true" />
              <input
                id="home-search"
                name="q"
                type="search"
                placeholder="Search a topic, e.g. CSS box model, MICR, media query…"
                className="flex-1 min-w-0 h-full px-3 bg-transparent text-base text-ink placeholder:text-ink-4 outline-none"
                autoComplete="off"
              />
              <button type="submit" className="btn btn-primary h-9 sm:h-10 px-4">Search</button>
            </div>
          </form>

          <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1.5">
            {QUICK_SEARCHES.map((s) => (
              <li key={s}>
                <Link href={`/search?q=${encodeURIComponent(s)}`} className="text-sm text-ink-3 hover:text-accent underline-offset-2 hover:underline">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="shell py-8 sm:py-10">
        <ContinueLearning className="mb-8" />

        {/* ------------------------------------------------------ courses */}
        <section aria-labelledby="courses" className="mb-12">
          <SectionTitle id="courses">Courses</SectionTitle>
          <div className="divide-y divide-line border-y border-line">
            {Object.values(COURSES).map((course) => {
              const mods = getModules(course.key);
              const topicCount = mods.reduce((n, m) => n + m.topics.length, 0);
              const cm = getCourseMeta(course.key);
              return (
                <div key={course.key} className="py-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ background: `rgb(var(${course.accentVar}))` }} aria-hidden="true" />
                      <Link href={course.home} className="text-h3 font-bold text-ink hover:text-accent">
                        {course.fullName}
                      </Link>
                      <span className="badge badge-neutral badge-mono">{course.module}</span>
                    </div>
                    <p className="mt-1 text-base text-ink-2">{course.description}</p>
                    <p className="mt-1.5 text-sm text-ink-3">
                      {mods.length} {course.unitWordPlural.toLowerCase()} · {topicCount} topics · {cm.durationTotalHours} hours · {course.level}
                    </p>
                  </div>
                  <div className="flex gap-2 sm:flex-col sm:items-stretch">
                    <Link href={mods[0]?.href || course.home} className="btn btn-primary btn-sm">Start {course.unitWord} 1</Link>
                    <Link href={course.key === 'ccc' ? '/ccc/syllabus' : '/syllabus'} className="btn btn-secondary btn-sm">Syllabus</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------------------------------------------- O Level directory */}
        <section aria-labelledby="olevel-topics" className="mb-12">
          <SectionTitle id="olevel-topics" action={{ href: '/syllabus', label: 'Full syllabus & marks' }}>
            O Level M2-R5.1 — all topics
          </SectionTitle>
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {units.map((u) => (
              <div key={u.key} className="min-w-0">
                <h3 className="text-base font-bold text-ink leading-snug">
                  <Link href={u.href} className="hover:text-accent">
                    <span className="font-mono text-xs text-accent mr-1.5">{u.number}</span>
                    {u.title}
                  </Link>
                </h3>
                <p className="mt-0.5 mb-2 text-xs text-ink-3">
                  {u.topics.length} topics · {u.hours}h
                </p>
                <TopicList module={u} limit={6} />
              </div>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------- CCC directory */}
        <section aria-labelledby="ccc-topics" className="mb-12">
          <SectionTitle id="ccc-topics" action={{ href: '/ccc', label: 'CCC home' }}>
            CCC — all chapters
          </SectionTitle>
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {chapters.map((c) => (
              <div key={c.key} className="min-w-0">
                <h3 className="text-base font-bold text-ink leading-snug">
                  <Link href={c.href} className="hover:text-accent">
                    <span className="font-mono text-xs text-ccc mr-1.5">{c.number}</span>
                    {c.title}
                  </Link>
                </h3>
                <p className="mt-0.5 mb-2 text-xs text-ink-3">{c.topics.length} topics · {c.hours}h</p>
                <TopicList module={c} limit={4} />
              </div>
            ))}
          </div>
        </section>

        {/* --------------------------------------------------- revision row */}
        <div className="grid gap-10 lg:grid-cols-12 mb-12">
          {/* Differences */}
          <section aria-labelledby="differences" className="lg:col-span-5">
            <SectionTitle id="differences" action={{ href: '/differences', label: `All ${differencesData.length}` }}>
              Differences the exam asks
            </SectionTitle>
            <ol className="divide-y divide-line">
              {differencesData.slice(0, 8).map((d) => (
                <li key={d.id}>
                  <Link href={`/differences#${d.id}`} className="group flex items-center justify-between gap-3 py-2.5">
                    <span className="min-w-0">
                      <span className="block text-[15px] font-medium text-ink group-hover:text-accent leading-snug">{d.title}</span>
                      <span className="block text-xs text-ink-3">Unit {d.unit} · {d.unitName}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-ink-4 group-hover:text-accent shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          {/* One-liners */}
          <section aria-labelledby="one-liners" className="lg:col-span-7">
            <SectionTitle id="one-liners" action={{ href: '/one-liners', label: `All ${oneLinersData.length}` }}>
              One-liners for the last hour
            </SectionTitle>
            <ol className="space-y-2.5">
              {oneLinersData.slice(0, 6).map((o, i) => (
                <li key={o.id} className="flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded bg-accent-soft text-accent font-mono text-xs font-bold grid place-items-center mt-0.5">{i + 1}</span>
                  <p className="text-[15px] text-ink-2 leading-relaxed hindi-text" lang="hi">
                    {o.text}
                    <span className="ml-2 text-xs text-ink-4 font-sans">Unit {o.unit}</span>
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* -------------------------------------------------------- practice */}
        <section aria-labelledby="practice" className="mb-12">
          <SectionTitle id="practice" action={{ href: '/mcqs', label: 'Question bank' }}>
            Practice sets
          </SectionTitle>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-2xs uppercase tracking-wider text-ink-3 border-b border-line">
                    <th className="py-2 pr-3 font-semibold">Set</th>
                    <th className="py-2 pr-3 font-semibold">Questions</th>
                    <th className="py-2 pr-3 font-semibold">Marks weight</th>
                    <th className="py-2 font-semibold sr-only">Open</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {units.map((u) => (
                    <tr key={u.key} className="group">
                      <td className="py-2.5 pr-3">
                        <Link href={u.mcqHref} className="font-medium text-ink group-hover:text-accent">
                          <span className="font-mono text-xs text-ink-4 mr-1.5">{u.number}</span>
                          {u.title}
                        </Link>
                      </td>
                      <td className="py-2.5 pr-3 tabular-nums text-ink-2">{MCQ_BY_UNIT.get(u.n) || 0}</td>
                      <td className="py-2.5 pr-3 text-ink-3">{u.marks}</td>
                      <td className="py-2.5 text-right">
                        <Link href={u.mcqHref} className="text-sm font-semibold text-accent hover:underline underline-offset-2">Practise</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="lg:col-span-4 space-y-3">
              {[
                { href: '/mock-test', title: 'O Level mock test', desc: `${meta.writtenMarksMax} marks · timed · official pattern` },
                { href: '/ccc/mock-test', title: 'CCC mock test', desc: '100 questions · 90 minutes · no negative marking' },
                { href: '/practical', title: 'Practical lab', desc: 'Exercises for the O Level practical paper' },
                { href: '/playground', title: 'Code playground', desc: 'Run HTML, CSS and JavaScript in the browser' },
              ].map((x) => (
                <Link key={x.href} href={x.href} className="card-link p-4 block">
                  <span className="block text-base font-bold text-ink">{x.title}</span>
                  <span className="block text-sm text-ink-3 mt-0.5">{x.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------- cheat sheets */}
        <section aria-labelledby="cheat-sheets" className="mb-12">
          <SectionTitle id="cheat-sheets" action={{ href: '/cheat-sheets', label: 'All cheat sheets' }}>
            Cheat sheets
          </SectionTitle>
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {cheatSheetsData.map((c) => (
              <li key={c.id}>
                <Link href={`/cheat-sheets#${c.id}`} className="group flex items-start gap-2 py-1">
                  <BookOpen className="w-4 h-4 mt-0.5 text-ink-4 group-hover:text-accent shrink-0" aria-hidden="true" />
                  <span>
                    <span className="block text-[15px] font-medium text-ink group-hover:text-accent leading-snug">{c.title}</span>
                    <span className="block text-xs text-ink-3">{c.category} · Unit {c.unit}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------------------------------------------- blueprint */}
        <section aria-labelledby="blueprint" className="mb-12">
          <SectionTitle id="blueprint" action={{ href: '/syllabus', label: 'Detailed blueprint' }}>
            O Level paper — where the {meta.writtenMarksMax} marks sit
          </SectionTitle>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-2xs uppercase tracking-wider text-ink-3 border-b border-line">
                  <th className="py-2 pr-3 font-semibold">Group</th>
                  <th className="py-2 pr-3 font-semibold">Units</th>
                  <th className="py-2 pr-3 font-semibold w-40">Weight</th>
                  <th className="py-2 font-semibold text-right">Marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {meta.marksDistribution.map((g) => (
                  <tr key={g.id}>
                    <td className="py-2.5 pr-3 font-medium text-ink">{g.groupName}</td>
                    <td className="py-2.5 pr-3 text-ink-3">{g.unitsCovered.join(', ')}</td>
                    <td className="py-2.5 pr-3">
                      <div className="h-2 rounded-full bg-line/70 overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: `${g.marks}%` }} />
                      </div>
                    </td>
                    <td className="py-2.5 text-right font-semibold tabular-nums text-ink">{g.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-ink-3 inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            {meta.durationTotalHours} hours in the official syllabus — {meta.theoryHours}h theory, {meta.practicalHours}h practical.
          </p>
        </section>

        {/* ------------------------------------------------------- about */}
        <section aria-labelledby="about" className="max-w-measure-wide">
          <SectionTitle id="about">About these notes</SectionTitle>
          <div className="prose-flow text-base text-ink-2 leading-relaxed">
            <p>
              Every topic page follows the same order: the definition you would write in the exam, the idea in plain
              Hindi, the detail, one small example, the mistakes students actually make, and how the paper asks it.
              Read a topic, mark it done, answer its questions, move on.
            </p>
            <p>
              Nothing needs an account. Completed topics, bookmarks, notes and test scores are saved in your own
              browser. Switch the reading language from the header — English only, हिन्दी only, or both.
            </p>
            <p>
              The notes follow the NIELIT O Level (IT) Module M2-R5.1 syllabus, revision 5.1, and the current CCC
              syllabus. Always confirm the live syllabus and exam pattern on the official NIELIT website.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
