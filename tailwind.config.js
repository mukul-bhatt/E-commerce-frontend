/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('./src/theme/typography');
const { colors } = require('./src/theme/colors');
const { spacing } = require('./src/theme/spacing');

module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./index.tsx", "./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily,
      spacing,
    },
  },
  plugins: [],
};