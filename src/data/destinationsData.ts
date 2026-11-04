import { Destination } from '../types';

export const destinationsData: Destination[] = [
  {
    id: 'northern-historic-route',
    slug: 'northern-historic-route',
    name: 'Northern Historic Route',
    region: 'Amhara & Tigray Highlands',
    tagline: 'Centuries of Stone, Faith, and Mountain Castles',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1777231507/dqq5fp3vb4b1dv2cqxw9.jpg',
    overview:
      'The Northern Historic Route represents the epic heart of Ethiopian civilization. Spanning over three millennia of recorded history, this mountain circuit leads from the ancient obelisks of Axum to the 17th-century medieval stone castles of Gondar, the island monasteries of Lake Tana, the thunder of the Blue Nile Falls, and the sublime rock-cut churches of Lalibela, carved directly into volcanic bedrock.',
    whyVisit: [
      'Walk inside the 11 rock-hewn monolithic churches of Lalibela, hailed as the 8th wonder of the world',
      'Cruise Lake Tana to hidden 14th-century island monasteries decorated with biblical frescoes',
      'Witness the majestic Blue Nile Falls (Tis Issat) roaring into the Great Rift gorge',
      'Marvel at the Royal Enclosure of Gondar and Debre Berhan Selassie’s winged angel ceiling',
      'Stand before Axum’s towering granite stelae, ancient tombs, and the sanctuary of the Ark of the Covenant'
    ],
    keyHighlights: [
      {
        title: 'Lalibela Rock Churches',
        description: 'Monolithic cruciform churches chiselled out of living pink volcanic scoria in the 12th century by King Lalibela.',
        tag: 'UNESCO World Heritage'
      },
      {
        title: 'Lake Tana & Monasteries',
        description: 'Ethiopia’s largest lake, feeding the Blue Nile and safeguarding medieval manuscripts on tranquil wooded islands.',
        tag: 'Sacred Waterway'
      },
      {
        title: 'Gondar Imperial Enclosure',
        description: 'Fasil Ghebbi: Medieval European and Moorish-influenced stone palaces built by Emperor Fasilides.',
        tag: 'Camelot of Africa'
      },
      {
        title: 'Axumite Kingdom Stelae',
        description: 'Massive monolithic granite pillars up to 33 meters high marking ancient royal burial crypts.',
        tag: 'Ancient Empire'
      },
      {
        title: 'Simien Mountains Foothills',
        description: 'Dramatic serrated peaks, home to endemic Gelada baboons, Walia ibex, and the Ethiopian wolf.',
        tag: 'Roof of Africa'
      }
    ],
    bestTimeToVisit: 'October to April (Dry season with crisp clear highland skies and radiant sunshine)',
    terrainAltitude: 'Highland plateau between 1,800m and 3,200m above sea level',
    featuredToursSlugs: ['simien-lalibela-danakil', 'classic-northern-historic-route'],
    culturalInsights:
      'The northern highlands are the spiritual home of Ethiopian Orthodox Christianity, with liturgical rites, Ge’ez hymns, and monastic traditions that have persisted uninterrupted for over 1,600 years.'
  },
  {
    id: 'omo-valley',
    slug: 'omo-valley',
    name: 'East & West Omo Valley',
    region: 'South Ethiopia & Omo River Basin',
    tagline: 'Living Heritage Across the Great River Basin',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789690142/lcupyjfbrdjbytckaa7p.webp',
    overview:
      'The Omo Valley is one of the most culturally diverse anthropological frontiers on Earth. Divided by the mighty Omo River, this region is home to distinct pastoral and agro-pastoral communities who have preserved their ancestral traditions, artistic body adornment, and sacred ceremonies with extraordinary resilience. Abajifar Tour and Travel provides ethical, respectful access to both East Omo and the remote West Omo frontier.',
    whyVisit: [
      'Clear, nuanced distinction between East and West Omo tribal cultures',
      'Respectful community-first photography guided by certified local cultural liaisons',
      'Experience the Hamar bull-jumping rite of passage and vibrant twilight Evangadi dance',
      'Observe the intricate body chalk painting and river bluff villages of the Karo',
      'Journey across the river into West Omo to meet the iconic Suri (Surma) people and witness ancient Donga ceremonies'
    ],
    keyHighlights: [
      {
        title: 'East Omo: Hamar & Karo',
        description: 'Pastoral communities renowned for elaborate ochre hair styling, leather beadwork, and scenic villages overlooking the Omo bend.',
        tag: 'East Omo Basin'
      },
      {
        title: 'West Omo: Suri & Nyangatom',
        description: 'Venture beyond the river into the remote West Omo wilderness where Suri traditions of ceramic lip plates and body etching thrive.',
        tag: 'West Omo Frontier'
      },
      {
        title: 'Dassanech Delta Settlements',
        description: 'Resilient riverine communities near the shores of Lake Turkana known for ingenious architectural dome huts.',
        tag: 'Lake Turkana Border'
      },
      {
        title: 'Weekly Tribal Markets',
        description: 'Vibrant regional markets at Key Afer, Dimeka, and Turmi where diverse peoples converge to trade honey, grains, and cattle.',
        tag: 'Living Commerce'
      }
    ],
    bestTimeToVisit: 'June to September and November to March (Dry travel conditions for cross-river 4WD expeditions)',
    terrainAltitude: 'Savannah and riverine lowlands between 400m and 900m altitude',
    featuredToursSlugs: ['omo-valley-cultural-odyssey'],
    culturalInsights:
      'Abajifar enforces strict ethical travel guidelines in the Omo Valley, maintaining direct community partnerships, employing resident tribal translators, and avoiding disruptive voyeurism.'
  },
  {
    id: 'danakil-depression',
    slug: 'danakil-depression',
    name: 'Danakil Depression',
    region: 'Afar Triangle & Great Rift System',
    tagline: 'An Otherworldly Realm of Fire, Sulfur, and Salt',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473043/uymjwklcqm5flyi2dhi7.jpg',
    overview:
      'Plunging 125 meters below sea level, the Danakil Depression is one of the lowest, hottest, and most geologically extraordinary places on the planet. Here, the Earth’s tectonic plates are pulling apart, creating a surreal landscape of persistent molten magma at Erta Ale volcano, fluorescent sulfur terraces at Dallol, and blinding white salt crusts crossed by Afar camel caravans.',
    whyVisit: [
      'Climb the rim of Erta Ale to stare into one of the world’s rare continuously active molten lava lakes',
      'Explore the technicolor surrealism of Dallol’s bubbling acid hot springs and emerald mineral pools',
      'Watch Afar salt miners hand-carve salt blocks (Amole) from the prehistoric sea bed of Lake Assale',
      'Capture cinematic vistas of salt caravans marching against an infinite desert horizon',
      'Swim in the hyper-saline waters of Lake Karum and soak in natural thermal desert pools'
    ],
    keyHighlights: [
      {
        title: 'Erta Ale Shield Volcano',
        description: 'The ‘Smoking Mountain’ in Afar language, housing a churning glowing lava lake beneath starry desert night skies.',
        tag: 'Active Magma Chamber'
      },
      {
        title: 'Dallol Hydrothermal Field',
        description: 'Vibrant neon yellow, turquoise, and rust-colored mineral terraces formed by underground volcanic springs.',
        tag: 'Geological Wonder'
      },
      {
        title: 'Lake Assale Salt Flats',
        description: 'Miles of blinding crystalline salt pan where traditional camel trains transport salt slabs as they have for millennia.',
        tag: 'Ancient Trade Route'
      },
      {
        title: 'Afar Culture & Hospitality',
        description: 'Meet the resilient Afar nomads whose knowledge and courage have navigated this extreme desert for centuries.',
        tag: 'Desert Custodians'
      }
    ],
    bestTimeToVisit: 'November to February (Mildest winter temperatures in the Afar desert)',
    terrainAltitude: '-125 meters below sea level at Dallol; up to 613m summit at Erta Ale',
    featuredToursSlugs: ['danakil-depression-expedition', 'simien-lalibela-danakil'],
    culturalInsights:
      'Expeditions to Danakil are fully escorted by specialized Afar guides, local community scouts, private air-conditioned 4WD convoys, and expedition camp chefs for maximum safety and comfort.'
  },
  {
    id: 'addis-ababa-layover',
    slug: 'addis-ababa-layover',
    name: 'Addis Ababa Layover Tours',
    region: 'Central Highlands & Diplomatic Capital',
    tagline: 'The Gateway to Africa, Ancient Fossils, and Pure Buna',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1790794223/ozeyen4nkw1ocvzxwjgy.jpg',
    overview:
      'Addis Ababa—meaning ‘New Flower’ in Amharic—is the vibrant diplomatic capital of Africa and headquarters of the African Union. Perched at 2,400 meters altitude at the foot of Mount Entoto, the city seamlessly bridges ancient imperial history and dynamic modern urban energy. Ideal for transit layovers or extended cultural stopovers.',
    whyVisit: [
      'Gaze upon the 3.2-million-year-old fossilized skeleton of "Lucy" (Dinkinesh) at the National Museum',
      'Panoramic 360-degree views of the capital from the fragrant eucalyptus crest of Mount Entoto',
      'Immerse your senses in Merkato, the largest open-air trading market on the African continent',
      'Savor authentic traditional Ethiopian Buna coffee ceremonies roasted fresh right before you',
      'Visit the historic Holy Trinity Cathedral and Emperor Menelik II’s royal mountain palace'
    ],
    keyHighlights: [
      {
        title: 'National Museum of Ethiopia',
        description: 'Home to world-renowned hominid paleontological discoveries and Ethiopia’s imperial royal regalia.',
        tag: 'Cradle of Humankind'
      },
      {
        title: 'Entoto Park & Mountain Vista',
        description: 'Fresh pine air, historic royal churches, and sweeping panoramas of Addis Ababa’s skyline.',
        tag: 'Highland Overlook'
      },
      {
        title: 'Merkato Open-Air Market',
        description: 'Vast sensory bazaar of Ethiopian spices, handwoven fabrics, aromatic coffees, and artisanal crafts.',
        tag: 'Cultural Commerce'
      },
      {
        title: 'Authentic Coffee Ceremony',
        description: 'Experience the birthplace of Coffea Arabica with frankincense smoke, popcorn, and triple-poured jebena brew.',
        tag: 'Birthplace of Coffee'
      }
    ],
    bestTimeToVisit: 'Year-round pleasant climate; warm dry months from October to May',
    terrainAltitude: '2,355m to 3,200m at Mount Entoto (World’s 3rd highest capital)',
    featuredToursSlugs: ['addis-ababa-cultural-layover'],
    culturalInsights:
      'With Ethiopian Airlines operating Africa’s largest transit hub at Bole International Airport, our layover tours are meticulously coordinated around flight schedules with private chauffeured pickups.'
  }
];
