'use client';

import React from 'react';
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
  Layers,
} from 'lucide-react';
import { boardTemplates } from './BoardTemplates';

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
  const tools = [
    { id: 'pen', label: 'Pen', icon: Pen },
    { id: 'highlighter', label: 'Highlighter', icon: Highlighter },
    { id: 'eraser', label: 'Eraser', icon: Eraser },
    { id: 'line', label: 'Line', icon: Minus },
    { id: 'arrow', label: 'Arrow', icon: MoveRight },
    { id: 'rectangle', label: 'Rectangle', icon: Square },
    { id: 'circle', label: 'Circle', icon: Circle },
    { id: 'text', label: 'Text', icon: Type },
    { id: 'note', label: 'Sticky Note', icon: StickyNote },
  ];

  const colors = [
    { name: isDarkBoard ? 'White' : 'Black', hex: isDarkBoard ? '#ffffff' : '#0f172a' },
    { name: 'Primary Orange', hex: '#F19A27' },
    { name: 'Secondary Blue', hex: '#1F64C9' },
    { name: 'Emerald', hex: '#10b981' },
    { name: 'Amber', hex: '#f59e0b' },
    { name: 'Rose', hex: '#f43f5e' },
    { name: 'Purple', hex: '#a855f7' },
  ];

  const widths = [
    { label: 'S', value: 2 },
    { label: 'M', value: 5 },
    { label: 'L', value: 10 },
    { label: 'XL', value: 18 },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg transition-all text-xs z-30">
      
      {/* Group 1: Drawing Tools */}
      <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/70 p-1 rounded-xl">
        {tools.map((t) => {
          const Icon = t.icon;
          const isActive = activeTool === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTool(t.id)}
              className={`p-2 rounded-lg transition-all flex items-center justify-center ${
                isActive
                  ? 'bg-brand-600 text-white shadow-sm scale-105'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700/60'
              }`}
              title={t.label}
            >
              <Icon className="w-4 h-4" />
            </button>
          );
        })}
      </div>

      {/* Group 2: Color Palette */}
      <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-100 dark:bg-slate-800/70 rounded-xl">
        {colors.map((c) => (
          <button
            key={c.hex}
            onClick={() => setStrokeColor(c.hex)}
            className={`w-5 h-5 rounded-full border transition-transform ${
              strokeColor === c.hex
                ? 'scale-125 ring-2 ring-brand-500 border-white'
                : 'border-slate-300 dark:border-slate-600 hover:scale-110'
            }`}
            style={{ backgroundColor: c.hex }}
            title={c.name}
          />
        ))}
      </div>

      {/* Group 3: Stroke Width */}
      <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/70 p-1 rounded-xl">
        {widths.map((w) => (
          <button
            key={w.label}
            onClick={() => setStrokeWidth(w.value)}
            className={`px-2 py-1 rounded font-mono font-bold text-[11px] transition-all ${
              strokeWidth === w.value
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
            title={`Stroke width ${w.value}px`}
          >
            {w.label}
          </button>
        ))}
      </div>

      {/* Group 4: Educational Templates Dropdown */}
      <div className="relative flex items-center">
        <select
          onChange={(e) => {
            if (e.target.value) {
              onLoadTemplate(e.target.value);
              e.target.value = '';
            }
          }}
          defaultValue=""
          className="bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 rounded-xl px-2.5 py-1.5 text-xs font-bold focus:outline-none cursor-pointer"
        >
          <option value="" disabled>Insert Web Diagram...</option>
          {boardTemplates.map((bt) => (
            <option key={bt.id} value={bt.id}>
              {bt.title} (Unit {bt.unit})
            </option>
          ))}
        </select>
      </div>

      {/* Group 5: History & Actions */}
      <div className="flex items-center gap-1">
        <button
          onClick={onUndo}
          disabled={!canUndo}
          className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="Undo (Ctrl+Z)"
        >
          <Undo2 className="w-4 h-4" />
        </button>
        <button
          onClick={onRedo}
          disabled={!canRedo}
          className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="Redo (Ctrl+Y)"
        >
          <Redo2 className="w-4 h-4" />
        </button>

        {/* Board Background Selector */}
        <button
          onClick={() => {
            const types = ['blank', 'grid', 'ruled', 'dot'];
            const next = types[(types.indexOf(bgType) + 1) % types.length];
            setBgType(next);
          }}
          className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title={`Pattern: ${bgType.toUpperCase()} (Click to toggle)`}
        >
          <Grid className="w-4 h-4" />
        </button>

        {/* Light / Dark Board Mode */}
        <button
          onClick={() => setIsDarkBoard(!isDarkBoard)}
          className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title={isDarkBoard ? 'Switch to Whiteboard' : 'Switch to Darkboard'}
        >
          {isDarkBoard ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
        </button>

        {/* Clear Board */}
        <button
          onClick={onClear}
          className="p-2 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-colors"
          title="Clear Board"
        >
          <Trash2 className="w-4 h-4" />
        </button>

        {/* Export to PNG */}
        <button
          onClick={onExport}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-bold text-xs transition-all hover:bg-slate-800 dark:hover:bg-white shadow-2xs cursor-pointer"
          title="Export Notes as PNG Image"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Save Image</span>
        </button>

        {/* Presentation Fullscreen Mode */}
        <button
          onClick={() => setIsPresentationMode(!isPresentationMode)}
          className={`p-2 rounded-lg transition-colors ${
            isPresentationMode
              ? 'bg-amber-500 text-white'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
          title={isPresentationMode ? 'Exit Presentation Mode' : 'Enter Classroom Presentation Mode'}
        >
          {isPresentationMode ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>
      </div>

    </div>
  );
}
