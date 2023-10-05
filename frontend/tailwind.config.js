/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
  screens: {
    sm: '394px',
    md: '780px',
    lg: '1024px',
    xl: '1280px',
  },
};
