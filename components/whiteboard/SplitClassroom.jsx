'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Presentation, Columns2, School } from 'lucide-react';

import { Badge, Segmented } from '@/components/ui';
import WhiteboardToolbar from './WhiteboardToolbar';
import WhiteboardCanvas from './WhiteboardCanvas';
import SandboxEditor from '@/components/playground/SandboxEditor';
import FullscreenPortal from '@/components/common/FullscreenPortal';

/**
 * Board on one side, live editor on the other.
 *
 * All whiteboard state lives here rather than in the canvas: the toolbar and
 * the canvas are siblings, and the canvas is driven by counter "triggers"
 * (`undoTrigger`, `clearTrigger`, …) so a repeated action still fires. The
 * template trigger carries a timestamp for the same reason — loading the same
 * diagram twice has to be two events.
 *
 * Presentation mode is a modal layer, so it closes on Escape and hands focus
 * back to the button that opened it.
 */

const LAYOUT_OPTIONS = [
  {
    value: 'split',
    label: (
      <span className="inline-flex items-center gap-1.5">
        <Columns2 className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="hidden sm:inline">Board and code</span>
        <span className="sm:hidden">Split</span>
      </span>
    ),
  },
  {
    value: 'board-only',
    label: (
      <span className="inline-flex items-center gap-1.5">
        <Presentation className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="hidden sm:inline">Board only</span>
        <span className="sm:hidden">Board</span>
      </span>
    ),
  },
];

export default function SplitClassroom({ initialTemplate = null }) {
  // Whiteboard controls
  const [activeTool, setActiveTool] = useState('pen');
  // Default ink — a canvas colour, not UI chrome.
  const [strokeColor, setStrokeColor] = useState('#F19A27');
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [bgType, setBgType] = useState('grid');
  const [isDarkBoard, setIsDarkBoard] = useState(false);
  const [undoTrigger, setUndoTrigger] = useState(0);
  const [redoTrigger, setRedoTrigger] = useState(0);
  const [clearTrigger, setClearTrigger] = useState(0);
  const [exportTrigger, setExportTrigger] = useState(0);
  const [templateTrigger, setTemplateTrigger] = useState(
    initialTemplate ? { id: initialTemplate, ts: Date.now() } : null
  );
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  // Snapshot persistence across fullscreen and normal view transitions
  const persistentSnapshotRef = useRef(null);

  // View Layout Mode: 'split' (Whiteboard + Editor side-by-side) | 'board-only'
  const [layoutMode, setLayoutMode] = useState('split');

  const shellRef = useRef(null);
  const boardRef = useRef(null);
  const wasPresenting = useRef(false);

  const handleHistoryChange = (undoable, redoable) => {
    setCanUndo(undoable);
    setCanRedo(redoable);
  };

  // Presentation mode is a dialog: Escape closes it and focus moves into it.
  useEffect(() => {
    if (!isPresentationMode) return undefined;
    wasPresenting.current = true;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsPresentationMode(false);
    };
    document.addEventListener('keydown', onKeyDown);

    const focusTimer = setTimeout(() => shellRef.current?.focus(), 0);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      clearTimeout(focusTimer);
    };
  }, [isPresentationMode]);

  // …and focus goes back to the toolbar button that opened it. The portal
  // re-parents the DOM, so the node has to be looked up again after the exit.
  useEffect(() => {
    if (isPresentationMode || !wasPresenting.current) return;
    wasPresenting.current = false;
    boardRef.current?.querySelector('[data-presentation-toggle]')?.focus();
  }, [isPresentationMode]);

  return (
    <FullscreenPortal
      isOpen={isPresentationMode}
      onClose={() => setIsPresentationMode(false)}
      toolName="digital-classroom"
    >
      <div
        ref={shellRef}
        tabIndex={isPresentationMode ? -1 : undefined}
        className={
          isPresentationMode
            ? 'flex h-full w-full flex-col gap-3 overflow-hidden bg-ground p-3'
            : 'space-y-4'
        }
      >
        {/* ------------------------------------------------ header + layout */}
        <div className="panel flex shrink-0 flex-wrap items-center justify-between gap-3 p-3">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line bg-sunken"
              aria-hidden="true"
            >
              <School className="h-4 w-4 text-ink-3" />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-h4 font-semibold text-ink">Digital board and code studio</h2>
                <Badge tone="neutral">Live classroom</Badge>
              </div>
              <p className="mt-0.5 hidden text-xs text-ink-3 sm:block">
                Explain it on the board, write the code beside it, run it in front of the class.
              </p>
            </div>
          </div>

          <Segmented
            ariaLabel="Workspace layout"
            options={LAYOUT_OPTIONS}
            value={layoutMode}
            onChange={setLayoutMode}
          />
        </div>

        {/* ---------------------------------------------------- workspace */}
        <div
          className={`grid gap-3 ${isPresentationMode ? 'min-h-0 flex-1' : ''} ${
            layoutMode === 'split' ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {/* Board */}
          <section
            ref={boardRef}
            aria-label="Whiteboard"
            className={`flex flex-col gap-2 ${isPresentationMode ? 'min-h-0 flex-1' : ''}`}
          >
            <WhiteboardToolbar
              activeTool={activeTool}
              setActiveTool={setActiveTool}
              strokeColor={strokeColor}
              setStrokeColor={setStrokeColor}
              strokeWidth={strokeWidth}
              setStrokeWidth={setStrokeWidth}
              bgType={bgType}
              setBgType={setBgType}
              isDarkBoard={isDarkBoard}
              setIsDarkBoard={setIsDarkBoard}
              onUndo={() => setUndoTrigger((c) => c + 1)}
              onRedo={() => setRedoTrigger((c) => c + 1)}
              canUndo={canUndo}
              canRedo={canRedo}
              onClear={() => setClearTrigger((c) => c + 1)}
              onExport={() => setExportTrigger((c) => c + 1)}
              isPresentationMode={isPresentationMode}
              setIsPresentationMode={setIsPresentationMode}
              onLoadTemplate={(tmplId) => setTemplateTrigger({ id: tmplId, ts: Date.now() })}
            />

            <div
              className={`panel overflow-hidden ${
                isPresentationMode ? 'h-full min-h-0 flex-1' : 'h-[420px] sm:h-[520px] xl:h-[560px]'
              }`}
            >
              <WhiteboardCanvas
                activeTool={activeTool}
                strokeColor={strokeColor}
                strokeWidth={strokeWidth}
                bgType={bgType}
                isDarkBoard={isDarkBoard}
                undoTrigger={undoTrigger}
                redoTrigger={redoTrigger}
                clearTrigger={clearTrigger}
                exportTrigger={exportTrigger}
                templateTrigger={templateTrigger}
                onHistoryChange={handleHistoryChange}
                persistentSnapshot={persistentSnapshotRef.current}
                onSnapshotChange={(data) => {
                  persistentSnapshotRef.current = data;
                }}
              />
            </div>
          </section>

          {/* Code */}
          {layoutMode === 'split' && (
            <section
              aria-label="Live code editor"
              className={`flex flex-col ${isPresentationMode ? 'min-h-0 flex-1' : ''}`}
            >
              <div className="min-h-0 flex-1">
                <SandboxEditor />
              </div>
            </section>
          )}
        </div>
      </div>
    </FullscreenPortal>
  );
}
