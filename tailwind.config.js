/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,js}", "./public/**/*.js"],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: '#2dd4bf',
        secondary: '#94a3b8',
        dark: '#1e293b'
      }
    },
  },
  plugins: [],
}

