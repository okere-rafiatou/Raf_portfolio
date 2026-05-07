import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/constants';

const Contact = ({ setActiveSection }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construction du mailto avec les données du formulaire
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gray-100 dark:bg-navy">
      <div className="max-w-7xl mx-auto">
        
        {/* Bouton retour */}
        <button 
          onClick={() => setActiveSection('home')}
          className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-stone-700 dark:hover:text-orange-400 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to home</span>
        </button>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          
          {/* Colonne gauche - Informations */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-4">
                Contact
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                We look forward to hearing from you
              </p>
            </div>

            <div className="space-y-6">
              {/* Téléphone */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Phone
                </h3>
                <a 
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
                  className="text-lg text-slate-600 dark:text-slate-400 hover:text-stone-700 transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Email
                </h3>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-lg text-slate-600 dark:text-slate-400 hover:text-stone-700 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Colonne droite - Formulaire */}
          <div className="bg-white dark:bg-navy-light p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              
              {/* Prénom et Nom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 bg-white dark:bg-navy text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 bg-white dark:bg-navy text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Email et Objet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 bg-white dark:bg-navy text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 bg-white dark:bg-navy text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 bg-white dark:bg-navy text-slate-900 dark:text-white resize-none"
                ></textarea>
              </div>

              {/* Bouton Submit */}
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500  flex items-center justify-center text-xl font-black text-white hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;