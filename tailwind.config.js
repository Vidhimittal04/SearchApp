module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fafbfc",
          100: "#f4f4f4",
          400: "#bfbfbf",
          500: "#999999",
          600: "#747474",
          700: "#606060",
          "50_01": "#fcf6fc",
          "400_01": "#aeb0b4",
          "400_02": "#c4c4c4",
        },
        pink: { 50: "#feddee" },
        red: { A200: "#ff6666" },
        blue_gray: { "400_3f": "#8585a73f" },
        light_blue: { 50: "#ddf2ff", 800: "#0076ce" },
        purple: {
          50: "#fdddfe",
          A700_01: "#9300d3",
          A700: "#9400d3",
          "50_01": "#efd9f9",
        },
        cyan: { 100: "#c5eaed" },
        black: { 900: "#000000" },
        white: { A700_01: "#fefefe", A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins", opensans: "Open Sans", inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(45deg ,#feddee,#fcf6fc,#c5eaed,#fdddfe)",
        gradient1: "linear-gradient(135deg ,#0076ce,#9400d3)",
        gradient2: "linear-gradient(144deg ,#0076ce,#9300d3)",
      },
      boxShadow: { bs: "2px 4px  15px 0px #8585a73f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
