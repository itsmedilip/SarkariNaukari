import React from 'react';

interface ContactPageProps {
  t: (key: string) => string;
}

const ContactPage: React.FC<ContactPageProps> = ({ t }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-4">{t('contactTitle')}</h1>
      <div className="border-b-2 border-primary w-24 mb-6"></div>
      <p className="text-light-text mb-8 text-lg">{t('contactIntro')}</p>
      
      <div className="space-y-8">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div>
            <h2 className="text-xl font-semibold text-dark-text">{t('contactEmail')}</h2>
            <a href="mailto:dsvinjora@gmail.com" className="text-primary hover:underline break-all">dsvinjora@gmail.com</a>
          </div>
        </div>
        <div className="flex items-start">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <h2 className="text-xl font-semibold text-dark-text">{t('contactAddress')}</h2>
            <p className="text-light-text">Office 21, 1st Floor, Gandhidham - 370201</p>
          </div>
        </div>
         <div className="flex items-start">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h2 className="text-xl font-semibold text-dark-text">{t('contactBusinessHoursTitle')}</h2>
            <p className="text-light-text">{t('contactBusinessHoursText')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;