import React from 'react';
import DifferencesClient from './Client';

/* Server shell: a client component cannot export metadata, so the
   interactive page lives in ./Client and this file owns the SEO. */
export const metadata = {
  title: "Differences & comparisons \u2014 O Level",
  description: "Side-by-side comparison tables for the NIELIT O Level M2-R5.1 syllabus: Internet vs WWW, HTML vs XHTML, GET vs POST, class vs id and more, each with a plain-language analogy.",
  alternates: { canonical: "/differences" },
};

export default function Page() {
  return <DifferencesClient />;
}
