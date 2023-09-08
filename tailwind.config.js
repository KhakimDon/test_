module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        // screens: {
        //   sm:  '1184px'
        // },
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          50: "#FBFBFB",
          100: "#E5E7EE",
          200: "#ECF3FA",
          300: "#F0F0F5",
          400: "#F5F5F6",
          // 150: "#FCFCFC",
          // 200: "#F6F8FA",
          // 300: "#E5EFFE",
          // 500: "#FCFDFE",
        },
        blue: {
          DEFAULT: "#4489F7",
          100: "#52618F",
          200: "#A2BCDE",
          300: "#ECF2F8",
          400: "#737FA4",
          800: "#022F5E",
          900: "#090E14",
          //
          // 50: "#E8F0FE",
          // 100: "#EAF2FE",
          // 200: "#009EF7",
          // 400: "#3075D7",
          // 500: "#1385FA",
        },
        gray: {
          DEFAULT: "#919299",
          100: "#B8BABE",
          200: "#8E9BA8",
          300: "#E5E7EE",
          400: "#F5F6F7",
          500: "#F5F6F6",
          700: "#596066",
        },
        dark: {
          DEFAULT: "#191F2E",
          100: "#121C25",
          200: "#2C3752",
          300: "#151516",
        },
        red: {
          DEFAULT: "#FF4141",
          100: "#FF5A5A",
        },
        green: {
          DEFAULT: "#51B334",
        },
        yellow: {
          DEFAULT: "#F3C63E",
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
        130: "130%",
        140: "140%",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      zIndex: {
        90: "90",
        100: "100",
      },
      fontSize: {
        "2xs": "0.8125rem", // 13px
        "4.5xl": "2.5rem", // 40px
        "3.5xl": "2rem", // 32px
      },
      boxShadow: {
        card: "0px 3px 20px rgba(18, 28, 37, 0.06)",
        review: "inset 0px -1px 0px rgba(102, 117, 137, 0.3)",
        header: "0px 3px 6px rgba(125, 132, 141, 0.06)",
        blog: "0px 3px 20px rgba(18, 28, 37, 0.06), 0px 4px 30px rgba(18, 28, 37, 0.07), inset 0px -1px 0px rgba(102, 117, 137, 0.3)",
        chat: "0px 28px 28px rgba(0, 0, 0, 0.08)",
        "inner-xs": "inset 0px -1px 0px rgba(255, 255, 255, 0.1)",
        select: "0 8px 24px 0 rgba(25, 30, 54, 0.12)",
      },
    },
  },
  plugins: [],
};
