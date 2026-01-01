/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFFFFF",
          foreground: "#0F172A", // Slate 900
        },
        secondary: {
          DEFAULT: "#F3F4F6", // Gray 100
          foreground: "#1F2937", // Gray 800
        },
        accent: {
          DEFAULT: "#FACC15", // Yellow 400 (Construction Yellow)
          foreground: "#1E293B", // Slate 800
        },
        highlight: {
          DEFAULT: "#3B82F6", // Blue 500
        },
        muted: {
          DEFAULT: "#F1F5F9", // Slate 100
          foreground: "#64748B", // Slate 500
        },
        brand: {
          gray: "#374151", // Steel Gray
          orange: "#FFD700", // Construction Yellow (Replacing Orange)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
