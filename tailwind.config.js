/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.astro', './src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        default: 'var(--neutral-text)',
        secondary: 'var(--neutral-secondary)',
        tertiary: 'var(--neutral-tertiary)',
      },

      transitionTimingFunction: {
        ease: 'cubic-bezier(0.55,0.085,0.68,0.53)',
      },
    },
  },
  plugins: [],
};
