/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'projectTheme' : '#E0DFDD',
        'navIconColor' : '#4E4B4B'
      },
      fontFamily: {
        'inriaSerif' : ['Inria Serif','serif'],
        'interLight': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}