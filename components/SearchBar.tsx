
import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  locationTerm: string;
  setLocationTerm: (term: string) => void;
  t: (key: string) => string;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, locationTerm, setLocationTerm, t }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
        <div className="relative md:col-span-2 lg:col-span-2">
           <svg className="w-5 h-5 text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('placeholderKeyword')}
            className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>
        <div className="relative md:col-span-2 lg:col-span-2">
          <svg className="w-5 h-5 text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <input
            type="text"
            value={locationTerm}
            onChange={(e) => setLocationTerm(e.target.value)}
            placeholder={t('placeholderLocation')}
            className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>
        <button className="w-full bg-primary text-white p-3 rounded-md font-semibold hover:bg-primary-hover transition md:col-span-2 lg:col-span-1">
          {t('search')}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
