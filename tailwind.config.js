/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      colors: {
        primary: '#ff1700',
        neutral: {
          text: '#080808',
          bg: '#f8f8f8',
        },
      },
    },
  },
  plugins: [],
};
