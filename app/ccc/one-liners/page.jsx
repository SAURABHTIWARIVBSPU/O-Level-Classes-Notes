import React from 'react';
import CccOneLinersClient from './Client';

/* Server shell: a client component cannot export metadata, so the
   interactive page lives in ./Client and this file owns the SEO. */
export const metadata = {
  title: "One-liners \u2014 CCC quick revision",
  description: "Fast factual recall for the NIELIT CCC exam: short, exam-ready one-line facts grouped by topic.",
  alternates: { canonical: "/ccc/one-liners" },
};

export default function Page() {
  return <CccOneLinersClient />;
}
