# Design system — NIELIT Learning Platform

The rules below are enforced across every route. If a page needs something that
isn't here, add it here first, then use it.

---

## 1. Principles

1. **Restraint over decoration.** Premium = clarity + hierarchy + consistency + detail. Not more effects.
2. **Space and size make hierarchy.** Not weight, not colour, not a box.
3. **A card must earn itself.** A card means "this is a separate, clickable or self-contained thing". Body text in a card is a mistake.
4. **One accent hue.** Content-site green (`accent`). The header and footer are always dark (`nav-*`
   tokens). Everything else is neutral or carries a fixed meaning. The `hl` highlight and `tone-*`
   palette exist but are used sparingly — a directory page is text and rules, not tiles.
5. **Colour never carries meaning alone.** Always paired with an icon or a label.
6. **Mobile is a design, not a fallback.** Every component is designed at 320px first.

---

## 2. Colour

Never write a hex value in a component. Never write `slate-*`, `gray-*`, `blue-*`,
`from-x-600 to-y-600`. Use these token classes — they resolve correctly in **both**
themes, so **no `dark:` variant is needed**.

### Surfaces
| Class | Use |
|---|---|
| `bg-ground` | page background (set on `<body>`, rarely repeated) |
| `bg-surface` | cards, panels, header, dropdowns |
| `bg-sunken` | wells, code backgrounds, table headers, inset areas |
| `bg-overlay` | dialogs, popovers, sheets |

### Lines
| Class | Use |
|---|---|
| `border-line` | default border everywhere |
| `border-line-strong` | hover state, input borders, emphasis |

### Text
| Class | Use |
|---|---|
| `text-ink` | headings, primary text, values |
| `text-ink-2` | body copy, descriptions |
| `text-ink-3` | meta, captions, labels, inactive |
| `text-ink-4` | faint, disabled, decorative icons |
| `text-ink-inv` | text on a dark/ink fill |

### Accent (single hue — green)
`text-accent` `bg-accent` `bg-accent-soft` `border-accent-line` `text-accent-ink` `bg-accent-hover`

Use accent for: the primary action, the active nav item, links, focus, progress.
**Do not** use it as a background for large areas. `.hero-band` is a flat `sunken` wash;
`.cta-band` is the dark nav colour — neither is a gradient.

### Navigation (always dark)
`bg-nav` `bg-nav-2` `border-nav-line` `text-nav-ink` `text-nav-ink-2` — header, footer and the
dashboard resume band. They do not change with the theme.

### Highlight (yellow) — one per view
`bg-hl` `bg-hl-soft` `border-hl-line` `text-hl-ink` · `Button variant="highlight"` (`.btn-hl`).
Used for the single most important CTA inside a `.cta-band`, the "Free" pill, the star/score marker.

### Tones — icon tiles and cover art only
`violet sky amber rose teal mint` → `.icon-tile.tone-*` (`<IconTile tone icon />`) and `.cover.cover-*`
(the gradient header strip of a course/unit card). Never as a text colour, never behind body copy.
`moduleVisual(courseKey, n)` in `lib/navigation` gives every unit/chapter a fixed tone + icon so all
surfaces paint it the same way.

### Semantic — meaning only
| Token | Means | Where |
|---|---|---|
| `ok` | correct, complete, tip, best practice | completed topics, correct answers, tips |
| `warn` | caution, deadline, watch out | warnings, time running out |
| `danger` | wrong, common mistake | wrong answers, pitfalls |
| `exam` | this appears in the exam | exam points, weightage, marks |

Each has `.DEFAULT`, `-soft` (background), `-line` (border), `-ink` (text on soft).

### Course markers
`--c-olevel` (blue) and `--c-ccc` (teal), used **only** as a 6px dot or a 2px rule
to say which course you're in. Never as a page background or a gradient.

### Content-first layout rules
- Landing pages are **directories**: real topic titles as links, grouped by unit, in columns. No
  marketing hero, no feature-card grids, no testimonials, no gradient CTA bands.
- Article pages: flat title block → "Last updated · N min read" meta line → actions → the note →
  "Similar reads" as list rows. Reading column is `max-w-measure-wide`.
- A card is for a clickable object (a practice set, a tool). Lists of content are lists with rules.
- Fonts are self-hosted in `public/fonts` (Inter variable, JetBrains Mono, Noto Sans Devanagari).

### Banned
Gradients as surfaces · glow / blur orbs · glassmorphism · neon · `shadow-2xl` · icon-tile grids as
page decoration · more than 3 elevation levels · any hue outside the tokens.

---

## 3. Typography

Inter (UI + English) · Noto Sans Devanagari (Hindi) · JetBrains Mono (code).

| Class | Size | Use |
|---|---|---|
| `text-display` / `sm:text-display-lg` | 36 / 48 | homepage hero only |
| `text-h1` | 28 | page title |
| `text-h2` | 22 | section heading |
| `text-h3` | 18 | card group / sub-section |
| `text-h4` | 16 | card title |
| `text-lead` | 17 | hero subtitle, lead paragraph |
| `text-prose` | 16 | **note body text** |
| `text-base` | 15 | UI body, descriptions |
| `text-sm` | 13 | secondary UI, table cells |
| `text-xs` | 12 | meta, captions |
| `text-2xs` | 11 | micro labels, kbd |

**Weights: 400, 500, 600, 700 only.** `font-semibold` (600) is the ceiling for
headings. `font-black` / `font-extrabold` are banned.

- Hindi text: always add `hindi-text` and `lang="hi"`.
- Reading columns: `max-w-measure` (68ch). Never let note text run the full width.
- Section labels: `.eyebrow` (11px, 600, uppercase, tracked, `text-ink-3`).
- Numbers that change: add `tabular-nums`.

---

## 4. Spacing & layout

- 4px base grid. Use `1 1.5 2 3 4 5 6 8 10 12 16 20` only.
- Page wrapper: `<div className="shell py-8 sm:py-10">` (max 1200px) or
  `shell shell-wide` (1360px) for dashboards and directories.
- Section gap: `space-y-12` between major page sections; `space-y-6` inside one.
- Card padding: `p-4` compact · `p-5` default · `p-6` feature.
- Header offset for anchors is handled globally (`scroll-padding-top`).

---

## 5. Radii & elevation

- Radii: `rounded-md` (8px) controls · `rounded-xl` (14px) tiles/inputs · panels & cards are 16px
  (`.panel`, `.card-link`) · `rounded-2xl` (18px) sheets · `rounded-3xl` (24px) hero/CTA bands ·
  `rounded-full` pills, chips and dots.
- Elevation: `shadow-e1` resting · `shadow-e2` hover · `shadow-e3` floating
  (dialogs, drawers, sheets). Nothing else.

---

## 6. Components — always import, never re-implement

```jsx
import {
  Button, Badge, Panel, CardLink, PageHeader, SectionHeading, StatTile,
  ProgressBar, EmptyState, Skeleton, SkeletonText, Segmented, MetaItem,
  IconTile, Chip, Ring, ModuleIcon,
  Callout, CodeBlock, Breadcrumbs, TableOfContents, ReadingProgress,
  PrevNext, ScrollTable, ComparisonTable,
} from '@/components/ui';
import CourseSidebar from '@/components/layout/CourseSidebar';
```

| Component | Contract |
|---|---|
| `Button` | `variant`: primary (one per view) · secondary · ghost · soft. `size`: sm/md/lg. `icon`/`iconRight`. `href` makes it a link. |
| `Badge` | `tone`: neutral/accent/ok/warn/danger/exam. `mono` for codes. |
| `Panel` | static container. `CardLink` for a clickable one. |
| `PageHeader` | every page starts with this: eyebrow, title, hindiTitle, description, actions, meta, plus `icon` (lucide component or a `ModuleIcon` name string) and `tone` for the identity tile. Renders inside a `.hero-band`; `band={false}` for the flat variant. |
| `IconTile` | `icon`, `tone`, `size` sm/md/lg. The coloured square in front of a card title. |
| `Chip` | pill link/button for explore rows and filters. `active`. |
| `Ring` | conic progress ring, `value` 0–100, `size`. |
| `Button variant="highlight"` | the yellow CTA; only inside a `.cta-band` or hero. |
| `SectionHeading` | every section inside a page. |
| `Callout` | `kind`: note/tip/important/warning/danger/exam/analogy. The **only** box allowed inside note bodies. |
| `CodeBlock` | `code`, `language`, `runnable`, `output`, `explanation`. Always in that order. |
| `ComparisonTable` | `rows: [{aspect, a, b}]`, `labelA`, `labelB`. Stacks on mobile automatically. |
| `EmptyState` | every list that can be empty needs one. |

---

## 7. Content presentation contract

A topic page presents information in this fixed order. Sections absent from the
data are skipped silently — never rendered as an empty shell.

```
Breadcrumbs
Title (EN) + Title (हिन्दी)
Definition                     — bordered, quiet, the anchor of the page
In plain terms (simpleWords)   — Callout kind="analogy"
Why it matters                 — short paragraph
Detailed explanation           — prose, h2/h3 with anchors, feeds the TOC
Syntax                         — CodeBlock
Example                        — CodeBlock (code → output → explanation)
Real-world analogy             — Callout kind="analogy"
Important points               — list with ok markers
Common mistakes                — Callout kind="danger"
Exam perspective               — Callout kind="exam"
Quick revision                 — condensed strip
Practice task                  — actionable
Related topics · Prev / Next
```

Code always reads **CODE → OUTPUT → EXPLANATION**.

---

## 8. States — every list and every route needs all four

- **Loading**: `Skeleton` / `SkeletonText` in the shape of the real content. Never a spinner alone on a full page.
- **Empty**: `EmptyState` with a real next action, never a blank area.
- **No results**: show the query, suggest corrections, offer example searches.
- **Error**: what failed, what to do, a way back.

---

## 9. Accessibility — non-negotiable

- Semantic elements: `header nav main aside section article footer`, one `h1` per page, no skipped heading levels.
- Every icon-only control has `aria-label`. Decorative icons get `aria-hidden="true"`.
- Focus: never removed. The global `:focus-visible` ring is the only focus style.
- Touch targets ≥ 44px on mobile.
- Contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text and UI borders.
- Disclosure widgets: `aria-expanded` + `aria-controls`. Dialogs: `role="dialog"` `aria-modal` + focus trap + Escape.
- Motion is opt-out globally via `prefers-reduced-motion`; don't add un-guarded animation.

---

## 10. Motion

Only for state change. `duration-fast` (120ms) for hover/colour, default (180ms)
for disclosure, `duration-slow` (280ms) for entrance. Easing `ease-out`.
Allowed: `animate-fade-in`, `animate-fade-up`, `animate-slide-in-left`,
`animate-slide-up-sheet`. Nothing loops except a genuine loading indicator.

---

## 11. Performance

- Server Components by default. `'use client'` only for interactivity, and pushed to the smallest leaf.
- Never import `@/data/topicsData` or `@/data/mcqsData` into a shared layout component — they are hundreds of KB. Import the syllabus indexes (`lib/navigation`) instead, and `import()` heavy data lazily.
- No new dependencies without a clear reason. Syntax highlighting is `lib/highlight.js`, not Prism.

---

## 12. SEO

- Every route exports `metadata` (or `generateMetadata`) with a distinct `title` and `description`.
- Breadcrumbs component emits `BreadcrumbList` JSON-LD automatically — use it on every inner page.
- Headings describe content; `h1` matches the page title. Internal links use descriptive text, never "click here".
