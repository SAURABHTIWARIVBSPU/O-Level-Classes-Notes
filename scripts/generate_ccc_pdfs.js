import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import chapter topics
import { chapter1Topics } from '../data/cccTopics/chapter1Topics.js';
import { chapter2Topics } from '../data/cccTopics/chapter2Topics.js';
import { chapter3Topics } from '../data/cccTopics/chapter3Topics.js';
import { chapter4Topics } from '../data/cccTopics/chapter4Topics.js';
import { chapter5Topics } from '../data/cccTopics/chapter5Topics.js';
import { chapter6Topics } from '../data/cccTopics/chapter6Topics.js';
import { chapter7Topics } from '../data/cccTopics/chapter7Topics.js';
import { chapter8Topics } from '../data/cccTopics/chapter8Topics.js';
import { chapter9Topics } from '../data/cccTopics/chapter9Topics.js';
import { cccChaptersData, cccSyllabusMeta } from '../data/cccSyllabusData.js';

const allChapterTopics = {
  'chapter-1': chapter1Topics,
  'chapter-2': chapter2Topics,
  'chapter-3': chapter3Topics,
  'chapter-4': chapter4Topics,
  'chapter-5': chapter5Topics,
  'chapter-6': chapter6Topics,
  'chapter-7': chapter7Topics,
  'chapter-8': chapter8Topics,
  'chapter-9': chapter9Topics
};

// Target output directory
const outputDir = path.join(__dirname, '..', 'public', 'notes', 'ccc');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Clean markdown text for clean PDF rendering
function cleanText(mdText) {
  if (!mdText) return '';
  return mdText
    .replace(/###\s+/g, '')
    .replace(/##\s+/g, '')
    .replace(/#\s+/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/[^\x20-\x7E\n\r\t]/g, ' ') // Keep standard printable ASCII
    .trim();
}

// Wrap text to fit page width
function wrapText(text, maxChars = 85) {
  if (!text) return [];
  const lines = [];
  const rawParagraphs = text.split('\n');

  for (const para of rawParagraphs) {
    if (para.trim() === '') {
      lines.push('');
      continue;
    }
    const words = para.split(' ');
    let currentLine = '';

    for (const word of words) {
      if ((currentLine + ' ' + word).trim().length <= maxChars) {
        currentLine = (currentLine + ' ' + word).trim();
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
  }
  return lines;
}

// Generate single unit PDF
async function generateUnitPdf(chapter) {
  const topics = allChapterTopics[chapter.slug] || [];
  const pdfDoc = await PDFDocument.create();

  // Standard Fonts
  const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontHelveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontHelveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  const fontCourier = await pdfDoc.embedFont(StandardFonts.Courier);

  // Standard Colors
  const cPrimary = rgb(0.08, 0.35, 0.75); // Royal Blue #1459BF
  const cSecondary = rgb(0.12, 0.58, 0.45); // Emerald Green
  const cDark = rgb(0.12, 0.15, 0.20); // Dark Slate #1F2633
  const cLightGray = rgb(0.94, 0.96, 0.98); // Light Background
  const cBorder = rgb(0.80, 0.85, 0.90); // Border Gray
  const cGold = rgb(0.85, 0.55, 0.10); // Amber / Gold
  const cWhite = rgb(1.0, 1.0, 1.0);

  const PAGE_WIDTH = 595.28; // A4 Width in points
  const PAGE_HEIGHT = 841.89; // A4 Height in points
  const MARGIN_LEFT = 45;
  const MARGIN_RIGHT = 45;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;

  let currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let currentY = PAGE_HEIGHT - 50;

  // Helper to check space and add page if needed
  function checkSpace(neededHeight) {
    if (currentY - neededHeight < 55) {
      currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      currentY = PAGE_HEIGHT - 50;
      return true;
    }
    return false;
  }

  // Draw Page Header & Footer helper
  function drawHeadersAndFooters() {
    const totalPages = pdfDoc.getPageCount();
    for (let i = 0; i < totalPages; i++) {
      const page = pdfDoc.getPage(i);
      const isCover = i === 0;

      // Header (Skip on Cover)
      if (!isCover) {
        page.drawText(`NIELIT CCC MASTER STUDY NOTES • UNIT ${chapter.chapterNumber}: ${chapter.title.toUpperCase()}`, {
          x: MARGIN_LEFT,
          y: PAGE_HEIGHT - 30,
          size: 8,
          font: fontHelveticaBold,
          color: cPrimary
        });
        page.drawLine({
          start: { x: MARGIN_LEFT, y: PAGE_HEIGHT - 35 },
          end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: PAGE_HEIGHT - 35 },
          thickness: 0.75,
          color: cBorder
        });
      }

      // Footer
      page.drawLine({
        start: { x: MARGIN_LEFT, y: 35 },
        end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: 35 },
        thickness: 0.75,
        color: cBorder
      });

      page.drawText(`National Institute of Electronics & Information Technology (NIELIT) • 80 Hours Curriculum`, {
        x: MARGIN_LEFT,
        y: 22,
        size: 7.5,
        font: fontHelvetica,
        color: rgb(0.4, 0.45, 0.5)
      });

      const pageNumberStr = `Page ${i + 1} of ${totalPages}`;
      const pageNumWidth = fontHelvetica.widthOfTextAtSize(pageNumberStr, 7.5);
      page.drawText(pageNumberStr, {
        x: PAGE_WIDTH - MARGIN_RIGHT - pageNumWidth,
        y: 22,
        size: 7.5,
        font: fontHelveticaBold,
        color: cPrimary
      });
    }
  }

  // =========================================================================
  // 1. PROFESSIONAL TITLE & COVER SECTION (Page 1)
  // =========================================================================

  // Top Decorative Header Box
  currentPage.drawRectangle({
    x: MARGIN_LEFT,
    y: currentY - 80,
    width: CONTENT_WIDTH,
    height: 80,
    color: cPrimary
  });

  currentPage.drawText('NATIONAL INSTITUTE OF ELECTRONICS & INFORMATION TECHNOLOGY', {
    x: MARGIN_LEFT + 15,
    y: currentY - 25,
    size: 9,
    font: fontHelveticaBold,
    color: rgb(0.8, 0.9, 1.0)
  });

  currentPage.drawText('COURSE ON COMPUTER CONCEPTS (CCC) • MASTER STUDY NOTES', {
    x: MARGIN_LEFT + 15,
    y: currentY - 45,
    size: 14,
    font: fontHelveticaBold,
    color: cWhite
  });

  currentPage.drawText(`Official Syllabus Section ${chapter.officialSection} • Revision 3 Curriculum`, {
    x: MARGIN_LEFT + 15,
    y: currentY - 65,
    size: 9,
    font: fontHelvetica,
    color: rgb(0.85, 0.95, 1.0)
  });

  currentY -= 100;

  // Unit Banner Box
  currentPage.drawRectangle({
    x: MARGIN_LEFT,
    y: currentY - 60,
    width: CONTENT_WIDTH,
    height: 60,
    color: cLightGray,
    borderColor: cBorder,
    borderWidth: 1
  });

  currentPage.drawText(`UNIT ${chapter.chapterNumber}`, {
    x: MARGIN_LEFT + 15,
    y: currentY - 22,
    size: 11,
    font: fontHelveticaBold,
    color: cGold
  });

  currentPage.drawText(chapter.title, {
    x: MARGIN_LEFT + 15,
    y: currentY - 45,
    size: 16,
    font: fontHelveticaBold,
    color: cDark
  });

  currentY -= 75;

  // Curriculum Specs Grid Box
  currentPage.drawRectangle({
    x: MARGIN_LEFT,
    y: currentY - 35,
    width: CONTENT_WIDTH,
    height: 35,
    color: rgb(0.96, 0.98, 1.0),
    borderColor: rgb(0.7, 0.8, 0.95),
    borderWidth: 1
  });

  const specText = `Total Topics: ${topics.length}   |   Theory: ${chapter.theoryHours}h   |   Practical: ${chapter.practicalHours}h   |   Exam Marks Weight: ${chapter.marksWeight}`;
  currentPage.drawText(specText, {
    x: MARGIN_LEFT + 12,
    y: currentY - 22,
    size: 9,
    font: fontHelveticaBold,
    color: cPrimary
  });

  currentY -= 50;

  // Unit Overview Description Box
  currentPage.drawText('UNIT OVERVIEW & CURRICULUM BOUNDARY:', {
    x: MARGIN_LEFT,
    y: currentY,
    size: 9.5,
    font: fontHelveticaBold,
    color: cPrimary
  });
  currentY -= 14;

  const descLines = wrapText(cleanText(chapter.description), 90);
  for (const line of descLines) {
    currentPage.drawText(line, {
      x: MARGIN_LEFT,
      y: currentY,
      size: 8.5,
      font: fontHelvetica,
      color: cDark
    });
    currentY -= 12;
  }

  currentY -= 10;

  // Table of Contents Box
  currentPage.drawText('SYLLABUS TOPICS IN THIS UNIT:', {
    x: MARGIN_LEFT,
    y: currentY,
    size: 9.5,
    font: fontHelveticaBold,
    color: cPrimary
  });
  currentY -= 14;

  topics.forEach((t, idx) => {
    currentPage.drawText(`${chapter.chapterNumber}.${idx + 1}  ${t.title}`, {
      x: MARGIN_LEFT + 10,
      y: currentY,
      size: 8.5,
      font: fontHelveticaBold,
      color: cDark
    });
    currentPage.drawText(`[Exam Importance: ${cleanText(t.examImportance)}]`, {
      x: MARGIN_LEFT + 320,
      y: currentY,
      size: 7.5,
      font: fontHelveticaOblique,
      color: rgb(0.4, 0.5, 0.6)
    });
    currentY -= 13;
  });

  currentY -= 15;
  currentPage.drawLine({
    start: { x: MARGIN_LEFT, y: currentY },
    end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: currentY },
    thickness: 1,
    color: cBorder
  });
  currentY -= 20;

  // =========================================================================
  // 2. DETAILED TOPIC-BY-TOPIC NOTES
  // =========================================================================

  topics.forEach((topic, topicIdx) => {
    checkSpace(120);

    // Topic Header Banner
    currentPage.drawRectangle({
      x: MARGIN_LEFT,
      y: currentY - 24,
      width: CONTENT_WIDTH,
      height: 24,
      color: cLightGray,
      borderColor: cPrimary,
      borderWidth: 1
    });

    currentPage.drawText(`TOPIC ${chapter.chapterNumber}.${topicIdx + 1}: ${topic.title.toUpperCase()}`, {
      x: MARGIN_LEFT + 8,
      y: currentY - 16,
      size: 9.5,
      font: fontHelveticaBold,
      color: cPrimary
    });

    currentY -= 36;

    // 1. Definition Box
    checkSpace(60);
    currentPage.drawRectangle({
      x: MARGIN_LEFT,
      y: currentY - 45,
      width: CONTENT_WIDTH,
      height: 45,
      color: rgb(0.97, 0.99, 1.0),
      borderColor: rgb(0.75, 0.85, 0.98),
      borderWidth: 0.75
    });

    currentPage.drawText('CORE DEFINITION & CONCEPT:', {
      x: MARGIN_LEFT + 8,
      y: currentY - 12,
      size: 7.5,
      font: fontHelveticaBold,
      color: cPrimary
    });

    const defLines = wrapText(cleanText(topic.definitionEnglish), 88);
    let defY = currentY - 24;
    for (const dLine of defLines.slice(0, 2)) {
      currentPage.drawText(dLine, {
        x: MARGIN_LEFT + 8,
        y: defY,
        size: 8,
        font: fontHelvetica,
        color: cDark
      });
      defY -= 10.5;
    }

    currentY -= 55;

    // 2. Detailed Technical Breakdown
    checkSpace(80);
    currentPage.drawText('DETAILED TECHNICAL BREAKDOWN & SYLLABUS CONCEPTS:', {
      x: MARGIN_LEFT,
      y: currentY,
      size: 8.5,
      font: fontHelveticaBold,
      color: cDark
    });
    currentY -= 14;

    const explanationLines = wrapText(cleanText(topic.detailedExplanation), 88);
    for (const expLine of explanationLines) {
      checkSpace(14);
      if (expLine.startsWith('1.') || expLine.startsWith('2.') || expLine.startsWith('3.') || expLine.startsWith('4.') || expLine.startsWith('-')) {
        currentPage.drawText(expLine, {
          x: MARGIN_LEFT + 8,
          y: currentY,
          size: 8,
          font: fontHelveticaBold,
          color: cDark
        });
      } else {
        currentPage.drawText(expLine, {
          x: MARGIN_LEFT,
          y: currentY,
          size: 8,
          font: fontHelvetica,
          color: cDark
        });
      }
      currentY -= 11.5;
    }

    currentY -= 8;

    // 3. Real World Analogy Box
    if (topic.realWorldAnalogy) {
      checkSpace(40);
      currentPage.drawRectangle({
        x: MARGIN_LEFT,
        y: currentY - 32,
        width: CONTENT_WIDTH,
        height: 32,
        color: rgb(0.96, 0.99, 0.96),
        borderColor: rgb(0.7, 0.88, 0.7),
        borderWidth: 0.75
      });

      currentPage.drawText('REAL-WORLD ANALOGY:', {
        x: MARGIN_LEFT + 8,
        y: currentY - 11,
        size: 7.5,
        font: fontHelveticaBold,
        color: cSecondary
      });

      const analogyLines = wrapText(cleanText(topic.realWorldAnalogy), 88);
      let aY = currentY - 22;
      for (const aLine of analogyLines.slice(0, 1)) {
        currentPage.drawText(aLine, {
          x: MARGIN_LEFT + 8,
          y: aY,
          size: 7.5,
          font: fontHelveticaOblique,
          color: cDark
        });
      }
      currentY -= 40;
    }

    // 4. Important Exam Points (Golden Facts)
    if (topic.importantPoints && topic.importantPoints.length > 0) {
      checkSpace(60);
      currentPage.drawText('IMPORTANT EXAM FACTS (GOLDEN POINTS):', {
        x: MARGIN_LEFT,
        y: currentY,
        size: 8,
        font: fontHelveticaBold,
        color: cGold
      });
      currentY -= 12;

      topic.importantPoints.forEach((pt) => {
        checkSpace(14);
        const ptText = typeof pt === 'string' ? cleanText(pt) : cleanText(pt.text || pt.point || '');
        const ptLines = wrapText(`* ${ptText}`, 86);
        for (const pLine of ptLines) {
          currentPage.drawText(pLine, {
            x: MARGIN_LEFT + 8,
            y: currentY,
            size: 7.5,
            font: fontHelvetica,
            color: cDark
          });
          currentY -= 10.5;
        }
      });
      currentY -= 6;
    }

    // Divider between topics
    checkSpace(20);
    currentPage.drawLine({
      start: { x: MARGIN_LEFT, y: currentY },
      end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: currentY },
      thickness: 0.5,
      color: cBorder
    });
    currentY -= 16;
  });

  // =========================================================================
  // 3. FINAL UNIT REVISION & EXAM SUMMARY
  // =========================================================================
  checkSpace(120);

  currentPage.drawRectangle({
    x: MARGIN_LEFT,
    y: currentY - 26,
    width: CONTENT_WIDTH,
    height: 26,
    color: cPrimary
  });

  currentPage.drawText(`UNIT ${chapter.chapterNumber} QUICK REVISION SUMMARY & EXAM CHECKLIST`, {
    x: MARGIN_LEFT + 10,
    y: currentY - 17,
    size: 10,
    font: fontHelveticaBold,
    color: cWhite
  });

  currentY -= 40;

  topics.forEach((t, i) => {
    checkSpace(35);
    currentPage.drawText(`${i + 1}. ${t.title}:`, {
      x: MARGIN_LEFT,
      y: currentY,
      size: 8,
      font: fontHelveticaBold,
      color: cPrimary
    });
    currentY -= 11;

    const revLines = wrapText(cleanText(t.quickRevision), 90);
    for (const rLine of revLines) {
      checkSpace(12);
      currentPage.drawText(rLine, {
        x: MARGIN_LEFT + 10,
        y: currentY,
        size: 7.5,
        font: fontHelvetica,
        color: cDark
      });
      currentY -= 10;
    }
    currentY -= 4;
  });

  // Final End of Unit Badge
  checkSpace(40);
  currentY -= 10;
  currentPage.drawRectangle({
    x: MARGIN_LEFT,
    y: currentY - 22,
    width: CONTENT_WIDTH,
    height: 22,
    color: cLightGray,
    borderColor: cBorder,
    borderWidth: 1
  });

  currentPage.drawText(`--- END OF UNIT ${chapter.chapterNumber} DETAILED STUDY NOTES • NIELIT CCC (80 HOURS) ---`, {
    x: MARGIN_LEFT + 30,
    y: currentY - 15,
    size: 8,
    font: fontHelveticaBold,
    color: cPrimary
  });

  // Draw headers and footers with total page counts
  drawHeadersAndFooters();

  const pdfBytes = await pdfDoc.save();
  const fileName = `CCC_Unit_${String(chapter.id).padStart(2, '0')}_Detailed_Notes.pdf`;
  const filePath = path.join(outputDir, fileName);

  fs.writeFileSync(filePath, pdfBytes);
  console.log(`Generated ${fileName} (${pdfDoc.getPageCount()} pages, ${(pdfBytes.length / 1024).toFixed(1)} KB)`);

  return {
    chapterId: chapter.id,
    fileName,
    filePath,
    pageCount: pdfDoc.getPageCount(),
    fileSizeBytes: pdfBytes.length,
    fileSizeKb: (pdfBytes.length / 1024).toFixed(1)
  };
}

// Generate all 9 Unit PDFs
async function generateAllUnitPdfs() {
  console.log('====================================================');
  console.log('STARTING CCC UNIT-WISE DETAILED NOTES PDF GENERATION');
  console.log('====================================================\n');

  const manifest = [];
  for (const chapter of cccChaptersData) {
    const result = await generateUnitPdf(chapter);
    manifest.push(result);
  }

  console.log('\n====================================================');
  console.log(`ALL ${manifest.length} CCC UNIT NOTES PDFs GENERATED SUCCESSFULLY!`);
  console.log('====================================================');
  return manifest;
}

generateAllUnitPdfs();
