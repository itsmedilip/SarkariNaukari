import React from 'react';

interface PrivacyPolicyPageProps {
  t: (key: string) => string;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h2 className="text-2xl font-semibold text-dark-text pt-4 mb-2">{title}</h2>
    <div className="space-y-2">{children}</div>
  </div>
);

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ t }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-2">{t('privacyTitle')}</h1>
      <p className="text-sm text-gray-500 mb-4">{t('privacyLastUpdated')}</p>
      <div className="border-b-2 border-primary w-24 mb-6"></div>
      
      <div className="prose max-w-none text-light-text space-y-4">
        <p className="text-lg">{t('privacyIntro')}</p>
        
        <Section title={t('privacyInfoWeCollectTitle')}>
          <p>{t('privacyInfoWeCollectText')}</p>
        </Section>
        
        <Section title={t('privacyHowWeUseTitle')}>
          <p>{t('privacyHowWeUseText')}</p>
        </Section>

        <Section title={t('privacyThirdPartyTitle')}>
          <p>{t('privacyThirdPartyText')}</p>
        </Section>

        <Section title={t('privacyChangesTitle')}>
           <p>{t('privacyChangesText')}</p>
        </Section>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;