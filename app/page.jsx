import React from 'react';
import Link from 'next/link';
import {
  ArrowRight, BookOpen, ListChecks, Timer, Zap, Columns3, FileText, Code2,
  Presentation, GraduationCap, Clock, Layers, Languages, Smartphone, ClipboardList,
} from 'lucide-react';

import { COURSES, getModules, getCourseMeta } from '@/lib/navigation';
import { Button, Badge, Panel, SectionHeading, MetaItem } from '@/components/ui';
import ContinueLearning from '@/components/learning/ContinueLearning';

export const metadata = {
  title: 'NIELIT O Level & CCC — Notes, Revision and Exam Practice',
  description:
    'Study notes in English and हिन्दी for NIELIT O Level M2-R5.1 (Web Designing & Publishing) and CCC. Topic-by-topic explanations, comparison tables, one-liners, 200+ MCQs and timed mock tests.',
  alternates: { canonical: '/' },
};

const units = getModules('olevel');
const meta = getCourseMeta('olevel');

/* Marks by unit, derived from the official group distribution — used for the
   weightage bars so the number and the bar can never disagree. */
const GROUP_BY_UNIT = new Map();
for (const g of meta.marksDistribution) {
  for (const u of g.unitsCovered) GROUP_BY_UNIT.set(u.replace('Unit ', ''), g);
}

const STUDY_METHOD = [
  {
    title: 'Read the topic',
    body: 'Each concept opens with a one-line definition, then the same idea in plain Hindi, then the detail — so you can stop as soon as it clicks.',
    href: '/units/unit-1',
    cta: 'Open Unit 01',
  },
  {
    title: 'Practise it',
    body: 'Run the example in the browser, do the practice task, then answer the unit questions while the concept is still fresh.',
    href: '/mcqs',
    cta: 'Go to questions',
  },
  {
    title: 'Revise fast',
    body: 'Before the exam, work through the one-liners, comparison tables and cheat sheets instead of re-reading whole units.',
    href: '/one-liners',
    cta: 'Open one-liners',
  },
];

const TOOLS = [
  { icon: ListChecks, label: 'MCQ practice', desc: '200+ questions, every answer explained', href: '/mcqs' },
  { icon: Timer, label: 'Mock test', desc: 'Timed paper on the real exam pattern', href: '/mock-test' },
  { icon: Zap, label: 'One-liners', desc: 'High-yield facts for the last hour', href: '/one-liners' },
  { icon: Columns3, label: 'Differences', desc: 'Side-by-side comparison tables', href: '/differences' },
  { icon: FileText, label: 'Cheat sheets', desc: 'Tags, properties and shortcuts', href: '/cheat-sheets' },
  { icon: Code2, label: 'Playground', desc: 'Write and run HTML, CSS and JavaScript', href: '/playground' },
  { icon: ClipboardList, label: 'Practical lab', desc: 'Exercises for the practical exam', href: '/practical' },
  { icon: Presentation, label: 'Smartboard', desc: 'Diagrams for teaching and revision', href: '/classroom' },
];

const FAQ = [
  {
    q: 'Which syllabus do these notes follow?',
    a: 'The NIELIT O Level (IT) Module M2-R5.1 syllabus — Web Designing and Publishing, revision 5.1 — and the current CCC syllabus. Each unit page shows the official section number it maps to. Always confirm the live syllabus on the NIELIT website before your exam.',
  },
  {
    q: 'Are the notes in Hindi or English?',
    a: 'Both. Definitions and technical terms are given in English, and the explanation is in simple Hindi. You can switch to English-only or Hindi-only from the language control in the header, and every page remembers your choice.',
  },
  {
    q: 'What is the difference between O Level and CCC?',
    a: 'CCC is a beginner digital-literacy certificate — computer basics, the internet, office software, digital payments and cyber safety. O Level is a longer, deeper IT qualification; the module covered here teaches you to actually build web pages with HTML, CSS, JavaScript and AngularJS.',
  },
  {
    q: 'Is my progress saved?',
    a: 'Yes, in your own browser. Completed topics, bookmarks, notes and test scores stay on the device you studied on — there is no account and nothing is uploaded. Clearing your browser data clears your progress.',
  },
  {
    q: 'Does it work on a phone?',
    a: 'Yes. Every page — notes, comparison tables, code examples and the timed mock test — is designed for a small screen first, because most revision happens on a phone.',
  },
];

export default function HomePage() {
  return (
    <div className="shell py-10 sm:py-14">

      {/* ==================================================== 1. HERO ===== */}
      <section className="max-w-measure-wide">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <Badge tone="accent" mono>NIELIT O LEVEL · M2-R5.1</Badge>
          <Badge tone="neutral" mono>CCC</Badge>
        </div>

        <h1 className="text-display sm:text-display-lg font-semibold text-ink">
          Notes that explain it once,<br className="hidden sm:block" /> properly.
        </h1>

        <p className="mt-5 text-lead text-ink-2 leading-relaxed max-w-measure">
          Every topic in the NIELIT <strong className="font-semibold text-ink">O&nbsp;Level M2-R5.1</strong> and{' '}
          <strong className="font-semibold text-ink">CCC</strong> syllabi — written in English and simple
          Hindi, structured the way you actually study: definition first, then the idea in plain words,
          then the detail, then what the examiner asks.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg" href="/units/unit-1" iconRight={ArrowRight}>
            Start with Unit 01
          </Button>
          <Button variant="secondary" size="lg" href="/syllabus" icon={Layers}>
            See the full syllabus
          </Button>
        </div>

        <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5">
          <li><MetaItem icon={Languages}>English + हिन्दी on every page</MetaItem></li>
          <li><MetaItem icon={BookOpen}>{units.reduce((n, u) => n + u.topics.length, 0)} O Level topics</MetaItem></li>
          <li><MetaItem icon={ListChecks}>200+ explained questions</MetaItem></li>
          <li><MetaItem icon={Smartphone}>Built for phone revision</MetaItem></li>
        </ul>
      </section>

      <ContinueLearning className="mt-10" />

      {/* ============================================ 2. COURSE CHOICE ==== */}
      <section className="mt-16" aria-labelledby="courses">
        <SectionHeading
          id="courses"
          eyebrow="Choose your course"
          title="Two certificates, two ways of teaching them"
          description="They need different things from a study resource, so they are written differently."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {Object.values(COURSES).map((course) => {
            const mods = getModules(course.key);
            const topicCount = mods.reduce((n, m) => n + m.topics.length, 0);
            const courseMeta = getCourseMeta(course.key);

            return (
              <Link
                key={course.key}
                href={course.home}
                className="card-link group p-5 sm:p-6 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: `rgb(var(${course.accentVar}))` }}
                        aria-hidden="true"
                      />
                      <span className="eyebrow">{course.module}</span>
                    </div>
                    <h3 className="text-h3 font-semibold text-ink group-hover:text-accent transition-colors">
                      {course.fullName}
                    </h3>
                    <p className="mt-0.5 text-base text-ink-3">{course.subject}</p>
                  </div>
                  <Badge tone={course.key === 'ccc' ? 'ok' : 'accent'}>{course.level}</Badge>
                </div>

                <p className="mt-4 text-base text-ink-2 leading-relaxed flex-1">
                  {course.description}
                </p>

                <dl className="mt-5 pt-4 border-t border-line grid grid-cols-3 gap-3">
                  <div>
                    <dt className="eyebrow">{course.unitWordPlural}</dt>
                    <dd className="mt-0.5 text-h4 font-semibold text-ink tabular-nums">{mods.length}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Topics</dt>
                    <dd className="mt-0.5 text-h4 font-semibold text-ink tabular-nums">{topicCount}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Hours</dt>
                    <dd className="mt-0.5 text-h4 font-semibold text-ink tabular-nums">
                      {courseMeta.durationTotalHours || mods.reduce((n, m) => n + (m.hours || 0), 0)}
                    </dd>
                  </div>
                </dl>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Open {course.name}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ============================================ 3. UNIT DIRECTORY ==== */}
      <section className="mt-16" aria-labelledby="units">
        <SectionHeading
          id="units"
          eyebrow={`O Level · ${meta.moduleCode}`}
          title="All 8 units"
          description={`${meta.durationTotalHours} hours of syllabus — ${meta.theoryHours} theory, ${meta.practicalHours} practical — mapped topic by topic.`}
          action={<Button href="/syllabus" size="sm" iconRight={ArrowRight}>Marks blueprint</Button>}
        />

        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {units.map((unit) => {
            const group = GROUP_BY_UNIT.get(unit.number.replace(/^0/, '')) || GROUP_BY_UNIT.get(unit.number);
            return (
              <li key={unit.key}>
                <Link href={unit.href} className="card-link group h-full p-4 flex flex-col">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-2xs text-ink-4">UNIT {unit.number}</span>
                    {group ? <Badge tone="exam" mono>{group.marks}M</Badge> : null}
                  </div>

                  <h3 className="mt-2.5 text-h4 font-semibold text-ink leading-snug group-hover:text-accent transition-colors">
                    {unit.title}
                  </h3>
                  <p className="mt-1 text-sm text-hindi hindi-text" lang="hi">{unit.hindiTitle}</p>

                  <div className="mt-auto pt-4 flex items-center gap-4">
                    <MetaItem icon={BookOpen}>{unit.topics.length} topics</MetaItem>
                    <MetaItem icon={Clock}>{unit.hours}h</MetaItem>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ============================================== 4. HOW TO STUDY ==== */}
      <section className="mt-16" aria-labelledby="method">
        <SectionHeading
          id="method"
          eyebrow="How to use this"
          title="Read, practise, revise"
          description="The same three steps for every topic. It is what makes a 120-hour syllabus finishable."
        />

        <ol className="step-process-list max-w-measure-wide">
          {STUDY_METHOD.map((step) => (
            <li key={step.title} className="step-process-item">
              <h3 className="text-h4 font-semibold text-ink">{step.title}</h3>
              <p className="mt-1 text-base text-ink-2 leading-relaxed max-w-measure">{step.body}</p>
              <Link
                href={step.href}
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-2"
              >
                {step.cta}
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* =================================================== 5. TOOLS ===== */}
      <section className="mt-16" aria-labelledby="tools">
        <SectionHeading
          id="tools"
          eyebrow="Everything else"
          title="Practice and revision"
          description="Eight tools, each doing one job. Use the ones that match where you are in the syllabus."
        />

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((tool) => (
            <li key={tool.href}>
              <Link href={tool.href} className="card-link group h-full p-4 flex flex-col">
                <tool.icon className="w-4.5 h-4.5 text-ink-3 group-hover:text-accent transition-colors" aria-hidden="true" />
                <h3 className="mt-3 text-h4 font-semibold text-ink group-hover:text-accent transition-colors">
                  {tool.label}
                </h3>
                <p className="mt-1 text-sm text-ink-3 leading-relaxed">{tool.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ================================================= 6. THE EXAM ==== */}
      <section className="mt-16" aria-labelledby="exam">
        <SectionHeading
          id="exam"
          eyebrow="The paper"
          title="What the O Level exam looks like"
          description="Where the 100 marks actually sit, straight from the official syllabus."
        />

        <Panel className="overflow-hidden">
          <ul className="divide-y divide-line">
            {meta.marksDistribution.map((group) => (
              <li key={group.id} className="p-4 sm:px-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <div className="min-w-0 sm:flex-1">
                  <p className="text-base font-medium text-ink leading-snug">{group.groupName}</p>
                  <p className="mt-0.5 text-xs text-ink-4">{group.unitsCovered.join(' · ')}</p>
                </div>

                <div className="flex items-center gap-3 sm:w-64 shrink-0">
                  <div className="h-1.5 flex-1 rounded-full bg-sunken border border-line overflow-hidden">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${group.marks}%` }} />
                  </div>
                  <span className="text-sm font-semibold text-ink tabular-nums w-16 text-right">
                    {group.marks} marks
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="px-4 sm:px-5 py-3.5 bg-sunken border-t border-line flex flex-wrap items-center gap-x-6 gap-y-2">
            <MetaItem icon={GraduationCap}>{meta.writtenMarksMax} marks written</MetaItem>
            <MetaItem icon={Clock}>{meta.durationTotalHours} hours total</MetaItem>
            <MetaItem icon={Layers}>{meta.theoryHours}h theory · {meta.practicalHours}h practical</MetaItem>
          </div>
        </Panel>
      </section>

      {/* ==================================================== 7. FAQ ====== */}
      <section className="mt-16 max-w-measure-wide" aria-labelledby="faq">
        <SectionHeading id="faq" eyebrow="Before you start" title="Common questions" />

        <div className="divide-y divide-line border-y border-line">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <h3 className="text-base font-medium text-ink">{item.q}</h3>
                <span
                  className="shrink-0 w-5 h-5 grid place-items-center rounded border border-line text-ink-3 transition-transform duration-fast group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-2.5 text-base text-ink-2 leading-relaxed max-w-measure">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ================================================ 8. LAST CTA ===== */}
      <section className="mt-16">
        <Panel className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="max-w-measure">
            <h2 className="text-h2 font-semibold text-ink">Unit 01 takes about five hours.</h2>
            <p className="mt-1.5 text-base text-ink-2 leading-relaxed">
              Eleven topics covering the internet, the web, how a site actually reaches a browser,
              and the difference between front end and back end. Start there.
            </p>
          </div>
          <Button variant="primary" size="lg" href="/units/unit-1" iconRight={ArrowRight} className="shrink-0">
            Start Unit 01
          </Button>
        </Panel>
      </section>
    </div>
  );
}
