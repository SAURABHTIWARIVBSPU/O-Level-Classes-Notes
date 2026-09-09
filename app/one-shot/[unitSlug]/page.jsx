/**
 * O Level — one-shot run-through for a single unit.
 *
 * Server Component on purpose: the topic bodies are hundreds of KB, and this
 * page is one long read. Rendering it on the server keeps that data off the
 * client bundle and lets the route export real metadata.
 *
 * Interactivity is pushed to leaves that already are client components:
 * ReadingProgress (the progress line under the header) and TableOfContents
 * (the scroll-spied rail / mobile disclosure).
 */

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowUpRight, CheckCircle2, Clock, GraduationCap, ListChecks, Repeat,
} from 'lucide-react';
import {
  Breadcrumbs,
  Button,
  Callout,
  MetaItem,
  PageHeader,
  PrevNext,
  ReadingProgress,
  TableOfContents,
} from '@/components/ui';
import { unitsData } from '@/data/syllabusData';
import { allTopics, topicsByUnit } from '@/data/topicsData';

const HEADING_SCROLL = 'scroll-mt-[calc(var(--header-h)+1.5rem)]';

/**
 * lucide icons are forwardRef objects, which cannot cross the Server → Client
 * boundary as a prop. In Server Components they are rendered as children of
 * MetaItem instead of being handed over via `icon=`.
 */
const META_ICON = 'w-3.5 h-3.5 shrink-0';

/** Rough sitting length, rounded to five minutes, from the topic count. */
function minutesFor(topicCount) {
  return Math.max(10, Math.round((topicCount * 1.5) / 5) * 5);
}

/**
 * `unitsData[].unitNumber` is a zero-padded string ("01") while `topicsByUnit`
 * is keyed by number, so the lookup has to be coerced. The unitSlug filter is
 * the belt-and-braces fallback.
 */
function topicsForUnit(unit) {
  const byNumber = topicsByUnit[Number(unit.unitNumber)];
  if (byNumber && byNumber.length) return byNumber;
  return allTopics.filter((topic) => topic.unitSlug === unit.slug);
}

function findUnit(slug) {
  return unitsData.find((unit) => unit.slug === slug) || null;
}

export function generateStaticParams() {
  return unitsData.map((unit) => ({ unitSlug: unit.slug }));
}

export async function generateMetadata({ params }) {
  const resolved = await Promise.resolve(params);
  const unit = findUnit(decodeURIComponent(resolved?.unitSlug || ''));

  if (!unit) {
    return { title: 'Unit not found', description: 'This one-shot revision unit does not exist.' };
  }

  const count = topicsForUnit(unit).length;

  return {
    title: `${unit.title} — one-shot revision`,
    description:
      `All ${count} topics of NIELIT O Level Unit ${Number(unit.unitNumber)}, ${unit.title}, condensed into one sitting: ` +
      'definitions in English and हिन्दी, plain-language explanations, exam points and common mistakes.',
  };
}

/* --------------------------------------------------------------- section */

function TopicSection({ topic, index, total, unitSlug }) {
  return (
    <section id={`topic-${topic.slug}`} className={HEADING_SCROLL}>
      <h2 id={topic.slug} className={`text-h2 font-semibold text-ink ${HEADING_SCROLL}`}>
        {topic.title}
      </h2>

      <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1">
        {topic.hindiTitle ? (
          <p className="text-base text-hindi hindi-text" lang="hi">{topic.hindiTitle}</p>
        ) : null}
        <p className="text-xs text-ink-3 tabular-nums">
          Topic {index + 1} of {total}
        </p>
        <Link
          href={`/units/${unitSlug}/topics/${topic.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline underline-offset-2"
        >
          Full notes
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>

      {/* Definition — bordered, quiet, the anchor of the section */}
      {topic.definitionEnglish || topic.definitionHindi ? (
        <div className="mt-4 border-l-2 border-line-strong pl-4">
          {topic.definitionEnglish ? (
            <p className="text-prose text-ink-2 max-w-measure">{topic.definitionEnglish}</p>
          ) : null}
          {topic.definitionHindi ? (
            <p className="mt-2 text-prose text-ink-2 hindi-text max-w-measure" lang="hi">
              {topic.definitionHindi}
            </p>
          ) : null}
        </div>
      ) : null}

      {topic.simpleWords ? (
        <Callout kind="analogy" className="max-w-measure" lang="hi">
          <p className="hindi-text">{topic.simpleWords}</p>
        </Callout>
      ) : null}

      {topic.importantPoints?.length ? (
        <div className="mt-5">
          <p className="eyebrow mb-2">Key points</p>
          <ul className="space-y-2 max-w-measure">
            {topic.importantPoints.map((point, i) => (
              <li key={i} className="flex gap-2.5">
                <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-ok" aria-hidden="true" />
                <span className="text-base text-ink-2 leading-relaxed hindi-text" lang="hi">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {topic.commonMistakes?.length ? (
        <Callout kind="danger" className="max-w-measure">
          <ul className="space-y-1.5">
            {topic.commonMistakes.map((mistake, i) => (
              <li key={i} className="hindi-text" lang="hi">{mistake}</li>
            ))}
          </ul>
        </Callout>
      ) : null}

      {topic.examPerspective ? (
        <Callout kind="exam" className="max-w-measure" lang="hi">
          <p className="hindi-text">{topic.examPerspective}</p>
        </Callout>
      ) : null}

      {topic.quickRevision ? (
        <div className="mt-5 well p-4 max-w-measure">
          <p className="eyebrow mb-1.5 inline-flex items-center gap-1.5">
            <Repeat className="w-3.5 h-3.5" aria-hidden="true" />
            Quick revision
          </p>
          <p className="text-base text-ink-2 leading-relaxed hindi-text" lang="hi">
            {topic.quickRevision}
          </p>
        </div>
      ) : null}
    </section>
  );
}

/* ------------------------------------------------------------------ page */

export default async function UnitOneShotPage({ params }) {
  const resolved = await Promise.resolve(params);
  const unitSlug = decodeURIComponent(resolved?.unitSlug || '');
  const unit = findUnit(unitSlug);

  if (!unit) notFound();

  const topics = topicsForUnit(unit);
  const number = Number(unit.unitNumber);
  const index = unitsData.findIndex((u) => u.slug === unit.slug);
  const previous = index > 0 ? unitsData[index - 1] : null;
  const next = index < unitsData.length - 1 ? unitsData[index + 1] : null;

  return (
    <div className="shell py-8 sm:py-10">
      <ReadingProgress targetSelector="[data-toc-root]" />

      <Breadcrumbs
        items={[
          { label: 'One-shot revision', href: '/one-shot' },
          { label: `Unit ${number}: ${unit.title}` },
        ]}
        className="mb-5 no-print"
      />

      <PageHeader
        eyebrow={`One-shot · Unit ${number}`}
        title={unit.title}
        hindiTitle={unit.hindiTitle}
        description={unit.description}
        actions={
          <>
            <Button variant="secondary" href={`/notes/${unit.slug}`}>Full unit notes</Button>
            <Button variant="secondary" href={`/mcqs/${unit.slug}`}>Practise MCQs</Button>
          </>
        }
        meta={[
          <MetaItem key="topics">
            <ListChecks className={META_ICON} aria-hidden="true" />
            <span className="tabular-nums">{topics.length}</span> topics
          </MetaItem>,
          <MetaItem key="time">
            <Clock className={META_ICON} aria-hidden="true" />≈{' '}
            <span className="tabular-nums">{minutesFor(topics.length)}</span> min in one sitting
          </MetaItem>,
          <MetaItem key="marks">
            <GraduationCap className={META_ICON} aria-hidden="true" />
            {unit.marksWeight}
          </MetaItem>,
        ]}
      />

      {topics.length ? (
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-10 lg:items-start">
          <div className="lg:col-start-2 lg:row-start-1 mb-8 lg:mb-0 no-print">
            <TableOfContents title="Topics in this unit" />
          </div>

          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
            <article data-toc-root className="space-y-14">
              {topics.map((topic, i) => (
                <TopicSection
                  key={topic.slug}
                  topic={topic}
                  index={i}
                  total={topics.length}
                  unitSlug={unit.slug}
                />
              ))}
            </article>

            <div className="mt-14 pt-8 border-t border-line no-print">
              <p className="eyebrow mb-3">Keep going</p>
              <PrevNext
                prev={
                  previous
                    ? {
                        title: `Unit ${Number(previous.unitNumber)}: ${previous.title}`,
                        hindiTitle: previous.hindiTitle,
                        href: `/one-shot/${previous.slug}`,
                      }
                    : null
                }
                next={
                  next
                    ? {
                        title: `Unit ${Number(next.unitNumber)}: ${next.title}`,
                        hindiTitle: next.hindiTitle,
                        href: `/one-shot/${next.slug}`,
                      }
                    : null
                }
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="panel px-6 py-14 text-center">
          <h2 className="text-h4 font-semibold text-ink">No topic content for this unit yet</h2>
          <p className="mt-1.5 text-base text-ink-3 max-w-sm mx-auto leading-relaxed">
            The syllabus lists this unit, but its topic bodies have not been written. The full unit
            notes cover the same ground.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Button variant="primary" href={`/notes/${unit.slug}`}>Read the unit notes</Button>
            <Button variant="secondary" href="/one-shot">Choose another unit</Button>
          </div>
        </div>
      )}
    </div>
  );
}
