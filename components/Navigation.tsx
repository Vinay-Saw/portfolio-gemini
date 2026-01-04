
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path 
    ? "text-primary font-black" 
    : "text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary";

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] w-full border-b transition-all duration-300 ${
      isScrolled ? 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-gray-200 dark:border-gray-800 shadow-sm' : 'bg-transparent border-transparent'
    }`}>
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shrink-0">
              <span className="material-symbols-outlined text-2xl font-bold">analytics</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white truncate">Vinay<span className="text-primary">Saw</span></h1>
          </div>
          
          <nav className="hidden md:flex flex-1 justify-center gap-10">
            {navItems.map(item => (
              <Link key={item.path} to={item.path} className={`text-base font-semibold transition-colors ${isActive(item.path)}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-slate-700 dark:text-gray-400 hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-[22px]">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden flex items-center justify-center p-2 text-slate-700 dark:text-white"
            >
              <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-6 shadow-xl animate-in fade-in slide-in-from-top-4">
          {navItems.map(item => (
            <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`text-xl font-bold ${isActive(item.path)}`}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navigation;
