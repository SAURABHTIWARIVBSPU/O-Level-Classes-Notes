import React from 'react';
import { PenLine, Layers, Code2, Maximize2, Presentation } from 'lucide-react';

import { Breadcrumbs, PageHeader, SectionHeading, Button, Callout, MetaItem } from '@/components/ui';
import SplitClassroom from '@/components/whiteboard/SplitClassroom';

export const metadata = {
  title: 'Digital classroom',
  description:
    'A smartboard-ready whiteboard beside a live code editor: draw the DOM tree or the CSS box model, then run the matching HTML in front of the class.',
};

/**
 * Server Component: `icon={Component}` on the client-side primitives would send
 * a function across the server/client boundary, which React rejects. Rendering
 * the icon as a child produces the same markup — Button and MetaItem lay their
 * children out in the same flex row.
 */
function Glyph({ as: Icon, size = 'md' }) {
  return <Icon className={size === 'sm' ? 'w-3.5 h-3.5 shrink-0' : 'w-4 h-4 shrink-0'} aria-hidden="true" />;
}

/** Diagram ids understood by components/whiteboard/BoardTemplates.js. */
const BOARD_TEMPLATES = ['client-server', 'html-dom-tree', 'css-box-model', 'frontend-backend', 'js-event-flow', 'w3css-grid-12'];

const TIPS = [
  {
    icon: PenLine,
    title: 'Written for a stylus',
    body: 'Pointer pressure and palm rejection are handled by the canvas, so writing on a classroom board feels like writing on a board.',
  },
  {
    icon: Layers,
    title: 'Ready-made diagrams',
    body: 'Insert Web Diagram drops in a client–server flow, a DOM tree, the CSS box model or a W3.CSS grid, so you draw on top instead of from scratch.',
  },
  {
    icon: Code2,
    title: 'Board and code side by side',
    body: 'Split view keeps the whiteboard on one half and a live editor on the other — explain a concept, then run it without switching pages.',
  },
  {
    icon: Maximize2,
    title: 'Presentation mode',
    body: 'The button in the board header fills the screen and hides the site chrome. Escape brings the page back.',
  },
];

export default function ClassroomPage({ searchParams }) {
  const requested = typeof searchParams?.template === 'string' ? searchParams.template : '';
  const initialTemplate = BOARD_TEMPLATES.includes(requested) ? requested : null;

  return (
    <div className="py-6 sm:py-10">
      <div className="shell shell-wide">
        <Breadcrumbs className="mb-5" items={[{ label: 'Practice', href: '/syllabus' }, { label: 'Digital classroom' }]} />

        <PageHeader icon="Presentation" tone="sky"
          eyebrow="Teaching tool"
          title="Digital classroom"
          hindiTitle="डिजिटल क्लासरूम"
          description="A whiteboard and a live code editor on one screen, sized for a smartboard or a tablet. Draw the diagram, then run the code that produces it."
          actions={
            <>
              <Button href="/playground" variant="secondary">
                <Glyph as={Code2} />
                Editor only
              </Button>
              <Button href="/syllabus" variant="secondary">
                Syllabus
              </Button>
            </>
          }
          meta={
            <>
              <MetaItem>
                <Glyph as={Presentation} size="sm" />
                Touch and stylus ready
              </MetaItem>
              <MetaItem>
                <Glyph as={Layers} size="sm" />
                6 ready-made diagrams
              </MetaItem>
            </>
          }
        />
      </div>

      {/* Full-bleed below sm — a board inside a padded reading column loses the
          drawing area that makes it useful on a tablet. */}
      <section aria-label="Whiteboard and live code editor" className="w-full max-w-shell-wide mx-auto px-0 sm:px-6 lg:px-8">
        <SplitClassroom initialTemplate={initialTemplate} />
      </section>

      <div className="shell shell-wide mt-12">
        <section aria-labelledby="classroom-how">
          <SectionHeading id="classroom-how" title="How to run a session" description="Four things worth knowing before the class starts." />

          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 max-w-measure-wide">
            {TIPS.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <dt className="flex items-center gap-2 text-h4 font-semibold text-ink">
                  <Icon className="w-4 h-4 text-ink-3 shrink-0" aria-hidden="true" />
                  {title}
                </dt>
                <dd className="mt-1 text-base text-ink-2 leading-relaxed">{body}</dd>
              </div>
            ))}
          </dl>

          <Callout kind="warning" className="max-w-measure">
            <p>
              The board is not saved anywhere. Export the drawing as a PNG before you clear it or leave the page, or the
              class notes are gone.
            </p>
          </Callout>
        </section>
      </div>
    </div>
  );
}
