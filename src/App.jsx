import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CV from './components/CV';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // 'home', 'cv', 'projets', 'contact'

  // Gérer le mode sombre
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Vérifier la préférence système au chargement
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-50 to-slate-100 dark:bg-navy overflow-x-hidden">
      <div className="min-h-screen overflow-x-hidden">
        
        {/* Navigation */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} setActiveSection={setActiveSection} />
        
        {/* Contenu dynamique selon la section active */}
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'cv' && <CV setActiveSection={setActiveSection} />}
        {activeSection === 'projets' && <Projects setActiveSection={setActiveSection} />}
        {activeSection === 'contact' && <Contact setActiveSection={setActiveSection} />}
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;