import React from 'react';
import SearchClient from './Client';

/* Server shell: a client component cannot export metadata, so the
   interactive page lives in ./Client and this file owns the SEO. */
export const metadata = {
  title: "Search the notes",
  description: "Search every topic, unit, chapter, one-liner and comparison across the NIELIT O Level and CCC syllabi.",
  alternates: { canonical: "/search" },
};

export default function Page() {
  return <SearchClient />;
}
