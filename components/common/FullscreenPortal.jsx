'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useFullscreen } from '@/lib/fullscreenContext';

export default function FullscreenPortal({
  isOpen,
  onClose,
  children,
  toolName = 'tool',
  className = '',
}) {
  const [mounted, setMounted] = useState(false);
  const { enterFullscreen, exitFullscreen } = useFullscreen();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      enterFullscreen(toolName);
    } else {
      exitFullscreen();
    }
    return () => {
      if (isOpen) {
        exitFullscreen();
      }
    };
  }, [isOpen, toolName, enterFullscreen, exitFullscreen]);

  if (!isOpen) {
    return <>{children}</>;
  }

  if (!mounted) {
    return null;
  }

  const portalTarget =
    document.getElementById('fullscreen-portal-root') ||
    document.body;

  return createPortal(
    <div
      id={`fullscreen-portal-${toolName}`}
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 w-screen h-screen h-[100dvh] max-w-[100vw] max-h-[100dvh] z-[99999] overflow-hidden flex flex-col bg-white dark:bg-slate-950 ${className}`}
    >
      {children}
    </div>,
    portalTarget
  );
}
