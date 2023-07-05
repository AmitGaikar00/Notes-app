/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        gradient: {
          left: "#AD6000",
          right: "#FFD924",
        },
        primary: "#1565D8",
        dark2: {
          light: "#5A7184",
          hard: "#0D2436",
          soft: "#183B56",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
      },
      
    },
  },
  plugins: []
};
