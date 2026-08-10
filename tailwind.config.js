import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,css}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0712',
        panel: '#15101F',
        card: '#1D1629',
        brand: '#6723B5',
        lilac: '#A855F7'
      },
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", "sans-serif"],
        display: ['"Space Grotesk Variable"', "Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        glow: '0 18px 60px rgba(103, 35, 181, .22)'
      }
    }
  },
  plugins: [forms]
};
