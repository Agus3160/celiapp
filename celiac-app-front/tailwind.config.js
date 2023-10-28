/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'celiac-light': '#CBB290',
        'celiac-dark': '#303030'
      },
    },
  },
  plugins: [],
}

