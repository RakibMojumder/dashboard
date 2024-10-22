/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#23262F",
        secondary: "#353945",
        accent: "#3772FF",
      },
      height: {
        "calc-100-10": "calc(100% - 28px)",
      },
    },
  },
  plugins: [],
};
