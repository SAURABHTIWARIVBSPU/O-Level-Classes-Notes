'use client';

import React, { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, Circle, Clock, Hash, Layers } from 'lucide-react';

import {
  Badge,
  Breadcrumbs,
  Button,
  Callout,
  MetaItem,
  PrevNext,
  ReadingProgress,
  TableOfContents,
} from '@/components/ui';
import CourseSidebar from '@/components/layout/CourseSidebar';
import MarkdownRenderer from '@/components/common/MarkdownRenderer';
import MicroQuiz from '@/components/learning/MicroQuiz';
import { getModule, getAdjacentInCourse } from '@/lib/navigation';
import { useLanguage } from '@/lib/languageContext';
import { useProgress } from '@/lib/progressContext';

/**
 * The CCC reading page.
 *
 * Section order follows DESIGN_SYSTEM §7, mapped onto the CCC topic fields.
 * Anything the data does not carry is skipped silently — never an empty shell.
 *
 * Layout: CourseSidebar | article | TableOfContents at xl, article | TOC at lg,
 * one column below that (TOC collapses to a single row above the text, the
 * sidebar becomes the bottom-left "Contents" sheet trigger).
 *
 * Client component: it reads useLanguage() for the EN/हिन्दी pairs and
 * useProgress() for the mark-as-done state, neither of which exists on the
 * server. The topic itself is resolved by the server shell in ./page.jsx and
 * passed in — importing cccTopicsData here would ship ~460KB of chapter bodies
 * to the browser for a page that only needs one of them.
 */

const asList = (value) =>
  (Array.isArray(value) ? value : [])
    .map((item) =>
      typeof item === 'string'
        ? item
        : (item && (item.text || item.point || item.mistake || item.title || item.desc)) || '',
    )
    .filter(Boolean);

export default function CCCTopicPage({ params, topic }) {
  const { language } = useLanguage();
  const { completedTopics, toggleTopicCompleted, updateLastVisited } = useProgress();

  const chapterSlug = decodeURIComponent(params?.chapterSlug || '');
  const topicSlug = decodeURIComponent(params?.topicSlug || '');

  const chapter = getModule('ccc', chapterSlug);

  const { prev, next } = useMemo(
    () => (topic ? getAdjacentInCourse('ccc', topicSlug) : { prev: null, next: null }),
    [topic, topicSlug],
  );

  useEffect(() => {
    if (topic) {
      updateLastVisited({ slug: topic.slug, unitSlug: chapterSlug, title: topic.title, course: 'ccc' });
    }
  }, [topic, chapterSlug, updateLastVisited]);

  if (!chapter || !topic) notFound();

  /* Language: 'both' | 'en' | 'hi'. Only genuinely bilingual pairs are switched —
     English-only content stays visible in Hindi mode, or the page would be blank. */
  const showEnglish = language !== 'hi';
  const showHindi = language !== 'en';

  const done = Array.isArray(completedTopics) ? completedTopics : [];
  const isCompleted = done.includes(topic.slug);

  const points = asList(topic.importantPoints);
  const mistakes = asList(topic.commonMistakes);
  const examTips = asList(topic.examTips);
  const quiz = Array.isArray(topic.microQuiz) ? topic.microQuiz : [];
  const chapterTopics = chapter?.topics || [];
  const index = chapterTopics.findIndex((t) => t.slug === topic.slug);
  const siblings = chapterTopics.filter((t) => t.slug !== topic.slug);

  const examLevel = (topic.examImportance || '').split('(')[0].trim();
  const chapterNumber = String(chapter.number || '').replace(/^0+/, '') || chapter.number;
  const mcqHref = `/ccc/mcqs/${chapter.key}`;

  return (
    <div className="shell shell-wide py-8 sm:py-10">
      <ReadingProgress />

      <Breadcrumbs
        className="mb-5"
        items={[
          { label: 'CCC', href: '/ccc' },
          { label: `Chapter ${chapterNumber}`, href: chapter.href },
          { label: topic.title },
        ]}
      />

      <div className="grid gap-x-8 gap-y-6 lg:grid-cols-[minmax(0,1fr)_13rem] xl:grid-cols-[15rem_minmax(0,1fr)_13rem] xl:items-start">
        <CourseSidebar
          courseKey="ccc"
          activeModule={chapter.key}
          activeTopic={topic.slug}
          title="CCC chapters"
          className="xl:col-start-1 xl:row-start-1"
        />

        <TableOfContents
          title="On this page"
          className="order-1 lg:order-none lg:col-start-2 lg:row-start-1 xl:col-start-3"
        />

        <div className="order-2 min-w-0 lg:order-none lg:col-start-1 lg:row-start-1 xl:col-start-2">
          <header className="pb-6 mb-8 border-b border-line">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge tone="accent" mono>
                Topic {index + 1} of {chapterTopics.length}
              </Badge>
              {examLevel ? <Badge tone="exam">Exam weight: {examLevel}</Badge> : null}
              {isCompleted ? (
                <Badge tone="ok" icon={CheckCircle2}>
                  Completed
                </Badge>
              ) : null}
            </div>

            <h1 className="text-h1 font-semibold text-ink">{topic.title}</h1>

            {showHindi && topic.hindiTitle ? (
              <p className="mt-1.5 text-lead text-hindi hindi-text" lang="hi">
                {topic.hindiTitle}
              </p>
            ) : null}

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <MetaItem icon={Layers}>
                <Link href={chapter.href} className="hover:text-ink transition-colors duration-fast">
                  Chapter {chapterNumber} · {chapter.title}
                </Link>
              </MetaItem>
              {chapter.hours ? <MetaItem icon={Clock}>{chapter.hours} hours</MetaItem> : null}
              {chapter.marks ? <MetaItem icon={Hash}>{chapter.marks}</MetaItem> : null}

              <Button
                size="sm"
                variant={isCompleted ? 'soft' : 'secondary'}
                icon={isCompleted ? CheckCircle2 : Circle}
                aria-pressed={isCompleted}
                onClick={() => toggleTopicCompleted && toggleTopicCompleted(topic.slug)}
                className="ml-auto"
              >
                {isCompleted ? 'Marked as done' : 'Mark as done'}
              </Button>
            </div>
          </header>

          {/* ---------------------------------------------------- the reading */}
          <article data-toc-root className="prose-notes max-w-measure">
            {topic.definitionEnglish || topic.definitionHindi ? (
              <>
                <h2 id="definition">Definition</h2>
                <div className="well p-4 sm:p-5 space-y-4">
                  {showEnglish && topic.definitionEnglish ? (
                    <div>
                      <p className="eyebrow mb-1.5">English</p>
                      <p className="text-prose text-ink-2">{topic.definitionEnglish}</p>
                    </div>
                  ) : null}
                  {showHindi && topic.definitionHindi ? (
                    <div>
                      <p className="eyebrow mb-1.5 hindi-text" lang="hi">
                        हिन्दी
                      </p>
                      <p className="text-prose text-ink-2 hindi-text" lang="hi">
                        {topic.definitionHindi}
                      </p>
                    </div>
                  ) : null}
                  {/* Hindi-only reader with no Hindi definition still gets the anchor text */}
                  {!showEnglish && !topic.definitionHindi && topic.definitionEnglish ? (
                    <p className="text-prose text-ink-2">{topic.definitionEnglish}</p>
                  ) : null}
                </div>
              </>
            ) : null}

            {showHindi && topic.simpleWords ? (
              <>
                <h2 id="in-plain-terms">In plain terms</h2>
                <Callout kind="analogy" label="सरल शब्दों में" lang="hi">
                  <p className="hindi-text">{topic.simpleWords}</p>
                </Callout>
              </>
            ) : null}

            {topic.detailedExplanation ? (
              <>
                <h2 id="explanation">Detailed explanation</h2>
                <MarkdownRenderer content={topic.detailedExplanation} />
              </>
            ) : null}

            {topic.realWorldAnalogy ? (
              <>
                <h2 id="analogy">Real-world analogy</h2>
                <Callout kind="analogy" label="Think of it like this">
                  <p>{topic.realWorldAnalogy}</p>
                </Callout>
              </>
            ) : null}

            {points.length ? (
              <>
                <h2 id="key-points">Key points to remember</h2>
                <ul>
                  {points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </>
            ) : null}

            {mistakes.length ? (
              <>
                <h2 id="common-mistakes">Common mistakes</h2>
                <Callout kind="danger" label="Common mistake">
                  <ul>
                    {mistakes.map((mistake, i) => (
                      <li key={i}>{mistake}</li>
                    ))}
                  </ul>
                </Callout>
              </>
            ) : null}

            {topic.examImportance || examTips.length ? (
              <>
                <h2 id="exam">In the exam</h2>
                <Callout kind="exam" label="Exam point">
                  {topic.examImportance ? <p>{topic.examImportance}</p> : null}
                  {examTips.length ? (
                    <ul>
                      {examTips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  ) : null}
                </Callout>
              </>
            ) : null}

            {topic.quickRevision ? (
              <>
                <h2 id="quick-revision">Quick revision</h2>
                <div className="well p-4 sm:p-5">
                  <p className="eyebrow mb-1.5">One-minute recap</p>
                  <p className="text-prose text-ink-2">{topic.quickRevision}</p>
                </div>
              </>
            ) : null}

            {topic.practiceAssignment ? (
              <>
                <h2 id="practice">Practice task</h2>
                <div className="well p-4 sm:p-5">
                  <p className="eyebrow mb-1.5">Do this before moving on</p>
                  <p className="text-prose text-ink-2">{topic.practiceAssignment}</p>
                  <p className="mt-4">
                    <Button href={mcqHref} size="sm" variant="secondary">
                      Practise Chapter {chapterNumber} questions
                    </Button>
                  </p>
                </div>
              </>
            ) : null}
          </article>

          {/* ------------------------------------------- check yourself + next */}
          {quiz.length ? (
            <section aria-labelledby="check-yourself" className="mt-12">
              <h2 id="check-yourself" className="text-h2 font-semibold text-ink mb-4">
                Check yourself
              </h2>
              <MicroQuiz topicSlug={topic.slug} questions={quiz} />
            </section>
          ) : null}

          {siblings.length ? (
            <section aria-labelledby="related-topics" className="mt-12">
              <h2 id="related-topics" className="text-h2 font-semibold text-ink mb-1">
                More in this chapter
              </h2>
              <p className="text-base text-ink-2 mb-4 max-w-measure">
                The other topics of Chapter {chapterNumber}: {chapter.title}.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {siblings.map((t) => (
                  <li key={t.slug} className="min-w-0">
                    <Link
                      href={`/ccc/chapters/${chapter.key}/topics/${t.slug}`}
                      className="flex items-center min-h-11 px-3 py-2 rounded-md border border-line bg-surface text-sm text-ink-2 hover:text-ink hover:border-line-strong transition-colors duration-fast"
                    >
                      {t.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="mt-12 pt-8 border-t border-line space-y-4">
            <PrevNext prev={prev} next={next} />
            {!next ? (
              <p className="text-base text-ink-2">
                That is the last topic of the course.{' '}
                <Link href="/ccc/mock-test" className="text-accent hover:underline">
                  Take the full 100-question mock test
                </Link>{' '}
                to see where you stand.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
