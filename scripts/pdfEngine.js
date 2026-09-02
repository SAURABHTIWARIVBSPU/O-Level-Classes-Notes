import { rgb, StandardFonts } from 'pdf-lib';

// Color Palette
export const COLORS = {
  primary: rgb(0.08, 0.32, 0.68),       // Deep Navy #1452ad
  primaryDark: rgb(0.04, 0.18, 0.42),   // Dark Navy
  primaryLight: rgb(0.92, 0.95, 0.99),  // Light Blue Tint
  secondary: rgb(0.06, 0.52, 0.42),     // Emerald Green
  secondaryLight: rgb(0.92, 0.98, 0.95),// Light Green Tint
  accent: rgb(0.85, 0.45, 0.08),        // Warm Amber
  accentLight: rgb(0.99, 0.96, 0.90),   // Light Amber Tint
  textDark: rgb(0.12, 0.15, 0.18),      // Charcoal Slate
  textMuted: rgb(0.40, 0.45, 0.50),     // Cool Slate
  border: rgb(0.80, 0.85, 0.90),        // Border Gray
  borderLight: rgb(0.90, 0.92, 0.95),   // Light Border
  bgGray: rgb(0.96, 0.97, 0.98),        // Light Gray Background
  white: rgb(1.0, 1.0, 1.0)
};

// Sanitize text to standard printable ASCII / WinAnsi compatible characters or Devanagari for Hindi
export function sanitizeText(text, lang = 'en') {
  if (text === null || text === undefined) return '';
  const str = String(text)
    .replace(/[➔➜➝➞]/g, '->')
    .replace(/[⇄⇆↔]/g, '<->')
    .replace(/[•●◦▪]/g, '-')
    .replace(/[▲▴]/g, '^')
    .replace(/[▼▾]/g, 'v')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[–—]/g, '-')
    .replace(/…/g, '...');

  if (lang === 'hi') {
    // Preserve Devanagari, standard ASCII, common punctuation, Hindi Danda and Rupee symbol
    return str.replace(/[^\x20-\x7E\n\r\t\u0900-\u097F।॥₹]/g, ' ');
  } else {
    return str.replace(/[^\x20-\x7E\n\r\t]/g, ' ');
  }
}

export class PdfRenderer {
  constructor(pdfDoc, fonts, options = {}) {
    this.pdfDoc = pdfDoc;
    this.fonts = fonts; // { regular, bold, italic, mono }
    this.lang = options.lang || 'en';
    this.pageWidth = options.pageWidth || 595.28; // A4 Width
    this.pageHeight = options.pageHeight || 841.89; // A4 Height
    this.marginLeft = options.marginLeft || 42;
    this.marginRight = options.marginRight || 42;
    this.marginTop = options.marginTop || 50;
    this.marginBottom = options.marginBottom || 45;
    this.contentWidth = this.pageWidth - this.marginLeft - this.marginRight;

    this.pages = [];
    this.currentPage = null;
    this.currentY = 0;
    this.unitMeta = options.unitMeta || { unitNumber: 1, title: 'Study Notes' };

    this.addNewPage();
  }

  addNewPage() {
    this.currentPage = this.pdfDoc.addPage([this.pageWidth, this.pageHeight]);
    this.pages.push(this.currentPage);
    this.currentY = this.pageHeight - this.marginTop;
    return this.currentPage;
  }

  ensureSpace(neededHeight) {
    if (this.currentY - neededHeight < this.marginBottom) {
      this.addNewPage();
      return true;
    }
    return false;
  }

  wrapText(text, font, size, maxWidth) {
    if (!text) return [];
    const clean = sanitizeText(text, this.lang);
    const lines = [];
    const paragraphs = clean.split('\n');

    for (const para of paragraphs) {
      const trimmed = para.trim();
      if (!trimmed) {
        lines.push('');
        continue;
      }
      const words = trimmed.split(/\s+/);
      let currentLine = '';

      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const width = font.widthOfTextAtSize(testLine, size);
        if (width <= maxWidth) {
          currentLine = testLine;
        } else {
          if (currentLine) lines.push(currentLine);
          currentLine = word;
        }
      }
      if (currentLine) lines.push(currentLine);
    }
    return lines;
  }

  // Draw Cover / Unit Header
  drawCoverHeader(meta) {
    const p = this.currentPage;
    const isHi = meta.lang === 'hi' || this.lang === 'hi';
    const isOLevel = meta.courseId === 'O_LEVEL' || meta.courseCode === 'M2-R5.1';
    
    // Top Brand Bar
    p.drawRectangle({
      x: this.marginLeft,
      y: this.currentY - 75,
      width: this.contentWidth,
      height: 75,
      color: COLORS.primaryDark
    });

    const topOrg = isHi 
      ? 'राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान (NIELIT)'
      : 'NATIONAL INSTITUTE OF ELECTRONICS & INFORMATION TECHNOLOGY (NIELIT)';

    const mainTitle = isHi
      ? (isOLevel 
          ? 'वेब डिजाइनिंग एवं पब्लिशिंग (मॉड्यूल M2-R5.1) • मास्टर अध्ययन नोट्स'
          : 'कंप्यूटर अवधारणाओं पर पाठ्यक्रम (CCC) • मास्टर अध्ययन नोट्स')
      : (isOLevel
          ? 'WEB DESIGNING & PUBLISHING (MODULE M2-R5.1) • MASTER STUDY NOTES'
          : 'COURSE ON COMPUTER CONCEPTS (CCC) • MASTER STUDY NOTES');

    const syllabusSub = isHi
      ? (isOLevel
          ? `आधिकारिक NIELIT O-Level पाठ्यक्रम • धारा ${meta.officialSection || '16.6'} • 120 घंटे (48T + 72P)`
          : `आधिकारिक NIELIT CCC पाठ्यक्रम • धारा ${meta.officialSection || '1.0 - 9.0'} • 80 घंटे`)
      : (isOLevel
          ? `Official NIELIT O-Level Syllabus • Section ${meta.officialSection || '16.6'} • 120 Hours (48T + 72P)`
          : `Official NIELIT CCC Syllabus • Section ${meta.officialSection || '1.0 - 9.0'} • 80 Hours`);

    const unitBadge = isHi
      ? (isOLevel
          ? `NIELIT O LEVEL • इकाई ${String(meta.unitNumber).padStart(2, '0')}`
          : `NIELIT CCC • इकाई ${String(meta.unitNumber).padStart(2, '0')}`)
      : (isOLevel
          ? `NIELIT O LEVEL • UNIT ${String(meta.unitNumber).padStart(2, '0')}`
          : `NIELIT CCC • UNIT ${String(meta.unitNumber).padStart(2, '0')}`);

    p.drawText(topOrg, {
      x: this.marginLeft + 16,
      y: this.currentY - 22,
      size: isHi ? 8 : 8.5,
      font: this.fonts.bold,
      color: rgb(0.80, 0.90, 1.0)
    });

    p.drawText(mainTitle, {
      x: this.marginLeft + 16,
      y: this.currentY - 42,
      size: isHi ? (isOLevel ? 10.5 : 11.5) : (isOLevel ? 11.5 : 13),
      font: this.fonts.bold,
      color: COLORS.white
    });

    p.drawText(syllabusSub, {
      x: this.marginLeft + 16,
      y: this.currentY - 60,
      size: 8.5,
      font: this.fonts.regular,
      color: rgb(0.85, 0.92, 1.0)
    });

    this.currentY -= 90;

    // Unit Title Box
    p.drawRectangle({
      x: this.marginLeft,
      y: this.currentY - 60,
      width: this.contentWidth,
      height: 60,
      color: COLORS.primaryLight,
      borderColor: COLORS.primary,
      borderWidth: 1
    });

    p.drawText(unitBadge, {
      x: this.marginLeft + 16,
      y: this.currentY - 22,
      size: 11,
      font: this.fonts.bold,
      color: COLORS.accent
    });

    const cleanTitle = sanitizeText(meta.title, this.lang);
    p.drawText(cleanTitle, {
      x: this.marginLeft + 16,
      y: this.currentY - 45,
      size: isHi ? 13.5 : 16,
      font: this.fonts.bold,
      color: COLORS.primaryDark
    });

    this.currentY -= 72;

    // Unit Meta Stats Strip
    p.drawRectangle({
      x: this.marginLeft,
      y: this.currentY - 26,
      width: this.contentWidth,
      height: 26,
      color: COLORS.bgGray,
      borderColor: COLORS.border,
      borderWidth: 0.75
    });

    const statsStr = isHi
      ? `पाठ्यक्रम घंटे: ${meta.totalHours || 8}h (${meta.theoryHours || 3}h थ्योरी + ${meta.practicalHours || 5}h लैब)   |   विषय: ${meta.topicCount || 8}   |   भाषा: हिन्दी`
      : `Curriculum Hours: ${meta.totalHours || 8}h (${meta.theoryHours || 3}h Theory + ${meta.practicalHours || 5}h Lab)   |   Topics: ${meta.topicCount || 8}   |   Language: English`;
    
    p.drawText(statsStr, {
      x: this.marginLeft + 12,
      y: this.currentY - 17,
      size: 8,
      font: this.fonts.bold,
      color: COLORS.textDark
    });

    this.currentY -= 40;
  }

  // Draw Section / Topic Header
  drawTopicHeader(topicCode, topicTitle) {
    this.ensureSpace(50);
    const p = this.currentPage;
    const cleanTitle = sanitizeText(topicTitle);

    p.drawRectangle({
      x: this.marginLeft,
      y: this.currentY - 26,
      width: this.contentWidth,
      height: 26,
      color: COLORS.primaryLight,
      borderColor: COLORS.primary,
      borderWidth: 1
    });

    p.drawText(`TOPIC ${topicCode}: ${cleanTitle.toUpperCase()}`, {
      x: this.marginLeft + 10,
      y: this.currentY - 17,
      size: 10,
      font: this.fonts.bold,
      color: COLORS.primaryDark
    });

    this.currentY -= 38;
  }

  // Draw Sub-Section Heading (What is it, Why important, etc.)
  drawSubHeading(title, level = 1) {
    this.ensureSpace(30);
    const p = this.currentPage;
    const size = level === 1 ? 9.5 : 8.5;
    const font = this.fonts.bold;
    const color = level === 1 ? COLORS.primary : COLORS.textDark;
    const cleanTitle = sanitizeText(title);

    p.drawText(cleanTitle, {
      x: this.marginLeft,
      y: this.currentY - 12,
      size: size,
      font: font,
      color: color
    });

    this.currentY -= 20;
  }

  // Draw Paragraph
  drawParagraph(text, options = {}) {
    if (!text) return;
    const font = options.font || this.fonts.regular;
    const size = options.size || 8.5;
    const lineHeight = options.lineHeight || 12;
    const color = options.color || COLORS.textDark;
    const indent = options.indent || 0;
    const maxWidth = this.contentWidth - indent;

    const lines = this.wrapText(text, font, size, maxWidth);

    for (const line of lines) {
      this.ensureSpace(lineHeight + 4);
      if (line !== '') {
        this.currentPage.drawText(line, {
          x: this.marginLeft + indent,
          y: this.currentY - size,
          size: size,
          font: font,
          color: color
        });
      }
      this.currentY -= lineHeight;
    }
    this.currentY -= 4;
  }

  // Draw Bullet List
  drawBulletList(items, options = {}) {
    if (!items || !items.length) return;
    const size = options.size || 8.5;
    const lineHeight = options.lineHeight || 12;

    for (const item of items) {
      const text = typeof item === 'string' ? item : (item.text || item.title || '');
      const lines = this.wrapText(text, this.fonts.regular, size, this.contentWidth - 16);

      this.ensureSpace(lines.length * lineHeight + 6);

      // Draw Vector Square Bullet
      this.currentPage.drawRectangle({
        x: this.marginLeft + 4,
        y: this.currentY - size + 2,
        width: 3.5,
        height: 3.5,
        color: COLORS.primary
      });

      // Draw Lines
      for (let i = 0; i < lines.length; i++) {
        this.currentPage.drawText(lines[i], {
          x: this.marginLeft + 16,
          y: this.currentY - size,
          size: size,
          font: this.fonts.regular,
          color: COLORS.textDark
        });
        this.currentY -= lineHeight;
      }
      this.currentY -= 2;
    }
    this.currentY -= 4;
  }

  // Draw Callout Box (Analogy, Exam Fact, Key Note, Warning)
  drawCalloutBox(title, content, type = 'info') {
    if (!content) return;
    let bgColor = COLORS.primaryLight;
    let borderColor = COLORS.primary;
    let titleColor = COLORS.primaryDark;

    if (type === 'success' || type === 'analogy') {
      bgColor = COLORS.secondaryLight;
      borderColor = COLORS.secondary;
      titleColor = COLORS.secondary;
    } else if (type === 'warning' || type === 'exam') {
      bgColor = COLORS.accentLight;
      borderColor = COLORS.accent;
      titleColor = COLORS.accent;
    }

    const lines = Array.isArray(content)
      ? content.flatMap(c => this.wrapText(`- ${c}`, this.fonts.regular, 8, this.contentWidth - 24))
      : this.wrapText(content, this.fonts.regular, 8, this.contentWidth - 24);

    const boxHeight = 22 + (lines.length * 11) + 8;
    this.ensureSpace(boxHeight + 10);

    const p = this.currentPage;
    const cleanTitle = sanitizeText(title);

    p.drawRectangle({
      x: this.marginLeft,
      y: this.currentY - boxHeight,
      width: this.contentWidth,
      height: boxHeight,
      color: bgColor,
      borderColor: borderColor,
      borderWidth: 0.75
    });

    p.drawText(cleanTitle.toUpperCase(), {
      x: this.marginLeft + 10,
      y: this.currentY - 14,
      size: 8,
      font: this.fonts.bold,
      color: titleColor
    });

    let textY = this.currentY - 26;
    for (const line of lines) {
      p.drawText(line, {
        x: this.marginLeft + 10,
        y: textY,
        size: 8,
        font: this.fonts.regular,
        color: COLORS.textDark
      });
      textY -= 11;
    }

    this.currentY -= (boxHeight + 10);
  }

  // Draw Formatted Syntax / Code Block
  drawCodeBlock(codeText, language = 'CODE SNIPPET') {
    if (!codeText) return;
    const cleanCode = sanitizeText(codeText);
    const rawLines = cleanCode.split('\n');
    const monoFont = this.fonts.mono || this.fonts.regular;
    const fontSize = 7.5;
    const lineHeight = 10.5;

    // Wrap long code lines
    const lines = [];
    rawLines.forEach(rl => {
      if (!rl.trim()) {
        lines.push('');
      } else {
        const wrapped = this.wrapText(rl, monoFont, fontSize, this.contentWidth - 28);
        lines.push(...wrapped);
      }
    });

    const boxHeight = 18 + (lines.length * lineHeight) + 6;
    this.ensureSpace(boxHeight + 10);

    const p = this.currentPage;

    // Background Container
    p.drawRectangle({
      x: this.marginLeft,
      y: this.currentY - boxHeight,
      width: this.contentWidth,
      height: boxHeight,
      color: rgb(0.96, 0.97, 0.98),
      borderColor: rgb(0.80, 0.84, 0.88),
      borderWidth: 0.75
    });

    // Top Language Banner
    p.drawRectangle({
      x: this.marginLeft,
      y: this.currentY - 14,
      width: this.contentWidth,
      height: 14,
      color: rgb(0.90, 0.93, 0.96)
    });

    p.drawText(language.toUpperCase(), {
      x: this.marginLeft + 8,
      y: this.currentY - 10,
      size: 6.5,
      font: this.fonts.bold,
      color: COLORS.primaryDark
    });

    let textY = this.currentY - 24;
    lines.forEach(l => {
      p.drawText(l, {
        x: this.marginLeft + 12,
        y: textY,
        size: fontSize,
        font: monoFont,
        color: rgb(0.12, 0.15, 0.20)
      });
      textY -= lineHeight;
    });

    this.currentY -= (boxHeight + 8);
  }

  // Draw Grid Table
  drawTable(headers, rows, colWidths = null) {
    if (!headers || !headers.length || !rows || !rows.length) return;

    const numCols = headers.length;
    let widths = colWidths;
    if (!widths) {
      const defaultWidth = this.contentWidth / numCols;
      widths = Array(numCols).fill(defaultWidth);
    }

    const fontSize = 7.5;
    const lineHeight = 10;
    const cellPadding = 5;

    // Calculate row heights
    const calcRowHeight = (rowData, isHeader = false) => {
      let maxLines = 1;
      const font = isHeader ? this.fonts.bold : this.fonts.regular;
      rowData.forEach((cellText, idx) => {
        const availableWidth = widths[idx] - (cellPadding * 2);
        const lines = this.wrapText(String(cellText || ''), font, fontSize, availableWidth);
        if (lines.length > maxLines) maxLines = lines.length;
      });
      return Math.max(18, maxLines * lineHeight + (cellPadding * 2));
    };

    const headerHeight = calcRowHeight(headers, true);
    this.ensureSpace(headerHeight + 25);

    // Draw Header
    let p = this.currentPage;
    let startX = this.marginLeft;

    p.drawRectangle({
      x: this.marginLeft,
      y: this.currentY - headerHeight,
      width: this.contentWidth,
      height: headerHeight,
      color: COLORS.primaryDark
    });

    headers.forEach((h, idx) => {
      const lines = this.wrapText(String(h), this.fonts.bold, fontSize, widths[idx] - (cellPadding * 2));
      let textY = this.currentY - cellPadding - fontSize;
      lines.forEach(l => {
        p.drawText(l, {
          x: startX + cellPadding,
          y: textY,
          size: fontSize,
          font: this.fonts.bold,
          color: COLORS.white
        });
        textY -= lineHeight;
      });
      startX += widths[idx];
    });

    this.currentY -= headerHeight;

    // Draw Rows
    rows.forEach((row, rowIdx) => {
      const rowHeight = calcRowHeight(row, false);
      this.ensureSpace(rowHeight + 5);
      p = this.currentPage;
      startX = this.marginLeft;

      const isEven = rowIdx % 2 === 0;
      p.drawRectangle({
        x: this.marginLeft,
        y: this.currentY - rowHeight,
        width: this.contentWidth,
        height: rowHeight,
        color: isEven ? COLORS.white : COLORS.bgGray,
        borderColor: COLORS.borderLight,
        borderWidth: 0.5
      });

      row.forEach((cellText, colIdx) => {
        const lines = this.wrapText(String(cellText || ''), this.fonts.regular, fontSize, widths[colIdx] - (cellPadding * 2));
        let textY = this.currentY - cellPadding - fontSize;
        lines.forEach(l => {
          p.drawText(l, {
            x: startX + cellPadding,
            y: textY,
            size: fontSize,
            font: this.fonts.regular,
            color: COLORS.textDark
          });
          textY -= lineHeight;
        });

        // Vertical divider
        if (colIdx > 0) {
          p.drawLine({
            start: { x: startX, y: this.currentY },
            end: { x: startX, y: this.currentY - rowHeight },
            thickness: 0.5,
            color: COLORS.borderLight
          });
        }

        startX += widths[colIdx];
      });

      this.currentY -= rowHeight;
    });

    this.currentY -= 8;
  }

  // Draw Educational Vector Diagrams
  drawDiagram(diagramType) {
    if (diagramType === 'ipo-cycle') {
      this.drawIpoDiagram();
    } else if (diagramType === 'memory-hierarchy') {
      this.drawMemoryHierarchyDiagram();
    } else if (diagramType === 'cpu-architecture') {
      this.drawCpuDiagram();
    } else if (diagramType === 'software-tree') {
      this.drawSoftwareTreeDiagram();
    } else if (diagramType === 'network-topologies') {
      this.drawTopologiesDiagram();
    } else if (diagramType === 'cia-triad') {
      this.drawCiaTriadDiagram();
    }
  }

  // Diagram 1: IPO Cycle
  drawIpoDiagram() {
    this.ensureSpace(85);
    const p = this.currentPage;
    const startY = this.currentY;
    const boxW = 88;
    const boxH = 40;
    const gap = 38;

    // Caption Box
    p.drawRectangle({
      x: this.marginLeft,
      y: startY - 75,
      width: this.contentWidth,
      height: 75,
      color: COLORS.bgGray,
      borderColor: COLORS.border,
      borderWidth: 0.75
    });

    p.drawText('CONCEPT DIAGRAM: THE COMPUTER IPO ARCHITECTURAL CYCLE', {
      x: this.marginLeft + 12,
      y: startY - 14,
      size: 7.5,
      font: this.fonts.bold,
      color: COLORS.primary
    });

    // 1. INPUT Box
    let bX = this.marginLeft + 18;
    let bY = startY - 60;
    p.drawRectangle({ x: bX, y: bY, width: boxW, height: boxH, color: COLORS.primaryLight, borderColor: COLORS.primary, borderWidth: 1 });
    p.drawText('1. INPUT', { x: bX + 20, y: bY + 24, size: 8, font: this.fonts.bold, color: COLORS.primaryDark });
    p.drawText('Keyboard, Mouse, OMR', { x: bX + 6, y: bY + 12, size: 6.5, font: this.fonts.regular, color: COLORS.textDark });

    // Arrow 1
    p.drawText('->', { x: bX + boxW + 12, y: bY + 14, size: 12, font: this.fonts.bold, color: COLORS.primary });

    // 2. PROCESS (CPU) Box
    bX += boxW + gap;
    p.drawRectangle({ x: bX, y: bY, width: boxW + 15, height: boxH, color: COLORS.primaryDark, borderColor: COLORS.primary, borderWidth: 1 });
    p.drawText('2. PROCESS (CPU)', { x: bX + 8, y: bY + 24, size: 8, font: this.fonts.bold, color: COLORS.white });
    p.drawText('ALU + Control Unit + Reg', { x: bX + 6, y: bY + 12, size: 6.5, font: this.fonts.regular, color: rgb(0.85, 0.95, 1.0) });

    // Arrow 2
    p.drawText('->', { x: bX + boxW + 24, y: bY + 14, size: 12, font: this.fonts.bold, color: COLORS.primary });

    // 3. OUTPUT Box
    bX += boxW + gap + 15;
    p.drawRectangle({ x: bX, y: bY, width: boxW, height: boxH, color: COLORS.secondaryLight, borderColor: COLORS.secondary, borderWidth: 1 });
    p.drawText('3. OUTPUT', { x: bX + 16, y: bY + 24, size: 8, font: this.fonts.bold, color: COLORS.secondary });
    p.drawText('Monitor, Printer (DPI)', { x: bX + 8, y: bY + 12, size: 6.5, font: this.fonts.regular, color: COLORS.textDark });

    // 4. STORAGE Loop Indicator
    p.drawText('<-> 4. STORAGE (RAM, ROM, SSD, HDD) <->', {
      x: this.marginLeft + 155,
      y: startY - 68,
      size: 7,
      font: this.fonts.bold,
      color: COLORS.accent
    });

    this.currentY -= 85;
  }

  // Diagram 2: Memory Hierarchy
  drawMemoryHierarchyDiagram() {
    this.ensureSpace(95);
    const p = this.currentPage;
    const startY = this.currentY;

    p.drawRectangle({
      x: this.marginLeft,
      y: startY - 90,
      width: this.contentWidth,
      height: 90,
      color: COLORS.bgGray,
      borderColor: COLORS.border,
      borderWidth: 0.75
    });

    p.drawText('CONCEPT DIAGRAM: COMPUTER MEMORY HIERARCHY (SPEED VS CAPACITY)', {
      x: this.marginLeft + 12,
      y: startY - 14,
      size: 7.5,
      font: this.fonts.bold,
      color: COLORS.primary
    });

    const levels = [
      { name: '1. CPU Registers (Fastest, Tiny: Bytes)', w: 220, color: COLORS.primaryDark, textColor: COLORS.white },
      { name: '2. CPU Cache Memory (L1, L2, L3: SRAM - KB/MB)', w: 270, color: COLORS.primary, textColor: COLORS.white },
      { name: '3. Primary RAM (DRAM: DDR4/DDR5 - 8GB to 64GB)', w: 340, color: COLORS.primaryLight, textColor: COLORS.primaryDark },
      { name: '4. Secondary Storage (SSD, HDD, Flash: 512GB to 4TB+)', w: 420, color: COLORS.secondaryLight, textColor: COLORS.secondary }
    ];

    let lY = startY - 30;
    levels.forEach((lvl) => {
      const xPos = this.marginLeft + (this.contentWidth - lvl.w) / 2;
      p.drawRectangle({
        x: xPos,
        y: lY - 11,
        width: lvl.w,
        height: 12,
        color: lvl.color,
        borderColor: COLORS.border,
        borderWidth: 0.5
      });
      p.drawText(lvl.name, {
        x: xPos + 10,
        y: lY - 8,
        size: 6.5,
        font: this.fonts.bold,
        color: lvl.textColor
      });
      lY -= 14;
    });

    p.drawText('^ Speed Increases / Cost per Byte Increases         v Capacity Increases / Access Time Slower', {
      x: this.marginLeft + 50,
      y: startY - 84,
      size: 6.5,
      font: this.fonts.regular,
      color: COLORS.textMuted
    });

    this.currentY -= 100;
  }

  // Diagram 3: CPU Architecture
  drawCpuDiagram() {
    this.ensureSpace(85);
    const p = this.currentPage;
    const startY = this.currentY;

    p.drawRectangle({
      x: this.marginLeft,
      y: startY - 80,
      width: this.contentWidth,
      height: 80,
      color: COLORS.bgGray,
      borderColor: COLORS.border,
      borderWidth: 0.75
    });

    p.drawText('CONCEPT DIAGRAM: INTERNAL ARCHITECTURE OF CPU', {
      x: this.marginLeft + 12,
      y: startY - 14,
      size: 7.5,
      font: this.fonts.bold,
      color: COLORS.primary
    });

    const boxW = 140;
    const boxH = 45;
    const bY = startY - 65;

    // CU Box
    p.drawRectangle({ x: this.marginLeft + 18, y: bY, width: boxW, height: boxH, color: COLORS.primaryLight, borderColor: COLORS.primary, borderWidth: 1 });
    p.drawText('CONTROL UNIT (CU)', { x: this.marginLeft + 30, y: bY + 30, size: 7.5, font: this.fonts.bold, color: COLORS.primaryDark });
    p.drawText('Traffic Supervisor / Decoder', { x: this.marginLeft + 24, y: bY + 18, size: 6.5, font: this.fonts.regular, color: COLORS.textDark });
    p.drawText('Generates timing & clock pulses', { x: this.marginLeft + 22, y: bY + 8, size: 6, font: this.fonts.regular, color: COLORS.textMuted });

    // Internal Bus
    p.drawText('<-> Internal Bus <->', { x: this.marginLeft + 162, y: bY + 20, size: 7.5, font: this.fonts.bold, color: COLORS.accent });

    // ALU Box
    p.drawRectangle({ x: this.marginLeft + 240, y: bY, width: boxW, height: boxH, color: COLORS.secondaryLight, borderColor: COLORS.secondary, borderWidth: 1 });
    p.drawText('ARITHMETIC LOGIC UNIT (ALU)', { x: this.marginLeft + 246, y: bY + 30, size: 7.5, font: this.fonts.bold, color: COLORS.secondary });
    p.drawText('Math (+, -, *, /) & Logic (<, >, =)', { x: this.marginLeft + 248, y: bY + 18, size: 6.5, font: this.fonts.regular, color: COLORS.textDark });
    p.drawText('Executes comparison decisions', { x: this.marginLeft + 252, y: bY + 8, size: 6, font: this.fonts.regular, color: COLORS.textMuted });

    // Registers Box
    p.drawRectangle({ x: this.marginLeft + 390, y: bY, width: 100, height: boxH, color: COLORS.primaryDark, borderColor: COLORS.primary, borderWidth: 1 });
    p.drawText('REGISTERS', { x: this.marginLeft + 412, y: bY + 30, size: 7.5, font: this.fonts.bold, color: COLORS.white });
    p.drawText('AC, PC, IR, MAR', { x: this.marginLeft + 406, y: bY + 18, size: 6.5, font: this.fonts.regular, color: rgb(0.8, 0.9, 1.0) });
    p.drawText('Ultra-fast storage', { x: this.marginLeft + 404, y: bY + 8, size: 6, font: this.fonts.regular, color: rgb(0.7, 0.85, 1.0) });

    this.currentY -= 90;
  }

  // Diagram 4: Software Classification Tree
  drawSoftwareTreeDiagram() {
    this.ensureSpace(85);
    const p = this.currentPage;
    const startY = this.currentY;

    p.drawRectangle({
      x: this.marginLeft,
      y: startY - 80,
      width: this.contentWidth,
      height: 80,
      color: COLORS.bgGray,
      borderColor: COLORS.border,
      borderWidth: 0.75
    });

    p.drawText('CONCEPT DIAGRAM: COMPUTER SOFTWARE CLASSIFICATION TAXONOMY', {
      x: this.marginLeft + 12,
      y: startY - 14,
      size: 7.5,
      font: this.fonts.bold,
      color: COLORS.primary
    });

    const bY = startY - 68;
    const boxW = 150;
    const boxH = 45;

    // 1. System Software
    p.drawRectangle({ x: this.marginLeft + 12, y: bY, width: boxW, height: boxH, color: COLORS.primaryLight, borderColor: COLORS.primary, borderWidth: 1 });
    p.drawText('1. SYSTEM SOFTWARE', { x: this.marginLeft + 28, y: bY + 30, size: 7.5, font: this.fonts.bold, color: COLORS.primaryDark });
    p.drawText('- Operating Systems (Ubuntu, Win)', { x: this.marginLeft + 18, y: bY + 18, size: 6.5, font: this.fonts.regular, color: COLORS.textDark });
    p.drawText('- Translators: Compiler / Interpreter', { x: this.marginLeft + 18, y: bY + 8, size: 6.5, font: this.fonts.regular, color: COLORS.textDark });

    // 2. Application Software
    p.drawRectangle({ x: this.marginLeft + 175, y: bY, width: boxW, height: boxH, color: COLORS.secondaryLight, borderColor: COLORS.secondary, borderWidth: 1 });
    p.drawText('2. APPLICATION SOFTWARE', { x: this.marginLeft + 188, y: bY + 30, size: 7.5, font: this.fonts.bold, color: COLORS.secondary });
    p.drawText('- LibreOffice Writer (.odt), Calc (.ods)', { x: this.marginLeft + 180, y: bY + 18, size: 6.5, font: this.fonts.regular, color: COLORS.textDark });
    p.drawText('- Presentation: Impress (.odp)', { x: this.marginLeft + 180, y: bY + 8, size: 6.5, font: this.fonts.regular, color: COLORS.textDark });

    // 3. Utility Software
    p.drawRectangle({ x: this.marginLeft + 338, y: bY, width: boxW + 10, height: boxH, color: COLORS.accentLight, borderColor: COLORS.accent, borderWidth: 1 });
    p.drawText('3. UTILITY SOFTWARE', { x: this.marginLeft + 360, y: bY + 30, size: 7.5, font: this.fonts.bold, color: COLORS.accent });
    p.drawText('- Antivirus & Security Scanners', { x: this.marginLeft + 344, y: bY + 18, size: 6.5, font: this.fonts.regular, color: COLORS.textDark });
    p.drawText('- Disk Defragmenter, 7-Zip, Cleanup', { x: this.marginLeft + 344, y: bY + 8, size: 6.5, font: this.fonts.regular, color: COLORS.textDark });

    this.currentY -= 90;
  }

  // Diagram 5: CIA Triad
  drawCiaTriadDiagram() {
    this.ensureSpace(80);
    const p = this.currentPage;
    const startY = this.currentY;

    p.drawRectangle({
      x: this.marginLeft,
      y: startY - 75,
      width: this.contentWidth,
      height: 75,
      color: COLORS.bgGray,
      borderColor: COLORS.border,
      borderWidth: 0.75
    });

    p.drawText('CONCEPT DIAGRAM: THE CIA CYBER SECURITY TRIAD', {
      x: this.marginLeft + 12,
      y: startY - 14,
      size: 7.5,
      font: this.fonts.bold,
      color: COLORS.primary
    });

    const bY = startY - 62;
    const boxW = 150;
    const boxH = 40;

    // C
    p.drawRectangle({ x: this.marginLeft + 12, y: bY, width: boxW, height: boxH, color: COLORS.primaryLight, borderColor: COLORS.primary, borderWidth: 1 });
    p.drawText('CONFIDENTIALITY (C)', { x: this.marginLeft + 28, y: bY + 24, size: 7.5, font: this.fonts.bold, color: COLORS.primaryDark });
    p.drawText('Encryption, Passwords, 2FA', { x: this.marginLeft + 24, y: bY + 10, size: 6.5, font: this.fonts.regular, color: COLORS.textDark });

    // I
    p.drawRectangle({ x: this.marginLeft + 175, y: bY, width: boxW, height: boxH, color: COLORS.secondaryLight, borderColor: COLORS.secondary, borderWidth: 1 });
    p.drawText('INTEGRITY (I)', { x: this.marginLeft + 215, y: bY + 24, size: 7.5, font: this.fonts.bold, color: COLORS.secondary });
    p.drawText('Hashing, Digital Signatures, Checksums', { x: this.marginLeft + 180, y: bY + 10, size: 6.5, font: this.fonts.regular, color: COLORS.textDark });

    // A
    p.drawRectangle({ x: this.marginLeft + 338, y: bY, width: boxW + 10, height: boxH, color: COLORS.accentLight, borderColor: COLORS.accent, borderWidth: 1 });
    p.drawText('AVAILABILITY (A)', { x: this.marginLeft + 372, y: bY + 24, size: 7.5, font: this.fonts.bold, color: COLORS.accent });
    p.drawText('Backups, Redundancy, DDoS Defense', { x: this.marginLeft + 346, y: bY + 10, size: 6.5, font: this.fonts.regular, color: COLORS.textDark });

    this.currentY -= 85;
  }

  // Draw Final Running Headers & Footers
  finalizeHeadersAndFooters(unitNumber, unitTitle, courseMeta = {}) {
    const totalPages = this.pdfDoc.getPageCount();
    const isHi = (courseMeta && courseMeta.lang === 'hi') || this.lang === 'hi';
    const isOLevel = courseMeta.courseId === 'O_LEVEL' || courseMeta.courseCode === 'M2-R5.1';
    
    let headerPrefix = '';
    let footerText = '';

    if (isHi) {
      headerPrefix = isOLevel ? 'NIELIT O LEVEL मास्टर अध्ययन नोट्स' : 'NIELIT CCC मास्टर अध्ययन नोट्स';
      footerText = isOLevel
        ? 'राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान (NIELIT) • O-Level M2-R5.1 ऑफिशियल नोट्स'
        : 'राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान (NIELIT) • CCC ऑफिशियल नोट्स';
    } else {
      headerPrefix = isOLevel ? 'NIELIT O LEVEL MASTER STUDY NOTES' : 'NIELIT CCC MASTER STUDY NOTES';
      footerText = isOLevel
        ? 'National Institute of Electronics & Information Technology (NIELIT) • O-Level M2-R5.1 Official Notes'
        : 'National Institute of Electronics & Information Technology (NIELIT) • CCC 80-Hour Official Notes';
    }

    const unitLabel = isHi ? `इकाई ${String(unitNumber).padStart(2, '0')}` : `UNIT ${String(unitNumber).padStart(2, '0')}`;
    const cleanTitle = sanitizeText(unitTitle, this.lang);

    for (let i = 0; i < totalPages; i++) {
      const page = this.pdfDoc.getPage(i);
      const isCover = i === 0;

      // Running Header (Skip Cover)
      if (!isCover) {
        page.drawText(`${headerPrefix} • ${unitLabel}: ${cleanTitle}`, {
          x: this.marginLeft,
          y: this.pageHeight - 28,
          size: 7.5,
          font: this.fonts.bold,
          color: COLORS.primary
        });

        page.drawLine({
          start: { x: this.marginLeft, y: this.pageHeight - 33 },
          end: { x: this.pageWidth - this.marginRight, y: this.pageHeight - 33 },
          thickness: 0.75,
          color: COLORS.border
        });
      }

      // Running Footer
      page.drawLine({
        start: { x: this.marginLeft, y: 34 },
        end: { x: this.pageWidth - this.marginRight, y: 34 },
        thickness: 0.75,
        color: COLORS.border
      });

      page.drawText(footerText, {
        x: this.marginLeft,
        y: 22,
        size: 7,
        font: this.fonts.regular,
        color: COLORS.textMuted
      });

      const pageStr = isHi ? `पृष्ठ ${i + 1} / ${totalPages}` : `Page ${i + 1} of ${totalPages}`;
      const pageStrW = this.fonts.bold.widthOfTextAtSize(pageStr, 7.5);
      page.drawText(pageStr, {
        x: this.pageWidth - this.marginRight - pageStrW,
        y: 22,
        size: 7.5,
        font: this.fonts.bold,
        color: COLORS.primaryDark
      });
    }
  }
}
