/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./pages/**/*.html","./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        yellowColor: '#ffbb00',
        orangeColor: '#ffc421',
      },
    },
  },
  plugins: [],
}
