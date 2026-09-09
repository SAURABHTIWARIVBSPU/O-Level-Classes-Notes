/**
 * Dependency-free syntax highlighter.
 *
 * Ships ~3KB instead of the 40KB+ a Prism/Shiki build would add, which matters
 * because code blocks appear on almost every notes page. Handles the four
 * languages the syllabus actually uses: HTML, CSS, JavaScript and SQL, plus a
 * plain fallback. HTML recurses into <style> and <script> so the embedded CSS
 * and JS in the unit examples are highlighted too.
 *
 * Output is always HTML-escaped before any markup is added.
 */

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

export function escapeHtml(str = '') {
  return String(str).replace(/[&<>"]/g, (c) => ESCAPES[c]);
}

const wrap = (cls, text) => `<span class="tok-${cls}">${escapeHtml(text)}</span>`;

/* ---------------------------------------------------------------- grammars */

const JS_KEYWORDS =
  /^(?:const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|new|class|extends|super|this|typeof|instanceof|in|of|try|catch|finally|throw|async|await|yield|import|from|export|default|delete|void|null|undefined|true|false|NaN)\b/;

const jsGrammar = [
  { cls: 'com', re: /\/\*[\s\S]*?\*\/|\/\/[^\n]*/y },
  { cls: 'str', re: /`(?:\\[\s\S]|[^\\`])*`|"(?:\\.|[^\\"])*"|'(?:\\.|[^\\'])*'/y },
  { cls: 'num', re: /\b(?:0[xX][\da-fA-F]+|\d+\.?\d*(?:[eE][+-]?\d+)?)\b/y },
  { cls: 'kw', re: JS_KEYWORDS, sticky: false },
  { cls: 'fn', re: /[A-Za-z_$][\w$]*(?=\s*\()/y },
  { cls: 'punc', re: /[{}()[\];,.]/y },
];

const cssGrammar = [
  { cls: 'com', re: /\/\*[\s\S]*?\*\//y },
  { cls: 'str', re: /"(?:\\.|[^\\"])*"|'(?:\\.|[^\\'])*'/y },
  { cls: 'sel', re: /@[\w-]+|[.#][\w-]+|::?[\w-]+/y },
  { cls: 'prop', re: /\b[a-z-]+(?=\s*:)/y },
  { cls: 'num', re: /-?\b\d+\.?\d*(?:px|rem|em|%|vh|vw|s|ms|deg|fr|ch|pt)?\b|#[\da-fA-F]{3,8}\b/y },
  { cls: 'punc', re: /[{}();:,]/y },
];

const sqlGrammar = [
  { cls: 'com', re: /--[^\n]*|\/\*[\s\S]*?\*\//y },
  { cls: 'str', re: /'(?:''|[^'])*'/y },
  {
    cls: 'kw',
    re: /^(?:SELECT|FROM|WHERE|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|DATABASE|ALTER|DROP|PRIMARY|FOREIGN|KEY|NOT|NULL|JOIN|INNER|LEFT|RIGHT|OUTER|ON|GROUP|ORDER|BY|HAVING|AS|AND|OR|DISTINCT|LIMIT|INDEX|VIEW|UNION|LIKE|BETWEEN|IN|EXISTS|COUNT|SUM|AVG|MIN|MAX|INT|VARCHAR|CHAR|DATE|TEXT|DEFAULT|AUTO_INCREMENT|CONSTRAINT|REFERENCES)\b/iy,
  },
  { cls: 'num', re: /\b\d+\.?\d*\b/y },
  { cls: 'punc', re: /[(),;*]/y },
];

/* ------------------------------------------------------------ generic scan */

function scan(code, grammar) {
  let out = '';
  let pos = 0;
  const len = code.length;

  while (pos < len) {
    let matched = false;

    for (const rule of grammar) {
      let text = null;

      if (rule.sticky === false) {
        // Keyword rules are anchored with ^ against the remaining slice, and
        // must start on a word boundary so `letters` is not read as `let`.
        if (pos > 0 && /[\w$]/.test(code[pos - 1])) continue;
        const m = rule.re.exec(code.slice(pos));
        if (m) text = m[0];
      } else {
        rule.re.lastIndex = pos;
        const m = rule.re.exec(code);
        if (m && m.index === pos) text = m[0];
      }

      if (text) {
        out += wrap(rule.cls, text);
        pos += text.length;
        matched = true;
        break;
      }
    }

    if (!matched) {
      out += escapeHtml(code[pos]);
      pos += 1;
    }
  }

  return out;
}

/* ----------------------------------------------------------------- markup */

function highlightAttributes(raw) {
  // raw is everything between the tag name and the closing bracket
  let out = '';
  let pos = 0;
  const attr = /[\w:@.-]+(?=\s*=)|[\w:@.-]+/y;
  const str = /"(?:[^"]*)"|'(?:[^']*)'/y;

  while (pos < raw.length) {
    str.lastIndex = pos;
    const s = str.exec(raw);
    if (s && s.index === pos) {
      out += wrap('str', s[0]);
      pos += s[0].length;
      continue;
    }
    attr.lastIndex = pos;
    const a = attr.exec(raw);
    if (a && a.index === pos) {
      out += wrap('att', a[0]);
      pos += a[0].length;
      continue;
    }
    out += escapeHtml(raw[pos]);
    pos += 1;
  }
  return out;
}

function highlightMarkup(code) {
  let out = '';
  let pos = 0;

  const comment = /<!--[\s\S]*?-->/y;
  const doctype = /<!DOCTYPE[^>]*>/iy;
  const embedded = /<(style|script)([^>]*)>([\s\S]*?)<\/\1\s*>/iy;
  const tag = /<\/?([a-zA-Z][\w:-]*)((?:[^>"']|"[^"]*"|'[^']*')*)(\/?)>/y;

  while (pos < code.length) {
    if (code[pos] === '<') {
      comment.lastIndex = pos;
      const c = comment.exec(code);
      if (c && c.index === pos) {
        out += wrap('com', c[0]);
        pos += c[0].length;
        continue;
      }

      doctype.lastIndex = pos;
      const d = doctype.exec(code);
      if (d && d.index === pos) {
        out += wrap('kw', d[0]);
        pos += d[0].length;
        continue;
      }

      embedded.lastIndex = pos;
      const e = embedded.exec(code);
      if (e && e.index === pos) {
        const [full, name, attrs, body] = e;
        const inner = name.toLowerCase() === 'style' ? scan(body, cssGrammar) : scan(body, jsGrammar);
        out +=
          `${wrap('tag', `<${name}`)}${highlightAttributes(attrs)}${wrap('tag', '>')}` +
          inner +
          wrap('tag', `</${name}>`);
        pos += full.length;
        continue;
      }

      tag.lastIndex = pos;
      const t = tag.exec(code);
      if (t && t.index === pos) {
        const [full, , attrs, selfClose] = t;
        const open = full.startsWith('</') ? `</${t[1]}` : `<${t[1]}`;
        out += wrap('tag', open) + highlightAttributes(attrs) + wrap('tag', `${selfClose}>`);
        pos += full.length;
        continue;
      }
    }

    out += escapeHtml(code[pos]);
    pos += 1;
  }

  return out;
}

/* -------------------------------------------------------------- normalise */

const ALIASES = {
  html: 'markup', htm: 'markup', xml: 'markup', markup: 'markup', jsx: 'markup',
  css: 'css', scss: 'css', w3css: 'css',
  js: 'js', javascript: 'js', json: 'js', ts: 'js', typescript: 'js', angularjs: 'js',
  sql: 'sql', mysql: 'sql',
};

export function normaliseLanguage(lang = '') {
  return ALIASES[String(lang).trim().toLowerCase()] || null;
}

/**
 * @param {string} code  raw source
 * @param {string} lang  language hint (html, css, js, sql, …)
 * @returns {string} HTML-safe string with <span class="tok-*"> markup
 */
export function highlight(code = '', lang = '') {
  const source = String(code);
  const kind = normaliseLanguage(lang);

  try {
    switch (kind) {
      case 'markup': return highlightMarkup(source);
      case 'css': return scan(source, cssGrammar);
      case 'js': return scan(source, jsGrammar);
      case 'sql': return scan(source, sqlGrammar);
      default: {
        // No hint: guess from shape rather than giving up entirely.
        if (/^\s*<(!DOCTYPE|html|\w)/i.test(source)) return highlightMarkup(source);
        if (/[.#]?[\w-]+\s*\{[^}]*:[^}]*;/.test(source)) return scan(source, cssGrammar);
        if (/\b(function|const|let|var|=>)\b/.test(source)) return scan(source, jsGrammar);
        return escapeHtml(source);
      }
    }
  } catch {
    // Highlighting must never break a page — fall back to plain escaped text.
    return escapeHtml(source);
  }
}

export const LANGUAGE_LABELS = {
  markup: 'HTML',
  html: 'HTML',
  css: 'CSS',
  js: 'JavaScript',
  javascript: 'JavaScript',
  sql: 'SQL',
  bash: 'Terminal',
  text: 'Text',
};

export function languageLabel(lang) {
  if (!lang) return 'Code';
  const key = String(lang).trim().toLowerCase();
  return LANGUAGE_LABELS[key] || key.toUpperCase();
}
