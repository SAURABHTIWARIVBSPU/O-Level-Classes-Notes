import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Answers "where am I?" on every inner page, and emits BreadcrumbList
 * structured data so search engines show the same hierarchy.
 *
 * items: [{ label, href? }]  — the last item is the current page (no href).
 */
export default function Breadcrumbs({ items = [], className = '' }) {
  if (!items.length) return null;

  const trail = [{ label: 'Home', href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: item.href } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center gap-1 flex-wrap text-xs text-ink-3 min-w-0">
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1 min-w-0">
              {i > 0 ? <ChevronRight className="w-3 h-3 text-ink-4 shrink-0" aria-hidden="true" /> : null}
              {isLast || !item.href ? (
                <span className="font-medium text-ink-2 truncate max-w-[14rem] sm:max-w-xs" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-ink transition-colors truncate max-w-[9rem] sm:max-w-none inline-flex items-center gap-1"
                >
                  {i === 0 ? <Home className="w-3 h-3" aria-hidden="true" /> : null}
                  <span className={i === 0 ? 'sr-only sm:not-sr-only' : ''}>{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
