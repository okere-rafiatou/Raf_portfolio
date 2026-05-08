import React, { useState, useRef } from 'react';
import { ArrowLeft, CheckCircle, XCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../utils/constants';

const EMAILJS_SERVICE_ID  = 'service_r9rx4zi';
const EMAILJS_TEMPLATE_ID = 'template_zwsvhd2';
const EMAILJS_PUBLIC_KEY  = 'czVt7DvVIIwEoOvRf';

const validate = (data) => {
  const errors = {};
  if (!data.firstName.trim()) errors.firstName = 'First name is required.';
  if (!data.lastName.trim())  errors.lastName  = 'Last name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email.';
  }
  if (!data.subject.trim()) errors.subject = 'Subject is required.';
  if (!data.message.trim()) {
    errors.message = 'Message is required.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
};

const inputClass = (error) =>
  `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-navy text-slate-900 dark:text-white transition-colors ${
    error
      ? 'border-red-400 focus:ring-red-400'
      : 'border-slate-300 dark:border-slate-600 focus:ring-stone-500'
  }`;

const Contact = ({ setActiveSection }) => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('loading');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          firstName: formData.firstName,
          lastName:  formData.lastName,
          name:      `${formData.firstName} ${formData.lastName}`,
          email:     formData.email,
          subject:   formData.subject,
          message:   formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error('EmailJS error status:', err?.status);
      console.error('EmailJS error text:', err?.text);
      console.error('EmailJS error full:', JSON.stringify(err));
      setStatus('error');
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gray-100 dark:bg-navy">
      <div className="max-w-7xl mx-auto">

        <button
          onClick={() => setActiveSection('home')}
          className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-stone-700 dark:hover:text-orange-400 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to home</span>
        </button>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* Colonne gauche */}
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
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Phone</h3>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
                  className="text-lg text-slate-600 dark:text-slate-400 hover:text-stone-700 transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email</h3>
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
          <div className="bg-white dark:bg-navy-light p-6 sm:p-8 rounded-2xl shadow-lg">

            {/* Message de succès */}
            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 mb-6 bg-green-50 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl text-green-700 dark:text-green-300">
                <CheckCircle size={20} className="flex-shrink-0" />
                <p className="font-medium">Your message has been sent successfully!</p>
              </div>
            )}

            {/* Message d'erreur serveur */}
            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 mb-6 bg-red-50 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl text-red-700 dark:text-red-300">
                <XCircle size={20} className="flex-shrink-0" />
                <p className="font-medium">Something went wrong. Please try again.</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">

              {/* Prénom et Nom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClass(errors.firstName)}
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClass(errors.lastName)}
                  />
                  {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email et Objet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass(errors.email)}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass(errors.subject)}
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={inputClass(errors.message) + ' resize-none'}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              {/* Bouton Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-lg font-black text-white hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'loading'
                    ? <Loader size={28} className="animate-spin" />
                    : 'Send'
                  }
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
