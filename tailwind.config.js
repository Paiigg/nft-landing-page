/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#131313',
        'secondary' : '#1D1D1D',
        'green' : '#5BA300'
      }
    },
  },
  plugins: [],
}
