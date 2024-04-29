/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryClr:'#151515',
        secndryClr:'#d35100'
      }
    },
  },
  plugins: [],
}