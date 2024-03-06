/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Cursive', 'sans-serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}




