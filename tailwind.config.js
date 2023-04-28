/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    sm: { max: "639px" },
    md: { min: "640px", max: "1023px" },
    lg: { min: "1024px" },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
