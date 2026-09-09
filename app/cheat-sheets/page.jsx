import React from 'react';
import CheatSheetsClient from './Client';

/* Server shell: a client component cannot export metadata, so the
   interactive page lives in ./Client and this file owns the SEO. */
export const metadata = {
  title: "Cheat sheets \u2014 HTML, CSS, JavaScript",
  description: "Reference sheets for NIELIT O Level M2-R5.1: HTML5 tags, CSS properties and selectors, JavaScript syntax, W3.CSS classes and keyboard shortcuts.",
  alternates: { canonical: "/cheat-sheets" },
};

export default function Page() {
  return <CheatSheetsClient />;
}
