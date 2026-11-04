import React, { useCallback, useRef, useState } from 'react';
import { ArrowUpRight, Camera, Facebook, Instagram, LayoutGrid, Play, Twitter, Youtube } from 'lucide-react';

/* ------------------------------------------------------------------
   Edit these in one place
   Images live in  public/images/social/  (served from /images/social/)
------------------------------------------------------------------- */
const AUTOPLAY_MS = 6500;
const FACEBOOK_PAGE = 'https://web.facebook.com/AbajifarTourandTravel';

type Slide = {
  id: string;
  kind: 'Photo' | 'Video' | 'Post';
  title: string;
  caption: string;
  date?: string;
  image: string;
  /** CSS object-position, to keep the subject inside the card */
  focus?: string;
  /** Glow colour that washes the panel while this slide is active */
  accent: string;
  /** Link to the exact Facebook post. Falls back to the page. */
  href?: string;
};

const SLIDES: Slide[] = [
  {
    id: 'fleet',
    kind: 'Photo',
    title: 'Our fleet, road-ready.',
    caption:
      'Land Cruisers, Hiace vans and a Patrol lined up against the Ethiopian highlands, waiting for your itinerary.',
    image: '/images/social/fleet.jpg',
    focus: '55% 60%',
    accent: '#D4AF37'
  },
  {
    id: 'welcome',
    kind: 'Photo',
    title: 'A warm welcome, Ethiopian style.',
    caption:
      'Traditional dress, a big smile and the vehicles that will carry you across the country. This is where your journey begins.',
    image: '/images/social/welcome.jpg',
    focus: '50% 50%',
    accent: '#0891b2'
  },
  {
    id: 'monument',
    kind: 'Photo',
    title: 'Cities with stories to tell.',
    caption:
      'Monuments, markets and busy roundabouts: the Ethiopia that lives between the famous landmarks.',
    image: '/images/social/monument.jpg',
    focus: '68% 50%',
    accent: '#3b82f6'
  },
  {
    id: 'road',
    kind: 'Video',
    title: 'Roads above the clouds.',
    caption: 'Misty mornings, winding mountain roads and golden light. Press play on Facebook and ride along.',
    image: '/images/social/road.jpg',
    focus: '50% 45%',
    accent: '#f59e0b'
  },
  {
    id: 'post',
    kind: 'Post',
    title: 'Flights and fleet, one trusted desk.',
    caption:
      'From Ethiopian Airlines tickets to chauffeured Land Cruisers, we arrange the whole journey in one place.',
    date: 'Oct 8',
    image: '/images/social/post.jpg',
    focus: '50% 50%',
    accent: '#0ea5e9'
  }
];

const SOCIALS = [
  { icon: Facebook, href: FACEBOOK_PAGE, label: 'Facebook', hover: 'hover:bg-[#1877F2] hover:border-[#1877F2]' },
  { icon: Twitter, href: 'https://x.com/@AbajifarTour', label: 'X (Twitter)', hover: 'hover:bg-black hover:border-black' },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/abajifartour/',
    label: 'Instagram',
    hover: 'hover:bg-[#E1306C] hover:border-[#E1306C]'
  },
  {
    icon: Youtube,
    href: 'https://www.youtube.com/channel/UCqqcBCLTibMAj8s7VpGOo9w',
    label: 'YouTube',
    hover: 'hover:bg-[#FF0000] hover:border-[#FF0000]'
  }
];

const KIND_ICON = { Photo: Camera, Video: Play, Post: LayoutGrid } as const;

/* Where each card sits relative to the active one (x/y are % of its own size) */
const POS: Record<number, { x: number; y: number; s: number; o: number; z: number; r: number }> = {
  0: { x: 0, y: 0, s: 1, o: 1, z: 30, r: 0 },
  1: { x: 7, y: 80, s: 0.82, o: 0.8, z: 20, r: 3 },
  [-1]: { x: -7, y: -80, s: 0.82, o: 0.8, z: 20, r: -3 },
  2: { x: 10, y: 140, s: 0.66, o: 0, z: 10, r: 5 },
  [-2]: { x: -10, y: -140, s: 0.66, o: 0, z: 10, r: -5 }
};

const CurvedArrow: React.FC<{ flip?: boolean }> = ({ flip }) => (
  <svg
    viewBox="0 0 40 44"
    className={`h-7 w-7 ${flip ? '-scale-y-100' : ''}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 5 C 31 6, 35 27, 18 38" />
    <path d="M18 38 L18.5 27.5 M18 38 L28 34" />
  </svg>
);

const arrowBtn =
  'absolute right-0 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#094d6e]/15 bg-white text-[#094d6e] shadow-lg shadow-[#094d6e]/15 transition hover:scale-110 hover:bg-[#094d6e] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0891b2] sm:-right-3';

/* ------------------------------------------------------------------
   The carousel element (used on Home and Contact)
------------------------------------------------------------------- */
export const FacebookCarousel: React.FC<{ showSocialLinks?: boolean }> = ({ showSocialLinks = true }) => {
  const n = SLIDES.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback((d: number) => setActive((a) => (a + d + n) % n), [n]);
  const offset = (i: number) => {
    let d = (i - active + n) % n;
    if (d > n / 2) d -= n;
    return d;
  };

  const slide = SLIDES[active];
  const link = slide.href ?? FACEBOOK_PAGE;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Latest from our Facebook page"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') go(-1);
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') go(1);
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => {
        touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }}
      onTouchEnd={(e) => {
        if (!touch.current) return;
        const dx = e.changedTouches[0].clientX - touch.current.x;
        const dy = e.changedTouches[0].clientY - touch.current.y;
        touch.current = null;
        if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
      }}
      className="relative isolate overflow-hidden rounded-[2.5rem] border border-[#0891b2]/15 bg-white/80 p-6 shadow-[0_40px_100px_-40px_rgba(9,77,110,0.4)] outline-none backdrop-blur-sm focus-visible:ring-4 focus-visible:ring-[#0891b2]/40 sm:p-10 lg:p-14"
    >
      <style>{`
        @keyframes sc-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
        @keyframes sc-fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}
        @keyframes sc-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @media (prefers-reduced-motion:reduce){.sc-anim{animation:none!important}.sc-move{transition:none!important}}
      `}</style>

      {/* Per-slide colour wash, cross-fades as the slide changes */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-1000"
          style={{
            opacity: i === active ? 1 : 0,
            background: `radial-gradient(ellipse at 22% 50%, ${s.accent}33 0%, transparent 60%), radial-gradient(ellipse at 95% 100%, ${s.accent}1f 0%, transparent 50%)`
          }}
        />
      ))}

      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* ---------------- Card stack ---------------- */}
        <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[460px] lg:col-span-6 lg:max-w-[540px]">
          <div className="relative aspect-[1/1.15] w-full [mask-image:linear-gradient(to_bottom,transparent_0%,#000_13%,#000_87%,transparent_100%)]">
            {SLIDES.map((s, i) => {
              const d = offset(i);
              const p = POS[d];
              const isActive = d === 0;
              const card = (
                <span
                  className="sc-move absolute inset-0 overflow-hidden rounded-[1.75rem] border-[6px] border-white bg-white transition-[box-shadow] duration-700"
                  style={{
                    boxShadow: isActive
                      ? `0 45px 80px -30px ${s.accent}b3, 0 18px 40px -18px rgba(9,77,110,0.45)`
                      : '0 20px 40px -22px rgba(9,77,110,0.5)'
                  }}
                >
                  <img
                    src={s.image}
                    alt={isActive ? `${s.title} ${s.caption}` : ''}
                    draggable={false}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className="h-full w-full rounded-[1.2rem] object-cover"
                    style={{ objectPosition: s.focus }}
                  />
                  <span className="pointer-events-none absolute inset-0 rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_40%)]" />
                </span>
              );

              return (
                <div
                  key={s.id}
                  aria-hidden={Math.abs(d) > 1}
                  className="sc-move absolute left-1/2 top-1/2 aspect-[5/4] w-[84%]"
                  style={{
                    transform: `translate3d(calc(-50% + ${p?.x ?? 0}%), calc(-50% + ${p?.y ?? 0}%), 0) rotate(${p?.r ?? 0}deg) scale(${p?.s ?? 0.5})`,
                    opacity: p?.o ?? 0,
                    zIndex: p?.z ?? 0,
                    filter: isActive ? 'none' : 'blur(1.5px)',
                    pointerEvents: Math.abs(d) > 1 ? 'none' : 'auto',
                    transition:
                      'transform 800ms cubic-bezier(.22,1,.36,1), opacity 600ms ease, filter 600ms ease'
                  }}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-[3.5%] rounded-[2.2rem] border-2 border-dashed border-[#D4AF37]/70"
                    />
                  )}

                  {isActive ? (
                    <a
                      href={s.href ?? FACEBOOK_PAGE}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open on Facebook: ${s.title}`}
                      className="relative block h-full w-full rounded-[1.75rem] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#0891b2]"
                    >
                      {card}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      tabIndex={Math.abs(d) > 1 ? -1 : 0}
                      aria-label={`Show: ${s.title}`}
                      className="relative block h-full w-full cursor-pointer rounded-[1.75rem] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#0891b2]"
                    >
                      {card}
                    </button>
                  )}

                  {isActive && (
                    <span
                      className="sc-anim pointer-events-none absolute -bottom-4 right-4 z-10 flex items-center gap-2 rounded-full bg-[#1877F2] py-2 pl-3 pr-4 text-xs font-bold text-white shadow-[0_12px_30px_-8px_rgba(24,119,242,0.8)]"
                      style={{ animation: 'sc-float 4s ease-in-out infinite' }}
                    >
                      <Facebook className="h-4 w-4 fill-white" aria-hidden="true" />
                      {s.kind}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <button type="button" onClick={() => go(-1)} aria-label="Previous post" className={`${arrowBtn} top-[6%]`}>
            <CurvedArrow flip />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next post" className={`${arrowBtn} bottom-[6%]`}>
            <CurvedArrow />
          </button>
        </div>

        {/* ---------------- Copy ---------------- */}
        <div className="text-center lg:col-span-6 lg:pl-6 lg:text-left" aria-live={paused ? 'polite' : 'off'}>
          <div key={slide.id} className="sc-anim" style={{ animation: 'sc-rise 700ms cubic-bezier(.22,1,.36,1) both' }}>
            <p className="font-display text-sm font-bold tabular-nums tracking-widest text-[#0891b2]">
              {String(active + 1).padStart(2, '0')}
              <span className="text-[#094d6e]/40"> / {String(n).padStart(2, '0')}</span>
            </p>
            <h3 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#082842] sm:text-5xl lg:text-6xl">
              {slide.title}
            </h3>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#094d6e]/15 bg-white px-3 py-1 text-xs font-semibold text-[#094d6e] shadow-sm">
                {React.createElement(KIND_ICON[slide.kind], { className: 'h-3.5 w-3.5', 'aria-hidden': true })}
                {slide.kind}
              </span>
              {slide.date && <span className="text-xs font-medium text-[#1c4566]/70">Posted {slide.date}</span>}
            </div>
            <p className="mx-auto mt-6 max-w-md font-serif text-lg font-light leading-[1.75] text-[#1c4566] lg:mx-0">
              {slide.caption}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-[#1877F2] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#1877F2]/30 transition-all hover:-translate-y-0.5 hover:bg-[#2d88ff]"
            >
              <Facebook className="h-4 w-4 fill-white" aria-hidden="true" />
              View on Facebook
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            {showSocialLinks && (
              <div className="flex items-center gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border border-[#094d6e]/15 bg-white text-[#094d6e] shadow-sm transition-all hover:-translate-y-1 hover:text-white ${s.hover}`}
                  >
                    <s.icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Thumbnails + autoplay progress (progress bar ending advances the slide) */}
          <div className="mt-10 flex items-start justify-center gap-3 lg:justify-start">
            {SLIDES.map((s, i) => {
              const on = i === active;
              return (
                <div key={s.id} className="flex flex-col items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Go to: ${s.title}`}
                    aria-current={on}
                    className={`h-12 w-14 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0891b2] sm:h-14 sm:w-[4.5rem] ${
                      on ? 'scale-110 ring-2 ring-[#0891b2] ring-offset-2 ring-offset-white' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={s.image}
                      alt=""
                      loading="lazy"
                      draggable={false}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: s.focus }}
                    />
                  </button>
                  <span className="h-[3px] w-10 overflow-hidden rounded-full bg-[#094d6e]/15">
                    {on && (
                      <span
                        className="sc-anim block h-full origin-left bg-[#0891b2]"
                        style={{
                          animation: `sc-fill ${AUTOPLAY_MS}ms linear forwards`,
                          animationPlayState: paused ? 'paused' : 'running'
                        }}
                        onAnimationEnd={() => go(1)}
                      />
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------
   Full home-page section
------------------------------------------------------------------- */
export const SocialShowcase: React.FC = () => (
  <section
    id="social"
    aria-labelledby="social-showcase-title"
    className="relative overflow-hidden bg-[#f2f8fc] px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
  >
    <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#0891b2]/10 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#D4AF37]/15 blur-3xl" />

    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
        <h2
          id="social-showcase-title"
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#082842] sm:text-5xl md:text-6xl"
        >
          Follow the road with us.
        </h2>
        <p className="mt-5 text-lg font-light text-[#1c4566] sm:text-xl">
          Fresh from our Facebook page: new vehicles, new routes and the people who make every trip.
        </p>
      </div>
      <FacebookCarousel />
    </div>
  </section>
);

export default SocialShowcase;