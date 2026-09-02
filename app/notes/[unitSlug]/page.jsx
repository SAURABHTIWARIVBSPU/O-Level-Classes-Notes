import React from 'react';
import { notFound } from 'next/navigation';
import { 
  oLevelCanonicalUnits, 
  getCanonicalOLevelUnit, 
  oLevelMeta 
} from '@/data/canonicalNotes/olevel/index.js';
import CanonicalWebReader from '@/components/learning/CanonicalWebReader';

export function generateStaticParams() {
  return oLevelCanonicalUnits.map((u) => ({
    unitSlug: u.slug
  }));
}

export default async function OLevelUnitNotesPage({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const unitSlug = decodeURIComponent(resolvedParams?.unitSlug || '');
  const unitData = getCanonicalOLevelUnit(unitSlug);

  if (!unitData) {
    notFound();
  }

  const unitIndex = oLevelCanonicalUnits.findIndex((u) => u.slug === unitSlug);
  const prevUnit = unitIndex > 0 ? oLevelCanonicalUnits[unitIndex - 1] : null;
  const nextUnit = unitIndex < oLevelCanonicalUnits.length - 1 ? oLevelCanonicalUnits[unitIndex + 1] : null;

  return (
    <CanonicalWebReader
      unitData={unitData}
      courseMeta={oLevelMeta}
      prevUnit={prevUnit}
      nextUnit={nextUnit}
      backHref="/notes"
      backLabel="Back to All O-Level Notes Library"
    />
  );
}
