'use client';

import React, { useState, useEffect, useRef, useCallback, useId } from 'react';
import { Play, RotateCcw, Copy, Check, Eye, Maximize2, Minimize2 } from 'lucide-react';
import { Button, Segmented } from '@/components/ui';
import FullscreenPortal from '@/components/common/FullscreenPortal';

/**
 * The code playground: a plain textarea beside a sandboxed preview frame.
 *
 * Deliberately not an IDE. Students are marked on writing HTML by hand in the
 * practical exam, so the editor stays a text field with a monospace face and a
 * Run button — no autocomplete, no traffic lights, no chrome competing with the
 * code.
 *
 * Layout: below `sm` the split is useless (two 300px panes on a 320px screen),
 * so the panes become tabs — Code / Result — and only one is shown. Both panes
 * stay mounted either way: unmounting the iframe would throw away `srcdoc` and
 * blank the preview every time the tab changed.
 */
const PRESET_TEMPLATES = {
  html5: {
    name: 'HTML5 Starter Skeleton',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML5 Starter Demo</title>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background: #0f172a; color: white; padding: 25px; margin: 0; }
    h1 { color: #38bdf8; border-bottom: 2px solid #0284c7; padding-bottom: 8px; }
    .card { background: #1e293b; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); }
    .btn { background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; }
    .btn:hover { background: #0369a1; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Welcome to NIELIT O-Level M2-R5.1</h1>
    <p>This is a live sandboxed HTML5 environment. Edit anything and click Run!</p>
    <button class="btn" onclick="alert('Hello from Live Playground!')">Click to Test</button>
  </div>
</body>
</html>`
  },
  tables: {
    name: 'HTML Tables (Rowspan & Colspan)',
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    table { width: 100%; border-collapse: collapse; text-align: center; }
    th { background: #0284c7; color: white; padding: 10px; }
    td { border: 1px solid #cbd5e1; padding: 8px; }
    .break { background: #fef08a; font-weight: bold; }
  </style>
</head>
<body>
  <h2>O-Level Weekly Class Time Table</h2>
  <table>
    <tr>
      <th>Day</th>
      <th>09:00 - 10:30</th>
      <th>10:30 - 12:00</th>
      <th>12:00 - 01:00</th>
      <th>01:00 - 03:00</th>
    </tr>
    <tr>
      <td><b>Mon</b></td>
      <td>HTML Basics</td>
      <td>CSS Properties</td>
      <td rowspan="3" class="break">L<br>U<br>N<br>C<br>H</td>
      <td>Practical Lab</td>
    </tr>
    <tr>
      <td><b>Tue</b></td>
      <td>W3.CSS Grid</td>
      <td>Containers</td>
      <td>Responsive Lab</td>
    </tr>
    <tr>
      <td><b>Wed</b></td>
      <td>JavaScript</td>
      <td>DOM Events</td>
      <td>JS Coding</td>
    </tr>
    <tr>
      <td><b>Thu</b></td>
      <td colspan="4" style="background:#e0f2fe; font-weight:bold;">
        Full Revision & Quiz Session
      </td>
    </tr>
  </table>
</body>
</html>`
  },
  w3css: {
    name: 'W3.CSS 12-Column Responsive Grid',
    code: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body>
  <div class="w3-container w3-teal w3-center w3-padding-16">
    <h2>W3.CSS 12-Column Grid Demo</h2>
    <p>Resize your preview screen to see responsive behavior!</p>
  </div>

  <div class="w3-row-padding w3-margin-top">
    <div class="w3-col s12 m4">
      <div class="w3-card-4 w3-padding w3-light-grey">
        <h3>M1-R5.1</h3>
        <p>Information Technology Tools</p>
        <button class="w3-button w3-blue w3-round">View Course</button>
      </div>
    </div>
    <div class="w3-col s12 m4">
      <div class="w3-card-4 w3-padding w3-pale-green">
        <h3>M2-R5.1</h3>
        <p>Web Designing & Publishing</p>
        <button class="w3-button w3-teal w3-round">View Course</button>
      </div>
    </div>
    <div class="w3-col s12 m4">
      <div class="w3-card-4 w3-padding w3-pale-yellow">
        <h3>M3-R5.1</h3>
        <p>Python Programming</p>
        <button class="w3-button w3-amber w3-round">View Course</button>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  jsValidation: {
    name: 'JavaScript Form Validation',
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; background: #f8fafc; padding: 20px; }
    .box { max-width: 380px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    input { width: 100%; padding: 8px; margin-top: 4px; box-sizing: border-box; border: 1px solid #cbd5e1; border-radius: 4px; }
    .err { color: #dc2626; font-size: 12px; margin-top: 4px; }
    .btn { width: 100%; background: #0284c7; color: white; border: none; padding: 10px; border-radius: 4px; margin-top: 15px; cursor: pointer; }
  </style>
</head>
<body>
  <div class="box">
    <h3 style="margin-top:0;">Student Registration</h3>
    <form onsubmit="return validateForm()">
      <div>
        <label>Full Name:</label>
        <input type="text" id="uname" placeholder="Enter name">
        <div id="errName" class="err"></div>
      </div>
      <div style="margin-top:10px;">
        <label>Mobile (10 Digits):</label>
        <input type="text" id="uphone" placeholder="9876543210">
        <div id="errPhone" class="err"></div>
      </div>
      <button type="submit" class="btn">Submit Form</button>
    </form>
  </div>

  <script>
    function validateForm() {
      var name = document.getElementById("uname").value.trim();
      var phone = document.getElementById("uphone").value.trim();
      var isValid = true;

      document.getElementById("errName").innerText = "";
      document.getElementById("errPhone").innerText = "";

      if (name === "") {
        document.getElementById("errName").innerText = "Name is required!";
        isValid = false;
      }
      if (phone === "" || isNaN(phone) || phone.length !== 10) {
        document.getElementById("errPhone").innerText = "Valid 10-digit mobile number required!";
        isValid = false;
      }

      if (isValid) {
        alert("Form validated successfully! Sending to server.");
      }
      return false; // Prevent page reload in playground
    }
  </script>
</body>
</html>`
  },
  angularjs: {
    name: 'AngularJS Two-Way Data Binding',
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <style>
    body { font-family: sans-serif; padding: 25px; background: #f0f9ff; }
    .card { background: white; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    input { width: 100%; padding: 8px; border: 1px solid #bae6fd; border-radius: 4px; box-sizing: border-box; }
    .highlight { color: #0284c7; font-weight: bold; }
  </style>
</head>
<body ng-app="" ng-init="course='M2-R5.1'; hours=120">
  <div class="card">
    <h2>AngularJS Live 2-Way Binding</h2>
    <label>Candidate Name:</label>
    <input type="text" ng-model="candidateName" placeholder="Type name here...">
    
    <div style="margin-top:20px; padding:15px; background:#e0f2fe; border-radius:6px;">
      <p>Hello, <span class="highlight">{{ candidateName || 'Guest' }}</span>!</p>
      <p>Enrolled Module: <span class="highlight">{{ course }}</span></p>
      <p>Total Duration: <span class="highlight">{{ hours }} Hours</span></p>
    </div>
  </div>
</body>
</html>`
  }
};

const VIEW_OPTIONS_WIDE = [
  { value: 'code', label: 'Code' },
  { value: 'preview', label: 'Result' },
  { value: 'split', label: 'Split' },
];
const VIEW_OPTIONS_NARROW = VIEW_OPTIONS_WIDE.slice(0, 2);

export default function SandboxEditor({ initialCode, initialTemplate = 'html5' }) {
  // An unknown key would crash the editor; the host page already guards, this
  // is the belt to that pair of braces.
  const startKey = PRESET_TEMPLATES[initialTemplate] ? initialTemplate : 'html5';

  const [templateKey, setTemplateKey] = useState(startKey);
  const [code, setCode] = useState(initialCode || PRESET_TEMPLATES[startKey].code);
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [view, setView] = useState('split'); // 'split' | 'code' | 'preview'
  const [narrow, setNarrow] = useState(false);

  const iframeRef = useRef(null);
  const shellRef = useRef(null);
  const fullscreenButtonRef = useRef(null);
  const copyTimer = useRef(null);
  const wasFullscreen = useRef(false);

  // Latest code without making `runCode` a new function on every keystroke.
  const codeRef = useRef(code);
  codeRef.current = code;

  const codeLabelId = useId();

  const runCode = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = codeRef.current;
    }
  }, []);

  /* --------------------------------------------------------------- effects */

  // Render once on mount.
  useEffect(() => {
    runCode();
  }, [runCode]);

  // Re-render after a fullscreen transition: the portal moves the frame in the
  // DOM, which drops whatever it was showing.
  useEffect(() => {
    const timer = setTimeout(runCode, 50);
    return () => clearTimeout(timer);
  }, [isFullscreen, runCode]);

  // Below `sm` the split view has nowhere to go, so the control offers two
  // options instead of three and 'split' resolves to the code pane.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639.98px)');
    const apply = () => setNarrow(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  // Fullscreen is a modal layer: Escape closes it, focus moves into it on open
  // and returns to the button that opened it on close.
  useEffect(() => {
    if (!isFullscreen) return undefined;
    wasFullscreen.current = true;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsFullscreen(false);
    };
    document.addEventListener('keydown', onKeyDown);

    const focusTimer = setTimeout(() => shellRef.current?.focus(), 0);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      clearTimeout(focusTimer);
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (isFullscreen || !wasFullscreen.current) return;
    wasFullscreen.current = false;
    fullscreenButtonRef.current?.focus();
  }, [isFullscreen]);

  /* --------------------------------------------------------------- actions */

  const handleTemplateChange = (key) => {
    const preset = PRESET_TEMPLATES[key];
    if (!preset) return;
    setTemplateKey(key);
    setCode(preset.code);
    if (iframeRef.current) {
      iframeRef.current.srcdoc = preset.code;
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked (http, permissions) — the button simply does nothing */
    }
  };

  const handleReset = () => {
    setTemplateKey(startKey);
    setCode(PRESET_TEMPLATES[startKey].code);
    if (iframeRef.current) {
      iframeRef.current.srcdoc = PRESET_TEMPLATES[startKey].code;
    }
  };

  /* ---------------------------------------------------------------- layout */

  const effectiveView = narrow && view === 'split' ? 'code' : view;
  const isSplit = view === 'split';

  const codePane = view === 'preview' ? 'hidden' : 'flex';
  const previewPane = view === 'preview' ? 'flex' : isSplit ? 'hidden sm:flex' : 'hidden';

  return (
    <FullscreenPortal
      isOpen={isFullscreen}
      onClose={() => setIsFullscreen(false)}
      toolName="code-playground"
    >
      <div
        ref={shellRef}
        tabIndex={isFullscreen ? -1 : undefined}
        className={
          isFullscreen
            ? 'flex h-full w-full flex-col overflow-hidden bg-surface'
            : 'panel overflow-hidden'
        }
      >
        {/* ---------------------------------------------------- action bar */}
        <div className="flex shrink-0 flex-wrap items-center gap-2 border-b border-line bg-surface px-3 py-2 sm:px-4">
          <div className="flex min-w-0 items-center gap-2">
            <span className="eyebrow hidden sm:inline" aria-hidden="true">
              Preset
            </span>
            <select
              aria-label="Starting template"
              value={templateKey}
              onChange={(e) => handleTemplateChange(e.target.value)}
              className="input w-auto max-w-[13rem] text-sm sm:max-w-none"
            >
              {Object.entries(PRESET_TEMPLATES).map(([key, t]) => (
                <option key={key} value={key}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          <Segmented
            ariaLabel="Editor view"
            options={narrow ? VIEW_OPTIONS_NARROW : VIEW_OPTIONS_WIDE}
            value={effectiveView}
            onChange={setView}
          />

          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            <Button
              variant="primary"
              icon={Play}
              onClick={runCode}
              aria-label="Run the code"
              title="Run the code (Ctrl + Enter)"
            >
              Run
            </Button>

            <Button
              variant="secondary"
              icon={copied ? Check : Copy}
              onClick={handleCopy}
              aria-label={copied ? 'Code copied to clipboard' : 'Copy code to clipboard'}
              title="Copy code"
            >
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </Button>

            <Button
              variant="secondary"
              iconOnly
              icon={RotateCcw}
              onClick={handleReset}
              aria-label="Reset the editor to the starting template"
              title="Reset to the starting template"
            />

            <button
              type="button"
              ref={fullscreenButtonRef}
              onClick={() => setIsFullscreen((v) => !v)}
              className="btn btn-secondary btn-icon"
              aria-label={isFullscreen ? 'Exit fullscreen editor' : 'Open the editor fullscreen'}
              title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen editor'}
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* ------------------------------------------------ editor + result */}
        <div
          className={`grid ${isSplit ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} ${
            isFullscreen ? 'min-h-0 flex-1' : 'min-h-[460px]'
          }`}
        >
          {/* Code */}
          <section aria-label="Code editor" className={`${codePane} min-h-0 min-w-0 flex-col bg-sunken`}>
            <div className="flex shrink-0 items-center justify-between gap-2 border-b border-line bg-surface px-3.5 py-2">
              <span id={codeLabelId} className="code-block__lang">
                HTML / CSS / JS
              </span>
              <span className="text-2xs text-ink-3">Ctrl + Enter runs</span>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={(e) => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                  e.preventDefault();
                  runCode();
                }
              }}
              aria-labelledby={codeLabelId}
              placeholder="Type your HTML, CSS and JavaScript here…"
              className="min-h-[300px] w-full flex-1 resize-none bg-transparent p-4 font-mono text-sm leading-relaxed text-ink placeholder:text-ink-4"
              spellCheck="false"
            />
          </section>

          {/* Result */}
          <section
            aria-label="Live preview"
            className={`${previewPane} min-h-0 min-w-0 flex-col ${
              isSplit ? 'border-t border-line sm:border-l sm:border-t-0' : ''
            }`}
          >
            <div className="flex shrink-0 items-center justify-between gap-2 border-b border-line bg-surface px-3.5 py-2">
              <span className="code-block__lang inline-flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                Live result
              </span>
              <span className="text-2xs text-ink-3">Sandboxed frame</span>
            </div>
            {/* `allow-scripts` without `allow-same-origin`: student code runs,
                but it cannot reach this page's DOM, storage or cookies.
                `allow-modals` is what keeps alert() and confirm() working, which
                the exam questions rely on. The frame stays white because the
                page inside it is the student's document, not our chrome. */}
            <iframe
              ref={iframeRef}
              title="Live preview of your code"
              sandbox="allow-scripts allow-modals"
              className="h-full min-h-[300px] w-full flex-1 border-0 bg-white"
            />
          </section>
        </div>
      </div>
    </FullscreenPortal>
  );
}
