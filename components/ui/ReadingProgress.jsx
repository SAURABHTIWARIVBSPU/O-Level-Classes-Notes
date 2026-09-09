'use client';

import React, { useEffect, useState } from 'react';

/**
 * A 2px line under the header showing how far through a long note the reader
 * is. Deliberately the only always-on animated element on a notes page.
 */
export default function ReadingProgress({ targetSelector = '[data-toc-root]' }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const compute = () => {
      ticking = false;
      const el = document.querySelector(targetSelector);
      const start = el ? el.offsetTop : 0;
      const total = (el ? el.offsetHeight : document.body.scrollHeight) - window.innerHeight + 120;
      if (total <= 0) {
        setProgress(100);
        return;
      }
      const scrolled = window.scrollY - start + 120;
      setProgress(Math.max(0, Math.min(100, (scrolled / total) * 100)));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [targetSelector]);

  return (
    <div
      className="fixed top-[var(--header-h)] left-0 right-0 h-0.5 z-header pointer-events-none no-print"
      aria-hidden="true"
    >
      <div
        className="h-full bg-accent origin-left transition-transform duration-fast ease-out"
        style={{ transform: `scaleX(${progress / 100})`, width: '100%' }}
      />
    </div>
  );
}
