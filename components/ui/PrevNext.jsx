import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

/**
 * "Where can I go next?" — the pair of links that turns a pile of notes into
 * a sequence a student can actually work through.
 */
export default function PrevNext({ prev, next, basePath = '', className = '' }) {
  if (!prev && !next) return null;

  const hrefFor = (item) => item.href || `${basePath}/${item.slug}`;

  return (
    <nav aria-label="Topic navigation" className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      {prev ? (
        <Link href={hrefFor(prev)} className="card-link group p-4 flex items-start gap-3">
          <ArrowLeft className="w-4 h-4 mt-0.5 text-ink-4 group-hover:text-accent transition-colors shrink-0" aria-hidden="true" />
          <span className="min-w-0">
            <span className="block eyebrow mb-1">Previous</span>
            <span className="block text-base font-medium text-ink leading-snug line-clamp-2">{prev.title}</span>
            {prev.hindiTitle ? (
              <span className="block mt-0.5 text-xs text-hindi hindi-text line-clamp-1" lang="hi">{prev.hindiTitle}</span>
            ) : null}
          </span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}

      {next ? (
        <Link href={hrefFor(next)} className="card-link group p-4 flex items-start gap-3 sm:text-right sm:flex-row-reverse">
          <ArrowRight className="w-4 h-4 mt-0.5 text-ink-4 group-hover:text-accent transition-colors shrink-0" aria-hidden="true" />
          <span className="min-w-0">
            <span className="block eyebrow mb-1">Next</span>
            <span className="block text-base font-medium text-ink leading-snug line-clamp-2">{next.title}</span>
            {next.hindiTitle ? (
              <span className="block mt-0.5 text-xs text-hindi hindi-text line-clamp-1" lang="hi">{next.hindiTitle}</span>
            ) : null}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
