/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          DEFAULT: '#6B7D5C',
          light: '#8B9A7A',
          dark: '#5A6B4D',
        },
        // Dark mode colors
        accent: {
          DEFAULT: '#D97706',
          light: '#F59E0B',
          dark: '#B45309',
        },
        tan: '#D2B48C',
        sage: {
          50: '#f6f7f5',
          100: '#e8ebe5',
          200: '#d1d7cb',
          300: '#b3bca8',
          400: '#8B9A7A',
          500: '#6B7D5C',
          600: '#566647',
          700: '#45523a',
          800: '#3a4431',
          900: '#31392a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
