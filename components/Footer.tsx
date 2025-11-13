import React from 'react';
import { Page } from '../types';

interface FooterProps {
  t: (key: string) => string;
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ t, setCurrentPage }) => {
  const footerLinks: { page: Page, key: string }[] = [
    { page: 'home', key: 'home' },
    { page: 'contact', key: 'contact' },
    { page: 'privacy', key: 'privacyPolicy' },
    { page: 'disclaimer', key: 'disclaimer' },
    { page: 'faqs', key: 'faqs' },
  ];

  return (
    <footer className="bg-white mt-12 py-8 border-t">
      <div className="container mx-auto px-4 text-center">
        <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6">
          {footerLinks.map(link => (
            <button
              key={link.key}
              onClick={() => setCurrentPage(link.page)}
              className="text-light-text hover:text-primary hover:underline transition-colors"
            >
              {t(link.key)}
            </button>
          ))}
        </nav>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Sarkari Naukri. {t('allRightsReserved')}</p>
      </div>
    </footer>
  );
};

export default Footer;