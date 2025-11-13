import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-cyan': '#4fd9ff',
        'accent-purple': '#9c6bff',
        'accent-teal': '#2dd4bf',
        'surface-dim': '#0d1117',
        'surface-glass': 'rgba(15, 23, 42, 0.55)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'glow-gradient':
          'radial-gradient(circle at 20% 20%, rgba(79, 217, 255, 0.45), transparent 55%), radial-gradient(circle at 80% 0%, rgba(156, 107, 255, 0.4), transparent 45%), radial-gradient(circle at 50% 80%, rgba(45, 212, 191, 0.35), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 25px rgba(79, 217, 255, 0.35), 0 0 60px rgba(156, 107, 255, 0.25)',
        glass: '0 10px 45px rgba(15, 23, 42, 0.35)',
      },
      borderRadius: {
        glass: '24px',
      },
    },
  },
  plugins: [forms],
};

export default config;

