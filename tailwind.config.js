/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#fdfbf7', // warm white
          cream: '#f2ece4', // soft cream
          accent: '#c0a080', // gold/terracotta accent
          terracotta: '#c97a5e',
          green: '#7b8c7c', // muted green
          brown: '#4a3b32', // espresso brown
          dark: '#2c2420', // charcoal / very dark brown
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
