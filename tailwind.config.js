/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1a120b",    // Luxury Espresso
          gold: "#d4a373",    // Jaggery Gold
          cream: "#fefae0",   // Background
          accent: "#bc6c25",  // Burnt Sugar
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}