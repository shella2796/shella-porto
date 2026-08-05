/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sora:["Sora", 'sans-serif'],
        galaxy:["DM Sans", "sans-serif"],
        "serif-display":["Instrument Serif", "serif"]
      }
    },
  },
  plugins: [],
}
