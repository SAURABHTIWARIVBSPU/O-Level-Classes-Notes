'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers,
} from 'lucide-react';
import {
  Badge,
  Breadcrumbs,
  Button,
  Callout,
  CodeBlock,
  EmptyState,
  MetaItem,
  PageHeader,
  PrevNext,
  ReadingProgress,
  ScrollTable,
  Segmented,
  TableOfContents,
} from '@/components/ui';
import CourseSidebar from '@/components/layout/CourseSidebar';
import { useLanguage } from '@/lib/languageContext';
import UnitPdfReader from './UnitPdfReader';
import { getLocalizedUnit, UI_LABELS } from '@/data/canonicalNotes/localizationHelper';

/* ==========================================================================
   The long-form unit reader.

   Three columns at xl — course tree · reading column · table of contents —
   collapsing to a single column with a one-line TOC below that. The reading
   column never exceeds the 68ch measure, because this is where a student sits
   for half an hour.

   Chrome strings live here (presentation). Everything a student reads comes
   from data/canonicalNotes and is never rewritten.
   ========================================================================== */

const CHROME = {
  en: {
    read: 'Read',
    pdf: 'PDF',
    onThisPage: 'On this page',
    contents: 'Course contents',
    outcomes: 'What you will learn',
    revision: 'Revision checklist',
    keyTerms: 'Key terms and full forms',
    downloads: 'Download this unit',
    downloadsHelp: 'The same syllabus as a printable textbook, in English and हिन्दी.',
    definition: 'Definition',
    why: 'Why it matters',
    how: 'How it works',
    components: 'Key components',
    example: 'In practice',
    points: 'Exam points',
    recap: 'Quick recap',
    hindiGroup: 'हिन्दी में',
    langLabel: 'Reading language',
    viewLabel: 'Notes or PDF',
    topicWord: 'topics',
    hoursWord: 'hours',
  },
  hi: {
    read: 'पढ़ें',
    pdf: 'पीडीएफ',
    onThisPage: 'इस पृष्ठ पर',
    contents: 'पाठ्यक्रम सूची',
    outcomes: 'आप क्या सीखेंगे',
    revision: 'पुनरीक्षण चेकलिस्ट',
    keyTerms: 'मुख्य शब्दावली एवं पूर्ण रूप',
    downloads: 'यह इकाई डाउनलोड करें',
    downloadsHelp: 'यही पाठ्यक्रम मुद्रण योग्य पुस्तक के रूप में, अंग्रेज़ी और हिन्दी में।',
    definition: 'परिभाषा',
    why: 'महत्व',
    how: 'कार्यप्रणाली',
    components: 'मुख्य घटक',
    example: 'व्यवहार में',
    points: 'परीक्षा बिंदु',
    recap: 'त्वरित सारांश',
    hindiGroup: 'हिन्दी में',
    langLabel: 'पठन भाषा',
    viewLabel: 'नोट्स या पीडीएफ',
    topicWord: 'विषय',
    hoursWord: 'घंटे',
  },
};

const LANGUAGE_OPTIONS = [
  { value: 'both', label: 'EN + हि' },
  { value: 'en', label: 'EN' },
  { value: 'hi', label: 'हिन्दी' },
];

/* 44px targets on touch, the standard control height from `sm` up. */
const TOUCH = 'min-h-11 sm:min-h-0';
const TOUCH_SEGMENT = '[&_.segment-item]:min-h-11 sm:[&_.segment-item]:min-h-0';

/* Prose rhythm for content nested one level below the article root, where
   `.prose-notes > * + *` no longer reaches. Headings keep their own margins. */
const FLOW = '[&>*+*]:mt-[1.1em]';

function slugify(value = '') {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Pairs each topic's English and Hindi variants.
 *
 * The unit arrives already flattened to one language by `getCanonicalOLevelUnit`,
 * which drops the per-topic `en` / `hi` objects — so the Hindi bodies are
 * recovered from `unitData.hi.topics`, matched by position exactly as the
 * canonical index merges them. Raw (unflattened) units still work too.
 */
function pairTopics(unitData) {
  const primary = unitData?.topics || [];
  const hindiTopics = unitData?.hi?.topics || [];

  return primary.map((topic, index) => {
    const en = topic.en || topic;
    const hi = topic.hi || hindiTopics[index] || null;
    const code = topic.code || en.code || String(index + 1);

    return {
      code,
      id: `topic-${slugify(`${code}-${en.title || ''}`) || index + 1}`,
      codeSnippet: topic.codeSnippet || en.codeSnippet || null,
      codeLanguage: topic.codeLanguage || en.codeLanguage || '',
      en,
      hi,
    };
  });
}

/* ------------------------------------------------------------ topic body */

function TopicBody({ topic, chrome, withCode }) {
  if (!topic) return null;

  const table = topic.table && topic.table.headers && topic.table.rows ? topic.table : null;
  const components = Array.isArray(topic.componentsOrTypes) ? topic.componentsOrTypes : [];
  const points = Array.isArray(topic.importantPoints) ? topic.importantPoints : [];

  return (
    <>
      {topic.whatIsIt ? (
        <div className="border-l-2 border-accent-line pl-4">
          <p className="eyebrow mb-1">{chrome.definition}</p>
          <p className="text-ink">{topic.whatIsIt}</p>
        </div>
      ) : null}

      {topic.whyImportant ? (
        <p>
          <strong>{chrome.why}. </strong>
          {topic.whyImportant}
        </p>
      ) : null}

      {topic.howItWorks ? (
        <div>
          <p className="eyebrow mb-1.5">{chrome.how}</p>
          <p>{topic.howItWorks}</p>
        </div>
      ) : null}

      {withCode && topic.codeSnippet ? (
        <CodeBlock code={topic.codeSnippet} language={topic.codeLanguage} runnable />
      ) : null}

      {components.length ? (
        <div>
          <p className="eyebrow mb-1.5">{topic.componentsTitle || chrome.components}</p>
          <ul>
            {components.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {table ? (
        <ScrollTable>
          <table>
            <caption className={topic.tableTitle ? 'eyebrow text-left px-3.5 pt-3 pb-1' : 'sr-only'}>
              {topic.tableTitle || `${topic.title} — comparison table`}
            </caption>
            <thead>
              <tr>
                {table.headers.map((header, i) => (
                  <th key={i} scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollTable>
      ) : null}

      {topic.practicalExample ? (
        <Callout kind="analogy" label={chrome.example}>
          <p>{topic.practicalExample}</p>
        </Callout>
      ) : null}

      {points.length ? (
        <Callout kind="exam" label={chrome.points}>
          <ul>
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </Callout>
      ) : null}

      {topic.quickRevision ? (
        <div className="border-t border-line pt-3">
          <p className="eyebrow mb-1">{chrome.recap}</p>
          <p className="text-base text-ink-3">{topic.quickRevision}</p>
        </div>
      ) : null}
    </>
  );
}

/* Hindi half of a bilingual section — grouped, never interleaved sentence by
   sentence, so each language reads as continuous prose. */
function HindiGroup({ label, children }) {
  return (
    <div lang="hi" className="hindi-text border-l-2 border-line pl-4 sm:pl-5">
      <p className="eyebrow mb-2">{label}</p>
      <div className={FLOW}>{children}</div>
    </div>
  );
}

/* --------------------------------------------------------------- reader */

export default function CanonicalWebReader({
  unitData,
  courseMeta,
  prevUnit,
  nextUnit,
  backHref,
  backLabel,
}) {
  const { language, changeLanguage } = useLanguage();
  const [view, setView] = useState('notes');
  const [pdfLang, setPdfLang] = useState('en');
  const [activeSection, setActiveSection] = useState(null);

  const en = useMemo(() => (unitData ? getLocalizedUnit(unitData, 'en') : null), [unitData]);
  const hi = useMemo(() => (unitData ? getLocalizedUnit(unitData, 'hi') : null), [unitData]);
  const topics = useMemo(() => pairTopics(unitData), [unitData]);

  const isCcc = (unitData?.courseId || courseMeta?.courseId) === 'CCC';
  const hindiAvailable = Boolean(unitData?.hi);
  /* Hindi-only never leaves a blank page: English stands in wherever the
     Hindi edition has no counterpart. */
  const showEnglish = language !== 'hi' || !hindiAvailable;
  const showHindi = hindiAvailable && (language === 'both' || language === 'hi');
  const chrome = language === 'hi' && hindiAvailable ? CHROME.hi : CHROME.en;

  const pickPair = (englishList, hindiList) => {
    const enList = Array.isArray(englishList) ? englishList : [];
    const hiList = Array.isArray(hindiList) ? hindiList : [];
    const useHindi = showHindi && hiList.length > 0;
    return {
      en: showEnglish || !useHindi ? enList : [],
      hi: useHindi ? hiList : [],
    };
  };

  const outcomes = pickPair(en?.whatYouWillLearn, hi?.whatYouWillLearn);
  const revision = pickPair(en?.unitRevision, hi?.unitRevision);
  const terms = pickPair(en?.keyTerms, hi?.keyTerms);

  const hasOutcomes = outcomes.en.length > 0 || outcomes.hi.length > 0;
  const hasRevision = revision.en.length > 0 || revision.hi.length > 0;
  const hasTerms = terms.en.length > 0 || terms.hi.length > 0;

  /* The sticky context bar tracks the same sections the TOC lists. */
  const sections = useMemo(() => {
    const list = [];
    if (hasOutcomes) list.push({ id: 'learning-outcomes', label: chrome.outcomes });
    topics.forEach((topic) => {
      const heading = language === 'hi' && topic.hi ? topic.hi.title : topic.en.title;
      list.push({ id: topic.id, label: `${topic.code} ${heading}` });
    });
    if (hasRevision) list.push({ id: 'revision-checklist', label: chrome.revision });
    if (hasTerms) list.push({ id: 'key-terms', label: chrome.keyTerms });
    return list;
  }, [topics, language, chrome, hasOutcomes, hasRevision, hasTerms]);

  useEffect(() => {
    if (view !== 'notes' || !sections.length) {
      setActiveSection(null);
      return undefined;
    }

    let ticking = false;
    const compute = () => {
      ticking = false;
      let current = sections[0];
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) current = section;
        else break;
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [view, sections]);

  /* Follow the reading language into the PDF panel, but keep them independent
     once the reader has chosen a PDF explicitly. */
  useEffect(() => {
    setPdfLang(language === 'hi' ? 'hi' : 'en');
  }, [language]);

  if (!unitData || !en) {
    return (
      <div className="shell py-8 sm:py-10">
        <EmptyState
          icon={FileText}
          title="These unit notes are not available"
          description="The notes for this unit could not be loaded. Pick another unit from the library."
          action={
            <Button variant="primary" href={backHref || '/notes'} icon={ArrowLeft}>
              {backLabel || 'Back to the notes library'}
            </Button>
          }
        />
      </div>
    );
  }

  const notesBase = isCcc ? '/ccc/notes' : '/notes';
  const unitWord = isCcc ? 'Chapter' : 'Unit';
  const padded = unitData.unitNumberPadded || String(unitData.unitNumber);
  const courseShortName = unitData.courseShortName || courseMeta?.courseShortName || 'NIELIT';
  const courseCode = unitData.courseCode || courseMeta?.courseCode || '';

  const enPdfUrl = en.enPdfUrl || unitData.pdfUrl;
  const enPdfName = en.enPdfFileName || unitData.pdfFileName;
  const hiPdfUrl = unitData.hiPdfUrl || en.hiPdfUrl;
  const hiPdfName = unitData.hiPdfFileName || en.hiPdfFileName;
  const enPdfAvailable = unitData.pdfAvailable ?? true;
  const hiPdfAvailable = unitData.hiPdfAvailable ?? Boolean(hiPdfUrl);
  const usingHindiPdf = pdfLang === 'hi' && Boolean(hiPdfUrl);
  const activePdfUrl = usingHindiPdf ? hiPdfUrl : enPdfUrl;
  const activePdfName = usingHindiPdf ? hiPdfName : enPdfName;
  const activePdfAvailable = usingHindiPdf ? hiPdfAvailable : enPdfAvailable;

  const introEn = showEnglish || !(showHindi && hi?.introduction) ? en.introduction : null;
  const introHi = showHindi ? hi?.introduction : null;

  const title = language === 'hi' && hi?.title ? hi.title : en.title;
  const hindiTitle = language !== 'hi' && hindiAvailable ? hi?.title : null;
  const activeModule = isCcc ? `chapter-${unitData.unitNumber}` : `unit-${unitData.unitNumber}`;

  const crumbs = isCcc
    ? [
        { label: 'CCC', href: '/ccc' },
        { label: 'Chapter notes', href: backHref || '/ccc/notes' },
        { label: `${unitWord} ${padded}: ${en.title}` },
      ]
    : [
        { label: 'Unit notes', href: backHref || '/notes' },
        { label: `${unitWord} ${padded}: ${en.title}` },
      ];

  const readingColumnClass =
    view === 'pdf'
      ? 'min-w-0 xl:col-start-2 xl:col-end-4 xl:row-start-1'
      : 'min-w-0 xl:col-start-2 xl:row-start-1';

  return (
    <div className="shell shell-wide py-6 sm:py-8">
      <ReadingProgress />

      <Breadcrumbs items={crumbs} className="mb-5" />

      <PageHeader
        eyebrow={[courseShortName, courseCode].filter(Boolean).join(' · ')}
        title={title}
        hindiTitle={hindiTitle}
        actions={
          <>
            <Segmented
              className={TOUCH_SEGMENT}
              options={LANGUAGE_OPTIONS}
              value={language}
              onChange={changeLanguage}
              ariaLabel={chrome.langLabel}
            />
            <Segmented
              className={TOUCH_SEGMENT}
              options={[
                { value: 'notes', label: chrome.read },
                { value: 'pdf', label: chrome.pdf },
              ]}
              value={view}
              onChange={setView}
              ariaLabel={chrome.viewLabel}
            />
          </>
        }
        meta={
          <>
            <MetaItem icon={GraduationCap}>
              {unitWord} {padded}
              {unitData.officialSection ? ` · Section ${unitData.officialSection}` : ''}
            </MetaItem>
            <MetaItem icon={Layers}>
              {topics.length} {chrome.topicWord}
            </MetaItem>
            {unitData.totalHours ? (
              <MetaItem icon={Clock}>
                <span className="tabular-nums">
                  {unitData.totalHours} {chrome.hoursWord}
                </span>
                {unitData.theoryHours != null && unitData.practicalHours != null ? (
                  <span className="tabular-nums">
                    {' '}
                    ({unitData.theoryHours}T + {unitData.practicalHours}P)
                  </span>
                ) : null}
              </MetaItem>
            ) : null}
            <Button
              variant="ghost"
              size="sm"
              icon={ArrowLeft}
              href={backHref || notesBase}
              className="-ml-2"
            >
              {backLabel || 'Back to the notes library'}
            </Button>
          </>
        }
      />

      <div className="xl:grid xl:grid-cols-[15rem_minmax(0,1fr)_13rem] xl:gap-x-10">
        {/* Course tree — a rail at xl, a sheet below it */}
        <div className="xl:col-start-1 xl:row-start-1">
          <CourseSidebar
            courseKey={isCcc ? 'ccc' : 'olevel'}
            activeModule={activeModule}
            title={chrome.contents}
          />
        </div>

        {/* Table of contents — one collapsed row below xl, a rail at xl */}
        {view === 'notes' ? (
          <div className="mb-6 xl:mb-0 xl:col-start-3 xl:row-start-1 [&>div]:lg:block [&>div]:xl:hidden [&>nav]:lg:hidden [&>nav]:xl:block">
            {/* keyed on language so headings are re-read after a switch */}
            <TableOfContents key={language} title={chrome.onThisPage} />
          </div>
        ) : null}

        {/* Reading column */}
        <div className={readingColumnClass}>
          {view === 'notes' ? (
            <>
              {/* Quiet "where am I" bar */}
              <div className="sticky top-header z-30 bg-ground border-b border-line py-2 mb-6 no-print">
                <p className="flex items-center gap-1.5 text-xs min-w-0">
                  <span className="font-mono text-ink-3 shrink-0">
                    {unitWord} {padded}
                  </span>
                  {activeSection ? (
                    <>
                      <ChevronRight className="w-3 h-3 text-ink-4 shrink-0" aria-hidden="true" />
                      <span className="truncate font-medium text-ink-2">{activeSection.label}</span>
                    </>
                  ) : null}
                </p>
              </div>

              <article data-toc-root className="prose-notes max-w-measure">
                {introEn ? <p className="text-lead text-ink-2">{introEn}</p> : null}
                {introHi ? (
                  introEn ? (
                    <HindiGroup label={chrome.hindiGroup}>
                      <p className="text-lead">{introHi}</p>
                    </HindiGroup>
                  ) : (
                    <p className="text-lead text-ink-2 hindi-text" lang="hi">
                      {introHi}
                    </p>
                  )
                ) : null}

                {hasOutcomes ? (
                  <section aria-labelledby="learning-outcomes" className={FLOW}>
                    <h2 id="learning-outcomes">{chrome.outcomes}</h2>
                    {outcomes.en.length ? (
                      <ul>
                        {outcomes.en.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                    {outcomes.hi.length ? (
                      outcomes.en.length ? (
                        <HindiGroup label={chrome.hindiGroup}>
                          <ul>
                            {outcomes.hi.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </HindiGroup>
                      ) : (
                        <ul lang="hi" className="hindi-text">
                          {outcomes.hi.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )
                    ) : null}
                  </section>
                ) : null}

                {topics.map((topic) => {
                  const englishTopic = topic.en;
                  const hindiTopic = topic.hi;
                  const showTopicHindi = showHindi && Boolean(hindiTopic);
                  const showTopicEnglish = showEnglish || !showTopicHindi;
                  const headingIsHindi = showTopicHindi && !showTopicEnglish;
                  const headingText = headingIsHindi ? hindiTopic.title : englishTopic.title;

                  return (
                    <section key={topic.id} aria-labelledby={topic.id} className={FLOW}>
                      <h2
                        id={topic.id}
                        className={headingIsHindi ? 'hindi-text' : undefined}
                        lang={headingIsHindi ? 'hi' : undefined}
                      >
                        <span className="font-mono text-ink-4 mr-2">{topic.code}</span>
                        {headingText}
                      </h2>

                      {showTopicEnglish && showTopicHindi && hindiTopic.title ? (
                        <p className="text-base text-hindi hindi-text !mt-1" lang="hi">
                          {hindiTopic.title}
                        </p>
                      ) : null}

                      {showTopicEnglish ? (
                        <TopicBody
                          topic={{ ...englishTopic, codeSnippet: topic.codeSnippet, codeLanguage: topic.codeLanguage }}
                          chrome={CHROME.en}
                          withCode
                        />
                      ) : null}

                      {showTopicHindi ? (
                        showTopicEnglish ? (
                          <HindiGroup label={chrome.hindiGroup}>
                            <TopicBody topic={hindiTopic} chrome={CHROME.hi} withCode={false} />
                          </HindiGroup>
                        ) : (
                          <div lang="hi" className={`hindi-text ${FLOW}`}>
                            <TopicBody
                              topic={{
                                ...hindiTopic,
                                codeSnippet: topic.codeSnippet,
                                codeLanguage: topic.codeLanguage,
                              }}
                              chrome={CHROME.hi}
                              withCode
                            />
                          </div>
                        )
                      ) : null}
                    </section>
                  );
                })}

                {hasRevision ? (
                  <section aria-labelledby="revision-checklist" className={FLOW}>
                    <h2 id="revision-checklist">{chrome.revision}</h2>
                    {revision.en.length ? (
                      <ul>
                        {revision.en.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                    {revision.hi.length ? (
                      revision.en.length ? (
                        <HindiGroup label={chrome.hindiGroup}>
                          <ul>
                            {revision.hi.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </HindiGroup>
                      ) : (
                        <ul lang="hi" className="hindi-text">
                          {revision.hi.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )
                    ) : null}
                  </section>
                ) : null}

                {hasTerms ? (
                  <section aria-labelledby="key-terms" className={FLOW}>
                    <h2 id="key-terms">{chrome.keyTerms}</h2>
                    {terms.en.length ? (
                      <ScrollTable>
                        <table>
                          <caption className="sr-only">{UI_LABELS.en.keyTermsTitle}</caption>
                          <thead>
                            <tr>
                              {UI_LABELS.en.termHeaders.map((header, i) => (
                                <th key={i} scope="col">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {terms.en.map((term, i) => (
                              <tr key={i}>
                                <td>{term.term}</td>
                                <td>{term.fullForm}</td>
                                <td>{term.desc}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </ScrollTable>
                    ) : null}
                    {terms.hi.length ? (
                      <div lang="hi" className="hindi-text">
                        {terms.en.length ? (
                          <p className="eyebrow mb-2">{chrome.hindiGroup}</p>
                        ) : null}
                        <ScrollTable>
                          <table>
                            <caption className="sr-only">{UI_LABELS.hi.keyTermsTitle}</caption>
                            <thead>
                              <tr>
                                {UI_LABELS.hi.termHeaders.map((header, i) => (
                                  <th key={i} scope="col">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {terms.hi.map((term, i) => (
                                <tr key={i}>
                                  <td>{term.term}</td>
                                  <td>{term.fullForm}</td>
                                  <td>{term.desc}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </ScrollTable>
                      </div>
                    ) : null}
                  </section>
                ) : null}
              </article>

              {/* Downloads — outside the article so reading progress ends with
                  the last line of the notes */}
              <section
                aria-labelledby="unit-downloads"
                className="mt-12 panel p-5 max-w-measure no-print"
              >
                <h2 id="unit-downloads" className="text-h4 font-semibold text-ink">
                  {chrome.downloads}
                </h2>
                <p className="mt-1 text-base text-ink-3">{chrome.downloadsHelp}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {enPdfAvailable ? (
                    <a
                      href={enPdfUrl}
                      download={enPdfName}
                      className={`btn btn-secondary ${TOUCH}`}
                      aria-label={`Download the English PDF (${enPdfName})`}
                    >
                      <Download className="w-4 h-4" aria-hidden="true" />
                      English PDF
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className={`btn btn-secondary ${TOUCH} opacity-60 cursor-not-allowed`}
                      title="English PDF not available yet"
                      aria-label={`English PDF (${enPdfName}) is not yet available`}
                    >
                      <Download className="w-4 h-4" aria-hidden="true" />
                      English PDF (soon)
                    </button>
                  )}
                  {hiPdfUrl ? (
                    hiPdfAvailable ? (
                      <a
                        href={hiPdfUrl}
                        download={hiPdfName}
                        className={`btn btn-secondary ${TOUCH}`}
                        aria-label={`Download the Hindi PDF (${hiPdfName})`}
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        <span className="hindi-text" lang="hi">
                          हिन्दी PDF
                        </span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className={`btn btn-secondary ${TOUCH} opacity-60 cursor-not-allowed`}
                        title="Hindi PDF not available yet"
                        aria-label={`Hindi PDF (${hiPdfName}) is not yet available`}
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        <span className="hindi-text" lang="hi">
                          हिन्दी PDF (soon)
                        </span>
                      </button>
                    )
                  ) : null}
                  {activePdfAvailable ? (
                    <a
                      href={activePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-ghost ${TOUCH}`}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      Open in a new tab
                    </a>
                  ) : null}
                </div>
              </section>
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-sm text-ink-2 min-w-0">
                  <FileText className="w-4 h-4 text-ink-3 shrink-0" aria-hidden="true" />
                  <span className="truncate">{activePdfName}</span>
                  <Badge tone="neutral" mono>
                    {unitWord} {padded}
                  </Badge>
                </p>
                {hiPdfUrl ? (
                  <Segmented
                    className={TOUCH_SEGMENT}
                    options={[
                      { value: 'en', label: 'English' },
                      { value: 'hi', label: 'हिन्दी' },
                    ]}
                    value={usingHindiPdf ? 'hi' : 'en'}
                    onChange={setPdfLang}
                    ariaLabel="PDF language"
                  />
                ) : null}
              </div>

              <UnitPdfReader
                pdfUrl={activePdfUrl}
                fileName={activePdfName}
                unitTitle={title}
                unitNumber={padded}
                pageCount={unitData.pageCount}
                topicCount={topics.length}
                languageLabel={usingHindiPdf ? 'हिन्दी' : 'English'}
                pdfAvailable={activePdfAvailable}
              />
            </div>
          )}

          <PrevNext
            className="mt-12"
            prev={
              prevUnit
                ? {
                    href: `${notesBase}/${prevUnit.slug}`,
                    title: `${unitWord} ${prevUnit.unitNumberPadded || prevUnit.unitNumber}: ${prevUnit.title}`,
                    hindiTitle: prevUnit.hi?.title,
                  }
                : null
            }
            next={
              nextUnit
                ? {
                    href: `${notesBase}/${nextUnit.slug}`,
                    title: `${unitWord} ${nextUnit.unitNumberPadded || nextUnit.unitNumber}: ${nextUnit.title}`,
                    hindiTitle: nextUnit.hi?.title,
                  }
                : null
            }
          />
        </div>
      </div>
    </div>
  );
}
