import React, { useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { destinationsData } from '../data/destinationsData';
import { pageHeroImages } from '../data/pageHeroImages';
import { ArrowRight, Calendar, Compass, MapPin, Mountain } from 'lucide-react';
import '../components/home/home-motion.css';
import { PageHero, heroGlassBtn, heroPrimaryBtn } from '../components/common/PageHero.tsx';
import { PageCTA } from '../components/common/PageCTA.tsx';
import { ScrollProgress, SectionDivider, useScrollReveal } from '../components/home/HomeEffects';

export const DestinationsPage: React.FC = () => {
  const { navigate, openInquiryModal } = useRouter();
  const mainRef = useRef<HTMLElement>(null);
  useScrollReveal(mainRef);

  return (
    <main ref={mainRef} className="bg-white text-[#082842] antialiased selection:bg-[#D4AF37] selection:text-white">
      <ScrollProgress />

      <PageHero
        image={pageHeroImages.destinations}
        eyebrow="Explore Ethiopia"
        lines={['Find your']}
        accent="way."
        subtitle="Four distinct regions, each with its own landscapes, ancient history, and vibrant cultures. Choose a frontier to begin your journey."
      >
        <button
          onClick={() => document.getElementById('destination-grid')?.scrollIntoView({ behavior: 'smooth' })}
          className={heroPrimaryBtn}
        >
          Browse Destinations
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <button onClick={() => openInquiryModal()} className={heroGlassBtn}>
          Plan a Route
        </button>
      </PageHero>

      <div className="relative">
        <SectionDivider variant="wave" fill="#ffffff" />
        <section
          id="destination-grid"
          className="scroll-mt-24 overflow-hidden px-4 pb-28 pt-16 sm:px-6 sm:pt-24 lg:px-8"
          style={{
            background:
              'radial-gradient(ellipse at 15% 20%, rgba(6, 182, 212, 0.09) 0%, transparent 55%), radial-gradient(ellipse at 85% 80%, rgba(14, 165, 233, 0.07) 0%, transparent 60%), linear-gradient(135deg, #ffffff 0%, #f2f8fc 50%, #f7fbfe 100%)'
          }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-20 flex max-w-3xl flex-col items-center text-center md:mb-28">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#0891b2] sm:text-sm">
                <Compass className="h-4 w-4" />
                <span>Four ways into Ethiopia</span>
              </div>
              <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-[#082842] md:text-5xl lg:text-6xl">
                Choose your destination.
              </h2>
              <div className="mb-6 mt-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#D4AF37]" />
              <p className="font-serif text-lg font-light italic leading-[1.7] text-[#1a4b70] md:text-xl">
                From highland history to remote river valleys, find the landscape and pace that feel right for you.
              </p>
            </div>

            <div className="flex flex-col gap-24 md:gap-32 lg:gap-40">
              {destinationsData.map((destination, index) => {
                const isEven = index % 2 === 0;
                const terrain = destination.terrainAltitude?.split(';')[0];

                return (
                  <article
                    key={destination.id}
                    data-reveal-auto
                    className="group relative flex flex-col items-center gap-8 md:gap-12 lg:grid lg:grid-cols-12 lg:gap-16"
                  >
                    {/* Ghost index number */}
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute top-1/2 z-0 hidden -translate-y-1/2 select-none font-display text-[18rem] font-extrabold leading-none text-[#0891b2]/[0.07] lg:block ${isEven ? '-left-12' : '-right-12'}`}
                    >
                      0{index + 1}
                    </div>

                    {/* Image */}
                    <div
                      onClick={() => navigate(`/destinations/${destination.slug}`)}
                      className={`relative z-10 w-full cursor-pointer overflow-hidden rounded-[1.75rem] border border-cyan-800/15 bg-[#07364d] shadow-[0_24px_60px_-12px_rgba(8,40,66,0.35)] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 ${
                        isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:col-start-6 lg:row-start-1'
                      }`}
                    >
                      <div className="relative aspect-[4/3] w-full lg:aspect-[16/11]">
                        <img
                          src={destination.heroImage}
                          alt={destination.name}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="h-full w-full object-cover brightness-95 transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#052638]/70 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-[#0891b2]/10 mix-blend-color" />
                        <span className="absolute left-5 top-5 rounded-xl border border-cyan-400/30 bg-[#07364d]/85 px-3 py-1 font-mono text-xs font-bold text-[#67e8f9] backdrop-blur-md">
                          0{index + 1} · {destination.region.split('&')[0].trim()}
                        </span>
                      </div>
                    </div>

                    {/* Text */}
                    <div
                      className={`relative z-20 flex flex-col justify-center px-1 text-left md:px-4 lg:px-0 ${
                        isEven
                          ? 'lg:col-span-4 lg:col-start-9 lg:items-start lg:text-left'
                          : 'lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:items-end lg:text-right'
                      }`}
                    >
                      <div className={`mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0891b2] ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                        <MapPin className="h-4 w-4" />
                        <span>{destination.region}</span>
                      </div>

                      <h3 className="mb-4 font-display text-4xl font-extrabold leading-tight text-[#082842] lg:text-5xl">
                        {destination.name}
                      </h3>

                      <p className="mb-6 font-serif text-xl font-light italic leading-[1.5] text-[#1a4b70]">
                        {destination.tagline}
                      </p>

                      <div className={`mb-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#D4AF37] ${isEven ? '' : 'lg:ml-auto'}`} />

                      <p
                        className={`mb-8 text-base font-light leading-[1.7] text-[#1b4363] ${
                          isEven ? 'lg:border-l-2 lg:border-[#0891b2]/25 lg:pl-6' : 'lg:border-r-2 lg:border-[#0891b2]/25 lg:pr-6'
                        }`}
                      >
                        {destination.description ||
                          'Discover breathtaking landscapes, ancient history, and vibrant cultures. Immerse yourself in a journey designed for tranquility and wonder.'}
                      </p>

                      {(terrain || destination.bestTimeToVisit) && (
                        <dl className={`mb-8 space-y-2 text-sm text-[#1a4b70] ${isEven ? '' : 'lg:flex lg:flex-col lg:items-end'}`}>
                          {terrain && (
                            <div className={`flex items-center gap-2 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                              <Mountain className="h-4 w-4 shrink-0 text-[#0891b2]" />
                              <dt className="sr-only">Terrain</dt>
                              <dd>{terrain}</dd>
                            </div>
                          )}
                          {destination.bestTimeToVisit && (
                            <div className={`flex items-center gap-2 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                              <Calendar className="h-4 w-4 shrink-0 text-[#0891b2]" />
                              <dt className="sr-only">Best time to visit</dt>
                              <dd>{destination.bestTimeToVisit}</dd>
                            </div>
                          )}
                        </dl>
                      )}

                      <button
                        onClick={() => navigate(`/destinations/${destination.slug}`)}
                        className={`group/btn inline-flex cursor-pointer items-center gap-3 rounded-xl bg-[#094d6e] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#094d6e]/25 transition-all hover:bg-[#08608a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#094d6e] ${isEven ? '' : 'lg:flex-row-reverse'}`}
                      >
                        <span>Explore {destination.name}</span>
                        <ArrowRight
                          className={`h-4 w-4 transition-transform duration-300 ${isEven ? 'group-hover/btn:translate-x-1.5' : 'group-hover/btn:translate-x-1.5 lg:rotate-180 lg:group-hover/btn:-translate-x-1.5'}`}
                        />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <PageCTA
        title="Not sure where"
        accent="to begin?"
        body="Tell us how you like to travel and our resident planners will point you to the right frontier."
        primaryLabel="Plan a Route"
        secondaryLabel="View Tour Packages"
        secondaryTo="/tours"
      />
    </main>
  );
};

export default DestinationsPage;