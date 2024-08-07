let grayDarker = '#414141';
let grayDark = '#707070';
let green = '#B4ECC7';
let greenDark = '#97E8AA';
let tealDark = '#53B8B7';
let teal = '#AADCDC';
let pink = '#C481D1';

module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
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
        'turquoise': '#3AAFA0',
        'teal': {
          darker: '#4D7578',
          dark: tealDark,
          DEFAULT: teal,
          light: '#CFF5F5',
          lighter: '#F7FFFE'
        },
        'gray': {
          darker: grayDarker,
          dark: grayDark,
          DEFAULT: '#8D8D8D',
          light: '#C9C9C9',
          lighter: '#F8F8F8',
          lightest: '#FCFCFC',
        },
        'green': {
          DEFAULT: green,
          dark: greenDark,
          darker: '#289F76'
        },
        'pink': {
          DEFAULT: pink,
          light: '#FBE6FF',
          lighter: '#FBF7FB',
        },
        'purple': {
          dark: '#491457',
          DEFAULT: '#6B58AC',
          light: '#9990DB',
          lighter: '#DFD4FF',
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
        'button-primary': teal,
        'button-primary-hover': grayDark,
        'button-primary-selected': pink,
        'button-secondary': grayDark,
        'button-secondary-hover': '#6F6F6F',
        'button-secondary-selected': pink,
        'button-tertiary': '#EFEFEF',
        'button-tertiary-hover': '#D8D8D8',
        'button-tertiary-selected': grayDarker,
        'button-confirm': green,
        'button-confirm-hover': greenDark,
      }
    },
    fontSize: {
      xxs: ['11px','13px'],
      xs: ['13px','24px'],
      sm: ['14px','17px'],
      md: ['16px','19px'],
      lg: ['18px', '22px']
    }
  }
}

