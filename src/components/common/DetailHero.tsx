import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import '../home/home-motion.css';

interface DetailHeroProps {
  image: string;
  alt: string;
  backLabel: string;
  backTo: string;
  /** Small gold line above the title (e.g. the region) */
  eyebrow: string;
  title: string;
  subtitle: string;
  chips: { icon?: React.ReactNode; label: string }[];
  primaryLabel: string;
  onPrimary: () => void;
  secondaryLabel: string;
  /** id of the element to scroll to (no hash links, so it is safe with any router) */
  secondaryTargetId: string;
}

const delay = (ms: number) => ({ '--d': `${ms}ms` } as React.CSSProperties);

export const DetailHero: React.FC<DetailHeroProps> = ({
  image, alt, backLabel, backTo, eyebrow, title, subtitle, chips,
  primaryLabel, onPrimary, secondaryLabel, secondaryTargetId
}) => {
  const { navigate } = useRouter();
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
        contentRef.current.style.opacity = String(Math.max(0, 1 - y / (vh * 0.7)));
        contentRef.current.style.transform = `translate3d(0, ${y * 0.1}px, 0)`;
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
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-[#0d1f38] text-white">
      <div ref={bgRef} className="absolute inset-0 will-change-transform" aria-hidden="true">
        <img
          src={image}
          alt=""
          referrerPolicy="no-referrer"
          className={`h-full w-full object-cover object-center transition-transform duration-[9000ms] ease-out motion-reduce:transition-none ${ready ? 'scale-110 motion-reduce:scale-100' : 'scale-100'}`}
        />
      </div>
      <span className="sr-only">{alt}</span>

      <div className="absolute inset-0 bg-[#06182b]/20" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#06182b]/60 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06182b]/95 via-[#06182b]/45 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06182b]/55 via-transparent to-transparent" aria-hidden="true" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14 px-5 pb-28 pt-32 will-change-transform sm:px-8 sm:pb-32 sm:pt-36 lg:px-14"
      >
        <button
          onClick={() => navigate(backTo)}
          className="hero-in inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-[#06182b]/55 px-4 text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
          style={delay(100)}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{backLabel}</span>
        </button>

        <div className="max-w-4xl space-y-5">
          <div className="hero-in flex flex-wrap gap-2.5" style={delay(250)}>
            {chips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#06182b]/60 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-md sm:text-sm"
              >
                {chip.icon}
                {chip.label}
              </span>
            ))}
          </div>

          <div className="hero-in flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] sm:text-sm" style={delay(400)}>
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span>{eyebrow}</span>
          </div>

          <h1
            className="hero-in max-w-4xl font-display text-4xl font-extrabold leading-[1.06] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] sm:text-5xl md:text-7xl"
            style={delay(500)}
          >
            {title}
          </h1>

          <p className="hero-in max-w-2xl font-serif text-lg font-light italic leading-relaxed text-white/90 sm:text-2xl" style={delay(650)}>
            {subtitle}
          </p>

          <div className="hero-in flex flex-col gap-3 pt-2 sm:flex-row sm:items-center" style={delay(800)}>
            <button
              onClick={onPrimary}
              className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-7 py-3 text-base font-bold text-[#0b2540] shadow-[0_10px_30px_-8px_rgba(212,175,55,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#e6c35a]"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.getElementById(secondaryTargetId)?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {secondaryLabel}
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};