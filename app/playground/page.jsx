'use client';

import React from 'react';
import SandboxEditor from '@/components/playground/SandboxEditor';
import { Terminal, ShieldCheck, Lightbulb, Code2 } from 'lucide-react';

export default function PlaygroundPage() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto py-4">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-3">
          <Terminal className="w-3.5 h-3.5" /> Sandboxed Execution Environment
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Live Interactive Code Playground
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Type HTML5, CSS3, W3.CSS, JavaScript, or AngularJS and see instantaneous live results. 
          Use the preset dropdown to load official syllabus code templates or write your own practical solutions.
        </p>
      </div>

      {/* Main Sandbox Editor Component */}
      <SandboxEditor />

      {/* Practical Tips Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-amber-500" /> Keyboard Shortcut
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Press <strong>Ctrl + Enter</strong> (or <strong>Cmd + Enter</strong>) while focused inside the editor to instantly execute your code without lifting your hands from the keyboard.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-indigo-500" /> 100% Client-Side Sandbox
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Your code runs securely within an isolated iframe sandbox with modal and script permissions. Zero network lag, zero server dependencies.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
            <Code2 className="w-4 h-4 text-emerald-500" /> Practical Exam Ready
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Practice form validation, table colspan/rowspan, and W3.CSS responsive grids exactly as required in the 72-hour NIELIT practical lab evaluation.
          </p>
        </div>
      </div>

    </div>
  );
}
