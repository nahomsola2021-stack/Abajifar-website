export interface FAQItem {
  id: string;
  category: 'visas' | 'weather' | 'safety' | 'health' | 'culture';
  categoryLabel: string;
  question: string;
  summary?: string;
  answer: string;
  keyPoints?: string[];
}

export const faqCategories = [
  { key: 'all', label: 'All Questions' },
  { key: 'visas', label: 'Visas & Entry' },
  { key: 'weather', label: 'Weather & Seasons' },
  { key: 'safety', label: 'Safety & 4WD Fleet' },
  { key: 'health', label: 'Health & Altitude' },
  { key: 'culture', label: 'Money & Etiquette' },
] as const;

export const faqData: FAQItem[] = [
  {
    id: 'ethiopia-evisa-application',
    category: 'visas',
    categoryLabel: 'Visas & Entry',
    question: 'How do I obtain an Ethiopian tourist visa and what are the requirements?',
    summary:
      'Apply through Ethiopia’s official eVisa portal before travelling. Your passport should be valid for at least six months; check current requirements for your nationality.',
    answer:
      'International travelers can secure an official 30-day or 90-day single-entry tourist visa online via the official Ethiopian Immigration portal (evisa.gov.et). The application process is straightforward, requiring a passport copy valid for at least 6 months from entry date and a recent passport photograph. Processing typically completes within 48 to 72 hours.',
    keyPoints: [
      'Apply exclusively through the official portal: evisa.gov.et',
      'Passport must have at least 6 months validity remaining',
      'Print your digital approval letter to present at immigration upon arrival'
    ]
  },
  {
    id: 'visa-on-arrival-protocols',
    category: 'visas',
    categoryLabel: 'Visas & Entry',
    question: 'Can I obtain a visa on arrival at Addis Ababa Bole International Airport (ADD)?',
    answer:
      'While visa-on-arrival is theoretically available for African Union nationals and select nationalities, queues at Bole International Airport can be extensive. We strongly advise all Abajifar clients to secure their eVisa online prior to departure to ensure effortless, express clearance through immigration upon landing.',
    keyPoints: [
      'eVisa grants express clearance at dedicated e-gates',
      'Our airport representative meets you immediately after baggage claim',
      'Private 4WD transfer waiting outside terminal'
    ]
  },
  {
    id: 'transit-visa-layovers',
    category: 'visas',
    categoryLabel: 'Visas & Entry',
    question: 'Do I need a visa if I have a layover in Addis Ababa?',
    answer:
      'If your connection at Addis Ababa Bole Airport is under 8 hours and you remain within the transit terminal, no visa is required. If your layover is between 8 and 24 hours on Ethiopian Airlines, transit hotel accommodation is frequently arranged by the airline. If you wish to step outside to explore the National Museum, Entoto hills, and coffee traditions with Abajifar, a simple transit visa can be processed.',
    keyPoints: [
      'Under 8 hours airside: No visa required',
      'Custom half-day and full-day private layover city tours available with Abajifar',
      'Luggage safely stored at airport during city exploration'
    ]
  },
  {
    id: 'best-time-to-visit-ethiopia',
    category: 'weather',
    categoryLabel: 'Weather & Seasons',
    question: 'When is the best time of year to travel to Ethiopia?',
    summary:
      'October to May is generally drier. June to August brings greener highlands and more rain; conditions vary across the country.',
    answer:
      'The primary dry season runs from October through May, offering sunny days, mild temperatures, and clear alpine panoramas across the Northern Historic Route, Simien Mountains, and Bale Plateau. Major cultural festivals like Timkat (Epiphany, mid-January) and Meskel (Finding of the True Cross, late September) offer extraordinary cultural pageantry. The rainy season (June to August) transforms the highlands into intensely green, misty landscapes with roaring waterfalls.',
    keyPoints: [
      'October to May: Ideal for Simien trekking, Lalibela, and Bale wildlife',
      'November to February: Cooler optimal window for Danakil Depression caldera expeditions',
      'June to August: Lush emerald highlands, fewer travelers, dramatic photography'
    ]
  },
  {
    id: 'danakil-depression-climate-extremes',
    category: 'weather',
    categoryLabel: 'Weather & Seasons',
    question: 'What weather should I expect in the Danakil Depression and Bale Mountains?',
    answer:
      'Ethiopia spans remarkable geographic diversity. The Danakil Depression is one of Earth’s lowest and hottest landscapes; Abajifar exclusively conducts expeditions between October and March when daytime temperatures average 33°C to 38°C and desert nights cool pleasantly. Conversely, in the Simien and Bale Mountains above 3,200m, daytime hiking is temperate (18°C–22°C), but night temperatures can drop to 2°C–5°C. We provide detailed gear and layering packing lists upon booking.',
    keyPoints: [
      'Danakil: Lightweight sun-protective desert wear and sturdy closed trekking shoes',
      'Simien & Bale: Thermal base layers, fleece jacket, and waterproof outer shell',
      'Addis Ababa: Spring-like climate year-round at 2,350m elevation'
    ]
  },
  {
    id: 'safety-and-security-protocols',
    category: 'safety',
    categoryLabel: 'Safety & 4WD Fleet',
    question: 'How does Abajifar ensure traveler safety and security across remote routes?',
    summary:
      'Conditions can change by region. We check routes before departure and adapt plans with local partners; ask us for current guidance for your dates.',
    answer:
      'Safety is our foremost operating principle. With an unblemished 12-year field safety record, Abajifar maintains real-time communication with local authorities, community elders, and regional tourism bureaus. We only navigate routes verified as 100% secure. In desert regions like Danakil, dedicated Afar scouts and local tourism police accompany every convoy, and our vehicles carry satellite communications, first-aid trauma supplies, and GPS tracking.',
    keyPoints: [
      '12-year operating heritage without safety incidents',
      'Real-time corridor verification and satellite communication in remote regions',
      'Local scout integration supporting regional security and community goodwill'
    ]
  },
  {
    id: 'custom-4wd-vehicle-fleet',
    category: 'safety',
    categoryLabel: 'Safety & 4WD Fleet',
    question: 'What types of vehicles are used, and how are challenging roads handled?',
    answer:
      'We exclusively operate custom-outfitted, high-clearance 4WD Toyota Land Cruisers (HZJ76 and Prado series) equipped with heavy-duty suspension, air conditioning, pop-up roof hatches for panoramic wildlife viewing, expedition coolers, and dual spare tires. Our drivers have minimum 8 years of professional highland and desert navigation experience, trained in defensive driving and mountain safety.',
    keyPoints: [
      '100% private 4WD Toyota Land Cruiser fleet',
      'Strict passenger limit (max 3–4 guests per vehicle for guaranteed window seats)',
      'Certified master mechanics inspect every vehicle before every departure'
    ]
  },
  {
    id: 'solo-and-female-traveler-safety',
    category: 'safety',
    categoryLabel: 'Safety & 4WD Fleet',
    question: 'Is Ethiopia safe for solo travelers and women traveling independently?',
    answer:
      'Yes. Ethiopian culture is renowned for deep warmth, hospitality, and profound respect for guests. A significant portion of our clients are solo female explorers and independent travelers. With Abajifar, you are never left to navigate unfamiliar logistical challenges alone—your dedicated lead guide and driver accompany you seamlessly from airport pickup to final departure, ensuring total comfort and peace of mind.',
    keyPoints: [
      'Dedicated private guide and driver greeting you upon airport arrival',
      'Vetted, highly rated boutique lodges and heritage hotels',
      'Attentive, respectful cultural ambassadors throughout your journey'
    ]
  },
  {
    id: 'health-altitude-acclimatization',
    category: 'health',
    categoryLabel: 'Health & Altitude',
    question: 'How do you handle altitude in the Simien and Bale Mountains, and what about malaria?',
    summary:
      'Addis Ababa and many northern highland stops sit above 2,000m. Allow time to acclimatize and ask your clinician about personal health precautions.',
    answer:
      'Destinations situated above 2,000m—including Addis Ababa (2,355m), Lalibela (2,500m), Gondar (2,133m), and the Simien Mountains (3,200m–4,500m)—are cool highlands completely free of malaria. For lower elevations such as South Omo or Awash National Park, standard malaria prophylaxis is advised. For high-altitude treks, Abajifar paces itineraries with gentle acclimatization days, and vehicles carry pulse oximeters and portable oxygen kits.',
    keyPoints: [
      'Highlands (Addis, Lalibela, Simien) are malaria-free zones',
      'Gradual altitude acclimatization built into all mountain itineraries',
      'Unlimited chilled bottled and purified mineral water provided daily'
    ]
  },
  {
    id: 'currency-payments-connectivity',
    category: 'culture',
    categoryLabel: 'Money & Etiquette',
    question: 'What currency should I bring, and how accessible are ATMs and mobile internet?',
    answer:
      'The currency is the Ethiopian Birr (ETB). International Visa and Mastercard are accepted at 4- and 5-star hotels in Addis Ababa, but cash is essential for traditional markets, tipping, and rural crafts. ATMs from commercial banks (Dashen, CBE, Awash) are readily accessible in major hubs. We assist travelers with official bank currency exchange upon arrival. For connectivity, we can arrange local 4G eSIMs or physical SIM cards (Ethio Telecom or Safaricom) providing rapid data access across the country.',
    keyPoints: [
      'Bring crisp USD or EUR banknotes (printed 2013 or newer) for exchange',
      'Local 4G SIM cards and eSIM setup facilitated by our team on Day 1',
      'Wi-Fi available at all partner hotels and boutique lodges'
    ]
  },
  {
    id: 'cultural-etiquette-and-dress-code',
    category: 'culture',
    categoryLabel: 'Money & Etiquette',
    question: 'What is the appropriate dress code for churches, and what about photography etiquette?',
    summary:
      'For churches and mosques, cover shoulders and knees, and remove shoes where requested. Ask before photographing people; local guidance varies.',
    answer:
      'Modesty is deeply valued in Ethiopia. When visiting ancient Ethiopian Orthodox rock-hewn churches or historical mosques, loose-fitting clothing covering shoulders and knees is required. Shoes must be removed before crossing church thresholds. Women typically drape a light white cotton scarf (netela), which Abajifar presents to all guests as a welcoming gift. In tribal regions like South Omo, Abajifar guides navigate village photography protocols ethically and respectfully.',
    keyPoints: [
      'Complimentary traditional white cotton scarf (netela) gifted to all guests',
      'Shoes removed before entering sacred church precincts',
      'Ethical, respectful photography protocols led by our community guides'
    ]
  }
];
