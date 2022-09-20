/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      fontFamily: {
        'work' : ['work Sans', 'sans-serif']
      },
      backgroundImage: {
        'fragments': "url('./src/assets/image1.jpeg')",
      }
    },
  },
  plugins: [],
}
