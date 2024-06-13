const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradientPrimary': "linear-gradient(to right, #FF6A00, #EE0979)",
      },
      fontFamily: {
        poppins: "Poppins"
      },
      colors: {
        "darkest": "rgb(17, 22, 37)",
        "purple": "rgb(52, 25, 49)",
        "pink": "rgb(255, 17, 104)",
        "darkPink": "rgb(215, 0, 96)",
        "orange": "rgb(229, 64, 40)",
        "darkYellow": "rgb(241, 141, 5)",
        "yellow": "rgb(242, 188, 6)",
        "green": "rgb(94, 177, 28)",
        "darkGreen": "rgb(58, 118, 52)",
        "lightBlue": "rgb(10, 190, 190)",
        "blue": "rgb(0, 161, 203)",
        "darkBlue": "rgb(17, 87, 147)"
      }
    },
  },
  darkMode: "selector",
  plugins: [nextui()],
};
