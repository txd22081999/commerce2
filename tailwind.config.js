module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        hover: '#56cfe1',
        background: '#F6F6F8',
      },
      boxShadow: {
        '1xl': '1px 1px 3px 0 rgb(0 0 0 / 30%',
      },
    },
  },
  plugins: [],
}
