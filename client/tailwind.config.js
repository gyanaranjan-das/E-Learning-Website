/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f', // Deep black-indigo
        card: '#12121a',       // Darker card bg
        primary: '#7c3aed',    // Violet-600
        secondary: '#a1a1aa',  // Zinc-400 for secondary text
        border: '#24242f',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'violet-gradient': 'linear-gradient(to right, #7c3aed, #9333ea)', 
      }
    },
  },
  plugins: [],
}