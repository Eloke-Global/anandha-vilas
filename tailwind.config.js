/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        golden:"#C49871",
        primaryGreen:"#102B2A",
        secGreen:"#042726"
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'zoom-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'zoom-out': {
          '0%': {
            opacity: '0',
            transform: 'scale(1.05)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'flip-x': {
          '0%': {
            transform: 'rotateX(90deg)',
            opacity: '0'
          },
          '100%': {
            transform: 'rotateX(0deg)',
            opacity: '1'
          },
        },
        'flip-y': {
          '0%': {
            transform: 'rotateY(90deg)',
            opacity: '0'
          },
          '100%': {
            transform: 'rotateY(0deg)',
            opacity: '1'
          },
        },
        'bounce-in': {
          '0%': {
            transform: 'scale(0.3)',
            opacity: '0'
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.5'
          },
          '70%': { transform: 'scale(0.9)' },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          },
        },
        'slide-in-elliptic': {
          '0%': {
            transform: 'translateY(600px) rotateX(-30deg) scale(0)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0) rotateX(0) scale(1)',
            opacity: '1'
          },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-left': 'fade-in-left 0.5s ease-out',
        'fade-in-right': 'fade-in-right 0.5s ease-out',
        'zoom-in': 'zoom-in 0.5s ease-out',
        'zoom-out': 'zoom-out 0.5s ease-out',
        'flip-x': 'flip-x 0.5s ease-out',
        'flip-y': 'flip-y 0.5s ease-out',
        'bounce-in': 'bounce-in 0.5s ease-out',
        'slide-in-elliptic': 'slide-in-elliptic 0.5s ease-out',
      },
    },
    
  },
  plugins: [],
}

