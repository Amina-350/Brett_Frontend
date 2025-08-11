/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        
        // geist: 'var(--font-geist-sans)',
        // mono: 'var(--font-geist-mono)',
        // koulen: 'var(--font-koulen)',
        // schwifty: 'var(--font-get-schwifty)',
        // nunito: 'var--font-nunito)',
      },
      screens: {
        '3xl': '1900px',
      },
      backgroundImage: {
        pinkGrad: 'linear-gradient(90deg, #EF53C0 0%, #FFB3E8 100%)',
      },
    },
  },
  plugins: [],
};
