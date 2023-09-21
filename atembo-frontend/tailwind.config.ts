import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#ECE2E2',
        'custom-green': '#156700',
        'custom-white': '#FFF',
        'custom-black': '#000',
        'custom-red': '#E50E0E', 
      },
    },
  },
  plugins: [],
};

export default config;
