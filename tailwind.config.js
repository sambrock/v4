/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.astro', './src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        default: 'var(--neutral-text)',
        secondary: 'var(--neutral-secondary)',
      },
    },
  },
  plugins: [],
};
