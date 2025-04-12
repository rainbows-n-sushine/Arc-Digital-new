import plugin from 'tailwindcss/plugin';
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Adjust based on content width
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
    },
  },
  plugins: [
    scrollbarHide,
  ],
};
