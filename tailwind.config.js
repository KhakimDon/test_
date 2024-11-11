module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "600px",
        },
      },
      screens: {
        500: "500px",
        400: "400px",
        350: "350px",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(0deg, #0073FF, #00C2FF)",
        "red-gradient": "linear-gradient(180deg, #FF87860%, #FD7172100%)",
        "blue-gradient": "",
        "light-blue-gradient":
          "linear-gradient(180deg, rgba(0, 193, 255, 0.40) 0%, rgba(0, 118, 254, 0.00) 82.5%)",
      },
      maxWidth: {
        phone: "600px",
      },
      colors: {
        primary: "#0073FF",
        success: {
          DEFAULT: "#49B97D",
          light: "#00FF75",
          200: "#1CB160",
        },
        light: {
          DEFAULT: "#EBF0F5",
          100: "#DADCE8",
          700: "#8E909D",
          overlay: "rgba(69, 69, 69, 0.8)",
          accent: "rgba(31, 31, 36, 0.15)",
        },
        red: {
          DEFAULT: "#FF493D",
          light: "#FF7C78",
        },
        white: {
          DEFAULT: "#FFFFFF",
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#DBDFE8",
          400: "#F8F8FD",
        },
        gray: {
          DEFAULT: "#343540",
          50: "#868AA1",
          100: "#B2B7D0",
          200: "#B3B7CE",
          300: "#8F96A8",
          400: "#9092A2",
          500: "#9DA0A3",
          600: "#3A393F",
          700: "#4B4B59",
          800: "#34353F",
          900: "#747480",
        },
        slate: {
          DEFAULT: "#616161",
          100: "#D7DBE0",
        },
        yellow: "#FAA04D",
        border: {
          soft: "rgba(255, 255, 255, 0.12)",
        },
        disabled: {
          DEFAULT: "#363744",
          text: "#575965",
        },
        blue: {
          DEFAULT: "#0073FF",
          100: "#3185E7",
        },
        dark: {
          DEFAULT: "#141414",
          500: "rgba(37, 36, 42, 0.6)",
          600: "#1F1F24",
          overlay: "rgba(17, 18, 23, 0.83)",
          accent: "rgba(255, 255, 255, 0.15)",
        },
      },
      gridTemplateColumns: {
        "1-max": "1fr max-content",
        "max-1": "max-content 1fr",
        "max-1-max": "max-content 1fr max-content",
      },
      lineHeight: {
        14: "14px",
        20: "20px",
        23: "23px",
        110: "110%",
        124: "124%",
        130: "130%",
        140: "140%",
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
      borderRadius: {
        10: "10px",
      },
      fontSize: {
        "2xs": "0.8125rem", // 13px
        "4.5xl": "2.5rem", // 40px
        "3.5xl": "2rem", // 32px
      },
    },
  },
  plugins: [],
};
