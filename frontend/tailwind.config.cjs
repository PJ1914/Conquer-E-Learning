/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors - Educational Blues
        primary: {
          50: '#f0f0fe',
          100: '#e0e0fd',
          200: '#c9c9fb',
          300: '#a7a7f8',
          400: '#8484f2',
          500: '#4a4aeb',
          600: '#070653', // gulf-blue - main brand
          700: '#060549',
          800: '#050441',
          900: '#04033a',
        },
        // Secondary Colors - Calm Blues & Greens
        secondary: {
          50: '#f8fdfe',
          100: '#f2fbfc', // polar - light background
          200: '#e3f7f9',
          300: '#c8eff4',
          400: '#95bbc0', // shadow-green - soft accent
          500: '#4a919c', // wedgewood - main secondary
          600: '#3d7a84',
          700: '#356a73',
          800: '#2e5862',
          900: '#274b52',
        },
        // Accent Colors - Purples & Grays
        accent: {
          50: '#f6f6fd',
          100: '#ededfb',
          200: '#ddddf7',
          300: '#bdbedc', // lavender-gray - soft accent
          400: '#9a9bc7',
          500: '#7b7ca2', // kimberly - medium accent
          600: '#6667a2',
          700: '#565696',
          800: '#43436d', // fiord - darker accent
          900: '#373759',
        },
        // Dark Theme Colors
        dark: {
          50: '#2a2a4f',
          100: '#242448',
          200: '#1d1d3f',
          300: '#171736',
          400: '#13132f',
          500: '#0f0f28',
          600: '#0b0b41', // violet - dark primary
          700: '#090938',
          800: '#07072f',
          900: '#050526',
        },
        // Violet as a standalone color for easy access
        violet: '#0b0b41',
        // Utility Colors
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}