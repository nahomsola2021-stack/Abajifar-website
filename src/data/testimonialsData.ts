import { Testimonial } from '../types';

export const testimonialStats = {
  averageRating: 4.98,
  totalReviews: 342,
  satisfactionRate: '99.4%',
  repeatAndReferral: '94%',
  operatingYears: 12,
  privateVehicles: '100% 4WD Custom Land Cruisers',
};

export const testimonialsData: Testimonial[] = [
  {
    id: 'marcus-elena-vance',
    author: 'Dr. Marcus & Elena Vance',
    location: 'Zurich, Switzerland',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    roleOrTravelerType: 'Cultural Anthropologist & Architect',
    tourSlug: 'simien-lalibela-danakil',
    tourTitle: '6 Days Simien Mountains, Lalibela & Danakil Depression',
    rating: 5,
    travelDate: 'November 2024',
    duration: '6 Days Private Expedition',
    category: 'highlands',
    headline: 'Unrivaled highland logistics and profound respect for living history.',
    reviewText:
      'Traveling across the high Simien cliffs to Lalibela and into the Danakil cauldron requires immense logistical precision. Abajifar’s team choreographed every single hour flawlessly. Our guide Yohannes didn’t simply recite history—he unraveled the liturgical and architectural significance of Bet Giyorgis at private dawn light before any crowds arrived. Standing atop Erta Ale watching the magma lake churn in absolute silence was life-defining.',
    detailedExperience:
      'The custom 4WD Land Cruiser was spotless and equipped with satellite communication, emergency medical kits, and an expedition cooler. Our driver Dawit tackled the mountain switchbacks with exceptional care and calm precision. We felt entirely secure and elevated throughout.',
    highlightPoints: [
      'Private dawn entry to Bet Giyorgis before crowds',
      'Docile Gelada troops grazing meters from us in Simien',
      'Spotless, high-clearance 4WD Land Cruiser with satellite phone'
    ],
    guideMentioned: 'Yohannes (Lead Guide) & Dawit (Expedition Driver)',
    verified: true
  },
  {
    id: 'claire-montgomery',
    author: 'Claire Montgomery',
    location: 'London, United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    roleOrTravelerType: 'Documentary Photographer',
    tourSlug: 'omo-valley-tribal-discovery',
    tourTitle: '7 Days Omo Valley Tribes & Cultural Discovery',
    rating: 5,
    travelDate: 'January 2025',
    duration: '7 Days Private Cultural Immersion',
    category: 'omo',
    headline: 'Ethical, dignified access that completely surpassed our expectations.',
    reviewText:
      'As a documentary photographer, my greatest fear was participating in transactional, staged cultural tourism. Abajifar proved to be in a league of their own. Because our lead guide grew up in South Omo, we were welcomed as respectful guests into Hamar and Karo family compounds. We had quiet, tea-sharing conversations at dusk rather than rushed photo-ops.',
    detailedExperience:
      'The portable field campsite Abajifar arranged near the Omo River was immaculate—comfortable elevated cots, solar-heated wash water, and delicious, wholesome meals prepared fresh by our camp chef. They honor the communities they visit through direct village contributions.',
    highlightPoints: [
      'Genuine, unhurried cultural dialogues with village elders',
      'Bespoke golden-hour lighting access for portraiture',
      'Wild riverside mobile glamping with hot showers'
    ],
    guideMentioned: 'Tariku (Cultural Specialist)',
    verified: true
  },
  {
    id: 'sarah-david-chen',
    author: 'David & Sarah Chen',
    location: 'San Francisco, United States',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    roleOrTravelerType: 'Geoscientist & Adventure Enthusiasts',
    tourSlug: 'danakil-depression-erte-ale',
    tourTitle: '4 Days Danakil Depression & Active Erta Ale Volcano',
    rating: 5,
    travelDate: 'December 2024',
    duration: '4 Days Extreme Geological Expedition',
    category: 'danakil',
    headline: 'The most alien terrain on Earth, executed with absolute safety and comfort.',
    reviewText:
      'The Afar Triangle is officially one of the hottest, most remote depressions on Earth, yet Abajifar transformed it into a thrilling, comfortable masterclass in vulcanology. We had abundant chilled hydration, fresh fruit, shade canopies, and seasoned Afar scouts who have walked the salt pans for decades. Walking past the hyper-acidic neon ponds of Dallol felt like being on Europa.',
    detailedExperience:
      'Sleeping under the star-drenched desert sky on traditional wooden rope beds atop the volcanic plateau, listening to the muffled roar of Erta Ale, was the highlight of our worldwide travels. Everything promised on the itinerary was delivered with surplus care.',
    highlightPoints: [
      'Nighttime summit hike to Erta Ale boiling caldera',
      'Surreal kaleidoscope mineral chimneys at Dallol',
      'Sunrise camel salt caravans across endless white flats'
    ],
    guideMentioned: 'Ahmed (Afar Desert Leader) & Cook Solomon',
    verified: true
  },
  {
    id: 'julian-lindqvist',
    author: 'Henrik & Julian Lindqvist',
    location: 'Stockholm, Sweden',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    roleOrTravelerType: 'Wildlife Biologists & Hikers',
    tourSlug: 'bale-mountains-wildlife-trekking',
    tourTitle: '5 Days Bale Mountains Wildlife & Sanetti Plateau',
    rating: 5,
    travelDate: 'February 2025',
    duration: '5 Days High-Altitude Wildlife Safari',
    category: 'wildlife',
    headline: 'We encountered eight Ethiopian wolves across two days on Sanetti Plateau!',
    reviewText:
      'We came specifically to observe the rarest canid on Earth—the endangered Ethiopian wolf. Abajifar’s specialist naturalist guide Belay understood their exact territorial runs across the giant lobelia moorlands. We spent uninterrupted hours observing hunting behaviors in pristine light. The drive through the moss-draped Harenna cloud forest was magical.',
    detailedExperience:
      'Abajifar took high-altitude acclimatization seriously with pulse oximeters and gradual ascent profiles. Evenings were spent warm by the stone fireplaces sipping wild Bale honey wine and reviewing the species checklists.',
    highlightPoints: [
      'Multiple close-range sightings of endemic Ethiopian wolves',
      'Giant lobelia afro-alpine forests at 4,000m altitude',
      'Exemplary naturalist tracking expertise'
    ],
    guideMentioned: 'Belay (Senior Naturalist Guide)',
    verified: true
  },
  {
    id: 'beatrice-althaus',
    author: 'Prof. Beatrice Althaus',
    location: 'Vienna, Austria',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    roleOrTravelerType: 'Medieval Art Historian & Solo Explorer',
    tourSlug: 'northern-historic-circuit',
    tourTitle: '10 Days Grand Northern Historical Circuit & Rock Churches',
    rating: 5,
    travelDate: 'October 2024',
    duration: '10 Days Comprehensive Solo Circuit',
    category: 'highlands',
    headline: 'As a solo female traveler, I felt completely protected, respected, and inspired.',
    reviewText:
      'Traveling solo can often involve compromises, but Abajifar created a sanctuary of comfort and deep intellectual stimulation. From the 17th-century royal castles of Fasil Ghebbi in Gondar to the breath-stopping cliff ascent of Abuna Yemata Guh in Tigray, my guide was patient, knowledgeable, and always attentive. The access to private monastery manuscript collections was unforgettable.',
    detailedExperience:
      'Their communications before the trip via WhatsApp and video call answered every practical inquiry regarding clothing, mountain trails, and currency. They are true cultural ambassadors of Ethiopia.',
    highlightPoints: [
      'Safe, guided ascent to cliffside Abuna Yemata Guh church',
      'Illuminated ancient Ge’ez gospel manuscripts examination',
      'Impeccable solo traveler security and peace of mind'
    ],
    guideMentioned: 'Fasil (Senior Heritage Guide)',
    verified: true
  },
  {
    id: 'michael-amara-okafor',
    author: 'Michael & Amara Okafor',
    location: 'Toronto, Canada',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80',
    roleOrTravelerType: 'Culinary Entrepreneurs & Coffee Roasters',
    tourSlug: 'jimma-kaffa-coffee-origins',
    tourTitle: '5 Days Coffee Origin Pilgrimage: Jimma & Kaffa Biosphere',
    rating: 5,
    travelDate: 'December 2024',
    duration: '5 Days Heritage & Agro-Tourism',
    category: 'heritage',
    headline: 'Tracing heirloom Arabica in Jimma and Kaffa was an unforgettable sensory pilgrimage.',
    reviewText:
      'As specialty coffee roasters, visiting the ancestral birthplace of Arabica in Kaffa was our ultimate dream. Abajifar has authentic royal roots in Jimma—bearing the name of King Abba Jifar II—and those deep community connections granted us access to wild forest coffee collectors, traditional clay pot roasting rituals, and private visits to the historic wooden palace.',
    detailedExperience:
      'We tasted wild forest varieties right beneath towering canopy trees and learned the sacred oral histories of Ethiopian coffee diplomacy. The hospitality was warm, generous, and unforgettable.',
    highlightPoints: [
      'Private reception at King Abba Jifar’s restored palace in Jimma',
      'Wild forest coffee cupping inside Kaffa Biosphere reserve',
      'Traditional three-round Jebena Buna ceremonies with village elders'
    ],
    guideMentioned: 'Mustefa (Jimma & Kaffa Native Guide)',
    verified: true
  }
];
