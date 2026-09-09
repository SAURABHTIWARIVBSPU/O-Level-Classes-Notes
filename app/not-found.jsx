import React from 'react';
import Link from 'next/link';
import { Home, Search, Layers, ListChecks, ArrowRight } from 'lucide-react';
import { Button, Panel } from '@/components/ui';

export const metadata = {
  title: 'Page not found',
  description: 'That page does not exist. Jump back to the syllabus, the notes or the question bank.',
  robots: { index: false, follow: true },
};

const ROUTES = [
  { icon: Layers, label: 'O Level syllabus', desc: 'All 8 units and the marks blueprint', href: '/syllabus' },
  { icon: Home, label: 'CCC course', desc: 'All 9 chapters, from the basics', href: '/ccc' },
  { icon: ListChecks, label: 'Question bank', desc: '200+ MCQs with explanations', href: '/mcqs' },
  { icon: Search, label: 'Search everything', desc: 'Find a topic by name or keyword', href: '/search' },
];

export default function NotFound() {
  return (
    <div className="shell py-20 sm:py-28">
      <div className="max-w-measure">
        <p className="eyebrow mb-3">Error 404</p>
        <h1 className="text-display font-semibold text-ink">This page does not exist</h1>
        <p className="mt-4 text-lead text-ink-2 leading-relaxed">
          The link may be out of date, or the address may have a typo in it. Everything below still works.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button variant="primary" href="/" icon={Home}>Go to the homepage</Button>
          <Button href="/search" icon={Search}>Search the notes</Button>
        </div>
      </div>

      <ul className="mt-12 grid gap-3 sm:grid-cols-2 max-w-3xl">
        {ROUTES.map((r) => (
          <li key={r.href}>
            <Link href={r.href} className="card-link group p-4 flex items-center gap-3">
              <r.icon className="w-4.5 h-4.5 text-ink-3 group-hover:text-accent transition-colors shrink-0" aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block text-base font-medium text-ink group-hover:text-accent transition-colors">{r.label}</span>
                <span className="block text-sm text-ink-3">{r.desc}</span>
              </span>
              <ArrowRight className="w-4 h-4 text-ink-4 group-hover:text-accent transition-colors shrink-0" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
