// FIX: Moved Language enum here from constants.ts to break a circular dependency.
export enum Language {
  EN = "en",
  HI = "hi",
}

// FIX: Added the missing Translations interface.
export interface Translations {
  [key: string]: { [lang in Language]: string };
}

export type Page = 'home' | 'saved' | 'contact' | 'privacy' | 'disclaimer' | 'faqs';

export interface Job {
  id: string;
  title: { [key in Language]: string };
  company: { [key in Language]: string };
  location: { [key in Language]: string };
  salary: { [key in Language]: string } | null;
  description: { [key in Language]: string };
  applyLink: string;
  postedDate: string;
  lastDateToApply?: string;
  category: Category;
  views: number;
  shares: number;
}

// FIX: Added the missing SeoData interface.
export interface SeoData {
  title: string;
  metaDescription: string;
  tags: string[];
}

export enum Category {
  All = "All",
  UPSC_PSC = "UPSC/PSC",
  State_Govt = "State Government",
  Banking = "Banking",
  Defence_Police = "Defence/Police",
  Railways = "Railways",
  PSU = "PSU",
  Teaching = "Teaching",
  Medical = "Medical",
  IT_Engineering = "IT/Engineering",
}