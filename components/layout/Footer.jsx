'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, ArrowUpRight } from 'lucide-react';
import { COURSES, OLEVEL_NAV, CCC_NAV, getModules } from '@/lib/navigation';

/**
 * A product footer: a genuine second navigation surface for students who
 * reached the bottom of a page, not a decorative strip.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const olevelUnits = getModules('olevel');
  const cccChapters = getModules('ccc');

  const Column = ({ title, children }) => (
    <div>
      <h2 className="eyebrow mb-3">{title}</h2>
      {children}
    </div>
  );

  const linkClass = 'block py-1 text-base text-ink-2 hover:text-ink transition-colors';

  return (
    <footer className="mt-20 border-t border-line bg-surface no-print">
      <div className="shell shell-wide py-12">
        <div className="grid gap-10 lg:grid-cols-12">

          {/* Identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-ink grid place-items-center">
                <GraduationCap className="w-4 h-4 text-ink-inv" aria-hidden="true" />
              </span>
              <span className="text-base font-semibold text-ink">NIELIT Learning Platform</span>
            </Link>
            <p className="text-base text-ink-3 leading-relaxed max-w-sm">
              Bilingual notes, comparisons, one-liners and exam practice for the NIELIT
              O&nbsp;Level M2-R5.1 and CCC syllabi — written for students who revise on a phone.
            </p>
            <p className="mt-4 text-xs text-ink-4 leading-relaxed max-w-sm">
              An independent study resource. Not affiliated with or endorsed by NIELIT.
              Always confirm the current syllabus and exam pattern on the official NIELIT website.
            </p>
          </div>

          {/* O Level */}
          <div className="lg:col-span-2">
            <Column title="O Level">
              <nav aria-label="O Level">
                {OLEVEL_NAV.flatMap((g) => g.items).slice(0, 7).map((item) => (
                  <Link key={item.href} href={item.href} className={linkClass}>{item.label}</Link>
                ))}
              </nav>
            </Column>
          </div>

          {/* CCC */}
          <div className="lg:col-span-2">
            <Column title="CCC">
              <nav aria-label="CCC">
                <Link href="/ccc" className={linkClass}>CCC home</Link>
                {CCC_NAV.flatMap((g) => g.items).map((item) => (
                  <Link key={item.href} href={item.href} className={linkClass}>{item.label}</Link>
                ))}
              </nav>
            </Column>
          </div>

          {/* Units */}
          <div className="lg:col-span-2">
            <Column title="O Level units">
              <nav aria-label="O Level units">
                {olevelUnits.map((u) => (
                  <Link key={u.key} href={u.href} className={`${linkClass} truncate`}>
                    <span className="font-mono text-xs text-ink-4 mr-1.5">{u.number}</span>
                    {u.title}
                  </Link>
                ))}
              </nav>
            </Column>
          </div>

          {/* Chapters */}
          <div className="lg:col-span-2">
            <Column title="CCC chapters">
              <nav aria-label="CCC chapters">
                {cccChapters.map((c) => (
                  <Link key={c.key} href={c.href} className={`${linkClass} truncate`}>
                    <span className="font-mono text-xs text-ink-4 mr-1.5">{c.number}</span>
                    {c.title}
                  </Link>
                ))}
              </nav>
            </Column>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell shell-wide py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-ink-4">
            © {year} NIELIT Learning Platform. Study material for educational use.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/syllabus" className="text-xs text-ink-3 hover:text-ink transition-colors">O Level syllabus</Link>
            <Link href="/ccc/syllabus" className="text-xs text-ink-3 hover:text-ink transition-colors">CCC syllabus</Link>
            <a
              href="https://www.nielit.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-ink-3 hover:text-ink transition-colors"
            >
              Official NIELIT site
              <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { COURSES };
