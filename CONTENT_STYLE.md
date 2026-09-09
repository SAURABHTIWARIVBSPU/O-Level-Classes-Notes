# Content style guide — NIELIT Learning Platform

This is the editorial standard for every piece of educational content on the site:
topic pages, long-form unit notes, one-liners, differences, cheat sheets and MCQ
explanations. `DESIGN_SYSTEM.md` governs how things look; this file governs what
they say and how they say it. Both are binding.

The test for every sentence: **would an experienced teacher say this to a student
sitting in front of them?** If not, rewrite it or cut it.

---

## 1. The voice

An experienced Indian computer teacher explaining a concept in class. Natural,
direct, confident, a little conversational. Never a textbook, never a Wikipedia
article, never a marketing page.

**English sections** — short plain sentences. Simple vocabulary. Technical terms
stay in English. Vary sentence length; do not let every paragraph have the same
rhythm.

**Hindi / Hinglish sections** — the Hindi a teacher actually speaks in a Lucknow or
Patna classroom: Devanagari for the sentence, English for the technical word
(`RAM`, `browser`, `server`, `tag`). No literal translations of English idioms. No
Sanskritised vocabulary a student would not use themselves (write "बदलता है", not
"परिवर्तित करता है"; "जरूरी", not "आवश्यक" unless it reads naturally).

**Banned phrases and patterns** — never use, in either language:

- "Let's delve into", "In today's digital era", "It is important to note that",
  "Furthermore", "Moreover", "In conclusion", "This comprehensive guide",
  "Whether you are a beginner or an expert", "Unlock the power of", "Embark on".
- Filler adjectives: *massive, pivotal, robust, seamless, comprehensive, versatile,
  powerful, crucial, cutting-edge, vast, revolutionary, universally recognised.*
  If the fact is important, say why; do not decorate it.
- "सरल शब्दों में" / "In simple words" as a sentence opener — the section heading
  already says that.
- "Direct CCC Question:", "Frequently asked in CCC:" prefixes on every tip. Write
  the question and answer plainly.
- Numbered generic headings inside explanations ("### 1. Introduction",
  "### 2. Features", "### 3. Advantages").

**Preferred phrasings** — "X is used to…", "This is why…", "Students often mix up
A and B", "Notice that…", "Try this:", "The exam asks this as…".

---

## 2. Depth — exam-focused, not encyclopaedic

The reader is preparing for a specific NIELIT paper. Depth follows the syllabus,
not the internet.

- Keep everything the syllabus names and the exam asks.
- Cut anything that is only there to look thorough: internals the paper never
  touches (TLS handshakes, CSSOM, register names, PPG sensors), long lists of
  frameworks, vendor trivia, market-share percentages.
- One good example beats three. One good analogy beats two.
- A simple topic stays short. Length is decided by the concept, not by a target
  word count.

**Better content, not more content.**

---

## 3. No repetition across the site

Each fact is explained properly **once**, in the topic that owns it. Elsewhere it
is a one-line reminder with a link.

| Fact | Owner (O Level Unit 1) |
|---|---|
| Internet vs WWW comparison | `www` |
| Client–server request cycle | `working-of-websites` |
| HTML / CSS / JS roles | `front-end` |
| Client-side vs server-side comparison | `server-side-scripting-languages` |
| Static vs dynamic comparison | `types-of-websites` |

When another topic needs the idea: "A static site serves the same page to
everyone — the full comparison is in *Types of Websites*." Then move on.

Inside one topic, the same point does not appear in the explanation, the key
points, the exam box **and** the quick revision. Each section has its own job
(§4).

---

## 4. The topic page — what each field is for

Sections the reader does not have data for are skipped automatically, so leave a
field out rather than filling it with something weak.

| Field | Job | Length | Language |
|---|---|---|---|
| `definitionEnglish` | The exam-ready definition. One sentence a student can write in the answer sheet. | ≤ 30 words | English |
| `definitionHindi` | The same definition in natural Hindi. Not a word-for-word translation. | ≤ 35 words | Hindi |
| `simpleWords` | The idea in plain language, the way you would say it in class. Opens with the idea, not with "सरल शब्दों में". | 1–2 sentences | Hindi |
| `whyImportant` | Why the student should care — for the exam, for building sites, or both. | 1–2 sentences | Hindi |
| `detailedExplanation` | The teaching. Markdown. Meaningful `###` headings (a question or a claim, never "Overview"). Short paragraphs (2–4 sentences). Lists for lists, a table only for a real comparison. | As long as the concept needs, usually 150–350 words | Simple English |
| `syntax` | A skeleton or diagram the student should memorise. Omit if there is none. | short | — |
| `codeExample` | One small, complete, runnable example that shows the concept — not a demo of five features. Omit for purely conceptual topics. | ≤ 25 lines | — |
| `outputExplanation` | What the student will *see* when the example runs, and what to notice. | 1–2 sentences | Hindi |
| `realWorldAnalogy` | One everyday comparison that makes the concept click. Indian, familiar objects. | 1–2 sentences | Hindi |
| `importantPoints` | The 3–5 facts to remember. Each one a single line. Not a repeat of the definition. | 3–5 items | Hinglish |
| `commonMistakes` | What students actually get wrong, with the correction in brackets. | 1–3 items | Hinglish |
| `examPerspective` | How this appears in the paper: the exact style of question and the answer expected. | 1–2 sentences | Hinglish |
| `quickRevision` | The topic in 25 words — the last thing read before the exam. | ≤ 30 words | Hinglish |
| `practiceTask` | One thing to actually do, on a computer or on paper, in 10 minutes. | 1–2 sentences | Hinglish |
| `mcqs` | 2 self-check questions with a one-line explanation each. Test the confusion, not the trivia. | 2 items | English |
| `relatedTopics` | Slugs the student should read next. Only real prerequisites or follow-ups. | 2–4 | — |

CCC topics use the same rules with their own field names: `examImportance`
(one short phrase, e.g. "High — 3–4 questions every paper"), `examTips`,
`practiceAssignment`, `microQuiz`.

---

## 5. Explaining a concept — the order

Technical definition → simple meaning → example → why it matters. Then detail.
Then what confuses people. Then how the exam asks it. This is the order a good
teacher uses and it is the order the topic page renders in.

Inside `detailedExplanation`, headings should let a student scan the page and
find the part they need:

- Good: "How a page reaches your browser", "Why 1 KB is 1024 bytes and not 1000",
  "Impact vs non-impact printers", "When would you use a static site?"
- Bad: "Overview", "Introduction", "Features", "Advantages", "Conclusion".

Use a comparison table only when students genuinely confuse two things
(RAM/ROM, static/dynamic, compiler/interpreter). Use numbered steps only for a
real procedure.

---

## 6. Exam marking — sparingly

Mark a fact as an exam point only when it is one. A page where everything is
"Important" has nothing important on it. Typical exam points: a full form, a
year and a name, a number (32-bit, 9 digits, 700 MB), a one-line difference.

---

## 7. Examples students recognise

Phones, WhatsApp, UPI, railway booking, a school website, a bank cheque, a
LibreOffice document, Google search, YouTube. Not enterprise architecture, not
American products the student has never seen.

For code: the smallest example that shows the one idea. A student should be able
to type it out in five minutes and see the result.

---

## 8. Editorial checklist — run before any content is committed

For every topic:

1. Read the definition aloud. Could a student write it in an exam? Is it under 30 words?
2. Does `simpleWords` add something the definition did not (a picture in the mind)?
3. Is any fact stated twice on the page? Cut the second one.
4. Is any fact on this page explained *properly* on another page too? Replace with a one-line reminder.
5. Is every `###` heading meaningful on its own?
6. Any paragraph over four sentences? Split it.
7. Any banned phrase or filler adjective? Cut it.
8. Does the code example show one idea, and does `outputExplanation` say what appears?
9. Is the exam box specific (the actual question style), not "questions are asked on this"?
10. Would the student know what to do next (practice task, self-check, related topic)?

If any answer is no, fix it before moving on.
