module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 200: "#abb2bf", 900: "#282c33" },
        white: { A700: "#ffffff", A700_01: "#ffffff" },
        purple: { 200: "#c778dd" },
        black: { 600: "#656d76", A700_01: "#000000" },
      },
      boxShadow: { xs: "0px 0px 13px 5px #00000029" },
      fontFamily: { firacode: "Fira Code", opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
