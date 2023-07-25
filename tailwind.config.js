// const colors = require('tailwindcss/colors');
let grayDarker = '#414141';
let grayDark = '#707070';
let pinkDark = '#C481D1';

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '320px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1920px',
    },
    container: {
      center: true,
      padding: {
        xs: 0,
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '325px',
        '3xl': '325px',
      },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'teal': {
          dark: '#53B8B7',
          DEFAULT: '#AADCDC',
          light: '#CFF5F5',
        },
        'gray': {
          darker: grayDarker,
          dark: grayDark,
          DEFAULT: '#8D8D8D',
          light: '#F8F8F8',
          lighter: '#FCFCFC',
        },
        'green-dark': '#289F76',
        'green-light': '#B4ECC7',
        'pink': {
          dark: pinkDark,
          DEFAULT: '#C788D3',
          light: '#FBE6FF',
          lighter: '#FBF7FB',
        },
        'red': {
          darker: '#C71D1D',
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
        'button-secondary': '#EFEFEF',
        'button-secondary-hover': '#D8D8D8',
        'button-secondary-selected': grayDarker,
      },
      fontFamily: {
        'lato': ['lato', 'sans-serif'],
        'montserrat': ['montserrat', 'sans-serif']
      },
    },
    fontSize: {
      xxs: ['11px','13px'],
      xs: ['13px','24px'],
      sm: ['14px','17px'],
      md: ['16px','19px'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}