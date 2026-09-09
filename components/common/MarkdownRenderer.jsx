'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import { marked } from 'marked';
import { highlight, escapeHtml, languageLabel } from '@/lib/highlight';

/**
 * Renders note bodies — markdown strings, and the structured objects some data
 * files use — into semantic HTML.
 *
 * The important change from the previous version: this emits **plain semantic
 * elements**. All typography, spacing, colour and rhythm come from the
 * `.prose-notes` rules in globals.css. Previously every element carried its own
 * hard-coded `slate-*` / `dark:*` utility soup, which meant the reading
 * experience could never be tuned in one place and always fought the design
 * system. Only structures with no HTML equivalent (callouts, the code block
 * chrome, the table scroller) get class names, and those class names are
 * design-system classes, not ad-hoc utilities.
 */

/* ----------------------------------------------------------------- slugify */

export function slugify(text = '') {
  return String(text)
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/[^\wऀ-ॿ\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
}

/* ------------------------------------------------------------ callout rules
   Authors write callouts as blockquotes with a leading marker. Keeping the
   detection in one table makes the vocabulary visible and easy to extend. */

const CALLOUT_RULES = [
  { kind: 'exam',      label: 'Exam point',     re: /^(\[!EXAM\]|\*\*Exam[^:*]*:?\*\*|Exam Point:|Exam Tip:)/i },
  { kind: 'tip',       label: 'Tip',            re: /^(\[!TIP\]|\*\*Tip:?\*\*|Tip:)/i },
  { kind: 'warning',   label: 'Watch out',      re: /^(\[!WARNING\]|\[!CAUTION\]|\*\*Warning:?\*\*|Warning:|\*\*Caution:?\*\*|Caution:)/i },
  { kind: 'danger',    label: 'Common mistake', re: /^(\[!DANGER\]|\*\*Common Mistake:?\*\*|Common Mistake:|\*\*Pitfall:?\*\*|Pitfall:)/i },
  { kind: 'important', label: 'Important',      re: /^(\[!IMPORTANT\]|\*\*Important:?\*\*|Important:|\*\*Golden Point:?\*\*|Golden Point:)/i },
  { kind: 'analogy',   label: 'In plain terms', re: /^(\[!ANALOGY\]|\*\*Analogy:?\*\*|Analogy:|\*\*Think of it:?\*\*)/i },
  { kind: 'note',      label: 'Note',           re: /^(\[!NOTE\]|\*\*Note:?\*\*|Note:)/i },
];

/* Inline SVGs — the renderer produces an HTML string, so it cannot use the
   React icon components the rest of the app uses. Paths match lucide. */
const CALLOUT_ICONS = {
  note: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  tip: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  important: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  warning: '<path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  danger: '<path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1 1 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
  exam: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  analogy: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
};

function calloutHtml(kind, label, bodyHtml) {
  const icon = CALLOUT_ICONS[kind] || CALLOUT_ICONS.note;
  return (
    `<aside class="callout callout-${kind}">` +
    `<svg class="callout__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icon}</svg>` +
    `<div class="callout__body"><span class="callout__label">${label}</span>${bodyHtml}</div>` +
    `</aside>`
  );
}

/* --------------------------------------------------------- heading offset
   Authors write `###` as their top level in some files and `##` in others.
   Emitting those depths literally produces h2 → h4 jumps under the page's own
   heading. Normalising the shallowest heading in a document to <h3> keeps the
   outline valid wherever the content came from. Set synchronously immediately
   before marked.parse, which is synchronous too. */

let headingOffset = 0;

function computeHeadingOffset(markdown) {
  const depths = [];
  const re = /^(#{1,6})\s+\S/gm;
  let m;
  while ((m = re.exec(markdown)) !== null) depths.push(m[1].length);
  if (!depths.length) return 0;
  return 3 - Math.min(...depths); // shallowest heading becomes h3
}

/* ---------------------------------------------------------------- renderer */

function createRenderer() {
  const renderer = new marked.Renderer();

  // marked v18 passes token objects; older signatures pass primitives. Both
  // shapes appear across this project's data, so normalise once.
  const inline = function (token, fallback) {
    if (typeof token === 'object' && token !== null) {
      return this.parser ? this.parser.parseInline(token.tokens || []) : (token.text || '');
    }
    return token ?? fallback ?? '';
  };

  renderer.heading = function (token, level) {
    const depth = typeof token === 'object' && token !== null ? (token.depth || 1) : (level || 1);
    const text = inline.call(this, token);
    // Never emit an h1 inside a note body — the page owns the h1.
    const tag = `h${Math.min(Math.max(depth + headingOffset, 2), 5)}`;
    const id = slugify(typeof token === 'object' ? token.text : text);
    return `<${tag} id="${id}">${text}</${tag}>`;
  };

  renderer.paragraph = function (token) {
    return `<p>${inline.call(this, token)}</p>`;
  };

  renderer.strong = function (token) {
    return `<strong>${inline.call(this, token)}</strong>`;
  };

  renderer.em = function (token) {
    return `<em>${inline.call(this, token)}</em>`;
  };

  renderer.codespan = function (token) {
    const text = typeof token === 'object' && token !== null ? (token.text || '') : (token || '');
    return `<code>${escapeHtml(text)}</code>`;
  };

  renderer.code = function (token, lang) {
    const raw = typeof token === 'object' && token !== null ? (token.text || '') : (token || '');
    const language = typeof token === 'object' && token !== null ? (token.lang || '') : (lang || '');
    return (
      `<figure class="code-block">` +
      `<figcaption class="code-block__bar">` +
      `<span class="code-block__lang">${escapeHtml(languageLabel(language))}</span>` +
      `<button type="button" class="code-block__copy" data-copy aria-label="Copy code to clipboard">` +
      `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">` +
      `<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>` +
      `<span data-copy-label>Copy</span></button>` +
      `</figcaption>` +
      `<pre tabindex="0"><code>${highlight(raw, language)}</code></pre>` +
      `</figure>`
    );
  };

  renderer.list = function (token, ordered, start) {
    const isOrdered = typeof token === 'object' && token !== null ? token.ordered : ordered;
    const startNum = typeof token === 'object' && token !== null ? token.start : start;
    const tag = isOrdered ? 'ol' : 'ul';

    let body = '';
    if (typeof token === 'object' && token !== null && Array.isArray(token.items)) {
      for (const item of token.items) body += this.listitem(item);
    } else if (typeof token === 'string') {
      body = token;
    }

    const startAttr = isOrdered && startNum && startNum !== 1 ? ` start="${startNum}"` : '';
    return `<${tag}${startAttr}>${body}</${tag}>`;
  };

  renderer.listitem = function (token) {
    let text = '';
    if (typeof token === 'object' && token !== null) {
      text = this.parser ? this.parser.parse(token.tokens || [], !!token.loose) : (token.text || '');
      // A single paragraph inside a tight list item adds a wrapper for nothing
      if (!token.loose) text = text.replace(/^<p>/, '').replace(/<\/p>\s*$/, '');
      if (token.task) {
        const checked = token.checked ? ' checked' : '';
        return `<li class="task"><input type="checkbox" disabled${checked} /> ${text}</li>`;
      }
    } else {
      text = token || '';
    }
    return `<li>${text}</li>`;
  };

  renderer.blockquote = function (token) {
    let html = '';
    let raw = '';
    if (typeof token === 'object' && token !== null) {
      html = this.parser ? this.parser.parse(token.tokens || []) : (token.text || '');
      raw = token.text || '';
    } else {
      html = token || '';
      raw = String(token || '').replace(/<[^>]*>/g, '');
    }

    const trimmed = raw.trim();
    for (const rule of CALLOUT_RULES) {
      if (rule.re.test(trimmed)) {
        // Strip the marker from the rendered HTML, not the raw text, so inline
        // formatting inside the body survives.
        const cleaned = html.replace(
          new RegExp(`(<p>\\s*)(<strong>)?\\s*${rule.re.source.replace(/^\^\(|\)$/g, '')}\\s*(</strong>)?\\s*`, 'i'),
          '$1',
        );
        return calloutHtml(rule.kind, rule.label, cleaned);
      }
    }

    return calloutHtml('note', 'Note', html);
  };

  /* Tables: wrapped so they scroll inside their own box instead of pushing the
     page sideways. Styling comes from `.table-wrap` in globals.css. */
  renderer.table = function (token) {
    let head = '';
    let body = '';
    if (typeof token === 'object' && token !== null && Array.isArray(token.header)) {
      let cells = '';
      for (const cell of token.header) cells += this.tablecell(cell);
      head = `<tr>${cells}</tr>`;
      for (const row of token.rows || []) {
        let rowCells = '';
        for (const cell of row) rowCells += this.tablecell(cell);
        body += `<tr>${rowCells}</tr>`;
      }
    }
    return `<div class="table-wrap"><div class="table-scroll" tabindex="0"><table><thead>${head}</thead><tbody>${body}</tbody></table></div></div>`;
  };

  renderer.tablerow = function (token) {
    const content = typeof token === 'object' && token !== null ? (token.text || '') : (token || '');
    return `<tr>${content}</tr>`;
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
    const scope = isHeader ? ' scope="col"' : '';
    const alignAttr = align ? ` style="text-align:${align}"` : '';
    return `<${tag}${scope}${alignAttr}>${content}</${tag}>`;
  };

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
    const external = /^https?:\/\//i.test(href);
    return (
      `<a href="${escapeHtml(href)}"` +
      (linkTitle ? ` title="${escapeHtml(linkTitle)}"` : '') +
      (external ? ' target="_blank" rel="noopener noreferrer"' : '') +
      `>${linkText}</a>`
    );
  };

  renderer.hr = () => '<hr />';

  return renderer;
}

const sharedRenderer = createRenderer();

/* ------------------------------------------------- structured-object bridge
   Some datasets store a note as an object rather than a markdown string. This
   maps those shapes onto the same semantic HTML so both render identically. */

export function renderUniversalContent(content) {
  if (content === null || content === undefined) return '';

  if (typeof content === 'string') {
    headingOffset = computeHeadingOffset(content);
    return marked.parse(content, { renderer: sharedRenderer, gfm: true, breaks: true });
  }

  if (Array.isArray(content)) {
    return content.map(renderUniversalContent).join('');
  }

  if (typeof content === 'object') {
    let html = '';

    const title = content.title || content.heading || content.name;
    if (title && typeof title === 'string') {
      html += `<h3 id="${slugify(title)}">${escapeHtml(title)}</h3>`;
    }

    const desc = content.description || content.text || content.content || content.explanation || content.summary;
    if (desc) html += renderUniversalContent(desc);

    const code = content.code || content.syntax || content.example;
    if (code && typeof code === 'string') {
      html += sharedRenderer.code({ text: code, lang: content.language || '' });
    }

    const points = content.points || content.items || content.list || content.subpoints;
    if (Array.isArray(points) && points.length) {
      html += '<ul>';
      for (const pt of points) {
        if (typeof pt === 'string') html += `<li>${pt}</li>`;
        else if (pt && typeof pt === 'object') {
          const t = pt.text || pt.title || pt.content || pt.desc || pt.point || '';
          if (t) html += `<li>${t}</li>`;
        }
      }
      html += '</ul>';
    }

    const sub = content.subSections || content.sections || content.children;
    if (Array.isArray(sub)) html += renderUniversalContent(sub);

    if (!html) {
      for (const [k, v] of Object.entries(content)) {
        if (typeof v === 'string') html += `<p><strong>${escapeHtml(k)}:</strong> ${v}</p>`;
        else if (v && typeof v === 'object') html += renderUniversalContent(v);
      }
    }

    return html;
  }

  return '';
}

/** Heading list for a table of contents, without rendering the content twice. */
export function extractHeadings(content, maxDepth = 4) {
  if (typeof content !== 'string') return [];
  const offset = computeHeadingOffset(content);
  const out = [];
  const re = /^(#{1,6})\s+(.+)$/gm;
  let m;
  while ((m = re.exec(content)) !== null) {
    const depth = Math.min(Math.max(m[1].length + offset, 2), 5);
    if (depth > maxDepth) continue;
    const text = m[2].replace(/[*_`]/g, '').trim();
    out.push({ id: slugify(text), text, depth });
  }
  return out;
}

/* -------------------------------------------------------------- component */

export default function MarkdownRenderer({ content, className = '' }) {
  const ref = useRef(null);
  const html = useMemo(() => renderUniversalContent(content), [content]);

  // One delegated listener for every copy button in the rendered tree.
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const onClick = async (e) => {
      const btn = e.target.closest('[data-copy]');
      if (!btn) return;
      const code = btn.closest('.code-block')?.querySelector('pre code');
      if (!code) return;

      try {
        await navigator.clipboard.writeText(code.innerText || code.textContent || '');
        const label = btn.querySelector('[data-copy-label]');
        if (!label) return;
        const original = label.textContent;
        label.textContent = 'Copied';
        setTimeout(() => { label.textContent = original; }, 1800);
      } catch {
        /* clipboard unavailable (insecure origin / denied) — no-op */
      }
    };

    el.addEventListener('click', onClick);
    return () => el.removeEventListener('click', onClick);
  }, [html]);

  if (!html) return null;

  return <div ref={ref} className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
