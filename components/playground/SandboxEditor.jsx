'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Copy, Check, ExternalLink, Code2, Eye, Maximize2, Minimize2, Smartphone, Monitor } from 'lucide-react';
import FullscreenPortal from '@/components/common/FullscreenPortal';

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

export default function SandboxEditor({ initialCode, initialTemplate = 'html5' }) {
  const [code, setCode] = useState(initialCode || PRESET_TEMPLATES[initialTemplate].code);
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef(null);

  const runCode = () => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = code;
    }
  };

  // Run on mount and code changes
  useEffect(() => {
    runCode();
  }, []);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState('split'); // 'split' | 'code' | 'preview'

  // Ensure iframe renders code when entering or exiting fullscreen
  useEffect(() => {
    const timer = setTimeout(() => {
      runCode();
    }, 50);
    return () => clearTimeout(timer);
  }, [isFullscreen]);

  const handleTemplateChange = (key) => {
    setCode(PRESET_TEMPLATES[key].code);
    if (iframeRef.current) {
      iframeRef.current.srcdoc = PRESET_TEMPLATES[key].code;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(PRESET_TEMPLATES[initialTemplate].code);
    if (iframeRef.current) {
      iframeRef.current.srcdoc = PRESET_TEMPLATES[initialTemplate].code;
    }
  };

  return (
    <FullscreenPortal 
      isOpen={isFullscreen} 
      onClose={() => setIsFullscreen(false)} 
      toolName="code-playground"
    >
      <div className={`transition-all ${
        isFullscreen 
          ? 'w-full h-full flex flex-col bg-white dark:bg-slate-900 rounded-none border-none p-0 overflow-hidden' 
          : 'border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-slate-900'
      }`}>
      
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        
        {/* Preset Selector */}
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-brand-600" />
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 hidden sm:inline">Preset:</span>
          <select
            onChange={(e) => handleTemplateChange(e.target.value)}
            className="text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-500"
          >
            {Object.entries(PRESET_TEMPLATES).map(([key, t]) => (
              <option key={key} value={key}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        {/* View Mode Toggle for Small Screens */}
        <div className="flex lg:hidden items-center bg-slate-200 dark:bg-slate-800 p-0.5 rounded-lg text-xs font-bold">
          <button
            onClick={() => setActiveTab('code')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'code' ? 'bg-white dark:bg-slate-900 text-brand-600 shadow-xs' : 'text-slate-500'
            }`}
          >
            Editor
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'preview' ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-xs' : 'text-slate-500'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('split')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'split' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-xs' : 'text-slate-500'
            }`}
          >
            Split
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={runCode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-sm transition-colors"
            title="Execute code in preview (Ctrl+Enter)"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Run</span>
          </button>
          
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
            title="Reset to default template"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Editor'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>

      {/* Editor & Preview Split View */}
      <div className={`grid ${
        activeTab === 'code'
          ? 'grid-cols-1'
          : activeTab === 'preview'
          ? 'grid-cols-1'
          : 'grid-cols-1 lg:grid-cols-2'
      } divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800 ${
        isFullscreen ? 'flex-1 min-h-0' : 'min-h-[460px]'
      }`}>
        
        {/* Code Input Area */}
        {(activeTab === 'split' || activeTab === 'code') && (
          <div className="flex flex-col bg-slate-950 flex-1">
            <div className="flex items-center justify-between px-4 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400">
              <span>HTML / CSS / JS Editor</span>
              <span className="text-emerald-400">● Ready</span>
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
              placeholder="Type your HTML/CSS/JavaScript code here..."
              className="flex-1 w-full p-4 bg-transparent text-slate-100 font-mono text-xs leading-relaxed resize-none focus:outline-none focus:ring-0 min-h-[300px]"
              spellCheck="false"
            />
          </div>
        )}

        {/* Live Preview Iframe Area */}
        {(activeTab === 'split' || activeTab === 'preview') && (
          <div className="flex flex-col bg-white flex-1">
            <div className="flex items-center justify-between px-4 py-1.5 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-emerald-500" />
                Live Sandboxed Output
              </span>
              <span className="text-[10px] text-slate-400">Press Ctrl + Enter to Run</span>
            </div>
            <iframe
              ref={iframeRef}
              title="Sandbox Live Preview"
              sandbox="allow-scripts allow-modals"
              className="flex-1 w-full h-full min-h-[300px] border-0 bg-white"
            />
          </div>
        )}

      </div>

    </div>
    </FullscreenPortal>
  );
}
