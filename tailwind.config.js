/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.html','./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    
    colors: {
      current: "currentColor",
      transparent: "transparent",

      black: colors.black,
      white: colors.white,
      
      purple: colors.purple,
      pink: colors.pink,
      indigo: colors.indigo,
      blue: colors.blue,
      sky: colors.sky,
      
      ambient: {
        white: "#f5f5f5",
        black: "#1e2626",
      },

      neutral: {
        lighter: "#f5f5f5",
        light: "#c3c7c7",
        DEFAULT: "#7d8181",
        dark: "#444b4b",
        darker: "#1e2626",
      },

      zinc: {
        lighter: "#f5f5f5",
        light: "#d4d4d4",
        DEFAULT: "#737373",
        dark: "#404040",
        darker: "#171717",
      },

      primary: {
        lighter: "#e8f2f3",
        light: "#95c2c6",
        DEFAULT: "#197e85",
        dark: "#11575e",
        darker: "#0a3337",
      },

      secondary: {
        lighter: "#ebf3fe",
        light: "#a5c6fb",
        DEFAULT: "#3676e0",
        dark: "#2a5caf",
        darker: "#193767",
      },

      positive: {
        darker: "#065f46",
        dark: "#047857",
        DEFAULT: "#10b981",
        light: "#6ee7b7",
        lighter: "#d1fae5",
      },

      negative: {
        darker: "#812222",
        dark: "#c92f2f",
        DEFAULT: "#f43f5e",
        light: "#ff8484",
        lighter: "#ffe5e5",
      },

      warning: {
        darker: "#8a6a16",
        dark: "#cc9d24",
        DEFAULT: "#ffc225",
        light: "#ffd568",
        lighter: "#fcedc7",
      },

      info: {
        darker: "#0d446c",
        dark: "#1a7ec8",
        DEFAULT: "#20a1ff",
        light: "#69bffe",
        lighter: "#c2e5ff",
      },
    },
    extend: {

      screens: {
        'xl': '1700px',
        // => @media (min-width: 992px) { ... }
      },

      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: ['tw-elements/dist/plugin'],
}
