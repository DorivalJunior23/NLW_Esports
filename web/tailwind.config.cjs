/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily:{
      sans: ['Inter', 'Sans-Sherif']
    },
    extend: {
      backgroundImage:{
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient':'linear-gradient(79.86deg, #9572FC 20.08%, #43E7AD 54.94%, #E1D55D 44.57%)',
        'game-gredient':'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },
    },
  },
  plugins: [],
}

