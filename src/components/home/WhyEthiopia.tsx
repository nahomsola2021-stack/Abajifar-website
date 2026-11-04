import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, Compass, Sparkles, Mountain, Flame, Users, Coffee } from 'lucide-react';

export const WhyEthiopia: React.FC = () => {
  const { navigate } = useRouter();

  const pillars = [
    {
      stat: '3,000+',
      label: 'Years Sovereign Antiquity',
      desc: 'Never colonized. Ancient living Orthodox liturgies, rock-hewn monolithic churches, and imperial castles.',
      image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789938241/n79pjzdjboazxhpumypb.jpg',
      slug: '/destinations/northern-historic-route',
      icon: Sparkles,
      tag: 'Living Antiquity'
    },
    {
      stat: '4,550m',
      label: 'To -125m Depression',
      desc: 'Serrated Simien alpine precipices dropping directly to the active lava calderas of Erta Ale and Dallol.',
      image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789689878/juflmufrwax6lbsh02ei.jpg',
      slug: '/destinations/danakil-depression',
      icon: Flame,
      tag: 'Tectonic Rift'
    },
    {
      stat: '80+',
      label: 'Living Tribal Traditions',
      desc: 'Ancestral ceremonies, riverbank artistry, and centuries-old cultural resilience across the Great Omo Basin.',
      image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1790794223/ew2sbgjgg9ayxmuphpmf.jpg',
      slug: '/destinations/omo-valley',
      icon: Users,
      tag: 'Human Mosaic'
    },
    {
      stat: 'Origin',
      label: 'Wild Arabica Cradle',
      desc: 'Ancient primary cloud forests of Kaffa and royal diplomatic heritage in Jimma, the cradle of world coffee.',
      image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1790794217/ttryrjakqmofk7xmue0j.jpg',
      slug: '/tours',
      icon: Coffee,
      tag: 'Botanical Sanctuary'
    }
  ];

  return (
    <section
      className="py-20 sm:py-28 grad-why-ethiopia text-[#082842] relative"
      style={{
        background:
          'radial-gradient(ellipse at 85% 15%, rgba(6, 182, 212, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 15% 85%, rgba(14, 165, 233, 0.06) 0%, transparent 55%), linear-gradient(135deg, #ffffff 0%, #f4f9fd 50%, #f9fcfe 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0891b2] mb-2.5">
              <Compass className="w-4 h-4 text-[#0891b2]" />
              <span>Sovereign Identity & Geography</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#082842] tracking-tight leading-[1.1]">
              WHY ETHIOPIA
            </h2>
            <p className="mt-2.5 text-lg sm:text-xl text-[#1a4b70] font-light italic font-serif leading-[1.7] max-w-2xl">
              An untamed kingdom of geological extremes, continuous imperial memory, and living ancestral faith.
            </p>
          </div>
          <button
            onClick={() => navigate('/destinations')}
            className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#094d6e] hover:text-[#0891b2] transition-colors cursor-pointer self-start md:self-end"
          >
            <span>Discover the Four Frontiers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Large Visual Pillars in Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => navigate(item.slug)}
                className="group relative rounded-3xl overflow-hidden h-[420px] sm:h-[460px] border border-white/20 shadow-xl cursor-pointer bg-[#24211d] flex flex-col justify-between p-7 hover:-translate-y-1.5 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/15 opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Top Stat & Tag (Zero Pills) */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="font-mono text-3xl sm:text-4xl font-black text-[#67e8f9] tracking-tight">
                    {item.stat}
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-cyan-400/25 text-[#22d3ee]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="relative z-10 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#67e8f9] block">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-100 font-light leading-[1.7] line-clamp-3">
                    {item.desc}
                  </p>
                  <div className="pt-2 text-xs font-bold uppercase tracking-wider text-[#67e8f9] flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                    <span>Explore Route</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
