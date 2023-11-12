/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'spaceMono': ['Space Mono', 'monospace']
      },
      colors: {
        'darkBg': '#1E2B48',
        'lightBg': '#4B699B',
        'boldMain': '#212630',
        'lightBlue': '#0077FF'
      }
    },
  },
  plugins: [require("daisyui")],
};
