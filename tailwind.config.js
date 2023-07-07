/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {  DEFAULT: '#E35B2E',  50: '#EFA288',  100: '#ED9376',  200: '#E87752',  300: '#E35B2E',  400: '#BF431A',  500: '#8E3213',  600: '#5C200C',  700: '#2B0F06',  800: '#000000',  900: '#000000',  950: '#000000'},
        secondary: {DEFAULT: "#1D1D1B"},
        background: {DEFAULT: "#FFFFFF"},
        twitter: {
            50: '#effaff',
            100: '#def3ff',
            200: '#b6e9ff',
            300: '#75dbff',
            400: '#2cc9ff',
            500: '#00acee',
            600: '#008fd4',
            700: '#0072ab',
            800: '#00608d',
            900: '#065074',
            950: '#04324d',
            DEFAULT: "#00acee",
        },
        facebook: {
            50: '#f4f6fb',
            100: '#e8ebf6',
            200: '#ccd6eb',
            300: '#a0b4d9',
            400: '#6d8cc3',
            500: '#4a6dad',
            600: '#3b5998',
            700: '#2e4476',
            800: '#2a3c62',
            900: '#273453',
            950: '#1a2137',
            DEFAULT: "#3b5998"
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
