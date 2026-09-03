'use client';

import React, { useState } from 'react';
import { 
  Download, 
  Maximize2, 
  Minimize2, 
  ExternalLink, 
  FileText, 
  BookOpen, 
  ZoomIn, 
  ZoomOut, 
  RotateCw,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function UnitPdfReader({ unitNotes }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);

  if (!unitNotes) return null;

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 15, 150));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 15, 75));
  };

  return (
    <div className={`space-y-4 transition-all ${isFullscreen ? 'fixed inset-0 z-50 bg-slate-950 p-4 overflow-hidden flex flex-col' : ''}`}>
      
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-appborder shadow-xs">
        
        {/* Unit Info */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-accent-blue/10 text-accent-blue border border-accent-blue/20 flex items-center justify-center font-mono font-bold text-xs shadow-2xs">
            U{unitNotes.unitNumberPadded}
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
              {unitNotes.pdfFileName}
            </h3>
            <span className="text-[11px] font-mono text-slate-500">
              {unitNotes.pageCount} Pages • {unitNotes.fileSizeKb} • {unitNotes.topicCount} Topics
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          
          {/* Zoom Controls */}
          <div className="hidden sm:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-appborder text-xs font-mono">
            <button
              onClick={handleZoomOut}
              title="Zoom Out"
              className="p-1 rounded-lg hover:bg-white dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-1.5 text-[10px] font-bold text-slate-700 dark:text-slate-300 min-w-[36px] text-center">
              {zoomLevel}%
            </span>
            <button
              onClick={handleZoomIn}
              title="Zoom In"
              className="p-1 rounded-lg hover:bg-white dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Viewer"}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-950 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 border border-appborder transition-all text-xs font-bold flex items-center gap-1.5 cursor-pointer"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            <span className="hidden md:inline">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
          </button>

          {/* Direct Download Button */}
          <a
            href={unitNotes.pdfUrl}
            download={unitNotes.pdfFileName}
            className="px-3.5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs transition-all flex items-center gap-1.5 shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Embedded PDF Canvas Frame */}
      <div 
        className={`relative rounded-xl border border-appborder bg-slate-100 dark:bg-slate-950 overflow-hidden shadow-inner ${
          isFullscreen ? 'flex-1 h-full' : 'h-[650px] sm:h-[750px] lg:h-[850px]'
        }`}
      >
        <iframe
          src={`${unitNotes.pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&zoom=${zoomLevel}`}
          title={`${unitNotes.title} PDF Notes`}
          className="w-full h-full border-none rounded-xl"
        />

        {/* Fallback overlay if browser blocks inline iframe rendering */}
        <noscript>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-white dark:bg-slate-900">
            <FileText className="w-12 h-12 text-brand-600 mb-3" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Download {unitNotes.pdfFileName}
            </h4>
            <p className="text-xs text-slate-500 mb-4 max-w-sm">
              Your browser does not support inline PDF previews. You can download the complete textbook notes directly.
            </p>
            <a
              href={unitNotes.pdfUrl}
              download={unitNotes.pdfFileName}
              className="px-4 py-2 rounded-xl bg-brand-500 text-white text-xs font-bold shadow-sm"
            >
              Download PDF Document
            </a>
          </div>
        </noscript>
      </div>

      {/* Quick Study Advice Strip */}
      {!isFullscreen && (
        <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/60 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-medium">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <span>
              Tip: You can read this PDF directly on your smartphone, or print all {unitNotes.pageCount} pages for revision before your CCC exam!
            </span>
          </div>

          <a
            href={unitNotes.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand-600 dark:text-brand-400 hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>Open in New Browser Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

    </div>
  );
}
