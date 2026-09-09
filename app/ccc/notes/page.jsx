import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import {
  ArrowRight,
  BookOpen,
  Clock,
  Download,
  FileText,
  Layers,
  Search,
  ShieldCheck,
} from 'lucide-react';

import {
  Badge,
  Breadcrumbs,
  Button,
  EmptyState,
  MetaItem,
  PageHeader,
  SectionHeading,
  StatTile,
  IconTile,
  ModuleIcon,
} from '@/components/ui';
import { moduleVisual } from '@/lib/navigation';
import { cccNotesMeta, cccUnitNotesList } from '@/data/cccNotesData';

function checkPdfExists(relUrl) {
  if (!relUrl) return false;
  try {
    const p = path.join(process.cwd(), 'public', relUrl.replace(/^\//, ''));
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

export const metadata = {
  title: 'CCC full chapter notes — English and हिन्दी',
  description:
    'The nine long-form CCC units in one place. Read each unit in the browser or download the print-ready PDF in English or Hindi.',
};

const SUGGESTED = ['LibreOffice', 'internet', 'UPI', 'security', 'operating system'];

/** The web reader route is keyed by unit number, not by the chapter slug. */
const readerHref = (unit) => `/ccc/notes/unit-${unit.unitNumber}`;

/** Same filename convention the canonical notes index uses. */
const hindiPdf = (unit) =>
  unit.hiPdfUrl || `${cccNotesMeta.pdfBaseUrl}/CCC_Unit_${unit.unitNumberPadded}_Detailed_Notes_Hindi.pdf`;
const hindiPdfName = (unit) =>
  unit.hiPdfFileName || `CCC_Unit_${unit.unitNumberPadded}_Detailed_Notes_Hindi.pdf`;

function matchingHighlights(unit, query) {
  if (!query) return [];
  const q = query.toLowerCase();
  return (unit.highlights || []).filter((h) => h.toLowerCase().includes(q)).slice(0, 3);
}

function matches(unit, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  return [unit.title, unit.hindiTitle, unit.description, unit.officialSection, ...(unit.highlights || [])]
    .filter(Boolean)
    .some((field) => String(field).toLowerCase().includes(q));
}

export default function CCCNotesLibraryPage({ searchParams }) {
  const query = (searchParams?.q || '').trim();
  const unitFilter = searchParams?.unit || 'all';

  const units = cccUnitNotesList.filter(
    (unit) => (unitFilter === 'all' || unit.slug === unitFilter) && matches(unit, query),
  );
  const filtering = Boolean(query) || unitFilter !== 'all';

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs
        className="mb-5"
        items={[{ label: 'CCC', href: '/ccc' }, { label: 'Full chapter notes' }]}
      />

      <PageHeader icon="FileText" tone="sky"
        eyebrow="Long-form notes"
        title="Full chapter notes"
        hindiTitle="सम्पूर्ण अध्याय नोट्स — अंग्रेज़ी एवं हिन्दी"
        description="Each of the nine chapters written out in full: the same syllabus, in continuous prose with comparison tables and step-by-step procedures. Read it in the browser, or take the PDF with you."
        actions={
          <>
            <Button variant="primary" href={readerHref(cccUnitNotesList[0])} iconRight={ArrowRight}>
              Open Unit 1
            </Button>
            <Button variant="secondary" href="/ccc/syllabus">
              Syllabus
            </Button>
          </>
        }
        meta={
          <>
            <MetaItem icon={Layers}>
              {cccNotesMeta.totalUnits} units · {cccNotesMeta.totalTopics} topics
            </MetaItem>
            <MetaItem icon={FileText}>{cccNotesMeta.totalPages} pages</MetaItem>
            <MetaItem icon={Clock}>{cccNotesMeta.totalHours} hours of course time</MetaItem>
          </>
        }
      />

      <div className="space-y-12">
        {/* ------------------------------------------------------------ search */}
        <section aria-labelledby="find-a-unit">
          <SectionHeading
            id="find-a-unit"
            eyebrow="Find a unit"
            title="Search the notes"
            description="Search runs over unit titles, descriptions and the key topics inside each unit."
          />

          <form method="get" action="/ccc/notes" className="panel p-4 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 min-w-0">
              <label htmlFor="notes-q" className="sr-only">
                Search the CCC notes
              </label>
              <Search
                className="w-4 h-4 text-ink-4 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="notes-q"
                name="q"
                type="search"
                defaultValue={query}
                placeholder="LibreOffice, UPI, network, shortcuts…"
                className="input pl-9"
              />
            </div>

            <div className="sm:w-56">
              <label htmlFor="notes-unit" className="sr-only">
                Limit to one unit
              </label>
              <select id="notes-unit" name="unit" defaultValue={unitFilter} className="input">
                <option value="all">All {cccUnitNotesList.length} units</option>
                {cccUnitNotesList.map((unit) => (
                  <option key={unit.slug} value={unit.slug}>
                    Unit {unit.unitNumberPadded} · {unit.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Button type="submit" variant="primary" className="flex-1 sm:flex-none">
                Search
              </Button>
              {filtering ? (
                <Button variant="ghost" href="/ccc/notes">
                  Clear
                </Button>
              ) : null}
            </div>
          </form>
        </section>

        {/* ------------------------------------------------------------- units */}
        <section aria-labelledby="unit-library">
          <SectionHeading
            id="unit-library"
            eyebrow="The library"
            title={
              filtering
                ? `${units.length} of ${cccUnitNotesList.length} units match`
                : `All ${cccUnitNotesList.length} units`
            }
            description="Read online for the searchable, bilingual version; download the PDF for offline revision and printing."
          />

          {units.length ? (
            <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {units.map((unit) => {
                const highlights = matchingHighlights(unit, query);
                return (
                  <li key={unit.slug} className="panel p-5 flex flex-col">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="flex items-center gap-2">
                        <IconTile size="sm" tone={moduleVisual('ccc', unit.unitNumber).tone} icon={<ModuleIcon name={moduleVisual('ccc', unit.unitNumber).icon} />} />
                        <Badge tone="neutral" mono>
                          Unit {unit.unitNumberPadded}
                        </Badge>
                      </span>
                      {unit.officialSection ? (
                        <span className="text-xs text-ink-4 font-mono">{unit.officialSection}</span>
                      ) : null}
                    </div>

                    <h3 className="text-h4 font-bold text-ink leading-snug">
                      <Link
                        href={readerHref(unit)}
                        className="hover:text-accent transition-colors duration-fast"
                      >
                        {unit.title}
                      </Link>
                    </h3>
                    {unit.hindiTitle ? (
                      <p className="mt-0.5 text-sm text-hindi hindi-text" lang="hi">
                        {unit.hindiTitle}
                      </p>
                    ) : null}

                    {unit.description ? (
                      <p className="mt-2.5 text-sm text-ink-3 leading-relaxed line-clamp-3">
                        {unit.description}
                      </p>
                    ) : null}

                    {highlights.length ? (
                      <div className="mt-3">
                        <p className="eyebrow mb-1">Matches</p>
                        <ul className="space-y-1">
                          {highlights.map((h) => (
                            <li key={h} className="text-xs text-ink-2 leading-relaxed">
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
                      <MetaItem icon={Layers}>{unit.topicCount} topics</MetaItem>
                      <MetaItem icon={FileText}>{unit.pageCount} pages</MetaItem>
                      {unit.totalHours ? <MetaItem icon={Clock}>{unit.totalHours}h</MetaItem> : null}
                    </div>

                    <div className="mt-auto pt-4 flex flex-wrap items-center gap-2">
                      <Button variant="primary" size="sm" href={readerHref(unit)} icon={BookOpen}>
                        Read online
                      </Button>
                      {checkPdfExists(unit.pdfUrl) ? (
                        <a
                          href={unit.pdfUrl}
                          download={unit.pdfFileName}
                          className="btn btn-secondary btn-sm"
                        >
                          <Download className="w-3.5 h-3.5" aria-hidden="true" />
                          PDF · EN
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="btn btn-secondary btn-sm opacity-60 cursor-not-allowed"
                          title="PDF textbook coming soon"
                          aria-label={`English PDF for Unit ${unit.unitNumberPadded} is not yet available`}
                        >
                          <Download className="w-3.5 h-3.5" aria-hidden="true" />
                          PDF · EN (soon)
                        </button>
                      )}
                      {checkPdfExists(hindiPdf(unit)) ? (
                        <a
                          href={hindiPdf(unit)}
                          download={hindiPdfName(unit)}
                          className="btn btn-secondary btn-sm"
                        >
                          <Download className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>
                            PDF ·{' '}
                            <span className="hindi-text" lang="hi">
                              हिन्दी
                            </span>
                          </span>
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="btn btn-secondary btn-sm opacity-60 cursor-not-allowed"
                          title="Hindi PDF textbook coming soon"
                          aria-label={`Hindi PDF for Unit ${unit.unitNumberPadded} is not yet available`}
                        >
                          <Download className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>
                            PDF ·{' '}
                            <span className="hindi-text" lang="hi">
                              हिन्दी (soon)
                            </span>
                          </span>
                        </button>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <EmptyState
              icon={Search}
              title={query ? `Nothing matches “${query}”` : 'No units match that filter'}
              description="Check the spelling, try a single word instead of a phrase, or search for a topic name rather than a shortcut key."
              action={
                <div className="flex flex-wrap justify-center gap-2">
                  {SUGGESTED.map((term) => (
                    <Button key={term} variant="secondary" size="sm" href={`/ccc/notes?q=${encodeURIComponent(term)}`}>
                      {term}
                    </Button>
                  ))}
                  <Button variant="ghost" size="sm" href="/ccc/notes">
                    Show all units
                  </Button>
                </div>
              }
            />
          )}
        </section>

        {/* ------------------------------------------------------- what this is */}
        <section aria-labelledby="library-facts">
          <SectionHeading
            id="library-facts"
            eyebrow="About these notes"
            title="Indexed against the official syllabus"
            description={`${cccNotesMeta.curriculum} · ${cccNotesMeta.courseCode}. Every table, procedure and page is traceable to a syllabus item — nothing extra, nothing missing.`}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <StatTile label="Units" value={cccNotesMeta.totalUnits} hint="One per chapter" icon={Layers} />
            <StatTile
              label="Topics"
              value={cccNotesMeta.totalTopics}
              hint="Across the whole course"
              icon={BookOpen}
            />
            <StatTile
              label="Pages"
              value={cccNotesMeta.totalPages}
              hint="Print-ready A4"
              icon={FileText}
            />
            <StatTile
              label="Course time"
              value={`${cccNotesMeta.totalHours}h`}
              hint={`${cccNotesMeta.totalTheoryHours}h theory + ${cccNotesMeta.totalPracticalHours}h practical`}
              icon={Clock}
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-ok" aria-hidden="true" />
            <p className="text-base text-ink-2">
              Reading the notes is not the same as practising them.{' '}
              <Link href="/ccc/mcqs" className="text-accent hover:underline">
                Answer the chapter questions
              </Link>{' '}
              after each unit.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
