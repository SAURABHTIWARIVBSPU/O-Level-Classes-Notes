import React from 'react';
import Link from 'next/link';
import ModuleIcon from './ModuleIcon';

/* ==========================================================================
   Small building blocks used everywhere. Kept in one file on purpose: they
   share vocabulary, they are tiny, and one import keeps page files readable.
   ========================================================================== */

export function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}

/**
 * Accepts an icon as either a component reference (`icon={Search}`) or an
 * already-created element (`icon={<Search />}`). Both forms are needed: a
 * Server Component cannot pass a function across the client boundary, and this
 * module is imported from both sides.
 */
export function renderIcon(icon, className) {
  if (!icon) return null;
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon, {
      className: cx(className, icon.props.className),
      'aria-hidden': 'true',
    });
  }
  const Icon = icon;
  return <Icon className={className} aria-hidden="true" />;
}

/* ------------------------------------------------------------------ Button */

const BUTTON_VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  soft: 'btn-soft',
  highlight: 'btn-hl',
};

const BUTTON_SIZES = { sm: 'btn-sm', md: '', lg: 'btn-lg' };

export function Button({
  as,
  href,
  variant = 'secondary',
  size = 'md',
  icon,
  iconRight,
  iconOnly = false,
  download,
  target,
  className = '',
  children,
  ...props
}) {
  const classes = cx(
    'btn',
    BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.secondary,
    BUTTON_SIZES[size],
    iconOnly && 'btn-icon',
    className,
  );
  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  const content = (
    <>
      {renderIcon(icon, iconSize)}
      {children}
      {renderIcon(iconRight, iconSize)}
    </>
  );

  if (href) {
    // Plain <a> for anything Next's client router shouldn't own: external
    // links, downloads, new tabs, and static assets such as the unit PDFs.
    const isPlainAnchor =
      /^(https?:|mailto:|tel:)/.test(href) || download !== undefined || target || /\.\w{2,4}(\?|#|$)/.test(href);

    if (isPlainAnchor) {
      const external = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          className={classes}
          download={download}
          target={target || (external ? '_blank' : undefined)}
          rel={external || target === '_blank' ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {content}
        </a>
      );
    }
    return <Link href={href} className={classes} {...props}>{content}</Link>;
  }

  const Component = as || 'button';
  return (
    <Component className={classes} type={Component === 'button' ? 'button' : undefined} {...props}>
      {content}
    </Component>
  );
}

/* ------------------------------------------------------------------- Badge */

const BADGE_TONES = {
  neutral: 'badge-neutral',
  accent: 'badge-accent',
  ok: 'badge-ok',
  warn: 'badge-warn',
  danger: 'badge-danger',
  exam: 'badge-exam',
};

export function Badge({ tone = 'neutral', mono = false, icon, className = '', children, ...props }) {
  return (
    <span className={cx('badge', BADGE_TONES[tone] || BADGE_TONES.neutral, mono && 'badge-mono', className)} {...props}>
      {renderIcon(icon, 'w-3 h-3')}
      {children}
    </span>
  );
}

/* -------------------------------------------------------------- Card / Panel */

export function Panel({ as: Component = 'div', className = '', children, ...props }) {
  return (
    <Component className={cx('panel', className)} {...props}>
      {children}
    </Component>
  );
}

export function CardLink({ href, className = '', children, ...props }) {
  return (
    <Link href={href} className={cx('card-link', className)} {...props}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------- Page header */

/**
 * Every inner page opens with this. `icon` + `tone` give the page a coloured
 * identity tile (PW-style); `band` wraps the header in the soft hero wash.
 */
export function PageHeader({
  eyebrow,
  title,
  hindiTitle,
  description,
  actions,
  meta,
  icon,
  tone = 'violet',
  band = false,
  className = '',
}) {
  const inner = (
    <>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0 max-w-measure-wide flex items-start gap-4">
          {icon ? (
            <span className={cx('icon-tile icon-tile-lg hidden sm:inline-grid', `tone-${tone}`)}>
              {typeof icon === 'string' ? <ModuleIcon name={icon} className="w-6 h-6" /> : renderIcon(icon, 'w-6 h-6')}
            </span>
          ) : null}
          <div className="min-w-0">
            {eyebrow ? <p className="eyebrow text-accent mb-2">{eyebrow}</p> : null}
            <h1 className="text-h1 sm:text-display font-bold text-ink">{title}</h1>
            {hindiTitle ? (
              <p className="mt-1.5 text-lead text-hindi hindi-text" lang="hi">{hindiTitle}</p>
            ) : null}
            {description ? (
              <p className="mt-3 text-base sm:text-lead text-ink-2 leading-relaxed max-w-measure">{description}</p>
            ) : null}
          </div>
        </div>
        {actions ? <div className="flex flex-wrap items-center gap-2 shrink-0">{actions}</div> : null}
      </div>
      {meta ? <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">{meta}</div> : null}
    </>
  );

  if (band) {
    return (
      <header className={cx('hero-band rounded-lg border border-line px-5 py-6 sm:px-8 sm:py-8 mb-8', className)}>
        {inner}
      </header>
    );
  }
  return <header className={cx('pb-5 mb-8 border-b-2 border-ink', className)}>{inner}</header>;
}

/* ---------------------------------------------------------- Section heading */

export function SectionHeading({ id, eyebrow, title, description, action, className = '' }) {
  return (
    <div className={cx('flex flex-wrap items-end justify-between gap-4 mb-5', className)}>
      <div className="min-w-0">
        {eyebrow ? <p className="eyebrow mb-1.5">{eyebrow}</p> : null}
        <h2 id={id} className="text-h2 font-semibold text-ink">{title}</h2>
        {description ? (
          <p className="mt-1.5 text-base text-ink-2 max-w-measure leading-relaxed">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

/* ---------------------------------------------------------------- Stat tile */

export function StatTile({ label, value, hint, icon, tone = 'violet', className = '' }) {
  return (
    <div className={cx('panel p-4 sm:p-5', className)}>
      <div className="flex items-start justify-between gap-3">
        <p className="eyebrow">{label}</p>
        {icon ? renderIcon(icon, 'w-4 h-4 text-ink-4 shrink-0') : null}
      </div>
      <p className="mt-2 text-h2 font-bold text-ink tabular-nums">{value}</p>
      {hint ? <p className="mt-0.5 text-xs text-ink-3">{hint}</p> : null}
    </div>
  );
}

/* ---------------------------------------------------------------- IconTile */

export function IconTile({ icon, tone = 'violet', size = 'md', className = '' }) {
  const sizeCls = { sm: 'icon-tile-sm', md: '', lg: 'icon-tile-lg' }[size] || '';
  const iconCls = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6' }[size] || 'w-5 h-5';
  return (
    <span className={cx('icon-tile', sizeCls, `tone-${tone}`, className)}>
      {renderIcon(icon, iconCls)}
    </span>
  );
}

/* -------------------------------------------------------------------- Chip */

export function Chip({ href, icon, active = false, className = '', children, ...props }) {
  const cls = cx('chip', className);
  if (href) {
    return (
      <Link href={href} className={cls} data-active={active} {...props}>
        {renderIcon(icon, 'w-4 h-4')}
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} data-active={active} {...props}>
      {renderIcon(icon, 'w-4 h-4')}
      {children}
    </button>
  );
}

/* -------------------------------------------------------------------- Ring */

export function Ring({ value = 0, size = '3.5rem', label, className = '' }) {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <span
      className={cx('ring', className)}
      style={{ '--ring-value': pct, '--ring-size': size }}
      role="img"
      aria-label={label || `${pct}% complete`}
    >
      {pct}%
    </span>
  );
}

/* ------------------------------------------------------------- Progress bar */

export function ProgressBar({ value = 0, label, showValue = true, tone = 'accent', className = '' }) {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  const fill =
    { ok: 'bg-ok', warn: 'bg-warn', danger: 'bg-danger', exam: 'bg-exam', accent: 'bg-accent' }[tone] || 'bg-accent';

  return (
    <div className={className}>
      {(label || showValue) && (
        <div className="flex items-center justify-between gap-3 mb-1.5">
          {label ? <span className="text-xs font-medium text-ink-2">{label}</span> : <span />}
          {showValue ? <span className="text-xs font-semibold text-ink tabular-nums">{pct}%</span> : null}
        </div>
      )}
      <div
        className="h-2 w-full rounded-full bg-line/70 overflow-hidden"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || 'Progress'}
      >
        <div
          className={cx('h-full rounded-full transition-[width] duration-slow ease-out', fill)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- EmptyState */

export function EmptyState({ icon, title, description, action, className = '', headingLevel = 'h2' }) {
  const Heading = headingLevel;
  return (
    <div className={cx('panel px-6 py-14 text-center', className)}>
      {icon ? (
        <div className="mx-auto mb-4 w-11 h-11 rounded-xl bg-sunken border border-line grid place-items-center">
          {renderIcon(icon, 'w-5 h-5 text-ink-3')}
        </div>
      ) : null}
      <Heading className="text-h4 font-semibold text-ink">{title}</Heading>
      {description ? (
        <p className="mt-1.5 text-base text-ink-3 max-w-sm mx-auto leading-relaxed">{description}</p>
      ) : null}
      {action ? <div className="mt-5 flex justify-center gap-2">{action}</div> : null}
    </div>
  );
}

/* ----------------------------------------------------------------- Skeleton */

export function Skeleton({ className = '' }) {
  return <div className={cx('skeleton', className)} aria-hidden="true" />;
}

export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={cx('space-y-2', className)} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="skeleton h-3" style={{ width: i === lines - 1 ? '62%' : '100%' }} />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------- Segmented */

export function Segmented({ options, value, onChange, ariaLabel, className = '' }) {
  return (
    <div className={cx('segment', className)} role="group" aria-label={ariaLabel}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className="segment-item"
          data-active={value === opt.value}
          aria-pressed={value === opt.value}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------ Meta list row */

export function MetaItem({ icon, className = '', children }) {
  return (
    <span className={cx('inline-flex items-center gap-1.5 text-xs text-ink-3', className)}>
      {renderIcon(icon, 'w-3.5 h-3.5 shrink-0')}
      {children}
    </span>
  );
}
