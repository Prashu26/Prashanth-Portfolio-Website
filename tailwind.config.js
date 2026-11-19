/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0D12',
          surface: '#10131B',
          card: '#131823',
          cardHover: '#181F2E',
          border: '#1E2536',
          borderHover: '#2E3850',
          muted: '#8A94A6',
        },
        accent: {
          blue: '#3B82F6',
          cyan: '#06B6D4',
          violet: '#8B5CF6',
          emerald: '#10B981',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'dots-pattern': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 6s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.3', transform: 'scale(0.98)' },
          '100%': { opacity: '0.6', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
