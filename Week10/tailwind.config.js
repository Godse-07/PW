/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        'custom-bg': 'rgba(31, 41, 55, 1)', // Define custom color
      },
    },
  },
  plugins: [],
}

