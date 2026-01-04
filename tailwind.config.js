/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00ff41", // Neon Green
        "alert": "#ff0055",   // Alert Red
        "background-dark": "#0a0a0a", // Deep Void Black
        "glass": "rgba(255, 255, 255, 0.05)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "neon": "0 0 10px rgba(0, 255, 65, 0.5), 0 0 20px rgba(0, 255, 65, 0.3)",
        "alert": "0 0 10px rgba(255, 0, 85, 0.5), 0 0 20px rgba(255, 0, 85, 0.3)",
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}

