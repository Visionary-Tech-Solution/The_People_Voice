/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ['prose', 'prose-sm', 'm-auto'], // Add any other classes you're using
    },
  },
  darkMode: 'class',
   
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },

    extend: {
      backgroundImage: {
        'sale-banner-bg': "url('/src/Assets/Photos/signin.jpeg')",
        'blog-banner': "url('/src/Assets/Photos/signup.jpeg')",
        'contact': "url('/src/Assets/Photos/hero.jpeg')",
        'countImg': "url('/src/Assets/People House Image & Data/Countdown flag.jpeg')"
      },
      colors: {
        'white': '#ffffff',
        'dark': '#000000',
        'primary': '#002868',
        'primary-toned': '#E7EFEB',
        'red': '#B22234',
        'red-toned': '#FAE8E4',
        'gold': '#F6C441',
        'gray': '#8B928F',
        'gray-border': '#F2F2F2',
        'black': "#000000"
      }
    },
  },
  plugins: [require("daisyui")],
}