import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { 
  cccCanonicalUnits, 
  getCanonicalCccUnit, 
  cccMeta 
} from '@/data/canonicalNotes/ccc/index.js';
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
  return cccCanonicalUnits.map((u) => ({
    unitSlug: u.slug
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const unitSlug = decodeURIComponent(resolvedParams?.unitSlug || '');
  const unit = getCanonicalCccUnit(unitSlug);

  if (!unit) {
    return { title: 'Unit not found' };
  }

  const n = unit.unitNumber;
  return {
    title: `Unit ${n}: ${unit.title} — full notes`,
    description: `Complete ${unit.title} notes for NIELIT CCC in English and हिन्दी…`,
    alternates: { canonical: `/ccc/notes/${unitSlug}` },
  };
}

export default async function CCCUnitNotesPage({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const unitSlug = decodeURIComponent(resolvedParams?.unitSlug || '');
  const unitData = getCanonicalCccUnit(unitSlug);

  if (!unitData) {
    notFound();
  }

  const hindiPdfFileName = `CCC_Unit_${unitData.unitNumberPadded}_Detailed_Notes_Hindi.pdf`;
  const hindiPdfUrl = `${cccMeta.pdfBaseUrl || '/notes/ccc'}/${hindiPdfFileName}`;
  const enPdfUrl = unitData.pdfUrl || `${cccMeta.pdfBaseUrl || '/notes/ccc'}/${unitData.pdfFileName}`;

  const enrichedUnit = {
    ...unitData,
    hiPdfUrl: unitData.hiPdfUrl || hindiPdfUrl,
    hiPdfFileName: unitData.hiPdfFileName || hindiPdfFileName,
    pdfAvailable: checkPdfExists(enPdfUrl),
    hiPdfAvailable: checkPdfExists(unitData.hiPdfUrl || hindiPdfUrl),
  };

  const currentIndex = cccCanonicalUnits.findIndex((u) => u.slug === unitSlug);
  const prevUnit = currentIndex > 0 ? cccCanonicalUnits[currentIndex - 1] : null;
  const nextUnit = currentIndex < cccCanonicalUnits.length - 1 ? cccCanonicalUnits[currentIndex + 1] : null;

  return (
    <CanonicalWebReader
      unitData={enrichedUnit}
      courseMeta={cccMeta}
      prevUnit={prevUnit}
      nextUnit={nextUnit}
      backHref="/ccc/notes"
      backLabel="Back to All CCC Notes Library"
    />
  );
}
