const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide', 'sans-serif'],
      },
      backgroundColor: {
        'black-60': 'rgba(0, 0, 0, 0.6)',
        'main-buttons': 'linear-gradient(to left, #8c0066, #ff0096)',
      },
      backgroundImage: {
        'gradient-purple-pink': 'linear-gradient(to left, #8c0066, #ff0096)',
      },
      colors: {
        'main-buttons': 'gradient-purple-pink',
        'hover-border': '#ff0096',
        'border-white': '#fffff',
      },
      screens: {
        'tablet': '1275px',
        'desktop': '1550px'
      },
    },
  },
  plugins: [],
});