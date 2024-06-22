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
      backgroundImage: {
        'custom-background-cert-contact': "url('/images/bg-certificates-contact.jpg')",
      },
      fontFamily: {
        audiowide: ['Audiowide', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif']
      },
      backgroundColor: {
        'black-60': 'rgba(0, 0, 0, 0.6)',
        'main-buttons': 'linear-gradient(to left, #8c0066, #ff0096)',
        'menu-shadow': 'rgba(0, 0, 0, 0.234)',
      },
      backgroundImage: {
        'gradient-purple-pink': 'linear-gradient(to left, #8c0066, #ff0096)',
      },
      colors: {
        'main-buttons': 'gradient-purple-pink',
        'hover-border': '#ff0096',
        'border-white': '#fffff',
        'border-menu': '#7dfffd',
      },
      screens: {
        'tablet': '1275px',
        'desktop': '1550px'
      },
      boxShadow: {
        'menu': '4px 1px 1px rgba(125, 255, 253, 0.7), 3px 1px 1px rgba(0, 115, 255, 0.7)',
        'menu-boxshadow': '4px 1px 1px rgb(0, 229, 255)' 
      },
      textShadows: {
        'menu-text-shadow': '1px 1px 7px rgb(0, 229, 255)',
      },
      letterSpacing: {
        'tittle': '3px',
        'subtittle': '7px', 
      },
    },
 },
  plugins: [
    function({ addUtilities })
    {
      const newUtilities = {
        '.custom-menu-tablet': {
          position: 'relative',
          display: 'block',
          width: '100%',
          letterSpacing: '1.7px',
          borderBottomWidth: '2px',
          borderStyle: 'solid',
          textAlign: 'center',
          fontFamily: 'Audiowide',
          fontSize: '1.1rem',
          textDecoration: 'none',
          textTransform: 'uppercase',
          padding: '10px 0',
          transitionProperty: 'all',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'ease-in-out',
          backgroundColor: 'rgba(0, 0, 0, 0.234)',
          boxShadow: '4px 1px 1px rgba(0, 125, 255, 0.7), 3px 1px 1px rgba(0, 255, 0, 0.7)',
          color: '#fffc00',
        },
        '.custom-menu-tablet:hover': {
          width: '130%',
          color: '#ffffff',
          textShadow: '1px 1px 7px rgba(0, 229, 255)',
          borderBottomWidth: '4px',
          boxShadow: '4px 1px 1px rgba(0, 229, 255, 0.7), 3px 1px 1px rgba(0, 115, 255, 0.7)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
});