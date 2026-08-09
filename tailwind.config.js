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
        'gold-button': '0 4px 20px rgba(200, 162, 74, 0.4)'
      }
    },
  },
  plugins: [],
}
