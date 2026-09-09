import React from 'react';
import { notFound } from 'next/navigation';
import { getModules, getCourseTopics } from '@/lib/navigation';
import { cccTopicsData } from '@/data/cccTopicsData';
import CCCTopicPage from './Client';

/* Server shell: owns metadata and static params; the reader itself is a client
   component because it uses the language and progress contexts. */

export function generateStaticParams() {
  return getModules('ccc').flatMap((c) =>
    c.topics.map((t) => ({ chapterSlug: c.key, topicSlug: t.slug })),
  );
}

export function generateMetadata({ params }) {
  const chapterSlug = decodeURIComponent(params?.chapterSlug || '');
  const topicSlug = decodeURIComponent(params?.topicSlug || '');
  const topic = (cccTopicsData[chapterSlug] || []).find((t) => t.slug === topicSlug);

  if (!topic) {
    const listed = getCourseTopics('ccc').find((t) => t.slug === topicSlug);
    return listed ? { title: listed.title } : { title: 'Topic not found' };
  }

  const summary = (topic.definitionEnglish || topic.simpleWords || '')
    .replace(/\s+/g, ' ')
    .slice(0, 155);

  return {
    title: `${topic.title} — CCC`,
    description: summary || `${topic.title} explained in English and हिन्दी for the NIELIT CCC exam.`,
    alternates: { canonical: `/ccc/chapters/${chapterSlug}/topics/${topicSlug}` },
    openGraph: { type: 'article', title: topic.title, description: summary },
  };
}

export default function Page({ params }) {
  const chapterSlug = decodeURIComponent(params?.chapterSlug || '');
  const topicSlug = decodeURIComponent(params?.topicSlug || '');
  const topic = (cccTopicsData[chapterSlug] || []).find((t) => t.slug === topicSlug) || null;

  if (!topic) notFound();

  return <CCCTopicPage params={params} topic={topic} />;
}
