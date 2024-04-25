/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#3730a3',
        'ab':'#4A176D',
        'ad':'#00B0AD',
        'violet':'#e9d5ff',
        'whiteback':'#A5A3AE4D'
      },
    },
  },
  plugins: [],
}

