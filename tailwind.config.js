/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Playfair Display"], 
        second: ["Bonheur Royale"],
        accent: ["Inter"] 
      },
      colors:{
        primary:"#F1EBE7",
        secondary:"#68513F",
        accent: "#E7DED8"
      },
      animation: {
        'cssload-loader': 'cssload-loader 2.3s infinite ease',
        'cssload-loader-inner': 'cssload-loader-inner 2.3s infinite ease-in',
      },
      keyframes: {
        'cssload-loader': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(180deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'cssload-loader-inner': {
          '0%': { height: '0%' },
          '25%': { height: '0%' },
          '50%': { height: '100%' },
          '75%': { height: '100%' },
          '100%': { height: '0%' },
        },
      },
    },
  },
  plugins: [],
}