import React from 'react';
import { Award, Briefcase } from 'lucide-react';
import { ABOUT } from '../utils/constants';

const About = () => {
  // Map des icônes
  const iconMap = {
    Award: Award,
    Briefcase: Briefcase
  };

  return (
    <section id="a-propos" className="py-20 px-4 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Titre de section */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          {ABOUT.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Description et statistiques */}
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {ABOUT.description}
            </p>
            
            {/* Cartes de statistiques */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {ABOUT.stats.map((stat, index) => {
                const IconComponent = iconMap[stat.icon];
                return (
                  <div 
                    key={index}
                    className={`p-6 bg-gradient-to-br ${stat.color} rounded-xl backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-8 h-8 ${stat.iconColor} mb-3`} />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Image décorative ou informations supplémentaires */}
          <div className="space-y-6">
            <div className="relative">
              {/* Carte avec effet glass */}
              <div className="glass p-8 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  What I'm passionate about
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-xl">✨</span>
                    <span className="text-slate-600 dark:text-slate-400">
                      Building intelligent solutions powered by data and Machine Learning
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">💡</span>
                    <span className="text-slate-600 dark:text-slate-400">
                      Turning complex ideas into clear, impactful digital products
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🎯</span>
                    <span className="text-slate-600 dark:text-slate-400">
                      Exploring Blockchain technology and decentralized applications
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🚀</span>
                    <span className="text-slate-600 dark:text-slate-400">
                      Continuously learning and pushing the boundaries of tech
                    </span>
                  </li>
                </ul>
              </div>
              
              {/* Élément décoratif */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-600 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;