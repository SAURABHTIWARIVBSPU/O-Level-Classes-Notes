'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Educational Design System Card Component
 * Enforces consistent radius (rounded-xl), subtle border (border-appborder),
 * restrained elevation (shadow-xs), and structured visual hierarchy.
 */
export function Card({
  as: Component = 'div',
  href,
  className = '',
  children,
  variant = 'default', // 'default' | 'interactive' | 'muted' | 'accent' | 'navy'
  padding = 'normal', // 'normal' (p-5 sm:p-6) | 'compact' (p-4) | 'none'
  ...props
}) {
  const baseClasses = 'relative rounded-xl transition-all duration-150 flex flex-col justify-between';

  const variantClasses = {
    default: 'bg-white dark:bg-slate-900 border border-appborder shadow-xs text-slate-900 dark:text-white',
    interactive:
      'bg-white dark:bg-slate-900 border border-appborder shadow-xs hover:border-brand-500/80 hover:shadow-xs group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 text-slate-900 dark:text-white',
    muted: 'bg-slate-50/80 dark:bg-slate-900/60 border border-appborder shadow-xs text-slate-900 dark:text-white',
    accent: 'bg-brand-50/50 dark:bg-brand-950/20 border border-brand-200 dark:border-brand-900/60 shadow-xs text-slate-900 dark:text-white',
    navy: 'bg-navy border border-navy-800 shadow-sm text-white',
  };

  const paddingClasses = {
    normal: 'p-5 sm:p-6',
    compact: 'p-4',
    none: '',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.default} ${
    paddingClasses[padding] || paddingClasses.normal
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
}

export function CardHeader({ className = '', children, ...props }) {
  return (
    <div className={`space-y-1.5 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ as: Component = 'h3', className = '', children, ...props }) {
  return (
    <Component
      className={`text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardSubtitle({ className = '', children, ...props }) {
  return (
    <p className={`text-xs font-semibold text-brand-600 dark:text-brand-400 hindi-text ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardDescription({ className = '', children, ...props }) {
  return (
    <p className={`text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className = '', children, ...props }) {
  return (
    <div className={`space-y-3 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className = '', children, ...props }) {
  return (
    <div className={`pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardBadge({ children, variant = 'brand', className = '' }) {
  const badgeVariants = {
    brand: 'bg-brand-50 text-brand-700 dark:bg-brand-950/80 dark:text-brand-300 border-brand-200 dark:border-brand-800',
    blue: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
    emerald: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    amber: 'bg-amber-50 text-amber-700 dark:bg-amber-950/80 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    slate: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700',
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider border ${
        badgeVariants[variant] || badgeVariants.brand
      } ${className}`}
    >
      {children}
    </span>
  );
}

export default Card;
