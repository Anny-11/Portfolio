/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        amber: { DEFAULT: '#D4A96A', light: '#E8C484' },
        teal:  { DEFAULT: '#7EB8A4' },
        purple:{ DEFAULT: '#B8A0D4' },
        base:  { DEFAULT: '#0A0A0A' },
      },
      fontFamily: {
        mono:  ['"DM Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'serif'],
        lora:  ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
