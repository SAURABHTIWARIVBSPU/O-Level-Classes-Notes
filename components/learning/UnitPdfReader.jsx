'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Download,
  ExternalLink,
  FileText,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { Badge, EmptyState } from '@/components/ui';

/**
 * The PDF panel: a restrained frame around the official unit textbook.
 *
 * It is a *viewer*, not a feature — one quiet toolbar, the page itself gets the
 * room, every control says what it does. Inline PDF rendering is unreliable on
 * mobile browsers, so "open" and "download" are always visible rather than
 * hidden behind an embed that may never paint.
 *
 * Accepts either the flat props used by CanonicalWebReader or the legacy
 * `unitNotes` object, so both call shapes keep working.
 *
 * PDFs are static files, not app routes, so the links here are plain anchors
 * carrying the `.btn` classes rather than <Button href>, which would route
 * them through next/link.
 */

const ZOOM_MIN = 75;
const ZOOM_MAX = 175;
const ZOOM_STEP = 25;

/* 44px targets on touch, the standard control height from `sm` up. */
const TOUCH = 'min-h-11 sm:min-h-0';

export default function UnitPdfReader({
  unitNotes = null,
  pdfUrl,
  fileName,
  unitTitle,
  unitNumber,
  pageCount,
  fileSizeKb,
  topicCount,
  languageLabel,
  className = '',
  pdfAvailable = true,
}) {
  const url = pdfUrl || unitNotes?.pdfUrl || '';
  const name = fileName || unitNotes?.pdfFileName || '';
  const title = unitTitle || unitNotes?.title || '';
  const number = unitNumber ?? unitNotes?.unitNumberPadded ?? unitNotes?.unitNumber ?? null;
  const pages = pageCount ?? unitNotes?.pageCount ?? null;
  const size = fileSizeKb ?? unitNotes?.fileSizeKb ?? null;
  const topics = topicCount ?? unitNotes?.topicCount ?? null;
  const isAvailable = pdfAvailable && (unitNotes?.pdfAvailable !== false);

  const [zoom, setZoom] = useState(100);
  const [expanded, setExpanded] = useState(false);

  const panelRef = useRef(null);
  const expandRef = useRef(null);
  const returnFocusRef = useRef(null);

  const zoomOut = useCallback(() => setZoom((z) => Math.max(ZOOM_MIN, z - ZOOM_STEP)), []);
  const zoomIn = useCallback(() => setZoom((z) => Math.min(ZOOM_MAX, z + ZOOM_STEP)), []);

  /* The expanded view is a dialog: Escape closes it, Tab stays inside it, and
     focus goes back to the control that opened it. */
  useEffect(() => {
    if (!expanded) return undefined;

    returnFocusRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    expandRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        setExpanded(false);
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      const target = returnFocusRef.current;
      if (target && typeof target.focus === 'function') target.focus();
    };
  }, [expanded]);

  if (!url || !isAvailable) {
    return (
      <EmptyState
        icon={FileText}
        title="This PDF is not published yet"
        description="The printable textbook for this unit is not available. The web notes cover the same syllabus, topic for topic."
        className={className}
      />
    );
  }

  const frameTitle = title ? `${title} — PDF notes` : `PDF notes${name ? ` (${name})` : ''}`;
  const downloadName = name || undefined;

  const meta = [
    number != null ? `Unit ${number}` : null,
    pages != null ? `${pages} pages` : null,
    size || null,
    topics != null ? `${topics} topics` : null,
  ].filter(Boolean);

  const toolbar = (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 px-3 sm:px-4 py-2.5 border-b border-line bg-surface">
      <div className="flex items-center gap-2.5 min-w-0">
        <FileText className="w-4 h-4 text-ink-3 shrink-0" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-sm font-medium text-ink truncate">{name || frameTitle}</p>
          {meta.length ? (
            <p className="text-xs text-ink-3 tabular-nums truncate">{meta.join(' · ')}</p>
          ) : null}
        </div>
        {languageLabel ? (
          <Badge tone="neutral" className="shrink-0 hidden sm:inline-flex">
            {languageLabel}
          </Badge>
        ) : null}
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Zoom — pointer devices only; touch users pinch inside the embed. */}
        <div className="hidden md:flex items-center gap-0.5 rounded-md border border-line bg-sunken p-0.5">
          <button
            type="button"
            onClick={zoomOut}
            disabled={zoom <= ZOOM_MIN}
            className="btn btn-ghost btn-sm btn-icon"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
          <span className="w-12 text-center text-2xs font-semibold text-ink-2 tabular-nums" aria-live="polite">
            {zoom}%
          </span>
          <button
            type="button"
            onClick={zoomIn}
            disabled={zoom >= ZOOM_MAX}
            className="btn btn-ghost btn-sm btn-icon"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

        <button
          ref={expandRef}
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-label={expanded ? 'Exit full screen PDF view' : 'Open the PDF full screen'}
          className={`btn btn-ghost btn-sm ${TOUCH}`}
        >
          {expanded ? (
            <Minimize2 className="w-3.5 h-3.5" aria-hidden="true" />
          ) : (
            <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
          )}
          <span className="hidden sm:inline">{expanded ? 'Exit full screen' : 'Full screen'}</span>
        </button>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-secondary btn-sm ${TOUCH}`}
          aria-label={`Open ${name || 'the PDF'} in a new tab`}
        >
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">Open</span>
        </a>

        <a
          href={url}
          download={downloadName}
          className={`btn btn-primary btn-sm ${TOUCH}`}
          aria-label={`Download ${name || 'the PDF'}`}
        >
          <Download className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">Download</span>
        </a>
      </div>
    </div>
  );

  const frame = (
    <div className={expanded ? 'flex-1 min-h-0 bg-sunken' : 'bg-sunken'}>
      <iframe
        src={`${url}#toolbar=1&navpanes=0&scrollbar=1&view=FitH&zoom=${zoom}`}
        title={frameTitle}
        className={
          expanded
            ? 'w-full h-full border-0 block'
            : 'w-full h-[62vh] min-h-[22rem] sm:h-[70vh] xl:h-[46rem] border-0 block'
        }
      />
    </div>
  );

  if (expanded) {
    return (
      <div
        className="fixed inset-0 z-dialog bg-ground no-print"
        role="dialog"
        aria-modal="true"
        aria-label={frameTitle}
      >
        <div ref={panelRef} className="flex flex-col h-full">
          {toolbar}
          {frame}
        </div>
      </div>
    );
  }

  return (
    <div ref={panelRef} className={`panel overflow-hidden ${className}`}>
      {toolbar}
      {frame}

      {/* Always visible, because an embed that fails to paint is silent. */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5 px-3 sm:px-4 py-3 border-t border-line">
        <p className="text-xs text-ink-3 max-w-measure">
          Some mobile browsers cannot display a PDF inside a page. If the frame above stays blank,
          open the file in a new tab or save it to your device.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-ghost btn-sm ${TOUCH}`}
          >
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            Open in a new tab
          </a>
          <a
            href={url}
            download={downloadName}
            className={`btn btn-secondary btn-sm ${TOUCH}`}
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            Save the PDF
          </a>
        </div>
      </div>
    </div>
  );
}
