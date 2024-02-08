/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      "amsi-cond": ["AMSI PRO COND", "sans-serif"],
      bahnschrift: ["BAHNSCHRIFT", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        orange: "#f4763d",
        dark: "#1c1c1c",
      },
    },
  },
  plugins: [],
};
