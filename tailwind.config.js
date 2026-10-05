/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050816',
          900: '#0A1024',
          800: '#101A33',
          700: '#172342',
          600: '#243153',
          500: '#334265',
        },
        ink: {
          950: '#0B1120',
          900: '#111827',
          800: '#1F2937',
        },
        accent: {
          blue: '#4F8DF7',
          indigo: '#6366F1',
          purple: '#8B5CF6',
          sky: '#38BDF8',
          cyan: '#22D3EE',
          mint: '#34D399',
          amber: '#F59E0B',
          rose: '#FB7185',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'fluid-hero': 'clamp(2.75rem, 6vw + 1rem, 5.75rem)',
        'fluid-h2': 'clamp(1.9rem, 3vw + 1rem, 3.25rem)',
        'fluid-h3': 'clamp(1.25rem, 1.5vw + 1rem, 1.75rem)',
        'fluid-body': 'clamp(0.95rem, 0.45vw + 0.8rem, 1.06rem)',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(15, 23, 51, 0.12)',
        glow: '0 0 40px -8px rgba(79, 141, 247, 0.38)',
        'glow-lg': '0 0 70px -14px rgba(52, 211, 153, 0.35)',
        card: '0 18px 50px -24px rgba(10, 17, 41, 0.25)',
        'card-dark': '0 22px 60px -28px rgba(0, 0, 0, 0.78)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(rgba(79,141,247,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(79,141,247,0.08) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at top, rgba(79,141,247,0.18), transparent 62%)',
        'hero-mesh':
          'linear-gradient(135deg, rgba(79,141,247,0.22), transparent 34%), linear-gradient(225deg, rgba(52,211,153,0.14), transparent 30%), linear-gradient(315deg, rgba(245,158,11,0.12), transparent 38%)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        bob: 'bob 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.62' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
