
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { portfolio } from '../data/portfolio';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = portfolio;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    const isNowDark = document.documentElement.classList.toggle('dark');
    setIsDark(isNowDark);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path 
    ? "text-primary font-black" 
    : "text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary";

  return (
    <header 
      role="banner"
      className={`fixed top-0 left-0 right-0 z-[100] w-full h-20 border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-md' 
        : 'bg-white dark:bg-background-dark border-transparent shadow-none'
    }`}>
      <div className="container mx-auto max-w-[1200px] h-full px-4 md:px-6">
        <div className="flex h-full items-center justify-between">
          <div 
            role="button"
            tabIndex={0}
            className="flex items-center gap-2 cursor-pointer shrink-0 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1" 
            onClick={() => navigate('/')}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-xl font-bold">analytics</span>
            </div>
            <h1 className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">
              {profile.firstName}<span className="text-primary">{profile.lastName}</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex flex-1 justify-center gap-10" aria-label="Main Navigation">
            {navItems.map(item => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`text-sm font-semibold transition-colors ${isActive(item.path)}`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary hover:text-white transition-all focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <span className="material-symbols-outlined text-[20px]">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Mobile Menu"
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[300px] opacity-100 py-6 shadow-xl' : 'max-h-0 opacity-0 py-0 invisible'}`}>
        <nav className="flex flex-col gap-6 px-6" aria-label="Mobile Navigation">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`text-xl font-bold ${isActive(item.path)}`}
              aria-current={location.pathname === item.path ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
