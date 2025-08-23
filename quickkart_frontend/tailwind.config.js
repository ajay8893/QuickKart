/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }, // adjust based on your thumbnails
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
    },
  },
  plugins: [],
}
