/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
    },
    colors: {
    gray:{  
     100: "#f2f2f2",
     200: "#d9d9d9",
     300: "#808080",
     400: "#333333",
     500: "#262626",
     600: "#1a1a1a",
     700: "#0d0d0d",
  },
     purple: {
      "100": "#8284fa",
      "200": "#5e60ce",
     },
   
     blue: {
     "100": "#4ea8de",
     "200": "#1e6f9f",
     },

     "danger": "#e25858",
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
