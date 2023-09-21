import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      'module-input': {
        width: '501px',
        height: '56px',
        backgroundColor: '#ECE2E2',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
      },
      boxShadow: {
        'custom': '0 2px 4px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
