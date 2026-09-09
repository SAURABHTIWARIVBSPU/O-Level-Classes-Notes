import React from 'react';
import { ChevronDown, Clock, FileCode2, FolderGit2, Layers, Play, Wrench } from 'lucide-react';

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
import { masterProjects } from '@/data/projectsData';

export const metadata = {
  title: 'Build-along projects',
  description:
    'Eight web projects for NIELIT O Level M2-R5.1, from a one-page portfolio to a full capstone site: difficulty, what you will learn, the tech involved and the build steps in order.',
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

const LEVEL_TONE = {
  Beginner: 'ok',
  'Beginner-Intermediate': 'ok',
  Intermediate: 'accent',
  'Intermediate-Advanced': 'accent',
  Advanced: 'warn',
};

const TIERS = [
  {
    key: 'start',
    title: 'Start here',
    description: 'One page, one idea. Finish these before you touch a framework.',
    match: (level) => level.startsWith('Beginner'),
  },
  {
    key: 'build',
    title: 'Build on it',
    description: 'Layout, styling and interactivity together — the bulk of the practical syllabus.',
    match: (level) => level.startsWith('Intermediate'),
  },
  {
    key: 'further',
    title: 'Go further',
    description: 'Frameworks, asset preparation and the capstone that pulls all eight units into one site.',
    match: () => true,
  },
];

function escapeHtml(text = '') {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * projectsData carries no starter file, so the page generates a valid, minimal
 * one: a working HTML skeleton with the build steps left in as comments.
 */
function starterFile(project) {
  const todos = (project.learningOutcomes || [])
    .map((outcome, i) => `  <!-- ${i + 1}. ${String(outcome).replace(/--+/g, '-')} -->`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(project.title)}</title>
  <style>
    body { font-family: sans-serif; max-width: 60em; margin: 0 auto; padding: 24px; line-height: 1.6; }
  </style>
</head>
<body>
  <h1>${escapeHtml(project.title)}</h1>

${todos}

</body>
</html>`;
}

function hoursOf(project) {
  const match = String(project.duration || '').match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function ProjectCard({ project }) {
  const level = project.level || project.difficulty || 'Project';

  return (
    <Panel as="article" id={project.id} className="p-5 sm:p-6 scroll-mt-24">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
        <p className="eyebrow">
          Project {project.number} · {project.duration}
        </p>
        <Badge tone={LEVEL_TONE[level] || 'exam'}>{level}</Badge>
      </div>

      <h3 className="mt-1.5 text-h3 font-semibold text-ink">{project.title}</h3>
      {project.hindiTitle ? (
        <p className="mt-1 text-base text-hindi hindi-text" lang="hi">
          {project.hindiTitle}
        </p>
      ) : null}

      <p className="mt-3 text-base text-ink-2 leading-relaxed max-w-measure">{project.description}</p>

      {project.technologies?.length ? (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-3">
            <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
            You will use
          </span>
          {project.technologies.map((tech) => (
            <Badge key={tech} tone="neutral">
              {tech}
            </Badge>
          ))}
        </div>
      ) : null}

      {project.learningOutcomes?.length ? (
        <div className="mt-6">
          <h4 className="eyebrow mb-3">What you build, step by step</h4>
          <ol className="step-process-list max-w-measure">
            {project.learningOutcomes.map((outcome, i) => (
              <li key={i} className="step-process-item text-base text-ink-2 leading-relaxed">
                {outcome}
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      <details className="group mt-2 well overflow-hidden">
        <summary className="flex items-center justify-between gap-3 px-3.5 py-3 min-h-[44px] cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
          <span className="inline-flex items-center gap-2 text-base font-medium text-ink">
            <FileCode2 className="w-4 h-4 text-ink-3" aria-hidden="true" />
            Starter file
          </span>
          <ChevronDown
            className="w-4 h-4 text-ink-3 shrink-0 transition-transform duration-fast group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>
        <div className="px-3.5 pb-3.5 border-t border-line">
          <CodeBlock
            code={starterFile(project)}
            language="html"
            runnable
            maxHeight="22rem"
            explanation="Copy this into a new .html file, then work down the numbered comments. Delete each comment as you finish that step."
          />
        </div>
      </details>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button href="/playground" size="sm" variant="secondary">
          <Glyph as={Play} size="sm" />
          Start in the playground
        </Button>
        <Button href="/practical" size="sm" variant="ghost">
          Related lab exercises
        </Button>
      </div>
    </Panel>
  );
}

export default function ProjectsPage() {
  const projects = masterProjects;
  const totalHours = projects.reduce((sum, p) => sum + hoursOf(p), 0);

  const assigned = new Set();
  const tiers = TIERS.map((tier) => {
    const items = projects.filter((p) => {
      if (assigned.has(p.id)) return false;
      if (!tier.match(p.level || p.difficulty || '')) return false;
      assigned.add(p.id);
      return true;
    });
    return { ...tier, items };
  }).filter((tier) => tier.items.length > 0);

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs className="mb-5" items={[{ label: 'Practice', href: '/syllabus' }, { label: 'Projects' }]} />

      <PageHeader icon="FolderKanban" tone="violet"
        eyebrow="Practice"
        title="Build-along projects"
        hindiTitle="प्रोजेक्ट्स"
        description="Bigger than an exercise, smaller than a portfolio. Each project names the skills it exercises and lists the build steps in the order you should tackle them."
        actions={
          <Button href="/playground" variant="primary">
            <Glyph as={Play} />
            Open the playground
          </Button>
        }
        meta={
          <>
            <MetaItem>
              <Glyph as={FolderGit2} size="sm" />
              {projects.length} projects
            </MetaItem>
            <MetaItem>
              <Glyph as={Clock} size="sm" />
              About {totalHours} hours end to end
            </MetaItem>
            <MetaItem>
              <Glyph as={Layers} size="sm" />
              Beginner to capstone
            </MetaItem>
          </>
        }
      />

      <Callout kind="tip" className="max-w-measure">
        <p>
          Work top to bottom. Each project reuses what the one before it taught you, so the capstone at the end is
          mostly assembly rather than new learning.
        </p>
      </Callout>

      <div className="mt-12 space-y-12">
        {tiers.map((tier) => (
          <section key={tier.key} aria-labelledby={`tier-${tier.key}`}>
            <SectionHeading id={`tier-${tier.key}`} title={tier.title} description={tier.description} />
            <div className="space-y-6">
              {tier.items.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section aria-labelledby="projects-next" className="mt-16">
        <SectionHeading
          id="projects-next"
          title="Before the exam"
          description="Projects prove you can build. These two prove you can pass."
        />
        <div className="flex flex-wrap gap-2">
          <Button href="/practical" variant="secondary">
            Practical lab exercises
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
