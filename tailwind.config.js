/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00D9FF',
          light: '#33E1FF',
          dark: '#00A8CC',
        },
        secondary: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5',
        },
        accent: {
          cyan: '#00D9FF',
          purple: '#A855F7',
          pink: '#EC4899',
          blue: '#3B82F6',
        },
        dark: {
          DEFAULT: '#000000',
          lighter: '#0F0F0F',
          card: '#1A1A1A',
          border: '#252525',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #000000 0%, #0A0A0A 50%, #000000 100%)',
        'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(0, 217, 255, 0.1) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(99, 102, 241, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(168, 85, 247, 0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(236, 72, 153, 0.1) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fadeIn': 'fadeIn 0.5s ease-in',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.3), 0 0 40px rgba(99, 102, 241, 0.2)' },
          'to': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.6), 0 0 60px rgba(99, 102, 241, 0.4)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
