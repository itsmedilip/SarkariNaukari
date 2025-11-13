import React from 'react';
import { Job, Language } from '../types';
import JobCard from './JobCard';

interface SavedJobsPageProps {
  savedJobs: Job[];
  t: (key: string) => string;
  onJobInteraction: (jobId: string, type: 'view' | 'share') => void;
  onToggleSaveJob: (job: Job) => void;
  language: Language;
}

const SavedJobsPage: React.FC<SavedJobsPageProps> = ({ savedJobs, t, onJobInteraction, onToggleSaveJob, language }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-4">{t('savedJobs')}</h1>
      <div className="border-b-2 border-primary w-24 mb-6"></div>
      
      {savedJobs.length > 0 ? (
        <div className="space-y-4">
          {savedJobs.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()).map(job => (
            <JobCard
              key={job.id}
              job={job}
              t={t}
              onJobInteraction={onJobInteraction}
              language={language}
              onToggleSaveJob={onToggleSaveJob}
              isSaved={true} // All jobs on this page are saved
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.5 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
          <h3 className="mt-4 text-xl font-semibold text-dark-text">{t('noSavedJobsTitle')}</h3>
          <p className="mt-2 text-light-text">{t('noSavedJobsDescription')}</p>
        </div>
      )}
    </div>
  );
};

export default SavedJobsPage;