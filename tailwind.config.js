/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        underline: {
          "0%": { width: "100%", right: 0 },
          "25%": { width: "0%", right: 0 },
          "50%": { width: "100%", left: 0 },
          "100%": { width: "100%", right: 0 },
        },
      },
      animation: {
        underline: "underline 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
