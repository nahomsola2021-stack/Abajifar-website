import React from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { Tour } from '../../types';

interface TourCardProps {
  tour: Tour;
  onOpen: (slug: string) => void;
}

/** The white "tour package" card, shared so it looks identical everywhere. */
export const TourCard: React.FC<TourCardProps> = ({ tour, onOpen }) => (
  <article className="h-full">
    <div className="group relative flex h-full w-full cursor-pointer flex-col rounded-2xl border border-[#094d6e]/10 bg-white p-5 shadow-[0_12px_36px_rgba(8,40,66,0.08)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-3 hover:scale-[1.01] hover:border-[#0891b2]/30 hover:shadow-[0_24px_50px_rgba(8,40,66,0.18)]">
      <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#07364d] shadow-[0_8px_20px_rgba(8,40,66,0.15)]">
        <img
          src={tour.heroImage}
          alt={tour.title}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-[#082842]/0 transition-colors duration-500 group-hover:bg-[#082842]/10" />
        <span className="absolute left-4 top-4 rounded-lg border border-[#094d6e]/5 bg-white/95 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#094d6e] shadow-md">
          {tour.tourType}
        </span>
        <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-lg border border-white/5 bg-[#082842]/90 px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-md">
          <Clock className="h-3 w-3 text-[#D4AF37]" />
          {tour.durationDays} days
        </span>
      </div>

      <div className="flex flex-grow flex-col px-1.5">
        <p className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#0891b2]">
          <MapPin className="h-3.5 w-3.5" />
          <span>{tour.region}</span>
        </p>

        <h3 className="line-clamp-2 font-display text-3xl font-bold leading-snug text-[#082842] transition-colors duration-300 group-hover:text-[#0891b2]">
          <button
            type="button"
            onClick={() => onOpen(tour.slug)}
            className="cursor-pointer text-left after:absolute after:inset-0 after:z-10 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-[#094d6e]"
          >
            {tour.title}
          </button>
        </h3>

        <p className="mb-6 mt-4 line-clamp-3 text-sm font-light leading-relaxed text-[#1b4363] md:text-base">
          {tour.shortDescription}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-[#094d6e]/10 pt-5">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="mb-0.5 text-[9px] font-bold uppercase tracking-widest text-[#52718a]">Pace</span>
              <span className="text-xs font-bold text-[#082842]">{tour.difficulty}</span>
            </div>
            {tour.groupType && (
              <div className="flex flex-col">
                <span className="mb-0.5 text-[9px] font-bold uppercase tracking-widest text-[#52718a]">Style</span>
                <span className="text-xs font-bold text-[#082842]">{tour.groupType}</span>
              </div>
            )}
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#094d6e] transition-colors duration-300 group-hover:text-[#0891b2]">
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </div>
  </article>
);