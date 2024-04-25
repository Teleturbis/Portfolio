import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
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
      dark: {
        light: '#2c6f7f', // Dunklere Version von Light
        'light-hover': '#245a67',
        dark: '#000', // Dunklere Version von Dark
        'dark-hover': '#061d23',
        gray: '#1A202C', // Dunklere Version von Gray
        'gray-hover': '#2d3748',
        'light-blue': '#97b1b8', // Dunklere Version von Light Blue
        'light-blue-hover': '#8097a1',
        mint: '#5b8f8d', // Dunklere Version von Mint
        'mint-hover': '#4d7673',
        text: '#E2E8F0', // Helle Textfarbe für Dark Mode
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
};
export default config;
