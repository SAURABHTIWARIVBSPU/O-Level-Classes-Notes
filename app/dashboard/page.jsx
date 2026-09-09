import React from 'react';
import DashboardClient from './Client';

/* Server shell: a client component cannot export metadata, so the
   interactive page lives in ./Client and this file owns the SEO. */
export const metadata = {
  title: "Your progress",
  description: "Topics completed, revision streak, weak areas and recent test scores across the NIELIT O Level syllabus.",
  alternates: { canonical: "/dashboard" },
};

export default function Page() {
  return <DashboardClient />;
}
