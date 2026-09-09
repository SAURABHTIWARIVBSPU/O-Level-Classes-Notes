'use client';

import React, { useEffect, useRef, useState } from 'react';
import { NotebookPen, Check, Trash2, ChevronDown } from 'lucide-react';
import { useProgress } from '@/lib/progressContext';
import { Button } from '@/components/ui';

/**
 * A place for the student's own words — mnemonics, doubts, what the teacher
 * said. Stored per topic in this browser only.
 *
 * Deleting asks for confirmation inline rather than through window.confirm(),
 * which cannot be styled, translated, or dismissed with the keyboard reliably.
 */
export default function TopicNotesEditor({ topicSlug, topicTitle }) {
  const { saveNote, getNote, deleteNote } = useProgress();
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const [justSaved, setJustSaved] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const keepRef = useRef(null);

  useEffect(() => {
    if (topicSlug) setText(getNote(topicSlug));
  }, [topicSlug, getNote]);

  useEffect(() => {
    if (confirming) keepRef.current?.focus();
  }, [confirming]);

  const hasNote = Boolean(text.trim());

  const save = () => {
    saveNote(topicSlug, text);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  const remove = () => {
    deleteNote(topicSlug);
    setText('');
    setConfirming(false);
  };

  return (
    <section className="panel overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="topic-notes-body"
        className="w-full px-4 py-3 flex items-center justify-between gap-3 text-left hover:bg-sunken transition-colors"
      >
        <span className="flex items-center gap-2 min-w-0">
          <NotebookPen className="w-4 h-4 text-ink-3 shrink-0" aria-hidden="true" />
          <span className="text-base font-medium text-ink">My notes</span>
          {hasNote ? <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-label="You have notes on this topic" /> : null}
        </span>
        <span className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:inline text-sm text-ink-4">
            {hasNote ? 'View or edit' : 'Add your own notes'}
          </span>
          <ChevronDown className={`w-4 h-4 text-ink-3 transition-transform duration-fast ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </span>
      </button>

      {open ? (
        <div id="topic-notes-body" className="p-4 border-t border-line space-y-3">
          <label htmlFor="topic-note" className="block text-sm text-ink-3">
            Mnemonics, doubts or teacher tips for <span className="text-ink-2 font-medium">{topicTitle}</span>.
            Saved on this device only.
          </label>

          <textarea
            id="topic-note"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            placeholder="Type your notes…"
            className="input h-auto py-2.5 resize-y leading-relaxed"
          />

          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm text-ok inline-flex items-center gap-1.5" aria-live="polite">
              {justSaved ? (<><Check className="w-3.5 h-3.5" aria-hidden="true" /> Saved</>) : null}
            </span>

            <div className="flex items-center gap-2">
              {confirming ? (
                <>
                  <span className="text-sm text-ink-2">Delete these notes?</span>
                  <button ref={keepRef} type="button" className="btn btn-secondary btn-sm" onClick={() => setConfirming(false)}>Keep</button>
                  <Button size="sm" variant="ghost" className="text-danger" onClick={remove}>Delete</Button>
                </>
              ) : (
                <>
                  {hasNote ? (
                    <Button
                      size="sm"
                      variant="ghost"
                      icon={Trash2}
                      iconOnly
                      onClick={() => setConfirming(true)}
                      aria-label="Delete these notes"
                    />
                  ) : null}
                  <Button size="sm" variant="primary" onClick={save}>Save notes</Button>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
