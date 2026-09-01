'use client';

import React, { useState, useEffect } from 'react';
import { useProgress } from '@/lib/progressContext';
import { Edit3, Check, Trash2, BookMarked } from 'lucide-react';

export default function TopicNotesEditor({ topicSlug, topicTitle }) {
  const { saveNote, getNote, deleteNote } = useProgress();
  const [noteText, setNoteText] = useState('');
  const [savedStatus, setSavedStatus] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (topicSlug) {
      setNoteText(getNote(topicSlug));
    }
  }, [topicSlug, getNote]);

  const handleSave = () => {
    if (!topicSlug) return;
    saveNote(topicSlug, noteText);
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 2000);
  };

  const handleDelete = () => {
    if (!topicSlug) return;
    if (confirm('Clear your personal study notes for this topic?')) {
      deleteNote(topicSlug);
      setNoteText('');
    }
  };

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm my-6 text-xs">
      
      {/* Header Bar */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200">
          <BookMarked className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>My Personal Study Notes (व्यक्तिगत नोट्स)</span>
          {noteText && (
            <span className="w-2 h-2 rounded-full bg-purple-500 inline-block" />
          )}
        </div>
        <span className="text-[11px] text-slate-400 font-medium">
          {isExpanded ? 'Collapse' : noteText ? 'View saved notes' : 'Click to write personal notes'}
        </span>
      </button>

      {/* Editor Body */}
      {isExpanded && (
        <div className="p-4 space-y-3 border-t border-slate-200 dark:border-slate-800">
          <p className="text-slate-500 dark:text-slate-400 text-[11px]">
            Write your own mnemonics, doubts, or teacher tips for <strong className="text-slate-700 dark:text-slate-300">{topicTitle}</strong>. Saved automatically on this device.
          </p>

          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            rows={4}
            placeholder="Type your personal exam notes here..."
            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500 font-sans leading-relaxed resize-y"
          />

          <div className="flex items-center justify-between gap-2 pt-1">
            <span className="text-[11px] text-slate-400">
              {savedStatus && (
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Note saved successfully!
                </span>
              )}
            </span>

            <div className="flex items-center gap-2">
              {noteText && (
                <button
                  onClick={handleDelete}
                  className="px-3 py-1.5 rounded-lg text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 font-bold transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={handleSave}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all shadow-sm"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Save Note</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
