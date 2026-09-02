// Master NIELIT O-Level (Module M2-R5.1) Detailed Textbook Notes PDF Generator (English & Hindi)
// DIRECT CANONICAL SOURCE: data/canonicalNotes/olevel/index.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import * as fontkit from 'fontkit';
import { PdfRenderer, COLORS } from './pdfEngine.js';
import { oLevelCanonicalUnits, oLevelMeta } from '../data/canonicalNotes/olevel/index.js';
import { getLocalizedUnit, UI_LABELS } from '../data/canonicalNotes/localizationHelper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, '..', 'public', 'notes', 'olevel');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function renderOLevelUnitTextbookPdf(rawUnitData, lang = 'en') {
  const pdfDoc = await PDFDocument.create();
  const unitData = getLocalizedUnit(rawUnitData, lang);
  const labels = UI_LABELS[lang] || UI_LABELS.en;

  let fonts;
  if (lang === 'hi') {
    pdfDoc.registerFontkit(fontkit);
    const fontRegularPath = path.join(__dirname, '..', 'fonts', 'NotoSansDevanagari-Regular.ttf');
    const fontBoldPath = path.join(__dirname, '..', 'fonts', 'NotoSansDevanagari-Bold.ttf');
    const regularBytes = fs.readFileSync(fontRegularPath);
    const boldBytes = fs.readFileSync(fontBoldPath);

    const hindiRegular = await pdfDoc.embedFont(regularBytes, { subset: false });
    const hindiBold = await pdfDoc.embedFont(boldBytes, { subset: false });

    fonts = {
      regular: hindiRegular,
      bold: hindiBold,
      italic: hindiRegular,
      mono: hindiRegular
    };
  } else {
    fonts = {
      regular: await pdfDoc.embedFont(StandardFonts.Helvetica),
      bold: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      italic: await pdfDoc.embedFont(StandardFonts.HelveticaOblique),
      mono: await pdfDoc.embedFont(StandardFonts.Courier)
    };
  }

  const renderer = new PdfRenderer(pdfDoc, fonts, {
    lang,
    unitMeta: {
      unitNumber: unitData.unitNumber,
      title: unitData.title
    }
  });

  // 1. Cover Header (NIELIT O LEVEL BRANDED)
  renderer.drawCoverHeader({
    courseId: 'O_LEVEL',
    courseCode: 'M2-R5.1',
    courseName: 'Web Designing and Publishing (Module M2-R5.1)',
    unitNumber: unitData.unitNumber,
    title: unitData.title,
    officialSection: unitData.officialSection,
    totalHours: unitData.totalHours,
    theoryHours: unitData.theoryHours,
    practicalHours: unitData.practicalHours,
    topicCount: unitData.topics.length,
    lang
  });

  // 2. Unit Introduction
  renderer.drawSubHeading(labels.unitOverview, 1);
  renderer.drawParagraph(unitData.introduction, {
    lineHeight: lang === 'hi' ? 14 : 12.5,
    font: fonts.regular,
    size: 8.5
  });

  // 3. What You Will Learn
  if (unitData.whatYouWillLearn && unitData.whatYouWillLearn.length) {
    renderer.drawSubHeading(labels.whatYouWillLearn, 2);
    renderer.drawBulletList(unitData.whatYouWillLearn);
  }

  // 4. Render All Syllabus Topics
  unitData.topics.forEach((topic) => {
    renderer.ensureSpace(60);

    // Topic Header Bar
    renderer.drawTopicHeader(topic.code, topic.title);

    // 1. WHAT IS THIS?
    if (topic.whatIsIt) {
      renderer.drawSubHeading(labels.whatIsIt, 2);
      renderer.drawParagraph(topic.whatIsIt);
    }

    // 2. WHY IS IT IMPORTANT?
    if (topic.whyImportant) {
      renderer.drawSubHeading(labels.whyImportant, 2);
      renderer.drawParagraph(topic.whyImportant);
    }

    // 3. HOW DOES IT WORK?
    if (topic.howItWorks) {
      renderer.drawSubHeading(labels.howItWorks, 2);
      renderer.drawParagraph(topic.howItWorks);
    }

    // Concept Diagram (if present)
    if (topic.diagramType) {
      renderer.drawDiagram(topic.diagramType);
    }

    // Formatted Code Block (if present - Code is never translated)
    if (topic.codeSnippet) {
      renderer.drawCodeBlock(topic.codeSnippet, topic.codeLanguage || 'CODE SNIPPET / HTML / CSS / JS');
    }

    // 4. KEY COMPONENTS / TYPES / CHARACTERISTICS
    if (topic.componentsOrTypes && topic.componentsOrTypes.length) {
      renderer.drawSubHeading(topic.componentsTitle || labels.keyComponents, 2);
      renderer.drawBulletList(topic.componentsOrTypes);
    }

    // Technical Specification / Comparison Table
    if (topic.table) {
      if (topic.tableTitle) {
        renderer.drawSubHeading(topic.tableTitle, 2);
      }
      renderer.drawTable(topic.table.headers, topic.table.rows, topic.table.colWidths);
    }

    // 5. PRACTICAL REAL-WORLD EXAMPLE
    if (topic.practicalExample) {
      renderer.drawCalloutBox(
        labels.practicalExample,
        topic.practicalExample,
        'analogy'
      );
    }

    // 6. IMPORTANT FACTS & EXAM POINTS
    if (topic.importantPoints && topic.importantPoints.length) {
      renderer.drawCalloutBox(
        labels.examPoints,
        topic.importantPoints,
        'exam'
      );
    }

    // 7. QUICK TOPIC RECAP
    if (topic.quickRevision) {
      renderer.drawCalloutBox(
        labels.quickRecap,
        topic.quickRevision,
        'info'
      );
    }
  });

  // 5. Unit Comprehensive Revision Checklist
  if (unitData.unitRevision && unitData.unitRevision.length) {
    renderer.ensureSpace(80);
    renderer.drawTopicHeader(labels.revisionTitle, labels.revisionHeading);
    renderer.drawParagraph(labels.revisionDesc, { font: fonts.italic, size: 8.5 });
    renderer.drawBulletList(unitData.unitRevision);
  }

  // 6. Key Terms & Full Forms Table
  if (unitData.keyTerms && unitData.keyTerms.length) {
    renderer.ensureSpace(80);
    renderer.drawSubHeading(labels.keyTermsTitle, 1);

    const termRows = unitData.keyTerms.map(k => [k.term, k.fullForm, k.desc]);
    renderer.drawTable(labels.termHeaders, termRows, [95, 175, 241]);
  }

  // 7. Finalize Running Headers & Dynamic Page Numbers with O-Level branding
  renderer.finalizeHeadersAndFooters(unitData.unitNumber, unitData.title, {
    courseId: 'O_LEVEL',
    courseCode: 'M2-R5.1',
    lang
  });

  const pdfBytes = await pdfDoc.save();
  const unitNumPadded = String(unitData.unitNumber).padStart(2, '0');
  const fileName = lang === 'hi'
    ? `O_Level_Unit_${unitNumPadded}_Detailed_Notes_Hindi.pdf`
    : `O_Level_Unit_${unitNumPadded}_Detailed_Notes.pdf`;
  const filePath = path.join(outputDir, fileName);

  fs.writeFileSync(filePath, pdfBytes);
  const fileSizeKb = (pdfBytes.length / 1024).toFixed(1);
  const totalPages = pdfDoc.getPageCount();

  console.log(`[OK - ${lang.toUpperCase()}] Generated ${fileName} (${totalPages} pages, ${fileSizeKb} KB)`);

  return {
    unitNumber: unitData.unitNumber,
    lang,
    fileName,
    totalPages,
    fileSizeKb: `${fileSizeKb} KB`
  };
}

async function buildAllOLevelTextbookNotes() {
  console.log('===============================================================');
  console.log('STARTING DUAL-LANGUAGE NIELIT O-LEVEL TEXTBOOK PDF GENERATION');
  console.log('===============================================================\n');

  const results = [];
  for (const unit of oLevelCanonicalUnits) {
    try {
      // English
      const resEn = await renderOLevelUnitTextbookPdf(unit, 'en');
      results.push(resEn);
      // Hindi
      const resHi = await renderOLevelUnitTextbookPdf(unit, 'hi');
      results.push(resHi);
    } catch (err) {
      console.error(`[ERROR] Generating Unit ${unit.unitNumber}:`, err);
    }
  }

  console.log('\n===============================================================');
  console.log('ALL 8 O-LEVEL UNITS GENERATED IN BOTH ENGLISH & HINDI!');
  results.forEach(r => {
    console.log(`Unit ${r.unitNumber} (${r.lang.toUpperCase()}): ${r.fileName} - ${r.totalPages} Pages (${r.fileSizeKb})`);
  });
  console.log('===============================================================');
}

buildAllOLevelTextbookNotes().catch(err => console.error(err));
