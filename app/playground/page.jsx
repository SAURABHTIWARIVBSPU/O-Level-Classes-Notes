import React from 'react';
import { Keyboard, ShieldCheck, GraduationCap, FlaskConical, FolderGit2 } from 'lucide-react';

import { Breadcrumbs, PageHeader, SectionHeading, Button, Badge, Callout, MetaItem } from '@/components/ui';
import SandboxEditor from '@/components/playground/SandboxEditor';

export const metadata = {
  title: 'Code playground',
  description:
    'Write HTML5, CSS3, W3.CSS, JavaScript or AngularJS and see the result instantly in a sandboxed preview — the same code you are asked to write in the NIELIT O Level practical exam.',
};

/**
 * Thin host page. The editor is the product here, so the page gives it the full
 * width of the shell (and the full width of the screen below `sm`), and keeps
 * everything else to a header above it and short instructions below it.
 */

/**
 * Server Component: `icon={Component}` on the client-side primitives would send
 * a function across the server/client boundary, which React rejects. Rendering
 * the icon as a child produces the same markup — Button and MetaItem lay their
 * children out in the same flex row.
 */
function Glyph({ as: Icon, size = 'md' }) {
  return <Icon className={size === 'sm' ? 'w-3.5 h-3.5 shrink-0' : 'w-4 h-4 shrink-0'} aria-hidden="true" />;
}

/* Keys must match PRESET_TEMPLATES inside SandboxEditor — an unknown key would
   crash the editor, so anything else falls back to the HTML5 skeleton. */
const PRESETS = [
  { key: 'html5', label: 'HTML5 skeleton' },
  { key: 'tables', label: 'Tables — rowspan & colspan' },
  { key: 'w3css', label: 'W3.CSS responsive grid' },
  { key: 'angularjs', label: 'AngularJS data binding' },
];

/** Inline code inside plain UI copy (`.prose-notes` styling does not reach here). */
function Code({ children }) {
  return (
    <code className="font-mono text-sm px-1 py-0.5 rounded-xs bg-surface border border-line text-ink">{children}</code>
  );
}

const STEPS = [
  'Pick a starting point below, or clear the editor and start from an empty file.',
  'Type your HTML, CSS and JavaScript in the left pane. On a phone, use the Code / Result switch at the top of the editor.',
  'Press Run (or Ctrl + Enter) to render your page in the preview pane on the right.',
  'Fix, run again, and repeat. When it looks right, copy the code into your answer file.',
];

export default function PlaygroundPage({ searchParams }) {
  const requested = typeof searchParams?.template === 'string' ? searchParams.template : '';
  const initialTemplate = PRESETS.some((p) => p.key === requested) ? requested : 'html5';

  return (
    <div className="py-6 sm:py-10">
      <div className="shell shell-wide">
        <Breadcrumbs className="mb-5" items={[{ label: 'Practice', href: '/syllabus' }, { label: 'Code playground' }]} />

        <PageHeader
          eyebrow="Practice"
          title="Code playground"
          hindiTitle="कोड प्लेग्राउंड"
          description="Write a page and see it render straight away. Nothing is uploaded — your code runs inside a sandboxed frame in this browser tab."
          actions={
            <>
              <Button href="/practical" variant="secondary">
                <Glyph as={FlaskConical} />
                Practical exercises
              </Button>
              <Button href="/projects" variant="secondary">
                <Glyph as={FolderGit2} />
                Projects
              </Button>
            </>
          }
          meta={
            <>
              <MetaItem>
                <Glyph as={Keyboard} size="sm" />
                Ctrl + Enter runs the code
              </MetaItem>
              <MetaItem>
                <Glyph as={ShieldCheck} size="sm" />
                Runs in your browser only
              </MetaItem>
              <MetaItem>
                <Glyph as={GraduationCap} size="sm" />
                Matches the M2-R5.1 practical paper
              </MetaItem>
            </>
          }
        />

        <section aria-labelledby="starting-points" className="mb-5">
          <h2 id="starting-points" className="eyebrow mb-2">
            Start from
          </h2>
          <ul className="flex flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <li key={preset.key}>
                <Button
                  href={`/playground?template=${preset.key}`}
                  size="sm"
                  variant={preset.key === initialTemplate ? 'soft' : 'secondary'}
                  aria-current={preset.key === initialTemplate ? 'true' : undefined}
                >
                  {preset.label}
                </Button>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Full-bleed below sm: a code editor squeezed into a reading column is
          unusable on a phone. */}
      <section aria-label="Code editor and live preview" className="w-full max-w-shell-wide mx-auto px-0 sm:px-6 lg:px-8">
        <SandboxEditor key={initialTemplate} initialTemplate={initialTemplate} />
      </section>

      <div className="shell shell-wide mt-12">
        <section aria-labelledby="how-to-use">
          <SectionHeading
            id="how-to-use"
            title="How to use it"
            description="Four steps, the same loop you will follow in the practical exam."
          />
          <ol className="step-process-list max-w-measure">
            {STEPS.map((step) => (
              <li key={step} className="step-process-item text-base text-ink-2 leading-relaxed">
                {step}
              </li>
            ))}
          </ol>

          <Callout kind="tip" className="max-w-measure">
            <p>
              The preview is a real browser frame, so <Code>alert()</Code>, <Code>confirm()</Code> and form validation
              behave exactly as they will on the examiner&rsquo;s machine. Nothing you type leaves this tab and nothing
              is saved — copy your work out before you close the page.
            </p>
          </Callout>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Badge tone="exam">Exam tip</Badge>
            <p className="text-base text-ink-2">
              Practise the three questions that come up most: a table with <Code>rowspan</Code> and <Code>colspan</Code>,
              a validated registration form, and a W3.CSS responsive layout.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
