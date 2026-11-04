import React, { useRef, useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { pageHeroImages } from '../data/pageHeroImages';
import { CheckCircle2, Clock, Compass, Mail, MapPin, MessageSquare, Navigation, Phone, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import '../components/home/home-motion.css';
import { PageHero, heroGlassBtn, heroPrimaryBtn } from '../components/common/PageHero';
import { ScrollProgress, SectionDivider, useScrollReveal } from '../components/home/HomeEffects';
import { FacebookCarousel } from '../components/home/SocialShowcase';

/* ------------------------------------------------------------------
   Edit these in one place
------------------------------------------------------------------- */
const PHONES = [
  { display: '+251 933 333 338', href: 'tel:+251933333338' },
  { display: '+251 944 444 447', href: 'tel:+251944444447' },
  { display: '+251 944 444 448', href: 'tel:+251944444448' }
];
const WHATSAPP_HREF = 'https://wa.me/251944444447';
const EMAIL = 'abajifartourandtravel@gmail.com';

const SOCIAL_LINKS = [
  {
    icon: Facebook,
    href: 'https://web.facebook.com/AbajifarTourandTravel#',
    label: 'Facebook',
    brand: 'bg-[#1877F2] border-[#1877F2]/60 shadow-[0_16px_40px_rgba(24,119,242,0.35)] hover:shadow-[0_24px_50px_rgba(24,119,242,0.55)]'
  },
  {
    icon: Twitter,
    href: 'https://x.com/@AbajifarTour',
    label: 'X (Twitter)',
    brand: 'bg-black border-white/25 shadow-[0_16px_40px_rgba(0,0,0,0.45)] hover:shadow-[0_24px_50px_rgba(255,255,255,0.18)]'
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/abajifartour/',
    label: 'Instagram',
    brand: 'bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] border-[#E1306C]/60 shadow-[0_16px_40px_rgba(225,48,108,0.35)] hover:shadow-[0_24px_50px_rgba(225,48,108,0.55)]'
  },
  {
    icon: Youtube,
    href: 'https://www.youtube.com/channel/UCqqcBCLTibMAj8s7VpGOo9w',
    label: 'YouTube',
    brand: 'bg-[#FF0000] border-[#FF0000]/60 shadow-[0_16px_40px_rgba(255,0,0,0.35)] hover:shadow-[0_24px_50px_rgba(255,0,0,0.55)]'
  }
];

/*
  `query` is what Google Maps searches for. For a pin on the exact door,
  swap it for the full street address or your business name as it appears
  on Google Maps.
*/
const LOCATIONS = [
  {
    id: 'jemo',
    label: 'Jemo No. 2 HQ',
    place: 'Jemo No. 2',
    city: 'Addis Ababa, Ethiopia',
    // Exact pin from the Google Maps link (8.9600488, 38.7051592)
    query: '8.9600488,38.7051592'
  },
  {
    id: 'bole',
    label: 'Bole Wello Sefer',
    place: 'Bole Wello Sefer',
    city: 'Addis Ababa, Ethiopia',
    query: 'Bole Wello Sefer, Addis Ababa, Ethiopia'
  }
];

const inputClass =
  'w-full rounded-xl border border-[#0891b2]/30 bg-white px-5 py-3.5 text-base text-[#082842] placeholder-[#52718a] transition-all focus:border-[#0891b2] focus:outline-none focus:ring-4 focus:ring-[#0891b2]/15';
const labelClass = 'mb-2 block text-xs font-bold uppercase tracking-wider text-[#094d6e] sm:text-sm';

export const ContactPage: React.FC = () => {
  const { selectedTourForInquiry } = useRouter();
  const mainRef = useRef<HTMLElement>(null);
  useScrollReveal(mainRef);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelRequest: selectedTourForInquiry || '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeLocation, setActiveLocation] = useState(LOCATIONS[0].id);

  const location = LOCATIONS.find((l) => l.id === activeLocation) ?? LOCATIONS[0];
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location.query)}&z=15&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.query)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <main ref={mainRef} className="bg-white text-[#082842] antialiased selection:bg-[#D4AF37] selection:text-white">
      <ScrollProgress />

      <PageHero
        image={pageHeroImages.contact}
        eyebrow="Abbajfar concierge"
        lines={["Let's plan"]}
        accent="your journey."
        subtitle="Tell us where you want to go in Ethiopia."
      >
        <button
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          className={heroPrimaryBtn}
        >
          Send a request
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className={heroGlassBtn}>
          <MessageSquare className="h-4 w-4" />
          WhatsApp us
        </a>
      </PageHero>

      {/* Form + direct contact */}
      <div className="relative">
        <SectionDivider variant="wave" fill="#ffffff" />
        <section
          id="contact-form"
          className="scroll-mt-24 px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:px-8"
          style={{
            background:
              'radial-gradient(ellipse at 80% 10%, rgba(34, 211, 238, 0.10) 0%, transparent 55%), linear-gradient(135deg, #ffffff 0%, #f0f8fd 50%, #f6fafd 100%)'
          }}
        >
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-12 lg:gap-12 mb-16">
            
            {/* Form */}
            <div className="rounded-3xl border border-[#0891b2]/20 bg-white/90 p-7 shadow-2xl backdrop-blur-xl sm:p-10 lg:col-span-7">
              {isSubmitted ? (
                <div className="space-y-4 py-12 text-center" role="status">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500 bg-emerald-500/15 text-emerald-600">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-[#082842]">Message dispatched</h2>
                  <p className="mx-auto max-w-md font-light leading-[1.7] text-[#1c4566]">
                    Thank you, {formData.fullName || 'Traveler'}. Our trip specialists in Addis Ababa will reply within 12 hours with customized options.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ fullName: '', email: '', phone: '', travelRequest: '', message: '' });
                      }}
                      className="cursor-pointer rounded-xl bg-[#094d6e] px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#08608a]"
                    >
                      Send another request
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#0891b2] sm:text-sm">
                      <Compass className="h-4 w-4" />
                      <span>Travel request</span>
                    </div>
                    <h2 className="font-display text-3xl font-bold leading-tight text-[#082842] sm:text-4xl">
                      Tell us about your trip.
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className={labelClass}>Name *</label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className={labelClass}>Email *</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClass}>Phone / WhatsApp *</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className={`${inputClass} font-mono`}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="travelRequest" className={labelClass}>Travel request *</label>
                      <input
                        id="travelRequest"
                        type="text"
                        required
                        value={formData.travelRequest}
                        onChange={(e) => setFormData({ ...formData, travelRequest: e.target.value })}
                        placeholder="e.g., 9-Day Historic Route, or custom dates"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass}>Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your interests, party size, or dates..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#094d6e] py-4 text-base font-bold text-white shadow-xl shadow-[#094d6e]/25 transition-all hover:bg-[#08608a] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <Send className="h-5 w-5" />
                      <span>{isSubmitting ? 'Sending request...' : 'Send travel request'}</span>
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Direct Contact */}
            <aside
              className="flex flex-col justify-between rounded-3xl border border-white/10 p-7 text-white shadow-2xl sm:p-10 lg:col-span-5"
              style={{
                background:
                  'radial-gradient(ellipse at 90% 0%, rgba(34, 211, 238, 0.22) 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(212, 175, 55, 0.16) 0%, transparent 55%), #0b2540'
              }}
            >
              <div className="flex-grow">
                <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                  <Phone className="h-4 w-4" />
                  <span>Talk to us directly</span>
                </div>
                <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Prefer a conversation?</h2>
                <p className="mt-3 font-serif text-lg font-light italic leading-[1.7] text-white/80">
                  Call or message our planners in Addis Ababa.
                </p>

                <ul className="mt-10 space-y-4">
                  {PHONES.map((phone) => (
                    <li key={phone.href}>
                      <a
                        href={phone.href}
                        className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 transition-all hover:border-[#D4AF37]/60 hover:bg-white/10"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] transition-colors group-hover:bg-[#D4AF37] group-hover:text-[#0b2540]">
                          <Phone className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-[11px] font-bold uppercase tracking-widest text-white/50">Call</span>
                          <span className="font-mono text-xl font-bold tabular-nums">{phone.display}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 space-y-4">
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[#1ebe5b] cursor-pointer hover:-translate-y-1"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a href={`mailto:${EMAIL}`} className="flex items-center justify-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white mt-4">
                    <Mail className="h-4 w-4 text-[#D4AF37]" />
                    <span>{EMAIL}</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>

      {/* STUNNING FULL-WIDTH SOCIAL MEDIA SECTION WITH BRAND COLORS */}
      <div className="relative">
        <SectionDivider variant="fade" fill="#0b2540" />
        <section className="relative overflow-hidden bg-[#0b2540] px-4 py-24 sm:px-6 sm:py-32 lg:px-8 border-y border-[#0891b2]/20">
          
          {/* Atmospheric Background Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0891b2]/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#A7C7E7]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-4 block">
                Connect With Us
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Join the Expedition.
              </h2>
              <p className="text-white/70 font-light text-lg sm:text-xl max-w-2xl mx-auto">
                Discover breathtaking landscapes, ancient history, and raw cultural encounters through our digital lens.
              </p>
            </div>

            {/* Facebook post carousel */}
            <div className="mb-16 sm:mb-20">
              <FacebookCarousel showSocialLinks={false} />
            </div>
            
            {/* Massive Social Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col items-center justify-center gap-6 p-12 rounded-[2rem] border overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:brightness-110 ${social.brand}`}
                >
                  {/* Glass Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                  
                  <social.icon className="w-16 h-16 text-white group-hover:scale-110 transition-all duration-500 relative z-10" />
                  
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-white group-hover:text-white transition-colors duration-500 relative z-10">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Map Section */}
      <div className="relative">
        <SectionDivider variant="fade" fill="#f2f8fc" />
        <section className="bg-[#f2f8fc] px-4 pb-28 pt-16 sm:px-6 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="mb-2.5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#0891b2] sm:text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Find us</span>
                </div>
                <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-[#082842] sm:text-5xl">
                  Visit us in Ethiopia.
                </h2>
              </div>

              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Office locations">
                {LOCATIONS.map((loc) => {
                  const active = loc.id === activeLocation;
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveLocation(loc.id)}
                      className={`cursor-pointer rounded-xl border px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#094d6e] ${
                        active
                          ? 'border-[#094d6e] bg-[#094d6e] text-white shadow-lg shadow-[#094d6e]/25'
                          : 'border-[#094d6e]/15 bg-white text-[#1a4b70] hover:border-[#0891b2] hover:text-[#0891b2]'
                      }`}
                    >
                      {loc.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-12">
              <div className="flex flex-col justify-between rounded-3xl border border-[#0891b2]/20 bg-white p-7 shadow-xl sm:p-8 lg:col-span-4">
                <div>
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2f8fc] text-[#0891b2]">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0891b2]">{location.label}</p>
                  <h3 className="mt-1 font-display text-3xl font-bold leading-tight text-[#082842]">{location.place}</h3>
                  <p className="mt-2 text-base font-light text-[#1b4363]">{location.city}</p>
                  <div className="my-6 h-px w-full bg-[#094d6e]/10" />
                  <ul className="space-y-3 text-sm font-medium text-[#082842]">
                    {PHONES.map((phone) => (
                      <li key={phone.href}>
                        <a href={phone.href} className="flex items-center gap-3 transition-colors hover:text-[#0891b2]">
                          <Phone className="h-4 w-4 text-[#0891b2]" />
                          <span className="font-mono tabular-nums">{phone.display}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#094d6e] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#094d6e]/25 transition-all hover:bg-[#08608a]"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Get directions</span>
                </a>
              </div>

              <div className="relative h-[380px] overflow-hidden rounded-3xl border border-[#0891b2]/20 bg-[#dbeaf5] shadow-xl sm:h-[460px] lg:col-span-8 lg:h-auto lg:min-h-[480px]">
                <iframe
                  key={location.id}
                  title={`Map of ${location.label}, ${location.place}`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;