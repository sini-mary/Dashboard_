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
        gray: '#E5E5E5',
        green: '#156700',
        white: '#FFF',
        black: '#000',
        red: '#E50E0E', 
      },
    },
  },
  plugins: [],
};

export default config;
