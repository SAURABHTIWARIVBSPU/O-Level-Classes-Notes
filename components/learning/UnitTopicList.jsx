'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { ProgressBar } from '@/components/ui';
import { useProgress } from '@/lib/progressContext';

/**
 * The topic checklist on a unit/chapter overview page.
 *
 * Kept as a client leaf so the surrounding page can stay a Server Component
 * (and therefore export real metadata). Each row is a link to the topic; the
 * tick is a separate control, so tapping the row never toggles completion by
 * accident.
 */
export default function UnitTopicList({ topics = [], showProgress = true, unitWord = 'Unit' }) {
  const { completedTopics, toggleTopicCompleted, isLoaded } = useProgress();
  const completed = Array.isArray(completedTopics) ? completedTopics : [];
  const doneCount = topics.filter((t) => completed.includes(t.slug)).length;
  const pct = topics.length ? Math.round((doneCount / topics.length) * 100) : 0;

  return (
    <div>
      {showProgress ? (
        <div className="mb-5">
          {isLoaded ? (
            <ProgressBar
              value={pct}
              label={`${doneCount} of ${topics.length} topics marked done`}
              tone={pct === 100 ? 'ok' : 'accent'}
            />
          ) : (
            <div className="skeleton h-8 rounded-md" />
          )}
        </div>
      ) : null}

      <ol className="panel divide-y divide-line overflow-hidden">
        {topics.map((topic, i) => {
          const isDone = completed.includes(topic.slug);
          return (
            <li key={topic.slug} className="flex items-stretch">
              <button
                type="button"
                onClick={() => toggleTopicCompleted(topic.slug)}
                aria-pressed={isDone}
                aria-label={isDone ? `Mark "${topic.title}" as not done` : `Mark "${topic.title}" as done`}
                className="shrink-0 w-12 grid place-items-center hover:bg-sunken transition-colors"
              >
                {isDone
                  ? <CheckCircle2 className="w-4.5 h-4.5 text-ok" aria-hidden="true" />
                  : <Circle className="w-4.5 h-4.5 text-ink-4" aria-hidden="true" />}
              </button>

              <Link
                href={topic.href}
                className="group flex-1 min-w-0 flex items-center gap-3 py-3 pr-3 hover:bg-sunken transition-colors"
              >
                <span className="font-mono text-2xs text-ink-4 tabular-nums shrink-0 w-5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block text-base leading-snug ${isDone ? 'text-ink-3' : 'text-ink'} group-hover:text-accent transition-colors`}>
                    {topic.title}
                  </span>
                  {topic.hindiTitle ? (
                    <span className="block text-sm text-hindi hindi-text truncate" lang="hi">{topic.hindiTitle}</span>
                  ) : null}
                </span>
                <ArrowRight className="w-4 h-4 text-ink-4 group-hover:text-accent transition-colors shrink-0" aria-hidden="true" />
              </Link>
            </li>
          );
        })}
      </ol>

      <p className="sr-only" aria-live="polite">
        {doneCount} of {topics.length} topics in this {unitWord.toLowerCase()} marked done.
      </p>
    </div>
  );
}
