import React from 'react';
// FIX: Language is now imported from types.ts to fix a circular dependency.
import { Category, Language } from '../types';
import { CATEGORIES } from '../constants';

interface CategoryFiltersProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
  language: Language;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({ activeCategory, setActiveCategory, language }) => {
  const categoryTranslations: { [key in Category]: { [lang in Language]: string } } = {
    [Category.All]: { en: "All Jobs", hi: "सभी नौकरियां" },
    [Category.UPSC_PSC]: { en: "UPSC/PSC", hi: "यूपीएससी/पीएससी" },
    [Category.State_Govt]: { en: "State Govt", hi: "राज्य सरकार" },
    [Category.Banking]: { en: "Banking", hi: "बैंकिंग" },
    [Category.Defence_Police]: { en: "Defence/Police", hi: "रक्षा/पुलिस" },
    [Category.Railways]: { en: "Railways", hi: "रेलवे" },
    [Category.PSU]: { en: "PSU", hi: "पीएसयू" },
    [Category.Teaching]: { en: "Teaching", hi: "शिक्षण" },
    [Category.Medical]: { en: "Medical", hi: "मेडिकल" },
    [Category.IT_Engineering]: { en: "IT/Engineering", hi: "आईटी/इंजीनियरिंग" },
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
            activeCategory === category
              ? 'bg-primary text-white'
              : 'bg-white text-primary hover:bg-blue-100'
          }`}
        >
          {categoryTranslations[category][language]}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;