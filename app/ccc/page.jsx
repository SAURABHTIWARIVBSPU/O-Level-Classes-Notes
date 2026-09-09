import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Clock,
  Columns3,
  FileText,
  GraduationCap,
  HelpCircle,
  Layers,
  ListChecks,
  Timer,
} from 'lucide-react';

import {
  Badge,
  Button,
  CardLink,
  MetaItem,
  PageHeader,
  SectionHeading,
  StatTile,
  IconTile,
  ModuleIcon,
} from '@/components/ui';
import { COURSES, getCourseMeta, getModules, moduleVisual } from '@/lib/navigation';

export const metadata = {
  title: 'CCC — Course on Computer Concepts',
  description:
    'Start computers from zero. The NIELIT CCC course in nine chapters — bilingual notes in English and हिन्दी, chapter questions, and a 100-question mock test. No prior experience needed.',
};

const STEPS = [
  {
    title: 'Read Chapter 1 first',
    body:
      'It starts at the very beginning — what a computer is, what the parts are called. Each topic is a short page you can finish in one sitting.',
    href: '/ccc/chapters/chapter-1',
    linkLabel: 'Open Chapter 1',
  },
  {
    title: 'Answer the chapter questions',
    body:
      'After a chapter, work through its MCQs. Every answer comes with an explanation, so a wrong answer still teaches you something.',
    href: '/ccc/mcqs',
    linkLabel: 'Go to chapter questions',
  },
  {
    title: 'Sit a full mock test',
    body:
      'When four or five chapters are behind you, take the timed paper: 100 questions in 90 minutes, exactly like the real exam.',
    href: '/ccc/mock-test',
    linkLabel: 'Start a mock test',
  },
];

const TOOLS = [
  {
    href: '/ccc/mcqs',
    icon: HelpCircle,
    title: 'Chapter questions',
    body: 'Chapter-wise MCQs and true/false, each with a worked explanation.',
  },
  {
    href: '/ccc/mock-test',
    icon: GraduationCap,
    title: 'Mock test',
    body: '100 questions, 90 minutes, no negative marking — the real pattern.',
  },
  {
    href: '/ccc/notes',
    icon: FileText,
    title: 'Full chapter notes',
    body: 'The long-form reader plus downloadable PDFs, English and हिन्दी.',
  },
  {
    href: '/ccc/one-liners',
    icon: ListChecks,
    title: 'One-liners',
    body: 'High-yield single facts for the last read-through before the exam.',
  },
  {
    href: '/ccc/differences',
    icon: Columns3,
    title: 'Differences',
    body: 'RAM vs ROM, LAN vs WAN — side by side, the way the paper asks them.',
  },
  {
    href: '/ccc/cheat-sheets',
    icon: BookOpen,
    title: 'Cheat sheets',
    body: 'LibreOffice shortcuts and quick tables you can keep open while practising.',
  },
];

export default function CCCLandingPage() {
  const course = COURSES.ccc;
  const meta = getCourseMeta('ccc');
  const chapters = getModules('ccc');
  const topicCount = chapters.reduce((sum, c) => sum + (c.topics ? c.topics.length : 0), 0);

  const faqs = [
    {
      q: 'Do I need to know anything about computers first?',
      a: meta.eligibility
        ? `No. ${meta.eligibility} Chapter 1 starts with what a computer is and what each part does.`
        : 'No. Chapter 1 starts with what a computer is and what each part does.',
    },
    {
      q: 'How long does the course take?',
      a: `${meta.durationTotalHours} hours in the official curriculum — ${meta.theoryHours} hours of theory and ${meta.practicalHours} hours of practical work across ${chapters.length} chapters.`,
    },
    {
      q: 'What does the exam look like?',
      a: meta.examPattern,
    },
    {
      q: 'What counts as a pass?',
      a: meta.passingCriteria,
    },
    {
      q: 'Which software do I practise on?',
      a: `${meta.practicalEnvironment} It is free to download, so you can practise the same software at home.`,
    },
    {
      q: 'Can I read everything in Hindi?',
      a: 'Yes. Titles, definitions and the plain-language explanations are bilingual, and the full chapter notes have a हिन्दी edition. Use the language control in the header to show English only, हिन्दी only, or both.',
    },
  ];

  return (
    <div className="shell py-8 sm:py-10">
      {/* ------------------------------------------------------------- hero */}
      <PageHeader
        icon={GraduationCap}
        tone="teal"
        eyebrow={`${course.module} · ${course.level} · Free`}
        title="Learn computers from zero"
        hindiTitle={meta.hindiCourseName}
        description="CCC is the starting course. If you have never used a computer for more than WhatsApp, this is written for you — nine short chapters, in English and हिन्दी, ending in a certificate exam you can pass with 50%."
        actions={
          <>
            <Button variant="primary" size="lg" href="/ccc/chapters/chapter-1" iconRight={ArrowRight}>
              Start Chapter 1
            </Button>
            <Button variant="secondary" size="lg" href="/ccc/syllabus">
              See the syllabus
            </Button>
          </>
        }
        meta={
          <>
            <MetaItem icon={Layers}>
              {chapters.length} chapters · {topicCount} topics
            </MetaItem>
            <MetaItem icon={Clock}>{meta.durationTotalHours} hours</MetaItem>
            <MetaItem icon={Timer}>90-minute exam</MetaItem>
            <MetaItem icon={GraduationCap}>No entry requirement</MetaItem>
          </>
        }
      />

      <div className="space-y-12">
        {/* ------------------------------------------------------ start here */}
        <section aria-labelledby="start-here">
          <SectionHeading
            id="start-here"
            eyebrow="Start here"
            title="Three steps, in this order"
            description="You do not have to plan anything. Follow these three steps and repeat them for each chapter."
          />
          <ol className="step-process-list max-w-measure">
            {STEPS.map((step) => (
              <li key={step.href} className="step-process-item">
                <h3 className="text-h4 font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-base text-ink-2 leading-relaxed">{step.body}</p>
                <Link
                  href={step.href}
                  className="mt-2 inline-flex items-center gap-1.5 min-h-11 text-sm font-medium text-accent hover:underline"
                >
                  {step.linkLabel}
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* -------------------------------------------------- chapter directory */}
        <section aria-labelledby="chapters">
          <SectionHeading
            id="chapters"
            eyebrow="The course"
            title={`All ${chapters.length} chapters`}
            description="The official NIELIT chapter order. Work through them top to bottom the first time."
            action={
              <Button variant="ghost" href="/ccc/syllabus" iconRight={ArrowRight}>
                Blueprint
              </Button>
            }
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {chapters.map((chapter) => {
              const number = String(chapter.number || '').replace(/^0+/, '') || chapter.number;
              return (
                <li key={chapter.key}>
                  <CardLink href={chapter.href} className="group h-full p-5 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <IconTile tone={moduleVisual('ccc', number).tone} icon={<ModuleIcon name={moduleVisual('ccc', number).icon} />} />
                      {chapter.marks ? <Badge tone="exam">{chapter.marks}</Badge> : null}
                    </div>
                    <span className="font-mono text-2xs font-semibold text-ccc">CHAPTER {String(number).padStart(2, '0')}</span>

                    <h3 className="mt-1 text-h4 font-bold text-ink leading-snug group-hover:text-accent transition-colors duration-fast">
                      {chapter.title}
                    </h3>
                    {chapter.hindiTitle ? (
                      <p className="mt-0.5 text-sm text-hindi hindi-text" lang="hi">
                        {chapter.hindiTitle}
                      </p>
                    ) : null}

                    {chapter.description ? (
                      <p className="mt-2.5 text-sm text-ink-3 leading-relaxed line-clamp-3">
                        {chapter.description}
                      </p>
                    ) : null}

                    <div className="mt-auto pt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
                      <MetaItem icon={Layers}>{(chapter.topics || []).length} topics</MetaItem>
                      {chapter.hours ? <MetaItem icon={Clock}>{chapter.hours} hours</MetaItem> : null}
                    </div>
                  </CardLink>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ---------------------------------------------- practice and revision */}
        <section aria-labelledby="practice">
          <SectionHeading
            id="practice"
            eyebrow="Practice and revision"
            title="Everything else you get"
            description="Use these after the reading, not instead of it."
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((tool) => (
              <li key={tool.href}>
                <CardLink href={tool.href} className="group h-full p-5 flex gap-4">
                  <IconTile tone={['violet', 'rose', 'sky', 'amber', 'teal', 'mint'][TOOLS.indexOf(tool) % 6]} icon={tool.icon} />
                  <span className="min-w-0">
                    <h3 className="text-h4 font-bold text-ink group-hover:text-accent transition-colors duration-fast">
                      {tool.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-3 leading-relaxed">{tool.body}</p>
                  </span>
                </CardLink>
              </li>
            ))}
          </ul>
        </section>

        {/* --------------------------------------------------- exam at a glance */}
        <section aria-labelledby="exam-facts">
          <SectionHeading
            id="exam-facts"
            eyebrow="The exam"
            title="What you are working towards"
            description={`${meta.organization} · ${meta.revision}, in force from ${meta.implementationDate}.`}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <StatTile
              label="Course length"
              value={`${meta.durationTotalHours}h`}
              hint={`${meta.theoryHours}h theory + ${meta.practicalHours}h practical`}
              icon={Clock}
            />
            <StatTile label="Questions" value="100" hint="MCQ and true/false" icon={ListChecks} tone="sky" />
            <StatTile label="Time" value="90 min" hint="No negative marking" icon={Timer} tone="amber" />
            <StatTile label="Pass mark" value="50%" hint="Grade D or higher" icon={GraduationCap} tone="mint" />
          </div>

          <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 max-w-measure-wide">
            <div>
              <dt className="eyebrow mb-1">Who it is for</dt>
              <dd className="text-base text-ink-2 leading-relaxed">{meta.eligibility}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Practical environment</dt>
              <dd className="text-base text-ink-2 leading-relaxed">{meta.practicalEnvironment}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Jobs it maps to</dt>
              <dd className="text-base text-ink-2 leading-relaxed">{meta.jobRoles.join(' · ')}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Certificate</dt>
              <dd className="text-base text-ink-2 leading-relaxed">
                {meta.courseName}, {meta.courseCode}.
              </dd>
            </div>
          </dl>
        </section>

        {/* --------------------------------------------------------------- FAQ */}
        <section aria-labelledby="faq">
          <SectionHeading id="faq" eyebrow="Before you start" title="Common questions" />
          <div className="max-w-measure-wide panel divide-y divide-line overflow-hidden px-5">
            {faqs.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex items-center justify-between gap-4 py-4 min-h-11 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-base font-medium text-ink hover:text-accent transition-colors duration-fast">
                  {faq.q}
                  <span
                    className="shrink-0 text-ink-3 text-lead leading-none group-open:hidden"
                    aria-hidden="true"
                  >
                    +
                  </span>
                  <span
                    className="shrink-0 text-ink-3 text-lead leading-none hidden group-open:inline"
                    aria-hidden="true"
                  >
                    −
                  </span>
                </summary>
                <p className="pb-4 -mt-1 text-base text-ink-2 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* --------------------------------------------------------- last word */}
        <section aria-labelledby="get-going" className="cta-band p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-measure">
            <h2 id="get-going" className="text-h1 sm:text-display font-bold">
              Ready when you are
            </h2>
            <p className="mt-2 text-base text-white/85 leading-relaxed">
              Nothing to install and nothing to sign up for. Open Chapter 1 and read the first topic —
              it takes about ten minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button variant="highlight" size="lg" href="/ccc/chapters/chapter-1" iconRight={ArrowRight}>
              Start Chapter 1
            </Button>
            <Link href="/ccc/notes" className="btn btn-lg bg-white/15 text-white border-white/30 hover:bg-white/25">
              Browse the full notes
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
