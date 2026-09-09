# Task: finish the remaining audit fixes, then commit and push

You are working in this repository (Next.js 14 App Router, JavaScript, Tailwind).
The site was just migrated to a new design-token system. **Read `DESIGN_SYSTEM.md`
in the repo root first — it is binding.** Every fix below must obey it.

## Non-negotiable constraints

- Do **not** introduce `slate-* gray-* blue-* emerald-* rose-* amber-* purple-* indigo-*`,
  hex colour literals, gradients, `font-black`, `shadow-2xl`, or **any `dark:` variant**.
  The tokens (`bg-surface bg-sunken border-line text-ink text-ink-2 text-ink-3 text-ink-4
  text-accent bg-accent-soft` + the `ok / warn / danger / exam` families) are already
  theme-aware.
- Do **not** change any file in `data/` — the educational content is correct and final.
- Do **not** change any route path, link, or component prop signature.
- Reuse the primitives in `components/ui/` — do not re-implement buttons, badges,
  callouts, tables or empty states.

---

## The 11 fixes

### 1. `components/layout/Footer.jsx` — heading level (fixes 3 routes at once)

Line ~19 renders the footer column titles as `<h3>`:

```jsx
<h3 className="eyebrow mb-3">{title}</h3>
```

The footer is on every page, so on any page whose body has no `<h2>` this produces an
`h1 → h3` jump. Currently broken on `/dashboard`, `/saved`, `/search`.

**Change `<h3>` to `<h2>`.** Keep the `eyebrow` class — visual size is unchanged.

### 2. `components/ui/Primitives.jsx` — `EmptyState` heading level

`EmptyState` hard-codes `<h3 className="text-h4">`. It is often the first thing after a
page `<h1>`, which is another h1 → h3 jump.

Add a `headingLevel` prop, default `'h2'`, and render that tag. Keep the
`text-h4 font-semibold text-ink` classes so nothing looks different.

### 3. `components/mcq/QuizCard.jsx` — question heading level

Around line 484 the question text is an `<h3>`, and it is the first heading after the
page `<h1>` on `/mcqs/[unitSlug]` and `/ccc/mcqs/[chapterSlug]`.

**Change it to `<h2>`.** Do not change its classes.

### 4. `components/mcq/QuizCard.jsx` — unlabelled save button

The bookmark/save toggle renders as an icon-only button with `aria-pressed` but no
accessible name:

```html
<button class="btn btn-ghost btn-sm" type="button" aria-pressed="false"><svg …Bookmark…/></button>
```

Add `aria-label={isSaved ? 'Remove this question from saved' : 'Save this question'}`
(match the existing state variable name in the file).

### 5. `app/one-liners/Client.jsx` — unlabelled revision-mode toggle

Icon-only `Eye` button, `class="btn btn-secondary no-print"`, has `aria-pressed` but no
name. Add `aria-label` describing both states, e.g.
`aria-label={revisionMode ? 'Exit revision mode' : 'Enter revision mode'}`.

### 6. `app/ccc/one-liners/Client.jsx` — same fix as #5.

### 7. `components/playground/SandboxEditor.jsx` — unlabelled Run button

The `Play` button has `title="Run the code (Ctrl + Enter)"` but no `aria-label`.
Add `aria-label="Run the code"`. Keep the `title`.
(This button also surfaces on `/classroom` through `SplitClassroom`.)

### 8. `app/notes/[unitSlug]/page.jsx` — missing metadata

This route currently inherits the root layout's default title, so all 8 O Level unit
reader pages share one `<title>`. It is already a Server Component.

Add `generateMetadata({ params })` that resolves the unit via the existing
`getCanonicalOLevelUnit(unitSlug)` / `oLevelCanonicalUnits` imports and returns:

```js
{
  title: `Unit ${n}: ${unit.title} — full notes`,
  description: `Complete ${unit.title} notes for NIELIT O Level M2-R5.1 in English and हिन्दी…`,
  alternates: { canonical: `/notes/${unitSlug}` },
}
```

Return `{ title: 'Unit not found' }` when the slug does not resolve.

### 9. `app/ccc/notes/[unitSlug]/page.jsx` — same fix as #8, using the CCC helpers
(`getCanonicalCccUnit` / `cccCanonicalUnits`) and canonical `/ccc/notes/${unitSlug}`.

### 10. Missing PDF assets — report, do not fabricate

`data/oLevelNotesData.js` and `data/cccNotesData.js` link to PDFs under
`public/notes/olevel/` and `public/notes/ccc/`. **`public/notes/` does not exist**, so
every "Download PDF" link 404s.

Do **not** generate placeholder PDFs. Instead:
- Make every PDF link degrade gracefully — if the file is absent the button should not
  be rendered, or should be rendered disabled with a short note.
- List the exact expected filenames in your final report so they can be added.

### 11. `data/cccOneLinersData.js` / `data/cccDifferencesData.js` — report only

Neither carries a chapter number, so the CCC revision pages cannot offer the
chapter filter the O Level ones have. **Do not edit the data.** Just note in your
report which field would need adding (`chapter: <number>`) and how many records.

---

## Verify before committing

```bash
npm run build          # must print "✓ Compiled successfully" and generate 258 pages
npx next start -p 3111 &
sleep 10
```

Then run this and confirm it prints **34/34 clean**:

```bash
python3 - <<'PY'
import re, urllib.request
BASE='http://localhost:3111'
ROUTES = ['/','/ccc','/syllabus','/ccc/syllabus','/notes','/notes/unit-1','/ccc/notes','/ccc/notes/unit-1',
 '/units/unit-1','/units/unit-1/topics/introduction-of-internet','/units/unit-4/topics/css-box-model',
 '/ccc/chapters/chapter-1','/ccc/chapters/chapter-1/topics/introduction-to-computer-and-gadgets',
 '/mcqs','/mcqs/unit-1','/mock-test','/ccc/mcqs','/ccc/mcqs/chapter-1','/ccc/mock-test',
 '/one-liners','/ccc/one-liners','/differences','/ccc/differences','/cheat-sheets','/ccc/cheat-sheets',
 '/one-shot','/one-shot/unit-3','/practical','/projects','/playground','/classroom',
 '/dashboard','/saved','/search']
BANNED = [
 (r'class="[^"]*\b(?:text|bg|border|from|to|via|ring|divide)-(?:slate|gray|zinc|neutral|stone|blue|indigo|purple|violet|emerald|amber|rose|red|green|teal|cyan|sky|orange|fuchsia|pink|lime|yellow)-\d','palette colour'),
 (r'class="[^"]*font-(?:black|extrabold)','font-black'),
 (r'class="[^"]*\bbg-gradient-','gradient'),
 (r'class="[^"]*shadow-2xl','shadow-2xl'),
 (r'class="[^"]*\bdark:','dark: variant'),
]
bad=0
for r in ROUTES:
    html=urllib.request.urlopen(BASE+r,timeout=30).read().decode('utf-8','ignore')
    body=html.split('</head>',1)[-1]; issues=[]
    if len(re.findall(r'<h1[^>]*>',body))!=1: issues.append('h1 count')
    lv=[int(m) for m in re.findall(r'<h([1-6])[\s>]',body)]
    for a,b in zip(lv,lv[1:]):
        if b>a+1: issues.append(f'h{a}->h{b}'); break
    for pat,lab in BANNED:
        n=len(re.findall(pat,body))
        if n: issues.append(f'{lab} x{n}')
    t=re.search(r'<title>(.*?)</title>',html,re.S).group(1)
    if 'NIELIT O Level &amp; CCC — Notes' in t and r!='/': issues.append('default title')
    n=sum(1 for m in re.finditer(r'<button([^>]*)>(\s*<svg.*?</svg>\s*)</button>',body,re.S) if 'aria-label' not in m.group(1))
    if n: issues.append(f'unlabelled icon btn x{n}')
    if issues: bad+=1; print('!!',r,'|','; '.join(issues))
print(f'{len(ROUTES)-bad}/{len(ROUTES)} clean')
PY
```

Also spot-check by hand at 320px width: `/units/unit-1/topics/introduction-of-internet`,
`/differences`, `/mock-test`. No horizontal page scroll; tables scroll inside their own
container only.

---

## Then commit and push

Only after the build passes and the audit prints 34/34:

```bash
git add -A
git commit -m "fix(a11y,seo): heading hierarchy, icon button labels, per-unit notes metadata

- Footer column titles h3 -> h2 (removes h1->h3 jump on /dashboard, /saved, /search)
- EmptyState takes a headingLevel prop, defaults to h2
- QuizCard question heading h3 -> h2; save toggle gets an aria-label
- aria-label on the revision-mode toggles and the playground Run button
- generateMetadata for /notes/[unitSlug] and /ccc/notes/[unitSlug]
- PDF links degrade gracefully while public/notes/ is empty"
git push
```

If `git push` fails because no remote is configured, stop and report the error — do
not create a remote or change the branch.

## Final report

Reply with: files changed, the audit result line, the exact PDF filenames still missing,
and the record counts for fix #11.
