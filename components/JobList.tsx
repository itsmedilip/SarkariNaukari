import React from 'react';
// FIX: Language is now imported from types.ts to fix a circular dependency.
import { Job, Language } from '../types';
import JobCard from './JobCard';

interface JobListProps {
  jobs: Job[];
  loading: boolean;
  t: (key: string) => string;
  onLoadMore: () => void;
  hasMore: boolean;
  loadingMore: boolean;
  onJobInteraction: (jobId: string, type: 'view' | 'share') => void;
  language: Language;
  onToggleSaveJob: (job: Job) => void;
  savedJobIds: Set<string>;
}

const JobList: React.FC<JobListProps> = ({ jobs, loading, t, onLoadMore, hasMore, loadingMore, onJobInteraction, language, onToggleSaveJob, savedJobIds }) => {
  if (loading) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-light-text">{t('loadingJobs')}</p>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow">
        <h3 className="text-xl font-semibold text-dark-text">{t('noJobsFound')}</h3>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard 
          key={job.id} 
          job={job} 
          t={t} 
          onJobInteraction={onJobInteraction} 
          language={language}
          onToggleSaveJob={onToggleSaveJob}
          isSaved={savedJobIds.has(job.id)}
        />
      ))}
      <div className="mt-8 text-center">
        {hasMore ? (
          <button
            onClick={onLoadMore}
            disabled={loadingMore}
            className="bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary-hover transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loadingMore ? t('loadingMoreJobs') : t('loadMoreJobs')}
          </button>
        ) : (
          <p className="text-light-text pt-4">{t('noMoreJobs')}</p>
        )}
      </div>
    </div>
  );
};

export default JobList;