'use client';

import React, { useState, useRef } from 'react';
import WhiteboardToolbar from './WhiteboardToolbar';
import WhiteboardCanvas from './WhiteboardCanvas';
import SandboxEditor from '@/components/playground/SandboxEditor';
import FullscreenPortal from '@/components/common/FullscreenPortal';
import { Presentation, Columns2, Terminal, School } from 'lucide-react';

export default function SplitClassroom({ initialTemplate = null }) {
  // Whiteboard controls
  const [activeTool, setActiveTool] = useState('pen');
  const [strokeColor, setStrokeColor] = useState('#0284c7');
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

  const handleHistoryChange = (undoable, redoable) => {
    setCanUndo(undoable);
    setCanRedo(redoable);
  };

  return (
    <FullscreenPortal
      isOpen={isPresentationMode}
      onClose={() => setIsPresentationMode(false)}
      toolName="digital-classroom"
    >
      <div 
        className={`transition-all ${
          isPresentationMode 
            ? 'w-full h-full flex flex-col justify-between p-3 bg-white dark:bg-slate-950 overflow-hidden space-y-3' 
            : 'space-y-4'
        }`}
      >
        
        {/* Header Banner & Mode Switches */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-100 dark:bg-slate-900 p-2.5 sm:p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md shrink-0">
              <School className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-black text-slate-900 dark:text-white">
                  MSITM Digital Board &amp; Coding Studio
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  LIVE CLASSROOM
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                Explain visually on Whiteboard → Code alongside → Run instant live preview.
              </p>
            </div>
          </div>

          {/* Layout Switcher */}
          <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
            <button
              onClick={() => setLayoutMode('split')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg font-bold transition-all ${
                layoutMode === 'split'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Columns2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Split Mode</span>
              <span className="sm:hidden">Split</span>
            </button>

            <button
              onClick={() => setLayoutMode('board-only')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg font-bold transition-all ${
                layoutMode === 'board-only'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Whiteboard Full</span>
              <span className="sm:hidden">Board</span>
            </button>
          </div>
        </div>

        {/* Main Workspace Area */}
        <div className={`grid gap-3 transition-all ${
          isPresentationMode ? 'flex-1 min-h-0' : ''
        } ${
          layoutMode === 'split' ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1'
        }`}>
          
          {/* Left / Top: Interactive Whiteboard */}
          {(layoutMode === 'split' || layoutMode === 'board-only') && (
            <div className={`flex flex-col gap-2 ${isPresentationMode ? 'h-full flex-1 min-h-0' : ''}`}>
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

              <div className={`border border-slate-300 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xl ${
                isPresentationMode ? 'flex-1 min-h-0 h-full' : 'h-[560px]'
              }`}>
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
            </div>
          )}

          {/* Right / Bottom: Live Code Playground */}
          {(layoutMode === 'split') && (
            <div className={`border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg p-2 bg-slate-900 flex flex-col ${
              isPresentationMode ? 'h-full flex-1 min-h-0' : ''
            }`}>
              <div className="px-3 py-1.5 border-b border-slate-800 flex items-center justify-between text-xs mb-2 shrink-0">
                <span className="font-mono text-slate-300 font-bold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" /> Interactive Code Runner
                </span>
                <span className="text-[11px] text-slate-400">
                  Ctrl + Enter to run
                </span>
              </div>
              <div className="flex-1 min-h-0">
                <SandboxEditor />
              </div>
            </div>
          )}

        </div>

      </div>
    </FullscreenPortal>
  );
}
