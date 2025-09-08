/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Add a custom font family
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      // Add a new keyframe animation
      keyframes: {
        pulseLight: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
          '50%': { transform: 'scale(1.05)', opacity: 1 },
        }
      },
      // Apply the keyframe animation
      animation: {
        pulseLight: 'pulseLight 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}