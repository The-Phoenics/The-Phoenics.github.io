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
      homeLinearGradient: ["linear-gradient(0deg, rgba(26,11,46,1) 0%, rgba(26,11,46,1) 4%, rgba(26,11,46,0.9192051820728291) 26%, rgba(26,11,46,0.8995973389355743) 100%)"]
    }
  },
  plugins: [],
}