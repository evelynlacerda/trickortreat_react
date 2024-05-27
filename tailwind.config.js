/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/**/**/*.{ts,tsx}"
  ],
	theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "background": "#00162B",
        blue: {
          "1": "#000D1B",
          "2": "#002140",
        },
        pumpkin: {
          "dark": "#FF9900",
          "light": "#FFE600",
        },
      },
      backgroundImage: {
        'pumpkin-bg': "url('./src/assets/img/top-bg.png')",
      }
		},
	},
	plugins: [],
};
