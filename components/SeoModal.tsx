
import React from 'react';
import { SeoData } from '../types';

interface SeoModalProps {
  isOpen: boolean;
  onClose: () => void;
  seoData: SeoData | null;
  loading: boolean;
  error: string | null;
  t: (key: string) => string;
}

const SeoModal: React.FC<SeoModalProps> = ({ isOpen, onClose, seoData, loading, error, t }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-primary">{t('seoResultTitle')}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          {loading && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto"></div>
              <p className="mt-3 text-light-text">{t('generatingSeo')}</p>
            </div>
          )}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {seoData && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-dark-text">{t('seoPageTitle')}</h3>
                <p className="mt-1 p-3 bg-secondary rounded-md text-sm text-light-text">{seoData.title}</p>
              </div>
              <div>
                <h3 className="font-semibold text-dark-text">{t('seoMetaDescription')}</h3>
                <p className="mt-1 p-3 bg-secondary rounded-md text-sm text-light-text">{seoData.metaDescription}</p>
              </div>
              <div>
                <h3 className="font-semibold text-dark-text">{t('seoTags')}</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {seoData.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 bg-gray-50 border-t text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary text-white rounded-md font-semibold hover:bg-primary-hover transition"
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeoModal;
