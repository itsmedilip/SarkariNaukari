
import React from 'react';

interface ContactFormProps {
  t: (key: string) => string;
}

const ContactForm: React.FC<ContactFormProps> = ({ t }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h4 className="text-lg font-bold text-dark-text">{t('contactUs')}</h4>
      <p className="text-sm text-light-text mt-1">{t('contactDescription')}</p>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">{t('name')}</label>
          <input type="text" id="name" placeholder={t('name')} required className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition"/>
        </div>
        <div>
          <label htmlFor="email_contact" className="sr-only">{t('emailPlaceholder')}</label>
          <input type="email" id="email_contact" placeholder={t('emailPlaceholder')} required className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition"/>
        </div>
        <div>
          <label htmlFor="message" className="sr-only">{t('message')}</label>
          <textarea id="message" placeholder={t('message')} rows={4} required className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition"></textarea>
        </div>
        <button type="submit" className="w-full bg-primary text-white p-2 rounded-md font-semibold hover:bg-primary-hover transition">
          {t('sendMessage')}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
