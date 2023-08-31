/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        box: '0px 0px 8px -5px #000000'
      },
      colors: {
        "white": "#fff",
        "darkBlue": "#00008b",
        "lighterBlue": "#f0f0ff",
        "gray": "#555",
        "lightGray": "#c5baba",
        "lighterGray": "#fbfbff",
        "lightBlue": "#ebf1fe",
        "blue": "#2a7ade",
        "lightRed": "#fff0f1",
        "red": "#d95087",
        "lightGreen": "#e5faf2",
        "green": "#3bb077",
        'teal': '#008080',
        'light-teal': '#0080801f',
        'light-pink': '#fcf5f5',
        'light-gray': '#d3d3d3',

      }
    },
  },
  plugins: [],
}