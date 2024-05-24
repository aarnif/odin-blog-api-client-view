/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        body: ["SF-Pro-Display-Regular", "sans-serif"],
        title: ["SF-Pro-Display-Bold", "sans-serif"],
        subtitle: ["SF-Pro-Display-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
