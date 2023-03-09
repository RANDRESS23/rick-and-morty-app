/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        logo: 'url("https://i.postimg.cc/SQ3zVjBZ/avatar-unknown.png")'
      }
    },
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
        },
        green: {
          primary: '#1f8907',
          secondary: '#bfffa2'
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
          primary: '#1f8907',
          secondary: '#e5f4fb'
        },
        green: {
          primary: '#3dd30d',
          secondary: '#bfffa2'
        }
      },
      status: {
        alive: '#1f8907',
        dead: '#b91c1c',
        unknown: '#374151'
      }
    }
  },
  plugins: []
}
