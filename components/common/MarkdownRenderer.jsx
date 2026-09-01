'use client';

import React, { useMemo } from 'react';
import { marked } from 'marked';

/**
 * Custom MarkdownRenderer using `marked` configured with custom renderers
 * for clean, professional textbook typography with zero raw `#`, `**`, etc.
 */
export default function MarkdownRenderer({ content, className = '' }) {
  const html = useMemo(() => {
    if (!content) return '';

    // Configure marked options
    const renderer = new marked.Renderer();

    // Custom heading rendering
    renderer.heading = (text, level) => {
      const headingSizes = {
        1: 'text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-6 mb-3 pb-2 border-b border-slate-200 dark:border-slate-800',
        2: 'text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-5 mb-2.5',
        3: 'text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2 flex items-center gap-2',
        4: 'text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mt-3 mb-1.5',
        5: 'text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-2 mb-1',
        6: 'text-xs font-semibold text-slate-600 dark:text-slate-400 mt-2 mb-1 uppercase tracking-wider',
      };
      const cls = headingSizes[level] || headingSizes[3];
      return `<h${level} class="${cls}">${text}</h${level}>`;
    };

    // Custom paragraph rendering
    renderer.paragraph = (text) => {
      return `<p class="text-sm leading-relaxed text-slate-700 dark:text-slate-300 my-2.5">${text}</p>`;
    };

    // Custom strong/bold rendering
    renderer.strong = (text) => {
      return `<strong class="font-bold text-slate-900 dark:text-white">${text}</strong>`;
    };

    // Custom inline code rendering
    renderer.codespan = (code) => {
      return `<code class="font-mono text-[12px] px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-semibold border border-slate-200 dark:border-slate-700/80">${code}</code>`;
    };

    // Custom code block rendering
    renderer.code = (code, language) => {
      return `<div class="my-3 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-sm">
        ${language ? `<div class="px-3 py-1 bg-slate-900 border-b border-slate-800 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">${language}</div>` : ''}
        <pre class="p-3.5 text-xs font-mono text-emerald-400 overflow-x-auto m-0 leading-relaxed"><code>${code}</code></pre>
      </div>`;
    };

    // Custom list rendering
    renderer.list = (body, ordered, start) => {
      const type = ordered ? 'ol' : 'ul';
      const listCls = ordered
        ? 'list-decimal list-inside space-y-1.5 my-2.5 text-sm text-slate-700 dark:text-slate-300 pl-1'
        : 'list-disc list-inside space-y-1.5 my-2.5 text-sm text-slate-700 dark:text-slate-300 pl-1';
      return `<${type} class="${listCls}">${body}</${type}>`;
    };

    // Custom list item rendering
    renderer.listitem = (text) => {
      return `<li class="leading-relaxed"><span class="align-baseline">${text}</span></li>`;
    };

    // Custom blockquote rendering
    renderer.blockquote = (quote) => {
      return `<blockquote class="my-3 border-l-4 border-brand-500 bg-brand-50/50 dark:bg-brand-950/20 px-4 py-2.5 rounded-r-xl text-sm italic text-slate-700 dark:text-slate-300">${quote}</blockquote>`;
    };

    // Custom table rendering
    renderer.table = (header, body) => {
      return `<div class="my-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <table class="min-w-full text-xs text-left">
          <thead class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 uppercase font-bold border-b border-slate-200 dark:border-slate-700">${header}</thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">${body}</tbody>
        </table>
      </div>`;
    };

    renderer.tablerow = (content) => {
      return `<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">${content}</tr>`;
    };

    renderer.tablecell = (content, flags) => {
      const tag = flags.header ? 'th' : 'td';
      const cls = flags.header
        ? 'px-3.5 py-2.5 text-[11px] font-bold tracking-wider'
        : 'px-3.5 py-2 text-slate-700 dark:text-slate-300';
      return `<${tag} class="${cls}">${content}</${tag}>`;
    };

    // Custom link rendering
    renderer.link = (href, title, text) => {
      return `<a href="${href}" ${title ? `title="${title}"` : ''} class="text-brand-600 dark:text-brand-400 font-semibold underline underline-offset-2 hover:text-brand-700" target="_blank" rel="noopener noreferrer">${text}</a>`;
    };

    // Custom horizontal rule rendering
    renderer.hr = () => {
      return `<hr class="my-4 border-slate-200 dark:border-slate-800" />`;
    };

    marked.setOptions({
      renderer,
      gfm: true,
      breaks: true,
    });

    return marked.parse(content);
  }, [content]);

  return (
    <div
      className={`markdown-content prose-headings:font-bold ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
