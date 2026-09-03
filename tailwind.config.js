/** @type {import('tailwindcss').Config} */
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
        primary: {
          DEFAULT: '#F19A27',
          dark: '#D97706',
          hover: '#D97706',
          light: '#FFF8F3',
        },
        brand: {
          50: '#FFF8F3',   // Warm cream background
          100: '#FDEEE2',
          200: '#FCD8BA',
          300: '#FABF8C',
          400: '#F6A752',
          500: '#F19A27',  // Primary Orange
          600: '#D97706',  // Primary Dark
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
        },
        navy: {
          DEFAULT: '#232850', // Navy
          50: '#F4F5FB',
          100: '#E6E8F6',
          200: '#C7CCE9',
          300: '#9CA6D6',
          400: '#6978BF',
          500: '#4756A8',
          600: '#34408E',
          700: '#232850',     // User Navy
          800: '#1B1F40',
          850: '#161935',
          900: '#0F1225',
          950: '#080A15',
        },
        darkbg: {
          DEFAULT: '#232D36', // Dark
          surface: '#1C242C',
          deep: '#151C22',
        },
        accent: {
          blue: '#1F64C9',    // Blue Accent
        },
        apptext: {
          DEFAULT: '#111827',
          muted: '#6B7280',
        },
        appborder: '#E5E7EB',
        hindi: '#e11d48',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(241, 154, 39, 0.25)',
        'glow-lg': '0 0 35px -5px rgba(217, 119, 6, 0.3)',
      },
    },
  },
  plugins: [],
};
