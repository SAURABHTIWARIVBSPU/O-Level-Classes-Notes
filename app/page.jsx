import React from 'react';
import Link from 'next/link';
import {
  ArrowRight, BookOpen, ListChecks, Timer, Zap, Columns3, FileText, Code2,
  ClipboardList, Languages, Layers, Smartphone, CheckCircle2, Quote,
} from 'lucide-react';

import { COURSES, getModules, getCourseMeta, moduleVisual } from '@/lib/navigation';
import { masterMcqs } from '@/data/mcqsData';
import { differencesData } from '@/data/differencesData';
import { oneLinersData } from '@/data/oneLinersData';
import { testimonialsData } from '@/data/testimonialsData';
import { CourseCard } from '@/components/ui';
import ContinueLearning from '@/components/learning/ContinueLearning';

export const metadata = {
  title: 'NIELIT O Level & CCC — Notes, Revision and Exam Practice',
  description:
    'Study notes in English and हिन्दी for NIELIT O Level M2-R5.1 (Web Designing & Publishing) and CCC. Topic-by-topic explanations, comparison tables, one-liners, 200+ MCQs and timed mock tests.',
  alternates: { canonical: '/' },
};

const units = getModules('olevel');
const chapters = getModules('ccc');
const olevelMeta = getCourseMeta('olevel');
const cccMeta = getCourseMeta('ccc');
const OLEVEL_TOPICS = units.reduce((n, u) => n + u.topics.length, 0);
const CCC_TOPICS = chapters.reduce((n, u) => n + u.topics.length, 0);

/* Categories for the bento grid — each is a real destination with a real count. */
const CATEGORIES = [
  { href: '/units/unit-1', icon: BookOpen, title: 'Topic notes', desc: 'Definition → plain Hindi → detail → example. Every topic in the syllabus.', count: `${OLEVEL_TOPICS + CCC_TOPICS} pages`, big: true },
  { href: '/mcqs', icon: ListChecks, title: 'MCQ practice', desc: 'Every answer explained.', count: `${masterMcqs.length}+ questions` },
  { href: '/mock-test', icon: Timer, title: 'Mock tests', desc: 'Timed, on the official pattern.', count: 'O Level · CCC' },
  { href: '/differences', icon: Columns3, title: 'Differences', desc: 'Side-by-side comparison tables.', count: `${differencesData.length} tables` },
  { href: '/one-liners', icon: Zap, title: 'One-liners', desc: 'High-yield facts for the last hour.', count: `${oneLinersData.length} facts` },
  { href: '/cheat-sheets', icon: FileText, title: 'Cheat sheets', desc: 'Tags, properties, shortcuts.', count: 'HTML · CSS · JS' },
  { href: '/playground', icon: Code2, title: 'Playground', desc: 'Run HTML, CSS and JS in the browser.', count: 'Live editor' },
  { href: '/practical', icon: ClipboardList, title: 'Practical lab', desc: 'Exercises for the practical paper.', count: 'Unit-wise' },
  { href: '/syllabus', icon: Layers, title: 'Syllabus & marks', desc: 'Every unit, its hours and weightage.', count: '100 marks mapped' },
];

const FEATURED_UNITS = ['unit-3', 'unit-4', 'unit-6'];
const FEATURED_CHAPTER = 'chapter-6';

const WHY = [
  { icon: Languages, title: 'English and हिन्दी together', desc: 'Definitions in English, explanations in the Hindi a teacher speaks in class. Switch to either language from the header.' },
  { icon: Layers, title: 'Follows the official syllabus', desc: 'Every unit maps to its NIELIT section number and marks weightage, so you study what the paper actually asks.' },
  { icon: CheckCircle2, title: 'Practice built into every topic', desc: 'Each page ends with a self-check, and every unit has its own question set with explanations for wrong answers.' },
  { icon: Smartphone, title: 'Free, no sign-up, phone-first', desc: 'Progress, bookmarks and scores stay in your browser. Nothing to install, nothing to pay, nothing to log in to.' },
];

function SectionHeader({ id, title, description, action }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
      <div className="max-w-2xl">
        <h2 id={id} className="text-h2 font-semibold text-ink">{title}</h2>
        {description ? <p className="mt-1.5 text-base text-ink-2">{description}</p> : null}
      </div>
      {action ? (
        <Link href={action.href} className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline underline-offset-2">
          {action.label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const featuredUnits = FEATURED_UNITS.map((k) => units.find((u) => u.key === k)).filter(Boolean);
  const featuredChapter = chapters.find((c) => c.key === FEATURED_CHAPTER);

  return (
    <div>
      {/* ============================================================ 1. HERO */}
      <section className="border-b border-line">
        <div className="shell shell-wide py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 min-w-0">
            <p className="text-sm font-semibold text-accent">NIELIT O Level M2-R5.1 · CCC</p>
            <h1 className="mt-3 text-display font-semibold text-ink max-w-2xl">
              Study notes that explain each topic once, properly.
            </h1>
            <p className="mt-4 text-lead text-ink-2 max-w-xl">
              Every topic in the syllabus, written the way a teacher explains it — in English and हिन्दी —
              with the questions, comparisons and revision sheets you need for the exam.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/units/unit-1" className="btn btn-primary btn-lg">Start O Level</Link>
              <Link href="/ccc" className="btn btn-secondary btn-lg">Start CCC</Link>
            </div>
            <p className="mt-5 text-sm text-ink-2">Free · No sign-up · Progress saved in your browser</p>
          </div>

          {/* Visual Hero Showcase */}
          <div className="lg:col-span-5 min-w-0">
            <div className="panel overflow-hidden border border-line shadow-e3 bg-surface group">
              <div className="px-5 py-3 border-b border-line bg-surface flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="text-xs font-semibold text-ink">NIELIT Learning Interactive Platform</span>
                </div>
                <span className="text-2xs font-semibold px-2 py-0.5 rounded bg-accent-soft text-accent">M2-R5.1 & CCC</span>
              </div>

              <div className="relative aspect-[4/3] bg-sunken overflow-hidden">
                <img
                  src="/images/hero-web-design.jpg"
                  alt="NIELIT O Level Web Designing and Publishing curriculum visual"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-ink/5" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-surface/95 border border-line text-ink shadow-e1">
                    <BookOpen className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                    Unit 04 · CSS Box Model
                  </span>
                  <Link
                    href="/units/unit-4/topics/css-box-model"
                    className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md bg-accent text-accent-ink hover:bg-accent-hover transition-colors shadow-e1"
                  >
                    Open topic →
                  </Link>
                </div>
              </div>

              <div className="p-4 bg-surface border-t border-line">
                <div className="flex items-center justify-between text-xs text-ink-2">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-ok" aria-hidden="true" />
                    English + हिन्दी Bilingual Notes
                  </span>
                  <span className="text-ink-3">Live Code & Self-checks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== 2. SOCIAL PROOF */}
      <section aria-label="At a glance" className="border-b border-line bg-sunken">
        <div className="shell shell-wide py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            [`${OLEVEL_TOPICS + CCC_TOPICS}`, 'topic pages across 8 units and 9 chapters'],
            [`${masterMcqs.length}+`, 'practice questions, every answer explained'],
            [`${differencesData.length + oneLinersData.length}`, 'comparison tables and one-line facts'],
            ['100%', 'free — follows NIELIT M2-R5.1 and CCC syllabi'],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="text-h2 font-semibold text-ink tabular-nums">{n}</p>
              <p className="mt-0.5 text-sm text-ink-2">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="shell shell-wide">
        <ContinueLearning className="mt-10" />

        {/* ================================================ 3. BENTO CATEGORIES */}
        <section aria-labelledby="categories" className="pt-16">
          <SectionHeader id="categories" title="Everything you need for the exam" description="Nine kinds of study material, each doing one job." />
          <div className="grid grid-cols-12 gap-5 auto-rows-fr">
            {CATEGORIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className={`card-link group p-6 flex flex-col ${c.big ? 'col-span-12 md:col-span-6 md:row-span-2' : 'col-span-12 sm:col-span-6 md:col-span-3'}`}
              >
                <span className="w-11 h-11 rounded-lg bg-accent-soft text-accent grid place-items-center">
                  <c.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className={`mt-4 font-semibold text-ink group-hover:text-accent transition-colors ${c.big ? 'text-h2' : 'text-h3'}`}>{c.title}</h3>
                <p className={`mt-1.5 text-ink-2 leading-relaxed ${c.big ? 'text-base max-w-md' : 'text-sm'}`}>{c.desc}</p>
                <p className="mt-auto pt-5 text-sm font-semibold text-ink-2">{c.count}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ================================================= 4. FEATURED COURSES */}
        <section aria-labelledby="featured" className="pt-16">
          <SectionHeader
            id="featured"
            title="Featured courses"
            description="Start with a whole course, or jump straight to the unit your exam weighs most."
            action={{ href: '/syllabus', label: 'All units and marks' }}
          />
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <CourseCard
                href="/units/unit-1"
                eyebrow="Course · M2-R5.1"
                title={COURSES.olevel.fullName}
                hindiTitle={COURSES.olevel.hindiSubject}
                description={COURSES.olevel.description}
                topics={OLEVEL_TOPICS}
                hours={olevelMeta.durationTotalHours}
                icon="Code2"
                badge="Free"
                cta="Start course"
                image="/images/cover-olevel-course.jpg"
              />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <CourseCard
                href="/ccc"
                eyebrow="Course · CCC"
                title={COURSES.ccc.fullName}
                hindiTitle={COURSES.ccc.hindiSubject}
                description={COURSES.ccc.description}
                topics={CCC_TOPICS}
                hours={cccMeta.durationTotalHours}
                icon="Monitor"
                badge="Free"
                cta="Start course"
                image="/images/cover-ccc-course.jpg"
              />
            </div>
            {featuredUnits.map((u) => (
              <div key={u.key} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <CourseCard
                  href={u.href}
                  eyebrow={`O Level · Unit ${u.number}`}
                  title={u.title}
                  hindiTitle={u.hindiTitle}
                  description={u.description}
                  topics={u.topics.length}
                  hours={u.hours}
                  icon={moduleVisual('olevel', u.number).icon}
                  badge={u.marks?.split(' (')[0]}
                  cta="Start unit"
                />
              </div>
            ))}
            {featuredChapter ? (
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <CourseCard
                  href={featuredChapter.href}
                  eyebrow={`CCC · Chapter ${featuredChapter.n}`}
                  title={featuredChapter.title}
                  hindiTitle={featuredChapter.hindiTitle}
                  description={featuredChapter.description}
                  topics={featuredChapter.topics.length}
                  hours={featuredChapter.hours}
                  icon={moduleVisual('ccc', featuredChapter.number).icon}
                  badge={featuredChapter.marks}
                  cta="Start chapter"
                />
              </div>
            ) : null}
          </div>
        </section>

        {/* ========================================================== 5. WHY US */}
        <section aria-labelledby="why" className="pt-16">
          <SectionHeader id="why" title="Why students use these notes" />
          <div className="grid grid-cols-12 gap-5">
            {WHY.map((w) => (
              <div key={w.title} className="col-span-12 sm:col-span-6 lg:col-span-3 panel p-6 flex flex-col">
                <span className="w-11 h-11 rounded-lg bg-accent-soft text-accent grid place-items-center">
                  <w.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-h3 font-semibold text-ink">{w.title}</h3>
                <p className="mt-1.5 text-sm text-ink-2 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================== 6. TESTIMONIALS */}
        <section aria-labelledby="testimonials" className="pt-16 pb-4">
          <SectionHeader id="testimonials" title="What students say" />
          <div className="grid grid-cols-12 gap-5">
            {testimonialsData.map((t) => (
              <figure key={t.id} className="col-span-12 md:col-span-4 panel p-6 flex flex-col">
                <Quote className="w-5 h-5 text-accent" aria-hidden="true" />
                <blockquote className="mt-3 text-base text-ink leading-relaxed flex-1">{t.quote}</blockquote>
                <figcaption className="mt-5 pt-4 border-t border-line flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-accent-soft text-accent grid place-items-center text-sm font-semibold">
                    {t.name[0]}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{t.name}</span>
                    <span className="block text-xs text-ink-2">{t.meta}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          {testimonialsData.some((t) => t.sample) ? (
            <p className="mt-3 text-xs text-ink-4">Sample feedback shown for layout — replace in <code>data/testimonialsData.js</code> with real student reviews.</p>
          ) : null}
        </section>
      </div>
    </div>
  );
}
