/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'sand':'#FFEEDB',
        'pinky':'#FFD8CC',
        'peach':'#FFBD9B',
        'midnight':'#0A1D37'
      },
    },
  },
  plugins: [],
}

