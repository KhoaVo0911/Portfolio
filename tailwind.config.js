/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./main.jsx", "./index.html", "./src/**/*.{js,ts,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mova: ["Mova", "sans-serif"],
        michroma: ["Michroma", "sans-serif"],
        beckman: ["Beckman", "sans-serif"],
        rexlia: ["Rexlia", "sans-serif"],
      },
      spacing: {
        px: "1px",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
        68: "17rem",
        70: "17.5rem", // 280px
        "32px": "32px",
        "34px": "34px",
        "174px": "174px",
        "224px": "224px",
        "2px": "2px",
      },
    },
  },
  plugins: [],
};

export default config;
