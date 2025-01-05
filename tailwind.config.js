/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Open Sans", "sans-serif"],
        "paaji": ['Baloo Paaji', 'cursive'],
      },scrollBehavior: {
        smooth: 'smooth',
      },colors:{
        'primary1': '#695aa6',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

