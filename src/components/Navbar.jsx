import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../utils/constants';

const Navbar = ({ darkMode, setDarkMode, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionName) => {
    // Convertir le nom en clé de section
    const sectionMap = {
      'CV': 'cv',
      'Projects': 'projets',
      'Contact': 'contact'
    };
    
    const section = sectionMap[sectionName] || 'home';
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-navy/90 border-b border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <button 
            onClick={() => setActiveSection('home')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-stone-700 dark:bg-stone-500"></div>
            <span className="text-xl font-bold text-stone-800 dark:text-stone-200">
              {PERSONAL_INFO.name}
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.name)}
                className="text-slate-700 dark:text-slate-300 hover:text-stone-700 dark:hover:text-stone-300 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:scale-110 transition-transform"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-navy border-t border-slate-200 dark:border-white/10 animate-fadeIn">
          <div className="px-4 py-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.name)}
                className="block w-full text-left text-slate-700 dark:text-slate-300 hover:text-orange-500 font-medium py-2"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;