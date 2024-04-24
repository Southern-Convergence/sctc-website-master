/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['poppins', 'sans-serif'],
        'Overpass': ['overpass', 'sans-serif'],
        'Roboto': ['roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

