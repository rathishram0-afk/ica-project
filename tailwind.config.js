/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ica: {
          blue: {
            DEFAULT: '#0B2E6B', // Royal Blue
            dark: '#05183B',   // Deep Corporate Blue
            light: '#16489C',  // Medium Royal Blue
            surface: '#F8F9FB', // Very Light Grey / Surface
            border: '#E2E8F0',
          },
          gold: {
            DEFAULT: '#C8A24A', // Luxury Gold
            light: '#DFBF73',   // Soft Gold Accent
            dark: '#9E7B2B',    // Deep Gold
            glow: 'rgba(200, 162, 74, 0.25)'
          },
          navy: '#0A192F',      // Dark Navy Text
          slate: {
            50: '#F8F9FB',
            100: '#F1F5F9',
            800: '#1E293B',
            900: '#0F172A'
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif']
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(11, 46, 107, 0.06)',
        'glass-gold': '0 8px 32px 0 rgba(200, 162, 74, 0.15)',
        'premium': '0 20px 40px -15px rgba(11, 46, 107, 0.08)',
        'gold-glow': '0 0 25px rgba(200, 162, 74, 0.35)',
        'gold-button': '0 4px 20px rgba(200, 162, 74, 0.4)',
        'elevated': '0 25px 50px -12px rgba(11, 46, 107, 0.15)',
        'card-hover': '0 20px 40px -15px rgba(11, 46, 107, 0.12), 0 0 20px rgba(200, 162, 74, 0.08)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px) scaleY(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scaleY(1)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(200, 162, 74, 0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(200, 162, 74, 0.5)' },
        },
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fadeInLeft': 'fadeInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fadeInRight': 'fadeInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fadeInDown': 'fadeInDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scaleIn': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slideDown': 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulseGold': 'pulseGold 3s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
