import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  BookOpen, Clock, ArrowRight, ListChecks, FileText, Zap, Target, GraduationCap,
} from 'lucide-react';

import { getModules, getModule, getCourseMeta, moduleVisual } from '@/lib/navigation';
import {
  Button, Badge, Panel, PageHeader, SectionHeading, Breadcrumbs, PrevNext, MetaItem, IconTile, ModuleIcon,
} from '@/components/ui';
import CourseSidebar from '@/components/layout/CourseSidebar';
import UnitTopicList from '@/components/learning/UnitTopicList';

export function generateStaticParams() {
  return getModules('olevel').map((u) => ({ unitSlug: u.key }));
}

export function generateMetadata({ params }) {
  const unit = getModule('olevel', params.unitSlug);
  if (!unit) return { title: 'Unit not found' };
  return {
    title: `Unit ${unit.number}: ${unit.title}`,
    description: `${unit.description} ${unit.topics.length} topics, ${unit.hours} hours, ${unit.marks}. Notes in English and हिन्दी for NIELIT O Level M2-R5.1.`,
    alternates: { canonical: `/units/${unit.key}` },
  };
}

export default function UnitOverviewPage({ params }) {
  const units = getModules('olevel');
  const index = units.findIndex((u) => u.key === params.unitSlug);
  const unit = units[index];

  if (!unit) notFound();

  const prev = index > 0 ? units[index - 1] : null;
  const next = index < units.length - 1 ? units[index + 1] : null;
  const meta = getCourseMeta('olevel');

  const vis = moduleVisual('olevel', unit.number);
  const RESOURCES = [
    { icon: FileText, tone: 'sky', label: 'Full unit notes', desc: 'Long-form reader with PDFs', href: unit.notesHref },
    { icon: ListChecks, tone: 'amber', label: 'Unit questions', desc: 'MCQs with explanations', href: unit.mcqHref },
    { icon: Zap, tone: 'rose', label: 'One-shot revision', desc: 'The whole unit in one pass', href: unit.oneShotHref },
  ];

  return (
    <div className="shell shell-wide py-6 sm:py-8">
      <div className="grid gap-8 xl:grid-cols-[15rem_minmax(0,1fr)]">
        <CourseSidebar courseKey="olevel" activeModule={unit.key} title="O Level units" />

        <div className="min-w-0 max-w-4xl">
          <Breadcrumbs
            className="mb-4"
            items={[
              { label: 'O Level', href: '/syllabus' },
              { label: `Unit ${unit.number}` },
            ]}
          />

          <PageHeader
            icon={<ModuleIcon name={vis.icon} />}
            tone={vis.tone}
            eyebrow={`${meta.moduleCode} · Unit ${unit.number}`}
            title={unit.title}
            hindiTitle={unit.hindiTitle}
            description={unit.description}
            actions={
              <Button variant="primary" href={unit.topics[0]?.href} iconRight={ArrowRight}>
                Start first topic
              </Button>
            }
            meta={
              <>
                <MetaItem icon={BookOpen}>{unit.topics.length} topics</MetaItem>
                <MetaItem icon={Clock}>{unit.hours} hours ({unit.theoryHours}h theory · {unit.practicalHours}h lab)</MetaItem>
                <MetaItem icon={GraduationCap}>{unit.marks}</MetaItem>
              </>
            }
          />

          {/* What you'll be able to do */}
          {unit.objectives.length ? (
            <section className="mb-10" aria-labelledby="objectives">
              <SectionHeading
                id="objectives"
                eyebrow="By the end of this unit"
                title="What you will be able to do"
              />
              <ul className="space-y-2 max-w-measure-wide">
                {unit.objectives.map((o, i) => (
                  <li key={i} className="flex gap-2.5">
                    <Target className="w-4 h-4 mt-1.5 text-accent shrink-0" aria-hidden="true" />
                    <span className="text-prose text-ink-2 leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Topics */}
          <section className="mb-10" aria-labelledby="topics">
            <SectionHeading
              id="topics"
              eyebrow="Contents"
              title={`${unit.topics.length} topics`}
              description="Work through them in order — each one builds on the last."
            />
            <UnitTopicList topics={unit.topics} />
          </section>

          {/* Other ways into this unit */}
          <section className="mb-10" aria-labelledby="resources">
            <SectionHeading id="resources" eyebrow="Also for this unit" title="Notes, questions and revision" />
            <ul className="grid gap-3 sm:grid-cols-3">
              {RESOURCES.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="card-link group h-full p-4 flex items-start gap-3">
                    <r.icon className="w-5 h-5 mt-0.5 text-accent shrink-0" aria-hidden="true" />
                    <span>
                      <h3 className="text-h4 font-bold text-ink group-hover:text-accent transition-colors">{r.label}</h3>
                      <p className="mt-0.5 text-sm text-ink-3">{r.desc}</p>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Where this sits in the paper */}
          <Panel className="p-4 sm:p-5 mb-10 flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="eyebrow mb-1">Exam weight</p>
              <p className="text-base text-ink-2">
                <Badge tone="exam" className="mr-2">{unit.marksGroup}</Badge>
                {unit.marks}
              </p>
            </div>
            <Button href="/syllabus" size="sm" iconRight={ArrowRight}>Full marks blueprint</Button>
          </Panel>

          <PrevNext
            prev={prev ? { title: `Unit ${prev.number}: ${prev.title}`, hindiTitle: prev.hindiTitle, href: prev.href } : null}
            next={next ? { title: `Unit ${next.number}: ${next.title}`, hindiTitle: next.hindiTitle, href: next.href } : null}
          />
        </div>
      </div>
    </div>
  );
}
