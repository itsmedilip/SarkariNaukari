// FIX: Updated import to fetch Category, Translations, and Language from types.ts.
import { Category, Translations, Language } from './types';

export const CATEGORIES: Category[] = [
  Category.All,
  Category.UPSC_PSC,
  Category.State_Govt,
  Category.Banking,
  Category.Defence_Police,
  Category.Railways,
  Category.PSU,
  Category.Teaching,
  Category.Medical,
  Category.IT_Engineering,
];


export const TRANSLATIONS: Translations = {
  // Navigation
  home: {
    [Language.EN]: "Home",
    [Language.HI]: "होम",
  },
  savedJobs: {
    [Language.EN]: "Saved Jobs",
    [Language.HI]: "सहेजी गई नौकरियाँ",
  },
  contact: {
    [Language.EN]: "Contact",
    [Language.HI]: "संपर्क",
  },
  privacyPolicy: {
    [Language.EN]: "Privacy Policy",
    [Language.HI]: "गोपनीयता नीति",
  },
  disclaimer: {
    [Language.EN]: "Disclaimer",
    [Language.HI]: "अस्वीकरण",
  },
  faqs: {
    [Language.EN]: "FAQs",
    [Language.HI]: "अक्सर पूछे जाने वाले प्रश्न",
  },
  // Main App
  tagline: {
    [Language.EN]: "Your Gateway to Government Jobs",
    [Language.HI]: "सरकारी नौकरियों का आपका प्रवेश द्वार",
  },
  searchJobs: {
    [Language.EN]: "Search Jobs...",
    [Language.HI]: "नौकरियां खोजें...",
  },
  placeholderKeyword: {
    [Language.EN]: "Job title, skill, or company",
    [Language.HI]: "पद का नाम, कौशल, या कंपनी",
  },
  placeholderLocation: {
    [Language.EN]: "City, state, or country",
    [Language.HI]: "शहर, राज्य, या देश",
  },
  search: {
    [Language.EN]: "Search",
    [Language.HI]: "खोजें",
  },
  posted: {
    [Language.EN]: "Posted",
    [Language.HI]: "पोस्ट किया गया",
  },
  lastDate: {
    [Language.EN]: "Last Date",
    [Language.HI]: "अंतिम तिथि",
  },
  applyNow: {
    [Language.EN]: "Apply Now",
    [Language.HI]: "अभी आवेदन करें",
  },
  saveJob: {
    [Language.EN]: "Save Job",
    [Language.HI]: "नौकरी सहेजें",
  },
  unsaveJob: {
    [Language.EN]: "Unsave Job",
    [Language.HI]: "नौकरी सहेजना रद्द करें",
  },
  shareOnTelegram: {
    [Language.EN]: "Share on Telegram",
    [Language.HI]: "टेलीग्राम पर साझा करें",
  },
  shareOnWhatsApp: {
    [Language.EN]: "Share on WhatsApp",
    [Language.HI]: "व्हाट्सएप पर साझा करें",
  },
  noJobsFound: {
    [Language.EN]: "No jobs found matching your criteria. Try adjusting your search.",
    [Language.HI]: "आपके मानदंडों से मेल खाने वाली कोई नौकरी नहीं मिली। अपनी खोज को समायोजित करने का प्रयास करें।",
  },
  loadingJobs: {
    [Language.EN]: "Loading fresh job listings...",
    [Language.HI]: "नई नौकरी लिस्टिंग लोड हो रही है...",
  },
  loadMoreJobs: {
    [Language.EN]: "Load More Jobs",
    [Language.HI]: "और नौकरियां लोड करें",
  },
  loadingMoreJobs: {
    [Language.EN]: "Loading...",
    [Language.HI]: "लोड हो रहा है...",
  },
  noMoreJobs: {
    [Language.EN]: "You've reached the end of the list.",
    [Language.HI]: "आप सूची के अंत तक पहुँच गए हैं।",
  },
  allRightsReserved: {
    [Language.EN]: "All Rights Reserved.",
    [Language.HI]: "सर्वाधिकार सुरक्षित।",
  },
  // Saved Jobs Page
  noSavedJobsTitle: {
    [Language.EN]: "No Saved Jobs Yet",
    [Language.HI]: "अभी तक कोई नौकरी नहीं सहेजी गई है",
  },
  noSavedJobsDescription: {
    [Language.EN]: "Click the star icon on a job listing to save it for later.",
    [Language.HI]: "बाद में सहेजने के लिए नौकरी लिस्टिंग पर स्टार आइकन पर क्लिक करें।",
  },
  // Time since
  justNow: {
    [Language.EN]: "just now",
    [Language.HI]: "अभी-अभी",
  },
  yearAgo: {
    [Language.EN]: "{value} year ago",
    [Language.HI]: "{value} साल पहले",
  },
  yearsAgo: {
    [Language.EN]: "{value} years ago",
    [Language.HI]: "{value} साल पहले",
  },
  monthAgo: {
    [Language.EN]: "{value} month ago",
    [Language.HI]: "{value} महीना पहले",
  },
  monthsAgo: {
    [Language.EN]: "{value} months ago",
    [Language.HI]: "{value} महीने पहले",
  },
  dayAgo: {
    [Language.EN]: "{value} day ago",
    [Language.HI]: "{value} दिन पहले",
  },
  daysAgo: {
    [Language.EN]: "{value} days ago",
    [Language.HI]: "{value} दिन पहले",
  },
  hourAgo: {
    [Language.EN]: "{value} hour ago",
    [Language.HI]: "{value} घंटा पहले",
  },
  hoursAgo: {
    [Language.EN]: "{value} hours ago",
    [Language.HI]: "{value} घंटे पहले",
  },
  minuteAgo: {
    [Language.EN]: "{value} minute ago",
    [Language.HI]: "{value} मिनट पहले",
  },
  minutesAgo: {
    [Language.EN]: "{value} minutes ago",
    [Language.HI]: "{value} मिनट पहले",
  },
  // Contact Page
  contactTitle: {
    [Language.EN]: "Contact Us",
    [Language.HI]: "हमसे संपर्क करें",
  },
  contactIntro: {
    [Language.EN]: "If you have any questions, feedback, or need assistance, please feel free to reach out to us. We are here to help you on your job search journey.",
    [Language.HI]: "यदि आपके कोई प्रश्न, प्रतिक्रिया या सहायता की आवश्यकता है, तो कृपया हमसे संपर्क करने में संकोच न करें। हम आपकी नौकरी खोज यात्रा में आपकी सहायता के लिए यहां हैं।",
  },
  contactEmail: {
    [Language.EN]: "Email",
    [Language.HI]: "ईमेल",
  },
  contactAddress: {
    [Language.EN]: "Address",
    [Language.HI]: "पता",
  },
  contactBusinessHoursTitle: {
    [Language.EN]: "Business Hours",
    [Language.HI]: "व्यावसायिक घंटे",
  },
  contactBusinessHoursText: {
    [Language.EN]: "Monday - Friday: 9:00 AM - 6:00 PM (IST)",
    [Language.HI]: "सोमवार - शुक्रवार: सुबह 9:00 बजे - शाम 6:00 बजे (IST)",
  },
  // Privacy Policy Page
  privacyTitle: {
    [Language.EN]: "Privacy Policy",
    [Language.HI]: "गोपनीयता नीति",
  },
  privacyLastUpdated: {
    [Language.EN]: "Last updated: July 30, 2024",
    [Language.HI]: "अंतिम अपडेट: 30 जुलाई, 2024",
  },
  privacyIntro: {
    [Language.EN]: "Your privacy is important to us. This privacy statement explains the personal data Sarkari Naukri processes, how Sarkari Naukri processes it, and for what purposes.",
    [Language.HI]: "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। यह गोपनीयता कथन बताता है कि सरकारी नौकरी कौन सा व्यक्तिगत डेटा संसाधित करता है, सरकारी नौकरी इसे कैसे संसाधित करता है, और किन उद्देश्यों के लिए।",
  },
  privacyInfoWeCollectTitle: {
    [Language.EN]: "Information We Collect",
    [Language.HI]: "हम जो जानकारी एकत्र करते हैं",
  },
  privacyInfoWeCollectText: {
    [Language.EN]: "We do not collect any personally identifiable information such as your name, email address, or phone number. We use your browser's local storage solely to save your job interactions (views and shares) to enhance your user experience. This data remains on your device and is not transmitted to us.",
    [Language.HI]: "हम आपका नाम, ईमेल पता, या फोन नंबर जैसी कोई भी व्यक्तिगत रूप से पहचान योग्य जानकारी एकत्र नहीं करते हैं। हम आपके उपयोगकर्ता अनुभव को बढ़ाने के लिए केवल आपकी नौकरी की बातचीत (विचार और शेयर) को सहेजने के लिए आपके ब्राउज़र के स्थानीय भंडारण का उपयोग करते हैं। यह डेटा आपके डिवाइस पर रहता है और हमें प्रेषित नहीं किया जाता है।",
  },
  privacyHowWeUseTitle: {
    [Language.EN]: "How We Use Your Information",
    [Language.HI]: "हम आपकी जानकारी का उपयोग कैसे करते हैं",
  },
  privacyHowWeUseText: {
    [Language.EN]: "The locally stored data for views and shares is used only to display these counts on job listings. We do not use this data for any other purpose, such as analytics or advertising.",
    [Language.HI]: "विचारों और शेयरों के लिए स्थानीय रूप से संग्रहीत डेटा का उपयोग केवल नौकरी लिस्टिंग पर इन गणनाओं को प्रदर्शित करने के लिए किया जाता है। हम इस डेटा का उपयोग किसी अन्य उद्देश्य, जैसे कि विश्लेषण या विज्ञापन के लिए नहीं करते हैं।",
  },
  privacyThirdPartyTitle: {
    [Language.EN]: "Third-Party Links",
    [Language.HI]: "तृतीय-पक्ष लिंक",
  },
  privacyThirdPartyText: {
    [Language.EN]: "Our website contains links to other websites (e.g., 'Apply Now' links). We are not responsible for the privacy practices of these other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.",
    [Language.HI]: "हमारी वेबसाइट में अन्य वेबसाइटों के लिंक हैं (जैसे, 'अभी आवेदन करें' लिंक)। हम इन अन्य साइटों की गोपनीयता प्रथाओं के लिए जिम्मेदार नहीं हैं। हम अपने उपयोगकर्ताओं को प्रोत्साहित करते हैं कि जब वे हमारी साइट छोड़ते हैं तो जागरूक रहें और व्यक्तिगत रूप से पहचान योग्य जानकारी एकत्र करने वाली किसी भी अन्य साइट के गोपनीयता कथन पढ़ें।",
  },
  privacyChangesTitle: {
    [Language.EN]: "Changes to This Privacy Policy",
    [Language.HI]: "इस गोपनीयता नीति में परिवर्तन",
  },
  privacyChangesText: {
    [Language.EN]: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.",
    [Language.HI]: "हम समय-समय पर अपनी गोपनीयता नीति को अपडेट कर सकते हैं। हम इस पृष्ठ पर नई गोपनीयता नीति पोस्ट करके आपको किसी भी परिवर्तन की सूचना देंगे। आपको किसी भी परिवर्तन के लिए समय-समय पर इस गोपनीयता नीति की समीक्षा करने की सलाह दी जाती है।",
  },

  // Disclaimer Page
  disclaimerTitle: {
    [Language.EN]: "Disclaimer",
    [Language.HI]: "अस्वीकरण",
  },
  disclaimerLastUpdated: {
    [Language.EN]: "Last updated: July 30, 2024",
    [Language.HI]: "अंतिम अपडेट: 30 जुलाई, 2024",
  },
  disclaimerGeneralInfoTitle: {
    [Language.EN]: "General Information",
    [Language.HI]: "सामान्य जानकारी",
  },
  disclaimerGeneralInfoText: {
    [Language.EN]: "The information provided by Sarkari Naukri on our website is for general informational purposes only. All information on the site is provided in good faith. However, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.",
    [Language.HI]: "हमारी वेबसाइट पर सरकारी नौकरी द्वारा प्रदान की गई जानकारी केवल सामान्य सूचना के उद्देश्यों के लिए है। साइट पर सभी जानकारी अच्छे विश्वास में प्रदान की गई है। हालांकि, हम साइट पर किसी भी जानकारी की सटीकता, पर्याप्तता, वैधता, विश्वसनीयता, उपलब्धता या पूर्णता के संबंध में किसी भी प्रकार का कोई प्रतिनिधित्व या वारंटी, व्यक्त या निहित नहीं करते हैं।",
  },
  disclaimerExternalLinksTitle: {
    [Language.EN]: "External Links Disclaimer",
    [Language.HI]: "बाहरी लिंक अस्वीकरण",
  },
  disclaimerExternalLinksText: {
    [Language.EN]: "The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.",
    [Language.HI]: "साइट में अन्य वेबसाइटों या तीसरे पक्ष से संबंधित या उत्पन्न होने वाली सामग्री के लिंक हो सकते हैं। ऐसे बाहरी लिंक हमारे द्वारा सटीकता, पर्याप्तता, वैधता, विश्वसनीयता, उपलब्धता या पूर्णता के लिए जांच, निगरानी या जांच नहीं किए जाते हैं। हम साइट के माध्यम से जुड़ी तीसरे पक्ष की वेबसाइटों द्वारा दी गई किसी भी जानकारी की सटीकता या विश्वसनीयता के लिए वारंट, समर्थन, गारंटी या जिम्मेदारी नहीं लेते हैं।",
  },
  disclaimerAccuracyTitle: {
    [Language.EN]: "Accuracy of Information",
    [Language.HI]: "जानकारी की सटीकता",
  },
  disclaimerAccuracyText: {
    [Language.EN]: "Job listings are aggregated and simulated for demonstration purposes. While we strive to provide up-to-date information, we strongly advise users to verify all job details on the official employer's website before applying. Sarkari Naukri is not a recruiting agency and is not involved in any stage of the recruitment process.",
    [Language.HI]: "नौकरी लिस्टिंग प्रदर्शन उद्देश्यों के लिए एकत्रित और नकली हैं। जबकि हम अद्यतित जानकारी प्रदान करने का प्रयास करते हैं, हम उपयोगकर्ताओं को आवेदन करने से पहले आधिकारिक नियोक्ता की वेबसाइट पर सभी नौकरी विवरणों को सत्यापित करने की दृढ़ता से सलाह देते हैं। सरकारी नौकरी एक भर्ती एजेंसी नहीं है और भर्ती प्रक्रिया के किसी भी चरण में शामिल नहीं है।",
  },

  // FAQs Page
  faqsTitle: {
    [Language.EN]: "Frequently Asked Questions",
    [Language.HI]: "अक्सर पूछे जाने वाले प्रश्न",
  },
  faq1Question: {
    [Language.EN]: "How are the job listings updated?",
    [Language.HI]: "नौकरी लिस्टिंग कैसे अपडेट की जाती हैं?",
  },
  faq1Answer: {
    [Language.EN]: "Our platform simulates fetching the latest job openings from various government portals and official career pages daily. The dates are dynamically updated to ensure you see the most recent opportunities.",
    [Language.HI]: "हमारा प्लेटफ़ॉर्म प्रतिदिन विभिन्न सरकारी पोर्टलों और आधिकारिक करियर पेजों से नवीनतम नौकरी के उद्घाटन को प्राप्त करने का अनुकरण करता है। तारीखों को गतिशील रूप से अपडेट किया जाता है ताकि यह सुनिश्चित हो सके कि आप सबसे हाल के अवसर देखें।",
  },
  faq2Question: {
    [Language.EN]: "Is this service free?",
    [Language.HI]: "क्या यह सेवा निःशुल्क है?",
  },
  faq2Answer: {
    [Language.EN]: "Yes, browsing and applying for jobs through our portal is completely free for all users.",
    [Language.HI]: "हाँ, हमारे पोर्टल के माध्यम से नौकरियों को ब्राउज़ करना और आवेदन करना सभी उपयोगकर्ताओं के लिए पूरी तरह से निःशुल्क है।",
  },
  faq3Question: {
    [Language.EN]: "How can I be sure a job listing is authentic?",
    [Language.HI]: "मैं कैसे सुनिश्चित हो सकता हूं कि नौकरी की सूची प्रामाणिक है?",
  },
  faq3Answer: {
    [Language.EN]: "We provide a direct 'Apply Now' link to the official government or company website for every listing. We always recommend that you verify the details on the official notification from the recruiting body before applying.",
    [Language.HI]: "हम प्रत्येक लिस्टिंग के लिए आधिकारिक सरकारी या कंपनी की वेबसाइट पर एक सीधा 'अभी आवेदन करें' लिंक प्रदान करते हैं। हम हमेशा अनुशंसा करते हैं कि आप आवेदन करने से पहले भर्ती निकाय से आधिकारिक अधिसूचना पर विवरण सत्यापित करें।",
  },
  faq4Question: {
    [Language.EN]: "Do I need to create an account to apply?",
    [Language.HI]: "क्या मुझे आवेदन करने के लिए एक खाता बनाने की आवश्यकता है?",
  },
  faq4Answer: {
    [Language.EN]: "No, you do not need an account on Sarkari Naukri. The 'Apply Now' button will take you directly to the official application page where you can complete the process as per their requirements.",
    [Language.HI]: "नहीं, आपको सरकारी नौकरी पर एक खाते की आवश्यकता नहीं है। 'अभी आवेदन करें' बटन आपको सीधे आधिकारिक आवेदन पृष्ठ पर ले जाएगा जहां आप उनकी आवश्यकताओं के अनुसार प्रक्रिया पूरी कर सकते हैं।",
  },
  faq5Question: {
    [Language.EN]: "Can I search for jobs in a specific state?",
    [Language.HI]: "क्या मैं किसी विशिष्ट राज्य में नौकरी खोज सकता हूं?",
  },
  faq5Answer: {
    [Language.EN]: "Yes. You can use the 'State Govt' category filter to see jobs from various states. You can also use the location search bar to type in the name of a state or city to find relevant listings.",
    [Language.HI]: "हाँ। आप विभिन्न राज्यों से नौकरियों को देखने के लिए 'राज्य सरकार' श्रेणी फ़िल्टर का उपयोग कर सकते हैं। आप प्रासंगिक लिस्टिंग खोजने के लिए किसी राज्य या शहर का नाम टाइप करने के लिए स्थान खोज बार का भी उपयोग कर सकते हैं।",
  },
};