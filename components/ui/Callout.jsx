import React from 'react';
import {
  Info, Lightbulb, AlertTriangle, ShieldAlert, CheckCircle2, GraduationCap, Repeat,
} from 'lucide-react';

/**
 * One shape, six meanings.
 *
 * The callout is the only "box" allowed inside note bodies. Meaning is carried
 * by colour + icon + label, never by a different shape — so a page with six
 * callouts still reads as one rhythm rather than six competing cards.
 */

const KINDS = {
  note:      { cls: 'callout-note',      icon: Info,          label: 'Note' },
  tip:       { cls: 'callout-tip',       icon: Lightbulb,     label: 'Tip' },
  important: { cls: 'callout-important', icon: CheckCircle2,  label: 'Important' },
  warning:   { cls: 'callout-warning',   icon: AlertTriangle, label: 'Watch out' },
  danger:    { cls: 'callout-danger',    icon: ShieldAlert,   label: 'Common mistake' },
  exam:      { cls: 'callout-exam',      icon: GraduationCap, label: 'Exam point' },
  analogy:   { cls: 'callout-analogy',   icon: Repeat,        label: 'In plain terms' },
};

export default function Callout({
  kind = 'note',
  label,
  showLabel = true,
  icon,
  className = '',
  children,
  lang,
  ...props
}) {
  const spec = KINDS[kind] || KINDS.note;
  const Icon = icon || spec.icon;
  const text = label === undefined ? spec.label : label;

  return (
    <aside className={`callout ${spec.cls} ${className}`} {...props}>
      <Icon className="callout__icon" aria-hidden="true" />
      <div className="callout__body min-w-0 flex-1" lang={lang}>
        {showLabel && text ? <span className="callout__label">{text}</span> : null}
        {children}
      </div>
    </aside>
  );
}

export { KINDS as CALLOUT_KINDS };
