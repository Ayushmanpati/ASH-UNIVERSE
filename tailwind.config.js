/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#4DFFB4',
        darkBg: '#000000',
        cardBg: '#0D0D0D',
        cardBgHover: '#141414',
        textMuted: '#888888',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
