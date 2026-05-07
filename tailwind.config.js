/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d1b2e',
          light: '#102035',
          nav: 'rgba(13, 27, 46, 0.85)',
        },
        primary: {
          50: '#faf9f7',
          100: '#f2ede8',
          200: '#e3d9cf',
          300: '#cebfb0',
          400: '#b5a090',
          500: '#9c8372',
          600: '#7c6455',
          700: '#614e42',
          800: '#4a3b33',
          900: '#352a24',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}