'use client';

import React from 'react';
import { ArrowRight, RotateCcw, Flame } from 'lucide-react';
import { Button, ProgressBar } from '@/components/ui';
import { useProgress } from '@/lib/progressContext';

/**
 * The returning-student strip.
 *
 * Renders nothing at all for a first-time visitor — an empty "0% complete,
 * 0 day streak" panel on the homepage is discouraging and tells them nothing.
 * It appears only once there is real progress to continue from.
 */
export default function ContinueLearning({ className = '' }) {
  const { lastVisited, overallPercentage, completedCount, totalTopics, streak, isLoaded } = useProgress();

  if (!isLoaded) {
    return <div className={`skeleton h-24 rounded-xl ${className}`} />;
  }

  if (!lastVisited && completedCount === 0) return null;

  const href = lastVisited
    ? `/units/${lastVisited.unitSlug}/topics/${lastVisited.slug}`
    : '/units/unit-1';

  return (
    <section
      className={`panel p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 ${className}`}
      aria-label="Continue where you left off"
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <RotateCcw className="w-3.5 h-3.5 text-ink-3" aria-hidden="true" />
          <p className="eyebrow">Pick up where you left off</p>
          {streak > 1 ? (
            <span className="inline-flex items-center gap-1 text-xs text-ink-3">
              <Flame className="w-3.5 h-3.5 text-warn" aria-hidden="true" />
              {streak}-day streak
            </span>
          ) : null}
        </div>

        <p className="text-h4 font-semibold text-ink truncate">
          {lastVisited ? lastVisited.title : 'Start with Unit 01'}
        </p>

        <ProgressBar
          className="mt-3 max-w-sm"
          value={overallPercentage}
          label={`${completedCount} of ${totalTopics} O Level topics done`}
        />
      </div>

      <Button variant="primary" href={href} iconRight={ArrowRight} className="shrink-0 self-start sm:self-auto">
        Continue
      </Button>
    </section>
  );
}
