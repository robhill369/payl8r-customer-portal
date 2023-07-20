// const colors = require('tailwindcss/colors');
let grayDarker = '#414141';
let grayDark = '#EFEFEF';
let pinkDark = '#BA84CC';

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
        '3xl': '1920px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'teal': {
          dark: '#53B8B7',
          DEFAULT: '#AADCDB',
          light: '#CFF5F5',
        },
        'gray': {
          darker: grayDarker,
          dark: grayDark,
          DEFAULT: '#8D8D8D',
          light: '#F8F8F8',
          lighter: '#FCFCFC',
        },
        'green-dark': '#4F9D79',
        'green-light': '#BFEACA',
        'pink': {
          dark: pinkDark,
          DEFAULT: '#DED3FE',
          light: '#F7E7FD',
          lighter: '#FBF7FB',
        },
        'red': {
          dark: '#DE5965',
          DEFAULT: '#E18683',
          light: '#F8D4D3',
        },
        'white': '#FFFFFF',
        'yellow-dark': '#F6C350',
        'yellow-light': '#FEF9EB',

        //text colors


        //button colors
        'button-primary': grayDarker,
        'button-primary-hover': '#6F6F6F',
        'button-primary-selected': pinkDark,
        'button-secondary': grayDark,
        'button-secondary-hover': '#D8D8D8',
        'button-secondary-selected': grayDarker,
      },
      fontFamily: {
        'lato': ['lato', 'sans-serif'],
        'montserrat': ['montserrat', 'sans-serif']
      },
    },
    fontSize: {
      xs: ['13px','24px'],
      sm: ['14px','17px'],
      md: ['16px','19px'],
      lg: ['19px','23px']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}