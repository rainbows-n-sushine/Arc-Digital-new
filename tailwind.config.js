import plugin from 'tailwindcss/plugin';
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
   darkMode: 'media',
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
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
    
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        orbit: "orbit 30s linear infinite",
      },
      
    },
  },
  plugins: [
    scrollbarHide,
  ],
};
