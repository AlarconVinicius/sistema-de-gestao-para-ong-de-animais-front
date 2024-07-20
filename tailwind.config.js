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
      colors:{
        'primaryBlue': '#223287',       
        'lightBlue': '#5CA2DE',       
        'brandOrange': '#F9A870',       
        'lightGray': '#F6F6F6',       
        'darkGray': '#737373',   
        'darkestGray': '#18191Fs',   
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

