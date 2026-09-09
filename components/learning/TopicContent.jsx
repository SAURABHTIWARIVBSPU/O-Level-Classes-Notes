'use client';

import React, { useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  CheckCircle2, Circle, Bookmark, BookmarkCheck, Presentation, Compass,
  Zap, Target, ArrowRight, ListChecks, Printer,
} from 'lucide-react';

import { useLanguage } from '@/lib/languageContext';
import { useProgress } from '@/lib/progressContext';

import MarkdownRenderer, { extractHeadings } from '@/components/common/MarkdownRenderer';
import {
  Button, Badge, Panel, Callout, CodeBlock, Breadcrumbs, TableOfContents,
  ReadingProgress, PrevNext, MetaItem,
} from '@/components/ui';
import CourseSidebar from '@/components/layout/CourseSidebar';

import LineByLineCode from './LineByLineCode';
import TryItYourself from './TryItYourself';
import MicroQuiz from './MicroQuiz';
import TopicNotesEditor from './TopicNotesEditor';

/**
 * The O Level topic page — the single most-read screen on the platform.
 *
 * Structure follows DESIGN_SYSTEM §7 exactly, and every section is skipped
 * when its data is missing rather than rendering an empty shell. Sections are
 * plain <section>s with heading anchors, not cards: the reading column keeps
 * one rhythm from top to bottom, and the table of contents on the right is
 * what makes a long page navigable.
 */

/* Concepts that have a prepared smartboard diagram. */
const BOARD_TEMPLATES = [
  [/client|server|working-of-websites|how-web/, 'client-server'],
  [/front-end|back-end|full-stack/, 'frontend-backend'],
  [/box-model|margin|padding/, 'css-box-model'],
  [/event|javascript-intro|dom-event/, 'js-event-flow'],
  [/html.*(structure|dom)|dom-tree|basic-structure/, 'html-dom-tree'],
];

function boardTemplateFor(slug = '') {
  const s = slug.toLowerCase();
  const hit = BOARD_TEMPLATES.find(([re]) => re.test(s));
  return hit ? hit[1] : null;
}

/** A titled block in the reading column. Anchored so the TOC can reach it. */
function Section({ id, title, hindiTitle, icon: Icon, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-[calc(var(--header-h)+1.5rem)] ${className}`}>
      <h2 className="flex items-center gap-2.5 text-h3 font-bold text-ink mb-3">
        <span className="w-1 h-5 rounded-full bg-accent shrink-0" aria-hidden="true" />
        {Icon ? <Icon className="w-[1.05rem] h-[1.05rem] text-accent shrink-0" aria-hidden="true" /> : null}
        {title}
        {hindiTitle ? (
          <span className="text-sm font-normal text-ink-4 hindi-text" lang="hi">{hindiTitle}</span>
        ) : null}
      </h2>
      {children}
    </section>
  );
}

export default function TopicContent({ topic, prevTopic, nextTopic, related = [] }) {
  const { language } = useLanguage();
  const {
    completedTopics, toggleTopicCompleted, isBookmarked, toggleBookmark, updateLastVisited,
  } = useProgress();

  // Powers "continue where you left off" on the homepage and dashboard.
  useEffect(() => {
    updateLastVisited({ slug: topic.slug, unitSlug: topic.unitSlug, title: topic.title });
  }, [topic.slug, topic.unitSlug, topic.title, updateLastVisited]);

  const completed = Array.isArray(completedTopics) ? completedTopics : [];
  const isCompleted = completed.includes(topic.slug);
  const isSaved = isBookmarked ? isBookmarked(topic.slug) : false;

  const showEnglish = language === 'both' || language === 'en';
  const showHindi = language === 'both' || language === 'hi';
  const boardTemplate = boardTemplateFor(topic.slug);

  /* The TOC merges the fixed section list with the headings marked authors
     wrote inside `detailedExplanation`, so it reflects the real page. */
  const tocItems = useMemo(() => {
    const items = [];
    const add = (id, text, depth = 2) => items.push({ id, text, depth });

    add('definition', 'Definition');
    if (topic.simpleWords || topic.realWorldAnalogy) add('plain-terms', 'In plain terms');
    if (topic.whyImportant) add('why-it-matters', 'Why it matters');

    if (topic.detailedExplanation) {
      add('explanation', 'Understanding it properly');
      for (const h of extractHeadings(topic.detailedExplanation, 3)) {
        items.push({ ...h, depth: Math.max(3, h.depth) });
      }
    }

    if (topic.syntax || topic.codeExample || topic.lineByLine?.length) add('code', 'See it in code');
    if (topic.importantPoints?.length) add('key-points', 'Remember these');
    if (topic.commonMistakes?.length) add('mistakes', 'Where students slip');
    if (topic.examPerspective) add('exam', 'How the exam asks it');
    if (topic.quickRevision) add('revision', 'Quick revision');
    if (topic.practiceTask) add('practice', 'Try it yourself');
    if (topic.mcqs?.length) add('check', 'Check yourself');
    return items;
  }, [topic]);

  const unitNumber = String(topic.unit).padStart(2, '0');

  return (
    <>
      <ReadingProgress />

      <div className="shell shell-wide py-6 sm:py-8">
        <div className="grid gap-8 xl:grid-cols-[15rem_minmax(0,1fr)_13rem] lg:grid-cols-[minmax(0,1fr)_13rem]">

          {/* ------------------------------------------------ course tree */}
          <CourseSidebar
            courseKey="olevel"
            activeModule={topic.unitSlug}
            activeTopic={topic.slug}
            title="O Level units"
          />

          {/* ------------------------------------------------- reading col */}
          <div className="min-w-0">
            <Breadcrumbs
              className="mb-4"
              items={[
                { label: 'O Level', href: '/syllabus' },
                { label: `Unit ${unitNumber} · ${topic.unitTitle}`, href: `/units/${topic.unitSlug}` },
                { label: topic.title },
              ]}
            />

            {/* Title block */}
            <header className="hero-band rounded-3xl border border-accent-line/60 px-5 py-5 sm:px-7 sm:py-6 mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center h-6 px-2.5 rounded-full bg-accent text-white text-2xs font-bold uppercase tracking-wider">
                  Unit {unitNumber}
                </span>
                <span className="text-xs font-semibold text-ink-3 truncate">{topic.unitTitle}</span>
                {isCompleted ? <Badge tone="ok" icon={CheckCircle2}>Completed</Badge> : null}
              </div>

              <h1 className="text-h1 sm:text-display font-bold text-ink">{topic.title}</h1>
              {topic.hindiTitle ? (
                <p className="mt-1.5 text-lead text-hindi hindi-text" lang="hi">{topic.hindiTitle}</p>
              ) : null}

              {/* Study actions — quiet, secondary to the content */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Button
                  variant={isCompleted ? 'soft' : 'primary'}
                  size="sm"
                  icon={isCompleted ? CheckCircle2 : Circle}
                  onClick={() => toggleTopicCompleted(topic.slug)}
                  aria-pressed={isCompleted}
                >
                  {isCompleted ? 'Marked as done' : 'Mark as done'}
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  icon={isSaved ? BookmarkCheck : Bookmark}
                  onClick={() => toggleBookmark(topic.slug)}
                  aria-pressed={isSaved}
                >
                  {isSaved ? 'Saved' : 'Save'}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  icon={Presentation}
                  href={boardTemplate ? `/classroom?template=${boardTemplate}` : '/classroom'}
                >
                  Smartboard
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  icon={Printer}
                  className="hidden sm:inline-flex no-print"
                  onClick={() => window.print()}
                >
                  Print
                </Button>
              </div>
            </header>

            {/* TOC — mobile position, above the body */}
            <TableOfContents items={tocItems} className="mb-6 lg:hidden" refreshKey={language} variant="mobile" />

            {/* ------------------------------------------------- the note */}
            <article data-toc-root className="prose-flow max-w-measure">

              {/* Definition — the anchor of the page */}
              <Section id="definition" title="Definition">
                <div className="rounded-2xl bg-accent-soft/60 border border-accent-line px-5 py-4 space-y-2">
                  {showEnglish && topic.definitionEnglish ? (
                    <p className="text-prose text-ink leading-relaxed">{topic.definitionEnglish}</p>
                  ) : null}
                  {showHindi && topic.definitionHindi ? (
                    <p className="text-prose text-ink-2 hindi-text leading-relaxed" lang="hi">
                      {topic.definitionHindi}
                    </p>
                  ) : null}
                </div>
              </Section>

              {/* Plain terms + analogy */}
              {(topic.simpleWords || topic.realWorldAnalogy) ? (
                <Section id="plain-terms" title="In plain terms">
                  {topic.simpleWords ? (
                    <p className="text-prose text-ink-2 leading-relaxed hindi-text" lang="hi">
                      {topic.simpleWords}
                    </p>
                  ) : null}
                  {topic.realWorldAnalogy ? (
                    <Callout kind="analogy" label="Think of it like this" lang="hi">
                      <p className="hindi-text">{topic.realWorldAnalogy}</p>
                    </Callout>
                  ) : null}
                </Section>
              ) : null}

              {/* Why it matters */}
              {topic.whyImportant ? (
                <Section id="why-it-matters" title="Why it matters" icon={Target}>
                  <p className="text-prose text-ink-2 leading-relaxed hindi-text" lang="hi">
                    {topic.whyImportant}
                  </p>
                </Section>
              ) : null}

              {/* Detailed explanation */}
              {topic.detailedExplanation ? (
                <Section id="explanation" title="Understanding it properly">
                  <MarkdownRenderer content={topic.detailedExplanation} className="prose-notes" />
                </Section>
              ) : null}

              {/* Syntax → code → output → explanation */}
              {(topic.syntax || topic.codeExample || topic.lineByLine?.length) ? (
                <Section id="code" title="See it in code">
                  {topic.syntax ? (
                    <CodeBlock code={topic.syntax} language="text" title="Syntax" className="mb-4" />
                  ) : null}

                  {topic.codeExample ? (
                    <CodeBlock
                      code={topic.codeExample}
                      language={topic.codeLanguage || 'html'}
                      runnable
                      explanation={topic.outputExplanation}
                    />
                  ) : null}

                  {topic.lineByLine?.length ? (
                    <div className="mt-4">
                      <LineByLineCode lines={topic.lineByLine} />
                    </div>
                  ) : null}
                </Section>
              ) : null}

              {/* Key points */}
              {topic.importantPoints?.length ? (
                <Section id="key-points" title="Remember these" icon={ListChecks}>
                  <ul className="space-y-2.5">
                    {topic.importantPoints.map((point, i) => (
                      <li key={i} className="flex gap-2.5">
                        <CheckCircle2 className="w-4 h-4 mt-1 text-ok shrink-0" aria-hidden="true" />
                        <span className="text-prose text-ink-2 leading-relaxed hindi-text">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Section>
              ) : null}

              {/* Common mistakes */}
              {topic.commonMistakes?.length ? (
                <Section id="mistakes" title="Where students slip">
                  <Callout kind="danger" label="Students often get this wrong">
                    <ul className="space-y-2">
                      {topic.commonMistakes.map((m, i) => (
                        <li key={i} className="text-base leading-relaxed hindi-text">{m}</li>
                      ))}
                    </ul>
                  </Callout>
                </Section>
              ) : null}

              {/* Exam perspective */}
              {topic.examPerspective ? (
                <Section id="exam" title="How the exam asks it">
                  <Callout kind="exam" label="How this is asked">
                    <p className="hindi-text">{topic.examPerspective}</p>
                  </Callout>
                </Section>
              ) : null}

              {/* Quick revision */}
              {topic.quickRevision ? (
                <Section id="revision" title="Quick revision" icon={Zap}>
                  <div className="well px-4 py-3.5">
                    <p className="text-prose text-ink-2 leading-relaxed hindi-text">{topic.quickRevision}</p>
                  </div>
                </Section>
              ) : null}

              {/* Practice */}
              {topic.practiceTask ? (
                <Section id="practice" title="Try it yourself">
                  <TryItYourself
                    task={topic.practiceTask}
                    hints={topic.hints || []}
                    starterCode={topic.starterCode || ''}
                    solutionCode={topic.solutionCode || topic.codeExample || ''}
                  />
                </Section>
              ) : null}

              {/* Self-check */}
              {topic.mcqs?.length ? (
                <Section id="check" title="Check yourself">
                  <MicroQuiz topicSlug={topic.slug} questions={topic.mcqs} />
                </Section>
              ) : null}
            </article>

            {/* --------------------------------------------- after the note */}
            <div className="mt-12 max-w-measure space-y-8 no-print">
              <TopicNotesEditor topicSlug={topic.slug} topicTitle={topic.title} />

              {related.length ? (
                <section>
                  <h2 className="text-h3 font-semibold text-ink mb-3 flex items-center gap-2">
                    <Compass className="w-[1.05rem] h-[1.05rem] text-ink-3" aria-hidden="true" />
                    Related topics
                  </h2>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/units/${r.unitSlug}/topics/${r.slug}`}
                          className="card-link group flex items-center gap-2 p-3"
                        >
                          <span className="min-w-0 flex-1">
                            <span className="block text-base text-ink leading-snug truncate">{r.title}</span>
                            <span className="block text-xs text-ink-4">Unit {String(r.unit).padStart(2, '0')}</span>
                          </span>
                          <ArrowRight className="w-4 h-4 text-ink-4 group-hover:text-accent transition-colors shrink-0" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              <PrevNext
                prev={prevTopic ? { ...prevTopic, href: `/units/${prevTopic.unitSlug}/topics/${prevTopic.slug}` } : null}
                next={nextTopic ? { ...nextTopic, href: `/units/${nextTopic.unitSlug}/topics/${nextTopic.slug}` } : null}
              />

              <Panel className="p-4 flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-base font-medium text-ink">Finished this topic?</p>
                  <p className="text-sm text-ink-3">Test it with the Unit {unitNumber} question bank.</p>
                </div>
                <Button variant="primary" size="sm" href={`/mcqs/${topic.unitSlug}`} iconRight={ArrowRight}>
                  Practise Unit {unitNumber}
                </Button>
              </Panel>
            </div>
          </div>

          {/* -------------------------------------------------- TOC rail */}
          <div className="hidden lg:block">
            <TableOfContents items={tocItems} refreshKey={language} variant="rail" />
            <div className="mt-6 pt-5 border-t border-line space-y-2">
              <MetaItem icon={Target}>Unit {unitNumber} · {topic.unitTitle}</MetaItem>
              {topic.relatedTopics?.length ? (
                <MetaItem icon={Compass}>{topic.relatedTopics.length} related topics</MetaItem>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
