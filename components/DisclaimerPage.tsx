import React from 'react';

interface DisclaimerPageProps {
  t: (key: string) => string;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h2 className="text-2xl font-semibold text-dark-text pt-4 mb-2">{title}</h2>
    <div className="space-y-2">{children}</div>
  </div>
);

const DisclaimerPage: React.FC<DisclaimerPageProps> = ({ t }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-2">{t('disclaimerTitle')}</h1>
      <p className="text-sm text-gray-500 mb-4">{t('disclaimerLastUpdated')}</p>
      <div className="border-b-2 border-primary w-24 mb-6"></div>
      <div className="prose max-w-none text-light-text space-y-4">
        <Section title={t('disclaimerGeneralInfoTitle')}>
          <p>{t('disclaimerGeneralInfoText')}</p>
        </Section>

        <Section title={t('disclaimerExternalLinksTitle')}>
          <p>{t('disclaimerExternalLinksText')}</p>
        </Section>

        <Section title={t('disclaimerAccuracyTitle')}>
          <p>{t('disclaimerAccuracyText')}</p>
        </Section>
      </div>
    </div>
  );
};

export default DisclaimerPage;