import React from 'react';
import { Award, ListChecks, Timer } from 'lucide-react';

import { Breadcrumbs, Button, MetaItem, PageHeader } from '@/components/ui';
import ExamEngine from '@/components/mcq/ExamEngine';
import { cccMcqsData } from '@/data/cccMcqsData';

const DURATION_MINUTES = 60;

export const metadata = {
  title: 'Mock test — CCC',
  description:
    'A timed NIELIT CCC mock paper drawn from all nine chapters: one mark per question, no negative marking, qualify at 50%, with a chapter-wise breakdown and full answer key at the end.',
};

export default function CccMockTestPage() {
  const questions = cccMcqsData;

  return (
    <div className="shell py-8 sm:py-10">
      <Breadcrumbs
        items={[{ label: 'CCC', href: '/ccc' }, { label: 'Mock test' }]}
        className="mb-5"
      />

      <PageHeader
        eyebrow="CCC · Course on Computer Concepts"
        title="Mock test"
        hindiTitle="मॉक टेस्ट"
        description="A timed rehearsal across all nine chapters. Read the brief below and start when you are ready — the clock only begins when you press start, and it submits the paper for you if it runs out."
        actions={
          <Button href="/ccc/mcqs" variant="secondary">
            <ListChecks className="w-4 h-4" aria-hidden="true" />
            Practise without a timer
          </Button>
        }
        meta={
          <>
            <MetaItem>
              <ListChecks className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {questions.length} questions
            </MetaItem>
            <MetaItem>
              <Timer className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {DURATION_MINUTES} minutes
            </MetaItem>
            <MetaItem>
              <Award className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              Qualify at 50%
            </MetaItem>
          </>
        }
      />

      <ExamEngine
        questions={questions}
        examTitle="CCC mock paper"
        durationMinutes={DURATION_MINUTES}
        quizId="ccc-mock-exam"
        groupLabel="Chapter"
        intro="Questions from every chapter — computer basics, Ubuntu, LibreOffice Writer, Calc and Impress, the internet, digital payments, cyber safety and FutureSkills. Questions are in Hindi with the English wording alongside."
        markingScheme={[
          '1 mark for every correct answer.',
          'No negative marking — a wrong answer costs nothing, so leave nothing blank.',
          'You qualify at 50%. Grades: S from 85%, A from 75%, B from 65%, C from 50%.',
          'The real NIELIT CCC exam is 100 objective questions in 90 minutes — about 54 seconds each.',
        ]}
        practiceHref="/ccc/mcqs"
        practiceLabel="Practise without a timer"
      />
    </div>
  );
}
