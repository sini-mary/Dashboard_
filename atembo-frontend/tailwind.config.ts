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
        atembo: {
          green: {
            200: '#B4FCA2',
            900: '#156700'

          },
          gray: {
            200: '#D9D9D9',
            500: '#8492A6',
            900: '#312e2e',
          },
          red: {
            900: '#f01111',
          },
          blue: {
            700: '#211ed4',
          },
          purple: {
            900: '#9c2db5',
          },
          white: {
            900: '#fcfcfc',
          }
        }

      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config