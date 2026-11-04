import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Quote, ArrowRight, Compass } from 'lucide-react';

export const TravelInspiration: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      className="py-20 sm:py-24 relative overflow-hidden grad-field-notes"
      style={{
        background:
          'radial-gradient(ellipse at 15% 40%, rgba(34, 211, 238, 0.09) 0%, transparent 55%), linear-gradient(135deg, #ffffff 0%, #f2f8fd 50%, #f7fbfe 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Standardized display heading font scale */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0891b2] mb-2.5">
              <Compass className="w-4 h-4 text-[#0891b2]" />
              <span>Editorial</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#082842] tracking-tight leading-[1.1]">
              FIELD NOTES
            </h2>
            <p className="mt-2.5 text-lg sm:text-xl text-[#1a4b70] font-light italic font-serif leading-[1.7]">
              Voices from the highland and the rift.
            </p>
          </div>
        </div>

        {/* 2 Cinematic Split Field Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div
            onClick={() => navigate('/destinations/northern-historic-route')}
            className="group relative rounded-3xl overflow-hidden h-[400px] sm:h-[440px] border border-cyan-800/15 shadow-2xl cursor-pointer bg-[#063044] flex flex-col justify-end p-7 sm:p-9"
          >
            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=85"
              alt="Lalibela morning light"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#052636] via-[#074766]/60 to-transparent opacity-95 group-hover:opacity-85 transition-opacity" />

            <div className="relative z-10 space-y-3">
              <Quote className="w-8 h-8 text-[#22d3ee] opacity-80" />
              <blockquote className="font-display text-xl sm:text-2xl md:text-3xl text-white font-bold italic leading-[1.7]">
                “When you step into the stone chasm of Bet Giyorgis at dawn, you are entering a living sanctuary carved from faith and volcanic rock.”
              </blockquote>
              <div className="text-xs sm:text-sm font-bold text-[#67e8f9] pt-2 border-t border-cyan-400/20 flex items-center justify-between">
                <span>Lalibela Highlands · Yohannes Kebede</span>
                <span className="flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                  Explore Route <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate('/destinations/danakil-depression')}
            className="group relative rounded-3xl overflow-hidden h-[400px] sm:h-[440px] border border-cyan-800/15 shadow-2xl cursor-pointer bg-[#063044] flex flex-col justify-end p-7 sm:p-9"
          >
            <img
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85"
              alt="Danakil lava glow"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#052636] via-[#074766]/60 to-transparent opacity-95 group-hover:opacity-85 transition-opacity" />

            <div className="relative z-10 space-y-3">
              <Quote className="w-8 h-8 text-[#22d3ee] opacity-80" />
              <blockquote className="font-display text-xl sm:text-2xl md:text-3xl text-white font-bold italic leading-[1.7]">
                “Standing at the rim of Erta Ale as crimson magma churns in the dark feels like observing the very creation of our planet.”
              </blockquote>
              <div className="text-xs sm:text-sm font-bold text-[#67e8f9] pt-2 border-t border-cyan-400/20 flex items-center justify-between">
                <span>Danakil Caldera · Afar Expedition</span>
                <span className="flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                  Explore Route <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
