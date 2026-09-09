'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Bookmark,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  HelpCircle,
  NotebookPen,
  Trash2,
} from 'lucide-react';

import {
  Breadcrumbs,
  PageHeader,
  Panel,
  Button,
  Badge,
  Segmented,
  EmptyState,
  Skeleton,
  Callout,
} from '@/components/ui';
import { getCourseTopics, COURSES } from '@/lib/navigation';
import { useProgress } from '@/lib/progressContext';

/* ------------------------------------------------------------------ confirm */

/**
 * Removal is destructive and un-undoable, so it takes two deliberate steps.
 * Not `window.confirm`: it cannot be styled, it blocks the tab, and it reads
 * terribly on a phone. The row swaps itself for this, focus lands on "Keep",
 * and Escape backs out.
 */
function ConfirmRemove({ what, onConfirm, onCancel }) {
  return (
    <div
      role="group"
      aria-label={`Remove ${what}?`}
      className="flex items-center gap-2"
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          e.stopPropagation();
          onCancel();
        }
      }}
    >
      <span className="text-xs font-medium text-ink-2">Remove?</span>
      <Button size="sm" variant="secondary" onClick={onCancel} autoFocus>
        Keep
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={onConfirm}
        className="text-danger border-danger-line hover:bg-danger-soft"
      >
        Remove
      </Button>
    </div>
  );
}

/* --------------------------------------------------------------------- page */

const TABS = [
  { value: 'topics', label: 'Topics' },
  { value: 'mcqs', label: 'Questions' },
  { value: 'notes', label: 'Notes' },
];

export default function SavedClient() {
  const {
    bookmarks,
    toggleBookmark,
    savedMcqs,
    toggleSavedMcq,
    personalNotes,
    deleteNote,
    isLoaded,
  } = useProgress();

  const [tab, setTab] = useState('topics');
  const [pending, setPending] = useState(null); // key of the row awaiting confirmation
  const [announcement, setAnnouncement] = useState('');
  const [openMcq, setOpenMcq] = useState(null);

  /* Syllabus index only — topicsData is hundreds of KB and is not needed here. */
  const topicIndex = useMemo(() => {
    const map = new Map();
    ['olevel', 'ccc'].forEach((courseKey) => {
      getCourseTopics(courseKey).forEach((t) => {
        map.set(t.slug, {
          slug: t.slug,
          title: t.title,
          hindiTitle: t.hindiTitle,
          href: t.href,
          courseName: COURSES[courseKey].name,
          unitWord: COURSES[courseKey].unitWord,
          unitNumber: Number(t.moduleNumber),
          unitTitle: t.moduleTitle,
        });
      });
    });
    return map;
  }, []);

  const bookmarkList = useMemo(() => {
    const slugs = Array.isArray(bookmarks) ? bookmarks : [];
    return slugs.map(
      (slug) =>
        topicIndex.get(slug) || {
          slug,
          title: slug.replace(/-/g, ' '),
          href: null,
          courseName: null,
          missing: true,
        },
    );
  }, [bookmarks, topicIndex]);

  const noteList = useMemo(() => {
    const entries = Object.entries(personalNotes || {});
    return entries.map(([slug, text]) => ({
      slug,
      text,
      topic: topicIndex.get(slug) || null,
    }));
  }, [personalNotes, topicIndex]);

  /* ------------------------------------------------ saved questions (lazy) */

  const savedIds = useMemo(() => (Array.isArray(savedMcqs) ? savedMcqs : []), [savedMcqs]);
  const [mcqBank, setMcqBank] = useState(null);
  const [mcqError, setMcqError] = useState(false);
  const requestedBank = useRef(false);

  useEffect(() => {
    if (!savedIds.length || requestedBank.current) return;
    requestedBank.current = true;

    let cancelled = false;
    import('@/data/mcqsData')
      .then((mod) => {
        if (cancelled) return;
        const bank = mod.masterMcqs || mod.mcqsData || [];
        setMcqBank(new Map(bank.map((q) => [q.id, q])));
      })
      .catch(() => {
        if (!cancelled) setMcqError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [savedIds.length]);

  const mcqList = useMemo(() => {
    if (!mcqBank) return [];
    return savedIds.map((id) => mcqBank.get(id)).filter(Boolean);
  }, [savedIds, mcqBank]);

  const mcqsLoading = savedIds.length > 0 && !mcqBank && !mcqError;

  /* ----------------------------------------------------------- interactions */

  const remove = useCallback((key, label, action) => {
    action();
    setPending(null);
    setAnnouncement(`${label} removed from your saved items.`);
  }, []);

  const counts = {
    topics: bookmarkList.length,
    mcqs: savedIds.length,
    notes: noteList.length,
  };
  const total = counts.topics + counts.mcqs + counts.notes;

  const tabOptions = TABS.map((t) => ({ value: t.value, label: `${t.label} · ${counts[t.value]}` }));

  /* ---------------------------------------------------------------- render */

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs className="mb-5" items={[{ label: 'Saved items' }]} />

      <PageHeader icon="Bookmark" tone="amber"
        eyebrow="Your workspace"
        title="Saved items"
        hindiTitle="सहेजी गई सामग्री"
        description="Everything you flagged while studying: topics you bookmarked, questions you got wrong and want to see again, and the notes you wrote in your own words."
        actions={
          <Button href="/dashboard" variant="secondary">
            Your progress
          </Button>
        }
      />

      <p className="sr-only" role="status" aria-live="polite">
        {announcement}
      </p>

      <div className="mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto no-scrollbar">
        <Segmented options={tabOptions} value={tab} onChange={setTab} ariaLabel="Choose what to show" />
      </div>

      {!isLoaded ? (
        <div className="space-y-3">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-20 w-full rounded-xl" />
          ))}
          <p className="sr-only" role="status">
            Loading your saved items
          </p>
        </div>
      ) : null}

      {/* ------------------------------------------------------------ topics */}
      {isLoaded && tab === 'topics' ? (
        <section aria-label="Bookmarked topics">
          {bookmarkList.length === 0 ? (
            <EmptyState
              icon={Bookmark}
              title="No bookmarked topics"
              description="Open any topic and press the bookmark button in its header. Bookmarks are the fastest way to build a revision shortlist in the last week before the exam."
              action={
                <>
                  <Button href="/units/unit-1" variant="primary">
                    Browse O Level topics
                  </Button>
                  <Button href="/ccc/chapters/chapter-1" variant="secondary">
                    Browse CCC topics
                  </Button>
                </>
              }
            />
          ) : (
            <Panel>
              <ul className="divide-y divide-line">
                {bookmarkList.map((topic) => {
                  const key = `bookmark:${topic.slug}`;
                  return (
                    <li key={key} className="p-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                      <div className="min-w-0 flex-1">
                        {topic.courseName ? (
                          <p className="text-xs text-ink-3">
                            {topic.courseName} · {topic.unitWord} {topic.unitNumber} · {topic.unitTitle}
                          </p>
                        ) : (
                          <p className="text-xs text-ink-3">Saved from an older version of this site</p>
                        )}

                        {topic.href ? (
                          <Link
                            href={topic.href}
                            className="mt-0.5 block text-base font-medium text-ink hover:text-accent transition-colors duration-fast"
                          >
                            {topic.title}
                          </Link>
                        ) : (
                          <p className="mt-0.5 text-base font-medium text-ink-2">{topic.title}</p>
                        )}

                        {topic.hindiTitle ? (
                          <p className="text-sm text-hindi hindi-text" lang="hi">
                            {topic.hindiTitle}
                          </p>
                        ) : null}
                      </div>

                      <div className="shrink-0">
                        {pending === key ? (
                          <ConfirmRemove
                            what={`the bookmark for ${topic.title}`}
                            onCancel={() => setPending(null)}
                            onConfirm={() => remove(key, topic.title, () => toggleBookmark(topic.slug))}
                          />
                        ) : (
                          <button
                            type="button"
                            onClick={() => setPending(key)}
                            aria-label={`Remove bookmark: ${topic.title}`}
                            className="btn btn-ghost btn-sm btn-icon text-ink-3 hover:text-danger"
                          >
                            <Trash2 className="w-4 h-4" aria-hidden="true" />
                          </button>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Panel>
          )}
        </section>
      ) : null}

      {/* -------------------------------------------------------- questions */}
      {isLoaded && tab === 'mcqs' ? (
        <section aria-label="Saved questions">
          {savedIds.length === 0 ? (
            <EmptyState
              icon={HelpCircle}
              title="No saved questions"
              description="While practising MCQs, save the ones that catch you out. They collect here so you can re-test yourself on exactly the questions you get wrong."
              action={
                <>
                  <Button href="/mcqs" variant="primary">
                    Practise MCQs
                  </Button>
                  <Button href="/mock-test" variant="secondary">
                    Take a mock test
                  </Button>
                </>
              }
            />
          ) : mcqsLoading ? (
            <div className="space-y-3">
              {savedIds.slice(0, 3).map((id) => (
                <Skeleton key={id} className="h-24 w-full rounded-xl" />
              ))}
              <p className="sr-only" role="status">
                Loading the question bank
              </p>
            </div>
          ) : mcqError || mcqList.length === 0 ? (
            <Callout kind="warning">
              <p>
                Your {savedIds.length} saved question{savedIds.length === 1 ? '' : 's'} could not be loaded from the
                question bank — they may have been renumbered. Practising from{' '}
                <Link href="/mcqs" className="text-accent underline underline-offset-2">
                  the MCQ bank
                </Link>{' '}
                still works.
              </p>
            </Callout>
          ) : (
            <ul className="space-y-4">
              {mcqList.map((mcq) => {
                const key = `mcq:${mcq.id}`;
                const revealed = openMcq === mcq.id;
                const panelId = `mcq-answer-${mcq.id}`;

                return (
                  <li key={key}>
                    <Panel as="article" className="p-4 sm:p-5">
                      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge tone="neutral" mono>
                            Q{mcq.id}
                          </Badge>
                          <span className="text-xs text-ink-3">Unit {mcq.unit}</span>
                          {mcq.difficulty ? <Badge tone="neutral">{mcq.difficulty}</Badge> : null}
                        </div>

                        <div className="shrink-0">
                          {pending === key ? (
                            <ConfirmRemove
                              what={`saved question ${mcq.id}`}
                              onCancel={() => setPending(null)}
                              onConfirm={() => remove(key, `Question ${mcq.id}`, () => toggleSavedMcq(mcq.id))}
                            />
                          ) : (
                            <button
                              type="button"
                              onClick={() => setPending(key)}
                              aria-label={`Remove saved question ${mcq.id}`}
                              className="btn btn-ghost btn-sm btn-icon text-ink-3 hover:text-danger"
                            >
                              <Trash2 className="w-4 h-4" aria-hidden="true" />
                            </button>
                          )}
                        </div>
                      </div>

                      <h2 className="mt-2.5 text-base font-medium text-ink leading-relaxed">{mcq.question}</h2>

                      <button
                        type="button"
                        onClick={() => setOpenMcq(revealed ? null : mcq.id)}
                        aria-expanded={revealed}
                        aria-controls={panelId}
                        className="btn btn-secondary btn-sm mt-3"
                      >
                        {revealed ? 'Hide the answer' : 'Show the answer'}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-fast ${revealed ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>

                      <div id={panelId} hidden={!revealed} className="mt-4">
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {(mcq.options || []).map((opt) => {
                            const correct = opt.id === mcq.correctAnswer;
                            return (
                              <li
                                key={opt.id}
                                className={`flex items-start gap-2 rounded-lg border p-2.5 text-sm ${
                                  correct
                                    ? 'border-ok-line bg-ok-soft text-ok-ink'
                                    : 'border-line bg-sunken text-ink-2'
                                }`}
                              >
                                {correct ? (
                                  <CheckCircle2 className="w-4 h-4 text-ok shrink-0 mt-0.5" aria-hidden="true" />
                                ) : (
                                  <span className="w-4 shrink-0" aria-hidden="true" />
                                )}
                                <span className="min-w-0">
                                  <span className="font-mono font-semibold mr-1.5">{opt.id}.</span>
                                  {opt.text}
                                  {correct ? <span className="sr-only"> (correct answer)</span> : null}
                                </span>
                              </li>
                            );
                          })}
                        </ul>

                        {mcq.explanation ? (
                          <Callout kind="note" label="Why" lang="hi">
                            <p className="hindi-text">{mcq.explanation}</p>
                          </Callout>
                        ) : null}
                      </div>
                    </Panel>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      ) : null}

      {/* ------------------------------------------------------------- notes */}
      {isLoaded && tab === 'notes' ? (
        <section aria-label="Your notes">
          {noteList.length === 0 ? (
            <EmptyState
              icon={NotebookPen}
              title="No notes written"
              description="Every topic page has a notes box at the bottom. Use it for the mnemonic your teacher gave you, or the one line that finally made the concept click."
              action={
                <Button href="/units/unit-1" variant="primary">
                  Open a topic and write one
                </Button>
              }
            />
          ) : (
            <ul className="space-y-4">
              {noteList.map(({ slug, text, topic }) => {
                const key = `note:${slug}`;
                const title = topic?.title || slug.replace(/-/g, ' ');

                return (
                  <li key={key}>
                    <Panel as="article" className="p-4 sm:p-5">
                      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                        <div className="min-w-0">
                          {topic ? (
                            <p className="text-xs text-ink-3">
                              {topic.courseName} · {topic.unitWord} {topic.unitNumber}
                            </p>
                          ) : null}
                          <h2 className="mt-0.5 text-h4 font-semibold text-ink">{title}</h2>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          {topic?.href ? (
                            <Link
                              href={topic.href}
                              aria-label={`Open the topic: ${title}`}
                              className="btn btn-ghost btn-sm btn-icon text-ink-3 hover:text-ink"
                            >
                              <ExternalLink className="w-4 h-4" aria-hidden="true" />
                            </Link>
                          ) : null}

                          {pending === key ? (
                            <ConfirmRemove
                              what={`your note on ${title}`}
                              onCancel={() => setPending(null)}
                              onConfirm={() => remove(key, `Note on ${title}`, () => deleteNote(slug))}
                            />
                          ) : (
                            <button
                              type="button"
                              onClick={() => setPending(key)}
                              aria-label={`Delete your note on ${title}`}
                              className="btn btn-ghost btn-sm btn-icon text-ink-3 hover:text-danger"
                            >
                              <Trash2 className="w-4 h-4" aria-hidden="true" />
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="mt-3 well px-3.5 py-3">
                        <p className="text-prose text-ink-2 leading-relaxed whitespace-pre-wrap break-words">{text}</p>
                      </div>
                    </Panel>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      ) : null}

      {isLoaded && total > 0 ? (
        <p className="mt-8 text-xs text-ink-3 max-w-measure">
          Saved items live in this browser only — they do not follow you to another device, and clearing your browser
          data clears them.
        </p>
      ) : null}
    </div>
  );
}
