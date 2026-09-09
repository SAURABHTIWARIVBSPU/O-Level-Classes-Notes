'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { getCourseTopics } from '@/lib/navigation';

/**
 * Local learning progress. Everything lives in localStorage — there is no
 * account — so every read and write is guarded: private-mode browsers throw on
 * access and the app must keep working without it.
 *
 * Perf note: this provider is mounted in the root layout, so it must NOT pull
 * in the full topic bodies (`data/topicsData` is ~700KB). The lightweight
 * syllabus index from `lib/navigation` carries the slugs and titles it needs.
 */

const ProgressContext = createContext(null);

const KEYS = {
  completed: 'olevel_completed_topics',
  quiz: 'olevel_quiz_scores',
  topic: 'olevel_topic_scores',
  bookmarks: 'olevel_bookmarks',
  savedMcqs: 'olevel_saved_mcqs',
  notes: 'olevel_personal_notes',
  lastVisited: 'olevel_last_visited',
  lastActive: 'olevel_last_active_date',
  streak: 'olevel_streak',
};

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable — progress simply won't survive a reload */
  }
}

export function ProgressProvider({ children }) {
  const [completedTopics, setCompletedTopics] = useState([]);
  const [quizScores, setQuizScores] = useState({});
  const [topicScores, setTopicScores] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  const [savedMcqs, setSavedMcqs] = useState([]);
  const [personalNotes, setPersonalNotes] = useState({});
  const [lastVisited, setLastVisited] = useState(null);
  const [streak, setStreak] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCompletedTopics(read(KEYS.completed, []));
    setQuizScores(read(KEYS.quiz, {}));
    setTopicScores(read(KEYS.topic, {}));
    setBookmarks(read(KEYS.bookmarks, []));
    setSavedMcqs(read(KEYS.savedMcqs, []));
    setPersonalNotes(read(KEYS.notes, {}));
    setLastVisited(read(KEYS.lastVisited, null));

    try {
      const today = new Date().toISOString().split('T')[0];
      const lastDate = localStorage.getItem(KEYS.lastActive);
      const saved = parseInt(localStorage.getItem(KEYS.streak) || '1', 10);

      if (lastDate) {
        const days = Math.floor((new Date(today) - new Date(lastDate)) / 86400000);
        if (days === 1) {
          const next = saved + 1;
          setStreak(next);
          localStorage.setItem(KEYS.streak, String(next));
        } else if (days > 1) {
          setStreak(1);
          localStorage.setItem(KEYS.streak, '1');
        } else {
          setStreak(saved);
        }
      }
      localStorage.setItem(KEYS.lastActive, today);
    } catch {
      /* no storage — streak stays at 1 for this session */
    }

    setIsLoaded(true);
  }, []);

  /* --- mutations. Stable identities so callers can put them in deps. ------ */

  const toggleTopicCompleted = useCallback((slug) => {
    setCompletedTopics((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      write(KEYS.completed, next);
      return next;
    });
  }, []);

  const markTopicCompleted = useCallback((slug) => {
    setCompletedTopics((prev) => {
      if (prev.includes(slug)) return prev;
      const next = [...prev, slug];
      write(KEYS.completed, next);
      return next;
    });
  }, []);

  const toggleBookmark = useCallback((slug) => {
    setBookmarks((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      write(KEYS.bookmarks, next);
      return next;
    });
  }, []);

  const toggleSavedMcq = useCallback((id) => {
    setSavedMcqs((prev) => {
      const next = prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      write(KEYS.savedMcqs, next);
      return next;
    });
  }, []);

  const saveNote = useCallback((slug, text) => {
    setPersonalNotes((prev) => {
      const next = { ...prev, [slug]: text };
      write(KEYS.notes, next);
      return next;
    });
  }, []);

  const deleteNote = useCallback((slug) => {
    setPersonalNotes((prev) => {
      const next = { ...prev };
      delete next[slug];
      write(KEYS.notes, next);
      return next;
    });
  }, []);

  const recordTopicScore = useCallback((slug, correct, total) => {
    setTopicScores((prev) => {
      const next = { ...prev, [slug]: { correct, total, date: new Date().toISOString() } };
      write(KEYS.topic, next);
      return next;
    });
  }, []);

  const recordQuizScore = useCallback((quizId, score, total) => {
    setQuizScores((prev) => {
      const next = { ...prev, [quizId]: { score, total, date: new Date().toISOString() } };
      write(KEYS.quiz, next);
      return next;
    });
  }, []);

  const updateLastVisited = useCallback((topic) => {
    setLastVisited(topic);
    write(KEYS.lastVisited, topic);
  }, []);

  /**
   * Destructive and irreversible — the caller owns the confirmation UI. This
   * used to call window.confirm(), which meant no page could style, translate
   * or cancel it properly.
   */
  const resetProgress = useCallback(() => {
    setCompletedTopics([]);
    setQuizScores({});
    setTopicScores({});
    setBookmarks([]);
    setSavedMcqs([]);
    setPersonalNotes({});
    setLastVisited(null);
    try {
      [KEYS.completed, KEYS.quiz, KEYS.topic, KEYS.bookmarks, KEYS.savedMcqs, KEYS.notes, KEYS.lastVisited]
        .forEach((k) => localStorage.removeItem(k));
    } catch { /* nothing to clear */ }
  }, []);

  /* --- derived ------------------------------------------------------------ */

  const isBookmarked = useCallback((slug) => bookmarks.includes(slug), [bookmarks]);
  const isMcqSaved = useCallback((id) => savedMcqs.includes(id), [savedMcqs]);
  const getNote = useCallback((slug) => personalNotes[slug] || '', [personalNotes]);
  const isTopicCompleted = useCallback((slug) => completedTopics.includes(slug), [completedTopics]);

  const olevelTopics = useMemo(() => getCourseTopics('olevel'), []);
  const totalTopics = olevelTopics.length;
  const completedCount = completedTopics.length;
  const overallPercentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  /** Per-course completion, so CCC pages stop reporting O Level numbers. */
  const percentageFor = useCallback((courseKey) => {
    const topics = getCourseTopics(courseKey);
    if (!topics.length) return 0;
    const done = topics.filter((t) => completedTopics.includes(t.slug)).length;
    return Math.round((done / topics.length) * 100);
  }, [completedTopics]);

  const weakTopics = useMemo(() => (
    Object.entries(topicScores)
      .filter(([, d]) => d.total > 0 && d.correct / d.total < 0.7)
      .map(([slug, d]) => {
        const found = olevelTopics.find((t) => t.slug === slug);
        return {
          slug,
          title: found ? found.title : slug,
          unit: found ? found.moduleNumber : 1,
          href: found ? found.href : `/units/unit-1`,
          accuracy: Math.round((d.correct / d.total) * 100),
        };
      })
  ), [topicScores, olevelTopics]);

  const value = useMemo(() => ({
    completedTopics,
    quizScores,
    topicScores,
    bookmarks,
    savedMcqs,
    personalNotes,
    lastVisited,
    streak,
    isLoaded,
    toggleTopicCompleted,
    markTopicCompleted,
    isTopicCompleted,
    toggleBookmark,
    isBookmarked,
    toggleSavedMcq,
    isMcqSaved,
    saveNote,
    getNote,
    deleteNote,
    recordTopicScore,
    recordQuizScore,
    updateLastVisited,
    resetProgress,
    totalTopics,
    completedCount,
    overallPercentage,
    percentageFor,
    weakTopics,
  }), [
    completedTopics, quizScores, topicScores, bookmarks, savedMcqs, personalNotes,
    lastVisited, streak, isLoaded, toggleTopicCompleted, markTopicCompleted,
    isTopicCompleted, toggleBookmark, isBookmarked, toggleSavedMcq, isMcqSaved,
    saveNote, getNote, deleteNote, recordTopicScore, recordQuizScore,
    updateLastVisited, resetProgress, totalTopics, completedCount,
    overallPercentage, percentageFor, weakTopics,
  ]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within a ProgressProvider');
  return context;
}
