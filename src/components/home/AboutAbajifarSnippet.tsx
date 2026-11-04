import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, Compass, Shield, Award } from 'lucide-react';

export const AboutAbajifarSnippet: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      className="py-20 sm:py-28 grad-about-snippet text-[#082842] relative"
      style={{
        background:
          'radial-gradient(ellipse at 85% 30%, rgba(6, 182, 212, 0.07) 0%, transparent 55%), linear-gradient(135deg, #ffffff 0%, #f5f9fd 50%, #f9fcfe 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Huge Editorial Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden h-[420px] sm:h-[480px] border border-cyan-800/15 shadow-2xl bg-[#063044]">
              <img
                src="https://res.cloudinary.com/dw1ohipim/image/upload/v1790794221/lfdiib7dtddjqat9n4xz.jpg"
                alt="Expedition in the Ethiopian highlands"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052636] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-sm sm:text-base text-cyan-100 font-serif italic">
                Named after King Abba Jifar II of Jimma — hospitality, diplomacy, and pride.
              </div>
            </div>
          </div>

          {/* Right: Short, Powerful Narrative - Bigger font sizes */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0891b2]">
              <Compass className="w-4 h-4 text-[#0891b2]" />
              <span>Identity</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#082842] tracking-tight leading-[1.1]">
              ABOUT ABAJIFAR
            </h2>

            <p className="text-xl sm:text-2xl md:text-3xl text-[#123e60] font-light italic font-serif leading-[1.7]">
              Travel deeper. Experience Ethiopia.
            </p>

            <p className="text-base sm:text-lg text-[#1b4363] font-light leading-[1.7] max-w-xl">
              Rooted in Addis Ababa and Jimma, we design private expeditions led by licensed resident master guides and chauffeured in custom 4WD Toyota Land Cruisers. We prioritize depth, safety, and community dignity.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#0891b2]/20 shadow-sm">
                <Shield className="w-5 h-5 text-[#0891b2] mb-1.5" />
                <span className="font-bold text-[#082842] text-sm sm:text-base block">Ethical Access</span>
                <span className="text-xs sm:text-sm text-[#204a6b] font-light leading-[1.7]">Direct local community support</span>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#0891b2]/20 shadow-sm">
                <Award className="w-5 h-5 text-[#0891b2] mb-1.5" />
                <span className="font-bold text-[#082842] text-sm sm:text-base block">Private 4WD Fleet</span>
                <span className="text-xs sm:text-sm text-[#204a6b] font-light leading-[1.7]">Customized safari Land Cruisers</span>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#094d6e] hover:bg-[#08608a] text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-xl cursor-pointer"
              >
                <span>Read Visual Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
