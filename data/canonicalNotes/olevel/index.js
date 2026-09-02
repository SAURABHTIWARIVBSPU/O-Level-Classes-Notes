// Canonical Single Source of Truth for NIELIT O-Level Study Notes
import { getUnit1Canonical } from './unit1Canonical.js';
import { getUnit2Canonical } from './unit2Canonical.js';
import { getUnit3Canonical } from './unit3Canonical.js';
import { getUnit4Canonical } from './unit4Canonical.js';
import { getUnit5Canonical } from './unit5Canonical.js';
import { getUnit6Canonical } from './unit6Canonical.js';
import { getUnit7Canonical } from './unit7Canonical.js';
import { getUnit8Canonical } from './unit8Canonical.js';

import { getUnit1Hindi } from './unit1Hindi.js';
import { getUnit2Hindi } from './unit2Hindi.js';
import { getUnit3Hindi } from './unit3Hindi.js';
import { getUnit4Hindi } from './unit4Hindi.js';
import { getUnit5Hindi } from './unit5Hindi.js';
import { getUnit6Hindi } from './unit6Hindi.js';
import { getUnit7Hindi } from './unit7Hindi.js';
import { getUnit8Hindi } from './unit8Hindi.js';

import { getLocalizedUnit } from '../localizationHelper.js';

export const oLevelMeta = {
  courseId: "O_LEVEL",
  courseCode: "M2-R5.1",
  courseName: "Web Designing and Publishing (Module M2-R5.1)",
  courseShortName: "NIELIT O LEVEL",
  curriculum: "National Institute of Electronics & Information Technology (NIELIT)",
  syllabusRev: "Revision 5.1 Official Curriculum",
  totalHours: 120,
  theoryHours: 48,
  practicalHours: 72,
  totalUnits: 8,
  totalTopics: 87,
  totalPages: 95,
  pdfBaseUrl: "/notes/olevel"
};

const rawUnits = [
  getUnit1Canonical(),
  getUnit2Canonical(),
  getUnit3Canonical(),
  getUnit4Canonical(),
  getUnit5Canonical(),
  getUnit6Canonical(),
  getUnit7Canonical(),
  getUnit8Canonical()
];

const hindiGetters = [
  getUnit1Hindi,
  getUnit2Hindi,
  getUnit3Hindi,
  getUnit4Hindi,
  getUnit5Hindi,
  getUnit6Hindi,
  getUnit7Hindi,
  getUnit8Hindi
];

// Enrich units with consistent course identification, Hindi localization, and URLs
export const oLevelCanonicalUnits = rawUnits.map((u, idx) => {
  const numPadded = String(u.unitNumber).padStart(2, '0');
  const slug = `unit-${u.unitNumber}`;
  const pdfFileName = `O_Level_Unit_${numPadded}_Detailed_Notes.pdf`;
  const pdfUrl = `/notes/olevel/${pdfFileName}`;
  const hiPdfFileName = `O_Level_Unit_${numPadded}_Detailed_Notes_Hindi.pdf`;
  const hiPdfUrl = `/notes/olevel/${hiPdfFileName}`;

  const hiData = hindiGetters[idx]();

  // Merge Hindi data at topic level while keeping code and shared assets
  const mergedTopics = u.topics.map((top, tIdx) => {
    const hiTopic = (hiData.topics && hiData.topics[tIdx]) ? hiData.topics[tIdx] : null;
    return {
      ...top,
      en: {
        title: top.title,
        whatIsIt: top.whatIsIt,
        whyImportant: top.whyImportant,
        howItWorks: top.howItWorks,
        componentsTitle: top.componentsTitle,
        componentsOrTypes: top.componentsOrTypes,
        tableTitle: top.tableTitle,
        table: top.table,
        practicalExample: top.practicalExample,
        importantPoints: top.importantPoints,
        quickRevision: top.quickRevision
      },
      hi: hiTopic ? {
        title: hiTopic.title,
        whatIsIt: hiTopic.whatIsIt,
        whyImportant: hiTopic.whyImportant,
        howItWorks: hiTopic.howItWorks,
        componentsTitle: hiTopic.componentsTitle,
        componentsOrTypes: hiTopic.componentsOrTypes,
        tableTitle: hiTopic.tableTitle,
        table: hiTopic.table,
        practicalExample: hiTopic.practicalExample,
        importantPoints: hiTopic.importantPoints,
        quickRevision: hiTopic.quickRevision
      } : null
    };
  });

  return {
    ...u,
    topics: mergedTopics,
    hi: hiData,
    courseId: "O_LEVEL",
    courseCode: "M2-R5.1",
    courseName: "Web Designing and Publishing (Module M2-R5.1)",
    courseShortName: "NIELIT O LEVEL",
    curriculum: "National Institute of Electronics & Information Technology (NIELIT)",
    unitNumberPadded: numPadded,
    slug,
    pdfFileName,
    pdfUrl,
    hiPdfFileName,
    hiPdfUrl
  };
});

export const oLevelCanonicalBySlug = oLevelCanonicalUnits.reduce((acc, unit) => {
  acc[unit.slug] = unit;
  return acc;
}, {});

export function getCanonicalOLevelUnit(slug, lang = 'en') {
  const unit = oLevelCanonicalBySlug[slug] || null;
  if (!unit) return null;
  return getLocalizedUnit(unit, lang);
}
