// Canonical Localization Helper for NIELIT O-Level & CCC Notes
// Ensures 100% data parity between English and Hindi presentations

export const UI_LABELS = {
  en: {
    unitBadge: 'UNIT',
    topicsCountSuffix: 'SYLLABUS TOPICS',
    hoursSuffix: 'HOURS',
    unitOverview: 'UNIT OVERVIEW & PEDAGOGICAL SCOPE',
    whatYouWillLearn: 'WHAT YOU WILL MASTER IN THIS UNIT',
    quickTopicJump: 'Quick Topic Jump',
    whatIsIt: '1. WHAT IS THIS? (CONCEPTUAL OVERVIEW)',
    whatIsThis: '1. WHAT IS THIS? (CONCEPTUAL OVERVIEW)',
    whyImportant: '2. WHY IS IT IMPORTANT IN INDUSTRY & EXAMS?',
    howItWorks: '3. HOW DOES IT WORK? (MECHANISM & DATA FLOW)',
    componentsTitle: '4. KEY COMPONENTS & SPECIFICATIONS',
    keyComponents: '4. KEY COMPONENTS & SPECIFICATIONS',
    practicalExample: 'PRACTICAL REAL-WORLD SCENARIO & STEP-BY-STEP WORKFLOW',
    practicalScenario: 'PRACTICAL REAL-WORLD SCENARIO & STEP-BY-STEP WORKFLOW',
    examPoints: 'KEY TECHNICAL FACTS & SYLLABUS HIGHLIGHTS',
    examHighlights: 'KEY TECHNICAL FACTS & SYLLABUS HIGHLIGHTS',
    quickRecap: 'QUICK TOPIC RECAP',
    revisionTitle: 'REVISION',
    revisionHeading: 'UNIT COMPREHENSIVE REVISION CHECKLIST',
    unitRevisionTitle: 'UNIT COMPREHENSIVE REVISION CHECKLIST',
    revisionDesc: 'Review these essential syllabus points to solidify your understanding before taking assessments or exams:',
    keyTermsTitle: 'KEY TERMS, ACRONYMS & OFFICIAL FULL FORMS',
    termHeaders: ['Term / Acronym', 'Official Full Form', 'Key Concept & Function'],
    tableHeaders: ['Term / Acronym', 'Official Full Form', 'Key Concept & Function'],
    downloadPdf: 'Download PDF',
    downloadEnPdf: 'Download English PDF',
    downloadHiPdf: 'Download Hindi (हिन्दी) PDF',
    interactiveReaderTab: 'Interactive Web Reader',
    pdfViewerTab: 'Textbook PDF Viewer',
    previousUnit: 'Previous Unit',
    nextUnit: 'Next Unit',
    languageSwitcherTitle: 'Reading Language:'
  },
  hi: {
    unitBadge: 'इकाई (UNIT)',
    topicsCountSuffix: 'पाठ्यक्रम विषय',
    hoursSuffix: 'घंटे',
    unitOverview: 'इकाई परिचय एवं पाठ्यक्रम दायरा (Unit Overview)',
    whatYouWillLearn: 'इस इकाई में आप क्या सीखेंगे (Learning Outcomes)',
    quickTopicJump: 'त्वरित विषय नेविगेशन (Topic Jump)',
    whatIsIt: '1. यह क्या है? (अवधारणा अवलोकन - Conceptual Overview)',
    whatIsThis: '1. यह क्या है? (अवधारणा अवलोकन - Conceptual Overview)',
    whyImportant: '2. इसका क्या महत्व है? (Why It Matters)',
    howItWorks: '3. यह कैसे काम करता है? (तकनीकी कार्यप्रणाली एवं डेटा प्रवाह)',
    componentsTitle: '4. मुख्य घटक एवं तकनीकी विशेषताएं (Key Specifications)',
    keyComponents: '4. मुख्य घटक एवं तकनीकी विशेषताएं (Key Specifications)',
    practicalExample: 'व्यावहारिक वास्तविक परिदृश्य एवं उदाहरण (Practical Scenario)',
    practicalScenario: 'व्यावहारिक वास्तविक परिदृश्य एवं उदाहरण (Practical Scenario)',
    examPoints: 'मुख्य तकनीकी तथ्य एवं परीक्षा उपयोगी बिंदु (Exam Highlights)',
    examHighlights: 'मुख्य तकनीकी तथ्य एवं परीक्षा उपयोगी बिंदु (Exam Highlights)',
    quickRecap: 'त्वरित विषय सारांश (Quick Recap)',
    revisionTitle: 'पुनरीक्षण (REVISION)',
    revisionHeading: 'इकाई संपूर्ण पुनरीक्षण चेकलिस्ट (Revision Checklist)',
    unitRevisionTitle: 'इकाई संपूर्ण पुनरीक्षण चेकलिस्ट (Revision Checklist)',
    revisionDesc: 'परीक्षा या मूल्यांकन से पहले अपनी समझ को सुदृढ़ करने के लिए इन आवश्यक पाठ्यक्रम बिंदुओं की समीक्षा करें:',
    keyTermsTitle: 'महत्वपूर्ण पारिभाषिक शब्दावली एवं आधिकारिक पूर्ण रूप (Key Terms)',
    termHeaders: ['पारिभाषिक शब्द / संक्षिप्त नाम', 'आधिकारिक पूर्ण रूप', 'मुख्य अवधारणा एवं कार्य'],
    tableHeaders: ['पारिभाषिक शब्द / संक्षिप्त नाम', 'आधिकारिक पूर्ण रूप', 'मुख्य अवधारणा एवं कार्य'],
    downloadPdf: 'पीडीएफ डाउनलोड करें',
    downloadEnPdf: 'अंग्रेजी (English) PDF डाउनलोड करें',
    downloadHiPdf: 'हिन्दी (Hindi) PDF डाउनलोड करें',
    interactiveReaderTab: 'इंटरैक्टिव वेब रीडर',
    pdfViewerTab: 'पाठ्यपुस्तक PDF व्यूअर',
    previousUnit: 'पिछली इकाई',
    nextUnit: 'अगली इकाई',
    languageSwitcherTitle: 'पठन भाषा:'
  }
};

/**
 * Normalizes a canonical unit object into a single-language view ('en' or 'hi')
 */
export function getLocalizedUnit(unitData, lang = 'en') {
  if (!unitData) return null;
  const isHi = lang === 'hi';
  const labels = isHi ? UI_LABELS.hi : UI_LABELS.en;

  // Resolve Unit Title & Introduction
  let title = unitData.title;
  let introduction = unitData.introduction;
  let whatYouWillLearn = unitData.whatYouWillLearn || [];
  let unitRevision = unitData.unitRevision || [];
  let keyTerms = unitData.keyTerms || [];

  if (isHi && unitData.hi) {
    if (unitData.hi.title) title = unitData.hi.title;
    if (unitData.hi.introduction) introduction = unitData.hi.introduction;
    if (unitData.hi.whatYouWillLearn) whatYouWillLearn = unitData.hi.whatYouWillLearn;
    if (unitData.hi.unitRevision) unitRevision = unitData.hi.unitRevision;
    if (unitData.hi.keyTerms) keyTerms = unitData.hi.keyTerms;
  } else if (!isHi && unitData.en) {
    if (unitData.en.title) title = unitData.en.title;
    if (unitData.en.introduction) introduction = unitData.en.introduction;
    if (unitData.en.whatYouWillLearn) whatYouWillLearn = unitData.en.whatYouWillLearn;
    if (unitData.en.unitRevision) unitRevision = unitData.en.unitRevision;
    if (unitData.en.keyTerms) keyTerms = unitData.en.keyTerms;
  }

  // Localize PDF file names and URLs
  const numPadded = String(unitData.unitNumber).padStart(2, '0');
  const courseFolder = unitData.courseId === 'CCC' ? 'ccc' : 'olevel';
  const prefix = unitData.courseId === 'CCC' ? 'CCC' : 'O_Level';

  const enPdfFileName = `${prefix}_Unit_${numPadded}_Detailed_Notes.pdf`;
  const hiPdfFileName = `${prefix}_Unit_${numPadded}_Detailed_Notes_Hindi.pdf`;

  const enPdfUrl = `/notes/${courseFolder}/${enPdfFileName}`;
  const hiPdfUrl = `/notes/${courseFolder}/${hiPdfFileName}`;

  const currentPdfFileName = isHi ? hiPdfFileName : enPdfFileName;
  const currentPdfUrl = isHi ? hiPdfUrl : enPdfUrl;

  // Localize Topics array while preserving 1:1 structural parity
  const localizedTopics = (unitData.topics || []).map((t) => {
    // If topic has explicit localization object:
    const loc = (isHi && t.hi) ? t.hi : (t.en || t);

    return {
      code: t.code,
      codeSnippet: t.codeSnippet || loc.codeSnippet || null, // Code is never translated
      codeLanguage: t.codeLanguage || loc.codeLanguage || 'HTML/CSS/JS',
      diagramType: t.diagramType || loc.diagramType || null,
      title: loc.title || t.title,
      whatIsIt: loc.whatIsIt || t.whatIsIt || '',
      whyImportant: loc.whyImportant || t.whyImportant || '',
      howItWorks: loc.howItWorks || t.howItWorks || '',
      componentsTitle: loc.componentsTitle || (isHi ? labels.componentsTitle : t.componentsTitle),
      componentsOrTypes: loc.componentsOrTypes || t.componentsOrTypes || [],
      tableTitle: loc.tableTitle || t.tableTitle || null,
      table: loc.table || t.table || null,
      practicalExample: loc.practicalExample || t.practicalExample || '',
      importantPoints: loc.importantPoints || t.importantPoints || [],
      quickRevision: loc.quickRevision || t.quickRevision || ''
    };
  });

  return {
    ...unitData,
    lang,
    title,
    introduction,
    whatYouWillLearn,
    unitRevision,
    keyTerms,
    topics: localizedTopics,
    labels,
    pdfFileName: currentPdfFileName,
    pdfUrl: currentPdfUrl,
    enPdfUrl,
    enPdfFileName,
    hiPdfUrl,
    hiPdfFileName
  };
}
