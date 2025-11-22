/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
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
        'gradient-cyan': 'linear-gradient(135deg, #00D9FF 0%, #33E1FF 50%, #00A8CC 100%)',
        'gradient-cyan-blue': 'linear-gradient(135deg, #00D9FF 0%, #0EA5E9 50%, #0284C7 100%)',
        'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(0, 217, 255, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(14, 165, 233, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(6, 182, 212, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(34, 211, 238, 0.1) 0px, transparent 50%)',
        'gradient-shine': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fadeIn': 'fadeIn 0.5s ease-in',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce': 'bounce 3s ease-in-out infinite',
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
