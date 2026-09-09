import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { 
  oLevelCanonicalUnits, 
  getCanonicalOLevelUnit, 
  oLevelMeta 
} from '@/data/canonicalNotes/olevel/index.js';
import CanonicalWebReader from '@/components/learning/CanonicalWebReader';

function checkPdfExists(relUrl) {
  if (!relUrl) return false;
  try {
    const p = path.join(process.cwd(), 'public', relUrl.replace(/^\//, ''));
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

export function generateStaticParams() {
  return oLevelCanonicalUnits.map((u) => ({
    unitSlug: u.slug
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const unitSlug = decodeURIComponent(resolvedParams?.unitSlug || '');
  const unit = getCanonicalOLevelUnit(unitSlug);

  if (!unit) {
    return { title: 'Unit not found' };
  }

  const n = unit.unitNumber;
  return {
    title: `Unit ${n}: ${unit.title} — full notes`,
    description: `Complete ${unit.title} notes for NIELIT O Level M2-R5.1 in English and हिन्दी…`,
    alternates: { canonical: `/notes/${unitSlug}` },
  };
}

export default async function OLevelUnitNotesPage({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const unitSlug = decodeURIComponent(resolvedParams?.unitSlug || '');
  const unitData = getCanonicalOLevelUnit(unitSlug);

  if (!unitData) {
    notFound();
  }

  const hindiPdfFileName = `O_Level_Unit_${unitData.unitNumberPadded}_Detailed_Notes_Hindi.pdf`;
  const hindiPdfUrl = `${oLevelMeta.pdfBaseUrl || '/notes/olevel'}/${hindiPdfFileName}`;
  const enPdfUrl = unitData.pdfUrl || `${oLevelMeta.pdfBaseUrl || '/notes/olevel'}/${unitData.pdfFileName}`;

  const enrichedUnit = {
    ...unitData,
    hiPdfUrl: unitData.hiPdfUrl || hindiPdfUrl,
    hiPdfFileName: unitData.hiPdfFileName || hindiPdfFileName,
    pdfAvailable: checkPdfExists(enPdfUrl),
    hiPdfAvailable: checkPdfExists(unitData.hiPdfUrl || hindiPdfUrl),
  };

  const unitIndex = oLevelCanonicalUnits.findIndex((u) => u.slug === unitSlug);
  const prevUnit = unitIndex > 0 ? oLevelCanonicalUnits[unitIndex - 1] : null;
  const nextUnit = unitIndex < oLevelCanonicalUnits.length - 1 ? oLevelCanonicalUnits[unitIndex + 1] : null;

  return (
    <CanonicalWebReader
      unitData={enrichedUnit}
      courseMeta={oLevelMeta}
      prevUnit={prevUnit}
      nextUnit={nextUnit}
      backHref="/notes"
      backLabel="Back to All O-Level Notes Library"
    />
  );
}
