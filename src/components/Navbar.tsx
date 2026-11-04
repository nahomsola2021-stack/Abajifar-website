import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { destinationsData } from '../data/destinationsData';
import { toursData } from '../data/toursData';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/251944444448?text=Hello%20Abajifar%2C%20I%27d%20like%20to%20plan%20a%20trip%20to%20Ethiopia.';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

interface MenuEntry {
  label: string;
  path: string;
  meta?: string;
}

interface NavLink {
  label: string;
  path: string;
  menu?: MenuEntry[];
}

const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Destinations',
    path: '/destinations',
    menu: destinationsData.map((item) => ({
      label: item.name,
      path: `/destinations/${item.slug}`,
      meta: item.region
    }))
  },
  {
    label: 'Tours',
    path: '/tours',
    menu: toursData.map((item) => ({
      label: item.title,
      path: `/tours/${item.slug}`,
      meta: `${item.durationDays} days`
    }))
  },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export const Navbar: React.FC = () => {
  const { currentPath, navigate, openInquiryModal } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const navRef = useRef<HTMLElement>(null);

  // Scroll state
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 25);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [currentPath]);

  // Escape closes menus; outside tap closes dropdowns (touch tablets have no hover)
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpenDropdown(null);
      setMobileMenuOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenDropdown(null);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  // Lock page scroll behind the mobile menu; close it if the window grows to desktop width
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const media = window.matchMedia('(min-width: 768px)');
    const onChange = () => media.matches && setMobileMenuOpen(false);
    media.addEventListener('change', onChange);
    return () => {
      document.body.style.overflow = previous;
      media.removeEventListener('change', onChange);
    };
  }, [mobileMenuOpen]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  // Hover intent: a short grace period stops the dropdown flickering shut
  const openMenu = (path: string) => {
    window.clearTimeout(closeTimer.current);
    setOpenDropdown(path);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 140);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  };

  const isCurrentActive = (path: string) => (path === '/' ? currentPath === '/' : currentPath.startsWith(path));

  const solid = isScrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 motion-reduce:transition-none ${
        solid
          ? 'border-[#D4AF37]/25 bg-[#082842]/95 py-3 shadow-xl shadow-[#020c17]/30'
          : 'border-white/10 bg-[#06182b]/70 py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <button
            onClick={() => handleNavClick('/')}
            className="group flex cursor-pointer items-center text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
            aria-label="Abajifar Tour and Travel Home"
          >
            <img
              src="/images/Abajifar Tour and Travel Logo.png"
              alt="Abajifar Tour and Travel"
              className="h-12 w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:max-w-[220px]"
            />
          </button>

          {/* Desktop navigation */}
          <nav ref={navRef} aria-label="Main" className="hidden items-center gap-7 text-base font-semibold md:flex lg:gap-9 lg:text-[16.5px]">
            {navLinks.map((item) => {
              const active = isCurrentActive(item.path);
              const linkColor = active ? 'text-white' : 'text-slate-200 hover:text-white';
              const underline = (
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 origin-left rounded-full bg-gradient-to-r from-[#22d3ee] to-[#D4AF37] transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'
                  }`}
                />
              );

              if (item.menu) {
                const isOpen = openDropdown === item.path;
                const menuId = `nav-menu-${item.path.slice(1)}`;
                return (
                  <div key={item.path} className="relative" onMouseEnter={() => openMenu(item.path)} onMouseLeave={scheduleClose}>
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(isOpen ? null : item.path)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={menuId}
                      className={`group/link relative inline-flex cursor-pointer items-center gap-1.5 py-1.5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] ${linkColor}`}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                      {underline}
                    </button>

                    <div
                      className={`absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3 transition-all duration-200 motion-reduce:transition-none ${
                        isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
                      }`}
                    >
                      <div
                        id={menuId}
                        role="menu"
                        aria-label={`${item.label} menu`}
                        className="max-h-[70vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#082842]/98 p-2 text-sm text-white shadow-2xl shadow-[#020c17]/50 backdrop-blur-xl"
                      >
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => handleNavClick(item.path)}
                          className="group/all mb-1 flex w-full cursor-pointer items-center justify-between rounded-xl border-b border-white/10 px-4 py-3 text-left font-bold text-[#D4AF37] transition-colors hover:bg-white/10"
                        >
                          <span>All {item.label.toLowerCase()}</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/all:translate-x-1" />
                        </button>
                        {item.menu.map((entry) => {
                          const entryActive = currentPath === entry.path;
                          return (
                            <button
                              key={entry.path}
                              type="button"
                              role="menuitem"
                              onClick={() => handleNavClick(entry.path)}
                              className={`flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl px-4 py-2.5 text-left transition-colors hover:bg-white/10 hover:text-[#67e8f9] ${
                                entryActive ? 'bg-white/5 text-[#67e8f9]' : 'text-white/90'
                              }`}
                            >
                              <span className="min-w-0 flex-1 truncate">{entry.label}</span>
                              {entry.meta && (
                                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-white/45">
                                  {entry.meta}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  aria-current={active ? 'page' : undefined}
                  className={`group/link relative cursor-pointer py-1.5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] ${linkColor}`}
                >
                  {item.label}
                  {underline}
                </button>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex lg:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              title="Chat with us on WhatsApp"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-3.5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#020c17]/25 transition-all duration-200 hover:scale-[1.03] hover:bg-[#1ebe5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:px-4 lg:text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>

            <button
              onClick={() => openInquiryModal()}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-2.5 text-sm font-bold text-[#0b2540] shadow-lg shadow-[#D4AF37]/25 transition-all duration-200 hover:scale-[1.03] hover:bg-[#e6c35a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:px-6 lg:text-base"
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile: quick WhatsApp + menu toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md transition-colors hover:bg-[#1ebe5b]"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="cursor-pointer rounded-xl p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu (animated open/close) */}
        <div
          id="mobile-menu"
          aria-hidden={!mobileMenuOpen}
          className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none md:hidden ${
            mobileMenuOpen ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="max-h-[calc(100svh-5.5rem)] space-y-4 overflow-y-auto pb-6 pt-5">
              <div className="flex flex-col gap-1">
                {navLinks.map((item) => {
                  const active = isCurrentActive(item.path);

                  if (item.menu) {
                    const isOpen = mobileExpanded === item.path;
                    return (
                      <div key={item.path}>
                        <button
                          type="button"
                          onClick={() => setMobileExpanded(isOpen ? null : item.path)}
                          aria-expanded={isOpen}
                          className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold transition-colors hover:bg-white/10 ${
                            active ? 'text-[#67e8f9]' : 'text-slate-100'
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="ml-4 border-l border-[#D4AF37]/30 pl-3">
                            <button
                              type="button"
                              onClick={() => handleNavClick(item.path)}
                              className="w-full rounded-lg px-3 py-2.5 text-left text-sm font-bold text-[#D4AF37] hover:bg-white/10"
                            >
                              All {item.label.toLowerCase()}
                            </button>
                            {item.menu.map((entry) => (
                              <button
                                key={entry.path}
                                type="button"
                                onClick={() => handleNavClick(entry.path)}
                                className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-white/85 hover:bg-white/10 hover:text-white"
                              >
                                <span className="min-w-0 flex-1">{entry.label}</span>
                                {entry.meta && <span className="shrink-0 text-[11px] uppercase tracking-wider text-white/40">{entry.meta}</span>}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <button
                      key={item.path}
                      onClick={() => handleNavClick(item.path)}
                      aria-current={active ? 'page' : undefined}
                      className={`rounded-xl px-4 py-3 text-left text-base font-semibold transition-colors ${
                        active ? 'bg-white/10 text-[#67e8f9]' : 'text-slate-100 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-3 border-t border-white/10 pt-4">
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#1ebe5b]"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openInquiryModal();
                  }}
                  className="w-full cursor-pointer rounded-xl bg-[#D4AF37] py-3.5 text-center text-sm font-bold text-[#0b2540] shadow-lg shadow-[#D4AF37]/20 transition-colors hover:bg-[#e6c35a]"
                >
                  Plan Your Trip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};