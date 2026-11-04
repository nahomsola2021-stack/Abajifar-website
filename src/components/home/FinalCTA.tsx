import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, Compass, MessageSquare, Phone } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const { navigate, openInquiryModal } = useRouter();

  return (
    <section className="aurora relative overflow-hidden bg-[#0b2540] py-28 text-white sm:py-36">
      {/* Concentric rings: a quiet nod to compass / contour lines */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
          Your Ethiopia story
          <br />
          <span className="text-gold italic">starts here.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl font-serif text-lg font-light italic leading-[1.7] text-white/80 sm:text-xl">
          Bespoke expeditions tailored by our resident planners.
        </p>

        <div data-reveal-auto className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => openInquiryModal()}
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#D4AF37] px-8 py-4 text-base font-bold text-[#0b2540] shadow-[0_14px_40px_-10px_rgba(212,175,55,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#e6c35a] sm:w-auto sm:text-lg"
          >
            <span>Plan Your Journey</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => navigate('/tours')}
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:border-white/60 hover:bg-white/20 sm:w-auto sm:text-lg"
          >
            <Compass className="h-5 w-5 text-[#D4AF37]" />
            <span>Explore Tour Packages</span>
          </button>
        </div>

        <div data-reveal-auto className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-white/80">
          <a
            href="https://wa.me/251944444448"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <MessageSquare className="h-4 w-4 text-[#D4AF37]" />
            <span>WhatsApp: +251 944 444 448</span>
          </a>
          <span aria-hidden="true" className="text-white/30">·</span>
          <a href="tel:+251933333338" className="flex items-center gap-2 transition-colors hover:text-white">
            <Phone className="h-4 w-4 text-[#D4AF37]" />
            <span>+251 933 333 338</span>
          </a>
          <a href="tel:+251944444447" className="flex items-center gap-2 transition-colors hover:text-white">
            <Phone className="h-4 w-4 text-[#D4AF37]" />
            <span>+251 944 444 447</span>
          </a>
          <a href="tel:+251944444448" className="flex items-center gap-2 transition-colors hover:text-white">
            <Phone className="h-4 w-4 text-[#D4AF37]" />
            <span>+251 944 444 448</span>
          </a>
        </div>
      </div>
    </section>
  );
};