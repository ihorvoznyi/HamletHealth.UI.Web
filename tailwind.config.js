const poppinsSemiBoldFont = {
  fontWeight: 600, 
  fontFamily: 'Poppins SemiBold',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    fontSize: {
      'display-large': ['57px', { lineHeight: '64px' }],
      'display-medium': ['45px', { lineHeight: '52px' }],
      'display-small': ['36px', { lineHeight: '44px' }],
      'headline-large': ['32px', { lineHeight: '40px' }],
      'headline-medium': ['28px', { lineHeight: '36px' }],
      'headline-small': ['24px', { lineHeight: '32px' }],
      'title-large': ['22px', { lineHeight: '28px', ...poppinsSemiBoldFont }],
      'title-medium': ['16px', { lineHeight: '24px', ...poppinsSemiBoldFont, letterSpacing: '0.15px' }],
      'title-small': ['14px', { lineHeight: '20px', ...poppinsSemiBoldFont, letterSpacing: '0.1px' }],
      'label-large': ['14px', { lineHeight: '20px', ...poppinsSemiBoldFont, letterSpacing: '0.1px' }],
      'label-medium': ['12px', { lineHeight: '16px', ...poppinsSemiBoldFont, letterSpacing: '0.5px' }],
      'label-small': ['11px', { lineHeight: '16px', ...poppinsSemiBoldFont, letterSpacing: '0.5px' }],
      'body-large': ['16px', { lineHeight: '24px', letterSpacing: '0.15px' }],
      'body-medium': ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
      'body-small': ['12px', { lineHeight: '16px', letterSpacing: '0.4px' }],
    },
    colors: {
      black: '#000000',
      'han-blue': '#4366C6',
      'vivid-cerulean': '029FF8',
      cultured: {
        primary: '#F8F8F8',
        secondary: '#F7F2F9'
      },
      green: '#92C2A0',
      inchworm: '#A7E35A',
      lavendar: '#EA94FF',
      mustand: '#F9DB55',
      orange: '#EC8813',
      rajah: '#FFA553',
      red: '#FF0000',
      timberwolf: '#D8D3CF',
      white: '#FFFFFF',

      transparent: 'transparent',
    },
    fontFamily: {
      poppins: ['Poppins Regular', 'sans-serif'],
      'poppins-semi': ['Poppins SemiBold', 'sans-serif'],
      'poppins-bold': ['Poppins Bold', 'sans-serif'],
    },
  },
  plugins: [],
}

