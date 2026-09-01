'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('both'); // 'both' | 'en' | 'hi'

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('olevel_lang_pref');
      if (savedLang) setLanguage(savedLang);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    try {
      localStorage.setItem('olevel_lang_pref', lang);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
