/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2563EB',
        },
        slate: {
          dark: '#1E293B',
          DEFAULT: '#64748B',
        },
        background: {
          white: '#FFFFFF',
          light: '#F8FAFC',
          blue: '#EFF6FF',
        },
        accent: {
          green: '#10B981',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
