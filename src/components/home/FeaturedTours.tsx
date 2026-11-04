import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { toursData } from '../../data/toursData';
import { Tour } from '../../types';
import {
  ArrowRight,
  Compass,
  Clock,
  CheckCircle2,
  X,
  Shield,
  MapPin,
  Calendar,
  Sparkles
} from 'lucide-react';

export const FeaturedTours: React.FC = () => {
  const { navigate, openInquiryModal } = useRouter();
  const tours = toursData.slice(0, 4);
  const [quickTour, setQuickTour] = useState<Tour | null>(null);

  return (
    <section
      className="py-20 sm:py-28 grad-featured-tours text-[#082842] relative"
      style={{
        background:
          'radial-gradient(ellipse at 80% 20%, rgba(34, 211, 238, 0.10) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(6, 182, 212, 0.07) 0%, transparent 55%), linear-gradient(135deg, #ffffff 0%, #f0f8fd 50%, #f6fafd 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0891b2] mb-2.5">
              <Compass className="w-4 h-4 text-[#0891b2]" />
              <span>Curated Circuits</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#082842] tracking-tight leading-[1.1]">
              HANDCRAFTED EXPEDITIONS
            </h2>
            <p className="mt-2.5 text-lg sm:text-xl text-[#1a4b70] font-light italic font-serif leading-[1.7]">
              Private master itineraries chauffeured in custom 4WD Land Cruisers.
            </p>
          </div>
          <button
            onClick={() => navigate('/tours')}
            className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#094d6e] hover:text-[#0891b2] transition-colors group cursor-pointer self-start md:self-end"
          >
            <span>View All Tour Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Premium Travel Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="group relative rounded-3xl overflow-hidden h-[440px] sm:h-[490px] border border-cyan-800/15 shadow-2xl bg-[#07364d] flex flex-col justify-between p-7 sm:p-9"
            >
              {/* Massive Photography with smooth zoom */}
              <img
                src={tour.heroImage}
                alt={tour.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-106 transition-transform duration-1000 ease-out brightness-90"
              />

              {/* Cyan Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#052636] via-[#074766]/55 to-transparent opacity-95 group-hover:opacity-85 transition-opacity" />
              <div className="home-blue-wash absolute inset-0 bg-[#0891b2]/15 mix-blend-color" />

              {/* Top Unboxed Metadata & Quick View (Zero Pills) */}
              <div className="relative z-10 flex items-center justify-between text-xs text-white">
                <div className="bg-[#052636]/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cyan-400/25 flex items-center gap-2">
                  <span className="font-semibold text-[#67e8f9]">{tour.tourType}</span>
                  <span aria-hidden="true" className="text-cyan-400/40">·</span>
                  <span className="text-slate-200">{tour.groupType}</span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuickTour(tour);
                  }}
                  className="bg-white/20 hover:bg-[#094d6e] backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/25 text-white font-semibold transition-all cursor-pointer shadow-sm"
                >
                  Quick View
                </button>
              </div>

              {/* Visual Hierarchy: Duration → Tour Name → Highlights & Action */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#67e8f9] uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-[#22d3ee]" />
                  <span>{tour.durationDays} Days / {tour.durationNights} Nights</span>
                  <span aria-hidden="true" className="text-cyan-400/40">·</span>
                  <span className="text-cyan-200/90 capitalize">{tour.difficulty} Level</span>
                </div>

                <h3
                  onClick={() => navigate(`/tours/${tour.slug}`)}
                  className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-[#67e8f9] transition-colors max-w-xl cursor-pointer"
                >
                  {tour.title}
                </h3>

                <p className="text-xs sm:text-sm text-cyan-100/90 font-light leading-[1.7] line-clamp-2">
                  {tour.shortDescription}
                </p>

                <div className="pt-3 flex items-center justify-between border-t border-cyan-400/20">
                  <span className="text-xs text-cyan-200 font-medium">
                    {tour.destinationName}
                  </span>
                  <button
                    type="button"
                    onClick={() => navigate(`/tours/${tour.slug}`)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white group-hover:text-[#67e8f9] transition-colors cursor-pointer"
                  >
                    <span>Inspect Full Itinerary</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Tour Glance Lightbox */}
      {quickTour && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
          onClick={() => setQuickTour(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-cyan-800/20 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQuickTour(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-[#094d6e] hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0891b2] block mb-1">
                  Expedition Snapshot
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#082842]">
                  {quickTour.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 text-xs text-[#295478] mt-1.5">
                  <span>{quickTour.durationDays} Days / {quickTour.durationNights} Nights</span>
                  <span aria-hidden="true">·</span>
                  <span>{quickTour.groupType}</span>
                  <span aria-hidden="true">·</span>
                  <span>{quickTour.difficulty} Difficulty</span>
                </div>
              </div>

              <p className="text-sm text-[#183e5c] leading-[1.7] bg-[#f4f9fd] p-4 rounded-2xl border border-cyan-800/10">
                {quickTour.overview}
              </p>

              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#094d6e] block mb-2">
                  Key Expedition Milestones
                </span>
                <ul className="space-y-2">
                  {quickTour.highlights.slice(0, 4).map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1b4363] leading-[1.7]">
                      <CheckCircle2 className="w-4 h-4 text-[#0891b2] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => openInquiryModal()}
                  className="px-5 py-2.5 bg-white border border-cyan-800/20 text-[#094d6e] font-bold text-xs sm:text-sm rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Inquire For Custom Dates
                </button>

                <button
                  type="button"
                  onClick={() => {
                    navigate(`/tours/${quickTour.slug}`);
                    setQuickTour(null);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#094d6e] hover:bg-[#08608a] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <span>View Complete Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
