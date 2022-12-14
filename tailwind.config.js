/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fira": ["Fira Sans", "sans-serif"],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
