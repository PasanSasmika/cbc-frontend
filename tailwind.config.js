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
        third: ["Alumni Sans"] 
      },
      colors:{
        primary:"#F1EBE7",
        secondary:"#68513F",
        accent: "#E7DED8"
      },
    },
  },
  plugins: [],
}