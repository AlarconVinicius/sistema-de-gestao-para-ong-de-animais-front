const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily:{
        'Nunito': 'Nunito'
      },
      colors:{
        'primaryPurple': '#593B9A',
        'secondaryPurple': '#7259A6',
        'primaryOrange': '#FF9F23',
        'secondaryOrange': '#FE9F5E',
        'neutralBlack1': '#1A1A1A',
        'neutralGrey1': '#3A3A35',
        'neutralGrey2': '#737373',
        'neutralGrey3': '#AFAFAF',
        'neutralWhite1': '#F6F6F6' 
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

