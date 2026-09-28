import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0a0a',
          panel: '#111111',
          orange: '#f97316',
          amber: '#fbbf24',
          soft: '#fde68a',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(249, 115, 22, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
