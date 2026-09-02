import React from 'react';
import { notFound } from 'next/navigation';
import { 
  cccCanonicalUnits, 
  getCanonicalCccUnit, 
  cccMeta 
} from '@/data/canonicalNotes/ccc/index.js';
import CanonicalWebReader from '@/components/learning/CanonicalWebReader';

export function generateStaticParams() {
  return cccCanonicalUnits.map((u) => ({
    unitSlug: u.slug
  }));
}

export default async function CCCUnitNotesPage({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const unitSlug = decodeURIComponent(resolvedParams?.unitSlug || '');
  const unitData = getCanonicalCccUnit(unitSlug);

  if (!unitData) {
    notFound();
  }

  const currentIndex = cccCanonicalUnits.findIndex((u) => u.slug === unitSlug);
  const prevUnit = currentIndex > 0 ? cccCanonicalUnits[currentIndex - 1] : null;
  const nextUnit = currentIndex < cccCanonicalUnits.length - 1 ? cccCanonicalUnits[currentIndex + 1] : null;

  return (
    <CanonicalWebReader
      unitData={unitData}
      courseMeta={cccMeta}
      prevUnit={prevUnit}
      nextUnit={nextUnit}
      backHref="/ccc/notes"
      backLabel="Back to All CCC Notes Library"
    />
  );
}
