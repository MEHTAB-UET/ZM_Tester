/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "250px",
        sm: "450px",
        md: "800px",
        lg: "1280px",
      },

      colors: {
        lightBlue: "#C4E1F6",
      },
    },
  },
  plugins: [],
};
