/**
 * O Level — one-shot chooser.
 *
 * Server Component: a directory of eight self-contained runs, so a card is
 * genuinely earned here (each one is a separate, clickable thing).
 */

import React from 'react';
import { ArrowRight, BookOpen, Clock, Layers, ListChecks } from 'lucide-react';
import Link from 'next/link';
import {
  Breadcrumbs,
  Button,
  Callout,
  CardLink,
  MetaItem,
  PageHeader,
} from '@/components/ui';
import { getModules } from '@/lib/navigation';

export const metadata = {
  title: 'One-shot revision — a whole unit in one sitting',
  description:
    'Condensed run-throughs of all eight NIELIT O Level M2-R5.1 units: definitions, plain-language explanations, exam points and common mistakes for every syllabus topic, on one scrolling page per unit.',
};

const UNITS = getModules('olevel');

/**
 * lucide icons are forwardRef objects, which cannot cross the Server → Client
 * boundary as a prop. In Server Components they are rendered as children of
 * Button / MetaItem instead of being handed over via `icon=`.
 */
const META_ICON = 'w-3.5 h-3.5 shrink-0';

/** Rough sitting length, rounded to five minutes, from the topic count. */
function minutesFor(topicCount) {
  return Math.max(10, Math.round((topicCount * 1.5) / 5) * 5);
}

export default function OneShotHubPage() {
  const totalTopics = UNITS.reduce((sum, unit) => sum + unit.topics.length, 0);

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs items={[{ label: 'One-shot revision' }]} className="mb-5" />

      <PageHeader
        eyebrow="O Level · Revision"
        title="One-shot revision"
        hindiTitle="एक बैठक में पूरी यूनिट"
        description="A whole unit condensed into a single scrolling page — every syllabus topic with its definition, plain-language explanation, exam points and common mistakes. Pick the unit you are revising tonight."
        actions={
          <Button variant="secondary" href="/notes">
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            Full unit notes
          </Button>
        }
        meta={[
          <MetaItem key="units">
            <Layers className={META_ICON} aria-hidden="true" />
            <span className="tabular-nums">{UNITS.length}</span> units
          </MetaItem>,
          <MetaItem key="topics">
            <ListChecks className={META_ICON} aria-hidden="true" />
            <span className="tabular-nums">{totalTopics}</span> topics in total
          </MetaItem>,
        ]}
      />

      <Callout kind="tip" className="max-w-measure">
        <p>
          One-shot is for the night before. If you have longer, read the{' '}
          <Link href="/notes" className="text-accent underline underline-offset-2">
            full unit notes
          </Link>{' '}
          first and come back here to consolidate.
        </p>
      </Callout>

      <section aria-labelledby="units-heading" className="mt-10">
        <h2 id="units-heading" className="sr-only">Units</h2>

        <ul className="grid gap-4 sm:grid-cols-2">
          {UNITS.map((unit) => {
            const number = Number(unit.number);
            const minutes = minutesFor(unit.topics.length);

            return (
              <li key={unit.key}>
                <CardLink href={unit.oneShotHref} className="group h-full p-5 flex flex-col">
                  <p className="eyebrow">
                    Unit <span className="tabular-nums">{number}</span>
                  </p>

                  <h3 className="mt-2 text-h4 font-semibold text-ink leading-snug">
                    {unit.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-hindi hindi-text" lang="hi">
                    {unit.hindiTitle}
                  </p>

                  {unit.description ? (
                    <p className="mt-2.5 text-sm text-ink-2 leading-relaxed line-clamp-2">
                      {unit.description}
                    </p>
                  ) : null}

                  {unit.marks ? <p className="mt-2 text-xs text-ink-3">{unit.marks}</p> : null}

                  <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                    <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <MetaItem>
                        <ListChecks className={META_ICON} aria-hidden="true" />
                        <span className="tabular-nums">{unit.topics.length}</span> topics
                      </MetaItem>
                      <MetaItem>
                        <Clock className={META_ICON} aria-hidden="true" />≈{' '}
                        <span className="tabular-nums">{minutes}</span> min
                      </MetaItem>
                    </span>
                    <ArrowRight
                      className="w-4 h-4 shrink-0 text-ink-4 group-hover:text-accent transition-colors duration-fast"
                      aria-hidden="true"
                    />
                  </div>
                </CardLink>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
