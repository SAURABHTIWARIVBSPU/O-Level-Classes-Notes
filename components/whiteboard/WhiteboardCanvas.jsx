'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { boardTemplates } from './BoardTemplates';

export default function WhiteboardCanvas({
  activeTool = 'pen',
  strokeColor = '#0284c7',
  strokeWidth = 4,
  bgType = 'grid', // 'blank' | 'grid' | 'ruled' | 'dot'
  isDarkBoard = true,
  undoTrigger = 0,
  redoTrigger = 0,
  clearTrigger = 0,
  templateTrigger = null,
  onHistoryChange,
  exportTrigger = 0,
  persistentSnapshot = null,
  onSnapshotChange = null,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isDrawing = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const snapshotRef = useRef(null);

  // History stack storing dataURLs
  const historyStack = useRef([]);
  const historyIndex = useRef(-1);

  // Dimension tracking
  const dimensionsRef = useRef({ width: 800, height: 500, dpr: 1 });

  // Text input state
  const [textInput, setTextInput] = useState({ visible: false, x: 0, y: 0, value: '' });

  // Draw background pattern in logical coordinates
  const drawBackground = useCallback((ctx, width, height) => {
    ctx.save();
    // Base background fill
    ctx.fillStyle = isDarkBoard ? '#090d16' : '#ffffff';
    ctx.fillRect(0, 0, width, height);

    const patternColor = isDarkBoard ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)';
    ctx.strokeStyle = patternColor;
    ctx.fillStyle = patternColor;

    const spacing = 32;

    if (bgType === 'grid') {
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = spacing; x < width; x += spacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = spacing; y < height; y += spacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    } else if (bgType === 'ruled') {
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let y = spacing; y < height; y += spacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    } else if (bgType === 'dot') {
      for (let x = spacing; x < width; x += spacing) {
        for (let y = spacing; y < height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Classroom watermark in bottom-right corner
    ctx.font = 'bold 11px sans-serif';
    ctx.fillStyle = isDarkBoard ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';
    ctx.textAlign = 'right';
    ctx.fillText('MSITM Digital Classroom • O-Level M2-R5.1', width - 20, height - 15);

    ctx.restore();
  }, [bgType, isDarkBoard]);

  // Save current canvas state to history
  const pushHistory = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Prune forward history if we rewound
    historyStack.current = historyStack.current.slice(0, historyIndex.current + 1);

    // Limit history stack size to 25 states to prevent memory leaks
    if (historyStack.current.length > 25) {
      historyStack.current.shift();
      historyIndex.current--;
    }

    const dataUrl = canvas.toDataURL();
    historyStack.current.push(dataUrl);
    historyIndex.current = historyStack.current.length - 1;

    if (onSnapshotChange) {
      onSnapshotChange(dataUrl);
    }

    if (onHistoryChange) {
      onHistoryChange(historyIndex.current > 0, historyIndex.current < historyStack.current.length - 1);
    }
  }, [onHistoryChange, onSnapshotChange]);

  // Restore canvas from dataUrl with precise 1:1 pixel restoration
  const restoreState = useCallback((dataUrl) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { dpr } = dimensionsRef.current;

    const img = new Image();
    img.onload = () => {
      // Reset transform matrix to identity to draw full buffer cleanly
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      // Restore drawing scale for logical coordinates
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    img.src = dataUrl;
  }, []);

  // Handle Undo
  useEffect(() => {
    if (undoTrigger > 0 && historyIndex.current > 0) {
      historyIndex.current--;
      const snapshot = historyStack.current[historyIndex.current];
      restoreState(snapshot);
      if (onSnapshotChange) {
        onSnapshotChange(snapshot);
      }
      if (onHistoryChange) {
        onHistoryChange(historyIndex.current > 0, true);
      }
    }
  }, [undoTrigger, restoreState, onHistoryChange, onSnapshotChange]);

  // Handle Redo
  useEffect(() => {
    if (redoTrigger > 0 && historyIndex.current < historyStack.current.length - 1) {
      historyIndex.current++;
      const snapshot = historyStack.current[historyIndex.current];
      restoreState(snapshot);
      if (onSnapshotChange) {
        onSnapshotChange(snapshot);
      }
      if (onHistoryChange) {
        onHistoryChange(true, historyIndex.current < historyStack.current.length - 1);
      }
    }
  }, [redoTrigger, restoreState, onHistoryChange, onSnapshotChange]);

  // Handle Clear
  useEffect(() => {
    if (clearTrigger > 0) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const { width, height, dpr } = dimensionsRef.current;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawBackground(ctx, width, height);
      pushHistory();
    }
  }, [clearTrigger, drawBackground, pushHistory]);

  // Handle Template Load (Clears previous drawing and renders fresh diagram)
  useEffect(() => {
    if (templateTrigger) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const { width, height, dpr } = dimensionsRef.current;

      const tmpl = boardTemplates.find((t) => t.id === templateTrigger);
      if (tmpl && tmpl.draw) {
        // Reset scale and clear canvas background cleanly
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        drawBackground(ctx, width, height);
        // Draw crisp template with logical width & height
        tmpl.draw(ctx, width, height, isDarkBoard);
        pushHistory();
      }
    }
  }, [templateTrigger, isDarkBoard, drawBackground, pushHistory]);

  // Handle Export to PNG
  useEffect(() => {
    if (exportTrigger > 0) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const link = document.createElement('a');
      link.download = `MSITM_Digital_Board_${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  }, [exportTrigger]);

  // Resize canvas cleanly matching container dimensions without recursive scaling distortion
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const dpr = window.devicePixelRatio || 1;

      dimensionsRef.current = {
        width: rect.width,
        height: rect.height,
        dpr: dpr,
      };

      // Save previous drawing if exists
      const prevData = historyStack.current[historyIndex.current] || persistentSnapshot;

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext('2d');

      if (prevData) {
        const img = new Image();
        img.onload = () => {
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        img.src = prevData;
        if (historyStack.current.length === 0) {
          historyStack.current.push(prevData);
          historyIndex.current = 0;
        }
      } else {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        drawBackground(ctx, rect.width, rect.height);
        pushHistory();
      }
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [bgType, isDarkBoard, drawBackground, pushHistory, persistentSnapshot]);

  // Helper: Get Pointer coordinates relative to canvas
  const getCoords = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  // Pointer Down
  const handlePointerDown = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(e.pointerId);

    const coords = getCoords(e);
    isDrawing.current = true;
    startPos.current = coords;

    const ctx = canvas.getContext('2d');
    const { dpr } = dimensionsRef.current;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (activeTool === 'text') {
      setTextInput({ visible: true, x: coords.x, y: coords.y, value: '' });
      isDrawing.current = false;
      return;
    }

    if (activeTool === 'note') {
      // Draw teacher sticky note
      ctx.save();
      ctx.fillStyle = '#fef08a';
      ctx.strokeStyle = '#ca8a04';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = 'rgba(0,0,0,0.15)';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;
      ctx.fillRect(coords.x, coords.y, 160, 100);
      ctx.strokeRect(coords.x, coords.y, 160, 100);

      ctx.fillStyle = '#854d0e';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('Teacher Note', coords.x + 10, coords.y + 20);
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#0f172a';
      ctx.fillText('Important Exam Point', coords.x + 10, coords.y + 45);
      ctx.restore();

      pushHistory();
      isDrawing.current = false;
      return;
    }

    // Save snapshot for shape previews
    snapshotRef.current = ctx.getImageData(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
  };

  // Pointer Move
  const handlePointerMove = (e) => {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const coords = getCoords(e);
    const { dpr } = dimensionsRef.current;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Freehand Drawing: Pen, Highlighter, Eraser
    if (activeTool === 'pen') {
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = strokeWidth * (e.pressure > 0 ? Math.max(0.5, e.pressure * 1.5) : 1);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineTo(coords.x, coords.y);
      ctx.stroke();
    } else if (activeTool === 'highlighter') {
      ctx.strokeStyle = strokeColor + '55'; // 33% alpha
      ctx.lineWidth = strokeWidth * 3;
      ctx.lineCap = 'square';
      ctx.lineJoin = 'miter';
      ctx.lineTo(coords.x, coords.y);
      ctx.stroke();
    } else if (activeTool === 'eraser') {
      ctx.strokeStyle = isDarkBoard ? '#090d16' : '#ffffff';
      ctx.lineWidth = strokeWidth * 4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineTo(coords.x, coords.y);
      ctx.stroke();
    } else {
      // Shape Preview: Line, Arrow, Rectangle, Circle
      if (snapshotRef.current) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.putImageData(snapshotRef.current, 0, 0);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const sx = startPos.current.x;
      const sy = startPos.current.y;

      if (activeTool === 'line') {
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
      } else if (activeTool === 'arrow') {
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();

        // Arrow head
        const angle = Math.atan2(coords.y - sy, coords.x - sx);
        const headLength = 15;
        ctx.fillStyle = strokeColor;
        ctx.beginPath();
        ctx.moveTo(coords.x, coords.y);
        ctx.lineTo(
          coords.x - headLength * Math.cos(angle - Math.PI / 6),
          coords.y - headLength * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
          coords.x - headLength * Math.cos(angle + Math.PI / 6),
          coords.y - headLength * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fill();
      } else if (activeTool === 'rectangle') {
        ctx.strokeRect(sx, sy, coords.x - sx, coords.y - sy);
      } else if (activeTool === 'circle') {
        const rx = Math.abs(coords.x - sx) / 2;
        const ry = Math.abs(coords.y - sy) / 2;
        const cx = sx + (coords.x - sx) / 2;
        const cy = sy + (coords.y - sy) / 2;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  };

  // Pointer Up
  const handlePointerUp = (e) => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    const canvas = canvasRef.current;
    if (canvas && e.pointerId) {
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch (err) {
        // Ignore pointer capture errors
      }
    }
    pushHistory();
  };

  // Handle Text Submission
  const handleTextSubmit = () => {
    if (!textInput.value.trim()) {
      setTextInput({ visible: false, x: 0, y: 0, value: '' });
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { dpr } = dimensionsRef.current;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = `bold ${Math.max(14, strokeWidth * 3.5)}px sans-serif`;
    ctx.fillStyle = strokeColor;
    ctx.fillText(textInput.value, textInput.x, textInput.y + 16);

    setTextInput({ visible: false, x: 0, y: 0, value: '' });
    pushHistory();
  };

  return (
    <div ref={containerRef} className="relative w-full h-full select-none touch-none overflow-hidden rounded-xl bg-slate-950">
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="block cursor-crosshair touch-none"
        style={{ touchAction: 'none' }}
      />

      {/* Floating text input box when Text Tool is active */}
      {textInput.visible && (
        <div
          className="absolute z-20"
          style={{ left: `${textInput.x}px`, top: `${textInput.y}px` }}
        >
          <input
            type="text"
            autoFocus
            value={textInput.value}
            onChange={(e) => setTextInput((prev) => ({ ...prev, value: e.target.value }))}
            onBlur={handleTextSubmit}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleTextSubmit();
              if (e.key === 'Escape') setTextInput({ visible: false, x: 0, y: 0, value: '' });
            }}
            placeholder="Type text & press Enter..."
            className="px-2.5 py-1 text-sm font-bold bg-white dark:bg-slate-900 border-2 border-brand-500 rounded-lg shadow-xl outline-none text-slate-900 dark:text-white"
            style={{ color: strokeColor }}
          />
        </div>
      )}
    </div>
  );
}
