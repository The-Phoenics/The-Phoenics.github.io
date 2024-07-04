/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Preahvihear: ['"Preahvihear", sans-serif'],
      Poppins: ['"Poppins", sans-serif']
    },
    backgroundImage: {
      avatarSmallGradient: ["radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(67,67,67,0) 70%)"],
    }
  },
  plugins: [],
}