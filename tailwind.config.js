/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-background":  "#060e15",
        "secondary-white": "rgba(255, 255, 255, .5)",
        "yellow": "#ffcf23",
        "brand": "#ffbb38",
        "orange": "#ff8d3a",
        "gold": "#d0b167",
        "light-gold": "#d0b167",
        "secondary-light-gold": "#ddc079",
        "secondary-dark-gold": "#ad8b3a"
      }
    },
  },
  plugins: [],
}

