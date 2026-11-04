import { Tour } from '../types';

export const toursData: Tour[] = [
  {
    id: 'simien-lalibela-danakil',
    slug: 'simien-lalibela-danakil',
    title: '6 Days Simien Mountains, Lalibela & Danakil Depression',
    destinationSlug: 'northern-historic-route',
    destinationName: 'Northern Highlands & Afar Depression',
    region: 'Amhara & Afar Regional States',
    durationDays: 6,
    durationNights: 5,
    groupType: 'Small Group',
    difficulty: 'Challenging',
    tourType: 'Expedition',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789937596/ebenwalotmbgiqszetie.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription:
      'The ultimate tri-landscape expedition spanning the serrated peaks of the Simien Mountains, medieval rock-cut churches of Lalibela, and the fiery magma caldera of Erta Ale.',
    overview:
      'Experience three of Africa’s most sensational landscapes in one tightly choreographed expedition. Begin on the edge of the Simien Mountain escarpment encountering troops of endemic Gelada baboons, explore the sacred subterranean monolithic churches of Lalibela, and descend into the Afar Depression for an unforgettable night atop Erta Ale active volcano followed by the kaleidoscopic mineral springs of Dallol.',
    highlights: [
      'Close encounters with friendly, endemic Gelada baboons in Simien Mountains National Park',
      'Full private guided exploration of Lalibela’s 11 UNESCO rock-hewn monolithic churches',
      'Night-time trek to the glowing rim of Erta Ale active shield volcano',
      'Sunrise exploration of Dallol’s hyper-acidic neon yellow and turquoise mineral springs',
      'Walk upon the crystalline salt pans of Lake Assale and witness Afar camel salt caravans'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Gondar & Escarpment of the Simien Mountains',
        location: 'Simien Mountains National Park',
        description:
          'Morning domestic flight to Gondar and private 4WD drive up into the Simien Mountains. Hike along the dramatic escarpment near Sankaber at 3,250 meters. Meet vast family troops of docile Gelada baboons grazing peacefully along the cliff edges.',
        highlights: ['Gelada baboons', 'Sankaber viewpoint', 'Highland panorama'],
        accommodation: 'Simien Lodge / Mountain Eco-Camp',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Jinbar Waterfall Gorge & Transfer to Lalibela',
        location: 'Simien Mountains to Lalibela',
        description:
          'Morning walk to the 500-meter drop of Jinbar Waterfall gorge with views across the Wolchefit pass. Scenic descent through the Ethiopian highlands to the holy mountain town of Lalibela.',
        highlights: ['Jinbar Waterfall', 'Highland rural villages', 'Sunset over Mount Abuna Yosef'],
        accommodation: 'Mountain View Hotel / Mezena Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'The Monolithic Wonder of Lalibela',
        location: 'Lalibela',
        description:
          'Spend the day exploring the two main clusters of 12th-century rock-hewn churches, connected by subterranean trenches and tunnels. Conclude at sunset at the iconic cruciform Church of St. George (Bet Giyorgis), carved directly from living bedrock.',
        highlights: ['Bet Giyorgis (St. George)', 'Bet Medhane Alem', 'Subterranean stone tunnels'],
        accommodation: 'Mountain View Hotel / Mezena Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Flight to Semera & Expedition into Danakil Depression',
        location: 'Semera to Dodom / Erta Ale Base',
        description:
          'Short flight to Semera, capital of the Afar region. Meet our private 4WD expedition convoy, Afar scouts, and desert expedition cook. Drive across hardened lava plains toward the base camp of Erta Ale volcano.',
        highlights: ['Afar desert convoy', 'Volcanic lava terrain', 'Base camp expedition under stars'],
        accommodation: 'Traditional Afar open-air desert camp',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Erta Ale Lava Caldera & Lake Assale Salt Flats',
        location: 'Erta Ale to Hamed Ela',
        description:
          'Dawn observation of the bubbling magma chamber of Erta Ale. Descend the crater and drive across desert tracks to Hamed Ela oasis. Afternoon sunset toast on the endless salt flats of Lake Assale as camel caravans journey home.',
        highlights: ['Erta Ale active crater', 'Afar salt miners', 'Sunset salt reflections'],
        accommodation: 'Hamed Ela expedition camp',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Dallol Neon Mineral Springs & Return to Addis Ababa',
        location: 'Dallol to Semera & Flight to Addis Ababa',
        description:
          'Early morning exploration of the surreal hydrothermal field of Dallol, witnessing bubbling acidic pools, sulfur chimneys, and salt pillars at -125 meters altitude. Drive to Semera for the afternoon scheduled flight back to Addis Ababa.',
        highlights: ['Dallol sulfur fields', 'Potash and salt canyon', 'Evening farewell coffee ceremony'],
        accommodation: 'Day room in Addis Ababa (optional extension)',
        meals: 'Breakfast, Lunch'
      }
    ],
    included: [
      'All internal domestic flights (Gondar, Lalibela, Semera, Addis Ababa)',
      'Private air-conditioned Toyota Land Cruiser 4WD vehicles with fuel and driver',
      'All accommodation in hotels, lodges, and expedition camps',
      'All meals as specified in the itinerary',
      'Dedicated English-speaking tour leader and certified local site guides',
      'Afar regional permits, local police scouts, and camp cook team in Danakil',
      'Bottled mineral water throughout the entire expedition',
      'All national park and UNESCO heritage entrance admissions and permits'
    ],
    notIncluded: [
      'International flights and Ethiopia entry visa',
      'Alcoholic beverages and personal extras',
      'Travel insurance (mandatory)',
      'Gratuities for local guides and drivers'
    ],
    bestSeason: 'October through March (Mildest temperatures in the Afar desert)',
    physicalRating: 'Challenging — moderate hiking and desert camping conditions',
    faqs: [
      {
        question: 'How physically demanding is the Erta Ale volcano trek?',
        answer:
          'The hike from base camp to the rim takes approximately 3 to 4 hours over gentle to moderate volcanic rock terrain. Camels are available to carry luggage and camping gear.'
      },
      {
        question: 'Is it safe to visit the Danakil Depression?',
        answer:
          'Yes. All Abajifar expeditions to the Danakil Depression operate under full Afar regional tourism coordination, escorted by dedicated local scouts and satellite-connected convoy vehicles.'
      }
    ]
  },
  {
    id: 'omo-valley-cultural-odyssey',
    slug: 'omo-valley-cultural-odyssey',
    title: '8 Days Omo Valley Cultural Tour (East & West Omo)',
    destinationSlug: 'omo-valley',
    destinationName: 'South Ethiopia & Omo River Basin',
    region: 'South Ethiopia Regional State',
    durationDays: 8,
    durationNights: 7,
    groupType: 'Custom Private',
    difficulty: 'Moderate',
    tourType: 'Cultural',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789937754/ctzbwpnlytehkv6zznb5.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription:
      'An ethical, profound immersion into the indigenous cultures of both East and West Omo Valley, honoring ancestral ceremonies, river settlements, and ancient lifestyles.',
    overview:
      'The Omo Valley is one of the world’s most significant anthropological crossroads. On this comprehensive 8-day expedition, we bridge the cultural worlds on both sides of the Omo River. Explore East Omo (Hamar, Karo, Dassanech, Arbore) before crossing into the wild frontier of West Omo to meet the iconic Suri (Surma) and Nyangatom people with certified local resident liaisons.',
    highlights: [
      'Private meetings with Hamar elders and witnessing the ritual bull-jumping ceremony',
      'Stunning photography sessions above the Omo River curves with the Karo artists',
      'Cross the Omo River in traditional dugout canoes to visit the Dassanech settlements',
      'Expedition into West Omo to understand the sacred lip-plate and scarification heritage of the Suri',
      'Immerse in the bustling, colorful weekly tribal markets at Key Afer and Dimeka'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Flight to Jinka & Key Afer Inter-Tribal Market',
        location: 'Addis Ababa to Jinka',
        description:
          'Morning flight to Jinka. Visit the South Omo Research Center & Ethnographic Museum. In the afternoon, visit the bustling Key Afer market where Banna, Hamar, and Ari communities gather in traditional regalia.',
        highlights: ['Jinka Ethnographic Museum', 'Key Afer Market', 'Ari rural community'],
        accommodation: 'Eco-Omo Lodge, Jinka',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Mago National Park & Mursi Cultural Encounter',
        location: 'Mago National Park to Turmi',
        description:
          'Early morning drive through Mago National Park to visit a remote Mursi village, famous for their clay lip plates and body art. Afternoon drive southward to Turmi, the center of the Hamar people.',
        highlights: ['Mursi village', 'Mago wildlife corridor', 'Hamar territory'],
        accommodation: 'Buska Lodge / Paradise Lodge, Turmi',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Karo Body Painting at Korcho & River Bluffs',
        location: 'Turmi & Korcho',
        description:
          'Journey to Korcho, perched high on the cliffs overlooking a dramatic bend of the Omo River. Meet the Karo people, renowned masters of geometric body chalk painting and elaborate feather headpieces.',
        highlights: ['Korcho village', 'Omo River bend panorama', 'Karo chalk artistry'],
        accommodation: 'Buska Lodge, Turmi',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Dassanech Delta Crossing & Lake Turkana Border',
        location: 'Omorate & Turmi',
        description:
          'Drive to Omorate on the Kenyan border. Cross the Omo River in traditional wooden canoes to reach the semi-arid settlements of the Dassanech people. Afternoon Hamar village walk and Evangadi night dance.',
        highlights: ['Canoe crossing of the Omo', 'Dassanech delta life', 'Hamar twilight dance'],
        accommodation: 'Buska Lodge, Turmi',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Crossing the Omo River Basin to West Omo Wilderness',
        location: 'Turmi to West Omo via Kangaten',
        description:
          'Pioneer drive across the Omo River bridge at Kangaten into West Omo territory. Encounter the Nyangatom (Bumi) agro-pastoralists along the riverbank before setting camp near Kibish in Suri territory.',
        highlights: ['Kangaten bridge', 'Nyangatom territory', 'Untamed West Omo landscapes'],
        accommodation: 'Private mobile wilderness camp, Kibish',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Suri (Surma) Heritage, Scarification & Donga Fields',
        location: 'Kibish & Tulgit',
        description:
          'Spend the day with the Suri people in Kibish and Tulgit. Learn about the ancient symbolism of body scarification, clay body paint, and pottery crafting. Learn about seasonal Donga stick-fighting ceremonies.',
        highlights: ['Suri ancestral traditions', 'Ceramic lip plate artisans', 'Kibish river valley'],
        accommodation: 'Private mobile wilderness camp, Kibish',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 7,
        title: 'West Omo to Arba Minch via Great Rift Lakes',
        location: 'West Omo to Arba Minch',
        description:
          'Scenic journey through the lush green southwestern highlands and the Konso terraced cultural landscape, a UNESCO World Heritage site celebrated for stone walls and wooden Waga grave markers.',
        highlights: ['Konso walled villages', 'Terraced agricultural marvel', 'Lake Chamo overview'],
        accommodation: 'Haile Resort, Arba Minch',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 8,
        title: 'Lake Chamo Boat Safari & Flight to Addis Ababa',
        location: 'Arba Minch to Addis Ababa',
        description:
          'Morning private boat safari on Lake Chamo to witness the famed "crocodile market" with giant Nile crocodiles, hippos, and abundant pelicans. Afternoon flight back to Addis Ababa.',
        highlights: ['Lake Chamo crocodile market', 'Aquatic birdlife', 'Return flight to Addis'],
        accommodation: 'Departure / Addis Hotel',
        meals: 'Breakfast, Lunch'
      }
    ],
    included: [
      'All internal flights (Addis Ababa to Jinka / Arba Minch to Addis Ababa)',
      'Dedicated 4WD Land Cruiser with professional driver-guide',
      'All lodge accommodation and full-service mobile expedition camping in West Omo',
      'All meals and bottled spring water throughout',
      'Fair community entrance and cultural photography permissions',
      'Accredited local tribal interpreters for each community',
      'Boat crossings on the Omo River and Lake Chamo safari boat'
    ],
    notIncluded: ['International airfare', 'Alcoholic drinks', 'Personal travel insurance'],
    bestSeason: 'June to September & November to March',
    physicalRating: 'Moderate — dirt roads and river crossings',
    faqs: [
      {
        question: 'How does Abajifar ensure respectful cultural interactions?',
        answer:
          'We work directly with community elders, employ resident youth as local guides, pay standardized fair photography permissions directly to families, and never permit intrusive or exploitative group tours.'
      }
    ]
  },
  {
    id: 'classic-northern-historic-route',
    slug: 'classic-northern-historic-route',
    title: '5 Days Classic Northern Historic Route',
    destinationSlug: 'northern-historic-route',
    destinationName: 'Northern Highlands',
    region: 'Amhara Regional State',
    durationDays: 5,
    durationNights: 4,
    groupType: 'Private Tour',
    difficulty: 'Easy',
    tourType: 'Historical',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1772525711/yef4ewqgenopemzbhvum.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription:
      'The essential cultural journey linking the island monasteries of Lake Tana, the imperial castles of Gondar, and the sublime rock-cut churches of Lalibela.',
    overview:
      'Designed for travelers who want to absorb Ethiopia’s grand historical masterpieces in elevated comfort. From the origin of the Blue Nile at Lake Tana to Gondar’s 17th-century castles and the peerless subterranean stone churches of Lalibela, this curated journey features private transfers, expert historians, and hand-selected boutique lodges.',
    highlights: [
      'Private boat cruise on Lake Tana to 14th-century Ura Kidane Mehret monastery',
      'Excursion to the thunderous Blue Nile Falls (Tis Issat)',
      'Royal Enclosure (Fasil Ghebbi) of Gondar and the painted angel ceiling of Debre Berhan Selassie',
      'Two full in-depth days exploring all 11 monolithic churches of Lalibela with a master historian'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Flight to Bahir Dar, Lake Tana Monasteries & Blue Nile Falls',
        location: 'Bahir Dar & Lake Tana',
        description:
          'Morning flight to Bahir Dar. Private morning boat cruise on Lake Tana to the Zege Peninsula, visiting the renowned church of Ura Kidane Mehret. Afternoon drive to the breathtaking Blue Nile Falls.',
        highlights: ['Lake Tana cruise', 'Ura Kidane Mehret frescoes', 'Blue Nile Falls'],
        accommodation: 'Kuriftu Resort & Spa, Lake Tana',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Gondar: The Camelot of Africa',
        location: 'Bahir Dar to Gondar',
        description:
          'Scenic drive north through the fertile highlands to Gondar. Explore the royal palaces of Emperor Fasilides, Empress Mentewab’s palace, and the mesmerizing painted ceiling of Debre Berhan Selassie Church.',
        highlights: ['Fasil Ghebbi Castles', 'Fasilides Bath', 'Debre Berhan Selassie angels'],
        accommodation: 'Gondar Hills Resort',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Flight to Lalibela & The Northern Church Cluster',
        location: 'Gondar to Lalibela',
        description:
          'Short scenic flight to Lalibela. Afternoon guided exploration of the Northern Cluster of monolithic churches, including the world’s largest monolithic church, Bet Medhane Alem, and Bet Maryam.',
        highlights: ['Bet Medhane Alem', 'Bet Maryam', 'Subterranean tunnels'],
        accommodation: 'Mezena Lodge, Lalibela',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Eastern Cluster & Saint George Monolith',
        location: 'Lalibela',
        description:
          'Morning visit to the Eastern Cluster (Bet Amanuel, Bet Merkorios). In late afternoon, witness the sunset cast golden amber hues across the cross-shaped Church of Saint George (Bet Giyorgis).',
        highlights: ['Bet Giyorgis at sunset', 'Bet Amanuel', 'Traditional honey wine tasting'],
        accommodation: 'Mezena Lodge, Lalibela',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Return to Addis Ababa & Cultural Farewell',
        location: 'Lalibela to Addis Ababa',
        description:
          'Morning flight back to Addis Ababa. Afternoon souvenir shopping and traditional coffee tasting before evening international flight connections.',
        highlights: ['Scenic highland flight', 'Coffee tasting', 'Addis departure'],
        accommodation: 'Departure',
        meals: 'Breakfast'
      }
    ],
    included: [
      'All internal domestic flights (Addis-Bahir Dar, Gondar-Lalibela, Lalibela-Addis)',
      '4-star & luxury boutique lodges throughout',
      'Private modern air-conditioned vehicle transfers',
      'All meals and entrance tickets to monuments',
      'Private licensed English-speaking master guides'
    ],
    notIncluded: ['International flights', 'Ethiopia tourist visa', 'Personal expenditures'],
    bestSeason: 'September to May',
    physicalRating: 'Easy — cobblestone walking and modest stairs',
    faqs: [
      {
        question: 'Are shoes allowed inside the rock churches of Lalibela?',
        answer:
          'As holy active places of worship, shoes are removed before entering church sanctuaries. Shoe attendants are provided on all Abajifar tours.'
      }
    ]
  },
  {
    id: 'danakil-depression-expedition',
    slug: 'danakil-depression-expedition',
    title: '4 Days Danakil Depression & Erta Ale Volcano Expedition',
    destinationSlug: 'danakil-depression',
    destinationName: 'Danakil Depression',
    region: 'Afar Regional State',
    durationDays: 4,
    durationNights: 3,
    groupType: 'Small Group',
    difficulty: 'Expedition',
    tourType: 'Expedition',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1784044757/raqoc5ish3wjbmxqtgqx.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription:
      'A thrilling 4-day desert odyssey to Dallol’s hyper-acidic neon sulfur springs, the vast Assale salt pan, and the glowing magma lake of Erta Ale volcano.',
    overview:
      'Venture into one of the planet’s most extreme and mesmerizing landscapes. Operating with our fleet of customized 4WD Land Cruisers, satellite communications, and specialized desert camp crew, this 4-day expedition delivers unmatched access to Erta Ale’s persistent molten lava caldera, the otherworldly color palettes of Dallol, and the timeless Afar salt trade.',
    highlights: [
      'Trek to the glowing crater rim of Erta Ale active shield volcano under starlight',
      'Witness the neon yellow, emerald green, and copper pools of Dallol hydrothermal field',
      'Stand upon the vast salt crust of Lake Assale and observe traditional Afar salt cutting',
      'Photograph camel caravans marching into the sunset across shimmering mirages',
      'Swim in the buoyant hypersaline waters of Lake Karum'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Flight to Semera & Drive to Erta Ale Base Camp',
        location: 'Semera to Erta Ale',
        description:
          'Fly from Addis Ababa to Semera. Embark in our 4WD convoy across dramatic lava fields and volcanic sand dunes to Dodom base camp. Prepare gear for the sunset summit ascent.',
        highlights: ['Afar desert convoy', 'Volcanic lava terrain', 'Base camp dinner under stars'],
        accommodation: 'Afar open-air mountain camp near crater rim',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Erta Ale Lava Caldera & Journey to Hamed Ela',
        location: 'Erta Ale to Hamed Ela',
        description:
          'Early dawn viewing of the fiery active lava lake inside Erta Ale caldera. Hike down to base camp for breakfast, then drive northward across desert tracks to the Afar village of Hamed Ela.',
        highlights: ['Dawn magma observation', 'Afar salt tracks', 'Hamed Ela oasis'],
        accommodation: 'Traditional Afar open-air star-camp, Hamed Ela',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Dallol Sulfur Terraces, Salt Mountains & Assale Salt Flats',
        location: 'Dallol & Lake Assale',
        description:
          'Morning exploration of Dallol, -125m below sea level. Marvel at the kaleidoscopic mineral chimneys and acid geysers. Visit the salt mountain canyons and watch Afar miners shaping salt bars.',
        highlights: ['Dallol sulfur springs', 'Salt canyon labyrinths', 'Sunset at Lake Assale'],
        accommodation: 'Traditional Afar open-air star-camp, Hamed Ela',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Lake Karum Saline Swim & Return to Semera / Addis',
        location: 'Lake Karum to Semera & Flight to Addis Ababa',
        description:
          'Morning float in the salt waters of Lake Karum and natural desert springs. Drive back to Semera airport for your evening flight to Addis Ababa.',
        highlights: ['Lake Karum float', 'Return drive through Afar plains', 'Flight to Addis Ababa'],
        accommodation: 'Departure',
        meals: 'Breakfast, Lunch'
      }
    ],
    included: [
      'Round-trip domestic flights (Addis Ababa - Semera - Addis Ababa)',
      '4WD Toyota Land Cruiser convoy with dedicated mechanics and drivers',
      'Full desert camping gear (camp beds, mattresses, clean bedding)',
      'Expedition chef preparing fresh hot meals throughout',
      'All local Afar scout guides and regional security escorts',
      'Unlimited bottled mineral water'
    ],
    notIncluded: ['Personal travel insurance', 'Tips for expedition team', 'Personal spending'],
    bestSeason: 'November to February',
    physicalRating: 'Challenging — extreme daytime temperatures',
    faqs: [
      {
        question: 'Where do we sleep in the Danakil Depression?',
        answer:
          'Accommodation is in traditional open-air Afar star-camps featuring wooden camp cots under the stunningly clear desert night sky, with private tents available upon advance request.'
      }
    ]
  },
  {
    id: 'chebera-churchura-coffee',
    slug: 'chebera-churchura-coffee',
    title: '6 Days Chebera Churchura National Park & Southwest Coffee Tour',
    destinationSlug: 'omo-valley',
    destinationName: 'Southwest Ethiopia Wilderness & Kaffa',
    region: 'Southwest Ethiopia Regional State',
    durationDays: 6,
    durationNights: 5,
    groupType: 'Private Tour',
    difficulty: 'Moderate',
    tourType: 'Coffee & Wildlife',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1790795391/dfmtrd1ywq5gbakuqmzo.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription:
      'Discover the secret African elephant wilderness of Chebera Churchura paired with the misty cloud forests of Jimma and Kaffa, the botanical birthplace of coffee.',
    overview:
      'Uncover Ethiopia’s wildest and least-visited frontier. Chebera Churchura National Park is home to the largest contiguous population of wild African forest elephants in the country, roaming pristine river valleys, hot springs, and crater lakes. This journey seamlessly combines wilderness safaris with the historic coffee forests of Jimma and the ancient kingdom of Kaffa.',
    highlights: [
      'Tracking wild African forest elephants and buffaloes in Chebera Churchura National Park',
      'Discover pristine natural hot springs and hidden crater lakes deep in the jungle valley',
      'Visit the historical Palace of King Abba Jifar II in the historic kingdom of Jimma',
      'Trek through the misty montane cloud forests of Kaffa where Coffea Arabica was first discovered',
      'Participate in authentic forest coffee harvesting and traditional hand-roasting ceremonies'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Addis Ababa to Jimma: Royal Heritage of Abba Jifar',
        location: 'Addis Ababa to Jimma',
        description:
          'Scenic drive through the Gibe River gorge to Jimma, the historical capital of the Kingdom of Jimma. Tour the exquisite 19th-century royal palace of King Abba Jifar II, showcasing traditional timber architecture.',
        highlights: ['Gibe River gorge', 'Palace of King Abba Jifar II', 'Jimma coffee center'],
        accommodation: 'Central Jimma Hotel',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Jimma to Chebera Churchura National Park',
        location: 'Chebera Churchura',
        description:
          'Drive south into the untamed wilderness of Chebera Churchura. Set up camp at the park headquarters and take a late afternoon guided nature walk along the Shoshuma riverbank looking for colobus monkeys and birdlife.',
        highlights: ['Pristine rainforest', 'Shoshuma river walk', 'Colobus monkeys'],
        accommodation: 'Chebera Churchura Safari Camp',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Elephant Tracking & Crater Lakes of Chebera',
        location: 'Chebera Churchura',
        description:
          'Full-day guided walking and vehicle safari with national park scouts tracking wild forest elephants. Visit the scenic Keriballa crater lake and natural sulfur hot springs frequented by wildlife.',
        highlights: ['Wild forest elephants', 'Keriballa crater lake', 'Hot springs'],
        accommodation: 'Chebera Churchura Safari Camp',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Chebera to Bonga & The Kaffa Biosphere Reserve',
        location: 'Bonga & Kaffa Biosphere',
        description:
          'Drive through lush tea and coffee plantations to Bonga, the gateway to the UNESCO-recognized Kaffa Biosphere Reserve. Visit the sacred Mankira forest, where wild Arabica coffee trees still grow naturally in the understory.',
        highlights: ['Mankira wild coffee forest', 'Wushwush tea estate', 'Bonga cloud forest'],
        accommodation: 'Kaffa Green Hotel, Bonga',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Bonga Waterfalls, Hot Springs & Coffee Cooperatives',
        location: 'Bonga',
        description:
          'Hike to the scenic Barta waterfall and natural bridge of God. Meet local organic coffee farming cooperatives to understand sustainable forest-harvested coffee processing.',
        highlights: ['Barta waterfall', 'Traditional organic coffee processing', 'Forest honey tasting'],
        accommodation: 'Kaffa Green Hotel, Bonga',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Return to Addis Ababa through the Great Rift Valley',
        location: 'Bonga to Addis Ababa',
        description:
          'Scenic drive back toward Addis Ababa with stops at traditional roadside fruit and spice stalls. Farewell dinner in Addis Ababa with live Ethiopian music and cultural dances.',
        highlights: ['Scenic Ethiopian highlands', 'Farewell cultural dinner in Addis Ababa'],
        accommodation: 'Departure',
        meals: 'Breakfast, Lunch, Dinner'
      }
    ],
    included: [
      'Private 4WD Land Cruiser with professional driver and fuel',
      'All park entrance permits and armed scout accompaniment in Chebera Churchura',
      'All hotel and safari camp accommodations',
      'All meals and bottled drinking water',
      'Specialized forest and wildlife guides'
    ],
    notIncluded: ['International flights', 'Alcoholic drinks', 'Personal tips and gratuities'],
    bestSeason: 'October to May (Optimal dry season for elephant tracking)',
    physicalRating: 'Moderate — walking through forest paths',
    faqs: [
      {
        question: 'Who was King Abba Jifar?',
        answer:
          'King Abba Jifar II was the famous 19th-century monarch of the Kingdom of Jimma, celebrated for his diplomacy, cultural patronage, and architectural legacy, which inspired our company name.'
      }
    ]
  },
  {
    id: 'yirgacheffe-rift-valley',
    slug: 'yirgacheffe-rift-valley',
    title: '5 Days Coffee Tour Yirgacheffe & Great Rift Valley Lakes',
    destinationSlug: 'omo-valley',
    destinationName: 'Great Rift Valley & Yirgacheffe',
    region: 'Sidama & Central Rift Valley',
    durationDays: 5,
    durationNights: 4,
    groupType: 'Small Group',
    difficulty: 'Easy',
    tourType: 'Coffee & Wildlife',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393565/iujzpmqr4cx9j5gayyou.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription:
      'Immerse in the floral and citrus aromatic paradise of Yirgacheffe coffee origin, combined with the tranquil bird sanctuaries of Lake Langano and Lake Hawassa.',
    overview:
      'Ethiopian Yirgacheffe is universally celebrated by baristas and coffee connoisseurs for its bright acidity and delicate jasmine and citrus notes. This 5-day journey takes you directly into the high-altitude volcanic soils of Yirgacheffe and Sidama to visit washing stations, coffee cupping labs, and fair-trade cooperatives, interwoven with Rift Valley lake retreats.',
    highlights: [
      'Visit premier organic coffee washing and drying stations in the heart of Yirgacheffe',
      'Participate in professional coffee cupping and tasting sessions with master graders',
      'Early morning Hawassa fish market and lakeside birdwatching for marabou storks',
      'Relax on the sandy mineral-rich beaches of bilharzia-free Lake Langano'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Addis Ababa to Lake Langano via Rift Valley Lakes',
        location: 'Addis Ababa to Lake Langano',
        description:
          'Drive south into the Great Rift Valley, passing Lake Ziway, famed for waterbirds and pelicans. Arrive at Lake Langano, the only freshwater lake in Ethiopia safe for swimming.',
        highlights: ['Lake Ziway pelican sanctuary', 'Lake Langano sunset swim'],
        accommodation: 'Sabana Beach Resort, Lake Langano',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Lake Hawassa Fish Market & Journey to Yirgacheffe',
        location: 'Hawassa to Dilla / Yirgacheffe',
        description:
          'Visit the vibrant Hawassa fish market where fishermen land tilapia and catfish. Continue through the lush green mountains of Sidama into the famed Yirgacheffe coffee belt.',
        highlights: ['Hawassa fish market', 'Colobus monkey sightings', 'Sidama coffee highlands'],
        accommodation: 'Aregash Lodge / Local boutique lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Deep Dive: Yirgacheffe Coffee Farms & Washing Stations',
        location: 'Yirgacheffe',
        description:
          'Full day exploring world-renowned coffee cooperatives in Yirgacheffe and Kochere. Walk among shaded heirloom coffee trees, observe wet processing, and taste fresh microlots.',
        highlights: ['Wet-mill washing stations', 'African raised drying beds', 'Direct-trade cupping'],
        accommodation: 'Aregash Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Wondo Genet Natural Hot Springs & Forest Walk',
        location: 'Yirgacheffe to Wondo Genet',
        description:
          'Drive to Wondo Genet, once Emperor Haile Selassie’s private mountain retreat. Soak in mineral thermal baths and hike through tropical forests alive with endemic birds.',
        highlights: ['Emperor’s hot spring pools', 'Canopy birdwatching', 'Tropical forest hike'],
        accommodation: 'Wondo Genet Resort / Hawassa Haile Resort',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Return to Addis Ababa & Specialty Roastery Tour',
        location: 'Hawassa to Addis Ababa',
        description:
          'Scenic drive north along the modern expressway back to Addis Ababa. Conclude with a visit to a leading Addis Ababa specialty coffee roastery and cupping lounge.',
        highlights: ['Expressway return', 'Specialty coffee shopping in Addis Ababa'],
        accommodation: 'Departure',
        meals: 'Breakfast, Lunch'
      }
    ],
    included: [
      'Private air-conditioned minibus or 4WD vehicle with professional driver',
      'All resort and lodge accommodations',
      'All meals throughout the itinerary',
      'Professional coffee expert guide and translation',
      'All cooperative visiting permits and cupping sessions'
    ],
    notIncluded: ['International flights', 'Personal purchases', 'Tips'],
    bestSeason: 'October to February (Peak coffee harvesting and washing season)',
    physicalRating: 'Easy — relaxed travel',
    faqs: [
      {
        question: 'Can I purchase green or roasted coffee directly at the origin?',
        answer:
          'Yes! We arrange direct purchases from licensed roasteries and export-compliant farmer cooperatives so you can bring certified Ethiopian coffee home.'
      }
    ]
  },
  {
    id: 'addis-ababa-cultural-layover',
    slug: 'addis-ababa-cultural-layover',
    title: 'Full Day & Half Day Addis Ababa Private Layover Experience',
    destinationSlug: 'addis-ababa-layover',
    destinationName: 'Addis Ababa',
    region: 'Addis Ababa City Administration',
    durationDays: 1,
    durationNights: 0,
    groupType: 'Private Tour',
    difficulty: 'Easy',
    tourType: 'Layover',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1790794217/lfgual1hpx0kowelwmwk.jpg',
    gallery: [
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1790794218/drccmskk7o1i0kbnxlr1.jpg',
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1790794217/brrwppl6rggxg305tq7h.jpg'
    ],
    shortDescription:
      'Transform your transit layover into an unforgettable Ethiopian cultural immersion. Features private airport pickups, the National Museum, Mount Entoto, and authentic Buna ceremonies.',
    overview:
      'Do not spend your transit waiting in an airport lounge. Designed around your exact flight schedule at Bole International Airport, Abajifar provides seamless private transfers, VIP luggage care, and customized city discovery covering Ethiopia’s 3.2-million-year-old fossil history, panoramic mountain views, vibrant local markets, and world-class culinary experiences.',
    highlights: [
      'Private pickup and drop-off directly at Addis Ababa Bole International Airport (ADD)',
      'Stand face-to-face with "Lucy" (Dinkinesh) at the National Museum of Ethiopia',
      'Ascend to the eucalyptus peaks of Mount Entoto for breathtaking panoramas',
      'Explore Merkato, Africa’s largest open-air market, with an experienced local escort',
      'Experience a full traditional Ethiopian coffee ceremony and authentic injera lunch'
    ],
    itinerary: [
      {
        day: 1,
        title: 'VIP Airport Meet & Comprehensive City Immersion',
        location: 'Addis Ababa',
        description:
          'Meet your private guide at Bole Airport. Visit the National Museum to see Lucy and imperial artifacts. Drive up to Mount Entoto for panoramic city vistas. Enjoy an authentic traditional lunch at a historic restaurant. Afternoon exploration of the artisan section of Merkato and Holy Trinity Cathedral, concluding with a fresh coffee roasting ceremony before returning to the airport.',
        highlights: ['Lucy hominid fossil', 'Mount Entoto view', 'Authentic coffee ceremony', 'Merkato market'],
        accommodation: 'Day room optional at airport hotel',
        meals: 'Traditional Lunch, Specialty Coffee'
      }
    ],
    included: [
      'Private chauffeured airport pickup and drop-off',
      'Air-conditioned private sedan or van with dedicated driver',
      'Certified English-speaking professional guide',
      'All entrance admissions and permits to the National Museum and historic sites',
      'Authentic Ethiopian multi-dish lunch and fresh coffee ceremony',
      'Bottled water and luggage storage during the tour'
    ],
    notIncluded: ['International air tickets', 'Personal shopping purchases', 'Driver/guide tips'],
    bestSeason: 'Year-round',
    physicalRating: 'Easy — comfortable vehicle and city strolls',
    faqs: [
      {
        question: 'How long of a flight layover do I need for this tour?',
        answer:
          'We recommend a minimum layover of 5 hours for the Half-Day tour, and 8+ hours for the Full-Day comprehensive tour.'
      }
    ]
  },
  {
    id: 'bale-mountains-birding',
    slug: 'bale-mountains-birding',
    title: '6 Days Endemic Wildlife & Birding in Ethiopia',
    destinationSlug: 'northern-historic-route',
    destinationName: 'Bale Mountains & Rift Valley',
    region: 'Oromia & Rift Valley',
    durationDays: 6,
    durationNights: 5,
    groupType: 'Small Group',
    difficulty: 'Moderate',
    tourType: 'Coffee & Wildlife',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1790797220/nz3h8q1w754t2lc24jhl.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription:
      'Trek the afro-alpine plateau of Bale Mountains in search of the rare Ethiopian wolf, Mountain Nyala, and over 30 endemic bird species across varied ecosystems.',
    overview:
      'Ethiopia boasts more than 850 bird species and exceptional mammalian endemism. This 6-day expedition ascends onto the Sanetti Plateau, the largest expanse of afro-alpine moorland on the continent, searching for the endangered Ethiopian wolf and rare birds like the Blue-winged Goose, Rouget’s Rail, and Prince Ruspoli’s Turaco.',
    highlights: [
      'Track the rare Ethiopian wolf hunting giant mole-rats on the Sanetti Plateau at 4,000m',
      'Spot Mountain Nyala and Menelik’s bushbuck in the juniper woodlands of Dinsho',
      'Birdwatching across Lake Langano, Abijatta-Shalla, and the Harenna cloud forest',
      'Walk beneath giant giant heather and moss-draped trees in the wild Harenna forest'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Addis Ababa to Lake Langano & Abijatta-Shalla National Park',
        location: 'Rift Valley Lakes',
        description:
          'Drive south into the Rift Valley, stopping at Lake Ziway and Abijatta-Shalla for aquatic birding including flamingos, pelicans, and African fish eagles.',
        highlights: ['Greater and Lesser Flamingos', 'Abijatta soda lake', 'Lake Langano lodge'],
        accommodation: 'Hara Langano Eco Lodge',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Langano to Dinsho Headquarters, Bale Mountains',
        location: 'Bale Mountains National Park',
        description:
          'Drive up into the Bale Mountains. Meet the park wildlife scouts at Dinsho and take an afternoon hike through Hagenia and Juniper forest to observe Mountain Nyala and Menelik’s bushbuck.',
        highlights: ['Mountain Nyala', 'Bohor reedbuck', 'Abyssinian catbird'],
        accommodation: 'Bale Mountain Lodge / Goba Hotel',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Sanetti Plateau: Realm of the Ethiopian Wolf',
        location: 'Sanetti Plateau (4,100m)',
        description:
          'Spend the day exploring the Sanetti Plateau, driving across the highest all-weather road in Africa. Spot the critically endangered Ethiopian wolf, giant root-rats, and Wattled Cranes.',
        highlights: ['Ethiopian wolf sightings', 'Sanetti Plateau views', 'Tullu Dimtu summit (4,377m)'],
        accommodation: 'Goba Hotel / Bale Mountain Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'The Mystical Harenna Cloud Forest',
        location: 'Harenna Forest',
        description:
          'Descend the southern escarpment of the mountains into the mystical tropical Harenna forest. Look for Bale monkeys feeding in bamboo stands, forest birds, and wild honey harvesters.',
        highlights: ['Bale monkey (endemic)', 'Harenna forest canopy', 'Wild forest coffee trees'],
        accommodation: 'Goba Hotel / Eco-Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Bale Mountains to Awassa via Wondo Genet',
        location: 'Bale to Awassa',
        description:
          'Scenic drive down from the mountains to Awassa. Visit the lush botanical forests of Wondo Genet to look for endemic birds such as the Yellow-fronted Parrot and Half-collared Kingfisher.',
        highlights: ['Yellow-fronted Parrot', 'Thermal springs', 'Lake Awassa sunset'],
        accommodation: 'Haile Resort, Awassa',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Awassa Bird Sanctuary & Return to Addis Ababa',
        location: 'Awassa to Addis Ababa',
        description:
          'Morning walk along the Lake Awassa shoreline bird sanctuary. Drive back to Addis Ababa for an evening cultural dinner and departure.',
        highlights: ['Shoreline marabou storks', 'Colobus monkeys', 'Return to Addis Ababa'],
        accommodation: 'Departure',
        meals: 'Breakfast, Lunch'
      }
    ],
    included: [
      'Private 4WD Land Cruiser with professional wildlife guide and driver',
      'All national park entrance admissions and permits and specialized scout accompaniment',
      'All lodge and hotel accommodations',
      'All meals and bottled spring water',
      'High-grade binoculars and spotting scope for wildlife watching'
    ],
    notIncluded: ['International flights', 'Personal travel insurance', 'Gratuities'],
    bestSeason: 'November to April',
    physicalRating: 'Moderate — high altitude (up to 4,000m)',
    faqs: [
      {
        question: 'What are the chances of seeing the Ethiopian wolf?',
        answer:
          'The Sanetti Plateau hosts the largest population of Ethiopian wolves in the world. Our specialized scouting team has a over 95% success rate of wolf sightings during this tour.'
      }
    ]
  }
];
