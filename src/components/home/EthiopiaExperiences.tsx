import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, Compass } from 'lucide-react';

export const EthiopiaExperiences: React.FC = () => {
  const { navigate } = useRouter();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const experiences = [
    {
      label: 'Active Lava & Calderas',
      title: 'Danakil & Erta Ale',
      tagline: 'Boiling magma lake under African night skies and neon hydrothermal pools.',
      image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791931538/d5o6p1xyqw8pjupjetu6.jpg',
      slug: '/destinations/danakil-depression'
    },
    {
      label: 'Subterranean Faith',
      title: 'Lalibela Rock Monoliths',
      tagline: '12th-century cruciform sanctuaries carved out of solid volcanic bedrock.',
      image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789837875/np04lvnvpk0bupwzvdou.jpg',
      slug: '/destinations/northern-historic-route'
    },
    {
      label: 'Living Ceremonies',
      title: 'East & West Omo Valley',
      tagline: 'Ancestral body artistry, river rites, and centuries-old tribal traditions.',
      image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789939716/b3jegopdotjurptpxtsr.jpg',
      slug: '/destinations/omo-valley'
    },
    {
      label: 'Botanical Origins',
      title: 'Arabica Coffee Cloud Forests',
      tagline: 'Ancient wild coffee canopies of Kaffa and sacred roasting rituals.',
      image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791483182/xx38kv7tjgtztu4pj9c1.jpg',
      slug: '/tours'
    },
    {
      label: 'Highland Wildlife',
      title: 'Simien Mountains',
      tagline: 'Dramatic escarpments and rare endemic encounters at the roof of Africa.',
      image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789690665/yil3rx33imxygmhvirkv.jpg',
      slug: '/destinations/historic-north'
    }
  ];

  // Faster Auto-play (Shortened interval to 2000ms)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches || isHovered) return;

    const timer = setInterval(() => {
      setActiveIdx((current) => (current + 1) % experiences.length);
    }, 2000); 

    return () => clearInterval(timer);
  }, [isHovered, experiences.length]);

  const selectScene = (index: number) => {
    setActiveIdx(index);
  };

  const getCardStyle = (index: number) => {
    const total = experiences.length;
    let offset = index - activeIdx;
    
    if (offset > Math.floor(total / 2)) offset -= total;
    if (offset < -Math.floor(total / 2)) offset += total;

    const absOffset = Math.abs(offset);
    const direction = offset > 0 ? 1 : -1;

    const scale = 1 - absOffset * 0.15; 
    const translateX = direction * absOffset * 90; // Adjusted spacing for wider cards
    const zIndex = 50 - absOffset * 10; 
    const brightness = 1 - absOffset * 0.35; 
    const opacity = absOffset > 2 ? 0 : 1; 

    return {
      transform: `translateX(calc(-50% + ${translateX}%)) scale(${scale})`,
      zIndex,
      filter: `brightness(${brightness})`,
      opacity,
    };
  };

  const current = experiences[activeIdx];

  return (
    <section className="aurora py-24 sm:py-32 bg-gradient-to-b from-[#16304f] via-[#0d1f38] to-[#050f1d] relative overflow-hidden flex flex-col items-center">
      
      <div className="text-center mb-16 relative z-10 px-6">
        <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
          <Compass className="w-4 h-4" />
          <span>Sensory Expedition</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
          EXPERIENCES
        </h2>
      </div>

      <div 
        className="relative w-full h-[420px] sm:h-[560px] lg:h-[620px] max-w-7xl mx-auto flex items-center justify-center perspective-[1200px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {experiences.map((exp, index) => {
          const isActive = index === activeIdx;
          
          return (
            <div
              key={exp.title}
              onClick={() => (isActive ? navigate(exp.slug) : selectScene(index))}
              /* Increased width dimensions: w-[320px] -> sm:w-[440px] -> lg:w-[560px] */
              className={`absolute top-0 left-1/2 w-[320px] h-[400px] sm:w-[440px] sm:h-[520px] lg:w-[560px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'cursor-default ring-2 ring-white/20' : 'cursor-pointer hover:shadow-2xl'}`}
              style={getCardStyle(index)}
            >
              <img
                src={exp.image}
                alt={exp.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none" />
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex flex-col items-center text-center max-w-2xl px-6 relative z-10 h-[220px]">
        
        <div key={current.title} className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out flex flex-col items-center w-full">
          
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em] mb-4 drop-shadow-sm">
            {current.label}
          </span>
          
          <h3 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight drop-shadow-md">
            {current.title}
          </h3>
          
          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-md">
            {current.tagline}
          </p>
          
          <button
            onClick={() => navigate(current.slug)}
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-white text-[#1A365D] hover:bg-[#FFF5F5] font-bold text-sm uppercase tracking-widest rounded-full transition-all shadow-[0_8px_25px_-5px_rgba(0,0,0,0.4)] cursor-pointer hover:scale-105"
          >
            <span>Discover</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

        </div>
      </div>

    </section>
  );
};