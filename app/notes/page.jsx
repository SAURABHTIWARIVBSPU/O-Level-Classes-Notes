import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { Award, BookOpen, Clock, Download, FileText, Layers } from 'lucide-react';
import {
  Badge,
  Breadcrumbs,
  Button,
  EmptyState,
  MetaItem,
  PageHeader,
  StatTile,
  IconTile,
  ModuleIcon,
} from '@/components/ui';
import { moduleVisual } from '@/lib/navigation';
import { oLevelNotesMeta, oLevelUnitNotesList } from '@/data/oLevelNotesData';

export const metadata = {
  title: 'Full unit notes — O Level M2-R5.1',
  description:
    'Long-form study notes for all 8 units of NIELIT O Level M2-R5.1 Web Designing & Publishing. Read each unit in the bilingual web reader, or download the English and हिन्दी PDF textbooks.',
};

/* 44px targets on touch, the standard control height from `sm` up. */
const TOUCH = 'min-h-11 sm:min-h-0';

function checkPdfExists(relUrl) {
  if (!relUrl) return false;
  try {
    const p = path.join(process.cwd(), 'public', relUrl.replace(/^\//, ''));
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

/**
 * The Hindi editions follow the same file convention as
 * data/canonicalNotes/localizationHelper.js, which is the only place that
 * name is defined. oLevelNotesData carries the English file only.
 */
function hindiPdf(unit) {
  const fileName = `O_Level_Unit_${unit.unitNumberPadded}_Detailed_Notes_Hindi.pdf`;
  return { fileName, url: `${oLevelNotesMeta.pdfBaseUrl}/${fileName}` };
}

export default function OLevelNotesLibraryPage() {
  const units = oLevelUnitNotesList || [];

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs items={[{ label: 'Full unit notes' }]} className="mb-5" />

      <PageHeader icon="FileText" tone="sky"
        eyebrow={`NIELIT O Level · ${oLevelNotesMeta.courseCode}`}
        title="Full unit notes"
        hindiTitle="संपूर्ण इकाई नोट्स"
        description={`Every unit of ${oLevelNotesMeta.courseName} written out in full — the same syllabus you sit the exam on, in one continuous read. Each unit opens in the bilingual web reader and is also published as a printable PDF in English and हिन्दी.`}
        actions={
          <Button variant="secondary" href="/syllabus" className={TOUCH}>
            <Layers className="w-4 h-4" aria-hidden="true" />
            Syllabus &amp; blueprint
          </Button>
        }
      />

      <section aria-labelledby="library-scale" className="mb-12">
        <h2 id="library-scale" className="sr-only">
          What the library covers
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <StatTile label="Units" value={oLevelNotesMeta.totalUnits} hint="Full syllabus coverage" icon={Layers} tone="violet" />
          <StatTile label="Topics" value={oLevelNotesMeta.totalTopics} hint="Every syllabus point" icon={BookOpen} tone="sky" />
          <StatTile
            label="Course hours"
            value={oLevelNotesMeta.totalHours}
            hint={`${oLevelNotesMeta.totalTheoryHours}h theory + ${oLevelNotesMeta.totalPracticalHours}h practical`}
          />
          <StatTile
            label="PDF pages"
            value={oLevelNotesMeta.totalPages}
            hint="English and हिन्दी editions"
          />
        </div>
      </section>

      <section aria-labelledby="unit-library">
        <h2 id="unit-library" className="text-h2 font-semibold text-ink">
          All {units.length} units
        </h2>
        <p className="mt-1.5 mb-6 text-base text-ink-2 max-w-measure leading-relaxed">
          Units run in syllabus order. Marks are awarded per group of units, so the weightage shown
          on a card is the weightage of the group it belongs to.
        </p>

        {units.length === 0 ? (
          <EmptyState
            title="No unit notes published yet"
            description="The long-form notes for this module are not available. The syllabus blueprint lists every topic in the meantime."
            action={
              <Button variant="primary" href="/syllabus">
                Open the syllabus
              </Button>
            }
          />
        ) : (
          <ul className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {units.map((unit) => {
              const hindi = hindiPdf(unit);
              const hasEnPdf = checkPdfExists(unit.pdfUrl);
              const hasHiPdf = checkPdfExists(hindi.url);
              const readHref = `/notes/${unit.slug}`;

              return (
                <li key={unit.slug} className="panel p-5 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2">
                    <IconTile tone={moduleVisual('olevel', unit.unitNumberPadded).tone} icon={<ModuleIcon name={moduleVisual('olevel', unit.unitNumberPadded).icon} />} />
                    <Badge tone="accent" mono>
                      Unit {unit.unitNumberPadded}
                    </Badge>
                    {unit.officialSection ? (
                      <span className="eyebrow">Section {unit.officialSection}</span>
                    ) : null}
                    <Badge tone="neutral" className="ml-auto">
                      {unit.marksGroup} · {unit.marksWeight.split(' ')[0]} marks
                    </Badge>
                  </div>

                  <h3 className="mt-3 text-h3 font-semibold text-ink">{unit.title}</h3>
                  <p className="text-sm font-medium text-ink-3 hindi-text" lang="hi">
                    {unit.hindiTitle}
                  </p>
                  <p className="mt-2 text-base text-ink-2 leading-relaxed line-clamp-3">
                    {unit.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-line grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-ink-3">
                    <MetaItem icon={BookOpen}>
                      <span className="tabular-nums">{unit.topicCount}</span> topics
                    </MetaItem>
                    <MetaItem icon={Clock}>
                      <span className="tabular-nums">{unit.totalHours}</span>h total
                    </MetaItem>
                    <MetaItem icon={FileText}>
                      <span className="tabular-nums">{unit.pageCount}</span> pages
                    </MetaItem>
                    <MetaItem icon={Award}>{unit.fileSizeKb}</MetaItem>
                  </div>

                  {unit.highlights?.length ? (
                    <details className="group mt-4 pt-3 border-t border-line text-xs">
                      <summary className="cursor-pointer select-none text-ink-3 hover:text-ink font-medium">
                        What this unit covers ({unit.highlights.length} core areas)
                      </summary>
                      <ul className="mt-2.5 space-y-1.5 pl-3 border-l-2 border-line text-ink-2">
                        {unit.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span
                              className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0"
                              aria-hidden="true"
                            />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : null}

                  <div className="mt-auto pt-5 flex flex-wrap items-center gap-2">
                    <Button variant="primary" href={readHref} className={TOUCH}>
                      <BookOpen className="w-4 h-4" aria-hidden="true" />
                      Read notes
                    </Button>

                    {hasEnPdf ? (
                      <a
                        href={unit.pdfUrl}
                        download={unit.pdfFileName}
                        className={`btn btn-secondary ${TOUCH}`}
                        aria-label={`Download the English PDF for Unit ${unit.unitNumberPadded} (${unit.pdfFileName})`}
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        English PDF
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className={`btn btn-secondary ${TOUCH} opacity-60 cursor-not-allowed`}
                        title="PDF textbook coming soon"
                        aria-label={`English PDF for Unit ${unit.unitNumberPadded} is not yet available`}
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        English PDF (soon)
                      </button>
                    )}

                    {hasHiPdf ? (
                      <a
                        href={hindi.url}
                        download={hindi.fileName}
                        className={`btn btn-secondary ${TOUCH}`}
                        aria-label={`Download the Hindi PDF for Unit ${unit.unitNumberPadded} (${hindi.fileName})`}
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
                        title="Hindi PDF textbook coming soon"
                        aria-label={`Hindi PDF for Unit ${unit.unitNumberPadded} is not yet available`}
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        <span className="hindi-text" lang="hi">
                          हिन्दी PDF (soon)
                        </span>
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
