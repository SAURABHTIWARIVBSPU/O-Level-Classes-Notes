/** @type {import('tailwindcss').Config} */

/**
 * ============================================================================
 * DESIGN TOKENS — NIELIT Learning Platform
 * ============================================================================
 * Single source of truth. Every colour is a CSS custom property holding an
 * "R G B" triple, so `bg-surface`, `text-ink`, `border-line` resolve correctly
 * in BOTH themes with no `dark:` variant required at the call site.
 *
 * Rules enforced by this file:
 *  - One accent hue (blue). Everything else is neutral or semantic.
 *  - Semantic colours (ok / warn / danger / exam) are for MEANING, never decor.
 *  - Three elevation levels. No glow, no neon, no glass.
 *  - Weights stop at 700. Radii stop at 16px (except pills).
 * ============================================================================
 */

const withOpacity = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ---------- Surfaces ---------- */
        ground: withOpacity('--c-ground'),        // page background
        surface: withOpacity('--c-surface'),      // cards, panels
        sunken: withOpacity('--c-sunken'),        // wells, code, inset areas
        overlay: withOpacity('--c-overlay'),      // sheets, dropdowns

        /* ---------- Lines ---------- */
        line: withOpacity('--c-line'),
        'line-strong': withOpacity('--c-line-strong'),

        /* ---------- Text ---------- */
        ink: withOpacity('--c-ink'),              // primary text
        'ink-2': withOpacity('--c-ink-2'),        // secondary text
        'ink-3': withOpacity('--c-ink-3'),        // muted / meta
        'ink-4': withOpacity('--c-ink-4'),        // faint / disabled
        'ink-inv': withOpacity('--c-ink-inv'),    // on accent / on dark

        /* ---------- Accent (single hue) ---------- */
        accent: {
          DEFAULT: withOpacity('--c-accent'),
          hover: withOpacity('--c-accent-hover'),
          soft: withOpacity('--c-accent-soft'),
          line: withOpacity('--c-accent-line'),
          ink: withOpacity('--c-accent-ink'),
        },

        /* ---------- Semantic ---------- */
        ok: {
          DEFAULT: withOpacity('--c-ok'),
          soft: withOpacity('--c-ok-soft'),
          line: withOpacity('--c-ok-line'),
          ink: withOpacity('--c-ok-ink'),
        },
        warn: {
          DEFAULT: withOpacity('--c-warn'),
          soft: withOpacity('--c-warn-soft'),
          line: withOpacity('--c-warn-line'),
          ink: withOpacity('--c-warn-ink'),
        },
        danger: {
          DEFAULT: withOpacity('--c-danger'),
          soft: withOpacity('--c-danger-soft'),
          line: withOpacity('--c-danger-line'),
          ink: withOpacity('--c-danger-ink'),
        },
        exam: {
          DEFAULT: withOpacity('--c-exam'),
          soft: withOpacity('--c-exam-soft'),
          line: withOpacity('--c-exam-line'),
          ink: withOpacity('--c-exam-ink'),
        },

        /* ---------- Course identity (used as a thin marker only) ---------- */
        olevel: withOpacity('--c-olevel'),
        ccc: withOpacity('--c-ccc'),

        /* ---------- Devanagari label tint ---------- */
        hindi: withOpacity('--c-hindi'),

        /* ---------- Brand lockup (logo only) ---------- */
        brandmark: '#E1810F',

        /* ---------- Legacy aliases — keep older markup compiling ---------- */
        appborder: withOpacity('--c-line'),
        primary: {
          DEFAULT: withOpacity('--c-accent'),
          dark: withOpacity('--c-accent-hover'),
          hover: withOpacity('--c-accent-hover'),
          light: withOpacity('--c-accent-soft'),
        },
        brand: {
          50: withOpacity('--c-accent-soft'),
          100: withOpacity('--c-accent-soft'),
          200: withOpacity('--c-accent-line'),
          300: withOpacity('--c-accent-line'),
          400: withOpacity('--c-accent'),
          500: withOpacity('--c-accent'),
          600: withOpacity('--c-accent-hover'),
          700: withOpacity('--c-accent-ink'),
          800: withOpacity('--c-accent-ink'),
          900: withOpacity('--c-accent-ink'),
          950: withOpacity('--c-accent-soft'),
        },
        navy: {
          DEFAULT: withOpacity('--c-ink'),
          700: withOpacity('--c-ink'),
          800: withOpacity('--c-ink'),
          900: withOpacity('--c-ink'),
        },
      },

      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        hi: ['var(--font-hi)', 'var(--font-sans)', 'Nirmala UI', 'Mangal', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },

      /* Type scale — 1.200 minor third, optically corrected at the ends */
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1.45', letterSpacing: '0.01em' }],   // 11 — micro labels
        xs: ['0.75rem', { lineHeight: '1.5' }],                                   // 12 — meta
        sm: ['0.8125rem', { lineHeight: '1.55' }],                                // 13 — UI
        base: ['0.9375rem', { lineHeight: '1.6' }],                               // 15 — UI body
        prose: ['1rem', { lineHeight: '1.75' }],                                  // 16 — reading body
        'prose-lg': ['1.0625rem', { lineHeight: '1.75' }],                         // 17 — reading body lg
        lead: ['1.0625rem', { lineHeight: '1.65' }],                              // 17 — lead paragraph
        h4: ['1rem', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
        h3: ['1.125rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        h2: ['1.375rem', { lineHeight: '1.32', letterSpacing: '-0.015em' }],
        h1: ['1.75rem', { lineHeight: '1.22', letterSpacing: '-0.02em' }],
        display: ['2.25rem', { lineHeight: '1.12', letterSpacing: '-0.028em' }],
        'display-lg': ['3rem', { lineHeight: '1.06', letterSpacing: '-0.032em' }],
      },

      borderRadius: {
        xs: '4px',
        sm: '6px',
        DEFAULT: '8px',
        md: '8px',
        lg: '10px',
        xl: '12px',
        '2xl': '16px',
      },

      boxShadow: {
        e1: 'var(--e1)',
        e2: 'var(--e2)',
        e3: 'var(--e3)',
        none: 'none',
        /* legacy names mapped down to the 3-level scale */
        xs: 'var(--e1)',
        '2xs': 'var(--e1)',
        sm: 'var(--e1)',
        DEFAULT: 'var(--e2)',
        md: 'var(--e2)',
        lg: 'var(--e3)',
        glow: 'var(--e2)',
        'glow-lg': 'var(--e3)',
      },

      maxWidth: {
        measure: '68ch',      // reading column
        'measure-wide': '80ch',
        shell: '1200px',      // app shell
        'shell-wide': '1360px',
      },

      spacing: {
        header: '3.5rem',
        'header-lg': '4rem',
      },

      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
        inout: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },

      transitionDuration: {
        fast: '120ms',
        DEFAULT: '180ms',
        slow: '280ms',
      },

      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in-left': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'none' },
        },
        'slide-up-sheet': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'none' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },

      animation: {
        'fade-up': 'fade-up 280ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 180ms ease-out both',
        'slide-in-left': 'slide-in-left 240ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-up-sheet': 'slide-up-sheet 260ms cubic-bezier(0.16, 1, 0.3, 1) both',
      },

      zIndex: {
        header: '40',
        drawer: '60',
        dialog: '70',
        toast: '80',
      },
    },
  },
  plugins: [],
};
