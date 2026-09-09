import React from 'react';
import { Award, ListChecks, Timer } from 'lucide-react';

import { Breadcrumbs, Button, MetaItem, PageHeader } from '@/components/ui';
import ExamEngine from '@/components/mcq/ExamEngine';
import { masterMcqs } from '@/data/mcqsData';
import { syllabusMeta } from '@/data/syllabusData';

export const metadata = {
  title: 'Mock test — O Level M2-R5.1',
  description:
    'A timed NIELIT O Level M2-R5.1 mock paper built on the official marks blueprint: 100 questions in 90 minutes, one mark each, no negative marking, with a unit-wise breakdown and full answer key afterwards.',
};

/**
 * The paper follows the official blueprint in syllabusData rather than simply
 * taking the first N questions — otherwise a "full syllabus" paper would only
 * ever ask about Units 1–4, which is what the previous version did.
 */
function buildPaper(scale) {
  const byUnit = new Map();
  masterMcqs.forEach((q) => {
    const unit = Number(q.unit);
    if (!byUnit.has(unit)) byUnit.set(unit, []);
    byUnit.get(unit).push(q);
  });

  const paper = [];
  syllabusMeta.marksDistribution.forEach((group) => {
    const units = group.unitsCovered.map((u) => Number(String(u).replace(/\D/g, '')));
    const want = Math.round(group.marks * scale);
    const per = Math.floor(want / units.length);
    let extra = want - per * units.length;

    units.forEach((unit) => {
      const take = per + (extra > 0 ? 1 : 0);
      if (extra > 0) extra -= 1;
      paper.push(...(byUnit.get(unit) || []).slice(0, take));
    });
  });

  return paper;
}

export default function MockTestPage() {
  const fullPaper = buildPaper(1);
  const speedPaper = buildPaper(0.25);

  const modes = [
    {
      key: 'full',
      label: 'Full paper',
      description:
        'Every unit, weighted exactly as the written exam is: 25 marks from Units 1–3, 20 from Unit 4, 15 from Unit 5, 20 from Unit 6, 20 from Units 7–8.',
      questions: fullPaper,
      durationMinutes: 90,
    },
    {
      key: 'speed',
      label: 'Quick check',
      description:
        'The same spread of units at a quarter of the length — for a weekday evening when you want to find the weak spots, not sit the whole paper.',
      questions: speedPaper,
      durationMinutes: 25,
    },
  ];

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs items={[{ label: 'Mock test' }]} className="mb-5" />

      <PageHeader icon="Timer" tone="rose"
        eyebrow="O Level · Module M2-R5.1"
        title="Mock test"
        hindiTitle="मॉक टेस्ट"
        description="A timed rehearsal of the written paper. Read the brief below, choose the length you have time for, and start when you are ready — the clock only begins when you press start."
        actions={
          <Button href="/mcqs" variant="secondary">
            <ListChecks className="w-4 h-4" aria-hidden="true" />
            Practise without a timer
          </Button>
        }
        meta={
          <>
            <MetaItem>
              <Timer className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              90 minutes for the full paper
            </MetaItem>
            <MetaItem>
              <Award className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              100 marks · qualify at 50
            </MetaItem>
            <MetaItem>
              <ListChecks className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              No negative marking
            </MetaItem>
          </>
        }
      />

      <ExamEngine
        modes={modes}
        questions={fullPaper}
        examTitle="O Level M2-R5.1 mock paper"
        durationMinutes={90}
        quizId="mock-exam"
        groupLabel="Unit"
        intro="Web Designing and Publishing, written paper pattern. One question at a time, a palette to jump around, and a full answer key with explanations at the end."
        markingScheme={[
          '1 mark for every correct answer.',
          'No negative marking — a wrong answer costs nothing, so leave nothing blank.',
          'You qualify at 50%. Grades: S from 85%, A from 75%, B from 65%, C from 50%.',
        ]}
        practiceHref="/mcqs"
        practiceLabel="Practise without a timer"
      />
    </div>
  );
}
