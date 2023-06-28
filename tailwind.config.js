/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
    extend: {
      colors: {
        // for 'primary' and'success'  - use the colorblind-friendly version (blue-grey, cyan-grey, green-grey, orange-grey, purple-grey, red-grey, yellow-grey and violet-grey) and use the hex value.  Also, check out the Color Wheel demo.  Also, check out the Palette demo for the 5 color version.  Also, check out the Paletton demo for the inverse of colors.  Also, check out the Color Wheel demo for the 5 color version.  Also, check out the Paletton demo for the inverse of colors
        primary: {
          100: "#F27405",
          200: "#F2913D",
          300: "#F2B279",
          400: "#F2E7DC",
          500: "#F25C05",
          600: "#262626",
          700: "#2C2C2C",
          800: "#F8F7F6",
          text:'#676767'
        },
      },
      borderRadius: {
        borderRounded: "23% 77% 0% 100% / 0% 67% 33% 100%",
      },
      backgroundImage: {
        gradient: "linear-gradient(95deg, #5555de,#323479)",
        radial: "radial-gradient(#5555de, #323479)",
        conic: "conic-gradient(#5555de , #323479 )",
        sidebar:
          "linear-gradient(-52deg,#1e40af 22%,transparent 20%),linear-gradient(65deg,#172564 35%,transparent 30%),linear-gradient(to bottom, #172554 60%,#3b82f6 100%)",
        ruido1: "url(http://api.thumbr.it/whitenoise-361x370.png?) ",
        ruido2: "ffffffff&noise=a3d3e6&density=100&opacity=19",
        curva1:
          "radial-gradient(ellipse  at 45px 30px , transparent 50%, rgba(0, 255, 0, 0) 0%, #f0f000 0%)",
      },
      keyframes: {
        abrirCat: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        sliceDown: {
          "0%": { maxHeight: "300px", opacity: "1" },
          "100%": { maxHeight: "0px", opacity: "0" },
        },
        sliceUp: {
          "0%": { maxHeight: "0px", opacity: "0" },
          "100%": { maxHeight: "300px", opacity: "1" },
        },
        aparecer: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        hoverFilter: {
          "0%": { Height: "50px" },
          "100%": { Height: "auto" },
        },
        aparecerDeArriba: {
          "0%": { opacity: "0", transform: "translateY(-10%)" },
          "80%": { opacity: "1", transform: "translateY(0%) " },
        },
        desaparecer: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        aparecerCote: {
          "0%": { transform: "scale(0%) translateX(-20%) translateY(-20%)" },
          "100%": { transform: "scale(100%) translateX(0%) translateY(0%)" },
        },
        desaparecerCote: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(150%)" },
        },
      },
      animation: {
        "waving-hand": "abrirCat 2s linear infinite",
        aparecer: "aparecer 1s ease-out ",
        apDeArriba: "aparecerDeArriba .5s ease-in ",
        desaparecerCostado: "desaparecerCote .3s ease-in ",
      },
      boxShadow: {
        shadowCaja1: "10px 10px 25px -7px rgba(66,66,66,0.7)",
        xxxl: "5px 5px 5px rgba(0,0,0,0.1), 15px 15px 15px rgba(0,0,0,0.1), 20px 10px 20px rgba(0,0,0,0.1),50px 50px 80px rgba(0,0,0,0.25), inset 3px 3px 3px #fff  0vtzz5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)AZ",
      },
    },
  },
  plugins: [require("tailwindcss-bg-patterns")],
};
