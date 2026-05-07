import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto">
        
        {/* Contenu principal du footer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          
          {/* Colonne 1 : Téléphone */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">
              Phone
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              {PERSONAL_INFO.phone}
            </p>
          </div>
          
          {/* Colonne 2 : E-mail */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">
              Email
            </h3>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-600 dark:text-slate-400 hover:text-stone-700 dark:hover:text-stone-300 transition-colors break-all"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
          
          {/* Colonne 3 : Suivez-moi */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">
              Follow Me
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-600 dark:text-slate-400 hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={PERSONAL_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-slate-600 dark:text-slate-400 hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-600 dark:text-slate-400 hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
          
          {/* Colonne 4 : Liens légaux */}
         
          {/* Colonne 5 : Copyright */}
          <div className="space-y-2">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              © {currentYear} by {PERSONAL_INFO.name}.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Built with{' '}
              <a 
                href="https://react.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-stone-700 dark:hover:text-stone-300 transition-colors underline"
              >
                React
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;