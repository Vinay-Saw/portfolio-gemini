
import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import { portfolio } from './data/portfolio';

// Lazy load pages for optimized performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AIConsultant = lazy(() => import('./pages/AIConsultant'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LoadingFallback = () => (
  <div className="flex-grow flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-slate-500 font-medium animate-pulse text-xs uppercase tracking-widest">Loading</p>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
          {portfolio.profile.firstName} <span className="text-primary">{portfolio.profile.lastName}</span>
        </span>
        <p className="text-slate-500 text-sm mt-2">{portfolio.profile.role} & IIT Madras Data Science Student.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold">
        <a href={portfolio.profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-slate-600 dark:text-slate-300">LinkedIn</a>
        <a href={`mailto:${portfolio.profile.email}`} className="hover:text-primary transition-colors text-slate-600 dark:text-slate-300">Email</a>
        <a href={portfolio.profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-slate-600 dark:text-slate-300">GitHub</a>
      </div>
      <p className="text-slate-400 text-xs text-center md:text-right">© {new Date().getFullYear()} {portfolio.profile.name}. Built with Gemini 3.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  // Automatic Theme Switcher Logic
  useEffect(() => {
    const setInitialTheme = () => {
      const hour = new Date().getHours();
      const isDaytime = hour >= 6 && hour < 18;
      
      // We respect user preference if they've manually toggled before in the current session
      // But for initial load, we follow the time of day
      if (isDaytime) {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    };
    
    setInitialTheme();
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white selection:bg-primary/20 transition-colors duration-500">
        <Navigation />
        <main className="flex-grow pt-20">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Suspense fallback={null}>
          <AIConsultant />
        </Suspense>
      </div>
    </HashRouter>
  );
};

export default App;
