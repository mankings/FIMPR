/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'grow-slow': 'grow 1s linear infinite',
      }
    }
  },
  daisyui: {
    themes: ["dim","cupcake"],
  },
  plugins: [require("daisyui")],
}

