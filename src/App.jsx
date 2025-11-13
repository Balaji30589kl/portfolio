import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

const App = () => (
  <div className="relative min-h-screen bg-white text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
      <div className="h-full w-full bg-glow-gradient" />
    </div>

    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(79,217,255,0.08),transparent_55%)]" />

    <div className="relative z-10 flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pt-16 md:px-10">
        <Outlet />
      </main>
      <Footer />
    </div>
    <ScrollRestoration />
  </div>
);

export default App;
