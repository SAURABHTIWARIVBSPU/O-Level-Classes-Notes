import React from 'react';
import {
  CheckCircle2, Flame, BookOpen, Code2, Trophy, Sparkles, PlayCircle,
} from 'lucide-react';

/**
 * The homepage illustration — a "study stack" built from real product
 * surfaces (a topic card, a quiz result, a streak) rather than a stock image,
 * so it keeps looking like the app it advertises. Pure markup, no client JS.
 */
export default function HeroArt({ className = '' }) {
  return (
    <div className={`relative w-full max-w-[520px] mx-auto aspect-[10/9] select-none ${className}`} aria-hidden="true">
      {/* soft blob */}
      <div className="absolute inset-x-6 top-6 bottom-2 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] bg-accent-soft" />
      <div className="absolute right-4 top-2 w-24 h-24 rounded-full bg-hl-soft" />

      {/* main card — topic reader */}
      <div className="absolute left-[4%] top-[12%] w-[62%] rounded-2xl bg-surface border border-line shadow-e3 p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="icon-tile icon-tile-sm tone-violet"><BookOpen className="w-4 h-4" /></span>
          <span className="min-w-0">
            <span className="block text-2xs font-semibold uppercase tracking-wider text-accent">Unit 04 · Topic 03</span>
            <span className="block text-sm font-semibold text-ink truncate">CSS Box Model</span>
          </span>
        </div>
        <div className="space-y-1.5">
          <div className="h-2 rounded-full bg-sunken w-full" />
          <div className="h-2 rounded-full bg-sunken w-[92%]" />
          <div className="h-2 rounded-full bg-sunken w-[70%]" />
        </div>
        <div className="mt-3 rounded-xl bg-sunken border border-line p-3 font-mono text-2xs leading-relaxed text-ink-2">
          <span className="text-accent">.box</span> {'{'}<br />
          &nbsp;&nbsp;<span className="text-t-sky">margin</span>: <span className="text-t-amber">16px</span>;<br />
          &nbsp;&nbsp;<span className="text-t-sky">padding</span>: <span className="text-t-amber">12px</span>;<br />
          {'}'}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ok">
            <CheckCircle2 className="w-3.5 h-3.5" /> Marked as done
          </span>
          <span className="text-2xs text-ink-4">4 min read</span>
        </div>
      </div>

      {/* quiz result card */}
      <div className="absolute right-[2%] top-[6%] w-[42%] rounded-2xl bg-surface border border-line shadow-e3 p-4 animate-float">
        <div className="flex items-center gap-2">
          <span className="icon-tile icon-tile-sm tone-amber"><Trophy className="w-4 h-4" /></span>
          <span className="text-xs font-semibold text-ink">Unit test</span>
        </div>
        <p className="mt-2 text-h2 font-semibold text-ink tabular-nums">18<span className="text-ink-4 text-base">/20</span></p>
        <div className="mt-2 h-2 rounded-full bg-sunken overflow-hidden">
          <div className="h-full w-[90%] rounded-full bg-hl" />
        </div>
        <p className="mt-1.5 text-2xs font-semibold text-ok">Top 10% · Excellent</p>
      </div>

      {/* streak pill */}
      <div className="absolute right-0 bottom-[26%] rounded-2xl bg-surface border border-line shadow-e3 px-4 py-3 flex items-center gap-3 animate-float-delay">
        <span className="icon-tile icon-tile-sm tone-rose"><Flame className="w-4 h-4" /></span>
        <span>
          <span className="block text-sm font-semibold text-ink leading-tight">7-day streak</span>
          <span className="block text-2xs text-ink-3">Keep it going</span>
        </span>
      </div>

      {/* playground chip */}
      <div className="absolute left-[10%] bottom-[6%] rounded-full bg-ink text-ink-inv shadow-e3 pl-1.5 pr-4 py-1.5 flex items-center gap-2">
        <span className="w-7 h-7 rounded-full bg-accent grid place-items-center"><PlayCircle className="w-4 h-4 text-white" /></span>
        <span className="text-xs font-semibold">Run in playground</span>
        <Code2 className="w-3.5 h-3.5 opacity-70" />
      </div>

      {/* sparkle */}
      <Sparkles className="absolute left-[8%] top-[6%] w-6 h-6 text-hl" />
    </div>
  );
}
