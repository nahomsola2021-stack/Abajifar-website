import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { destinationsData } from '../../data/destinationsData';
import { Destination } from '../../types';
import { ArrowRight, Compass, MapPin, Calendar, Mountain, CheckCircle2, X } from 'lucide-react';

export const FeaturedDestinations: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedDestForIntel, setSelectedDestForIntel] = useState<Destination | null>(null);

  const shortDescriptors: Record<string, string> = {
    'northern-historic-route': 'Ancient rock monoliths and sacred 12th-century highland sanctuaries.',
    'omo-valley': 'Living ancestral traditions, body artistry, and great river ceremonies.',
    'danakil-depression': 'Active Erta Ale molten magma and kaleidoscopic hydrothermal mineral springs.',
    'addis-ababa-layover': 'Highland metropolis culture, ancient hominid fossils, and Arabica coffee roots.'
  };

  return (
    <section
      className="py-20 sm:py-28 grad-destinations text-[#082842] relative"
      style={{
        background:
          'radial-gradient(ellipse at 15% 20%, rgba(6, 182, 212, 0.09) 0%, transparent 55%), radial-gradient(ellipse at 85% 80%, rgba(14, 165, 233, 0.07) 0%, transparent 60%), linear-gradient(135deg, #ffffff 0%, #f2f8fc 50%, #f7fbfe 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0891b2] mb-2.5">
              <Compass className="w-4 h-4 text-[#0891b2]" />
              <span>Territories & Frontiers</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#082842] tracking-tight leading-[1.1]">
              DESTINATIONS
            </h2>
            <p className="mt-2.5 text-lg sm:text-xl text-[#1a4b70] font-light italic font-serif leading-[1.7]">
              Four extraordinary geographic realms across Ethiopia.
            </p>
          </div>
          <button
            onClick={() => navigate('/destinations')}
            className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#094d6e] hover:text-[#0891b2] transition-colors group cursor-pointer self-start md:self-end"
          >
            <span>Explore Visual Atlas</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Visually Impressive Destination Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {destinationsData.map((dest, idx) => {
            const descriptor = shortDescriptors[dest.slug] || dest.tagline;
            const colSpan = idx === 0 || idx === 3 ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <div
                key={dest.id}
                className={`group relative rounded-3xl overflow-hidden h-[440px] sm:h-[490px] border border-cyan-800/15 shadow-2xl bg-[#07364d] ${colSpan} flex flex-col justify-between`}
              >
                {/* Full-bleed Photography with Parallax Zoom */}
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out brightness-90"
                />

                {/* Rich Cyan Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#052638] via-[#074766]/40 to-transparent opacity-95 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="home-blue-wash absolute inset-0 bg-[#0891b2]/15 mix-blend-color" />

                {/* Top Number indicator & Quick Intel Trigger */}
                <div className="relative z-10 p-6 flex items-center justify-between">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#67e8f9] bg-[#07364d]/85 backdrop-blur-md px-3 py-1 rounded-xl border border-cyan-400/30 shadow-md">
                    0{idx + 1} · {dest.region.split('&')[0].trim()}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDestForIntel(dest);
                    }}
                    className="text-xs font-semibold text-white bg-black/40 hover:bg-[#094d6e] backdrop-blur-md px-3 py-1 rounded-xl border border-white/20 transition-all cursor-pointer shadow-sm"
                  >
                    Quick Intel
                  </button>
                </div>

                {/* Overlay: Name + descriptor + Action */}
                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end">
                  <div className="space-y-2 mb-4">
                    <h3
                      onClick={() => navigate(`/destinations/${dest.slug}`)}
                      className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight group-hover:text-[#67e8f9] transition-colors cursor-pointer"
                    >
                      {dest.name}
                    </h3>
                    <p className="text-sm sm:text-base text-cyan-100/90 font-light leading-[1.7] line-clamp-2">
                      {descriptor}
                    </p>
                  </div>

                  {/* Clean unboxed metadata footer */}
                  <div className="pt-3 border-t border-cyan-400/20 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-cyan-200/90 flex items-center gap-1.5 font-medium">
                      <Mountain className="w-3.5 h-3.5 text-[#22d3ee]" />
                      <span className="truncate max-w-[200px]">{dest.terrainAltitude.split(';')[0]}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => navigate(`/destinations/${dest.slug}`)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white group-hover:text-[#67e8f9] transition-colors cursor-pointer"
                    >
                      <span>Explore Frontier</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Territory Intel Modal */}
      {selectedDestForIntel && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedDestForIntel(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-cyan-800/20 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedDestForIntel(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-[#094d6e] hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0891b2] block mb-1">
                  Territory Intel Briefing
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#082842]">
                  {selectedDestForIntel.name}
                </h3>
                <p className="text-sm text-[#1e496c] italic font-serif leading-[1.7] mt-1">
                  {selectedDestForIntel.tagline}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#f2f8fc] rounded-2xl border border-cyan-800/10 text-xs sm:text-sm text-[#183e5c]">
                <div>
                  <strong className="block text-[#082842] font-bold mb-0.5">Terrain & Altitude</strong>
                  <span>{selectedDestForIntel.terrainAltitude}</span>
                </div>
                <div>
                  <strong className="block text-[#082842] font-bold mb-0.5">Optimal Season</strong>
                  <span>{selectedDestForIntel.bestTimeToVisit}</span>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#094d6e] block mb-2">
                  Key Territory Highlights
                </span>
                <div className="space-y-2">
                  {selectedDestForIntel.keyHighlights.slice(0, 3).map((kh, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#0891b2] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#082842] block">{kh.title}</span>
                        <span className="text-xs text-[#2a5477] leading-[1.7]">{kh.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedDestForIntel(null)}
                  className="px-4 py-2 text-xs font-bold text-[#2a5477] hover:text-[#082842] cursor-pointer"
                >
                  Close Brief
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate(`/destinations/${selectedDestForIntel.slug}`);
                    setSelectedDestForIntel(null);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#094d6e] hover:bg-[#08608a] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <span>Explore Full Visual Atlas</span>
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
