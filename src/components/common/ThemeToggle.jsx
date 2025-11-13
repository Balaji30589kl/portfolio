import { motion as Motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const variants = {
  light: { rotate: -180, scale: 0.9 },
  dark: { rotate: 0, scale: 1 },
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-200/70 bg-white/80 text-slate-700 transition hover:border-accent-cyan/30 hover:text-accent-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:focus-visible:ring-offset-slate-950"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Motion.div
        key={theme}
        variants={variants}
        initial={{ rotate: theme === 'dark' ? -180 : 180, scale: 0.8 }}
        animate={theme}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5 text-accent-cyan" />
        ) : (
          <Moon className="h-5 w-5 text-accent-purple" />
        )}
      </Motion.div>
    </button>
  );
};

export default ThemeToggle;

