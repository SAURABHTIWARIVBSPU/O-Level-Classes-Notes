'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const FullscreenContext = createContext({
  isFullscreen: false,
  activeTool: null,
  enterFullscreen: () => {},
  exitFullscreen: () => {},
  toggleFullscreen: () => {},
});

export function FullscreenProvider({ children }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTool, setActiveTool] = useState(null);

  const enterFullscreen = useCallback((toolName = 'tool') => {
    setActiveTool(toolName);
    setIsFullscreen(true);
  }, []);

  const exitFullscreen = useCallback(() => {
    setIsFullscreen(false);
    setActiveTool(null);
  }, []);

  const toggleFullscreen = useCallback((toolName = 'tool') => {
    setIsFullscreen((prev) => {
      if (prev) {
        setActiveTool(null);
        return false;
      } else {
        setActiveTool(toolName);
        return true;
      }
    });
  }, []);

  // Lock body & html scroll when any tool enters fullscreen, and handle Escape key
  useEffect(() => {
    if (isFullscreen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          exitFullscreen();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isFullscreen, exitFullscreen]);

  return (
    <FullscreenContext.Provider
      value={{
        isFullscreen,
        activeTool,
        enterFullscreen,
        exitFullscreen,
        toggleFullscreen,
      }}
    >
      {children}
    </FullscreenContext.Provider>
  );
}

export function useFullscreen() {
  const context = useContext(FullscreenContext);
  if (!context) {
    throw new Error('useFullscreen must be used within a FullscreenProvider');
  }
  return context;
}
