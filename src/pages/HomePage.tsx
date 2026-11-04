import React, { useRef } from 'react';
import '../components/home/home-motion.css';

import { Hero } from '../components/home/Hero';
import { WhyEthiopia } from '../components/home/WhyEthiopia';
import { FeaturedDestinations } from '../components/home/FeaturedDestinations';
import { EthiopiaExperiences } from '../components/home/EthiopiaExperiences';
import { FeaturedTours } from '../components/home/FeaturedTours';
import { AboutAbajifarSnippet } from '../components/home/AboutAbajifarSnippet';
import { CustomerTestimonials } from '../components/home/CustomerTestimonials';
import { TravelInspiration } from '../components/home/TravelInspiration';
import { SocialShowcase } from '../components/home/SocialShowcase';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { FinalCTA } from '../components/home/FinalCTA';
import { ScrollProgress, SectionDivider, useScrollReveal } from '../components/home/HomeEffects';

/*
  Each entry's `fill` is the TOP colour of that section, and `variant` is how
  it blends into the section above it. Reorder freely — just keep `fill`
  matching the section it belongs to.
*/
const FLOW: {
  id: string;
  Component: React.FC;
  variant: 'wave' | 'curve' | 'fade';
  fill: string;
}[] = [
  { id: 'why',          Component: WhyEthiopia,          variant: 'wave', fill: '#ffffff' },
  { id: 'destinations', Component: FeaturedDestinations, variant: 'fade', fill: '#ffffff' },
  { id: 'experiences',  Component: EthiopiaExperiences,  variant: 'wave', fill: '#16304f' },
  { id: 'tours',        Component: FeaturedTours,        variant: 'wave', fill: '#ffffff' },
  { id: 'about',        Component: AboutAbajifarSnippet, variant: 'fade', fill: '#ffffff' },
  { id: 'testimonials', Component: CustomerTestimonials, variant: 'fade', fill: '#f2f8fc' },
  { id: 'field-notes',  Component: TravelInspiration,    variant: 'fade', fill: '#ffffff' },
  { id: 'social',       Component: SocialShowcase,       variant: 'wave', fill: '#f2f8fc' },
  { id: 'faq',          Component: FAQAccordion,         variant: 'fade', fill: '#ffffff' },
  { id: 'cta',          Component: FinalCTA,             variant: 'curve', fill: '#0b2540' }
];

export const HomePage: React.FC = () => {
  const flowRef = useRef<HTMLDivElement>(null);
  useScrollReveal(flowRef);

  return (
    <main>
      <ScrollProgress />
      <Hero />
      <div ref={flowRef}>
        {FLOW.map(({ id, Component, variant, fill }) => (
          <div key={id} className="relative">
            <SectionDivider variant={variant} fill={fill} />
            <Component />
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;