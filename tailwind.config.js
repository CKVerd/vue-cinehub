/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        economica: ['Economica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
