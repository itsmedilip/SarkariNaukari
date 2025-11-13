// FIX: Language is now imported from types.ts to fix a circular dependency.
import { Job, Category, Language } from '../types';

const allMockJobs: Job[] = [
  // --- CENTRAL GOVT - UPSC/SSC ---
  {
    id: '1',
    title: { [Language.EN]: 'UPSC Civil Services (IAS/IFS) Online Form 2024', [Language.HI]: 'यूपीएससी सिविल सेवा (आईएएस/आईएफएस) ऑनलाइन फॉर्म 2024' },
    company: { [Language.EN]: 'Union Public Service Commission (UPSC)', [Language.HI]: 'संघ लोक सेवा आयोग (यूपीएससी)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'As per rules', [Language.HI]: 'नियमानुसार' },
    description: { [Language.EN]: 'Recruitment for Indian Administrative Service (IAS), Indian Foreign Service (IFS), Indian Police Service (IPS) and other central services and posts.', [Language.HI]: 'भारतीय प्रशासनिक सेवा (आईएएस), भारतीय विदेश सेवा (आईएफएस), भारतीय पुलिस सेवा (आईपीएस) और अन्य केंद्रीय सेवाओं और पदों के लिए भर्ती।' },
    applyLink: 'https://upsc.gov.in/', postedDate: '', category: Category.UPSC_PSC, views: 0, shares: 0,
  },
  {
    id: '2',
    title: { [Language.EN]: 'SSC Combined Graduate Level (CGL) Exam 2024', [Language.HI]: 'एसएससी संयुक्त स्नातक स्तरीय (सीजीएल) परीक्षा 2024' },
    company: { [Language.EN]: 'Staff Selection Commission (SSC)', [Language.HI]: 'कर्मचारी चयन आयोग (एसएससी)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Pay Level 4 to 8', [Language.HI]: 'वेतन स्तर 4 से 8' },
    description: { [Language.EN]: 'Recruitment for various Group B and Group C posts in ministries, departments, and organizations of the Government of India.', [Language.HI]: 'भारत सरकार के विभिन्न मंत्रालयों, विभागों और संगठनों में विभिन्न समूह बी और समूह सी पदों के लिए भर्ती।' },
    applyLink: 'https://ssc.nic.in/', postedDate: '', category: Category.UPSC_PSC, views: 0, shares: 0,
  },
  {
    id: '38',
    title: { [Language.EN]: 'SSC CHSL (10+2) Examination 2024', [Language.HI]: 'एसएससी सीएचएसएल (10+2) परीक्षा 2024' },
    company: { [Language.EN]: 'Staff Selection Commission (SSC)', [Language.HI]: 'कर्मचारी चयन आयोग (एसएससी)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Pay Level 2 to 4', [Language.HI]: 'वेतन स्तर 2 से 4' },
    description: { [Language.EN]: 'Recruitment for Lower Divisional Clerk (LDC), Junior Secretariat Assistant (JSA), Postal Assistant (PA), Sorting Assistant (SA) and Data Entry Operator (DEO).', [Language.HI]: 'लोअर डिवीजनल क्लर्क (एलडीसी), जूनियर सचिवालय सहायक (जेएसए), पोस्टल असिस्टेंट (पीए), सॉर्टिंग असिस्टेंट (एसए) और डाटा एंट्री ऑपरेटर (डीईओ) के लिए भर्ती।' },
    applyLink: 'https://ssc.nic.in/', postedDate: '', category: Category.UPSC_PSC, views: 0, shares: 0,
  },
  {
    id: '47',
    title: { [Language.EN]: 'UPSC Combined Defence Services (CDS) Exam (II)', [Language.HI]: 'यूपीएससी संयुक्त रक्षा सेवा (सीडीएस) परीक्षा (II)' },
    company: { [Language.EN]: 'Union Public Service Commission (UPSC)', [Language.HI]: 'संघ लोक सेवा आयोग (यूपीएससी)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'As per Defence norms', [Language.HI]: 'रक्षा मानदंडों के अनुसार' },
    description: { [Language.EN]: 'Admission to Indian Military Academy, Indian Naval Academy, Air Force Academy, and Officers Training Academy.', [Language.HI]: 'भारतीय सैन्य अकादमी, भारतीय नौसेना अकादमी, वायु सेना अकादमी और अधिकारी प्रशिक्षण अकादमी में प्रवेश।' },
    applyLink: 'https://upsc.gov.in/', postedDate: '', category: Category.Defence_Police, views: 0, shares: 0,
  },
  {
    id: '48',
    title: { [Language.EN]: 'UPSC National Defence Academy (NDA) & Naval Academy (NA) Exam (II)', [Language.HI]: 'यूपीएससी राष्ट्रीय रक्षा अकादमी (एनडीए) और नौसेना अकादमी (एनए) परीक्षा (II)' },
    company: { [Language.EN]: 'Union Public Service Commission (UPSC)', [Language.HI]: 'संघ लोक सेवा आयोग (यूपीएससी)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Stipend during training', [Language.HI]: 'प्रशिक्षण के दौरान वजीफा' },
    description: { [Language.EN]: 'Admission to Army, Navy, and Air Force wings of the NDA, and for the Indian Naval Academy Course (INAC).', [Language.HI]: 'एनडीए की सेना, नौसेना और वायु सेना विंग में प्रवेश, और भारतीय नौसेना अकादमी पाठ्यक्रम (आईएनएसी) के लिए।' },
    applyLink: 'https://upsc.gov.in/', postedDate: '', category: Category.Defence_Police, views: 0, shares: 0,
  },
  {
    id: '49',
    title: { [Language.EN]: 'SSC CPO Sub-Inspector (SI) Recruitment', [Language.HI]: 'एसएससी सीपीओ सब-इंस्पेक्टर (एसआई) भर्ती' },
    company: { [Language.EN]: 'Staff Selection Commission (SSC)', [Language.HI]: 'कर्मचारी चयन आयोग (एसएससी)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Level-6 (Rs 35400-112400)', [Language.HI]: 'स्तर-6 (रु 35400-112400)' },
    description: { [Language.EN]: 'Recruitment of Sub-Inspectors in Delhi Police and Central Armed Police Forces (CAPFs).', [Language.HI]: 'दिल्ली पुलिस और केंद्रीय सशस्त्र पुलिस बलों (सीएपीएफ) में सब-इंस्पेक्टरों की भर्ती।' },
    applyLink: 'https://ssc.nic.in/', postedDate: '', category: Category.Defence_Police, views: 0, shares: 0,
  },

  // --- BANKING & FINANCE ---
  {
    id: '3',
    title: { [Language.EN]: 'IBPS PO/MT CRP XIV Recruitment 2024', [Language.HI]: 'आईबीपीएस पीओ/एमटी सीआरपी XIV भर्ती 2024' },
    company: { [Language.EN]: 'Institute of Banking Personnel Selection (IBPS)', [Language.HI]: 'बैंकिंग कार्मिक चयन संस्थान (आईबीपीएस)' },
    location: { [Language.EN]: 'Various Banks, India', [Language.HI]: 'विभिन्न बैंक, भारत' },
    salary: { [Language.EN]: 'As per banking norms', [Language.HI]: 'बैंकिंग मानदंडों के अनुसार' },
    description: { [Language.EN]: 'Recruitment of Probationary Officers/Management Trainees in participating banks. Requires a degree in any discipline from a recognized university.', [Language.HI]: 'प्रतिभागी बैंकों में परिवीक्षाधीन अधिकारियों/प्रबंधन प्रशिक्षुओं की भर्ती। किसी मान्यता प्राप्त विश्वविद्यालय से किसी भी विषय में डिग्री की आवश्यकता है।' },
    applyLink: 'https://www.ibps.in/', postedDate: '', category: Category.Banking, views: 0, shares: 0,
  },
  {
    id: '8',
    title: { [Language.EN]: 'State Bank of India (SBI) Clerk Recruitment', [Language.HI]: 'भारतीय स्टेट बैंक (एसबीआई) क्लर्क भर्ती' },
    company: { [Language.EN]: 'State Bank of India', [Language.HI]: 'भारतीय स्टेट बैंक' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'As per SBI rules', [Language.HI]: 'एसबीआई नियमों के अनुसार' },
    description: { [Language.EN]: 'Recruitment for Junior Associates (Customer Support & Sales). Any graduate is eligible to apply.', [Language.HI]: 'जूनियर एसोसिएट्स (ग्राहक सहायता और बिक्री) के लिए भर्ती। कोई भी स्नातक आवेदन करने के लिए पात्र है।' },
    applyLink: 'https://sbi.co.in/web/careers', postedDate: '', category: Category.Banking, views: 0, shares: 0,
  },
  {
    id: '10',
    title: { [Language.EN]: 'LIC Assistant Administrative Officer (AAO)', [Language.HI]: 'एलआईसी सहायक प्रशासनिक अधिकारी (एएओ)' },
    company: { [Language.EN]: 'Life Insurance Corporation of India (LIC)', [Language.HI]: 'भारतीय जीवन बीमा निगम (एलआईसी)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Basic pay of Rs. 53600/- per month', [Language.HI]: 'मूल वेतन रु. 53600/- प्रति माह' },
    description: { [Language.EN]: 'Recruitment for the post of Assistant Administrative Officer (Generalist). Candidates with a Bachelor’s Degree in any discipline are eligible.', [Language.HI]: 'सहायक प्रशासनिक अधिकारी (जनरलिस्ट) के पद के लिए भर्ती। किसी भी विषय में स्नातक की डिग्री वाले उम्मीदवार पात्र हैं।' },
    applyLink: 'https://licindia.in/Bottom-Links/careers', postedDate: '', category: Category.Banking, views: 0, shares: 0,
  },
  {
    id: '25',
    title: { [Language.EN]: 'RBI Assistant Recruitment', [Language.HI]: 'आरबीआई सहायक भर्ती' },
    company: { [Language.EN]: 'Reserve Bank of India (RBI)', [Language.HI]: 'भारतीय रिजर्व बैंक (आरबीआई)' },
    location: { [Language.EN]: 'Various RBI Offices, India', [Language.HI]: 'विभिन्न आरबीआई कार्यालय, भारत' },
    salary: { [Language.EN]: 'Gross emoluments approx ₹45,050/ month', [Language.HI]: 'सकल परिलब्धियां लगभग ₹45,050/ प्रति माह' },
    description: { [Language.EN]: 'Recruitment for the post of "Assistant" in various offices of the Reserve Bank of India.', [Language.HI]: 'भारतीय रिजर्व बैंक के विभिन्न कार्यालयों में "सहायक" के पद के लिए भर्ती।' },
    applyLink: 'https://www.rbi.org.in/', postedDate: '', category: Category.Banking, views: 0, shares: 0,
  },
  {
    id: '39',
    title: { [Language.EN]: 'IBPS Clerk CRP XIV Recruitment', [Language.HI]: 'आईबीपीएस क्लर्क सीआरपी XIV भर्ती' },
    company: { [Language.EN]: 'Institute of Banking Personnel Selection (IBPS)', [Language.HI]: 'बैंकिंग कार्मिक चयन संस्थान (आईबीपीएस)' },
    location: { [Language.EN]: 'Various Banks, India', [Language.HI]: 'विभिन्न बैंक, भारत' },
    salary: { [Language.EN]: 'As per banking norms', [Language.HI]: 'बैंकिंग मानदंडों के अनुसार' },
    description: { [Language.EN]: 'Recruitment for Clerical cadre in Participating Banks. A degree (Graduation) in any discipline is required.', [Language.HI]: 'प्रतिभागी बैंकों में लिपिकीय संवर्ग के लिए भर्ती। किसी भी विषय में डिग्री (स्नातक) की आवश्यकता है।' },
    applyLink: 'https://www.ibps.in/', postedDate: '', category: Category.Banking, views: 0, shares: 0,
  },
  {
    id: '50',
    title: { [Language.EN]: 'NABARD Grade A (Assistant Manager) Recruitment', [Language.HI]: 'नाबार्ड ग्रेड ए (सहायक प्रबंधक) भर्ती' },
    company: { [Language.EN]: 'National Bank for Agriculture and Rural Development', [Language.HI]: 'राष्ट्रीय कृषि और ग्रामीण विकास बैंक' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Approx. Rs. 70,000/- per month', [Language.HI]: 'लगभग रु. 70,000/- प्रति माह' },
    description: { [Language.EN]: 'Recruitment for the post of Assistant Manager in Grade ‘A’ in the Rural Development Banking Service (RDBS).', [Language.HI]: 'ग्रामीण विकास बैंकिंग सेवा (आरडीबीएस) में ग्रेड ‘ए’ में सहायक प्रबंधक के पद के लिए भर्ती।' },
    applyLink: 'https://www.nabard.org/careers-notices.aspx', postedDate: '', category: Category.Banking, views: 0, shares: 0,
  },

  // --- RAILWAYS ---
  {
    id: '4',
    title: { [Language.EN]: 'Railway Recruitment Board (RRB) NTPC', [Language.HI]: 'रेलवे भर्ती बोर्ड (आरआरबी) एनटीपीसी' },
    company: { [Language.EN]: 'Indian Railways', [Language.HI]: 'भारतीय रेल' },
    location: { [Language.EN]: 'Various Zones, India', [Language.HI]: 'विभिन्न क्षेत्र, भारत' },
    salary: { [Language.EN]: 'As per 7th CPC', [Language.HI]: '7वें सीपीसी के अनुसार' },
    description: { [Language.EN]: 'Non-Technical Popular Categories (NTPC) including posts like Junior Clerk, Goods Guard, Station Master, etc.', [Language.HI]: 'गैर-तकनीकी लोकप्रिय श्रेणियां (एनटीपीसी) जिसमें जूनियर क्लर्क, गुड्स गार्ड, स्टेशन मास्टर आदि जैसे पद शामिल हैं।' },
    applyLink: 'https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,1,304,366,537', postedDate: '', category: Category.Railways, views: 0, shares: 0,
  },
  {
    id: '40',
    title: { [Language.EN]: 'RRB Assistant Loco Pilot (ALP) Recruitment', [Language.HI]: 'आरआरबी सहायक लोको पायलट (एएलपी) भर्ती' },
    company: { [Language.EN]: 'Indian Railways', [Language.HI]: 'भारतीय रेल' },
    location: { [Language.EN]: 'Various Zones, India', [Language.HI]: 'विभिन्न क्षेत्र, भारत' },
    salary: { [Language.EN]: 'Level 2 of 7th CPC', [Language.HI]: '7वें सीपीसी का स्तर 2' },
    description: { [Language.EN]: 'Recruitment for the post of Assistant Loco Pilot (ALP) across various railway zones in India.', [Language.HI]: 'भारत के विभिन्न रेलवे क्षेत्रों में सहायक लोको पायलट (एएलपी) के पद के लिए भर्ती।' },
    applyLink: 'https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,1,304,366,537', postedDate: '', category: Category.Railways, views: 0, shares: 0,
  },
  {
    id: '41',
    title: { [Language.EN]: 'RRC Group D Recruitment', [Language.HI]: 'आरआरसी ग्रुप डी भर्ती' },
    company: { [Language.EN]: 'Railway Recruitment Cell (RRC)', [Language.HI]: 'रेलवे भर्ती सेल (आरआरसी)' },
    location: { [Language.EN]: 'Various Zones, India', [Language.HI]: 'विभिन्न क्षेत्र, भारत' },
    salary: { [Language.EN]: 'Level 1 of 7th CPC', [Language.HI]: '7वें सीपीसी का स्तर 1' },
    description: { [Language.EN]: 'Recruitment for various posts in Level 1 of 7th CPC Pay Matrix such as Track Maintainer Grade IV, Helper/Assistant in various technical departments.', [Language.HI]: '7वें सीपीसी वेतन मैट्रिक्स के स्तर 1 में विभिन्न पदों जैसे ट्रैक मेंटेनर ग्रेड IV, विभिन्न तकनीकी विभागों में हेल्पर/असिस्टेंट के लिए भर्ती।' },
    applyLink: 'https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,1,304,366,537', postedDate: '', category: Category.Railways, views: 0, shares: 0,
  },
  {
    id: '51',
    title: { [Language.EN]: 'RRB Junior Engineer (JE) Recruitment', [Language.HI]: 'आरआरबी जूनियर इंजीनियर (जेई) भर्ती' },
    company: { [Language.EN]: 'Indian Railways', [Language.HI]: 'भारतीय रेल' },
    location: { [Language.EN]: 'Various Zones, India', [Language.HI]: 'विभिन्न क्षेत्र, भारत' },
    salary: { [Language.EN]: 'Level 6 of 7th CPC', [Language.HI]: '7वें सीपीसी का स्तर 6' },
    description: { [Language.EN]: 'Recruitment for Junior Engineer, Depot Material Superintendent, and Chemical & Metallurgical Assistant.', [Language.HI]: 'जूनियर इंजीनियर, डिपो सामग्री अधीक्षक, और रासायनिक और धातुकर्म सहायक के लिए भर्ती।' },
    applyLink: 'https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,1,304,366,537', postedDate: '', category: Category.Railways, views: 0, shares: 0,
  },

  // --- DEFENCE & POLICE ---
  {
    id: '9',
    title: { [Language.EN]: 'Indian Navy Agniveer (SSR / MR) Recruitment 2024', [Language.HI]: 'भारतीय नौसेना अग्निवीर (एसएसआर / एमआर) भर्ती 2024' },
    company: { [Language.EN]: 'Indian Navy', [Language.HI]: 'भारतीय नौसेना' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Agnipath Scheme Package', [Language.HI]: 'अग्निपथ योजना पैकेज' },
    description: { [Language.EN]: 'Join the Indian Navy as an Agniveer for the SSR (Senior Secondary Recruit) or MR (Matric Recruit) batches.', [Language.HI]: 'एसएसआर (सीनियर सेकेंडरी रिक्रूट) या एमआर (मैट्रिक रिक्रूट) बैच के लिए अग्निवीर के रूप में भारतीय नौसेना में शामिल हों।' },
    applyLink: 'https://www.joinindiannavy.gov.in/', postedDate: '', category: Category.Defence_Police, views: 0, shares: 0,
  },
  {
    id: '26',
    title: { [Language.EN]: 'Indian Army Agniveer General Duty (GD)', [Language.HI]: 'भारतीय सेना अग्निवीर जनरल ड्यूटी (जीडी)' },
    company: { [Language.EN]: 'Indian Army', [Language.HI]: 'भारतीय सेना' },
    location: { [Language.EN]: 'Various AROs, India', [Language.HI]: 'विभिन्न एआरओ, भारत' },
    salary: { [Language.EN]: 'Agnipath Scheme Package', [Language.HI]: 'अग्निपथ योजना पैकेज' },
    description: { [Language.EN]: 'Recruitment rallies for Agniveer General Duty, Technical, Clerk, and Tradesman posts across India.', [Language.HI]: 'पूरे भारत में अग्निवीर जनरल ड्यूटी, तकनीकी, क्लर्क और ट्रेड्समैन पदों के लिए भर्ती रैलियां।' },
    applyLink: 'https://joinindianarmy.nic.in/', postedDate: '', category: Category.Defence_Police, views: 0, shares: 0,
  },
  {
    id: '27',
    title: { [Language.EN]: 'BSF Constable (Tradesman) Recruitment', [Language.HI]: 'बीएसएफ कांस्टेबल (ट्रेड्समैन) भर्ती' },
    company: { [Language.EN]: 'Border Security Force (BSF)', [Language.HI]: 'सीमा सुरक्षा बल (बीएसएफ)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Pay Level-3 (Rs. 21,700-69,100)', [Language.HI]: 'वेतन स्तर-3 (रु. 21,700-69,100)' },
    description: { [Language.EN]: 'Recruitment for male and female constables (Tradesman) in the Border Security Force.', [Language.HI]: 'सीमा सुरक्षा बल में पुरुष और महिला कांस्टेबलों (ट्रेड्समैन) के लिए भर्ती।' },
    applyLink: 'https://rectt.bsf.gov.in/', postedDate: '', category: Category.Defence_Police, views: 0, shares: 0,
  },
  {
    id: '42',
    title: { [Language.EN]: 'Indian Air Force Agniveervayu Intake 01/2025', [Language.HI]: 'भारतीय वायु सेना अग्निवीरवायु सेवन 01/2025' },
    company: { [Language.EN]: 'Indian Air Force', [Language.HI]: 'भारतीय वायु सेना' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Agnipath Scheme Package', [Language.HI]: 'अग्निपथ योजना पैकेज' },
    description: { [Language.EN]: 'Recruitment of Agniveervayu for Science and Other than Science Subjects. Candidates should have passed 10+2 Intermediate with relevant subjects.', [Language.HI]: 'विज्ञान और विज्ञान के अलावा अन्य विषयों के लिए अग्निवीरवायु की भर्ती। उम्मीदवारों को संबंधित विषयों के साथ 10+2 इंटरमीडिएट उत्तीर्ण होना चाहिए।' },
    applyLink: 'https://agnipathvayu.cdac.in/AV/', postedDate: '', category: Category.Defence_Police, views: 0, shares: 0,
  },
  {
    id: '52',
    title: { [Language.EN]: 'CRPF Head Constable (Ministerial) Recruitment', [Language.HI]: 'सीआरपीएफ हेड कांस्टेबल (मंत्रिस्तरीय) भर्ती' },
    company: { [Language.EN]: 'Central Reserve Police Force (CRPF)', [Language.HI]: 'केंद्रीय रिजर्व पुलिस बल (सीआरपीएफ)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Level-4 (Rs. 25500-81100)', [Language.HI]: 'स्तर-4 (रु. 25500-81100)' },
    description: { [Language.EN]: 'Recruitment for the post of Head Constable (Ministerial) in CRPF. Requires 10+2 pass and typing skills.', [Language.HI]: 'सीआरपीएफ में हेड कांस्टेबल (मंत्रिस्तरीय) के पद के लिए भर्ती। 10+2 पास और टाइपिंग कौशल की आवश्यकता है।' },
    applyLink: 'https://rect.crpf.gov.in/', postedDate: '', category: Category.Defence_Police, views: 0, shares: 0,
  },
  {
    id: '53',
    title: { [Language.EN]: 'Indian Coast Guard Navik (GD) & Yantrik Recruitment', [Language.HI]: 'भारतीय तट रक्षक नाविक (जीडी) और यन्त्रिक भर्ती' },
    company: { [Language.EN]: 'Indian Coast Guard (ICG)', [Language.HI]: 'भारतीय तट रक्षक (आईसीजी)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Basic pay Rs. 21700/- (Navik) & Rs. 29200/- (Yantrik)', [Language.HI]: 'मूल वेतन रु. 21700/- (नाविक) और रु. 29200/- (यन्त्रिक)' },
    description: { [Language.EN]: 'Recruitment for Navik (General Duty) and Yantrik for 10+2 and Diploma holders respectively.', [Language.HI]: 'क्रमशः 10+2 और डिप्लोमा धारकों के लिए नाविक (जनरल ड्यूटी) और यन्त्रिक के लिए भर्ती।' },
    applyLink: 'https://joinindiancoastguard.cdac.in/cgept/', postedDate: '', category: Category.Defence_Police, views: 0, shares: 0,
  },

  // --- PSU & AUTONOMOUS BODIES ---
  {
    id: '28',
    title: { [Language.EN]: 'ONGC Graduate Trainee Recruitment through GATE', [Language.HI]: 'ओएनजीसी ग्रेजुएट ट्रेनी भर्ती गेट के माध्यम से' },
    company: { [Language.EN]: 'Oil and Natural Gas Corporation (ONGC)', [Language.HI]: 'तेल और प्राकृतिक गैस निगम (ओएनजीसी)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Pay scale of Rs. 60,000-1,80,000/-', [Language.HI]: 'वेतनमान रु. 60,000-1,80,000/-' },
    description: { [Language.EN]: 'Recruitment of Graduate Trainees in Engineering & Geo-Sciences disciplines at E1 level through GATE scores.', [Language.HI]: 'गेट स्कोर के माध्यम से E1 स्तर पर इंजीनियरिंग और भू-विज्ञान विषयों में स्नातक प्रशिक्षुओं की भर्ती।' },
    applyLink: 'https://ongcindia.com/web/eng/career/recruitment-notice', postedDate: '', category: Category.PSU, views: 0, shares: 0,
  },
  {
    id: '29',
    title: { [Language.EN]: 'NTPC Executive Trainee Recruitment', [Language.HI]: 'एनटीपीसी कार्यकारी प्रशिक्षु भर्ती' },
    company: { [Language.EN]: 'National Thermal Power Corporation (NTPC)', [Language.HI]: 'नेशनल थर्मल पावर कॉर्पोरेशन (एनटीपीसी)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Pay scale of Rs. 40,000-1,40,000/-', [Language.HI]: 'वेतनमान रु. 40,000-1,40,000/-' },
    description: { [Language.EN]: 'Recruitment of Engineering Executive Trainees in Electrical, Mechanical, Electronics, and Instrumentation disciplines through GATE.', [Language.HI]: 'गेट के माध्यम से इलेक्ट्रिकल, मैकेनिकल, इलेक्ट्रॉनिक्स और इंस्ट्रूमेंटेशन विषयों में इंजीनियरिंग कार्यकारी प्रशिक्षुओं की भर्ती।' },
    applyLink: 'https://careers.ntpc.co.in/', postedDate: '', category: Category.PSU, views: 0, shares: 0,
  },
  {
    id: '43',
    title: { [Language.EN]: 'BHEL Engineer/Executive Trainee Recruitment', [Language.HI]: 'भेल इंजीनियर/कार्यकारी प्रशिक्षु भर्ती' },
    company: { [Language.EN]: 'Bharat Heavy Electricals Limited (BHEL)', [Language.HI]: 'भारत हेवी इलेक्ट्रिकल्स लिमिटेड (भेल)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Pay scale of Rs. 60,000-1,80,000/-', [Language.HI]: 'वेतनमान रु. 60,000-1,80,000/-' },
    description: { [Language.EN]: 'Recruitment of Engineer/Executive Trainees in Mechanical, Electrical, Civil, and other engineering disciplines based on GATE scores.', [Language.HI]: 'गेट स्कोर के आधार पर मैकेनिकल, इलेक्ट्रिकल, सिविल और अन्य इंजीनियरिंग विषयों में इंजीनियर/कार्यकारी प्रशिक्षुओं की भर्ती।' },
    applyLink: 'https://careers.bhel.in/', postedDate: '', category: Category.PSU, views: 0, shares: 0,
  },
  {
    id: '54',
    title: { [Language.EN]: 'GAIL Executive Trainee Recruitment through GATE', [Language.HI]: 'गेल कार्यकारी प्रशिक्षु भर्ती गेट के माध्यम से' },
    company: { [Language.EN]: 'Gas Authority of India Ltd (GAIL)', [Language.HI]: 'गैस अथॉरिटी ऑफ इंडिया लिमिटेड (गेल)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Pay scale of Rs. 60,000 – 1,80,000/-', [Language.HI]: 'वेतनमान रु. 60,000 – 1,80,000/-' },
    description: { [Language.EN]: 'Recruitment of Executive Trainees in Chemical, Mechanical, Electrical, Instrumentation disciplines through GATE scores.', [Language.HI]: 'गेट स्कोर के माध्यम से रासायनिक, मैकेनिकल, इलेक्ट्रिकल, इंस्ट्रूमेंटेशन विषयों में कार्यकारी प्रशिक्षुओं की भर्ती।' },
    applyLink: 'https://gailonline.com/CR-ApplyingGail.html', postedDate: '', category: Category.PSU, views: 0, shares: 0,
  },
  {
    id: '55',
    title: { [Language.EN]: 'Coal India Ltd (CIL) Management Trainee', [Language.HI]: 'कोल इंडिया लिमिटेड (सीआईएल) प्रबंधन प्रशिक्षु' },
    company: { [Language.EN]: 'Coal India Limited', [Language.HI]: 'कोल इंडिया लिमिटेड' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'E-2 Grade, Rs. 50,000 – 1,60,000/-', [Language.HI]: 'ई-2 ग्रेड, रु. 50,000 – 1,60,000/-' },
    description: { [Language.EN]: 'Recruitment of Management Trainees in various disciplines like Mining, Electrical, Mechanical, Civil, etc. through computer-based tests.', [Language.HI]: 'कंप्यूटर आधारित परीक्षणों के माध्यम से खनन, इलेक्ट्रिकल, मैकेनिकल, सिविल आदि जैसे विभिन्न विषयों में प्रबंधन प्रशिक्षुओं की भर्ती।' },
    applyLink: 'https://www.coalindia.in/career-cil/', postedDate: '', category: Category.PSU, views: 0, shares: 0,
  },

  // --- IT, ENGINEERING & RESEARCH ---
  {
    id: '13',
    title: { [Language.EN]: 'ISRO Scientist/Engineer \'SC\' Recruitment', [Language.HI]: 'इसरो वैज्ञानिक/इंजीनियर \'एससी\' भर्ती' },
    company: { [Language.EN]: 'Indian Space Research Organisation (ISRO)', [Language.HI]: 'भारतीय अंतरिक्ष अनुसंधान संगठन (इसरो)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Level 10 of Pay Matrix', [Language.HI]: 'वेतन मैट्रिक्स का स्तर 10' },
    description: { [Language.EN]: 'Recruitment for Scientist/Engineer \'SC\' posts in disciplines like Electronics, Mechanical, and Computer Science.', [Language.HI]: 'इलेक्ट्रॉनिक्स, मैकेनिकल और कंप्यूटर विज्ञान जैसे विषयों में वैज्ञानिक/इंजीनियर \'एससी\' पदों के लिए भर्ती।' },
    applyLink: 'https://www.isro.gov.in/Careers.html', postedDate: '', category: Category.IT_Engineering, views: 0, shares: 0,
  },
  {
    id: '30',
    title: { [Language.EN]: 'DRDO Scientist \'B\' Recruitment', [Language.HI]: 'डीआरडीओ वैज्ञानिक \'बी\' भर्ती' },
    company: { [Language.EN]: 'Defence Research and Development Organisation (DRDO)', [Language.HI]: 'रक्षा अनुसंधान एवं विकास संगठन (डीआरडीओ)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Level-10 (7th CPC)', [Language.HI]: 'स्तर-10 (7वां सीपीसी)' },
    description: { [Language.EN]: 'Recruitment for the post of Scientist \'B\' in DRDO through GATE scores in various engineering disciplines.', [Language.HI]: 'विभिन्न इंजीनियरिंग विषयों में गेट स्कोर के माध्यम से डीआरडीओ में वैज्ञानिक \'बी\' के पद के लिए भर्ती।' },
    applyLink: 'https://www.drdo.gov.in/careers', postedDate: '', category: Category.IT_Engineering, views: 0, shares: 0,
  },
  {
    id: '56',
    title: { [Language.EN]: 'NIC Scientist \'B\' & Scientific/Technical Assistant \'A\'', [Language.HI]: 'एनआईसी वैज्ञानिक \'बी\' और वैज्ञानिक/तकनीकी सहायक \'ए\'' },
    company: { [Language.EN]: 'National Informatics Centre (NIC)', [Language.HI]: 'राष्ट्रीय सूचना विज्ञान केंद्र (एनआईसी)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Level-10 (Scientist), Level-6 (Assistant)', [Language.HI]: 'स्तर-10 (वैज्ञानिक), स्तर-6 (सहायक)' },
    description: { [Language.EN]: 'Recruitment for Scientist and Scientific/Technical Assistant posts for candidates with engineering degrees in Electronics, CS, IT etc.', [Language.HI]: 'इलेक्ट्रॉनिक्स, सीएस, आईटी आदि में इंजीनियरिंग डिग्री वाले उम्मीदवारों के लिए वैज्ञानिक और वैज्ञानिक/तकनीकी सहायक पदों के लिए भर्ती।' },
    applyLink: 'https://www.calicut.nielit.in/nic/', postedDate: '', category: Category.IT_Engineering, views: 0, shares: 0,
  },
  {
    id: '57',
    title: { [Language.EN]: 'BARC Scientific Officer (OCES/DGFS)', [Language.HI]: 'बार्क वैज्ञानिक अधिकारी (ओसईएस/डीजीएफएस)' },
    company: { [Language.EN]: 'Bhabha Atomic Research Centre (BARC)', [Language.HI]: 'भाभा परमाणु अनुसंधान केंद्र (बार्क)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Level 10 of 7th CPC Pay Matrix', [Language.HI]: '7वें सीपीसी वेतन मैट्रिक्स का स्तर 10' },
    description: { [Language.EN]: 'Orientation Course for Engineering Graduates and Science Postgraduates (OCES) and DAE Graduate Fellowship Scheme (DGFS) for joining as Scientific Officers.', [Language.HI]: 'वैज्ञानिक अधिकारियों के रूप में शामिल होने के लिए इंजीनियरिंग स्नातकों और विज्ञान स्नातकोत्तरों (ओसईएस) के लिए अभिविन्यास पाठ्यक्रम और डीएई स्नातक फैलोशिप योजना (डीजीएफएस)।' },
    applyLink: 'https://www.barconlineexam.in/', postedDate: '', category: Category.IT_Engineering, views: 0, shares: 0,
  },
  
  // --- STATE GOVERNMENT JOBS ---
  {
    id: '5',
    title: { [Language.EN]: 'UP Police Constable Recruitment', [Language.HI]: 'यूपी पुलिस कांस्टेबल भर्ती' },
    company: { [Language.EN]: 'Uttar Pradesh Police (UPPRPB)', [Language.HI]: 'उत्तर प्रदेश पुलिस (यूपीपीआरपीबी)' },
    location: { [Language.EN]: 'Uttar Pradesh, India', [Language.HI]: 'उत्तर प्रदेश, भारत' },
    salary: { [Language.EN]: 'Pay Band 5200-20200', [Language.HI]: 'पे बैंड 5200-20200' },
    description: { [Language.EN]: 'Recruitment for the post of Constable (Civil Police) and Constable (Provincial Armed Constabulary).', [Language.HI]: 'कांस्टेबल (नागरिक पुलिस) और कांस्टेबल (प्रांतीय सशस्त्र कांस्टेबुलरी) के पद के लिए भर्ती।' },
    applyLink: 'http://uppbpb.gov.in/', postedDate: '', category: Category.State_Govt, views: 0, shares: 0,
  },
  {
    id: '20',
    title: { [Language.EN]: 'Rajasthan Patwari Recruitment', [Language.HI]: 'राजस्थान पटवारी भर्ती' },
    company: { [Language.EN]: 'Rajasthan Staff Selection Board (RSMSSB)', [Language.HI]: 'राजस्थान कर्मचारी चयन बोर्ड (RSMSSB)' },
    location: { [Language.EN]: 'Rajasthan, India', [Language.HI]: 'राजस्थान, भारत' },
    salary: { [Language.EN]: 'Pay Matrix Level-5', [Language.HI]: 'पे मैट्रिक्स लेवल-5' },
    description: { [Language.EN]: 'Recruitment for the post of Patwari in the Department of Revenue, Government of Rajasthan.', [Language.HI]: 'राजस्थान सरकार के राजस्व विभाग में पटवारी के पद के लिए भर्ती।' },
    applyLink: 'https://rsmssb.rajasthan.gov.in/', postedDate: '', category: Category.State_Govt, views: 0, shares: 0,
  },
  {
    id: '21',
    title: { [Language.EN]: 'Bihar Police Sub Inspector (SI) Recruitment', [Language.HI]: 'बिहार पुलिस सब इंस्पेक्टर (एसआई) भर्ती' },
    company: { [Language.EN]: 'Bihar Police Sub-ordinate Services Commission (BPSSC)', [Language.HI]: 'बिहार पुलिस अधीनस्थ सेवा आयोग (BPSSC)' },
    location: { [Language.EN]: 'Bihar, India', [Language.HI]: 'बिहार, भारत' },
    salary: { [Language.EN]: 'Level 6 (Rs. 35400 - 112400)', [Language.HI]: 'स्तर 6 (रु. 35400 - 112400)' },
    description: { [Language.EN]: 'Recruitment for the post of Sub Inspector in Bihar Police. Requires a Bachelor\'s degree from a recognized university.', [Language.HI]: 'बिहार पुलिस में सब इंस्पेक्टर के पद के लिए भर्ती। किसी मान्यता प्राप्त विश्वविद्यालय से स्नातक की डिग्री की आवश्यकता है।' },
    applyLink: 'https://bpssc.bih.nic.in/', postedDate: '', category: Category.State_Govt, views: 0, shares: 0,
  },
  {
    id: '22',
    title: { [Language.EN]: 'UPSSSC PET 2024 Online Form', [Language.HI]: 'यूपीएसएसएससी पीईटी 2024 ऑनलाइन फॉर्म' },
    company: { [Language.EN]: 'Uttar Pradesh SSSC', [Language.HI]: 'उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग' },
    location: { [Language.EN]: 'Uttar Pradesh, India', [Language.HI]: 'उत्तर प्रदेश, भारत' },
    salary: { [Language.EN]: 'Varies by post', [Language.HI]: 'पद के अनुसार भिन्न होता है' },
    description: { [Language.EN]: 'Preliminary Eligibility Test (PET) for recruitment to various Group C posts in the state of Uttar Pradesh.', [Language.HI]: 'उत्तर प्रदेश राज्य में विभिन्न समूह सी पदों पर भर्ती के लिए प्रारंभिक पात्रता परीक्षा (पीईटी)।' },
    applyLink: 'http://upsssc.gov.in/', postedDate: '', category: Category.State_Govt, views: 0, shares: 0,
  },
  {
    id: '34',
    title: { [Language.EN]: 'Maharashtra Police Constable Recruitment', [Language.HI]: 'महाराष्ट्र पुलिस कांस्टेबल भर्ती' },
    company: { [Language.EN]: 'Maharashtra State Police', [Language.HI]: 'महाराष्ट्र राज्य पुलिस' },
    location: { [Language.EN]: 'Maharashtra, India', [Language.HI]: 'महाराष्ट्र, भारत' },
    salary: { [Language.EN]: 'Pay Scale S-7 (Rs. 21700-69100)', [Language.HI]: 'वेतनमान एस-7 (रु. 21700-69100)' },
    description: { [Language.EN]: 'Recruitment for Police Constable, Police Constable Driver, and Armed Police Constable posts in various districts of Maharashtra.', [Language.HI]: 'महाराष्ट्र के विभिन्न जिलों में पुलिस कांस्टेबल, पुलिस कांस्टेबल ड्राइवर और सशस्त्र पुलिस कांस्टेबल पदों के लिए भर्ती।' },
    applyLink: 'https://www.mahapolice.gov.in/', postedDate: '', category: Category.State_Govt, views: 0, shares: 0,
  },
  {
    id: '35',
    title: { [Language.EN]: 'WBPSC Clerkship Examination', [Language.HI]: 'डब्ल्यूबीपीएससी क्लर्कशिप परीक्षा' },
    company: { [Language.EN]: 'West Bengal Public Service Commission (WBPSC)', [Language.HI]: 'पश्चिम बंगाल लोक सेवा आयोग (डब्ल्यूबीपीएससी)' },
    location: { [Language.EN]: 'West Bengal, India', [Language.HI]: 'पश्चिम बंगाल, भारत' },
    salary: { [Language.EN]: 'Pay Level 6 (Rs. 22,700 - 58,500)', [Language.HI]: 'वेतन स्तर 6 (रु. 22,700 - 58,500)' },
    description: { [Language.EN]: 'Recruitment for the post of Clerk in various government offices of West Bengal. Candidates must have passed Madhyamik Examination.', [Language.HI]: 'पश्चिम बंगाल के विभिन्न सरकारी कार्यालयों में क्लर्क के पद के लिए भर्ती। उम्मीदवारों को माध्यमिक परीक्षा उत्तीर्ण होना चाहिए।' },
    applyLink: 'https://wbpsc.gov.in/', postedDate: '', category: Category.State_Govt, views: 0, shares: 0,
  },
  {
    id: '36',
    title: { [Language.EN]: 'TNPSC Group 4 Services', [Language.HI]: 'टीएनपीएससी ग्रुप 4 सेवाएं' },
    company: { [Language.EN]: 'Tamil Nadu Public Service Commission (TNPSC)', [Language.HI]: 'तमिलनाडु लोक सेवा आयोग (टीएनपीएससी)' },
    location: { [Language.EN]: 'Tamil Nadu, India', [Language.HI]: 'तमिलनाडु, भारत' },
    salary: { [Language.EN]: 'Pay Level 8 (Rs. 19,500 - 71,900)', [Language.HI]: 'वेतन स्तर 8 (रु. 19,500 - 71,900)' },
    description: { [Language.EN]: 'Combined Civil Services Examination-IV (Group-IV) for posts including Village Administrative Officer, Junior Assistant, Bill Collector, etc.', [Language.HI]: 'ग्राम प्रशासनिक अधिकारी, कनिष्ठ सहायक, बिल कलेक्टर आदि सहित पदों के लिए संयुक्त सिविल सेवा परीक्षा- IV (ग्रुप- IV)।' },
    applyLink: 'https://www.tnpsc.gov.in/', postedDate: '', category: Category.State_Govt, views: 0, shares: 0,
  },
  {
    id: '37',
    title: { [Language.EN]: 'KPSC Group C Non-Technical Posts', [Language.HI]: 'केपीएससी ग्रुप सी गैर-तकनीकी पद' },
    company: { [Language.EN]: 'Karnataka Public Service Commission (KPSC)', [Language.HI]: 'कर्नाटक लोक सेवा आयोग (केपीएससी)' },
    location: { [Language.EN]: 'Karnataka, India', [Language.HI]: 'कर्नाटक, भारत' },
    salary: { [Language.EN]: 'Varies by post', [Language.HI]: 'पद के अनुसार भिन्न होता है' },
    description: { [Language.EN]: 'Recruitment for various Group C Non-Technical posts in different departments of the Karnataka Government.', [Language.HI]: 'कर्नाटक सरकार के विभिन्न विभागों में विभिन्न ग्रुप सी गैर-तकनीकी पदों के लिए भर्ती।' },
    applyLink: 'http://www.kpsc.kar.nic.in/', postedDate: '', category: Category.State_Govt, views: 0, shares: 0,
  },
  {
    id: '44',
    title: { [Language.EN]: 'MPPEB Group 2 (Sub Group 4) Patwari & Other Post', [Language.HI]: 'एमपीपीईबी ग्रुप 2 (सब ग्रुप 4) पटवारी और अन्य पद' },
    company: { [Language.EN]: 'Madhya Pradesh Professional Examination Board (MPPEB)', [Language.HI]: 'मध्य प्रदेश व्यावसायिक परीक्षा मंडल (एमपीपीईबी)' },
    location: { [Language.EN]: 'Madhya Pradesh, India', [Language.HI]: 'मध्य प्रदेश, भारत' },
    salary: { [Language.EN]: 'Varies by post', [Language.HI]: 'पद के अनुसार भिन्न होता है' },
    description: { [Language.EN]: 'Combined recruitment test for posts like Patwari, Junior Accountant, and other equivalent posts.', [Language.HI]: 'पटवारी, कनिष्ठ लेखाकार और अन्य समकक्ष पदों जैसे पदों के लिए संयुक्त भर्ती परीक्षा।' },
    applyLink: 'http://peb.mp.gov.in/', postedDate: '', category: Category.State_Govt, views: 0, shares: 0,
  },
  {
    id: '58',
    title: { [Language.EN]: 'HSSC Common Eligibility Test (CET) Group C', [Language.HI]: 'एचएसएससी सामान्य पात्रता परीक्षा (सीईटी) ग्रुप सी' },
    company: { [Language.EN]: 'Haryana Staff Selection Commission (HSSC)', [Language.HI]: 'हरियाणा कर्मचारी चयन आयोग (एचएसएससी)' },
    location: { [Language.EN]: 'Haryana, India', [Language.HI]: 'हरियाणा, भारत' },
    salary: { [Language.EN]: 'Varies by post', [Language.HI]: 'पद के अनुसार भिन्न होता है' },
    description: { [Language.EN]: 'Common Eligibility Test for recruitment to various Group C posts in departments of Haryana Government.', [Language.HI]: 'हरियाणा सरकार के विभागों में विभिन्न ग्रुप सी पदों पर भर्ती के लिए सामान्य पात्रता परीक्षा।' },
    applyLink: 'https://www.hssc.gov.in/', postedDate: '', category: Category.State_Govt, views: 0, shares: 0,
  },
  {
    id: '59',
    title: { [Language.EN]: 'Gujarat Police Constable / Lokrakshak Recruitment', [Language.HI]: 'गुजरात पुलिस कांस्टेबल / लोकरक्षक भर्ती' },
    company: { [Language.EN]: 'Lokrakshak Recruitment Board (LRB), Gujarat', [Language.HI]: 'लोकरक्षक भर्ती बोर्ड (एलआरबी), गुजरात' },
    location: { [Language.EN]: 'Gujarat, India', [Language.HI]: 'गुजरात, भारत' },
    salary: { [Language.EN]: 'Fixed Pay for 5 years', [Language.HI]: '5 साल के लिए निश्चित वेतन' },
    description: { [Language.EN]: 'Recruitment for Unarmed Police Constable, Armed Police Constable, and SRPF Constable posts.', [Language.HI]: 'निहत्थे पुलिस कांस्टेबल, सशस्त्र पुलिस कांस्टेबल और एसआरपीएफ कांस्टेबल पदों के लिए भर्ती।' },
    applyLink: 'https://ojas.gujarat.gov.in/', postedDate: '', category: Category.State_Govt, views: 0, shares: 0,
  },

  // --- TEACHING ---
  {
    id: '31',
    title: { [Language.EN]: 'KVS PGT, TGT, PRT Recruitment', [Language.HI]: 'केवीएस पीजीटी, टीजीटी, पीआरटी भर्ती' },
    company: { [Language.EN]: 'Kendriya Vidyalaya Sangathan (KVS)', [Language.HI]: 'केन्द्रीय विद्यालय संगठन (केवीएस)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'As per KVS norms', [Language.HI]: 'केवीएस मानदंडों के अनुसार' },
    description: { [Language.EN]: 'Recruitment for Post Graduate Teachers (PGT), Trained Graduate Teachers (TGT), and Primary Teachers (PRT).', [Language.HI]: 'पोस्ट ग्रेजुएट शिक्षक (पीजीटी), प्रशिक्षित स्नातक शिक्षक (टीजीटी), और प्राथमिक शिक्षक (पीआरटी) के लिए भर्ती।' },
    applyLink: 'https://kvsangathan.nic.in/', postedDate: '', category: Category.Teaching, views: 0, shares: 0,
  },
  {
    id: '32',
    title: { [Language.EN]: 'UGC NET for Assistant Professor', [Language.HI]: 'सहायक प्रोफेसर के लिए यूजीसी नेट' },
    company: { [Language.EN]: 'National Testing Agency (NTA)', [Language.HI]: 'राष्ट्रीय परीक्षण एजेंसी (एनटीए)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Eligibility Test', [Language.HI]: 'पात्रता परीक्षा' },
    description: { [Language.EN]: 'National Eligibility Test (NET) to determine eligibility for \'Assistant Professor\' and for \'Junior Research Fellowship and Assistant Professor\' in Indian universities and colleges.', [Language.HI]: 'भारतीय विश्वविद्यालयों और कॉलेजों में \'सहायक प्रोफेसर\' और \'जूनियर रिसर्च फेलोशिप और सहायक प्रोफेसर\' के लिए पात्रता निर्धारित करने के लिए राष्ट्रीय पात्रता परीक्षा (नेट)।' },
    applyLink: 'https://ugcnet.nta.nic.in/', postedDate: '', category: Category.Teaching, views: 0, shares: 0,
  },
  {
    id: '45',
    title: { [Language.EN]: 'NVS TGT, PGT, and Principal Recruitment', [Language.HI]: 'एनवीएस टीजीटी, पीजीटी और प्रिंसिपल भर्ती' },
    company: { [Language.EN]: 'Navodaya Vidyalaya Samiti (NVS)', [Language.HI]: 'नवोदय विद्यालय समिति (एनवीएस)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'As per NVS norms', [Language.HI]: 'एनवीएस मानदंडों के अनुसार' },
    description: { [Language.EN]: 'Recruitment for various teaching and non-teaching staff including PGTs, TGTs, and Principals in Navodaya Vidyalayas.', [Language.HI]: 'नवोदय विद्यालयों में पीजीटी, टीजीटी और प्रधानाचार्यों सहित विभिन्न शिक्षण और गैर-शिक्षण कर्मचारियों के लिए भर्ती।' },
    applyLink: 'https://navodaya.gov.in/', postedDate: '', category: Category.Teaching, views: 0, shares: 0,
  },
  {
    id: '60',
    title: { [Language.EN]: 'CTET - Central Teacher Eligibility Test', [Language.HI]: 'सीटीईटी - केंद्रीय शिक्षक पात्रता परीक्षा' },
    company: { [Language.EN]: 'Central Board of Secondary Education (CBSE)', [Language.HI]: 'केंद्रीय माध्यमिक शिक्षा बोर्ड (सीबीएसई)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'Eligibility Certificate', [Language.HI]: 'पात्रता प्रमाण पत्र' },
    description: { [Language.EN]: 'National level entrance examination for teachers recruitment for Class 1 to 8 in Central Government schools.', [Language.HI]: 'केंद्र सरकार के स्कूलों में कक्षा 1 से 8 के लिए शिक्षक भर्ती के लिए राष्ट्रीय स्तर की प्रवेश परीक्षा।' },
    applyLink: 'https://ctet.nic.in/', postedDate: '', category: Category.Teaching, views: 0, shares: 0,
  },

  // --- MEDICAL ---
  {
    id: '33',
    title: { [Language.EN]: 'AIIMS Nursing Officer (NORCET)', [Language.HI]: 'एम्स नर्सिंग ऑफिसर (नॉरसेट)' },
    company: { [Language.EN]: 'All India Institute of Medical Sciences (AIIMS)', [Language.HI]: 'अखिल भारतीय आयुर्विज्ञान संस्थान (एम्स)' },
    location: { [Language.EN]: 'Various AIIMS, India', [Language.HI]: 'विभिन्न एम्स, भारत' },
    salary: { [Language.EN]: 'Pay Level-7 (Rs. 44900-142400)', [Language.HI]: 'वेतन स्तर-7 (रु. 44900-142400)' },
    description: { [Language.EN]: 'Nursing Officer Recruitment Common Eligibility Test (NORCET) for recruitment to the post of Nursing Officer for AIIMS New Delhi and other AIIMS.', [Language.HI]: 'एम्स नई दिल्ली और अन्य एम्स के लिए नर्सिंग ऑफिसर के पद पर भर्ती के लिए नर्सिंग ऑफिसर भर्ती सामान्य पात्रता परीक्षा (नॉरसेट)।' },
    applyLink: 'https://www.aiimsexams.ac.in/', postedDate: '', category: Category.Medical, views: 0, shares: 0,
  },
  {
    id: '46',
    title: { [Language.EN]: 'ESIC Staff Nurse & Paramedical Posts', [Language.HI]: 'ईएसआईसी स्टाफ नर्स और पैरामेडिकल पद' },
    company: { [Language.EN]: 'Employees State Insurance Corporation (ESIC)', [Language.HI]: 'कर्मचारी राज्य बीमा निगम (ईएसआईसी)' },
    location: { [Language.EN]: 'Across India', [Language.HI]: 'पूरे भारत में' },
    salary: { [Language.EN]: 'As per 7th CPC', [Language.HI]: '7वें सीपीसी के अनुसार' },
    description: { [Language.EN]: 'Recruitment for Staff Nurse, Pharmacist, Lab Technician and other paramedical posts in ESIC hospitals and dispensaries.', [Language.HI]: 'ईएसआईसी अस्पतालों और औषधालयों में स्टाफ नर्स, फार्मासिस्ट, लैब तकनीशियन और अन्य पैरामेडिकल पदों के लिए भर्ती।' },
    applyLink: 'https://www.esic.nic.in/recruitments', postedDate: '', category: Category.Medical, views: 0, shares: 0,
  },
  {
    id: '61',
    title: { [Language.EN]: 'SGPGI Sister Grade-II / Staff Nurse Recruitment', [Language.HI]: 'एसजीपीजीआई सिस्टर ग्रेड- II / स्टाफ नर्स भर्ती' },
    company: { [Language.EN]: 'Sanjay Gandhi Postgraduate Institute of Medical Sciences', [Language.HI]: 'संजय गांधी स्नातकोत्तर आयुर्विज्ञान संस्थान' },
    location: { [Language.EN]: 'Lucknow, Uttar Pradesh', [Language.HI]: 'लखनऊ, उत्तर प्रदेश' },
    salary: { [Language.EN]: 'Level-7 Pay Matrix', [Language.HI]: 'स्तर-7 वेतन मैट्रिक्स' },
    description: { [Language.EN]: 'Recruitment for the post of Staff Nurse (Sister Grade-II) at SGPGI Lucknow. Requires B.Sc. Nursing or Diploma in GNM.', [Language.HI]: 'एसजीपीजीआई लखनऊ में स्टाफ नर्स (सिस्टर ग्रेड- II) के पद के लिए भर्ती। बी.एससी. नर्सिंग या जीएनएम में डिप्लोमा की आवश्यकता है।' },
    applyLink: 'https://sgpgims.org.in/Home/recruit.html', postedDate: '', category: Category.Medical, views: 0, shares: 0,
  },
];


const JOBLY_INTERACTIONS_KEY = 'joblyAiInteractions';

const getDatedJobs = () => {
  const today = new Date();
  // Shuffle the array to make the order random on each load simulation
  const shuffledJobs = allMockJobs.sort(() => 0.5 - Math.random());
  
  return shuffledJobs.map((job, index) => {
    const postedDate = new Date(today);
    // More realistic date distribution, with more recent jobs
    const daysAgo = Math.floor(Math.random() * 45) + 1; // 1 to 45 days ago
    postedDate.setDate(today.getDate() - daysAgo);

    const lastDate = new Date(postedDate);
    // Setting a realistic application window, e.g., 20-40 days from posting
    const applicationWindow = 20 + Math.floor(Math.random() * 21); 
    lastDate.setDate(postedDate.getDate() + applicationWindow);

    return {
      ...job,
      postedDate: postedDate.toISOString().split('T')[0],
      lastDateToApply: lastDate.toISOString().split('T')[0],
      id: `${job.id}-${job.company[Language.EN].replace(/\s/g, '')}-${index}` // Ensure ID is unique even if jobs are duplicated
    };
  });
};

let datedJobs = getDatedJobs();

interface JobFilters {
  category: Category;
  searchTerm: string;
  locationTerm: string;
}

const getStoredInteractions = () => {
  try {
    return JSON.parse(localStorage.getItem(JOBLY_INTERACTIONS_KEY) || '{}');
  } catch (e) {
    console.error("Could not parse interactions from localStorage", e);
    return {};
  }
};

export const fetchJobs = (
  page: number,
  limit: number,
  filters: JobFilters
): Promise<{ jobs: Job[]; hasMore: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { category, searchTerm, locationTerm } = filters;
      
      // Re-shuffle and re-date every time we start a new filter query to simulate a live backend
      if (page === 1) {
          datedJobs = getDatedJobs();
      }

      const storedInteractions = getStoredInteractions();

      const filtered = datedJobs.filter(job => {
        const categoryMatch = category === Category.All || job.category === category;
        const searchTermLower = searchTerm.toLowerCase();
        const locationTermLower = locationTerm.toLowerCase();

        const searchMatch =
          job.title[Language.EN].toLowerCase().includes(searchTermLower) ||
          job.title[Language.HI].toLowerCase().includes(searchTermLower) ||
          job.company[Language.EN].toLowerCase().includes(searchTermLower) ||
          job.company[Language.HI].toLowerCase().includes(searchTermLower) ||
          job.description[Language.EN].toLowerCase().includes(searchTermLower) ||
          job.description[Language.HI].toLowerCase().includes(searchTermLower);
        
        const locationMatch = 
            job.location[Language.EN].toLowerCase().includes(locationTermLower) ||
            job.location[Language.HI].toLowerCase().includes(locationTermLower);
        
        return categoryMatch && searchMatch && locationMatch;
      });
      
      const hydratedJobs = filtered.map(job => {
        const interactions = storedInteractions[job.id] || { views: 0, shares: 0 };
        return {
          ...job,
          views: interactions.views,
          shares: interactions.shares,
        };
      });

      const start = (page - 1) * limit;
      const end = start + limit;
      const jobs = hydratedJobs.slice(start, end);
      const hasMore = end < hydratedJobs.length;
      
      resolve({ jobs, hasMore });
    }, 500); // Simulate network delay
  });
};
