
import React from 'react';

interface NewsletterProps {
  t: (key: string) => string;
}

const Newsletter: React.FC<NewsletterProps> = ({ t }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h4 className="text-lg font-bold text-dark-text">{t('newsletterTitle')}</h4>
      <p className="text-sm text-light-text mt-1">{t('newsletterDescription')}</p>
      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          type="email"
          placeholder={t('emailPlaceholder')}
          required
          className="w-full p-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-primary focus:border-transparent transition"
        />
        <button type="submit" className="bg-primary text-white px-4 rounded-r-md font-semibold hover:bg-primary-hover transition">
          {t('subscribe')}
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
