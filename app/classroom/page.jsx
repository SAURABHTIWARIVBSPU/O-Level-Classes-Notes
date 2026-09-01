'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SplitClassroom from '@/components/whiteboard/SplitClassroom';
import { Presentation, Layers, BookOpen, Lightbulb, Code2 } from 'lucide-react';
import Link from 'next/link';

function ClassroomContent() {
  const searchParams = useSearchParams();
  const initialTemplate = searchParams.get('template');

  return (
    <div className="space-y-6 max-w-7xl mx-auto py-2">
      
      {/* Title & Quick Stats Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold mb-2">
            <Presentation className="w-3.5 h-3.5 text-brand-600" />
            MSITM Teacher Whiteboard &amp; Student Practice Studio
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Digital Board Classroom (डिजिटल क्लासरूम)
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Designed for digital smart boards and touchscreens: Draw architectural diagrams, annotate HTML/CSS concepts, and execute real-time code live in class.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/playground"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all"
          >
            <Code2 className="w-4 h-4 text-emerald-500" />
            <span>Standalone Playground</span>
          </Link>
          <Link
            href="/syllabus"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold transition-all shadow-sm"
          >
            <BookOpen className="w-4 h-4" />
            <span>Syllabus Notes</span>
          </Link>
        </div>
      </div>

      {/* Classroom Teaching Instructions / Quick Tips */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 flex items-start gap-2.5">
          <Lightbulb className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-blue-900 dark:text-blue-300 block">Teacher Stylus / Touch Ready:</span>
            <span className="text-slate-600 dark:text-slate-400">Smooth pointer pressure response for writing naturally on classroom digital boards.</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 flex items-start gap-2.5">
          <Layers className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-900 dark:text-amber-300 block">Pre-Built Web Diagrams:</span>
            <span className="text-slate-600 dark:text-slate-400">Click &quot;Insert Web Diagram&quot; to paste DOM Tree, Box Model, or Client-Server flows.</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 flex items-start gap-2.5">
          <Code2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-emerald-900 dark:text-emerald-300 block">Live Split Code Mode:</span>
            <span className="text-slate-600 dark:text-slate-400">Draw concepts on the board while students test code immediately in the live editor.</span>
          </div>
        </div>
      </div>

      {/* Main Split Classroom Component */}
      <SplitClassroom initialTemplate={initialTemplate} />

    </div>
  );
}

export default function ClassroomPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs font-mono text-slate-500">Loading Digital Classroom...</div>}>
      <ClassroomContent />
    </Suspense>
  );
}
