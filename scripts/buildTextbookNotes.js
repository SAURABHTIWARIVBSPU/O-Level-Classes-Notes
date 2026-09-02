// Master NIELIT CCC Detailed Textbook Notes PDF Generator (English & Hindi)
// DIRECT CANONICAL SOURCE: data/canonicalNotes/ccc/index.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import * as fontkit from 'fontkit';
import { PdfRenderer, COLORS } from './pdfEngine.js';
import { cccCanonicalUnits, cccMeta } from '../data/canonicalNotes/ccc/index.js';
import { getLocalizedUnit, UI_LABELS } from '../data/canonicalNotes/localizationHelper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, '..', 'public', 'notes', 'ccc');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Master Unit Generator Function
async function renderUnitTextbookPdf(rawUnitData, lang = 'en') {
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

  // =========================================================================
  // 1. COVER & TITLE SECTION (NIELIT CCC BRANDED)
  // =========================================================================
  renderer.drawCoverHeader({
    courseId: 'CCC',
    courseCode: 'CCC',
    courseName: 'Course on Computer Concepts (CCC)',
    unitNumber: unitData.unitNumber,
    title: unitData.title,
    officialSection: unitData.officialSection,
    totalHours: unitData.totalHours,
    theoryHours: unitData.theoryHours,
    practicalHours: unitData.practicalHours,
    topicCount: unitData.topics.length,
    lang
  });

  // Unit Overview Box
  renderer.drawSubHeading(labels.unitOverview, 1);
  renderer.drawParagraph(unitData.introduction, { 
    size: 8.5, 
    lineHeight: lang === 'hi' ? 14 : 12,
    font: fonts.regular 
  });

  // What You Will Learn Box
  renderer.drawSubHeading(labels.whatYouWillLearn, 2);
  renderer.drawBulletList(unitData.whatYouWillLearn, { 
    size: 8, 
    lineHeight: lang === 'hi' ? 13 : 11 
  });

  // Divider
  renderer.ensureSpace(20);
  renderer.currentPage.drawLine({
    start: { x: renderer.marginLeft, y: renderer.currentY },
    end: { x: renderer.pageWidth - renderer.marginRight, y: renderer.currentY },
    thickness: 1,
    color: COLORS.primary
  });
  renderer.currentY -= 15;

  // =========================================================================
  // 2. TOPICS SECTION
  // =========================================================================
  unitData.topics.forEach((topic) => {
    renderer.ensureSpace(60);

    // Topic Header Bar
    renderer.drawTopicHeader(topic.code, topic.title);

    // 1. What is it?
    if (topic.whatIsIt) {
      renderer.drawSubHeading(labels.whatIsIt, 2);
      renderer.drawParagraph(topic.whatIsIt);
    }

    // 2. Why is it important?
    if (topic.whyImportant) {
      renderer.drawSubHeading(labels.whyImportant, 2);
      renderer.drawParagraph(topic.whyImportant);
    }

    // 3. How does it work?
    if (topic.howItWorks) {
      renderer.drawSubHeading(labels.howItWorks, 2);
      renderer.drawParagraph(topic.howItWorks);
    }

    // Vector Concept Diagram
    if (topic.diagramType) {
      renderer.drawDiagram(topic.diagramType);
    }

    // Formatted Code Block (if any - Code is never translated)
    if (topic.codeSnippet) {
      renderer.drawCodeBlock(topic.codeSnippet, topic.codeLanguage || 'CODE / COMMAND');
    }

    // 4. Key Components / Characteristics
    if (topic.componentsOrTypes && topic.componentsOrTypes.length) {
      renderer.drawSubHeading(topic.componentsTitle || labels.keyComponents, 2);
      renderer.drawBulletList(topic.componentsOrTypes);
    }

    // Comparison / Specification Table
    if (topic.table) {
      if (topic.tableTitle) {
        renderer.drawSubHeading(topic.tableTitle, 2);
      }
      renderer.drawTable(topic.table.headers, topic.table.rows, topic.table.colWidths);
    }

    // 5. Practical Example
    if (topic.practicalExample) {
      renderer.drawCalloutBox(
        labels.practicalExample,
        topic.practicalExample,
        'analogy'
      );
    }

    // 6. Important Points & Exam Pitfalls
    if (topic.importantPoints && topic.importantPoints.length) {
      renderer.drawCalloutBox(
        labels.examPoints,
        topic.importantPoints,
        'exam'
      );
    }

    // 7. Quick Revision
    if (topic.quickRevision) {
      renderer.drawCalloutBox(
        labels.quickRecap,
        topic.quickRevision,
        'info'
      );
    }
  });

  // =========================================================================
  // 3. UNIT REVISION & TERMS SECTION
  // =========================================================================
  if (unitData.unitRevision && unitData.unitRevision.length) {
    renderer.ensureSpace(80);
    renderer.drawTopicHeader(labels.revisionTitle, labels.revisionHeading);
    renderer.drawParagraph(
      labels.revisionDesc,
      { font: fonts.italic, size: 8.5 }
    );
    renderer.drawBulletList(unitData.unitRevision);
  }

  // Key Terms & Full Forms Glossary Table
  if (unitData.keyTerms && unitData.keyTerms.length) {
    renderer.ensureSpace(80);
    renderer.drawSubHeading(labels.keyTermsTitle, 2);
    renderer.drawTable(
      labels.termHeaders,
      unitData.keyTerms.map(t => [t.term, t.fullForm, t.desc]),
      [90, 180, 241]
    );
  }

  // End of Unit Box
  renderer.ensureSpace(35);
  renderer.currentY -= 10;
  renderer.currentPage.drawRectangle({
    x: renderer.marginLeft,
    y: renderer.currentY - 22,
    width: renderer.contentWidth,
    height: 22,
    color: COLORS.primaryLight,
    borderColor: COLORS.primary,
    borderWidth: 1
  });

  const endText = lang === 'hi'
    ? `--- इकाई ${String(unitData.unitNumber).padStart(2, '0')} विस्तृत अध्ययन नोट्स समाप्त • NIELIT CCC (80 घंटे) ---`
    : `--- END OF UNIT ${String(unitData.unitNumber).padStart(2, '0')} DETAILED STUDY BOOK • NIELIT CCC (80 HOURS) ---`;
  
  renderer.currentPage.drawText(endText, {
    x: renderer.marginLeft + (lang === 'hi' ? 20 : 35),
    y: renderer.currentY - 15,
    size: 8,
    font: fonts.bold,
    color: COLORS.primaryDark
  });

  // Finalize Page Headers and Footers with true total page count & CCC branding
  renderer.finalizeHeadersAndFooters(unitData.unitNumber, unitData.title, {
    courseId: 'CCC',
    courseCode: 'CCC',
    lang
  });

  const pdfBytes = await pdfDoc.save();
  const unitNumPadded = String(unitData.unitNumber).padStart(2, '0');
  const fileName = lang === 'hi'
    ? `CCC_Unit_${unitNumPadded}_Detailed_Notes_Hindi.pdf`
    : `CCC_Unit_${unitNumPadded}_Detailed_Notes.pdf`;
  const filePath = path.join(outputDir, fileName);

  fs.writeFileSync(filePath, pdfBytes);
  console.log(`[OK - ${lang.toUpperCase()}] Generated ${fileName} (${pdfDoc.getPageCount()} pages, ${(pdfBytes.length / 1024).toFixed(1)} KB)`);

  return {
    unitNumber: unitData.unitNumber,
    lang,
    fileName,
    pageCount: pdfDoc.getPageCount(),
    sizeKb: (pdfBytes.length / 1024).toFixed(1)
  };
}

// Master Build Runner
async function buildAllTextbookNotes() {
  console.log('===============================================================');
  console.log('STARTING DUAL-LANGUAGE NIELIT CCC TEXTBOOK NOTES PDF GENERATION');
  console.log('===============================================================\n');

  const results = [];
  for (const unit of cccCanonicalUnits) {
    // English
    const resEn = await renderUnitTextbookPdf(unit, 'en');
    results.push(resEn);
    // Hindi
    const resHi = await renderUnitTextbookPdf(unit, 'hi');
    results.push(resHi);
  }

  console.log('\n===============================================================');
  console.log('ALL 9 CCC UNITS GENERATED IN BOTH ENGLISH & HINDI!');
  results.forEach(r => console.log(`Unit ${r.unitNumber} (${r.lang.toUpperCase()}): ${r.fileName} - ${r.pageCount} Pages (${r.sizeKb} KB)`));
  console.log('===============================================================');
}

buildAllTextbookNotes().catch(err => console.error(err));
