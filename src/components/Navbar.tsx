
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Templates', href: '#templates' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out py-4',
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-800/50' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
              resumeAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors link-underline"
              >
                {item.name}
              </a>
            ))}
            
            {/* Dark mode toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            
            {/* CTA Button */}
            <Link
              to="/editor"
              className="bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-colors"
            >
              Create Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                {item.name}
              </a>
            ))}
            <Link
              to="/editor"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-black text-white dark:bg-white dark:text-black px-3 py-2.5 mt-4 rounded-lg text-base font-medium hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-colors"
            >
              Create Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
