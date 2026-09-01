'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { masterProjects } from '@/data/projectsData';
import { FolderGit2, Play, Copy, Check, FileCode, Layers, ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  const [activeProjectId, setActiveProjectId] = useState(masterProjects[0].id);
  const [copied, setCopied] = useState(false);

  const activeProject = masterProjects.find((p) => p.id === activeProjectId) || masterProjects[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeProject.starterCode || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-bold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" /> 8 Progressive Guided Capstones
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Hands-on Web Projects (प्रोजेक्ट्स)
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Build real-world portfolios, interactive portals, and web applications combining HTML5, 
            CSS3, W3.CSS, and JavaScript from beginner to capstone level.
          </p>
        </div>

        <Link
          href="/playground"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-sm transition-all"
        >
          <Play className="w-4 h-4 fill-current" />
          Open Code Playground
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Project List (Col 1) */}
        <div className="space-y-2 max-h-[640px] overflow-y-auto pr-1">
          {masterProjects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveProjectId(proj.id)}
              className={`w-full text-left p-3.5 rounded-xl border text-xs font-bold transition-all ${
                proj.id === activeProject.id
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-200 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] uppercase font-mono font-bold text-slate-400">
                  PROJECT 0{idx + 1}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold">
                  {proj.level || proj.difficulty}
                </span>
              </div>
              <p className="leading-snug">{proj.title}</p>
            </button>
          ))}
        </div>

        {/* Right Active Project Details (Cols 2-3) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 font-mono">
                CAPSTONE PROJECT #{activeProject.id}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300">
                {activeProject.level || activeProject.difficulty} Level
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {activeProject.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {activeProject.description}
            </p>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {(activeProject.technologies || []).map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Key Learning Outcomes:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {(activeProject.learningOutcomes || []).map((out, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Project Starter Code */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-md bg-slate-950">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs">
              <span className="font-mono text-slate-300 font-bold flex items-center gap-1.5">
                <FileCode className="w-4 h-4 text-purple-400" /> Starter Code Template
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <Link
                  href="/playground"
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run in Playground</span>
                </Link>
              </div>
            </div>
            <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto m-0 leading-relaxed max-h-[380px]">
              {activeProject.starterCode || `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${activeProject.title}</title>
  <style>
    body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
    h1 { color: #0284c7; }
  </style>
</head>
<body>
  <h1>${activeProject.title}</h1>
  <p>${activeProject.description}</p>
</body>
</html>`}
            </pre>
          </div>

        </div>

      </div>

    </div>
  );
}
