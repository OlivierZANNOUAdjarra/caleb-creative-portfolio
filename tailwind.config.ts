import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A1A3D',
          light: '#132A5C',
        },
        paper: {
          DEFAULT: '#F7F9FC',
          dark: '#0A0F1E',
        },
        electric: {
          DEFAULT: '#3B6EF5',
          50: '#EEF2FF',
          400: '#6D8EF9',
          500: '#3B6EF5',
          600: '#2451D6',
        },
        signal: {
          DEFAULT: '#8B5CF6',
          400: '#A78BFA',
        },
        glow: {
          DEFAULT: '#22D3EE',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'aurora-gradient':
          'radial-gradient(circle at 20% 20%, rgba(59,110,245,0.25), transparent 40%), radial-gradient(circle at 80% 0%, rgba(139,92,246,0.2), transparent 40%), radial-gradient(circle at 50% 100%, rgba(34,211,238,0.15), transparent 40%)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
