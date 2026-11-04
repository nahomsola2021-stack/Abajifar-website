export interface Destination {
  id: string;
  slug: string;
  description?: string;
  name: string;
  region: string;
  tagline: string;
  heroImage: string;
  overview: string;
  whyVisit: string[];
  keyHighlights: {
    title: string;
    description: string;
    tag: string;
  }[];
  bestTimeToVisit: string;
  terrainAltitude: string;
  featuredToursSlugs: string[];
  culturalInsights: string;
}

export interface TourDay {
  day: number;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  accommodation: string;
  meals: string;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  destinationSlug: string;
  destinationName: string;
  region: string;
  durationDays: number;
  durationNights: number;
  groupType: 'Private Tour' | 'Small Group' | 'Custom Private';
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Expedition';
  tourType: 'Cultural' | 'Historical' | 'Trekking' | 'Expedition' | 'Layover' | 'Coffee & Wildlife';
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  overview: string;
  highlights: string[];
  itinerary: TourDay[];
  included: string[];
  notIncluded: string[];
  bestSeason: string;
  physicalRating: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  avatar: string;
  roleOrTravelerType: string;
  tourSlug: string;
  tourTitle: string;
  rating: number;
  travelDate: string;
  duration: string;
  category: 'highlands' | 'danakil' | 'omo' | 'wildlife' | 'heritage';
  headline: string;
  reviewText: string;
  detailedExperience?: string;
  highlightPoints: string[];
  guideMentioned?: string;
  verified: boolean;
}
