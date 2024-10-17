import { radialGradient } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary :  "linear-gradient(to bottom, #000000, #200D42, #4F21A1, #A46EDB)"
      },
      screens: {
        "xs": "480px"
      },
      borderColor: {
        'white-opacity-20': 'rgba(255, 255, 255, 0.2)',
      },
      animation: {
        slider: "slider 0.2s linear forwards"
      },
      keyframes: {
        slider: {
          "0%": {
            transform: "translateX(-20px)",
          },
          "100%": {
            transform: "translateX(0px)",
          }
        }
      }
    },
  },
  plugins: [],
}

