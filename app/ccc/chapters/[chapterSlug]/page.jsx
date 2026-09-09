import React from 'react';
import { getModules, getModule } from '@/lib/navigation';
import CCCChapterPage from './Client';

/* Server shell: the interactive chapter view is a client component and cannot
   export metadata, so this file owns the SEO and the static params. */

export function generateStaticParams() {
  return getModules('ccc').map((c) => ({ chapterSlug: c.key }));
}

export function generateMetadata({ params }) {
  const chapter = getModule('ccc', params.chapterSlug);
  if (!chapter) return { title: 'Chapter not found' };
  return {
    title: `Chapter ${chapter.number}: ${chapter.title}`,
    description: `${chapter.description} ${chapter.topics.length} topics, ${chapter.hours} hours, ${chapter.marks}. NIELIT CCC notes in English and हिन्दी.`,
    alternates: { canonical: `/ccc/chapters/${chapter.key}` },
  };
}

export default function Page({ params }) {
  return <CCCChapterPage params={params} />;
}
