/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { animation: {
      // Bounces 5 times 1s equals 5 seconds
      'pulse-short': 'pulse 1s ease-in-out '
    }},
  },
  plugins: [],
}