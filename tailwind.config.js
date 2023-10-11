// const colors = require('tailwindcss/colors');
let grayDarker = '#414141';
let grayDark = '#707070';
let pinkDark = '#C481D1';
let greenLight = '#B4ECC7';

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
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
    fontFamily: {
      'lato': ['lato', 'sans-serif'],
      'montserrat': ['montserrat', 'sans-serif']
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
        'green-light': greenLight,
        'pink': {
          dark: pinkDark,
          DEFAULT: '#C788D3',
          light: '#FBE6FF',
          lighter: '#FBF7FB',
        },
        'purple': {
          DEFAULT: '#491457',
          light: '#DFD4FF',
        },
        'red': {
          darker: '#C71D1D',
          dark: '#DE5965',
          DEFAULT: '#E18683',
          light: '#F8D4D3',
          lighter: '#FFF5F5'
        },
        'white': '#FFFFFF',

        'yellow': {
          darker: '#967E0C',
          dark: '#F6C350',
          DEFAULT: '#FFF7D2',
          light: '#FEF9EB'
        },

        //button colors
        'button-primary': grayDarker,
        'button-primary-hover': '#6F6F6F',
        'button-primary-selected': pinkDark,
        'button-secondary': '#EFEFEF',
        'button-secondary-hover': '#D8D8D8',
        'button-secondary-selected': grayDarker,
        'button-confirm': greenLight,
        'button-confirm-hover': '#97E8AA',
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