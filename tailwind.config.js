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
        primary: "#E0AAFF",
        secondary: "#461F8B",
        accent: "#9de19b",
        // text: "#E0AAFF",
        text: "#E8E4F0",
        black2: "#050315",
      },
    },
  },
  plugins: [],
};
