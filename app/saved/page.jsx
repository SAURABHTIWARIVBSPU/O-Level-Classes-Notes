'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Bookmark, 
  BookMarked, 
  HelpCircle, 
  Trash2, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { useProgress } from '@/lib/progressContext';
import { allTopics } from '@/data/topicsData';
import { masterMcqs } from '@/data/mcqsData';

export default function SavedContentPage() {
  const { 
    bookmarks, 
    toggleBookmark, 
    savedMcqs, 
    toggleSavedMcq, 
    personalNotes, 
    deleteNote 
  } = useProgress();

  const [activeTab, setActiveTab] = useState('topics'); // 'topics' | 'notes' | 'mcqs'

  // Filter bookmarked topics
  const bookmarkedTopics = allTopics.filter((t) => bookmarks.includes(t.slug));

  // Notes list
  const notesList = Object.entries(personalNotes).map(([slug, note]) => {
    const topic = allTopics.find((t) => t.slug === slug);
    return {
      slug,
      note,
      title: topic ? topic.title : slug,
      unit: topic ? topic.unit : 1,
      unitSlug: topic ? topic.unitSlug : 'unit-1',
    };
  });

  // Saved MCQs
  const savedMcqList = masterMcqs.filter((m) => savedMcqs.includes(m.id));

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      
      {/* Header */}
      <div className="border-b border-appborder pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 text-xs font-bold mb-3">
          <BookMarked className="w-3.5 h-3.5 text-brand-600" /> Personal Study Workspace
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          My Saved Content (सहेजी गई अध्ययन सामग्री)
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Access your personal bookmarked topics, custom revision notes, and challenging MCQs saved during your learning sessions.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-appborder">
        <button
          onClick={() => setActiveTab('topics')}
          className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
            activeTab === 'topics'
              ? 'border-brand-500 text-brand-600 dark:text-brand-400'
              : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span>Bookmarked Topics ({bookmarkedTopics.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('notes')}
          className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
            activeTab === 'notes'
              ? 'border-navy text-navy dark:border-brand-400 dark:text-brand-400'
              : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <BookMarked className="w-4 h-4" />
          <span>Personal Notes ({notesList.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('mcqs')}
          className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
            activeTab === 'mcqs'
              ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
              : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Saved MCQs ({savedMcqList.length})</span>
        </button>
      </div>

      {/* Tab 1: Bookmarked Topics */}
      {activeTab === 'topics' && (
        <div className="space-y-4">
          {bookmarkedTopics.length === 0 ? (
            <div className="p-12 text-center border-2 border-dashed border-appborder rounded-xl space-y-3">
              <Bookmark className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
                No Bookmarked Topics Yet
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Click the bookmark icon at the top of any topic lesson to save it here for fast revision.
              </p>
              <Link
                href="/syllabus"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-500 text-white text-xs font-bold shadow-2xs hover:bg-brand-600 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Syllabus Topics</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bookmarkedTopics.map((t) => (
                <div
                  key={t.slug}
                  className="p-5 rounded-xl border border-appborder bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between group hover:border-brand-500/80 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                        Unit {t.unit}
                      </span>
                      <button
                        onClick={() => toggleBookmark(t.slug)}
                        className="text-slate-400 hover:text-rose-500 p-1 cursor-pointer"
                        title="Remove bookmark"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 hindi-text line-clamp-2">
                      {t.hindiTitle}
                    </p>
                  </div>

                  <Link
                    href={`/units/${t.unitSlug}/topics/${t.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 group-hover:underline"
                  >
                    <span>Read Full Topic Lesson</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Personal Notes */}
      {activeTab === 'notes' && (
        <div className="space-y-4">
          {notesList.length === 0 ? (
            <div className="p-12 text-center border-2 border-dashed border-appborder rounded-xl space-y-3">
              <BookMarked className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
                No Personal Notes Written
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Open any topic and click &quot;My Personal Study Notes&quot; to write and save your custom mnemonics or teacher tips.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {notesList.map((item) => (
                <div
                  key={item.slug}
                  className="p-5 rounded-xl border border-appborder bg-white dark:bg-slate-900 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-purple-600 dark:text-purple-400">
                        UNIT {item.unit}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/units/${item.unitSlug}/topics/${item.slug}`}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-brand-600"
                        title="Open Topic"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => deleteNote(item.slug)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600"
                        title="Delete Note"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 text-xs text-slate-800 dark:text-slate-200 whitespace-pre-wrap font-sans leading-relaxed">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Saved MCQs */}
      {activeTab === 'mcqs' && (
        <div className="space-y-4">
          {savedMcqList.length === 0 ? (
            <div className="p-12 text-center border-2 border-dashed border-appborder rounded-xl space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
                No Challenging MCQs Saved
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                In the MCQ portal or Mock Tests, bookmark tricky questions to practice them again here.
              </p>
              <Link
                href="/mcqs"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-2xs hover:bg-emerald-500"
              >
                <span>Go to 200 MCQ Bank</span>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {savedMcqList.map((m) => (
                <div
                  key={m.id}
                  className="p-5 rounded-xl border border-appborder bg-white dark:bg-slate-900 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      Unit {m.unit} • #{m.id}
                    </span>
                    <button
                      onClick={() => toggleSavedMcq(m.id)}
                      className="text-slate-400 hover:text-rose-500 p-1 cursor-pointer"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {m.question}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {m.options.map((opt) => (
                      <div
                        key={opt.id}
                        className={`p-2 rounded-lg border ${
                          opt.id === m.correctAnswer
                            ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-bold'
                            : 'border-appborder bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="font-bold mr-2">({opt.id})</span>
                        <span>{opt.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5 border border-appborder">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-emerald-600">Explanation:</strong> {m.explanation}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
}
