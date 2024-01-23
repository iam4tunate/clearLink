/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter400: ["inter", "san-serif"],
        inter500: ["inter-medium", "san-serif"],
        inter600: ["inter-semibold", "san-serif"],
        inter700: ["inter-bold", "san-serif"],
      },
      colors: {
        blue: "#175CD3",
        gray50: "#F9FAFB",
        gray100: "#F2F4F7",
        gray200: "#EAECF0",
        gray300: "#D0D5DD",
        gray400: "#98A2B3",
        gray500: "#667085",
        gray600: "#475467",
        gray700: "#344054",
        gray800: "#1D2939",
        gray900: "#101828",
        warning400: "#FDB022",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
