import React, { useState, useEffect, useRef } from 'react';
import { SKILLS } from '../utils/constants';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Observer pour déclencher l'animation quand la section est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Titre de section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A diverse set of skills to build solutions that make a real difference
          </p>
        </div>
        
        {/* Barres de compétences */}
        <div className="space-y-8">
          {SKILLS.map((skill, index) => (
            <div 
              key={skill.name}
              className="space-y-3"
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out'
              }}
            >
              {/* Nom et pourcentage */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full">
                  {skill.level}%
                </span>
              </div>
              
              {/* Barre de progression */}
              <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                {/* Barre animée avec gradient */}
                <div
                  className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {/* Effet de brillance animée */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Message d'encouragement */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 italic">
            "Creativity is intelligence having fun."
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
            - Albert Einstein
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;