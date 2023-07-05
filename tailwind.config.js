/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        gradient: {
          left: "#AD6000",
          right: "#FFD924",
        },
      },
      
    },
  },
  plugins: [],
};
