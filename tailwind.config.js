/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 3s ease-in-out infinite",
        ping: "ping 2s infinite",
      },
      screens:{
        'xs':'500px'
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-5%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
}

