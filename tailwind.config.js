/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx}",
            "./public/index.html"],

  theme: {
    extend: {
      boxShadow: {
        custom: '0 0 10px 1000px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'todo': "url('https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg')",
      }
    },
  },

  variants: {
    extends: {
      boxShadow: ['focus'],
    },
  },

  plugins: [],
}