/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1980px",
    },
    colors: {
      red: "#E73C17",
      black: "#2F333A",
      gray: "#F4F5F8",
      white: "#FFF",
      "gray-light": "#F1F1F1",
      "gray-dark": "#191919",
      "text-dark": "#6f6f6f",
      dark: "#191919",
    },
    fontSize: {
      ".7rem": ".7rem",
      ".8rem": ".8rem",
      "1rem": "1rem",
      "1.2rem": "1.2rem",
      "1.3rem": "1.3rem",
      "1.4rem": "1.4rem",
      "1.5rem": "1.5rem",
      "1.6rem": "1.6rem",
      "1.8rem": "1.8rem",
      "2rem": "2rem",
      "2.4rem": "2.4rem",
      "3.2rem": "3.2rem",
      "4rem": "4rem",
    },
    extend: {
      width: {},
    },
  },
  plugins: [],
};
