// Aggregated Topics Data for all 8 Units
import { unit1Topics } from './topics/unit1Topics.js';
import { unit2Topics } from './topics/unit2Topics.js';
import { unit3Topics } from './topics/unit3Topics.js';
import { unit4Topics } from './topics/unit4Topics.js';
import { unit5Topics } from './topics/unit5Topics.js';
import { unit6Topics } from './topics/unit6Topics.js';
import { unit7Topics } from './topics/unit7Topics.js';
import { unit8Topics } from './topics/unit8Topics.js';

export const allTopics = [
  ...unit1Topics,
  ...unit2Topics,
  ...unit3Topics,
  ...unit4Topics,
  ...unit5Topics,
  ...unit6Topics,
  ...unit7Topics,
  ...unit8Topics,
];

// Map by slug for fast O(1) lookup
export const topicsBySlug = allTopics.reduce((acc, topic) => {
  acc[topic.slug] = topic;
  return acc;
}, {});

// Backward compatibility alias for legacy merged slug
if (topicsBySlug['css-box-model']) {
  topicsBySlug['css-properties-background-block-box-list-border-positioning'] = topicsBySlug['css-box-model'];
}

// Map by unit number
export const topicsByUnit = {
  1: unit1Topics,
  2: unit2Topics,
  3: unit3Topics,
  4: unit4Topics,
  5: unit5Topics,
  6: unit6Topics,
  7: unit7Topics,
  8: unit8Topics,
};

// Helper: Get adjacent topics (previous and next)
export function getAdjacentTopics(currentSlug) {
  const index = allTopics.findIndex(t => t.slug === currentSlug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? allTopics[index - 1] : null,
    next: index < allTopics.length - 1 ? allTopics[index + 1] : null,
  };
}
