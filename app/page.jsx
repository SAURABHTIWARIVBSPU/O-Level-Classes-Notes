import React from 'react';
import Link from 'next/link';
import {
  ArrowRight, BookOpen, ListChecks, Timer, Zap, Columns3, FileText, Code2,
  Presentation, GraduationCap, Clock, Layers, Languages, Smartphone, ClipboardList,
  Sparkles, PlayCircle, Trophy, BadgeCheck,
} from 'lucide-react';

import { COURSES, getModules, getCourseMeta, moduleVisual } from '@/lib/navigation';
import {
  Button, Badge, Panel, SectionHeading, MetaItem, IconTile, Chip, ModuleIcon,
} from '@/components/ui';
import ContinueLearning from '@/components/learning/ContinueLearning';
import HeroArt from '@/components/learning/HeroArt';

export const metadata = {
  title: 'NIELIT O Level & CCC — Notes, Revision and Exam Practice',
  description:
    'Study notes in English and हिन्दी for NIELIT O Level M2-R5.1 (Web Designing & Publishing) and CCC. Topic-by-topic explanations, comparison tables, one-liners, 200+ MCQs and timed mock tests.',
  alternates: { canonical: '/' },
};

const units = getModules('olevel');
const cccChapters = getModules('ccc');
const meta = getCourseMeta('olevel');
const OLEVEL_TOPICS = units.reduce((n, u) => n + u.topics.length, 0);
const CCC_TOPICS = cccChapters.reduce((n, u) => n + u.topics.length, 0);

/* Marks by unit, derived from the official group distribution — used for the
   weightage bars so the number and the bar can never disagree. */
const GROUP_BY_UNIT = new Map();
for (const g of meta.marksDistribution) {
  for (const u of g.unitsCovered) GROUP_BY_UNIT.set(u.replace('Unit ', ''), g);
}

const EXPLORE = [
  { icon: BookOpen, label: 'Topic notes', href: '/units/unit-1' },
  { icon: ListChecks, label: 'MCQ practice', href: '/mcqs' },
  { icon: Timer, label: 'Mock test', href: '/mock-test' },
  { icon: Zap, label: 'One-liners', href: '/one-liners' },
  { icon: Columns3, label: 'Differences', href: '/differences' },
  { icon: FileText, label: 'Cheat sheets', href: '/cheat-sheets' },
  { icon: Code2, label: 'Playground', href: '/playground' },
  { icon: GraduationCap, label: 'CCC course', href: '/ccc' },
];

const WHY = [
  {
    icon: Languages, tone: 'violet', title: 'English + हिन्दी, side by side',
    body: 'Definitions in English, explanation in simple Hindi. Switch to either language from the header.',
  },
  {
    icon: Layers, tone: 'sky', title: 'Definition first, detail later',
    body: 'Every topic opens with a one-line definition, then the idea in plain words, then the depth.',
  },
  {
    icon: ListChecks, tone: 'amber', title: 'Every answer explained',
    body: '200+ MCQs where a wrong answer still teaches you — the explanation is right there.',
  },
  {
    icon: Code2, tone: 'mint', title: 'Run the code, don’t just read it',
    body: 'HTML, CSS and JavaScript examples open in the playground so you can change and re-run them.',
  },
  {
    icon: Trophy, tone: 'rose', title: 'Exam-pattern mock tests',
    body: 'Timed papers on the real NIELIT pattern with a score card and topic-wise weak spots.',
  },
  {
    icon: Smartphone, tone: 'teal', title: 'Built for phone revision',
    body: 'Tables scroll, code wraps, and nothing needs a mouse. Revise on the bus.',
  },
];

const TOOLS = [
  { icon: ListChecks, tone: 'violet', label: 'MCQ practice', desc: '200+ questions, every answer explained', href: '/mcqs' },
  { icon: Timer, tone: 'rose', label: 'Mock test', desc: 'Timed paper on the real exam pattern', href: '/mock-test' },
  { icon: Zap, tone: 'amber', label: 'One-liners', desc: 'High-yield facts for the last hour', href: '/one-liners' },
  { icon: Columns3, tone: 'sky', label: 'Differences', desc: 'Side-by-side comparison tables', href: '/differences' },
  { icon: FileText, tone: 'teal', label: 'Cheat sheets', desc: 'Tags, properties and shortcuts', href: '/cheat-sheets' },
  { icon: Code2, tone: 'mint', label: 'Playground', desc: 'Write and run HTML, CSS and JavaScript', href: '/playground' },
  { icon: ClipboardList, tone: 'violet', label: 'Practical lab', desc: 'Exercises for the practical exam', href: '/practical' },
  { icon: Presentation, tone: 'sky', label: 'Smartboard', desc: 'Diagrams for teaching and revision', href: '/classroom' },
];

const PATHS = [
  {
    tone: 'violet', icon: GraduationCap, title: 'Starting from zero',
    body: 'Begin with CCC Chapter 1, read one topic a day, and answer its questions the same evening.',
    steps: ['Chapter 1 notes', 'Chapter MCQs', 'Weekly mock'],
    href: '/ccc/chapters/chapter-1', cta: 'Open CCC',
  },
  {
    tone: 'amber', icon: Zap, title: 'Exam in one week',
    body: 'Skip re-reading. Work the one-liners, comparison tables and cheat sheets, then sit two mocks.',
    steps: ['One-liners', 'Differences', 'Mock test ×2'],
    href: '/one-liners', cta: 'Start revising',
  },
  {
    tone: 'mint', icon: Code2, title: 'Practical paper focus',
    body: 'Build every example in the playground and finish the lab exercises unit by unit.',
    steps: ['Playground', 'Practical lab', 'Mini projects'],
    href: '/practical', cta: 'Open the lab',
  },
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
    <div>
      {/* ==================================================== 1. HERO ===== */}
      <section className="hero-band border-b border-accent-line/50">
        <div className="shell py-12 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 max-w-measure-wide">
            <p className="inline-flex items-center gap-2 h-8 pl-1.5 pr-3 rounded-full bg-surface border border-accent-line shadow-e1 text-xs font-semibold text-ink-2">
              <span className="h-5 px-2 rounded-full bg-hl text-2xs font-bold uppercase tracking-wider text-hl-ink grid place-items-center">Free</span>
              <span className="hidden sm:inline">NIELIT O Level M2-R5.1 · CCC · English + हिन्दी</span>
              <span className="sm:hidden">O Level · CCC · EN + हिन्दी</span>
            </p>

            <h1 className="mt-5 text-display sm:text-display-lg font-bold text-ink">
              Crack NIELIT with notes that{' '}
              <span className="relative inline-block text-accent">
                explain it once
                <span className="absolute left-0 right-0 -bottom-1 h-2 rounded-full bg-hl/70 -z-10" aria-hidden="true" />
              </span>{' '}
              — properly.
            </h1>

            <p className="mt-5 text-lead text-ink-2 leading-relaxed max-w-measure">
              Every topic in the <strong className="font-semibold text-ink">O&nbsp;Level M2-R5.1</strong> and{' '}
              <strong className="font-semibold text-ink">CCC</strong> syllabi — definition first, then the idea
              in plain Hindi, then the detail, then exactly what the examiner asks.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="primary" size="lg" href="/units/unit-1" iconRight={ArrowRight}>
                Start learning free
              </Button>
              <Button variant="secondary" size="lg" href="/mock-test" icon={PlayCircle}>
                Try a mock test
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <li><MetaItem icon={BadgeCheck} className="text-sm text-ink-2"><span className="font-semibold text-ink">{OLEVEL_TOPICS + CCC_TOPICS}</span>&nbsp;topics</MetaItem></li>
              <li><MetaItem icon={ListChecks} className="text-sm text-ink-2"><span className="font-semibold text-ink">200+</span>&nbsp;explained MCQs</MetaItem></li>
              <li><MetaItem icon={Languages} className="text-sm text-ink-2">हिन्दी + English</MetaItem></li>
              <li><MetaItem icon={Smartphone} className="text-sm text-ink-2">Phone-first</MetaItem></li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <HeroArt />
          </div>
        </div>
      </section>

      <div className="shell">
        {/* ============================================ 2. EXPLORE CHIPS === */}
        <section className="py-6 -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-line" aria-label="Explore">
          <ul className="flex gap-2 overflow-x-auto no-scrollbar py-1 lg:flex-wrap lg:justify-center">
            {EXPLORE.map((e) => (
              <li key={e.href} className="shrink-0">
                <Chip href={e.href} icon={e.icon}>{e.label}</Chip>
              </li>
            ))}
          </ul>
        </section>

        <ContinueLearning className="mt-8" />

        {/* ============================================ 3. COURSE CARDS ==== */}
        <section className="mt-14" aria-labelledby="courses">
          <SectionHeading
            id="courses"
            eyebrow="Choose your course"
            title="Two certificates, one place to prepare"
            description="Pick where you are. Both are free, both are bilingual, both follow the official NIELIT syllabus."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {Object.values(COURSES).map((course) => {
              const mods = getModules(course.key);
              const topicCount = mods.reduce((n, m) => n + m.topics.length, 0);
              const courseMeta = getCourseMeta(course.key);
              const coverTone = course.key === 'ccc' ? 'cover-teal' : 'cover-violet';

              return (
                <Link key={course.key} href={course.home} className="card-link group overflow-hidden flex flex-col">
                  <div className={`cover ${coverTone} p-5 sm:p-6 min-h-[9.5rem] flex flex-col justify-between`}>
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex items-center h-6 px-2.5 rounded-full bg-white/20 backdrop-blur text-2xs font-bold uppercase tracking-wider">
                        {course.module}
                      </span>
                      <span className="inline-flex items-center h-6 px-2.5 rounded-full bg-hl text-hl-ink text-2xs font-bold uppercase tracking-wider">
                        Free
                      </span>
                    </div>
                    <div>
                      <p className="text-h2 font-bold leading-tight">{course.fullName}</p>
                      <p className="mt-1 text-sm text-white/85">{course.subject} · {course.level}</p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <p className="text-base text-ink-2 leading-relaxed flex-1">{course.description}</p>

                    <dl className="mt-5 grid grid-cols-3 gap-3">
                      <div className="rounded-xl bg-sunken px-3 py-2.5">
                        <dt className="eyebrow">{course.unitWordPlural}</dt>
                        <dd className="mt-0.5 text-h3 font-bold text-ink tabular-nums">{mods.length}</dd>
                      </div>
                      <div className="rounded-xl bg-sunken px-3 py-2.5">
                        <dt className="eyebrow">Topics</dt>
                        <dd className="mt-0.5 text-h3 font-bold text-ink tabular-nums">{topicCount}</dd>
                      </div>
                      <div className="rounded-xl bg-sunken px-3 py-2.5">
                        <dt className="eyebrow">Hours</dt>
                        <dd className="mt-0.5 text-h3 font-bold text-ink tabular-nums">
                          {courseMeta.durationTotalHours || mods.reduce((n, m) => n + (m.hours || 0), 0)}
                        </dd>
                      </div>
                    </dl>

                    <span className="mt-5 btn btn-primary w-full sm:w-auto sm:self-start group-hover:bg-accent-hover">
                      Explore {course.name}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ============================================== 4. STATS BAND ==== */}
        <section className="mt-14" aria-label="At a glance">
          <Panel className="p-2 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-line">
            {[
              { n: `${OLEVEL_TOPICS + CCC_TOPICS}`, l: 'Topic pages', s: 'across 8 units + 9 chapters' },
              { n: '200+', l: 'MCQs explained', s: 'plus true/false and mocks' },
              { n: '2', l: 'Languages', s: 'English and हिन्दी' },
              { n: '100', l: 'Marks mapped', s: 'to the official blueprint' },
            ].map((st, i) => (
              <div key={st.l} className={`p-4 sm:p-5 ${i % 2 === 1 ? 'border-l border-line lg:border-l' : ''} ${i >= 2 ? 'lg:border-l' : ''}`}>
                <p className="stat-num">{st.n}</p>
                <p className="mt-2 text-sm font-semibold text-ink">{st.l}</p>
                <p className="text-xs text-ink-3">{st.s}</p>
              </div>
            ))}
          </Panel>
        </section>

        {/* ============================================ 5. UNIT DIRECTORY ==== */}
        <section className="mt-16" aria-labelledby="units">
          <SectionHeading
            id="units"
            eyebrow={`O Level · ${meta.moduleCode}`}
            title="All 8 units"
            description={`${meta.durationTotalHours} hours of syllabus — ${meta.theoryHours} theory, ${meta.practicalHours} practical — mapped topic by topic.`}
            action={<Button href="/syllabus" size="sm" iconRight={ArrowRight}>Marks blueprint</Button>}
          />

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {units.map((unit) => {
              const group = GROUP_BY_UNIT.get(unit.number.replace(/^0/, '')) || GROUP_BY_UNIT.get(unit.number);
              const vis = moduleVisual('olevel', unit.number);
              return (
                <li key={unit.key}>
                  <Link href={unit.href} className="card-link group h-full p-5 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <IconTile tone={vis.tone} icon={<ModuleIcon name={vis.icon} />} />
                      {group ? <Badge tone="exam" mono>{group.marks} marks</Badge> : null}
                    </div>

                    <span className="mt-4 font-mono text-2xs font-semibold text-accent">UNIT {unit.number}</span>
                    <h3 className="mt-1 text-h4 font-bold text-ink leading-snug group-hover:text-accent transition-colors">
                      {unit.title}
                    </h3>
                    <p className="mt-1 text-sm text-hindi hindi-text" lang="hi">{unit.hindiTitle}</p>

                    <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-line">
                      <span className="flex items-center gap-3">
                        <MetaItem icon={BookOpen}>{unit.topics.length} topics</MetaItem>
                        <MetaItem icon={Clock}>{unit.hours}h</MetaItem>
                      </span>
                      <ArrowRight className="w-4 h-4 text-ink-4 group-hover:text-accent group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>

        {/* ============================================== 6. WHY US ======== */}
        <section className="mt-16" aria-labelledby="why">
          <SectionHeading
            id="why"
            eyebrow="Why students stick with it"
            title="Made for the way you actually study"
            description="No fluff, no sign-up, no paywall. Just the syllabus, explained well, in the language you think in."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <li key={w.title} className="panel p-5 flex gap-4">
                <IconTile tone={w.tone} icon={w.icon} />
                <div className="min-w-0">
                  <h3 className="text-h4 font-bold text-ink">{w.title}</h3>
                  <p className="mt-1 text-sm text-ink-2 leading-relaxed">{w.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ============================================== 7. HOW TO STUDY ==== */}
        <section className="mt-16" aria-labelledby="method">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                id="method"
                eyebrow="How to use this"
                title="Read, practise, revise"
                description="The same three steps for every topic. It is what makes a 120-hour syllabus finishable."
                className="mb-6"
              />
              <ol className="step-process-list">
                {[
                  { t: 'Read the topic', b: 'One-line definition, then the idea in Hindi, then the detail. Stop as soon as it clicks.', href: '/units/unit-1', cta: 'Open Unit 01' },
                  { t: 'Practise it', b: 'Run the example, do the practice task, then answer the unit MCQs while it is fresh.', href: '/mcqs', cta: 'Go to questions' },
                  { t: 'Revise fast', b: 'One-liners, comparison tables and cheat sheets — instead of re-reading whole units.', href: '/one-liners', cta: 'Open one-liners' },
                ].map((step) => (
                  <li key={step.t} className="step-process-item">
                    <h3 className="text-h4 font-bold text-ink">{step.t}</h3>
                    <p className="mt-1 text-sm text-ink-2 leading-relaxed">{step.b}</p>
                    <Link href={step.href} className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-2">
                      {step.cta}<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {TOOLS.map((tool) => (
                  <li key={tool.href}>
                    <Link href={tool.href} className="card-link group h-full p-4 flex items-center gap-3.5">
                      <IconTile tone={tool.tone} icon={tool.icon} />
                      <span className="min-w-0 flex-1">
                        <span className="block text-base font-bold text-ink group-hover:text-accent transition-colors">{tool.label}</span>
                        <span className="block text-xs text-ink-3 leading-relaxed">{tool.desc}</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-ink-4 group-hover:text-accent transition-colors shrink-0" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================================================= 8. THE EXAM ==== */}
        <section className="mt-16" aria-labelledby="exam">
          <SectionHeading
            id="exam"
            eyebrow="The paper"
            title="Where the 100 marks actually sit"
            description="Straight from the official O Level syllabus — so you know which units deserve the most time."
          />

          <Panel className="overflow-hidden">
            <ul className="divide-y divide-line">
              {meta.marksDistribution.map((group, i) => (
                <li key={group.id} className="p-4 sm:px-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <span className={`icon-tile icon-tile-sm tone-${['violet', 'sky', 'amber', 'rose', 'teal'][i % 5]} font-mono text-xs font-bold`}>
                    {i + 1}
                  </span>
                  <div className="min-w-0 sm:flex-1">
                    <p className="text-base font-semibold text-ink leading-snug">{group.groupName}</p>
                    <p className="mt-0.5 text-xs text-ink-3">{group.unitsCovered.join(' · ')}</p>
                  </div>

                  <div className="flex items-center gap-3 sm:w-72 shrink-0">
                    <div className="h-2.5 flex-1 rounded-full bg-sunken overflow-hidden">
                      <div className="h-full rounded-full bg-accent" style={{ width: `${group.marks}%` }} />
                    </div>
                    <span className="text-sm font-bold text-ink tabular-nums w-16 text-right">
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

        {/* ============================================== 9. STUDY PATHS === */}
        <section className="mt-16" aria-labelledby="paths">
          <SectionHeading id="paths" eyebrow="Pick a path" title="Three ways students use this" description="Different exams, different timelines. Each path is just a reading order — nothing to enrol in." />
          <ul className="grid gap-4 md:grid-cols-3">
            {PATHS.map((v) => (
              <li key={v.title} className="panel p-5 flex flex-col">
                <div className="flex items-center gap-3">
                  <IconTile tone={v.tone} icon={v.icon} />
                  <h3 className="text-h4 font-bold text-ink">{v.title}</h3>
                </div>
                <p className="mt-3 text-sm text-ink-2 leading-relaxed">{v.body}</p>
                <ol className="mt-4 flex flex-wrap gap-2">
                  {v.steps.map((st, i) => (
                    <li key={st} className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-full bg-sunken text-xs font-semibold text-ink-2">
                      <span className="text-accent font-mono">{i + 1}</span>{st}
                    </li>
                  ))}
                </ol>
                <Link href={v.href} className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-2">
                  {v.cta}<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ==================================================== 10. FAQ ===== */}
        <section className="mt-16 max-w-measure-wide" aria-labelledby="faq">
          <SectionHeading id="faq" eyebrow="Before you start" title="Common questions" />

          <div className="panel divide-y divide-line overflow-hidden">
            {FAQ.map((item) => (
              <details key={item.q} className="group px-5 py-4">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors">{item.q}</h3>
                  <span
                    className="shrink-0 w-7 h-7 grid place-items-center rounded-full bg-accent-soft text-accent transition-transform duration-fast group-open:rotate-45"
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

        {/* ================================================ 11. LAST CTA ===== */}
        <section className="mt-16">
          <div className="cta-band p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-measure">
              <p className="inline-flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-white/80">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> Start today
              </p>
              <h2 className="mt-2 text-h1 sm:text-display font-bold">Unit 01 takes about five hours.</h2>
              <p className="mt-2 text-base text-white/85 leading-relaxed">
                Eleven topics covering the internet, the web, how a site actually reaches a browser,
                and the difference between front end and back end. Start there — it is free.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button variant="highlight" size="lg" href="/units/unit-1" iconRight={ArrowRight}>
                Start Unit 01
              </Button>
              <Link href="/ccc" className="btn btn-lg bg-white/15 text-white border-white/30 hover:bg-white/25">
                I&apos;m doing CCC
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
