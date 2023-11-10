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
      'title-large': ['22px', { lineHeight: '28px',  }],
      'title-medium': ['16px', { lineHeight: '24px', fontWeight: 600, letterSpacing: '0.15px' }],
      'title-small': ['14px', { lineHeight: '20px', fontWeight: 600, letterSpacing: '0.1px' }],
      'label-large': ['14px', { lineHeight: '20px', fontWeight: 600, letterSpacing: '0.1px' }],
      'label-medium': ['12px', { lineHeight: '16px', fontWeight: 600, letterSpacing: '0.5px' }],
      'label-small': ['11px', { lineHeight: '16px', fontWeight: 600, letterSpacing: '0.5px' }],
      'body-large': ['16px', { lineHeight: '24px', letterSpacing: '0.15px' }],
      'body-medium': ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
      'body-small': ['12px', { lineHeight: '16px', letterSpacing: '0.4px' }],
    },
    colors: {
      black: '#000000',
      'han-blue': '#4366C6',
      'vivid-cerulean': '#029FF8',
      snow: '#FFFBFE',
      cultured: {
        primary: '#F8F8F8',
        secondary: '#F7F2F9'
      },
      gainsboro: '#DFDFDF',
      green: '#92C2A0',
      inchworm: '#A7E35A',
      lavendar: '#EA94FF',
      mustand: '#F9DB55',
      orange: '#EC8813',
      'royal-purple': '#6750A4',
      rajah: '#FFA553',
      red: '#FF0000',
      timberwolf: '#D8D3CF',
      'eerie-black': '#1c1b1f',
      'sonic-silver': '#79747e',
      white: '#FFFFFF',

      transparent: 'transparent',
    },
    extend: {
      backgroundColor: {
        inherit: 'inherit'
      },
      boxShadow: {
        'gray': '0px 4px 20px 0px rgba(0, 0, 0, 0.15)',
        'black': '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)'
      }
    },
    fontFamily: {
      'poppins-400': ['Poppins Regular', 'sans-serif'],
      'poppins-500': ['Poppins Medium', 'sans-serif'],
      'poppins-600': ['Poppins SemiBold', 'sans-serif'],
      'poppins-700': ['Poppins Bold', 'sans-serif'],
      'roboto-400': ['Roboto Regular', 'sans-serif'],
      'roboto-500': ['Roboto Medium', 'sans-serif']
    },
  },
  plugins: [],
};

