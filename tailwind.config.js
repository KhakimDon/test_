module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D80913",
        success: {
          DEFAULT: "#49B97D",
        },
        light: {
          DEFAULT: "#EBF0F5",
        },

        white: {
          DEFAULT: "#FFFFFF",
          100: "#F2F3F7",
          200: "#D9D9D9",
          300: "#DBDFE8",
          400: "#F8F8FD",
        },
      },
      fontFamily: {
        golos: ["Golos Text", "sans-serif"],
        helvetica: ["Helvetica Neue", "sans-serif"],
        euclid: ["Euclid circular", "sans-serif"],
      },
      zIndex: {
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [],
};
