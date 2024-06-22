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
        bebas: ['Bebas Neue', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif']
      },
      backgroundColor: {
        'black-60': 'rgba(0, 0, 0, 0.6)',
        'main-buttons': 'linear-gradient(to left, #8c0066, #ff0096)',
        'menu-shadow': 'rgba(0, 0, 0, 0.234)',
      },
      backgroundImage: {
        'gradient-purple-pink': 'linear-gradient(to left, #8c0066, #ff0096)',        
        'gradient-glow': 'linear-gradient(to left, #bb00ff4a, #7b00ff66)'
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
          cursor: 'pointer',
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
         '.custom-button': {
          width: '16rem',
          fontFamily: 'Audiowide',
          color: '#fffc00',
          fontSize: '0.9rem',
          '@screen sm': {
          fontSize: '1.2rem',
          },
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(to left, #9D50BB, #6E48AA)',
          backgroundSize: '100% 100%',
          color: 'transparent',
          transition: 'background-position 0.5s',
        },
        '.custom-h1': {
          marginTop: '2em',
          fontFamily: '"Audiowide"',
          fontWeight: '400',
          fontStyle: 'normal',
          color: '#fffc00',
          fontSize: '2.6em',
          textTransform: 'uppercase',
          marginBottom: '1em',
          '@screen lg': {
            fontSize: '4em',
          },
        },
        '.a-neon': {
          position: 'relative',
          borderRadius: '20px',
          width: '270px',
          padding: '16px 50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '0.8em',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.411)',
          margin: '40px',
          transition: '1s',
          textDecoration: 'none',
          overflow: 'hidden',
          fontFamily: '"Audiowide"',
          '-webkit-box-reflect': 'below 1px linear-gradient(transparent, transparent, rgba(128, 128, 128, 0.394))',
          '@screen md': {
            width: '400px',
            padding: '20px 30px',
            margin: '40px auto',
          },
        },
        '.a-neon:hover': {
          background: 'var(--clr)',
          boxShadow: `0 0 10px var(--clr),
                      0 0 30px var(--clr),
                      0 0 60px var(--clr),
                      0 0 100px var(--clr)`,
        },
        '.a-neon::before': {
          content: '""',
          position: 'absolute',
          width: '40px',
          height: '400%',
          background: 'var(--clr)',
          transition: '1s',
          animation: 'animate 2s linear infinite',
        },
        '.a-neon:hover::before': {
          width: '120%',
        },
        '@keyframes animate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        '.a-neon::after': {
          content: '""',
          position: 'absolute',
          inset: '4px',
          backgroundColor: 'rgb(229, 255, 0)',
          transition: '0.5s',
        },
        '.a-neon:hover::after': {
          background: 'var(--clr)',
        },
        '.a-neon span': {
          position: 'relative',
          zIndex: '1',
          fontSize: '1.3em',
          color: 'rgb(0, 0, 0)',
          opacity: '0.8',
          textTransform: 'uppercase',
          letterSpacing: '4px',
        },
        '.a-neon:hover span': {
          opacity: '1',
          color: '#fffc00',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'before', 'after']);
    },
  ],
});