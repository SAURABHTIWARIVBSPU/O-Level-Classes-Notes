import React from 'react';
import SavedClient from './Client';

/* Server shell: a client component cannot export metadata, so the
   interactive page lives in ./Client and this file owns the SEO. */
export const metadata = {
  title: "Saved topics, questions and notes",
  description: "Everything you bookmarked while studying: saved topics, saved MCQs and your own notes.",
  alternates: { canonical: "/saved" },
};

export default function Page() {
  return <SavedClient />;
}
