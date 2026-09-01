'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { allTopics } from '@/data/topicsData';

const ProgressContext = createContext();

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

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const savedTopics = localStorage.getItem('olevel_completed_topics');
      if (savedTopics) setCompletedTopics(JSON.parse(savedTopics));

      const savedScores = localStorage.getItem('olevel_quiz_scores');
      if (savedScores) setQuizScores(JSON.parse(savedScores));

      const savedTopicScores = localStorage.getItem('olevel_topic_scores');
      if (savedTopicScores) setTopicScores(JSON.parse(savedTopicScores));

      const savedBmarks = localStorage.getItem('olevel_bookmarks');
      if (savedBmarks) setBookmarks(JSON.parse(savedBmarks));

      const savedQ = localStorage.getItem('olevel_saved_mcqs');
      if (savedQ) setSavedMcqs(JSON.parse(savedQ));

      const savedNotes = localStorage.getItem('olevel_personal_notes');
      if (savedNotes) setPersonalNotes(JSON.parse(savedNotes));

      const savedLast = localStorage.getItem('olevel_last_visited');
      if (savedLast) setLastVisited(JSON.parse(savedLast));

      // Calculate streak based on last active date
      const lastDate = localStorage.getItem('olevel_last_active_date');
      const today = new Date().toISOString().split('T')[0];
      if (lastDate) {
        const diff = Math.floor((new Date(today) - new Date(lastDate)) / (1000 * 60 * 60 * 24));
        const savedStreak = parseInt(localStorage.getItem('olevel_streak') || '1', 10);
        if (diff === 1) {
          const newStreak = savedStreak + 1;
          setStreak(newStreak);
          localStorage.setItem('olevel_streak', newStreak.toString());
        } else if (diff > 1) {
          setStreak(1);
          localStorage.setItem('olevel_streak', '1');
        } else {
          setStreak(savedStreak);
        }
      }
      localStorage.setItem('olevel_last_active_date', today);
    } catch (e) {
      console.error('Error reading localStorage:', e);
    }
    setIsLoaded(true);
  }, []);

  const toggleTopicCompleted = (slug) => {
    setCompletedTopics((prev) => {
      const updated = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem('olevel_completed_topics', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const markTopicCompleted = (slug) => {
    setCompletedTopics((prev) => {
      if (prev.includes(slug)) return prev;
      const updated = [...prev, slug];
      try {
        localStorage.setItem('olevel_completed_topics', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const toggleBookmark = (slug) => {
    setBookmarks((prev) => {
      const updated = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem('olevel_bookmarks', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const isBookmarked = (slug) => bookmarks.includes(slug);

  const toggleSavedMcq = (id) => {
    setSavedMcqs((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('olevel_saved_mcqs', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const isMcqSaved = (id) => savedMcqs.includes(id);

  const saveNote = (slug, text) => {
    setPersonalNotes((prev) => {
      const updated = { ...prev, [slug]: text };
      try {
        localStorage.setItem('olevel_personal_notes', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const getNote = (slug) => personalNotes[slug] || '';

  const deleteNote = (slug) => {
    setPersonalNotes((prev) => {
      const updated = { ...prev };
      delete updated[slug];
      try {
        localStorage.setItem('olevel_personal_notes', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const recordTopicScore = (slug, correct, total) => {
    setTopicScores((prev) => {
      const updated = {
        ...prev,
        [slug]: { correct, total, date: new Date().toISOString() },
      };
      try {
        localStorage.setItem('olevel_topic_scores', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const recordQuizScore = (quizId, score, total) => {
    setQuizScores((prev) => {
      const updated = {
        ...prev,
        [quizId]: { score, total, date: new Date().toISOString() },
      };
      try {
        localStorage.setItem('olevel_quiz_scores', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const updateLastVisited = (topic) => {
    setLastVisited(topic);
    try {
      localStorage.setItem('olevel_last_visited', JSON.stringify(topic));
    } catch (e) {
      console.error(e);
    }
  };

  const resetProgress = () => {
    if (confirm('Are you sure you want to reset your learning progress?')) {
      setCompletedTopics([]);
      setQuizScores({});
      setTopicScores({});
      setBookmarks([]);
      setSavedMcqs([]);
      setPersonalNotes({});
      setLastVisited(null);
      localStorage.removeItem('olevel_completed_topics');
      localStorage.removeItem('olevel_quiz_scores');
      localStorage.removeItem('olevel_topic_scores');
      localStorage.removeItem('olevel_bookmarks');
      localStorage.removeItem('olevel_saved_mcqs');
      localStorage.removeItem('olevel_personal_notes');
      localStorage.removeItem('olevel_last_visited');
    }
  };

  // Metrics
  const totalTopics = allTopics.length;
  const completedCount = completedTopics.length;
  const overallPercentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  // Weak Topics calculation (topics with quiz score < 70%)
  const weakTopics = Object.entries(topicScores)
    .filter(([_, data]) => data.total > 0 && (data.correct / data.total) < 0.7)
    .map(([slug, data]) => {
      const found = allTopics.find((t) => t.slug === slug);
      return {
        slug,
        title: found ? found.title : slug,
        unit: found ? found.unit : 1,
        accuracy: Math.round((data.correct / data.total) * 100),
      };
    });

  return (
    <ProgressContext.Provider
      value={{
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
        weakTopics,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within a ProgressProvider');
  return context;
}
