/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/layered-peaks-haikei.svg')",
      },
      fontFamily: {
        montserrat: " 'Montserrat', sans-serif",
      },
      colors: {
        background: "#10002B",
        primary: "#9D4EDD",
        secondary: "#DFA8FF",
        accent: "#203FC9",
        text: "#E0AAFF",
      },
    },
  },
  plugins: [],
};
