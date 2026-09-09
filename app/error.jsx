'use client';

import React, { useEffect } from 'react';
import { RotateCcw, Home, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui';

/**
 * Says what happened, what to do, and gives a way back — rather than a bare
 * "Something went wrong."
 */
export default function Error({ error, reset }) {
  useEffect(() => {
    // Surfaced in the browser console so a real failure is diagnosable.
    console.error('Route error:', error);
  }, [error]);

  return (
    <div className="shell py-20 sm:py-28">
      <div className="max-w-measure">
        <div className="w-10 h-10 rounded-xl bg-danger-soft border border-danger-line grid place-items-center mb-5">
          <AlertTriangle className="w-5 h-5 text-danger" aria-hidden="true" />
        </div>

        <p className="eyebrow mb-3">Something went wrong</p>
        <h1 className="text-h1 font-semibold text-ink">This page could not be loaded</h1>
        <p className="mt-4 text-lead text-ink-2 leading-relaxed">
          The error was on our side, not yours. Trying again usually fixes it — your saved progress,
          bookmarks and notes are stored in this browser and are unaffected.
        </p>

        {error?.digest ? (
          <p className="mt-4 text-xs text-ink-4 font-mono">Reference: {error.digest}</p>
        ) : null}

        <div className="mt-7 flex flex-wrap gap-3">
          <Button variant="primary" onClick={() => reset()} icon={RotateCcw}>Try again</Button>
          <Button href="/" icon={Home}>Go to the homepage</Button>
        </div>
      </div>
    </div>
  );
}
