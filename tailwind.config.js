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
        "secondary-background": "rgba(255, 255, 255, .07)",
        "secondary-hover-background": "rgba(255, 255, 255, .12)",
        "secondary-border": "rgba(255, 255, 255, .21)",
        "dark-yellow-bg": "#41391a",
        "secondary-white": "rgba(255, 255, 255, .5)",
        "secondary-dark": "#181E27",
        "yellow": "#ffcf23",
        "brand": "#ffbb38",
        "orange": "#ff8d3a",
        "gold": "#d0b167",
        "light-gold": "#d0b167",
        "secondary-light-gold": "#ddc079",
        "secondary-dark-gold": "#ad8b3a"
      },
      fontFamily: {
        'secondary': "Clashdisplay Variable, sans-serif"
      }
    },
  },
  plugins: [],
}

