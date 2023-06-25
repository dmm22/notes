/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      text: "#fefdfb",
      bg: "#140f05",
      primaryBtn: "#4370cb",
      primaryBtnHover: "#3767c8",
      secondaryBtn: "#241b0a",
      accent: "#4370cb",
      secondaryAccent: "#5c944c",
      secondaryBg1: "#201b12",
      secondaryBg2: "#17140f",
    },
    fontFamily: {
      sans: ["Nunito", "Roboto", "sans-serif"],
      serif: ["Roboto", "serif"],
    },
    extend: {},
  },
  plugins: [],
}
