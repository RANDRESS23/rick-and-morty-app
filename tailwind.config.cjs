/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      light: {
        primary: '#ffffff',
        secondary: '#f8fafc',
        button: {
          primary: '#0f172a',
          secondary: '#334155'
        },
        blue: {
          primary: '#10a6e9',
          secondary: '#e5f4fb'
        }
      },
      dark: {
        primary: '#0f172a',
        secondary: '#1e293b',
        button: {
          primary: '#0ea5e9',
          secondary: '#38bdf8'
        },
        blue: {
          primary: '#10a6e9',
          secondary: '#e5f4fb'
        }
      }
    }
  },
  plugins: []
}
