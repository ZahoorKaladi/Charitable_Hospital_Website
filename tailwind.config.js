/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Add custom font families
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        urdu: ['"Noto Nastaliq Urdu"', 'serif'], // Urdu font
      },
      // Keyframes
      keyframes: {
        pulseLight: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
          '50%': { transform: 'scale(1.05)', opacity: 1 },
        }
      },
      // Animations
      animation: {
        pulseLight: 'pulseLight 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
