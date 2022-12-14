/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '450px',
      // => @media (min-width: 450px) { ... }

      'xsmall': '475px',
      // => @media (min-width: 450px) { ... }

      'small': '550px',
      // => @media (min-width: 550px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'xmd': '899px',
      // => @media (min-width: 899px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      inset: {
        '76': '19rem',
      },
      width: {
        '1/9': '11.11%',
        '2/9': '22.22%',
        'custom': '95%',
        '340': '340px',
      },
      backgroundColor: {
        'custom-blue': '#eef6f8'
      },
      colors: {
        'custom-gray': '#56616c',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
