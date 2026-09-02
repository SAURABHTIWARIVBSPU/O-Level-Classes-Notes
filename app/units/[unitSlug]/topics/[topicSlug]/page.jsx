'use client';

import React, { useEffect } from 'react';
import { notFound } from 'next/navigation';
import { allTopics, topicsBySlug, getAdjacentTopics } from '@/data/topicsData';
import TopicContent from '@/components/learning/TopicContent';
import { useProgress } from '@/lib/progressContext';

export default function TopicPage({ params }) {
  const rawSlug = params?.topicSlug || '';
  const topicSlug = decodeURIComponent(rawSlug);
  const topic = topicsBySlug[topicSlug] || allTopics.find((t) => t.slug === topicSlug);

  if (!topic) {
    notFound();
  }

  const { prev, next } = getAdjacentTopics(topicSlug);
  const { updateLastVisited } = useProgress();

  useEffect(() => {
    if (topic) {
      updateLastVisited({
        slug: topic.slug,
        unitSlug: topic.unitSlug,
        title: topic.title,
      });
    }
  }, [topic]);

  return <TopicContent topic={topic} prevTopic={prev} nextTopic={next} />;
}
