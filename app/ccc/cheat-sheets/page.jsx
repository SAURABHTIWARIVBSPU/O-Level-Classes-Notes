import React from 'react';
import CccCheatSheetsClient from './Client';

/* Server shell: a client component cannot export metadata, so the
   interactive page lives in ./Client and this file owns the SEO. */
export const metadata = {
  title: "Cheat sheets \u2014 CCC shortcuts and quick tables",
  description: "Keyboard shortcuts, USSD codes and quick reference tables for the NIELIT CCC syllabus.",
  alternates: { canonical: "/ccc/cheat-sheets" },
};

export default function Page() {
  return <CccCheatSheetsClient />;
}
