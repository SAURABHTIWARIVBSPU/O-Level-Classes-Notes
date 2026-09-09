import React from 'react';
import Link from 'next/link';
import { ChevronDown, Clock, GraduationCap, ListChecks, Play, Target, Wrench, FileCode2 } from 'lucide-react';

import {
  Breadcrumbs,
  PageHeader,
  SectionHeading,
  Button,
  Badge,
  Panel,
  Callout,
  CodeBlock,
  MetaItem,
} from '@/components/ui';
import { getModules, getCourseMeta } from '@/lib/navigation';
import { masterPracticals } from '@/data/practicalsData';

export const metadata = {
  title: 'Practical lab exercises',
  description:
    'The NIELIT O Level M2-R5.1 practical exercises, one at a time: what to build, the steps in order, the output that counts as correct, and a model solution you can reveal when you are stuck.',
};

const DIFFICULTY_TONE = { Easy: 'ok', Medium: 'warn', Hard: 'danger' };

/**
 * This page is a Server Component so it can export `metadata`, which means the
 * `icon={Component}` prop of the client-side primitives is off limits — a
 * function cannot cross the server/client boundary. Rendering the icon as a
 * child produces exactly the same markup, because Button and MetaItem both lay
 * their children out in the same flex row.
 */
function Glyph({ as: Icon, size = 'md' }) {
  return <Icon className={size === 'sm' ? 'w-3.5 h-3.5 shrink-0' : 'w-4 h-4 shrink-0'} aria-hidden="true" />;
}

/** Inline code inside plain UI copy (`.prose-notes` styling does not reach here). */
function Code({ children }) {
  return (
    <code className="font-mono text-sm px-1 py-0.5 rounded-xs bg-sunken border border-line text-ink">{children}</code>
  );
}

/** Steps are authored with `backticks` around file names, tags and attributes. */
function renderStep(text) {
  return String(text)
    .split('`')
    .map((part, i) => (i % 2 === 1 ? <Code key={i}>{part}</Code> : <React.Fragment key={i}>{part}</React.Fragment>));
}

function stripNumberPrefix(title = '') {
  return title.replace(/^\s*(Practical|प्रैक्टिकल)\s*\d+\s*[:—-]\s*/u, '');
}

export default function PracticalPage() {
  const modules = getModules('olevel');
  const meta = getCourseMeta('olevel');

  const exercises = masterPracticals.map((lab, index) => {
    const unit = modules.find((m) => Number(m.number) === Number(lab.unit));
    const marks = unit ? String(unit.marks || '').match(/\d+/)?.[0] : null;
    return {
      ...lab,
      index: index + 1,
      name: stripNumberPrefix(lab.title),
      hindiName: stripNumberPrefix(lab.hindiTitle || ''),
      unitTitle: unit ? unit.title : null,
      unitHref: unit ? unit.href : null,
      unitMarks: marks,
    };
  });

  const totalHours = exercises.reduce((sum, e) => sum + (e.hoursAllocated || 0), 0);

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs className="mb-5" items={[{ label: 'Practice', href: '/syllabus' }, { label: 'Practical lab' }]} />

      <PageHeader icon="ClipboardList" tone="mint"
        eyebrow="Practice"
        title="Practical lab exercises"
        hindiTitle="प्रैक्टिकल लैब अभ्यास"
        description="Each exercise gives you a brief, the steps in order and the output that counts as correct. Build it yourself first — the model solution is one click away when you need it."
        actions={
          <Button href="/playground" variant="primary">
            <Glyph as={Play} />
            Open the playground
          </Button>
        }
        meta={
          <>
            <MetaItem>
              <Glyph as={ListChecks} size="sm" />
              {exercises.length} exercises · {totalHours} lab hours
            </MetaItem>
            <MetaItem>
              <Glyph as={Clock} size="sm" />
              {meta.practicalHours} practical hours in the module
            </MetaItem>
            <MetaItem>
              <Glyph as={GraduationCap} size="sm" />
              {meta.moduleCode}
            </MetaItem>
          </>
        }
      />

      {/* -------------------------------------------------------- jump list */}
      <nav aria-labelledby="exercise-index" className="mb-12">
        <h2 id="exercise-index" className="eyebrow mb-3">
          The exercises
        </h2>
        <Panel>
          <ol className="p-1.5 space-y-0.5">
            {exercises.map((ex) => (
              <li key={ex.id}>
                <a
                  href={`#${ex.id}`}
                  className="flex items-center gap-3 px-3 py-3 min-h-[44px] hover:bg-sunken transition-colors duration-fast rounded-md"
                >
                  <span className="w-7 h-7 shrink-0 grid place-items-center rounded-full bg-sunken border border-line font-mono text-xs font-semibold text-ink-2 tabular-nums">
                    {ex.index}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-medium text-ink leading-snug">{ex.name}</span>
                    <span className="block text-xs text-ink-3">
                      Unit {Number(ex.unit)} · {ex.hoursAllocated} lab hours
                    </span>
                  </span>
                  <Badge tone={DIFFICULTY_TONE[ex.difficulty] || 'neutral'} className="shrink-0">
                    {ex.difficulty}
                  </Badge>
                </a>
              </li>
            ))}
          </ol>
        </Panel>
      </nav>

      <Callout kind="exam" className="max-w-measure">
        <p>
          These follow the {meta.practicalHours} practical hours of {meta.moduleCode}. The marks shown on each exercise
          are the weight its unit carries in the written paper — use them to decide what to practise first when time is
          short.
        </p>
      </Callout>

      {/* -------------------------------------------------------- exercises */}
      <div className="mt-12 space-y-12">
        {exercises.map((ex) => (
          <article key={ex.id} id={ex.id} className="scroll-mt-24">
            <header className="pb-5 border-b border-line">
              <p className="eyebrow mb-2">
                Exercise {ex.index} of {exercises.length}
              </p>
              <h2 className="text-h2 font-semibold text-ink">{ex.name}</h2>
              {ex.hindiName ? (
                <p className="mt-1 text-base text-hindi hindi-text" lang="hi">
                  {ex.hindiName}
                </p>
              ) : null}

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                <MetaItem>
                  <Glyph as={GraduationCap} size="sm" />
                  {ex.unitHref ? (
                    <Link href={ex.unitHref} className="text-accent hover:underline">
                      Unit {Number(ex.unit)} — {ex.unitTitle}
                    </Link>
                  ) : (
                    <>Unit {Number(ex.unit)}</>
                  )}
                </MetaItem>
                {ex.unitMarks ? (
                  <MetaItem>
                    <Glyph as={Target} size="sm" />
                    {ex.unitMarks} marks in the written paper
                  </MetaItem>
                ) : null}
                <MetaItem>
                  <Glyph as={Clock} size="sm" />
                  {ex.hoursAllocated} lab hours
                </MetaItem>
                <Badge tone={DIFFICULTY_TONE[ex.difficulty] || 'neutral'}>{ex.difficulty}</Badge>
              </div>
            </header>

            {/* What to build */}
            <section aria-label={`What to build — ${ex.name}`} className="mt-6">
              <h3 className="eyebrow mb-1.5">What to build</h3>
              <p className="text-prose text-ink-2 leading-relaxed max-w-measure">{ex.objective}</p>

              {ex.requirements?.length ? (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs text-ink-3">
                    <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
                    You need
                  </span>
                  {ex.requirements.map((req) => (
                    <Badge key={req} tone="neutral">
                      {req}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </section>

            {/* Steps */}
            {ex.steps?.length ? (
              <section aria-label={`Steps — ${ex.name}`} className="mt-8">
                <h3 className="eyebrow mb-3">Do it in this order</h3>
                <ol className="step-process-list max-w-measure">
                  {ex.steps.map((step, i) => (
                    <li key={i} className="step-process-item text-base text-ink-2 leading-relaxed">
                      {renderStep(step)}
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            {/* Expected output */}
            {ex.expectedOutput ? (
              <Callout kind="important" label="Correct when" className="max-w-measure">
                <p>{ex.expectedOutput}</p>
              </Callout>
            ) : null}

            {/* Solution — hidden until asked for */}
            {ex.code ? (
              <details className="group mt-6 panel overflow-hidden">
                <summary className="flex items-center justify-between gap-3 px-4 py-3.5 min-h-[44px] cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden hover:bg-sunken transition-colors duration-fast">
                  <span className="inline-flex items-center gap-2 text-base font-semibold text-ink">
                    <FileCode2 className="w-4 h-4 text-ink-3" aria-hidden="true" />
                    Show the model solution
                  </span>
                  <span className="inline-flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline text-xs text-ink-3">Try it yourself first</span>
                    <ChevronDown
                      className="w-4 h-4 text-ink-3 transition-transform duration-fast group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </span>
                </summary>

                <div className="px-4 pb-4 border-t border-line">
                  <CodeBlock code={ex.code} language="html" runnable maxHeight="26rem" />
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button href="/playground" size="sm" variant="secondary">
                      <Glyph as={Play} size="sm" />
                      Rebuild it in the playground
                    </Button>
                    {ex.unitHref ? (
                      <Button href={ex.unitHref} size="sm" variant="ghost">
                        Read the unit notes
                      </Button>
                    ) : null}
                  </div>
                </div>
              </details>
            ) : null}
          </article>
        ))}
      </div>

      <section aria-labelledby="practical-next" className="mt-16">
        <SectionHeading
          id="practical-next"
          title="When you have finished these"
          description="The projects take the same skills and put them into one full page."
        />
        <div className="flex flex-wrap gap-2">
          <Button href="/projects" variant="secondary">
            Build-along projects
          </Button>
          <Button href="/mock-test" variant="secondary">
            Timed mock test
          </Button>
          <Button href="/syllabus" variant="ghost">
            Back to the syllabus
          </Button>
        </div>
      </section>
    </div>
  );
}
