import React, { useRef, useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { toursData } from '../data/toursData';
import { pageHeroImages } from '../data/pageHeroImages';
import {
  Calendar, CheckCircle2, ChevronDown, Clock, Compass, MapPin, ShieldCheck, XCircle
} from 'lucide-react';
import '../components/home/home-motion.css';
import { DetailHero } from '../components/common/DetailHero.tsx';
import { EnquiryCard } from '../components/common/EnquiryCard.tsx';
import { PageCTA } from '../components/common/PageCTA.tsx';
import { ScrollProgress, SectionDivider, useScrollReveal } from '../components/home/HomeEffects';

export const TourDetailPage: React.FC = () => {
  const { slug, openInquiryModal } = useRouter();
  const mainRef = useRef<HTMLElement>(null);
  useScrollReveal(mainRef);

  const tour = toursData.find((t) => t.slug === slug) || toursData[0];
  const topic = `Tour: ${tour.title}`;

  const [openDays, setOpenDays] = useState<number[]>([1]);

  const allOpen = openDays.length === tour.itinerary.length;
  const toggleDay = (day: number) =>
    setOpenDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]));

  const facts = [
    { icon: Clock, label: 'Duration', value: `${tour.durationDays} Days / ${tour.durationNights} Nights` },
    { icon: Compass, label: 'Tour style', value: tour.tourType },
    { icon: ShieldCheck, label: 'Difficulty', value: tour.difficulty },
    { icon: Calendar, label: 'Best season', value: tour.bestSeason }
  ];

  return (
    <main ref={mainRef} className="bg-white text-[#082842] antialiased selection:bg-[#D4AF37] selection:text-white">
      <ScrollProgress />

      <DetailHero
        image={pageHeroImages.tourDetails[tour.slug] ?? tour.heroImage}
        alt={tour.title}
        backLabel="All tours"
        backTo="/tours"
        eyebrow={tour.region}
        title={tour.title}
        subtitle={tour.shortDescription}
        chips={[
          { icon: <MapPin className="h-4 w-4 text-[#67e8f9]" />, label: tour.region },
          { label: `${tour.durationDays} days · ${tour.tourType}` },
          { label: tour.groupType }
        ]}
        primaryLabel="Let's plan this trip"
        onPrimary={() => openInquiryModal(topic)}
        secondaryLabel="Explore the itinerary"
        secondaryTargetId="tour-details"
      />

      <div className="relative">
        <SectionDivider variant="wave" fill="#ffffff" />
        <section
          id="tour-details"
          className="scroll-mt-24 px-4 pb-28 pt-14 sm:px-6 sm:pt-20 lg:px-8"
          style={{
            background:
              'radial-gradient(ellipse at 85% 10%, rgba(6, 182, 212, 0.08) 0%, transparent 55%), linear-gradient(135deg, #ffffff 0%, #f4f9fd 50%, #f9fcfe 100%)'
          }}
        >
          <div className="mx-auto max-w-7xl">
            {/* Quick facts */}
            <div className="mb-14 grid grid-cols-2 gap-6 rounded-3xl border border-[#0891b2]/20 bg-white/90 p-7 shadow-xl backdrop-blur-md md:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="min-w-0">
                  <div className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0891b2]">
                    <fact.icon className="h-4 w-4" />
                    <span>{fact.label}</span>
                  </div>
                  <div className="text-base font-bold text-[#082842] sm:text-lg">{fact.value}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              {/* Left column */}
              <div className="space-y-14 lg:col-span-8">
                {/* Highlights */}
                <div className="rounded-3xl border border-[#0891b2]/20 bg-white/90 p-7 shadow-xl backdrop-blur-md sm:p-9">
                  <h2 className="mb-5 font-display text-2xl font-bold text-[#082842] sm:text-3xl">Highlights</h2>
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {tour.highlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-3 text-sm font-medium leading-[1.7] text-[#082842] sm:text-base">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#0891b2]" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Itinerary */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-display text-3xl font-bold text-[#082842] sm:text-4xl">Day-by-day itinerary</h2>
                    <button
                      onClick={() => setOpenDays(allOpen ? [] : tour.itinerary.map((d) => d.day))}
                      className="shrink-0 cursor-pointer text-sm font-bold text-[#094d6e] transition-colors hover:text-[#0891b2]"
                    >
                      {allOpen ? 'Collapse all' : 'Expand all'}
                    </button>
                  </div>

                  <div className="space-y-4">
                    {tour.itinerary.map((dayItem) => {
                      const isOpen = openDays.includes(dayItem.day);
                      const panelId = `day-panel-${dayItem.day}`;
                      return (
                        <div
                          key={dayItem.day}
                          className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                            isOpen
                              ? 'border-[#0891b2]/50 shadow-[0_16px_40px_-15px_rgba(8,40,66,0.25)]'
                              : 'border-[#0891b2]/20 shadow-sm hover:border-[#0891b2]/40'
                          }`}
                        >
                          <button
                            onClick={() => toggleDay(dayItem.day)}
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#094d6e] sm:p-6"
                          >
                            <div className="flex min-w-0 items-center gap-4">
                              <span className="shrink-0 rounded-lg bg-[#094d6e] px-3 py-2 font-mono text-xs font-black text-white shadow-sm sm:text-sm">
                                DAY {String(dayItem.day).padStart(2, '0')}
                              </span>
                              <div className="min-w-0">
                                <span className="block text-xs font-bold uppercase tracking-wider text-[#0891b2]">{dayItem.location}</span>
                                <h3 className="font-display text-base font-bold text-[#082842] sm:text-lg">{dayItem.title}</h3>
                              </div>
                            </div>
                            <ChevronDown className={`h-5 w-5 shrink-0 text-[#094d6e] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                          </button>

                          <div
                            id={panelId}
                            role="region"
                            aria-hidden={!isOpen}
                            className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                          >
                            <div className="min-h-0 overflow-hidden">
                              <div className="space-y-4 border-t border-[#0891b2]/15 px-5 pb-6 pt-4 sm:px-6">
                                <p className="text-sm font-light leading-[1.8] text-[#1b4363] sm:text-base">{dayItem.description}</p>
                                <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-[#0891b2]/10 pt-4 text-sm text-[#082842]">
                                  <span><strong className="text-[#094d6e]">Stay:</strong> {dayItem.accommodation}</span>
                                  <span><strong className="text-[#094d6e]">Meals:</strong> {dayItem.meals}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Included / not included */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-4 rounded-2xl border border-[#0891b2]/20 bg-white p-7 shadow-sm">
                    <h3 className="flex items-center gap-2 font-display text-xl font-bold text-[#082842]">
                      <CheckCircle2 className="h-5 w-5 text-[#0891b2]" />
                      <span>Included</span>
                    </h3>
                    <ul className="space-y-2.5 text-sm leading-[1.7] text-[#1b4363]">
                      {tour.included.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#0891b2]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 rounded-2xl border border-[#0891b2]/20 bg-white p-7 shadow-sm">
                    <h3 className="flex items-center gap-2 font-display text-xl font-bold text-[#082842]">
                      <XCircle className="h-5 w-5 text-rose-500" />
                      <span>Not included</span>
                    </h3>
                    <ul className="space-y-2.5 text-sm leading-[1.7] text-[#1b4363]">
                      {tour.notIncluded.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <XCircle className="mt-1 h-4 w-4 shrink-0 text-rose-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <div className="lg:sticky lg:top-28 lg:col-span-4">
                <EnquiryCard
                  eyebrow="Private departure"
                  title="Custom private expedition"
                  text="Tailored departure dates · Dedicated 4WD Land Cruiser convoy · Resident master guide"
                  topic={topic}
                  ctaLabel="Inquire about this tour"
                  whatsappText={`Hello Abbajfar, I'm interested in "${tour.title}".`}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <PageCTA
        title="Make this"
        accent="your journey."
        body="Tell us your dates and pace, and our resident planners will shape this route around you."
        primaryLabel="Plan this trip"
        secondaryLabel="Browse other tours"
        secondaryTo="/tours"
        inquiryTopic={topic}
      />

    </main>
  );
};

export default TourDetailPage;