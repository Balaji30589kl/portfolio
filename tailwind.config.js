import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    // Layout utilities used in Hero stats
    "flex", "items-center", "justify-between", "justify-center", "gap-4",
    "px-6", "py-4", "rounded-2xl",

    // Backgrounds & borders
    "bg-white/5", "bg-white/10", "bg-white/20",
    "dark:bg-slate-900/40", "dark:bg-slate-900/50", "dark:bg-slate-900/60",
    "border", "border-slate-200/30", "border-slate-200/50", "dark:border-white/10",

    // Stat numbers
    "text-slate-300", "text-slate-400", "text-slate-500",
    "dark:text-slate-200", "dark:text-slate-300", "dark:text-slate-400",

    // Stat labels
    "uppercase", "tracking-wide", "text-xs", "text-sm",

    // Panel container classes
    "backdrop-blur-xl", "shadow-lg", "shadow-card-glow",

    // Gradient text (just in case)
    "bg-gradient-to-r", "from-cyan-400", "via-purple-500", "to-pink-500"
  ],
  theme: {
    extend: {
      colors: {
        'accent-cyan': '#00C9FF',
        'accent-purple': '#A855F7',
        'accent-pink': '#EC4899',
        'accent-teal': '#14B8A6',
        'surface-dim': '#0d1117',
        'surface-glass': 'rgba(15, 23, 42, 0.55)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'glow-gradient':
          'radial-gradient(circle at 20% 20%, rgba(0, 201, 255, 0.45), transparent 55%), radial-gradient(circle at 80% 0%, rgba(168, 85, 247, 0.4), transparent 45%), radial-gradient(circle at 50% 80%, rgba(20, 184, 166, 0.35), transparent 60%)',
        'gradient-primary': 'linear-gradient(135deg, #00C9FF 0%, #A855F7 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #00C9FF 0%, #EC4899 100%)',
        'gradient-accent': 'linear-gradient(90deg, #00C9FF 0%, #A855F7 50%, #EC4899 100%)',
      },
      boxShadow: {
        glow: '0 0 30px rgba(0, 201, 255, 0.4), 0 0 70px rgba(168, 85, 247, 0.3)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.4), 0 0 70px rgba(168, 85, 247, 0.3)',
        glass: '0 10px 45px rgba(15, 23, 42, 0.35)',
        'card-glow': '0 4px 20px rgba(0, 201, 255, 0.15), 0 8px 40px rgba(168, 85, 247, 0.1)',
      },
      borderRadius: {
        glass: '24px',
      },
    },
  },
  plugins: [forms],
};

