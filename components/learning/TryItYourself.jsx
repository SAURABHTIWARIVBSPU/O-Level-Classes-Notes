'use client';

import React, { useState } from 'react';
import { Lightbulb, Eye, EyeOff, Play } from 'lucide-react';
import { Button, Panel, CodeBlock } from '@/components/ui';

/**
 * The practice task at the end of a topic.
 *
 * Hints and the solution are behind disclosures on purpose: showing the answer
 * next to the question is the fastest way to stop a student thinking.
 */
export default function TryItYourself({
  task = 'Practise this concept by writing the code yourself.',
  hindiTask,
  hints = [],
  starterCode = '',
  solutionCode = '',
}) {
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Panel className="p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="eyebrow mb-1.5">Your turn</p>
          <p className="text-prose text-ink leading-relaxed hindi-text">{task}</p>
          {hindiTask ? (
            <p className="mt-1.5 text-base text-ink-3 leading-relaxed hindi-text" lang="hi">{hindiTask}</p>
          ) : null}
        </div>
        <Button variant="soft" size="sm" href="/playground" icon={Play} className="shrink-0">
          Open playground
        </Button>
      </div>

      {starterCode ? (
        <CodeBlock className="mt-4" code={starterCode} language="html" title="Starter code" />
      ) : null}

      {(hints.length > 0 || solutionCode) ? (
        <div className="mt-4 pt-4 border-t border-line flex flex-wrap gap-2">
          {hints.length > 0 ? (
            <Button
              size="sm"
              variant="ghost"
              icon={Lightbulb}
              onClick={() => setShowHints((v) => !v)}
              aria-expanded={showHints}
              aria-controls="tiy-hints"
            >
              {showHints ? 'Hide hints' : `Show ${hints.length} hint${hints.length === 1 ? '' : 's'}`}
            </Button>
          ) : null}

          {solutionCode ? (
            <Button
              size="sm"
              variant="ghost"
              icon={showSolution ? EyeOff : Eye}
              onClick={() => setShowSolution((v) => !v)}
              aria-expanded={showSolution}
              aria-controls="tiy-solution"
            >
              {showSolution ? 'Hide solution' : 'Show solution'}
            </Button>
          ) : null}
        </div>
      ) : null}

      {showHints && hints.length ? (
        <ol id="tiy-hints" className="mt-3 space-y-2 list-decimal pl-5">
          {hints.map((h, i) => (
            <li key={i} className="text-base text-ink-2 leading-relaxed marker:text-ink-4">{h}</li>
          ))}
        </ol>
      ) : null}

      {showSolution && solutionCode ? (
        <div id="tiy-solution" className="mt-3">
          <CodeBlock code={solutionCode} language="html" title="One solution" runnable />
        </div>
      ) : null}
    </Panel>
  );
}
