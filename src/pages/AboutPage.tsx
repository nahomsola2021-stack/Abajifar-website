import React, { useRef } from 'react';
import { pageHeroImages } from '../data/pageHeroImages';
import { ArrowRight, Award, Compass, MapPin, Quote, Shield, Users, Truck, Ticket, Plane } from 'lucide-react';
import '../components/home/home-motion.css';
import { PageHero, heroGlassBtn, heroPrimaryBtn } from '../components/common/PageHero.tsx';
import { PageCTA } from '../components/common/PageCTA.tsx';
import { ScrollProgress, SectionDivider, useScrollReveal } from '../components/home/HomeEffects';
import { useRouter } from '../context/RouterContext';

const timelineMilestones = [
  {
    year: '1878',
    title: 'The Royal Heritage',
    description: 'Named in honor of King Abba Jifar II of the historic Kingdom of Jimma — renowned for hospitality, diplomacy, and trade.'
  },
  {
    year: 'Roots',
    title: 'Addis & Jimma',
    description: 'Founded with regional bases in Addis Ababa and Jimma, ensuring direct, uncompromising control over ground operations.'
  },
  {
    year: 'Today',
    title: 'Bespoke Expeditions',
    description: 'Chauffeured in our dedicated 4WD fleet with accredited resident master guides across every Ethiopian frontier.'
  }
];

const standards = [
  { icon: Shield, title: 'Ethical Stewardship', desc: 'Direct village community partnerships, transparent guide compensation, and dignified cultural engagement.' },
  { icon: Award, title: 'Dedicated 4WD Fleet', desc: 'Fleet of customized Toyota Land Cruisers specifically fitted for rough terrain, high altitudes, and desert heat.' },
  { icon: Users, title: 'Resident Master Guides', desc: 'Born and raised across Amhara, Tigray, Omo, and Afar with deep historical, cultural, and linguistic expertise.' }
];

const conciergeServices = [
  {
    title: 'Private Fleet & Ground Transfers',
    category: 'Ground Transportation',
    description: 'Navigate Ethiopia’s diverse landscapes in total comfort. We provide a highly maintained fleet of rugged 4WDs for off-grid expeditions and luxury vans for group touring, all driven by experienced, route-master chauffeurs.',
    image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1790794221/njixmixrar801djjeyr2.jpg',
    icon: Truck,
  },
  {
    title: 'Flight & Ticket Reservations',
    category: 'Air Logistics',
    description: 'Focus entirely on the journey while we handle the logistics. We seamlessly secure domestic and international flight tickets, coordinate complex multi-destination itineraries, and manage all schedule adjustments on your behalf.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    icon: Ticket,
  }
];

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();
  const mainRef = useRef<HTMLElement>(null);
  useScrollReveal(mainRef);

  return (
    <main ref={mainRef} className="bg-white text-[#082842] antialiased selection:bg-[#D4AF37] selection:text-white">
      <ScrollProgress />

      <PageHero
        image={pageHeroImages.about}
        eyebrow="Our story"
        lines={['The Abajifar']}
        accent="Legacy"
        subtitle="Named after a king known for hospitality and diplomacy, built by people who call Ethiopia home."
      >
        <button
          onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
          className={heroPrimaryBtn}
        >
          Read our story
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <button onClick={() => navigate('/tours')} className={heroGlassBtn}>
          View Sample Routes
        </button>
      </PageHero>

      {/* Ethos */}
      <div className="relative">
        <SectionDivider variant="wave" fill="#ffffff" />
        <section id="story" className="scroll-mt-20 bg-white px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-12 bg-[#0891b2]" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0891b2]">Our Ethos</span>
              </div>
              <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-[#082842] sm:text-6xl">
                Travel deeper.
                <br />
                <span className="font-serif font-light italic text-[#1a4b70]">Experience</span> Ethiopia.
              </h2>
            </div>

            <p data-reveal-auto className="max-w-md border-l-2 border-[#0891b2]/30 pb-1 pl-6 text-lg font-light leading-[1.7] text-[#1b4363] lg:pl-10">
              We design private expeditions led by licensed resident guides and chauffeured in custom 4WD Land Cruisers. Depth, safety, and uncompromising quality.
            </p>
          </div>
        </section>
      </div>

      {/* Collage */}
      <div className="relative">
        <SectionDivider variant="fade" fill="#f2f8fc" />
        <section
          className="px-4 pb-28 pt-16 sm:px-6 sm:pb-32 lg:px-8"
          style={{ background: 'radial-gradient(ellipse at 85% 30%, rgba(6, 182, 212, 0.08) 0%, transparent 55%), #f2f8fc' }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="relative h-[500px] w-full lg:col-span-8 lg:h-[700px]">
                <div className="absolute left-0 top-0 h-[85%] w-[85%] overflow-hidden rounded-[2rem] border border-cyan-800/15 bg-[#07364d] shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dw1ohipim/image/upload/v1790794218/isdajweahuhpp3ivrz3g.jpg"
                    alt="The Abajifar team"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="h-full w-full object-cover brightness-95 transition-transform duration-[2000ms] ease-out hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 right-0 z-20 h-[55%] w-[45%] overflow-hidden rounded-[1.5rem] border-8 border-[#f2f8fc] bg-[#07364d] shadow-[0_20px_50px_rgba(8,40,66,0.3)]">
                  <img
                    src="https://res.cloudinary.com/dw1ohipim/image/upload/v1790794218/iw4jj9u5pbvhycqruss6.jpg"
                    alt="Ethiopian culture"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-110"
                  />
                </div>
              </div>

              <div className="relative z-30 mt-4 lg:col-span-4 lg:-ml-16 lg:mt-32">
                <div className="rounded-3xl border border-cyan-800/15 bg-white/95 p-8 shadow-[0_20px_60px_-15px_rgba(8,40,66,0.2)] backdrop-blur-xl sm:p-10">
                  <Compass className="mb-5 h-8 w-8 text-[#0891b2]" />
                  <h3 className="mb-4 font-display text-3xl font-bold leading-tight text-[#082842]">
                    Ground Presence &amp; Mastery
                  </h3>
                  <p className="mb-8 text-base font-light leading-[1.7] text-[#1b4363]">
                    Unlike remote booking agents, our operations are managed directly from the ground. We are physically present where your journey takes place.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#0891b2]" />
                      <div>
                        <div className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-[#0891b2]">Addis Ababa HQ</div>
                        <div className="text-sm font-medium text-[#082842]">Bole Wello Sefer</div>
                      </div>
                    </div>
                    <div className="h-px w-full bg-[#094d6e]/10" />
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#0891b2]" />
                      <div>
                        <div className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-[#0891b2]">Jimma Hub</div>
                        <div className="text-sm font-medium text-[#082842]">Central Hotel Wing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* NEW: Logistics & Concierge Services Section */}
      <div className="relative bg-[#0b2540] py-24 sm:py-32 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#22d3ee] mb-3">
                <Plane className="w-4 h-4 text-[#22d3ee]" />
                <span>Logistics &amp; Concierge</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                Our services
              </h2>
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                Beyond crafting extraordinary itineraries, we provide end-to-end travel logistics. Whether you need a rugged 4WD for the Danakil or a domestic flight to Lalibela, we ensure every connection is flawless.
              </p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-[#D4AF37] text-[#082842] text-sm font-bold uppercase tracking-widest rounded-sm shadow-xl hover:bg-white transition-all cursor-pointer self-start md:self-auto"
            >
              Inquire Services
            </button>
          </div>

          {/* Concierge Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {conciergeServices.map((service, idx) => (
              <div 
                key={idx} 
                className="group rounded-3xl overflow-hidden border border-white/10 bg-[#07364d]/60 backdrop-blur-md shadow-2xl flex flex-col transition-transform duration-500 hover:-translate-y-2"
              >
                {/* Image Canvas */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07364d] via-[#07364d]/40 to-transparent opacity-90" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-6 left-6 bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-md shadow-md flex items-center gap-2">
                    <service.icon className="w-3.5 h-3.5 text-[#22d3ee]" />
                    {service.category}
                  </span>
                </div>

                {/* Details Section */}
                <div className="p-8 sm:p-10 flex flex-col flex-grow">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light mb-8">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#22d3ee]">
                      Included in custom packages
                    </span>
                    <button
                      onClick={() => navigate('/contact')}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Manifesto */}
      <div className="relative">
        <SectionDivider variant="wave" fill="#0b2540" />
        <section className="aurora relative overflow-hidden bg-[#0b2540] px-4 py-28 text-white sm:px-6 sm:py-36">
          <div data-reveal-auto className="relative z-10 mx-auto max-w-4xl text-center">
            <Quote className="mx-auto mb-6 h-14 w-14 rotate-180 text-[#D4AF37]/40" />
            <blockquote className="mb-10 font-serif text-3xl italic leading-snug sm:text-4xl md:text-5xl">
              &ldquo;We don&rsquo;t just show you landscapes; we introduce you to the soul of an ancient, sovereign civilization.&rdquo;
            </blockquote>
            <div className="mx-auto h-[3px] w-24 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#D4AF37]" />
          </div>
        </section>
      </div>

      {/* Timeline + standards */}
      <div className="relative">
        <SectionDivider variant="wave" fill="#ffffff" />
        <section
          className="px-4 pb-28 pt-16 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8"
          style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f4f9fd 50%, #f9fcfe 100%)' }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex items-center gap-4">
              <h2 className="shrink-0 font-display text-4xl font-bold text-[#082842] sm:text-5xl">Heritage &amp; Ethos</h2>
              <div className="h-px w-full bg-[#094d6e]/15" />
            </div>

            <div className="mb-28 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
              {timelineMilestones.map((item, idx) => (
                <div key={item.year} className="group relative">
                  {idx !== timelineMilestones.length - 1 && (
                    <div className="absolute -ml-4 left-full top-6 z-0 hidden h-[2px] w-full bg-gradient-to-r from-[#0891b2]/40 to-transparent lg:block" />
                  )}
                  <div className="relative z-10 flex flex-col items-start">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#0891b2] bg-white transition-transform duration-500 group-hover:scale-110">
                      <div className="h-3 w-3 rounded-full bg-[#0891b2]" />
                    </div>
                    <span className="pointer-events-none absolute right-4 top-0 font-display text-[4rem] font-black leading-none text-[#094d6e]/[0.06] transition-colors duration-500 group-hover:text-[#094d6e]/10 lg:-top-8 lg:right-auto">
                      {item.year}
                    </span>
                    <h3 className="relative z-10 mb-4 font-display text-2xl font-bold text-[#082842]">{item.title}</h3>
                    <p className="relative z-10 max-w-sm text-base font-light leading-[1.7] text-[#1b4363]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {standards.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex min-h-[360px] flex-col justify-between rounded-[2rem] border border-cyan-800/15 bg-white p-9 shadow-[0_8px_30px_-10px_rgba(8,40,66,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_-15px_rgba(8,40,66,0.25)]"
                >
                  <div>
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f2f8fc] transition-colors duration-500 group-hover:bg-[#094d6e]">
                      <feature.icon className="h-8 w-8 text-[#0891b2] transition-colors duration-500 group-hover:text-white" />
                    </div>
                    <h3 className="mb-4 font-display text-2xl font-bold text-[#082842]">{feature.title}</h3>
                    <p className="font-light leading-[1.7] text-[#1b4363]">{feature.desc}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="h-px w-8 bg-[#D4AF37]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0891b2]">Abajifar Standard</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <PageCTA
        title="Begin your"
        accent="journey."
        body="Every itinerary is personalized to your schedule, physical capabilities, and deepest curiosities."
        primaryLabel="Plan Your Expedition"
        secondaryLabel="View Sample Routes"
        secondaryTo="/tours"
      />
    </main>
  );
};

export default AboutPage;