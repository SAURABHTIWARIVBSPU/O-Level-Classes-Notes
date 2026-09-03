'use client';

import React, { useMemo, useEffect, useRef } from 'react';
import { marked } from 'marked';

// Helper to generate URL-safe slugs for headings
function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/**
 * Creates custom marked renderer configured with instructional design standards.
 * Supports both Marked v18 token object parameters and legacy signatures.
 */
function createCustomRenderer() {
  const renderer = new marked.Renderer();

  // 1. Heading Rendering with ID anchors
  renderer.heading = function (token, level) {
    const depth = typeof token === 'object' && token !== null ? (token.depth || 1) : (level || 1);
    const text = typeof token === 'object' && token !== null
      ? (this.parser ? this.parser.parseInline(token.tokens || []) : (token.text || ''))
      : (token || '');

    const id = slugify(text);

    const headingStyles = {
      1: 'text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-8 mb-4 pb-2.5 border-b border-slate-200 dark:border-slate-800 tracking-tight',
      2: 'text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-7 mb-3 tracking-tight',
      3: 'text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2.5 flex items-center gap-2',
      4: 'text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mt-4 mb-2',
      5: 'text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-3 mb-1.5',
      6: 'text-xs font-semibold text-slate-500 dark:text-slate-400 mt-2.5 mb-1 uppercase tracking-wider',
    };

    const cls = headingStyles[depth] || headingStyles[3];
    return `<h${depth} id="${id}" class="${cls} scroll-mt-24 group">${text}</h${depth}>`;
  };

  // 2. Paragraph Rendering
  renderer.paragraph = function (token) {
    const text = typeof token === 'object' && token !== null
      ? (this.parser ? this.parser.parseInline(token.tokens || []) : (token.text || ''))
      : (token || '');
    return `<p class="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300 my-3 font-normal">${text}</p>`;
  };

  // 3. Strong/Bold Text
  renderer.strong = function (token) {
    const text = typeof token === 'object' && token !== null
      ? (this.parser ? this.parser.parseInline(token.tokens || []) : (token.text || ''))
      : (token || '');
    return `<strong class="font-bold text-slate-900 dark:text-white">${text}</strong>`;
  };

  // 4. Italic/Em Text
  renderer.em = function (token) {
    const text = typeof token === 'object' && token !== null
      ? (this.parser ? this.parser.parseInline(token.tokens || []) : (token.text || ''))
      : (token || '');
    return `<em class="italic text-slate-800 dark:text-slate-200">${text}</em>`;
  };

  // 5. Inline Code
  renderer.codespan = function (token) {
    const text = typeof token === 'object' && token !== null ? (token.text || '') : (token || '');
    return `<code class="font-mono text-[12px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-semibold border border-slate-200 dark:border-slate-700/70">${text}</code>`;
  };

  // 6. Fenced Code Blocks with Language Header and Copy Button
  renderer.code = function (token, lang) {
    const rawCode = typeof token === 'object' && token !== null ? (token.text || '') : (token || '');
    const language = typeof token === 'object' && token !== null ? (token.lang || '') : (lang || '');
    const displayLang = language ? language.toUpperCase() : 'CODE';

    // Escape HTML in code
    const escapedCode = rawCode
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    return `<div class="my-5 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md">
      <div class="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs">
        <span class="font-mono font-bold text-brand-400 flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span>${displayLang}</span>
        </span>
        <button
          type="button"
          class="copy-code-button inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-semibold transition-colors focus:outline-none"
          title="Copy code"
        >
          <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span class="btn-text">Copy</span>
        </button>
      </div>
      <pre class="p-4 text-xs font-mono text-emerald-400 overflow-x-auto m-0 leading-relaxed max-h-[420px]"><code>${escapedCode}</code></pre>
    </div>`;
  };

  // 7. Unordered and Ordered Lists
  renderer.list = function (token, ordered, start) {
    const isOrdered = typeof token === 'object' && token !== null ? token.ordered : ordered;
    const startNum = typeof token === 'object' && token !== null ? token.start : start;
    const type = isOrdered ? 'ol' : 'ul';
    const listCls = isOrdered
      ? 'list-decimal list-outside space-y-2.5 my-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-300 pl-5 leading-relaxed'
      : 'list-disc list-outside space-y-2 my-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-300 pl-5 leading-relaxed';

    let body = '';
    if (typeof token === 'object' && token !== null && Array.isArray(token.items)) {
      for (const item of token.items) {
        body += this.listitem(item);
      }
    } else if (typeof token === 'string') {
      body = token;
    }
    const startAttr = isOrdered && startNum !== 1 && startNum ? ` start="${startNum}"` : '';
    return `<${type}${startAttr} class="${listCls}">${body}</${type}>`;
  };

  renderer.listitem = function (token) {
    let text = '';
    if (typeof token === 'object' && token !== null) {
      if (token.tokens && this.parser) {
        text = this.parser.parse(token.tokens);
      } else {
        text = token.text || '';
      }
    } else {
      text = token || '';
    }
    return `<li class="leading-relaxed"><span class="align-baseline">${text}</span></li>`;
  };

  // 8. Content-Aware Blockquote & Semantic Callout Engine
  renderer.blockquote = function (token) {
    let quote = '';
    if (typeof token === 'object' && token !== null) {
      if (token.tokens && this.parser) {
        quote = this.parser.parse(token.tokens);
      } else {
        quote = token.text || '';
      }
    } else {
      quote = token || '';
    }

    const cleanTrimmed = quote.trim();

    // Check for Semantic Callout Markers
    // 1. Tip Callout
    if (/^(\[!TIP\]|\*\*Tip:?\*\*|Tip:)/i.test(cleanTrimmed)) {
      const content = cleanTrimmed.replace(/^(\[!TIP\]|\*\*Tip:?\*\*|Tip:)/i, '').trim();
      return `<div class="callout-box callout-tip">
        <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-1">
          <svg class="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>EXAM TIP &amp; SHORTCUT</span>
        </div>
        <div class="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed">${content}</div>
      </div>`;
    }

    // 2. Warning / Pitfall Callout
    if (/^(\[!WARNING\]|\[!CAUTION\]|\*\*Warning:?\*\*|Warning:|\*\*Caution:?\*\*|Caution:)/i.test(cleanTrimmed)) {
      const content = cleanTrimmed.replace(/^(\[!WARNING\]|\[!CAUTION\]|\*\*Warning:?\*\*|Warning:|\*\*Caution:?\*\*|Caution:)/i, '').trim();
      return `<div class="callout-box callout-warning">
        <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-rose-800 dark:text-rose-300 mb-1">
          <svg class="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>CRITICAL PITFALL &amp; WARNING</span>
        </div>
        <div class="text-xs sm:text-sm text-rose-950 dark:text-rose-200 leading-relaxed">${content}</div>
      </div>`;
    }

    // 3. Important / Key Takeaway Callout
    if (/^(\[!IMPORTANT\]|\*\*Important:?\*\*|Important:|\*\*Golden Point:?\*\*)/i.test(cleanTrimmed)) {
      const content = cleanTrimmed.replace(/^(\[!IMPORTANT\]|\*\*Important:?\*\*|Important:|\*\*Golden Point:?\*\*)/i, '').trim();
      return `<div class="callout-box callout-important">
        <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-1">
          <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>KEY EXAM TAKEAWAY</span>
        </div>
        <div class="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed">${content}</div>
      </div>`;
    }

    // 4. Analogy / Intuition Callout
    if (/^(\*\*Analogy:?\*\*|Analogy:|\*\*Real-World Analogy:?\*\*)/i.test(cleanTrimmed)) {
      const content = cleanTrimmed.replace(/^(\*\*Analogy:?\*\*|Analogy:|\*\*Real-World Analogy:?\*\*)/i, '').trim();
      return `<div class="callout-box callout-analogy">
        <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-indigo-800 dark:text-indigo-300 mb-1">
          <svg class="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span>REAL-WORLD ANALOGY (वास्तविक जीवन का उदाहरण)</span>
        </div>
        <div class="text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 leading-relaxed">${content}</div>
      </div>`;
    }

    // 5. Note Callout (or [!NOTE])
    if (/^(\[!NOTE\]|\*\*Note:?\*\*|Note:)/i.test(cleanTrimmed)) {
      const content = cleanTrimmed.replace(/^(\[!NOTE\]|\*\*Note:?\*\*|Note:)/i, '').trim();
      return `<div class="callout-box callout-note">
        <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-accent-blue dark:text-sky-300 mb-1">
          <svg class="w-4 h-4 text-accent-blue dark:text-sky-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>TECHNICAL NOTE</span>
        </div>
        <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">${content}</div>
      </div>`;
    }

    // Standard Blockquote Fallback
    return `<blockquote class="my-4 border-l-4 border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 px-4 py-3 rounded-r-xl text-sm italic text-slate-700 dark:text-slate-300 leading-relaxed">${quote}</blockquote>`;
  };

  // 9. Responsive Comparison & Specification Tables
  renderer.table = function (token) {
    let headerHtml = '';
    let rowsHtml = '';
    if (typeof token === 'object' && token !== null && Array.isArray(token.header)) {
      let headerCells = '';
      for (const cell of token.header) {
        headerCells += this.tablecell(cell);
      }
      headerHtml = this.tablerow({ text: headerCells });
      for (const row of (token.rows || [])) {
        let rowCells = '';
        for (const cell of row) {
          rowCells += this.tablecell(cell);
        }
        rowsHtml += this.tablerow({ text: rowCells });
      }
    }
    return `<div class="table-responsive my-6 border border-slate-200 dark:border-slate-800 shadow-xs">
      <table class="w-full text-left text-xs sm:text-sm">
        <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold border-b border-slate-200 dark:border-slate-700 uppercase tracking-wider text-[11px]">${headerHtml}</thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">${rowsHtml}</tbody>
      </table>
    </div>`;
  };

  renderer.tablerow = function (token) {
    const content = typeof token === 'object' && token !== null ? (token.text || '') : (token || '');
    return `<tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors even:bg-slate-50/30 dark:even:bg-slate-800/20">${content}</tr>`;
  };

  renderer.tablecell = function (token, flags) {
    let content = '';
    let isHeader = false;
    let align = '';
    if (typeof token === 'object' && token !== null) {
      isHeader = !!token.header;
      align = token.align || '';
      content = token.tokens && this.parser ? this.parser.parseInline(token.tokens) : (token.text || '');
    } else {
      content = token || '';
      isHeader = flags && flags.header;
    }
    const tag = isHeader ? 'th' : 'td';
    const cls = isHeader
      ? 'px-4 py-3 font-extrabold text-slate-900 dark:text-slate-100'
      : 'px-4 py-3 text-slate-700 dark:text-slate-300 leading-relaxed';
    const alignAttr = align ? ` align="${align}"` : '';
    return `<${tag}${alignAttr} class="${cls}">${content}</${tag}>`;
  };

  // 10. Links with external accessibility
  renderer.link = function (token, title, text) {
    let href = '';
    let linkTitle = '';
    let linkText = '';
    if (typeof token === 'object' && token !== null) {
      href = token.href || '';
      linkTitle = token.title || '';
      linkText = token.tokens && this.parser ? this.parser.parseInline(token.tokens) : (token.text || '');
    } else {
      href = token || '';
      linkTitle = title || '';
      linkText = text || '';
    }
    const titleAttr = linkTitle ? ` title="${linkTitle}"` : '';
    const isExternal = /^https?:\/\//i.test(href);
    const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${href}"${titleAttr}${targetAttr} class="text-brand-600 dark:text-brand-400 font-semibold underline underline-offset-2 hover:text-brand-700 transition-colors">${linkText}</a>`;
  };

  // 11. Horizontal Rules
  renderer.hr = function () {
    return '<hr class="my-8 border-slate-200 dark:border-slate-800" />';
  };

  return renderer;
}

const sharedRenderer = createCustomRenderer();

/**
 * Universal content parser that recursively transforms strings, structured objects,
 * and arrays into clean semantic HTML without producing [object Object].
 */
export function renderUniversalContent(content) {
  if (content === null || content === undefined) return '';

  // 1. Markdown String (Standard)
  if (typeof content === 'string') {
    return marked.parse(content, {
      renderer: sharedRenderer,
      gfm: true,
      breaks: true,
    });
  }

  // 2. Arrays: map and recursively concatenate
  if (Array.isArray(content)) {
    return content.map((item) => renderUniversalContent(item)).join('');
  }

  // 3. Structured Objects: Polymorphically render according to fields
  if (typeof content === 'object' && content !== null) {
    let html = '';

    // Title / Heading
    const title = content.title || content.heading || content.name;
    if (title && typeof title === 'string') {
      html += `<h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-5 mb-2 flex items-center gap-2">${title}</h3>`;
    }

    // Description / Body text
    const desc = content.description || content.text || content.content || content.explanation || content.summary;
    if (desc) {
      html += renderUniversalContent(desc);
    }

    // Code / Syntax Snippet
    const code = content.code || content.syntax || content.example;
    if (code && typeof code === 'string') {
      html += `<div class="my-4 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-sm"><pre class="p-3.5 text-xs font-mono text-emerald-400 overflow-x-auto m-0 leading-relaxed"><code>${code}</code></pre></div>`;
    }

    // Points / Items / List
    const points = content.points || content.items || content.list || content.subpoints;
    if (Array.isArray(points) && points.length > 0) {
      html += `<ul class="list-disc list-outside space-y-2 my-3 text-sm text-slate-700 dark:text-slate-300 pl-5">`;
      for (const pt of points) {
        if (typeof pt === 'string') {
          html += `<li class="leading-relaxed"><span class="align-baseline">${pt}</span></li>`;
        } else if (typeof pt === 'object' && pt !== null) {
          const ptText = pt.text || pt.title || pt.content || pt.desc || pt.point || '';
          if (ptText) {
            html += `<li class="leading-relaxed"><span class="align-baseline">${ptText}</span></li>`;
          }
        }
      }
      html += `</ul>`;
    }

    // Sub-sections
    const subSections = content.subSections || content.sections || content.children;
    if (Array.isArray(subSections)) {
      html += renderUniversalContent(subSections);
    }

    // Fallback if no known keys were found
    if (!html) {
      const parts = [];
      for (const [k, v] of Object.entries(content)) {
        if (typeof v === 'string') {
          parts.push(`<p class="text-sm leading-relaxed text-slate-700 dark:text-slate-300 my-2.5"><strong class="font-bold text-slate-900 dark:text-white">${k}:</strong> ${v}</p>`);
        } else if (typeof v === 'object' && v !== null) {
          parts.push(renderUniversalContent(v));
        }
      }
      html = parts.join('');
    }

    return html;
  }

  return '';
}

/**
 * Universal Markdown & Content Renderer component.
 * Serves all Units, Chapters, Topics, and Sub-topics globally.
 */
export default function MarkdownRenderer({ content, className = '' }) {
  const containerRef = useRef(null);

  const html = useMemo(() => {
    return renderUniversalContent(content);
  }, [content]);

  // Client-side event delegation for markdown code block Copy buttons
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleCopyClick = (e) => {
      const btn = e.target.closest('.copy-code-button');
      if (!btn) return;

      const codeContainer = btn.closest('.rounded-2xl, .rounded-xl');
      if (!codeContainer) return;

      const codeEl = codeContainer.querySelector('pre code');
      if (!codeEl) return;

      const textToCopy = codeEl.innerText || codeEl.textContent || '';
      navigator.clipboard.writeText(textToCopy).then(() => {
        const textSpan = btn.querySelector('.btn-text');
        if (textSpan) {
          const original = textSpan.innerText;
          textSpan.innerText = 'Copied!';
          btn.classList.add('text-emerald-400');
          setTimeout(() => {
            textSpan.innerText = original;
            btn.classList.remove('text-emerald-400');
          }, 2000);
        }
      });
    };

    el.addEventListener('click', handleCopyClick);
    return () => el.removeEventListener('click', handleCopyClick);
  }, [html]);

  return (
    <div
      ref={containerRef}
      className={`markdown-content leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
