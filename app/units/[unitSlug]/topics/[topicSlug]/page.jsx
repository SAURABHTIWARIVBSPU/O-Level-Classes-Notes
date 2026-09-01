'use client';

import React, { useEffect } from 'react';
import { notFound } from 'next/navigation';
import { topicsBySlug, getAdjacentTopics } from '@/data/topicsData';
import TopicContent from '@/components/learning/TopicContent';
import { useProgress } from '@/lib/progressContext';

export default function TopicPage({ params }) {
  const { topicSlug } = params;
  const topic = topicsBySlug[topicSlug];

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
