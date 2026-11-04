import React, { useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { destinationsData } from '../data/destinationsData';
import { toursData } from '../data/toursData';
import { pageHeroImages } from '../data/pageHeroImages';
import { ArrowRight, Calendar, Compass, Mountain } from 'lucide-react';
import '../components/home/home-motion.css';
import { DetailHero } from '../components/common/DetailHero.tsx';
import { EnquiryCard } from '../components/common/EnquiryCard.tsx';
import { PageCTA } from '../components/common/PageCTA.tsx';
import { TourCard } from '../components/common/TourCard.tsx';
import { ScrollProgress, SectionDivider, useScrollReveal } from '../components/home/HomeEffects';

export const DestinationDetailPage: React.FC = () => {
  const { slug, navigate, openInquiryModal } = useRouter();
  const mainRef = useRef<HTMLElement>(null);
  useScrollReveal(mainRef);

  const destination = destinationsData.find((d) => d.slug === slug) || destinationsData[0];
  const matchingTours = toursData.filter((tour) => destination.featuredToursSlugs.includes(tour.slug));
  const topic = `Destination: ${destination.name}`;

  return (
    <main ref={mainRef} className="bg-white text-[#082842] antialiased selection:bg-[#D4AF37] selection:text-white">
      <ScrollProgress />

      <DetailHero
        image={pageHeroImages.destinationDetails[destination.slug] ?? destination.heroImage}
        alt={destination.name}
        backLabel="All destinations"
        backTo="/destinations"
        eyebrow={destination.region}
        title={destination.name}
        subtitle={destination.tagline}
        chips={[
          { icon: <Mountain className="h-4 w-4 text-[#67e8f9]" />, label: destination.terrainAltitude },
          { icon: <Calendar className="h-4 w-4 text-[#67e8f9]" />, label: `Best season: ${destination.bestTimeToVisit}` }
        ]}
        primaryLabel="Plan a trip here"
        onPrimary={() => openInquiryModal(topic)}
        secondaryLabel="Get to know the region"
        secondaryTargetId="destination-details"
      />

      {/* Overview + highlights */}
      <div className="relative">
        <SectionDivider variant="wave" fill="#ffffff" />
        <section
          id="destination-details"
          className="scroll-mt-24 px-4 pb-28 pt-14 sm:px-6 sm:pt-20 lg:px-8"
          style={{
            background:
              'radial-gradient(ellipse at 85% 15%, rgba(6, 182, 212, 0.08) 0%, transparent 55%), linear-gradient(135deg, #ffffff 0%, #f4f9fd 50%, #f9fcfe 100%)'
          }}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-8">
              <div className="rounded-3xl border border-[#0891b2]/20 bg-white/90 p-7 shadow-xl backdrop-blur-md sm:p-10">
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#0891b2] sm:text-sm">
                  <Compass className="h-4 w-4" />
                  <span>Regional essence</span>
                </div>
                <p className="text-lg font-light leading-[1.8] text-[#082842] sm:text-xl">{destination.overview}</p>
              </div>

              <div>
                <h2 className="mb-6 font-display text-3xl font-bold text-[#082842] sm:text-4xl">Signature highlights</h2>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {destination.keyHighlights.map((hl) => (
                    <div
                      key={hl.title}
                      className="space-y-2 rounded-2xl border border-[#0891b2]/20 bg-white p-6 shadow-[0_8px_30px_-10px_rgba(8,40,66,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#0891b2]/40 hover:shadow-[0_24px_50px_-15px_rgba(8,40,66,0.22)]"
                    >
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#0891b2]">{hl.tag}</span>
                      <h3 className="font-display text-xl font-bold text-[#082842]">{hl.title}</h3>
                      <p className="text-sm font-light leading-[1.7] text-[#1b4363]">{hl.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-28 lg:col-span-4">
              <EnquiryCard
                eyebrow="Tailored expedition"
                title={`Explore ${destination.name}`}
                text="Private 4WD Land Cruiser convoy with dedicated regional guides."
                topic={topic}
                ctaLabel="Request custom itinerary"
                whatsappText={`Hello Abbajfar, I'd like to plan a trip to ${destination.name}.`}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Related tours */}
      {matchingTours.length > 0 && (
        <div className="relative">
          <SectionDivider variant="fade" fill="#f2f8fc" />
          <section className="bg-[#f2f8fc] px-4 pb-28 pt-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <div className="mb-2.5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#0891b2] sm:text-sm">
                    <Compass className="h-4 w-4" />
                    <span>Routes exploring {destination.name}</span>
                  </div>
                  <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-[#082842] sm:text-5xl">
                    Featured expeditions
                  </h2>
                </div>
                <button
                  onClick={() => navigate('/tours')}
                  className="group inline-flex cursor-pointer items-center gap-2.5 self-start text-sm font-bold text-[#094d6e] transition-colors hover:text-[#0891b2] sm:self-end sm:text-base"
                >
                  <span>View all tours</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-14">
                {matchingTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} onOpen={(tourSlug) => navigate(`/tours/${tourSlug}`)} />
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      <PageCTA
        title="Ready to see"
        accent={`${destination.name}?`}
        body="Our resident planners will shape a private itinerary around your dates, pace and curiosities."
        primaryLabel="Plan a trip here"
        secondaryLabel="Explore all destinations"
        secondaryTo="/destinations"
        inquiryTopic={topic}
      />
    </main>
  );
};

export default DestinationDetailPage;