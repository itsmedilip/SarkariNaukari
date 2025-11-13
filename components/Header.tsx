import React from 'react';
// FIX: Language is now imported from types.ts to fix a circular dependency.
import { Language, Page } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  setCurrentPage: (page: Page) => void;
  savedJobsCount: number;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, t, setCurrentPage, savedJobsCount }) => {
  const toggleLanguage = () => {
    setLanguage(language === Language.EN ? Language.HI : Language.EN);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button onClick={() => setCurrentPage('home')} className="flex items-center space-x-2 cursor-pointer">
           <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
          </svg>
          <span className="text-2xl font-bold text-primary">Sarkari Naukri</span>
        </button>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentPage('saved')}
            className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors duration-200 relative p-2 rounded-full"
            aria-label={`${savedJobsCount} ${t('savedJobs')}`}
            title={t('savedJobs')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.5 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
            <span className="hidden sm:block font-medium">{t('savedJobs')}</span>
            {savedJobsCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {savedJobsCount}
              </span>
            )}
          </button>
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 bg-secondary text-primary rounded-full hover:bg-blue-200 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
            </svg>
            <span>{language === Language.EN ? 'हिंदी' : 'English'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;