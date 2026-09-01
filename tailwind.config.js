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
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#36a9f6',
          500: '#0c8de4',
          600: '#0270c3',
          700: '#03599e',
          800: '#074c82',
          900: '#0c3f6c',
          950: '#082847',
        },
        navy: {
          800: '#0f172a',
          850: '#0b1329',
          900: '#070d1e',
          950: '#040711',
        },
        hindi: '#e11d48',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(12, 141, 228, 0.25)',
        'glow-lg': '0 0 35px -5px rgba(99, 102, 241, 0.3)',
      },
    },
  },
  plugins: [],
};
