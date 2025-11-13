import React from 'react';
// FIX: Language is now imported from types.ts to fix a circular dependency.
import { Job, Language } from '../types';

interface JobCardProps {
  job: Job;
  t: (key: string) => string;
  onJobInteraction: (jobId: string, type: 'view' | 'share') => void;
  language: Language;
  onToggleSaveJob: (job: Job) => void;
  isSaved: boolean;
}

// Internationalized timeSince function
const timeSince = (dateString: string, t: (key: string) => string) => {
  const date = new Date(dateString);
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  const format = (value: number, singularKey: string, pluralKey: string) => {
    const key = value > 1 ? pluralKey : singularKey;
    return t(key).replace('{value}', value.toString());
  };

  let interval = seconds / 31536000;
  if (interval >= 1) {
    return format(Math.floor(interval), 'yearAgo', 'yearsAgo');
  }
  interval = seconds / 2592000;
  if (interval >= 1) {
    return format(Math.floor(interval), 'monthAgo', 'monthsAgo');
  }
  interval = seconds / 86400;
  if (interval >= 1) {
    return format(Math.floor(interval), 'dayAgo', 'daysAgo');
  }
  interval = seconds / 3600;
  if (interval >= 1) {
    return format(Math.floor(interval), 'hourAgo', 'hoursAgo');
  }
  interval = seconds / 60;
  if (interval >= 1) {
    return format(Math.floor(interval), 'minuteAgo', 'minutesAgo');
  }
  return t('justNow');
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-GB', options);
};

const JobCard: React.FC<JobCardProps> = ({ job, t, onJobInteraction, language, onToggleSaveJob, isSaved }) => {
  const shareText = `Check out this job: ${job.title[language]} at ${job.company[language]}. Apply here: ${job.applyLink}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(job.applyLink)}&text=${encodeURIComponent(shareText)}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  const handleShareClick = () => {
    onJobInteraction(job.id, 'share');
  };
  
  const handleApplyClick = () => {
    onJobInteraction(job.id, 'view');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative">
       <button 
        onClick={() => onToggleSaveJob(job)}
        className="absolute top-4 right-4 text-gray-400 hover:text-yellow-500 transition-colors p-1"
        aria-label={isSaved ? t('unsaveJob') : t('saveJob')}
        title={isSaved ? t('unsaveJob') : t('saveJob')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${isSaved ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}>
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
        </svg>
      </button>

      <div className="flex flex-col sm:flex-row justify-between pr-8">
        <div>
          <h3 className="text-xl font-bold text-primary">{job.title[language]}</h3>
          <p className="text-md text-dark-text font-semibold">{job.company[language]}</p>
          <p className="text-sm text-light-text flex items-center mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {job.location[language]}
          </p>
          {job.salary && (
            <p className="text-sm text-green-600 font-medium mt-1">{job.salary[language]}</p>
          )}
        </div>
        <div className="mt-4 sm:mt-0 text-left sm:text-right">
          <p className="text-xs text-light-text">{t('posted')} {timeSince(job.postedDate, t)}</p>
          {job.lastDateToApply && (
            <p className="text-xs text-red-500 font-semibold mt-1 flex items-center justify-start sm:justify-end" title={t('lastDate')}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {t('lastDate')}: {formatDate(job.lastDateToApply)}
            </p>
          )}
        </div>
      </div>
      <p className="text-light-text mt-4 text-sm leading-relaxed">{job.description[language]}</p>
      
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-light-text">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{job.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.186 2.25 2.25 0 00-3.933 2.186z" />
              </svg>
              <span>{job.shares.toLocaleString()}</span>
            </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <a onClick={handleApplyClick} href={job.applyLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-primary text-white rounded-md font-semibold hover:bg-primary-hover transition text-sm">
            {t('applyNow')}
          </a>
          <a onClick={handleShareClick} href={telegramUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition text-sm">
            {t('shareOnTelegram')}
          </a>
          <a onClick={handleShareClick} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition text-sm">
            {t('shareOnWhatsApp')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;