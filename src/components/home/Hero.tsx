import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface HeroScene {
  id: string;
  name: string;
  location: string;
  image: string;
}

const scenes: HeroScene[] = [
  { id: 'simien', name: 'Simien Mountains', location: 'Northern Highlands', image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791931097/pgmdidewqzk9jt0g81f4.jpg' },
  { id: 'lalibela', name: 'Lalibela', location: 'Amhara Region', image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789937596/ebenwalotmbgiqszetie.jpg' },
  { id: 'danakil', name: 'Danakil Depression', location: 'Afar Region', image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791931190/veh4mak255jcdqatqmkl.jpg' },
  { id: 'omo', name: 'Omo Valley', location: 'Southern Ethiopia', image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1790794603/i4bur7ftueerftgldu8m.jpg' },
  { id: 'bale', name: 'Bale Mountains', location: 'Oromia Region', image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789937912/irewwcnxjwy2utnuxqqi.avif' }
];

const delay = (ms: number) => ({ '--d': `${ms}ms` } as React.CSSProperties);

export const Hero: React.FC = () => {
  const { navigate } = useRouter();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const activeScene = scenes[activeIdx];

  // Slide timer: only advances progress; the slide change happens in the effect below.
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => setProgress((p) => Math.min(p + 1, 100)), 60);
    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (progress >= 100) {
      setActiveIdx((current) => (current + 1) % scenes.length);
      setProgress(0);
    }
  }, [progress]);

  // Parallax: written straight to the DOM via rAF so scrolling never re-renders the hero.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const heroTop = heroRef.current?.getBoundingClientRect().top ?? 0;
      const scrollOffset = Math.max(0, -heroTop);
      const vh = window.innerHeight;
      const parallaxOffset = Math.min(scrollOffset * 0.12, vh * 0.05);
      if (bgRef.current) bgRef.current.style.transform = `translate3d(0, ${-parallaxOffset}px, 0)`;
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${-scrollOffset * 0.08}px, 0)`;
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const selectScene = (index: number) => {
    setActiveIdx(index);
    setProgress(0);
  };

  const selectRelativeScene = (offset: number) => {
    setActiveIdx((current) => (current + offset + scenes.length) % scenes.length);
    setProgress(0);
  };

  return (
    <section ref={heroRef} className="relative isolate min-h-[100svh] overflow-hidden bg-[#0d1f38]">
      {/* Parallax photo stack */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform" aria-hidden="true">
        {scenes.map((scene, index) => (
          <div
            key={scene.id}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ${index === activeIdx ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          >
            <img
              src={scene.image}
              alt=""
              referrerPolicy="no-referrer"
              className={`h-full w-full object-cover transition-transform duration-[9000ms] ease-out motion-reduce:transition-none ${index === activeIdx ? 'scale-110 motion-reduce:scale-100' : 'scale-100'}`}
            />
          </div>
        ))}
      </div>

      {/* Legibility + atmosphere (static, sits above the parallax layer) */}
      <div className="absolute inset-0 bg-[#06182b]/35" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,24,43,0.4)_0%,_transparent_65%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#06182b]/60 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#06182b]/85 via-[#06182b]/40 to-transparent" aria-hidden="true" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1480px] flex-col px-5 pb-24 pt-28 will-change-transform sm:px-8 sm:pb-28 sm:pt-32 lg:px-14"
      >
        <div
          className="hero-in flex items-center justify-center gap-3 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] drop-shadow-md sm:text-xs"
          style={delay(100)}
        >
          <span className="h-px w-8 bg-[#D4AF37]" />
          <span>Private journeys through Ethiopia</span>
          <span className="h-px w-8 bg-[#D4AF37]" />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-10 text-center md:py-12">
          <h1 className="mx-auto max-w-4xl font-display text-6xl font-extrabold leading-[1.02] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] md:text-7xl lg:text-8xl">
            <span className="hero-in block" style={delay(250)}>Discover</span>
            <span
              className="hero-in text-gold block pb-2 font-bold italic drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
              style={delay(450)}
            >
              Ethiopia.
            </span>
          </h1>

          <p
            className="hero-in mx-auto mt-6 max-w-lg text-base font-semibold leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-lg"
            style={delay(650)}
          >
            Private journeys shaped by local knowledge, meaningful encounters, and landscapes unlike anywhere else.
          </p>

          <div className="hero-in mt-10 flex flex-wrap items-center justify-center gap-5" style={delay(800)}>
            <button
              onClick={() => navigate('/tours')}
              className="group flex cursor-pointer items-center justify-center gap-3 rounded-sm bg-[#D4AF37] px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#0b2540] shadow-[0_10px_30px_-8px_rgba(212,175,55,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e6c35a]"
            >
              View our journeys
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => navigate('/destinations')}
              className="group flex cursor-pointer items-center justify-center gap-3 rounded-sm border border-white/40 bg-white/15 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/25"
            >
              Explore destinations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div
            className="hero-in mt-12 hidden flex-col items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-white/70 sm:flex"
            style={delay(1100)}
            aria-hidden="true"
          >
            <span>Scroll</span>
            <span className="relative block h-10 w-px overflow-hidden bg-white/20">
              <span className="scroll-cue-line absolute inset-0 bg-[#D4AF37]" />
            </span>
          </div>
        </div>

        {/* Slide controls */}
        <div className="hero-in border-t border-white/20 pt-4 drop-shadow-md sm:pt-5" style={delay(1000)}>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-display text-lg font-bold tracking-wide text-white">{activeScene.name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">{activeScene.location}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying((playing) => !playing)}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                className="cursor-pointer p-2 text-white transition-colors hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
              <button
                type="button"
                onClick={() => selectRelativeScene(-1)}
                aria-label="Previous landscape"
                className="cursor-pointer p-2 text-white transition-colors hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => selectRelativeScene(1)}
                aria-label="Next landscape"
                className="cursor-pointer p-2 text-white transition-colors hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-5 sm:gap-x-6">
            {scenes.map((scene, index) => {
              const isSelected = index === activeIdx;
              return (
                <button
                  key={scene.id}
                  type="button"
                  onClick={() => selectScene(index)}
                  aria-pressed={isSelected}
                  className="group min-w-0 cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                >
                  <span className={`mb-3 block h-[3px] w-full overflow-hidden rounded-full ${isSelected ? 'bg-white/30' : 'bg-white/20 group-hover:bg-white/50'}`}>
                    {isSelected && (
                      <span className="block h-full bg-[#D4AF37] transition-[width] duration-75" style={{ width: `${progress}%` }} />
                    )}
                  </span>
                  <span className="flex items-baseline gap-2">
                    <span className={`text-[10px] font-bold tabular-nums tracking-widest ${isSelected ? 'text-[#D4AF37]' : 'text-white/70'}`}>
                      0{index + 1}
                    </span>
                    <span className={`truncate text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                      {scene.name}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};