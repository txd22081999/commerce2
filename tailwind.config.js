const defaultheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      libre: ["Libre Baskerville", "serif"],
    },
    extend: {
      screens: {
        xs: "475px",
        ...defaultheme.screens,
      },
      colors: {
        hover: "#56cfe1",
        background: "#F6F6F8",
        ["sub-text"]: "#878787",
        ["primary-text"]: "#222222",
        ["green-new"]: "#109533",
      },
      fontSize: {
        tiny: "13px",
        ...defaultheme.fontSize,
      },
      boxShadow: {
        "1xl": "1px 1px 3px 0 rgb(0 0 0 / 30%)",
      },
    },
  },
  plugins: [require("tailwindcss-scoped-groups")],
};
