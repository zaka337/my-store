/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom palette for a modern, feminine, and clean look
        'primary-pink': '#FF6B81',     // A vibrant, inviting pink
        'secondary-purple': '#8A2BE2', // A deep, elegant purple
        'accent-gold': '#FFD700',      // A subtle, luxurious gold for accents
        'light-bg': '#F8F8F8',         // Very light grey for background
        'dark-text': '#333333',        // Standard dark text
        'light-text': '#FFFFFF',       // White text for dark backgrounds
        'soft-gray': '#E0E0E0',        // For borders, subtle dividers
      },
      fontFamily: {
        // You might want to import a custom font like 'Playfair Display' or 'Montserrat'
        // For now, sticking to sans-serif, but you can add:
        // sans: ['Montserrat', 'sans-serif'],
        // serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        '18': '4.5rem', // 72px, useful for larger gaps
        '22': '5.5rem', // 88px
        '30': '7.5rem', // 120px
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
