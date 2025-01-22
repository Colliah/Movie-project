/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Sử dụng class để chuyển đổi giữa light và dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}