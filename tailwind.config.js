/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hack: ['Hack', 'sans-serif'],
      },
      colors: {
        accent: '#199cdb',
        surface: '#3c3c3c',
        primary: '#212121',
        secondary: '#171717',
        placeholder: '#9f9f9f',
      },
    },
  },
  plugins: [],
};
