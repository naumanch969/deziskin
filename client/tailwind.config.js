/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lighter-brown": "#ebe4e1",
        "opacity-brown": "#ebe4e1b8",
        "light-brown": "#cdbba9",
        "brown": "#bc9c7b",
        "darker-brown": "#121212",
        "lighter-white": "#ebe5e1",
        "white": "#fff",
        "gray": "#999999",
        "light-gray": "#dedede",
        "light-opacity-gray": "#7e7b79c2",
        "black": "#000",
      },
      fontFamily: {
        "courier": "Courier Prime",
        "ibm": "IBM Plex Mono",
      },

    },
  },
  plugins: [],
}