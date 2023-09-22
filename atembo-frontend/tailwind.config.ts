import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './components/**/*.{tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    theme: {
      screens: {
        xs: '280px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'green': '#156700',
        'gray': '#8492A6',
        'gray-light':'#D9D9D9',
        'green-light': '#B4FCA2',
        'dark-grey':'#312e2e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
  },
  },
  plugins: [],
}
export default config