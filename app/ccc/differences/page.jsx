import React from 'react';
import CccDifferencesClient from './Client';

/* Server shell: a client component cannot export metadata, so the
   interactive page lives in ./Client and this file owns the SEO. */
export const metadata = {
  title: "Differences & comparisons \u2014 CCC",
  description: "RAM vs ROM, hardware vs software, LAN vs WAN and more, compared side by side in Hindi and English for the NIELIT CCC exam.",
  alternates: { canonical: "/ccc/differences" },
};

export default function Page() {
  return <CccDifferencesClient />;
}
