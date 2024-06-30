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
        green: {
          primary: '#1f8907',
          secondary: '#bfffa2'
        }
      },
      dark: {
        primary: '#24272c',
        secondary: '#191b1f',
        button: {
          primary: '#3f4448',
          secondary: '#232628'
        },
        green: {
          primary: '#3dd30d',
          secondary: '#3ad305'
        }
      },
      status: {
        alive: '#1f8907',
        dead: '#b91c1c',
        unknown: '#374151'
      },
      color: {
        text: '#070809'
      }
    }
  },
  plugins: []
}
