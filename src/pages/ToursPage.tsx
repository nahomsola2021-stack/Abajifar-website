import React, { useMemo, useRef, useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { toursData } from '../data/toursData';
import { pageHeroImages } from '../data/pageHeroImages';
import { ArrowRight, Clock, Compass, MapPin } from 'lucide-react';
import '../components/home/home-motion.css';
import { PageHero, heroGlassBtn, heroPrimaryBtn } from '../components/common/PageHero';
import { PageCTA } from '../components/common/PageCTA';
import { ScrollProgress, SectionDivider, useScrollReveal } from '../components/home/HomeEffects';

const categories = ['All Tours', 'Historical', 'Cultural', 'Adventure', 'Coffee & Wildlife', 'Layover'] as const;

export const ToursPage: React.FC = () => {
  const { navigate, openInquiryModal } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>('All Tours');
  const [animateCards, setAnimateCards] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  useScrollReveal(mainRef);

  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const filteredTours = useMemo(() => {
    if (selectedCategory === 'All Tours') return toursData;
    if (selectedCategory === 'Historical') return toursData.filter((tour) => tour.tourType === 'Historical');
    if (selectedCategory === 'Cultural') return toursData.filter((tour) => tour.tourType === 'Cultural' || tour.tourType === 'Layover');
    if (selectedCategory === 'Adventure') {
      return toursData.filter((tour) =>
        tour.tourType === 'Expedition' ||
        tour.tourType === 'Trekking' ||
        tour.difficulty === 'Challenging' ||
        tour.difficulty === 'Expedition'
      );
    }
    if (selectedCategory === 'Coffee & Wildlife') return toursData.filter((tour) => tour.tourType === 'Coffee & Wildlife');
    return toursData.filter((tour) => tour.tourType === 'Layover');
  }, [selectedCategory]);

  const selectCategory = (category: (typeof categories)[number]) => {
    setAnimateCards(true); // after the first filter, freshly mounted cards animate themselves
    setSelectedCategory(category);
  };

  return (
    <main ref={mainRef} className="bg-white text-[#082842] antialiased selection:bg-[#D4AF37] selection:text-white">
      <ScrollProgress />

      <PageHero
        image={pageHeroImages.tours}
        eyebrow="Private journeys across Ethiopia"
        lines={['Travel deeper.']}
        accent="Feel more."
        subtitle="Thoughtful itineraries from highland history to living cultures and wild landscapes, guided by people who know Ethiopia best."
      >
        <button
          onClick={() => document.getElementById('tour-list')?.scrollIntoView({ behavior: 'smooth' })}
          className={heroPrimaryBtn}
        >
          Browse Journeys
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <button onClick={() => openInquiryModal()} className={heroGlassBtn}>
          Plan a Private Trip
        </button>
      </PageHero>

      <div className="relative">
        <SectionDivider variant="wave" fill="#ffffff" />
        <section
          id="tour-list"
          className="scroll-mt-20 px-4 pb-28 pt-16 sm:px-6 sm:pt-20 lg:px-8"
          style={{
            background:
              'radial-gradient(ellipse at 80% 10%, rgba(34, 211, 238, 0.10) 0%, transparent 55%), linear-gradient(135deg, #ffffff 0%, #f0f8fd 50%, #f6fafd 100%)'
          }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-xl">
                <div className="mb-2.5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#0891b2] sm:text-sm">
                  <Compass className="h-4 w-4" />
                  <span>Find your escape</span>
                </div>
                <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-[#082842] md:text-5xl">
                  Tours with a sense of place.
                </h2>
              </div>

              <div className="flex w-full flex-col gap-4 md:w-auto md:items-end">
                <div className="flex flex-wrap gap-2 md:justify-end" role="group" aria-label="Filter tours by style">
                  {categories.map((category) => {
                    const active = selectedCategory === category;
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => selectCategory(category)}
                        aria-pressed={active}
                        className={`cursor-pointer rounded-xl border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#094d6e] ${
                          active
                            ? 'border-[#094d6e] bg-[#094d6e] text-white shadow-lg shadow-[#094d6e]/25'
                            : 'border-[#094d6e]/15 bg-white/70 text-[#1a4b70] hover:border-[#0891b2] hover:text-[#0891b2]'
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#52718a]" aria-live="polite">
                  Showing {filteredTours.length} {filteredTours.length === 1 ? 'journey' : 'journeys'}
                </p>
              </div>
            </div>

            {filteredTours.length > 0 ? (
              <div key={selectedCategory} className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
                {filteredTours.map((tour, index) => (
                  <article
                    key={tour.id}
                    className="h-full"
                    style={
                      animateCards && !reduceMotion
                        ? { animation: `ab-rise 700ms cubic-bezier(0.22, 1, 0.36, 1) ${Math.min(index, 5) * 70}ms backwards` }
                        : undefined
                    }
                  >
                    <div className="group relative flex h-full w-full cursor-pointer flex-col rounded-2xl border border-[#094d6e]/10 bg-white p-5 shadow-[0_12px_36px_rgba(8,40,66,0.08)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-3 hover:scale-[1.01] hover:border-[#0891b2]/30 hover:shadow-[0_24px_50px_rgba(8,40,66,0.18)]">
                      {/* Photo */}
                      <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#07364d] shadow-[0_8px_20px_rgba(8,40,66,0.15)]">
                        <img
                          src={tour.heroImage}
                          alt={tour.title}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.08]"
                        />
                        <div className="absolute inset-0 bg-[#082842]/0 transition-colors duration-500 group-hover:bg-[#082842]/10" />

                        <span className="absolute left-4 top-4 rounded-lg border border-[#094d6e]/5 bg-white/95 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#094d6e] shadow-md">
                          {tour.tourType}
                        </span>
                        <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-lg border border-white/5 bg-[#082842]/90 px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-md">
                          <Clock className="h-3 w-3 text-[#D4AF37]" />
                          {tour.durationDays} days
                        </span>
                      </div>

                      {/* Details */}
                      <div className="flex flex-grow flex-col px-1.5">
                        <p className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#0891b2]">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{tour.region}</span>
                        </p>

                        <h3 className="line-clamp-2 font-display text-3xl font-bold leading-snug text-[#082842] transition-colors duration-300 group-hover:text-[#0891b2]">
                          <button
                            type="button"
                            onClick={() => navigate(`/tours/${tour.slug}`)}
                            className="cursor-pointer text-left after:absolute after:inset-0 after:z-10 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-[#094d6e]"
                          >
                            {tour.title}
                          </button>
                        </h3>

                        <p className="mb-6 mt-4 line-clamp-3 text-sm font-light leading-relaxed text-[#1b4363] md:text-base">
                          {tour.shortDescription}
                        </p>

                        <div className="mt-auto flex items-center justify-between border-t border-[#094d6e]/10 pt-5">
                          <div className="flex items-center gap-8">
                            <div className="flex flex-col">
                              <span className="mb-0.5 text-[9px] font-bold uppercase tracking-widest text-[#52718a]">Pace</span>
                              <span className="text-xs font-bold text-[#082842]">{tour.difficulty}</span>
                            </div>
                            {tour.groupType && (
                              <div className="flex flex-col">
                                <span className="mb-0.5 text-[9px] font-bold uppercase tracking-widest text-[#52718a]">Style</span>
                                <span className="text-xs font-bold text-[#082842]">{tour.groupType}</span>
                              </div>
                            )}
                          </div>

                          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#094d6e] transition-colors duration-300 group-hover:text-[#0891b2]">
                            View Details
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-[#094d6e]/15 bg-white/70 py-24 text-center shadow-sm backdrop-blur-sm">
                <p className="font-light tracking-wide text-[#1a4b70]">No journeys are currently listed in this category.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <PageCTA
        title="Don't see"
        accent="your journey?"
        body="Every itinerary can be reshaped around your dates, your pace and your curiosities."
        primaryLabel="Plan a Private Trip"
        secondaryLabel="Explore Destinations"
        secondaryTo="/destinations"
      />
    </main>
  );
};

export default ToursPage;