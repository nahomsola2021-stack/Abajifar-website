import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PlanYourTripModal } from './components/common/PlanYourTripModal';
import { WhatsAppFloatingButton } from './components/common/WhatsAppFloatingButton';
import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { ToursPage } from './pages/ToursPage';
import { TourDetailPage } from './pages/TourDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { toursData } from './data/toursData';
import { destinationsData } from './data/destinationsData';

const AppContent: React.FC = () => {
  const { route, slug, currentPath } = useRouter();

  // Dynamic SEO Page Title & Meta Description update
  useEffect(() => {
    let title = 'Abajifar Tour and Travel – Premium Ethiopian Journeys & Expeditions';
    let description =
      'Experience Ethiopia beyond the ordinary with Abajifar Tour and Travel. Bespoke expeditions to the Simien Mountains, Lalibela, Omo Valley, and Danakil Depression.';

    if (route === 'destinations') {
      title = 'Destinations of Ethiopia – Historic Route, Omo Valley & Danakil | Abajifar';
      description =
        'Explore the dramatic landscapes and cultures of Ethiopia: Northern Historic Route, East & West Omo Valley, Danakil Depression, and Addis Ababa.';
    } else if (route === 'destination-detail' && slug) {
      const dest = destinationsData.find((d) => d.slug === slug);
      if (dest) {
        title = `${dest.name} Tours & Travel Guide – Abajifar Ethiopia`;
        description = dest.overview.slice(0, 155);
      }
    } else if (route === 'tours') {
      title = 'Ethiopia Tour Packages & Custom Expeditions | Abajifar Tour and Travel';
      description =
        'Browse our curated private and small-group Ethiopian tours, including Simien trekking, Lalibela rock churches, Danakil active volcano, and Omo Valley.';
    } else if (route === 'tour-detail' && slug) {
      const tour = toursData.find((t) => t.slug === slug);
      if (tour) {
        title = `${tour.title} – ${tour.durationDays} Days | Abajifar Tour & Travel`;
        description = tour.shortDescription.slice(0, 155);
      }
    } else if (route === 'about') {
      title = 'About Abajifar Tour and Travel – Local Ethiopian Travel Specialists';
      description =
        'Discover the story, mission, and local heritage behind Abajifar Tour and Travel, inspired by King Abba Jifar of Jimma.';
    } else if (route === 'contact') {
      title = 'Contact Our Ethiopian Travel Specialists | Abajifar Tour and Travel';
      description =
        'Get in touch to plan your custom Ethiopian expedition. Call +251 933 333 338, +251 944 444 447, or +251 944 444 448.';
    }

    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [route, slug, currentPath]);

  const renderCurrentPage = () => {
    switch (route) {
      case 'home':
        return <HomePage />;
      case 'destinations':
        return <DestinationsPage />;
      case 'destination-detail':
        return <DestinationDetailPage />;
      case 'tours':
        return <ToursPage />;
      case 'tour-detail':
        return <TourDetailPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#dce8f7] text-slate-800 selection:bg-[#0891b2] selection:text-white">
      <Navbar />
      <div className="flex-1">{renderCurrentPage()}</div>
      <Footer />
      <PlanYourTripModal />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
