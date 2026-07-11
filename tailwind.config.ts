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
          DEFAULT: '#12181A',
          light: '#1B2427',
        },
        paper: {
          DEFAULT: '#F6F2EA',
          dark: '#0F1416',
        },
        electric: {
          DEFAULT: '#0EA394',
          50: '#E9FBF8',
          400: '#22D3C4',
          500: '#0EA394',
          600: '#0B8177',
        },
        signal: {
          DEFAULT: '#7C3AED',
          400: '#A78BFA',
        },
        glow: {
          DEFAULT: '#E85D2A',
          400: '#FF7A45',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'aurora-gradient':
          'radial-gradient(circle at 20% 20%, rgba(14,163,148,0.22), transparent 40%), radial-gradient(circle at 80% 0%, rgba(124,58,237,0.18), transparent 40%), radial-gradient(circle at 50% 100%, rgba(232,93,42,0.15), transparent 40%)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        sheen: {
          '0%': { left: '-60%' },
          '100%': { left: '130%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        sheen: 'sheen 2.6s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;