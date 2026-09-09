'use client';

import React, { useId } from 'react';
import {
  Pen,
  Highlighter,
  Eraser,
  Minus,
  MoveRight,
  Square,
  Circle,
  Type,
  StickyNote,
  Undo2,
  Redo2,
  Trash2,
  Download,
  Maximize,
  Minimize,
  Grid,
  Sun,
  Moon,
} from 'lucide-react';
import { cx } from '@/components/ui';
import { boardTemplates } from './BoardTemplates';

/**
 * The board's control strip.
 *
 * Chrome is deliberately quiet — the board is the subject, this is the frame.
 * Every control is an icon button with a real name, and selection is carried by
 * `aria-pressed` as well as by the soft accent fill, so a screen reader hears
 * the same thing the class sees.
 *
 * On a phone the strip scrolls sideways rather than reflowing into four ragged
 * rows that push the board off screen; from `sm` up it wraps normally. Touch
 * sizing is left to the global `@media (pointer: coarse)` rules on `.btn`.
 */

/** Ink the teacher draws with — canvas content, not UI chrome, so real values. */
const INK_COLOURS = [
  { name: 'Orange', hex: '#F19A27' },
  { name: 'Blue', hex: '#1F64C9' },
  { name: 'Green', hex: '#10b981' },
  { name: 'Amber', hex: '#f59e0b' },
  { name: 'Red', hex: '#f43f5e' },
  { name: 'Purple', hex: '#a855f7' },
];

const WIDTHS = [
  { label: 'S', value: 2, name: 'Small' },
  { label: 'M', value: 5, name: 'Medium' },
  { label: 'L', value: 10, name: 'Large' },
  { label: 'XL', value: 18, name: 'Extra large' },
];

const BG_TYPES = ['blank', 'grid', 'ruled', 'dot'];
const BG_LABELS = { blank: 'blank', grid: 'grid', ruled: 'ruled lines', dot: 'dots' };

export default function WhiteboardToolbar({
  activeTool,
  setActiveTool,
  strokeColor,
  setStrokeColor,
  strokeWidth,
  setStrokeWidth,
  bgType,
  setBgType,
  isDarkBoard,
  setIsDarkBoard,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  onClear,
  onExport,
  isPresentationMode,
  setIsPresentationMode,
  onLoadTemplate,
}) {
  const templateSelectId = useId();

  const tools = [
    { id: 'pen', label: 'Pen', icon: Pen },
    { id: 'highlighter', label: 'Highlighter', icon: Highlighter },
    { id: 'eraser', label: 'Eraser', icon: Eraser },
    { id: 'line', label: 'Line', icon: Minus },
    { id: 'arrow', label: 'Arrow', icon: MoveRight },
    { id: 'rectangle', label: 'Rectangle', icon: Square },
    { id: 'circle', label: 'Circle', icon: Circle },
    { id: 'text', label: 'Text', icon: Type },
    { id: 'note', label: 'Sticky note', icon: StickyNote },
  ];

  // The board's own "paper" colour changes with the board theme, so the first
  // swatch is always the ink that shows up on it.
  const colours = [
    { name: isDarkBoard ? 'Chalk white' : 'Board black', hex: isDarkBoard ? '#ffffff' : '#0f172a' },
    ...INK_COLOURS,
  ];

  const toggleClasses = (active) => cx('btn btn-icon', active ? 'btn-soft' : 'btn-ghost');

  return (
    <div className="panel flex items-center gap-x-3 gap-y-2 overflow-x-auto p-2 sm:flex-wrap sm:overflow-x-visible">
      {/* ---------------------------------------------------- drawing tools */}
      <div role="group" aria-label="Drawing tools" className="flex shrink-0 items-center gap-1">
        {tools.map((t) => {
          const Icon = t.icon;
          const isActive = activeTool === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTool(t.id)}
              className={toggleClasses(isActive)}
              aria-pressed={isActive}
              aria-label={t.label}
              title={t.label}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </button>
          );
        })}
      </div>

      {/* ------------------------------------------------------ ink colours */}
      <div role="group" aria-label="Ink colour" className="flex shrink-0 items-center gap-1">
        {colours.map((c) => {
          const isActive = strokeColor === c.hex;
          return (
            <button
              key={c.hex}
              type="button"
              onClick={() => setStrokeColor(c.hex)}
              className={cx('btn btn-icon', isActive ? 'btn-soft' : 'btn-ghost')}
              aria-pressed={isActive}
              aria-label={`${c.name} ink`}
              title={`${c.name} ink`}
            >
              <span
                className={cx(
                  'block h-5 w-5 rounded-full border border-line-strong',
                  isActive && 'ring-2 ring-accent',
                )}
                style={{ backgroundColor: c.hex }}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>

      {/* ----------------------------------------------------- stroke width */}
      <div role="group" aria-label="Stroke width" className="flex shrink-0 items-center gap-1">
        {WIDTHS.map((w) => {
          const isActive = strokeWidth === w.value;
          return (
            <button
              key={w.label}
              type="button"
              onClick={() => setStrokeWidth(w.value)}
              className={cx(toggleClasses(isActive), 'font-mono')}
              aria-pressed={isActive}
              aria-label={`${w.name} stroke, ${w.value} pixels`}
              title={`${w.name} stroke (${w.value}px)`}
            >
              {w.label}
            </button>
          );
        })}
      </div>

      {/* ----------------------------------------------- ready-made diagrams */}
      <div className="flex shrink-0 items-center gap-2">
        <label htmlFor={templateSelectId} className="eyebrow hidden lg:inline">
          Diagram
        </label>
        <select
          id={templateSelectId}
          aria-label="Insert a ready-made diagram"
          defaultValue=""
          onChange={(e) => {
            if (e.target.value) {
              onLoadTemplate(e.target.value);
              e.target.value = '';
            }
          }}
          className="input w-auto max-w-[15rem] text-sm"
        >
          <option value="" disabled>
            Insert web diagram…
          </option>
          {boardTemplates.map((bt) => (
            <option key={bt.id} value={bt.id}>
              {bt.title} (Unit {bt.unit})
            </option>
          ))}
        </select>
      </div>

      {/* ---------------------------------------------------------- actions */}
      <div role="group" aria-label="Board actions" className="ml-auto flex shrink-0 items-center gap-1">
        <button
          type="button"
          onClick={onUndo}
          disabled={!canUndo}
          className="btn btn-ghost btn-icon"
          aria-label="Undo the last stroke"
          title="Undo (Ctrl + Z)"
        >
          <Undo2 className="h-4 w-4" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={onRedo}
          disabled={!canRedo}
          className="btn btn-ghost btn-icon"
          aria-label="Redo the last undone stroke"
          title="Redo (Ctrl + Y)"
        >
          <Redo2 className="h-4 w-4" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => setBgType(BG_TYPES[(BG_TYPES.indexOf(bgType) + 1) % BG_TYPES.length])}
          className="btn btn-ghost btn-icon"
          aria-label={`Board pattern: ${BG_LABELS[bgType] || bgType}. Change pattern`}
          title={`Pattern: ${BG_LABELS[bgType] || bgType} — click to change`}
        >
          <Grid className="h-4 w-4" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => setIsDarkBoard(!isDarkBoard)}
          className="btn btn-ghost btn-icon"
          aria-pressed={isDarkBoard}
          aria-label={isDarkBoard ? 'Switch to a white board' : 'Switch to a dark board'}
          title={isDarkBoard ? 'Switch to a white board' : 'Switch to a dark board'}
        >
          {isDarkBoard ? (
            <Sun className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Moon className="h-4 w-4" aria-hidden="true" />
          )}
        </button>

        <button
          type="button"
          onClick={onClear}
          className="btn btn-ghost btn-icon"
          aria-label="Clear the whole board"
          title="Clear the board"
        >
          {/* Colour on the icon, not the button: `.btn-ghost:hover` owns the
              button's own colour, and destructive should stay destructive. */}
          <Trash2 className="h-4 w-4 text-danger" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={onExport}
          className="btn btn-secondary"
          aria-label="Save the board as a PNG image"
          title="Save the board as a PNG image"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Save image</span>
        </button>

        {/* `data-presentation-toggle` is how SplitClassroom finds this button
            again to restore focus when presentation mode closes: the portal
            re-parents the DOM, so a plain ref would go stale. */}
        <button
          type="button"
          data-presentation-toggle=""
          onClick={() => setIsPresentationMode(!isPresentationMode)}
          className={toggleClasses(isPresentationMode)}
          aria-pressed={isPresentationMode}
          aria-label={isPresentationMode ? 'Exit presentation mode' : 'Enter presentation mode'}
          title={isPresentationMode ? 'Exit presentation mode (Esc)' : 'Presentation mode'}
        >
          {isPresentationMode ? (
            <Minimize className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Maximize className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
