import React from 'react';
import OneLinersClient from './Client';

/* Server shell: a client component cannot export metadata, so the
   interactive page lives in ./Client and this file owns the SEO. */
export const metadata = {
  title: "One-liners \u2014 O Level quick revision",
  description: "100 high-yield one-line facts covering all 8 units of NIELIT O Level M2-R5.1, filterable by unit and topic for last-minute revision.",
  alternates: { canonical: "/one-liners" },
};

export default function Page() {
  return <OneLinersClient />;
}
