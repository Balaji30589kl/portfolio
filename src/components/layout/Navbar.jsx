import { useMemo, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import { fadeIn, fadeInUp, staggerContainer } from '../../utils/motion';
import { scrollToSelector } from '../../utils/dom';

const navItems = [
  { label: 'About', target: '#about', type: 'section' },
  { label: 'Education', target: '#education', type: 'section' },
  { label: 'Projects', target: '#projects', type: 'section' },
  { label: 'Achievements', target: '#achievements', type: 'section' },
  { label: 'Certifications', target: '#certifications', type: 'section' },
  { label: 'Experience', target: '#experience', type: 'section' },
  { label: 'Contact', target: '#contact', type: 'section' },
  { label: 'Blog', target: '/blog', type: 'route' },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomeRoute = location.pathname === '/';

  const sectionItems = useMemo(() => navItems.filter((item) => item.type === 'section'), []);
  const routeItems = useMemo(() => navItems.filter((item) => item.type === 'route'), []);

  const handleSectionClick = (target) => {
    setIsMobileOpen(false);
    if (!isHomeRoute) {
      navigate('/', { replace: false });
      setTimeout(() => {
        scrollToSelector(target, 120);
        window.history.replaceState(null, '', target);
      }, 220);
    } else {
      scrollToSelector(target, 120);
      window.history.replaceState(null, '', target);
    }
  };

  return (
    <header className="sticky top-0 z-50 mx-auto mt-6 w-full max-w-6xl px-6 md:px-10">
      <Motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel flex items-center justify-between px-5 py-4"
      >
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          <span className="gradient-text text-xl font-bold tracking-tight">Balaji</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {sectionItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleSectionClick(item.target)}
              className="text-sm font-medium text-slate-600 transition hover:text-accent-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-300 dark:focus-visible:ring-offset-slate-900"
            >
              {item.label}
            </button>
          ))}
          {routeItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.target}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-accent-cyan' : 'text-slate-600 hover:text-accent-cyan dark:text-slate-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <ThemeToggle />
          <Motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="hidden rounded-md border border-slate-200/70 bg-white/70 px-3 py-1.5 text-sm font-semibold text-transparent shadow-sm transition hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-slate-900/50 dark:focus-visible:ring-offset-slate-950 lg:inline-block bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            Resume
          </Motion.a>
          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-slate-700 transition hover:border-accent-cyan/30 hover:text-accent-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:focus-visible:ring-offset-slate-950 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <Motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="mt-3 rounded-3xl border border-slate-200/70 bg-white/90 p-6 backdrop-blur-xl shadow-lg dark:border-white/10 dark:bg-slate-900/90 lg:hidden"
          >
            <Motion.ul
              variants={staggerContainer(0.08)}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-3"
            >
              {sectionItems.map((item) => (
                <Motion.li key={item.label} variants={fadeInUp}>
                  <button
                    type="button"
                    onClick={() => handleSectionClick(item.target)}
                    className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-left text-base font-medium text-slate-700 transition hover:border-accent-cyan/30 hover:text-accent-cyan dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200"
                  >
                    {item.label}
                  </button>
                </Motion.li>
              ))}
              {routeItems.map((item) => (
                <Motion.li key={item.label} variants={fadeInUp}>
                  <NavLink
                    to={item.target}
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-base font-medium transition dark:border-white/10 dark:bg-slate-900/60 ${
                        isActive
                          ? 'border-accent-cyan/40 text-accent-cyan'
                          : 'text-slate-700 hover:border-accent-cyan/30 hover:text-accent-cyan dark:text-slate-200'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </Motion.li>
              ))}
              <Motion.li variants={fadeInUp}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileOpen(false)}
                  className="block rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-base font-semibold text-transparent transition hover:shadow-glow dark:border-white/10 dark:bg-slate-900/60 bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
                >
                  Resume
                </a>
              </Motion.li>
            </Motion.ul>
          </Motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileOpen && (
          <Motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm dark:bg-slate-950/60 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

