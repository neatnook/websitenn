/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        apricot: {
          50: '#fef4e9',
          100: '#fde9d3',
          200: '#fbd3a7',
          300: '#f9bd7b',
          400: '#f7882f', // Main apricot color
          500: '#f67d24',
          600: '#e5721f',
          700: '#bf5f1a',
          800: '#994c15',
          900: '#7d3e10',
        },
      },
    },
  },
  plugins: [],
};