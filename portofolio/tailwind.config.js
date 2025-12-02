/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vibrant, modern color palette inspired by contemporary design
        brand: {
          orange: '#FFB84D',
          'orange-light': '#FFCB7A',
          'orange-dark': '#F5A623',
          yellow: '#FFC85C',
          peach: '#FFE8CC',
        },
        neutral: {
          white: '#FFFFFF',
          'gray-50': '#F8F9FA',
          'gray-100': '#F1F3F5',
          'gray-200': '#E9ECEF',
          'gray-300': '#DEE2E6',
          'gray-400': '#CED4DA',
          'gray-500': '#ADB5BD',
          'gray-600': '#6C757D',
          'gray-700': '#495057',
          'gray-800': '#343A40',
          'gray-900': '#212529',
          black: '#1A1A1A',
        },
        accent: {
          blue: '#4A90E2',
          'blue-light': '#7EB3FF',
          purple: '#9B59B6',
          pink: '#FF6B9D',
          green: '#2ECC71',
          teal: '#1ABC9C',
          red: '#E74C3C',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'soft-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)',
        'orange': '0 10px 30px -5px rgba(255, 184, 77, 0.4)',
        'blue': '0 10px 30px -5px rgba(74, 144, 226, 0.4)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
    },
  },
  plugins: [],
}
