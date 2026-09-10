import { unitsData, syllabusMeta } from '@/data/syllabusData';
import { cccChaptersData, cccSyllabusMeta } from '@/data/cccSyllabusData';

/**
 * ONE source of truth for information architecture.
 *
 * Navbar, mobile drawer, sidebar, breadcrumbs, footer and the command palette
 * all read from here, which is what stops the "beautiful homepage, outdated
 * inner pages" problem: change the IA in one file and every surface follows.
 */

export const COURSES = {
  olevel: {
    key: 'olevel',
    name: 'O Level',
    fullName: 'NIELIT O Level (IT)',
    module: 'M2-R5.1',
    subject: 'Web Designing & Publishing',
    hindiSubject: 'वेब डिजाइनिंग एवं पब्लिशिंग',
    level: 'Intermediate',
    home: '/',
    unitWord: 'Unit',
    unitWordPlural: 'Units',
    accentVar: '--c-olevel',
    description:
      'Build real web pages with HTML5, CSS3, W3.CSS, JavaScript and AngularJS, then prepare for both the theory paper and the practical exam.',
  },
  ccc: {
    key: 'ccc',
    name: 'CCC',
    fullName: 'Course on Computer Concepts',
    module: 'NIELIT CCC',
    subject: 'Digital Literacy Foundation',
    hindiSubject: 'कंप्यूटर कॉन्सेप्ट्स पर पाठ्यक्रम',
    level: 'Beginner',
    home: '/ccc',
    unitWord: 'Chapter',
    unitWordPlural: 'Chapters',
    accentVar: '--c-ccc',
    description:
      'Start from zero: computer basics, the internet, office productivity, digital payments, cyber safety and government digital services.',
  },
};

/* ---------------------------------------------------------------- sections */

export const OLEVEL_NAV = [
  {
    label: 'Learn',
    items: [
      { label: 'Syllabus & blueprint', href: '/syllabus', desc: 'All 8 units, hours and marks' },
      { label: 'Topic notes', href: '/units/unit-1', desc: 'Concept-by-concept study pages', match: '/units' },
      { label: 'Full unit notes', href: '/notes', desc: 'Long-form reader, English + हिन्दी' },
      { label: 'One-shot revision', href: '/one-shot', desc: 'A whole unit in one sitting' },
    ],
  },
  {
    label: 'Practice',
    items: [
      { label: 'MCQ practice', href: '/mcqs', desc: '200+ questions with explanations' },
      { label: 'Mock test', href: '/mock-test', desc: 'Timed, exam-pattern paper' },
      { label: 'Practical lab', href: '/practical', desc: 'Exam practical exercises' },
      { label: 'Projects', href: '/projects', desc: 'Build-along mini projects' },
      { label: 'Code playground', href: '/playground', desc: 'Write and run HTML/CSS/JS' },
    ],
  },
  {
    label: 'Revise',
    items: [
      { label: 'One-liners', href: '/one-liners', desc: '100 high-yield facts' },
      { label: 'Differences', href: '/differences', desc: 'Side-by-side comparisons' },
      { label: 'Cheat sheets', href: '/cheat-sheets', desc: 'Tags, properties, shortcuts' },
      { label: 'Saved items', href: '/saved', desc: 'Your bookmarks and notes' },
      { label: 'Progress', href: '/dashboard', desc: 'What you have covered' },
    ],
  },
];

export const CCC_NAV = [
  {
    label: 'Learn',
    items: [
      { label: 'Syllabus', href: '/ccc/syllabus', desc: 'All 9 chapters and weightage' },
      { label: 'Topic notes', href: '/ccc/chapters/chapter-1', desc: 'Beginner-friendly study pages', match: '/ccc/chapters' },
      { label: 'Full chapter notes', href: '/ccc/notes', desc: 'Long-form reader, English + हिन्दी' },
    ],
  },
  {
    label: 'Practice',
    items: [
      { label: 'MCQ practice', href: '/ccc/mcqs', desc: 'Chapter-wise question bank' },
      { label: 'Mock test', href: '/ccc/mock-test', desc: 'Timed, exam-pattern paper' },
    ],
  },
  {
    label: 'Revise',
    items: [
      { label: 'One-liners', href: '/ccc/one-liners', desc: 'Fast factual recall' },
      { label: 'Differences', href: '/ccc/differences', desc: 'RAM vs ROM, LAN vs WAN…' },
      { label: 'Cheat sheets', href: '/ccc/cheat-sheets', desc: 'Shortcuts and quick tables' },
    ],
  },
];

/* -------------------------------------------------------------- utilities */

export function courseFromPath(pathname = '') {
  return pathname === '/ccc' || pathname.startsWith('/ccc/') ? COURSES.ccc : COURSES.olevel;
}

export function navForCourse(courseKey) {
  return courseKey === 'ccc' ? CCC_NAV : OLEVEL_NAV;
}

export function isActivePath(pathname = '', href, match) {
  const target = match || href;
  if (target === '/' || target === '/ccc') return pathname === target;
  return pathname === target || pathname.startsWith(`${target}/`);
}

/** Units (O Level) or chapters (CCC), in a single normalised shape. */
export function getModules(courseKey) {
  if (courseKey === 'ccc') {
    return cccChaptersData.map((c) => ({
      key: c.slug,
      number: c.chapterNumber,
      // syllabusData stores "01" as a string; anything joining on it needs the int
      n: parseInt(c.chapterNumber, 10),
      title: c.title,
      hindiTitle: c.hindiTitle,
      href: `/ccc/chapters/${c.slug}`,
      description: c.description,
      marks: c.marksWeight,
      hours: c.totalHours,
      theoryHours: c.theoryHours,
      practicalHours: c.practicalHours,
      objectives: c.learningOutcomes || [],
      topics: (c.topics || []).map((t) => ({
        ...t,
        href: `/ccc/chapters/${c.slug}/topics/${t.slug}`,
      })),
      // The long-form CCC reader is keyed unit-1…unit-9, not chapter-N.
      notesHref: `/ccc/notes/unit-${parseInt(c.chapterNumber, 10)}`,
      mcqHref: `/ccc/mcqs/${c.slug}`,
    }));
  }

  return unitsData.map((u) => ({
    key: u.slug,
    number: u.unitNumber,
    n: parseInt(u.unitNumber, 10),
    title: u.title,
    hindiTitle: u.hindiTitle,
    href: `/units/${u.slug}`,
    description: u.description,
    marks: u.marksWeight,
    marksGroup: u.marksGroup,
    hours: u.totalHours,
    theoryHours: u.theoryHours,
    practicalHours: u.practicalHours,
    objectives: u.learningObjectives || [],
    topics: (u.topics || []).map((t) => ({
      ...t,
      href: `/units/${u.slug}/topics/${t.slug}`,
    })),
    notesHref: `/notes/${u.slug}`,
    mcqHref: `/mcqs/${u.slug}`,
    oneShotHref: `/one-shot/${u.slug}`,
  }));
}

export function getModule(courseKey, slug) {
  return getModules(courseKey).find((m) => m.key === slug) || null;
}

export function getCourseMeta(courseKey) {
  return courseKey === 'ccc' ? cccSyllabusMeta : syllabusMeta;
}

/** Flat topic list for a course, in syllabus order — used for prev/next + search. */
export function getCourseTopics(courseKey) {
  return getModules(courseKey).flatMap((m) =>
    m.topics.map((t) => ({
      ...t,
      moduleKey: m.key,
      moduleNumber: m.number,
      moduleTitle: m.title,
      courseKey,
    })),
  );
}

export function getAdjacentInCourse(courseKey, topicSlug) {
  const all = getCourseTopics(courseKey);
  const i = all.findIndex((t) => t.slug === topicSlug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? all[i - 1] : null,
    next: i < all.length - 1 ? all[i + 1] : null,
  };
}

/* ------------------------------------------------------------ visuals */

/**
 * Colour tone + icon name for a unit/chapter card. Kept here (not in data/)
 * so every surface — homepage, sidebar, unit page — paints a module the same
 * way. Icon names resolve through `components/ui/ModuleIcon`.
 */
const TONES = ['violet', 'sky', 'amber', 'rose', 'teal', 'mint'];

const OLEVEL_ICONS = ['Globe', 'PenTool', 'Code2', 'Palette', 'LayoutGrid', 'Braces', 'Image', 'UploadCloud'];
const CCC_ICONS = ['Monitor', 'Power', 'FileText', 'Table2', 'Presentation', 'Globe', 'Mail', 'Wallet', 'ShieldCheck'];

export function moduleVisual(courseKey, n) {
  const i = Math.max(0, (parseInt(n, 10) || 1) - 1);
  const icons = courseKey === 'ccc' ? CCC_ICONS : OLEVEL_ICONS;
  return { tone: TONES[i % TONES.length], icon: icons[i % icons.length] };
}

/* ------------------------------------------------------------ meta */

/** Date of the last editorial pass over the content library (shown on every article). */
export const CONTENT_UPDATED = '10 Sep 2026';

/** Reading time in minutes for a topic record — counts the fields the page renders. */
export function readingTime(topic) {
  const parts = [
    topic.definitionEnglish, topic.definitionHindi, topic.simpleWords, topic.whyImportant,
    topic.detailedExplanation, topic.syntax, topic.codeExample, topic.outputExplanation,
    topic.realWorldAnalogy, topic.examPerspective, topic.examImportance, topic.quickRevision,
    topic.practiceTask, topic.practiceAssignment,
    ...(topic.importantPoints || []), ...(topic.commonMistakes || []), ...(topic.examTips || []),
  ].filter(Boolean);
  const words = parts.join(' ').split(/\s+/).length;
  return Math.max(2, Math.round(words / 180));
}
