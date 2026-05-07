import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, X } from 'lucide-react';
import { PERSONAL_INFO, ABOUT } from '../utils/constants';

const fullText = "Hi! I'm Rafiatou OKERE, a Computer Scientist and Data Enthusiast with a strong background in Mathematics. I love turning complex data into smart solutions that make a real impact. From Machine Learning to Blockchain, I build innovative tech that solves real-world problems.";
const words = fullText.split(' ');

const Hero = ({ setActiveSection }) => {
  const [visibleWords, setVisibleWords] = useState(0);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setVisibleWords(i);
        if (i >= words.length) clearInterval(interval);
      }, 80);
      return () => clearInterval(interval);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
          
          {/* Image à gauche */}
          <div className="flex-shrink-0 order-1 md:order-1">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400 shadow-2xl">
              {/* Image en noir et blanc */}
              <img 
                src="/src/assets/images/raf.jpeg" 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover grayscale"
              />
              {/* Si tu n'as pas encore l'image : */}
              {/* <div className="w-full h-full flex items-center justify-center text-9xl bg-gradient-to-br from-gray-200 to-gray-300">
                👩‍💻
              </div> */}
            </div>
          </div>
          
          {/* Texte à droite */}
          <div className="flex-1 space-y-8 order-2 md:order-2 max-w-2xl">
            {/* Grand titre "Hello World" avec animation */}
            <div className="flex items-center gap-3 md:gap-4">
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-none animate-slideInLeft"
              >
                Hello
              </h1>
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-none animate-slideInRight"
                style={{ animationDelay: '0.4s' }}
              >
                World
              </h1>
            </div>
            
            {/* Section "À propos de moi" */}
            <div className="space-y-4 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              <button
                onClick={() => setShowAbout(true)}
                className="group flex items-center gap-2 cursor-pointer text-left"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white group-hover:underline underline-offset-4 decoration-2 transition-all">
                  About Me
                </h2>
                <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-pulse" />
              </button>
              <p className="text-base md:text-lg text-slate-700 dark:text-slate-400 leading-relaxed min-h-[120px]">
                {words.map((word, i) => (
                  <span
                    key={i}
                    className="inline-block mr-1 transition-all duration-300"
                    style={{
                      opacity: i < visibleWords ? 1 : 0,
                      transform: i < visibleWords ? 'translateY(0)' : 'translateY(12px)',
                      transitionDelay: `${i * 20}ms`,
                    }}
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>
            
            {/* Trois boutons ronds colorés avec animation de défilement */}
            <div className="flex gap-6 pt-6 overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-6 animate-scroll">
                <button
                  onClick={() => setActiveSection('cv')}
                  className="w-36 h-36 md:w-44 md:h-44 flex-shrink-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl md:text-3xl font-black text-black hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg cursor-pointer animate-fadeIn"
                  style={{ animationDelay: '1.2s' }}
                >
                  CV
                </button>
                <button
                  onClick={() => setActiveSection('projets')}
                  className="w-36 h-36 md:w-44 md:h-44 flex-shrink-0 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-2xl md:text-3xl font-black text-black hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg cursor-pointer animate-fadeIn"
                  style={{ animationDelay: '1.5s' }}
                >
                  Projects
                </button>
                <button
                  onClick={() => setActiveSection('contact')}
                  className="w-36 h-36 md:w-44 md:h-44 flex-shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-2xl md:text-3xl font-black text-black hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg cursor-pointer animate-fadeIn"
                  style={{ animationDelay: '1.8s' }}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup About Me */}
      {showAbout && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowAbout(false)}
        >
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Carte popup */}
          <div
            className="relative z-10 w-full max-w-xl bg-[#eceef0] dark:bg-[#1a2535] rounded-3xl overflow-hidden shadow-2xl animate-fadeIn"
            onClick={e => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setShowAbout(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 transition-all"
            >
              <X size={16} className="text-slate-700 dark:text-slate-300" />
            </button>

            {/* Contenu principal */}
            <div className="relative px-8 pt-10 pb-0 flex flex-col sm:flex-row items-start gap-6">

              {/* Photo avec blob décoratif */}
              <div className="relative flex-shrink-0 w-36 h-36">
                <div className="absolute inset-0 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] bg-slate-400/40 dark:bg-slate-600/50 scale-110" />
                <img
                  src="/src/assets/images/raf.jpeg"
                  alt={PERSONAL_INFO.name}
                  className="relative w-full h-full object-cover rounded-[60%_40%_55%_45%/50%_60%_40%_50%] grayscale"
                />
              </div>

              {/* Texte */}
              <div className="flex-1 space-y-3 pb-6">
                <h3 className="text-2xl font-semibold text-slate-700 dark:text-slate-200">
                  Hey, I'm{' '}
                  <span className="text-[#5b8fa8] dark:text-[#7fb3cc] font-bold">
                    {PERSONAL_INFO.name}
                  </span>
                  {' '}
                </h3>
                <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed space-y-2">
                  {PERSONAL_INFO.description.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Réseaux sociaux */}
                <div className="flex items-center gap-4 pt-2">
                  <a href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={PERSONAL_INFO.social.twitter} target="_blank" rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Vagues décoratives en bas */}
            <div className="relative h-24 overflow-hidden">
              <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="absolute bottom-0 w-full">
                <path d="M0,40 C120,80 200,0 300,40 C400,80 450,20 500,40 L500,80 L0,80 Z"
                  fill="rgba(180,190,200,0.25)" />
                <path d="M0,55 C100,30 200,70 320,45 C420,25 470,60 500,50 L500,80 L0,80 Z"
                  fill="rgba(180,190,200,0.35)" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;