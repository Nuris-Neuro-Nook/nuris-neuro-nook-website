/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff7ed',
          400: '#fb923c',
          500: '#f97316',
        },
        pink: {
          50: '#fdf2f8',
          400: '#ec4899',
          500: '#db2777',
        },
        green: {
          50: '#f0fdf4',
          400: '#4ade80',
          500: '#22c55e',
        },
        slate: {
          50: '#f8fafc',
          500: '#64748b',
          600: '#475569',
        },
      },
    },
  },
  plugins: [],
}
