'use client';

import React, { useState, useRef, useCallback, useMemo } from 'react';
import { Copy, Check, Play, EyeOff, Terminal } from 'lucide-react';
import { highlight, languageLabel } from '@/lib/highlight';

/**
 * The code presentation contract used across the whole platform:
 *
 *   CODE  →  OUTPUT  →  EXPLANATION
 *
 * Language label and copy live in the bar so they never fight the code for
 * attention. `runnable` adds a sandboxed live preview for HTML examples —
 * students see the result without leaving the note.
 */

export default function CodeBlock({
  code = '',
  language = '',
  title,
  runnable = false,
  output,
  explanation,
  className = '',
  maxHeight,
}) {
  const [copied, setCopied] = useState(false);
  const [previewing, setPreviewing] = useState(false);
  const timer = useRef(null);

  const html = useMemo(() => highlight(code, language), [code, language]);
  const label = title || languageLabel(language);
  const canPreview = runnable && /^(html|markup|htm)$/i.test(language);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked (http, permissions) — button simply does nothing */
    }
  }, [code]);

  return (
    <div className={className}>
      <figure className="code-block">
        <figcaption className="code-block__bar">
          <span className="code-block__lang">{label}</span>

          <div className="flex items-center gap-1">
            {canPreview ? (
              <button
                type="button"
                onClick={() => setPreviewing((v) => !v)}
                className="code-block__copy"
                aria-pressed={previewing}
              >
                {previewing ? <EyeOff className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {previewing ? 'Hide result' : 'Run'}
              </button>
            ) : null}

            <button
              type="button"
              onClick={copy}
              className="code-block__copy"
              aria-label={copied ? 'Code copied' : 'Copy code to clipboard'}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-ok" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </figcaption>

        <pre style={maxHeight ? { maxHeight, overflowY: 'auto' } : undefined} tabIndex={0}>
          <code dangerouslySetInnerHTML={{ __html: html }} />
        </pre>

        {canPreview && previewing ? (
          <div className="border-t border-line">
            <div className="px-3.5 py-1.5 bg-surface border-b border-line">
              <span className="code-block__lang">Live result</span>
            </div>
            <iframe
              title="Live preview of the code example"
              srcDoc={code}
              sandbox="allow-scripts"
              className="w-full h-64 bg-white"
              loading="lazy"
            />
          </div>
        ) : null}
      </figure>

      {output ? (
        <div className="mt-2 well overflow-hidden">
          <div className="flex items-center gap-1.5 px-3.5 py-2 border-b border-line">
            <Terminal className="w-3.5 h-3.5 text-ink-3" aria-hidden="true" />
            <span className="code-block__lang">Output</span>
          </div>
          <div className="px-3.5 py-3 font-mono text-sm text-ink-2 whitespace-pre-wrap">{output}</div>
        </div>
      ) : null}

      {explanation ? (
        <p className="mt-2.5 text-base text-ink-2 leading-relaxed">{explanation}</p>
      ) : null}
    </div>
  );
}
