import React, { useState } from 'react';

interface FaqsPageProps {
  t: (key: string) => string;
}

const FaqItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b">
      <button
        onClick={onClick}
        className="w-full text-left py-4 focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-dark-text">{question}</h3>
          <svg
            className={`w-5 h-5 text-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="text-light-text py-4 pr-4">{answer}</p>
      </div>
    </div>
  );
};


const FaqsPage: React.FC<FaqsPageProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'faq1Question', a: 'faq1Answer' },
    { q: 'faq2Question', a: 'faq2Answer' },
    { q: 'faq3Question', a: 'faq3Answer' },
    { q: 'faq4Question', a: 'faq4Answer' },
    { q: 'faq5Question', a: 'faq5Answer' },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-4">{t('faqsTitle')}</h1>
      <div className="border-b-2 border-primary w-24 mb-6"></div>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={t(faq.q)}
            answer={t(faq.a)}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqsPage;