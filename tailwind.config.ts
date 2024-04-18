import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        hero: 'calc(100vh - 96px)',
      },
      colors: {
        brand: {
          light: '#439AAD', // Ursprüngliches Blau
          'light-hover': '#377c91', // Hover für Lichtblau
          dark: '#0D505F', // Ursprüngliches Dunkel
          'dark-hover': '#0b454f', // Hover für Dunkel
          gray: '#F0F4F8', // Ursprüngliches Grau
          'gray-hover': '#e2e8f0', // Hover für Grau
          'light-blue': '#D1E8EE', // Ursprüngliches Hellblau
          'light-blue-hover': '#bcdbe3', // Hover für Hellblau
          mint: '#A6D3D0', // Ursprüngliches Mint
          'mint-hover': '#8ebdb5', // Hover für Mint
          text: '#333333', // Textfarbe
        },
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
};
export default config;
