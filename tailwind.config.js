/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'accent': '#46A358',
      },
      screens: {
        'desktop': '864px',
        'tablet': '700px',
      }
    },
  },
  plugins: [],
}

