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
          100: "#ECF3FA",
          150: "#FCFCFC",
          200: "#F6F8FA",
          300: "#E5EFFE",
          400: "#F5F5F6",
          500: "#FCFDFE",
        },
        blue: {
          DEFAULT: "#4489F7",
          50: "#E8F0FE",
          100: "#EAF2FE",
          200: "#009EF7",
          400: "#3075D7",
          500: "#1385FA",
          800: "#022F5E",
        },
        gray: {
          DEFAULT: "#8E9BA8",
          50: "#7D8196",
          100: "#C6CFD7",
          150: "#FAFBFC",
          200: "#DCDCE6",
          250: "#EDF1F5",
          300: "#F5F6F7",
          350: "#EEF2F9",
          400: "#D1D6DC",
          450: "#DDE3EB",
          500: "#EFF0EF",
          550: "#F4F4F4",
          600: "#F9F9F9",
          650: "#3F4254",
          700: "#596066",
        },
        dark: {
          DEFAULT: "#121C25",
          primary: "#353D35",
          100: "#525763",
          800: "#090E14",
          900: "#101010",
        },
        red: {
          DEFAULT: "#EE5253",
          50: "#FDEAEA",
          100: "#FD9459",
          200: "#FC6133",
          300: "#FEF5F5",
        },
        green: {
          DEFAULT: "#00B67A",
          100: "#5DC08D",
          200: "#73CF11",
          300: "#2EA668",
          400: "#F2FAF6",
        },
        social: {
          facebook: "#3B5998",
          twitter: "#1D9BF0",
          telegram: "#2BACEE",
          whatsapp: "#60D669",
        },
        yellow: {
          DEFAULT: "#F3C63E",
          50: "#FDF8E7",
          100: "#FFA24B",
        },
      },
      gridTemplateColumns: {
        "1-max": "1fr max-content",
        "max-1": "max-content 1fr",
        "max-1-max": "max-content 1fr max-content",
        "wrap-4": "repeat(auto-fill, minmax(200px, 1fr))",
      },
      lineHeight: {
        16: "16px",
        20: "20.8px",
        19: "19px",
        130: "130%",
        110: "110%",
        140: "140%",
      },
      fontFamily: {
        sans: ['"Fira Sans"', "sans-serif"],
      },
      zIndex: {
        90: "90",
        100: "100",
      },
      opacity: {
        7: "0.07",
        8: "0.08",
        16: "0.16",
        12: "0.12",
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
      },
      aspectRatio: {
        "business-image": "254 / 166",
      },
      padding: {
        13: "3.25rem", // 52px
      },
    },
  },
  plugins: [],
};
