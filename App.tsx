import React, { useState, useEffect, useCallback } from 'react';
// FIX: Language is now imported from types.ts to fix a circular dependency.
import { Category, Job, Language, Page } from './types';
import { TRANSLATIONS } from './constants';
import { fetchJobs } from './services/jobService';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilters from './components/CategoryFilters';
import JobList from './components/JobList';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';
import ContactPage from './components/ContactPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import DisclaimerPage from './components/DisclaimerPage';
import FaqsPage from './components/FaqsPage';
import SavedJobsPage from './components/SavedJobsPage';


const JOBS_PER_PAGE = 8;
const INTERACTIONS_KEY = 'joblyAiInteractions';
const SAVED_JOBS_KEY = 'sarkariNaukriSavedJobs';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [locationTerm, setLocationTerm] = useState<string>('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');
  const [debouncedLocationTerm, setDebouncedLocationTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<Category>(Category.All);
  
  const [savedJobs, setSavedJobs] = useState<Map<string, Job>>(new Map());

  useEffect(() => {
    try {
      const storedJobs = localStorage.getItem(SAVED_JOBS_KEY);
      if (storedJobs) {
        setSavedJobs(new Map(Object.entries(JSON.parse(storedJobs))));
      }
    } catch (e) {
      console.error("Could not load saved jobs from localStorage", e);
    }
  }, []);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setDebouncedLocationTerm(locationTerm);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm, locationTerm]);

  useEffect(() => {
    const loadFilteredJobs = async () => {
      setLoading(true);
      setJobs([]);
      setPage(1);
      try {
        const filters = {
          category: activeCategory,
          searchTerm: debouncedSearchTerm,
          locationTerm: debouncedLocationTerm,
        };
        const { jobs: initialJobs, hasMore: newHasMore } = await fetchJobs(1, JOBS_PER_PAGE, filters);
        setJobs(initialJobs);
        setHasMore(newHasMore);
        setError(null);
      } catch (err) {
        setError("Failed to fetch job listings.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (currentPage === 'home') {
       loadFilteredJobs();
    }
  }, [activeCategory, debouncedSearchTerm, debouncedLocationTerm, currentPage]);


  const handleLoadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    try {
      const nextPage = page + 1;
      const filters = {
        category: activeCategory,
        searchTerm: debouncedSearchTerm,
        locationTerm: debouncedLocationTerm,
      };
      const { jobs: newJobs, hasMore: newHasMore } = await fetchJobs(nextPage, JOBS_PER_PAGE, filters);
      setJobs(prevJobs => [...prevJobs, ...newJobs]);
      setHasMore(newHasMore);
      setPage(nextPage);
    } catch (err) {
      setError("Failed to load more jobs.");
    } finally {
      setLoadingMore(false);
    }
  }, [page, hasMore, loadingMore, activeCategory, debouncedSearchTerm, debouncedLocationTerm]);

  const handleJobInteraction = useCallback((jobId: string, type: 'view' | 'share') => {
    setJobs(prevJobs =>
      prevJobs.map(job => {
        if (job.id === jobId) {
          return { ...job, [type === 'view' ? 'views' : 'shares']: job[type === 'view' ? 'views' : 'shares'] + 1 };
        }
        return job;
      })
    );
    
    try {
      const storedInteractions = JSON.parse(localStorage.getItem(INTERACTIONS_KEY) || '{}');
      const jobInteractions = storedInteractions[jobId] || { views: 0, shares: 0 };
      
      jobInteractions[type === 'view' ? 'views' : 'shares'] += 1;
      
      storedInteractions[jobId] = jobInteractions;
      localStorage.setItem(INTERACTIONS_KEY, JSON.stringify(storedInteractions));
    } catch (e) {
      console.error("Could not update interactions in localStorage", e);
    }
  }, []);

  const handleToggleSaveJob = useCallback((job: Job) => {
    setSavedJobs(prevSavedJobs => {
      const newSavedJobs = new Map(prevSavedJobs);
      if (newSavedJobs.has(job.id)) {
        newSavedJobs.delete(job.id);
      } else {
        newSavedJobs.set(job.id, job);
      }
      
      try {
        localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(Object.fromEntries(newSavedJobs)));
      } catch (e) {
        console.error("Could not save jobs to localStorage", e);
      }

      return newSavedJobs;
    });
  }, []);


  const t = useCallback((key: string) => TRANSLATIONS[key]?.[language] || key, [language]);

  const renderPage = () => {
    switch(currentPage) {
      case 'contact':
        return <ContactPage t={t} />;
      case 'privacy':
        return <PrivacyPolicyPage t={t} />;
      case 'disclaimer':
        return <DisclaimerPage t={t} />;
      case 'faqs':
        return <FaqsPage t={t} />;
      case 'saved':
        return <SavedJobsPage 
                  savedJobs={Array.from(savedJobs.values())}
                  t={t}
                  onJobInteraction={handleJobInteraction}
                  onToggleSaveJob={handleToggleSaveJob}
                  language={language}
                />;
      case 'home':
      default:
        return (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">Sarkari Naukri</h1>
              <p className="text-lg md:text-xl text-light-text mt-2">{t('tagline')}</p>
            </div>

            <SearchBar 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
              locationTerm={locationTerm}
              setLocationTerm={setLocationTerm}
              t={t}
            />
            
            <CategoryFilters 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory}
              language={language}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
              <div className="lg:col-span-8">
                <JobList 
                  jobs={jobs} 
                  loading={loading} 
                  t={t}
                  onLoadMore={handleLoadMore}
                  hasMore={hasMore}
                  loadingMore={loadingMore}
                  onJobInteraction={handleJobInteraction}
                  language={language}
                  onToggleSaveJob={handleToggleSaveJob}
                  savedJobIds={new Set(savedJobs.keys())}
                />
              </div>
              <aside className="lg:col-span-4 space-y-8">
                <AdBanner />
              </aside>
            </div>
          </>
        );
    }
  }

  return (
    <div className="min-h-screen bg-secondary font-sans text-dark-text flex flex-col">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        t={t} 
        setCurrentPage={setCurrentPage}
        savedJobsCount={savedJobs.size}
      />
      <main className="container mx-auto px-4 py-8 flex-grow">
        {renderPage()}
      </main>
      <Footer t={t} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;