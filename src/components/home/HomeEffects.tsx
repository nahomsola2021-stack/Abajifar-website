import React, { RefObject, useEffect, useRef } from 'react';

/* ------------------------------------------------------------------
   SectionDivider
   Sits at the top of a section wrapper and bleeds UP over the bottom edge
   of the previous section. `fill` must be the NEXT section's top colour.
   - wave / curve : layered SVG edge (use when the colour or mood changes)
   - fade         : soft gradient blend (use between two light sections)
------------------------------------------------------------------- */
interface SectionDividerProps {
  fill: string;
  variant?: 'wave' | 'curve' | 'fade';
}

const PATHS = {
  wave: {
    back: 'M0,36 C200,8 420,12 640,44 C860,76 1100,80 1280,50 C1360,36 1410,28 1440,34 L1440,96 L0,96 Z',
    front: 'M0,56 C180,92 360,92 540,60 C720,28 900,16 1080,40 C1260,64 1380,72 1440,56 L1440,96 L0,96 Z'
  },
  curve: {
    back: 'M0,96 L0,56 Q720,-50 1440,56 L1440,96 Z',
    front: 'M0,96 L0,72 Q720,-30 1440,72 L1440,96 Z'
  }
};

export const SectionDivider: React.FC<SectionDividerProps> = ({ fill, variant = 'wave' }) => {
  if (variant === 'fade') {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 z-10 h-[72px]"
        style={{ bottom: 'calc(100% - 1px)', background: `linear-gradient(to bottom, transparent, ${fill})` }}
      />
    );
  }

  const p = PATHS[variant];
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 z-10 leading-[0]"
      style={{ bottom: 'calc(100% - 1px)', height: 'clamp(48px, 7vw, 96px)' }}
    >
      <svg viewBox="0 0 1440 96" preserveAspectRatio="none" className="block h-full w-full">
        <path d={p.back} fill={fill} opacity="0.45" />
        <path d={p.front} fill={fill} />
      </svg>
    </div>
  );
};

/* ------------------------------------------------------------------
   ScrollProgress — thin cyan→gold bar pinned to the top of the viewport
------------------------------------------------------------------- */
export const ScrollProgress: React.FC = () => {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px]">
      <div
        ref={bar}
        className="h-full origin-left bg-gradient-to-r from-[#22d3ee] via-[#D4AF37] to-[#f6e4a6]"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};

/* ------------------------------------------------------------------
   useScrollReveal
   Tags section headings and cards inside `ref` so they ease in once.
   No edits needed in the section files — add `data-reveal-auto` to any
   extra element you want included, or `data-reveal-skip` on a wrapper to
   exclude everything inside it.
------------------------------------------------------------------- */
const REVEAL_SELECTOR = 'h2, .grid > *, .rounded-3xl, [data-reveal-auto]';

export function useScrollReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (
      !root ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute('data-in', '');
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    const siblingCount = new Map<Element, number>();
    root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
      if (el.closest('[data-reveal-skip]')) return;
      const parent = el.parentElement as Element;
      const n = siblingCount.get(parent) ?? 0;
      siblingCount.set(parent, n + 1);
      el.style.setProperty('--reveal-delay', `${Math.min(n, 5) * 90}ms`);
      el.setAttribute('data-reveal', '');
      io.observe(el);
    });

    return () => io.disconnect();
  }, [ref]);
}