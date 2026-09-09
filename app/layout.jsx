import './globals.css';

import { ThemeProvider } from '@/lib/themeContext';
import { LanguageProvider } from '@/lib/languageContext';
import { ProgressProvider } from '@/lib/progressContext';
import { FullscreenProvider } from '@/lib/fullscreenContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/*
 * Fonts are loaded with a preconnected <link> rather than next/font.
 * next/font fetches at BUILD time, so a machine without network access to
 * Google Fonts cannot build the site at all. A link tag degrades to the
 * fallback stacks below instead — and Devanagari still renders correctly on
 * Windows via Nirmala UI. Three families, six weights total, display=swap.
 */
const FONT_HREF =
  'https://fonts.googleapis.com/css2' +
  '?family=Inter:wght@400;500;600;700' +
  '&family=Noto+Sans+Devanagari:wght@400;500;600;700' +
  '&family=JetBrains+Mono:wght@400;500' +
  '&display=swap';

export const metadata = {
  metadataBase: new URL('https://olevel-notes.local'),
  title: {
    default: 'NIELIT O Level & CCC — Notes, Revision and Exam Practice',
    template: '%s · NIELIT Learning Platform',
  },
  description:
    'Bilingual (English + हिन्दी) study notes, comparison tables, one-liners, MCQs and timed mock tests for NIELIT O Level M2-R5.1 Web Designing & Publishing and the CCC course.',
  applicationName: 'NIELIT Learning Platform',
  keywords: [
    'NIELIT', 'O Level', 'M2-R5.1', 'Web Designing and Publishing',
    'CCC', 'Course on Computer Concepts', 'HTML5', 'CSS3', 'JavaScript',
    'MCQ', 'mock test', 'notes in Hindi', 'exam preparation',
  ],
  authors: [{ name: 'NIELIT Learning Platform' }],
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: 'website',
    siteName: 'NIELIT Learning Platform',
    title: 'NIELIT O Level & CCC — Notes, Revision and Exam Practice',
    description:
      'Bilingual notes, comparison tables, one-liners, MCQs and mock tests for NIELIT O Level and CCC.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFB' },
    { media: '(prefers-color-scheme: dark)', color: '#0D1117' },
  ],
};

/**
 * Applies the stored theme before first paint. Without this the page renders
 * light, then flips to dark on hydration — a visible flash on every load.
 */
const themeBootstrap = `
(function(){try{
  var p = localStorage.getItem('olevel_theme_pref');
  var d = p === 'dark' || (!p && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (d) document.documentElement.classList.add('dark');
}catch(e){}})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONT_HREF} />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="min-h-screen bg-ground text-ink antialiased flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <ProgressProvider>
              <FullscreenProvider>
                <a href="#main" className="skip-link">Skip to main content</a>
                <Navbar />
                <main id="main" className="flex-1 w-full">
                  {children}
                </main>
                <Footer />
                <div id="fullscreen-portal-root" />
              </FullscreenProvider>
            </ProgressProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
