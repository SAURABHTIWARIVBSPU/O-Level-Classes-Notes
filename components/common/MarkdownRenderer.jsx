'use client';

import React, { useMemo } from 'react';
import { marked } from 'marked';

/**
 * Creates custom marked renderer configured with standard textbook typography tokens.
 * Supports both Marked v18 token object parameters and legacy signatures.
 */
function createCustomRenderer() {
  const renderer = new marked.Renderer();

  // Custom heading rendering
  renderer.heading = function (token, level) {
    const depth = typeof token === 'object' && token !== null ? (token.depth || 1) : (level || 1);
    const text = typeof token === 'object' && token !== null
      ? (this.parser ? this.parser.parseInline(token.tokens || []) : (token.text || ''))
      : (token || '');

    const headingSizes = {
      1: 'text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-6 mb-3 pb-2 border-b border-slate-200 dark:border-slate-800',
      2: 'text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-5 mb-2.5',
      3: 'text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2 flex items-center gap-2',
      4: 'text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mt-3 mb-1.5',
      5: 'text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-2 mb-1',
      6: 'text-xs font-semibold text-slate-600 dark:text-slate-400 mt-2 mb-1 uppercase tracking-wider',
    };
    const cls = headingSizes[depth] || headingSizes[3];
    return `<h${depth} class="${cls}">${text}</h${depth}>`;
  };

  // Custom paragraph rendering
  renderer.paragraph = function (token) {
    const text = typeof token === 'object' && token !== null
      ? (this.parser ? this.parser.parseInline(token.tokens || []) : (token.text || ''))
      : (token || '');
    return `<p class="text-sm leading-relaxed text-slate-700 dark:text-slate-300 my-2.5">${text}</p>`;
  };

  // Custom strong/bold rendering
  renderer.strong = function (token) {
    const text = typeof token === 'object' && token !== null
      ? (this.parser ? this.parser.parseInline(token.tokens || []) : (token.text || ''))
      : (token || '');
    return `<strong class="font-bold text-slate-900 dark:text-white">${text}</strong>`;
  };

  // Custom em/italic rendering
  renderer.em = function (token) {
    const text = typeof token === 'object' && token !== null
      ? (this.parser ? this.parser.parseInline(token.tokens || []) : (token.text || ''))
      : (token || '');
    return `<em class="italic text-slate-800 dark:text-slate-200">${text}</em>`;
  };

  // Custom inline code rendering
  renderer.codespan = function (token) {
    const text = typeof token === 'object' && token !== null ? (token.text || '') : (token || '');
    return `<code class="font-mono text-[12px] px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-semibold border border-slate-200 dark:border-slate-700/80">${text}</code>`;
  };

  // Custom code block rendering
  renderer.code = function (token, lang) {
    const code = typeof token === 'object' && token !== null ? (token.text || '') : (token || '');
    const language = typeof token === 'object' && token !== null ? (token.lang || '') : (lang || '');
    return `<div class="my-3 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-sm">
      ${language ? `<div class="px-3 py-1 bg-slate-900 border-b border-slate-800 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">${language}</div>` : ''}
      <pre class="p-3.5 text-xs font-mono text-emerald-400 overflow-x-auto m-0 leading-relaxed"><code>${code}</code></pre>
    </div>`;
  };

  // Custom list rendering
  renderer.list = function (token, ordered, start) {
    const isOrdered = typeof token === 'object' && token !== null ? token.ordered : ordered;
    const startNum = typeof token === 'object' && token !== null ? token.start : start;
    const type = isOrdered ? 'ol' : 'ul';
    const listCls = isOrdered
      ? 'list-decimal list-inside space-y-1.5 my-2.5 text-sm text-slate-700 dark:text-slate-300 pl-1'
      : 'list-disc list-inside space-y-1.5 my-2.5 text-sm text-slate-700 dark:text-slate-300 pl-1';

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

  // Custom list item rendering
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

  // Custom blockquote rendering
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
    return `<blockquote class="my-3 border-l-4 border-brand-500 bg-brand-50/50 dark:bg-brand-950/20 px-4 py-2.5 rounded-r-xl text-sm italic text-slate-700 dark:text-slate-300">${quote}</blockquote>`;
  };

  // Custom table rendering
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
    return `<div class="my-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
      <table class="min-w-full text-xs text-left">
        <thead class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 uppercase font-bold border-b border-slate-200 dark:border-slate-700">${headerHtml}</thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">${rowsHtml}</tbody>
      </table>
    </div>`;
  };

  renderer.tablerow = function (token) {
    const content = typeof token === 'object' && token !== null ? (token.text || '') : (token || '');
    return `<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">${content}</tr>`;
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
      ? 'px-3.5 py-2.5 text-[11px] font-bold tracking-wider'
      : 'px-3.5 py-2 text-slate-700 dark:text-slate-300';
    const alignAttr = align ? ` align="${align}"` : '';
    return `<${tag}${alignAttr} class="${cls}">${content}</${tag}>`;
  };

  // Custom link rendering
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
    return `<a href="${href}"${titleAttr} class="text-brand-600 dark:text-brand-400 font-semibold underline underline-offset-2 hover:text-brand-700" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
  };

  // Custom horizontal rule rendering
  renderer.hr = function () {
    return '<hr class="my-4 border-slate-200 dark:border-slate-800" />';
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
      html += `<h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2 flex items-center gap-2">${title}</h3>`;
    }

    // Description / Body text
    const desc = content.description || content.text || content.content || content.explanation || content.summary;
    if (desc) {
      html += renderUniversalContent(desc);
    }

    // Code / Syntax Snippet
    const code = content.code || content.syntax || content.example;
    if (code && typeof code === 'string') {
      html += `<div class="my-3 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-sm"><pre class="p-3.5 text-xs font-mono text-emerald-400 overflow-x-auto m-0 leading-relaxed"><code>${code}</code></pre></div>`;
    }

    // Points / Items / List
    const points = content.points || content.items || content.list || content.subpoints;
    if (Array.isArray(points) && points.length > 0) {
      html += `<ul class="list-disc list-inside space-y-1.5 my-2.5 text-sm text-slate-700 dark:text-slate-300 pl-1">`;
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
  const html = useMemo(() => {
    return renderUniversalContent(content);
  }, [content]);

  return (
    <div
      className={`markdown-content prose-headings:font-bold ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
