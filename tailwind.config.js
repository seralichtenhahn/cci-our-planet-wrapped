module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#00092C',
        'primary-orange': '#F35B04',
        'secondary-green': '#034732',
        'secondary-yellow': '#E0A458',
        'accent-green': '#008148',
        'accent-red': '#FF6363',
      },
    },
  },
  plugins: [],
}
