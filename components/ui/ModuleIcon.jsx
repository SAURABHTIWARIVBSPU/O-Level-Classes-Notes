import React from 'react';
import {
  Globe, PenTool, Code2, Palette, LayoutGrid, Braces, Image, UploadCloud,
  Monitor, Power, FileText, Table2, Presentation, Mail, Wallet, ShieldCheck, BookOpen,
  ListChecks, Timer, Zap, Columns3, ClipboardList, Layers, BarChart3, Bookmark, Search,
  Rocket, GraduationCap, Sparkles, FolderKanban,
} from 'lucide-react';

const ICONS = {
  Globe, PenTool, Code2, Palette, LayoutGrid, Braces, Image, UploadCloud,
  Monitor, Power, FileText, Table2, Presentation, Mail, Wallet, ShieldCheck, BookOpen,
  ListChecks, Timer, Zap, Columns3, ClipboardList, Layers, BarChart3, Bookmark, Search,
  Rocket, GraduationCap, Sparkles, FolderKanban,
};

/** Resolves a `moduleVisual().icon` name to a lucide icon element. */
export default function ModuleIcon({ name, className = 'w-5 h-5' }) {
  const Icon = ICONS[name] || BookOpen;
  return <Icon className={className} aria-hidden="true" />;
}
