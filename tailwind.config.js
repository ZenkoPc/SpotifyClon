/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs' : '330px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: '#1a1a1a',
      primaryGray: '#b3b3b3',
      purple: '#AF2896',
      weirdBlue: '#509bf5',
      overBlack: '#121212',
      overBlack2: '#181818',
      secondary: '#242424',
      blue: '#0d72ea',
      overGray: '#878787',
      overHighGray: '#2a2a2a',
      overTransparentBlack: '#000000b3',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      overWhite: '#f6f6f6',
      strangeBlue: '#127979d8',
      'greaterGreen': {
        '50': '#e9ffe4',
        '100': '#cdffc4',
        '200': '#9fff90',
        '300': '#62ff50',
        '400': '#11ff00',
        '500': '#09e600',
        '600': '#03b800',
        '700': '#028b00',
        '800': '#076d07',
        '900': '#0b5c0c',
        '950': '#003403',
    },
    'cod-gray': {
      '50': '#f6f5f5',
      '100': '#e8e5e5',
      '200': '#d3cece',
      '300': '#b4acad',
      '400': '#8d8385',
      '500': '#72686a',
      '600': '#61595a',
      '700': '#524c4d',
      '800': '#474343',
      '900': '#3e3b3b',
      '950': '#0d0c0c',
  },  
    },
    extend: {
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(177px, 0fr))',
      }
    },
  },
  plugins: [],
}

