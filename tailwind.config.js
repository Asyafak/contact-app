/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,js}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: '#2dd4bf',
        secondary: '#cbd5e1',
        dark: '#1e293b'
      }
    },
  },
  plugins: [],
}

