import React, { useEffect, useRef, useState } from 'react';
import '../home/home-motion.css';

interface PageHeroProps {
  image: string;
  eyebrow: string;
  /** Plain white lines of the headline */
  lines: string[];
  /** Final gold italic line of the headline */
  accent: string;
  subtitle?: string;
  /** Buttons etc. */
  children?: React.ReactNode;
}

const delay = (ms: number) => ({ '--d': `${ms}ms` } as React.CSSProperties);

export const PageHero: React.FC<PageHeroProps> = ({ image, eyebrow, lines, accent, subtitle, children }) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => cancelAnimationFrame(id);
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const y = Math.min(window.scrollY, vh * 1.2);
      if (bgRef.current) bgRef.current.style.transform = `translate3d(0, ${y * 0.3}px, 0)`;
      if (contentRef.current) {
        contentRef.current.style.opacity = String(Math.max(0, 1 - y / (vh * 0.65)));
        contentRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-[80svh] items-center justify-center overflow-hidden bg-[#0d1f38]">
      <div ref={bgRef} className="absolute inset-0 will-change-transform" aria-hidden="true">
        <img
          src={image}
          alt=""
          referrerPolicy="no-referrer"
          className={`h-full w-full object-cover transition-transform duration-[9000ms] ease-out motion-reduce:transition-none ${ready ? 'scale-110 motion-reduce:scale-100' : 'scale-100'}`}
        />
      </div>

      <div className="absolute inset-0 bg-[#06182b]/25" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,24,43,0.4)_0%,_transparent_65%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#06182b]/60 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#06182b]/85 via-[#06182b]/35 to-transparent" aria-hidden="true" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-28 pt-36 text-center will-change-transform"
      >
        <div
          className="hero-in mb-6 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] drop-shadow-md sm:text-xs"
          style={delay(100)}
        >
          <span className="h-px w-8 bg-[#D4AF37]" />
          <span>{eyebrow}</span>
          <span className="h-px w-8 bg-[#D4AF37]" />
        </div>

        <h1 className="font-display text-5xl font-extrabold leading-[1.04] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] sm:text-6xl md:text-7xl lg:text-8xl">
          {lines.map((line, i) => (
            <span key={line} className="hero-in block" style={delay(250 + i * 150)}>{line}</span>
          ))}
          <span className="hero-in text-gold block pb-2 font-bold italic" style={delay(250 + lines.length * 150)}>
            {accent}
          </span>
        </h1>

        {subtitle && (
          <p
            className="hero-in mx-auto mt-6 max-w-2xl text-base font-semibold leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-lg"
            style={delay(700)}
          >
            {subtitle}
          </p>
        )}

        {children && (
          <div className="hero-in mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-5" style={delay(850)}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

/* Shared hero button styles so every page matches */
export const heroPrimaryBtn =
  'group inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-sm bg-[#D4AF37] px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#0b2540] shadow-[0_10px_30px_-8px_rgba(212,175,55,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e6c35a] sm:w-auto';
export const heroGlassBtn =
  'inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-sm border border-white/40 bg-white/15 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/25 sm:w-auto';