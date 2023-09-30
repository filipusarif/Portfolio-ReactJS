/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          primary: '#0F172A',
          secondary: '#141C31',
          'complementary': '#2AA7D6',
          'unactive':'#6F7A8E',
          'light':'#95A9BA',
          'very-light':'#D9D9D9',
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'FiraCode' : ['Fira Code', 'monospace'],
      'Montserrat' : ['Montserrat', 'sans-serif'],
      'Poppins' : ['Poppins', 'sans-serif'],
      'Raleway' : [ 'Raleway', 'sans-serif'],
      'Roboto' : ['Roboto', 'sans-serif'],
    },
  }
}

