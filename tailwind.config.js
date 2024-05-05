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
    colors: {
      'black': 'rgb(var(--color-black) / <alpha-value>)',
      'bright-gray': '#EFEFEF',
      'dark-charcoal': '#323232',
      'han-blue': '#4366C5',
      'vivid-cerulean': 'rgb(var(--color-vivid-cerulean) / <alpha-value>)',
      'snow': 'rgb(var(--color-snow) / <alpha-value>)',
      'cultured': {
        'primary': 'rgb(var(--color-cultured-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--color-cultured-secondary) / <alpha-value>)',
      },
      'gainsboro': 'rgb(var(--color-gainsboro) / <alpha-value>)',
      'green': '#92C2A0',
      'inchworm': 'rgb(var(--color-inchworm) / <alpha-value>)',
      'lavendar': 'rgb(var(--color-lavendar) / <alpha-value>)',
      'light-silver': 'rgb(var(--color-light-silver) / <alpha-value>)',
      'mustand': 'rgb(var(--color-mustand) / <alpha-value>)',
      'orange': 'rgb(var(--color-orange) / <alpha-value>)',
      'royal-purple': 'rgb(var(--color-royal-purple) / <alpha-value>)',
      'rajah': 'rgb(var(--color-rajah) / <alpha-value>)',
      'red': 'rgb(var(--color-red) / <alpha-value>)',
      'timberwolf': 'rgb(var(--color-timberwolf) / <alpha-value>)',
      'eerie-black': 'rgb(var(--color-eerie-black) / <alpha-value>)',
      'sonic-silver': 'rgb(var(--color-sonic-silver) / <alpha-value>)',
      'white': 'rgb(var(--color-white) / <alpha-value>)',
      'platinum': 'rgb(var(--color-platinum) / <alpha-value>)',

      'mood': {
        'great': '#12C28D',
        'good': '#34BAE4',
        'meh': '#595959',
        'bad': '#EF7650',
        'awful': '#F00000',
      },

      'transparent': 'transparent',
      'inherit': 'inherit'
    },
    extend: {
      boxShadow: {
        'black': '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
        'gray': '0px 4px 20px 0px rgba(0, 0, 0, 0.15)',
      },
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

