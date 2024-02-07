/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/assets/section-1/bg.png')",
        "section2-bg": "url('/src/assets/section-2/bg.png')",
        "section4-bg": "url('/src/assets/section-4/bg.png')",
      },
      colors: {
        orange: "#f4763d",
        dark: "#1c1c1c",
      },
    },
  },
  plugins: [],
};
