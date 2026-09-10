import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock } from 'lucide-react';
import ModuleIcon from './ModuleIcon';

/**
 * The one card used for anything course-shaped: a course, a unit, a chapter.
 *
 * White surface, soft border, subtle shadow, a 16:9 cover with a flat brand
 * tint (never a photo, never a gradient), then title → meta → description.
 * Always rendered `h-full` inside a grid so every card in a row is the same
 * height.
 */
export default function CourseCard({
  href,
  eyebrow,          // "Unit 04" / "CCC · Chapter 6" / "Course"
  title,
  hindiTitle,
  description,
  topics,
  hours,
  icon = 'BookOpen', // ModuleIcon name
  badge,            // e.g. "Free" / "25 marks"
  cta = 'Start',
  image,            // optional 16:9 banner image path
  className = '',
}) {
  return (
    <Link href={href} className={`card-link group h-full flex flex-col overflow-hidden ${className}`}>
      <div className="cover-16x9 relative overflow-hidden bg-sunken">
        {image ? (
          <>
            <img
              src={image}
              alt={title || eyebrow || 'Course cover'}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors" />
            <div className="absolute inset-0 flex items-start justify-between p-4">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-surface/95 border border-line text-xs font-semibold text-ink shadow-e1">
                {eyebrow}
              </span>
              <span className="w-10 h-10 rounded-lg bg-surface/95 border border-line grid place-items-center text-accent shadow-e1">
                <ModuleIcon name={icon} className="w-5 h-5" />
              </span>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-between px-5">
            <span className="text-sm font-semibold text-accent">{eyebrow}</span>
            <span className="w-12 h-12 rounded-xl bg-surface border border-accent-line grid place-items-center text-accent">
              <ModuleIcon name={icon} className="w-6 h-6" />
            </span>
          </div>
        )}
        {badge ? (
          <span className="absolute left-4 bottom-3 inline-flex items-center h-6 px-2 rounded-md bg-surface border border-line text-xs font-semibold text-ink shadow-e1">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-h3 font-semibold text-ink leading-snug group-hover:text-accent transition-colors line-clamp-2">
          {title}
        </h3>
        {hindiTitle ? (
          <p className="mt-0.5 text-sm text-ink-2 hindi-text truncate" lang="hi">{hindiTitle}</p>
        ) : null}
        {description ? (
          <p className="mt-2 text-sm text-ink-2 leading-relaxed line-clamp-2">{description}</p>
        ) : null}

        <div className="mt-auto pt-4 flex items-center justify-between gap-3 text-sm text-ink-2">
          <span className="flex items-center gap-4">
            {topics != null ? (
              <span className="inline-flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-ink-4" aria-hidden="true" />
                {topics} topics
              </span>
            ) : null}
            {hours ? (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-ink-4" aria-hidden="true" />
                {hours}h
              </span>
            ) : null}
          </span>
          <span className="font-semibold text-accent">{cta} →</span>
        </div>
      </div>
    </Link>
  );
}
