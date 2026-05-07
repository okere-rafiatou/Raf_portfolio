import React from 'react';
import { ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../utils/constants';

const Projects = ({ setActiveSection }) => {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Bouton retour */}
        <button 
          onClick={() => setActiveSection('home')}
          className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-stone-700 dark:hover:text-stone-300 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to home</span>
        </button>
        
        {/* Titre de section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore some of my recent projects and the results achieved
          </p>
        </div>
        
        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-navy-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image/Gradient du projet */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                {/* Effet de vague au survol */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                
                {/* Icône flottante */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <ExternalLink className="text-white" size={20} />
                </div>
                
                {/* Pattern décoratif */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
              </div>
              
              {/* Contenu de la carte */}
              <div className="p-6 space-y-4">
                {/* Titre du projet */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies/Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-stone-700 hover:text-white transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Bouton Voir le projet */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 font-semibold group/link transition-all"
                >
                  <span>View project</span>
                  <ArrowRight 
                    size={18} 
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
              
              {/* Bordure animée au survol */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-stone-400/30 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Have a project in mind?
          </p>
          <button
            onClick={() => setActiveSection('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-stone-800 dark:bg-stone-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            Let's work together
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;