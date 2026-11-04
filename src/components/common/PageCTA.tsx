import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, Compass } from 'lucide-react';
import '../home/home-motion.css';
import { SectionDivider } from '../home/HomeEffects';

interface PageCTAProps {
  title: string;
  accent: string;
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
  secondaryTo: string;
  inquiryTopic?: string;
}

/** Dark closing section. The section above it needs at least ~96px of bottom padding. */
export const PageCTA: React.FC<PageCTAProps> = ({ title, accent, body, primaryLabel, secondaryLabel, secondaryTo, inquiryTopic }) => {
  const { navigate, openInquiryModal } = useRouter();

  return (
    <div className="relative">
      <SectionDivider variant="curve" fill="#0b2540" />
      <section className="aurora relative overflow-hidden bg-[#0b2540] py-28 text-white sm:py-36">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            {title}
            <br />
            <span className="text-gold italic">{accent}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-serif text-lg font-light italic leading-[1.7] text-white/80 sm:text-xl">
            {body}
          </p>
          <div data-reveal-auto className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => openInquiryModal(inquiryTopic)}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#D4AF37] px-8 py-4 text-base font-bold text-[#0b2540] shadow-[0_14px_40px_-10px_rgba(212,175,55,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#e6c35a] sm:w-auto"
            >
              <span>{primaryLabel}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => navigate(secondaryTo)}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:border-white/60 hover:bg-white/20 sm:w-auto"
            >
              <Compass className="h-5 w-5 text-[#D4AF37]" />
              <span>{secondaryLabel}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};