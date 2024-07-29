/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#121214',
        },
        gray:{
          100:'#F2F2F2'
        },
        orange: {
          DEFAULT: '#D66909',
        }
      },
    },
    plugins: [],
  }
}