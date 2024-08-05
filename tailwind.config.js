module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(0deg, #0073FF, #00C2FF)',
      },
      colors: {
        primary: '#0073FF',
        success: '#49B97D',
        destructive: '#FF493D',
        gray: {
          DEFAULT: "#343540",
          100: '#B2B7D0',
          200: '#B2B7D0',
          300: '#8F96A8',
        },
        disabled: {
          DEFAULT: '#363744',
          text: '#575965',
        },
        blue: {
          DEFAULT: '#0073FF'
        },
        dark: {
          DEFAULT: "#25242A",
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
        golos: ["Golos Text", "sans-serif"],
        helvetica: ["Helvetica Neue", "sans-serif"],
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
    },
  },
  plugins: [],
};
