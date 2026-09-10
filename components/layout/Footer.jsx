'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, ArrowUpRight } from 'lucide-react';
import { COURSES, OLEVEL_NAV, CCC_NAV, getModules } from '@/lib/navigation';

/**
 * A directory footer: every unit, chapter and tool one click away, the way a
 * content site's footer works. Dark to match the header.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const olevelUnits = getModules('olevel');
  const cccChapters = getModules('ccc');

  const Column = ({ title, children }) => (
    <div className="min-w-0">
      <h2 className="text-xs font-bold uppercase tracking-wider text-nav-ink mb-3">{title}</h2>
      {children}
    </div>
  );

  const linkClass = 'block py-1 text-sm text-nav-ink-2 hover:text-nav-ink transition-colors truncate';

  return (
    <footer className="mt-16 bg-nav text-nav-ink border-t border-nav-line no-print">
      <div className="shell shell-wide py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

          {/* Identity */}
          <div className="lg:col-span-1 sm:col-span-2 lg:pr-6">
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-md bg-accent grid place-items-center">
                <GraduationCap className="w-[18px] h-[18px] text-white" aria-hidden="true" />
              </span>
              <span className="text-[17px] font-bold tracking-tight">NIELIT<span className="text-accent">Notes</span></span>
            </Link>
            <p className="text-sm text-nav-ink-2 leading-relaxed">
              Free study notes, comparison tables, one-liners and practice questions for the
              NIELIT O&nbsp;Level (M2-R5.1) and CCC exams, in English and हिन्दी.
            </p>
            <p className="mt-4 text-xs text-nav-ink-2/80 leading-relaxed">
              An independent study resource, not affiliated with NIELIT. Confirm the current
              syllabus on the official NIELIT website before your exam.
            </p>
          </div>

          <Column title="O Level units">
            <nav aria-label="O Level units">
              {olevelUnits.map((u) => (
                <Link key={u.key} href={u.href} className={linkClass}>
                  <span className="font-mono text-xs text-nav-ink-2/70 mr-1.5">{u.number}</span>
                  {u.title}
                </Link>
              ))}
            </nav>
          </Column>

          <Column title="CCC chapters">
            <nav aria-label="CCC chapters">
              {cccChapters.map((c) => (
                <Link key={c.key} href={c.href} className={linkClass}>
                  <span className="font-mono text-xs text-nav-ink-2/70 mr-1.5">{c.number}</span>
                  {c.title}
                </Link>
              ))}
            </nav>
          </Column>

          <Column title="O Level practice">
            <nav aria-label="O Level practice and revision">
              {OLEVEL_NAV.flatMap((g) => g.items).map((item) => (
                <Link key={item.href} href={item.href} className={linkClass}>{item.label}</Link>
              ))}
            </nav>
          </Column>

          <Column title="CCC practice">
            <nav aria-label="CCC practice and revision">
              <Link href="/ccc" className={linkClass}>CCC home</Link>
              {CCC_NAV.flatMap((g) => g.items).map((item) => (
                <Link key={item.href} href={item.href} className={linkClass}>{item.label}</Link>
              ))}
            </nav>
          </Column>
        </div>
      </div>

      <div className="border-t border-nav-line">
        <div className="shell shell-wide py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-nav-ink-2">
            © {year} NIELITNotes. Study material for educational use.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/syllabus" className="text-xs text-nav-ink-2 hover:text-nav-ink transition-colors">O Level syllabus</Link>
            <Link href="/ccc/syllabus" className="text-xs text-nav-ink-2 hover:text-nav-ink transition-colors">CCC syllabus</Link>
            <a
              href="https://www.nielit.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-nav-ink-2 hover:text-nav-ink transition-colors"
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
