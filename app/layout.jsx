import './globals.css';
import { ThemeProvider } from '@/lib/themeContext';
import { LanguageProvider } from '@/lib/languageContext';
import { ProgressProvider } from '@/lib/progressContext';
import { FullscreenProvider } from '@/lib/fullscreenContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'NIELIT O-Level M2-R5.1 | Web Designing & Publishing Complete Learning Platform',
  description: 'The ultimate bilingual digital textbook, exam preparation platform, 200 MCQs, 100 Golden One-Liners, live code playground, and practical lab for O-Level M2-R5.1.',
  keywords: 'NIELIT, O-Level, M2-R5.1, Web Designing and Publishing, HTML5, CSS3, W3.CSS, JavaScript, AngularJS, Photo Editor, Web Publishing, MCQs, Mock Test',
  authors: [{ name: 'O-Level IT Learning Hub' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col selection:bg-brand-500 selection:text-white dark:bg-[#070d1e] dark:text-slate-100">
        <ThemeProvider>
          <LanguageProvider>
            <ProgressProvider>
              <FullscreenProvider>
                <Navbar />
                <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
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
