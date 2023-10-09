/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
 '86':'19rem'
      },
      translate: {
        '1/10': '10%',
        '11/12': '91.67%',
     
      },
      margin: {
        '-34': '-8.5rem',
        '-38': '-9.5rem',
        '-39': '-10.25rem',
        '-90': '-22.875rem',
      },
    },
  },
  plugins: [],
}

