import React from 'react';
import { notFound } from 'next/navigation';
import { allTopics, topicsBySlug, getAdjacentTopics } from '@/data/topicsData';
import TopicContent from '@/components/learning/TopicContent';

/**
 * Server shell. Keeps `generateMetadata` possible (a client component cannot
 * export it) and hands the topic to the client reader.
 */

function resolve(topicSlug) {
  return topicsBySlug[topicSlug] || allTopics.find((t) => t.slug === topicSlug) || null;
}

export function generateStaticParams() {
  return allTopics.map((t) => ({ unitSlug: t.unitSlug, topicSlug: t.slug }));
}

export function generateMetadata({ params }) {
  const topic = resolve(decodeURIComponent(params?.topicSlug || ''));
  if (!topic) return { title: 'Topic not found' };

  const summary = (topic.definitionEnglish || topic.simpleWords || '')
    .replace(/\s+/g, ' ')
    .slice(0, 155);

  return {
    title: `${topic.title} — Unit ${String(topic.unit).padStart(2, '0')}`,
    description: summary || `${topic.title} explained in English and हिन्दी for NIELIT O Level M2-R5.1.`,
    alternates: { canonical: `/units/${topic.unitSlug}/topics/${topic.slug}` },
    openGraph: {
      type: 'article',
      title: `${topic.title} · ${topic.unitTitle}`,
      description: summary,
    },
  };
}

export default function TopicPage({ params }) {
  const topicSlug = decodeURIComponent(params?.topicSlug || '');
  const topic = resolve(topicSlug);

  if (!topic) notFound();

  const { prev, next } = getAdjacentTopics(topicSlug);

  // Resolved here, on the server: doing it inside the client component would
  // pull the entire ~700KB topic dataset into the browser bundle.
  const related = (topic.relatedTopics || [])
    .map((slug) => topicsBySlug[slug])
    .filter(Boolean)
    .slice(0, 6)
    .map((t) => ({ slug: t.slug, title: t.title, unit: t.unit, unitSlug: t.unitSlug }));

  return <TopicContent topic={topic} prevTopic={prev} nextTopic={next} related={related} />;
}
