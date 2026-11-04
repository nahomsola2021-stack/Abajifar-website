import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://web.facebook.com/AbajifarTourandTravel#', label: 'Facebook' },
  { icon: Twitter, href: 'https://x.com/@AbajifarTour', label: 'X (Twitter)' },
  { icon: Instagram, href: 'https://www.instagram.com/abajifartour/', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UCqqcBCLTibMAj8s7VpGOo9w', label: 'YouTube' }
];

/* Office locations: edit in one place */
const PRIMARY_LOCATION = {
  text: 'Jemo No. 2, Addis Ababa, Ethiopia',
  href: 'https://maps.app.goo.gl/Lceb4WGQwj8gpNxi9'
};
const SECONDARY_LOCATION = {
  text: 'Bole Wello Sefer, Addis Ababa',
  href: 'https://www.google.com/maps/search/?api=1&query=Bole%20Wello%20Sefer%2C%20Addis%20Ababa%2C%20Ethiopia'
};

export const Footer: React.FC = () => {
  const { navigate, openInquiryModal } = useRouter();

  return (
    <footer className="bg-[#07364d] border-t border-cyan-400/20 text-cyan-100 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <img
              src="/images/Abajifar Tour and Travel Logo.png"
              alt="Abajifar Tour and Travel"
              className="h-14 w-auto max-w-[240px] object-contain"
            />
            
            <p className="text-sm text-cyan-200/80 max-w-sm leading-[1.7] font-light">
              Bespoke expeditions across Ethiopia’s northern historic monuments, Omo Valley traditions, and Danakil volcanism.
            </p>
            
            <div className="pt-2">
              <a
                href="https://wa.me/251944444447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-cyan-400/30 text-white text-xs font-bold transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#22d3ee]" />
                <span>WhatsApp: +251 944 444 447</span>
              </a>
            </div>

            {/* Premium Social Media Icons */}
            <div className="pt-4 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-cyan-400/20 text-cyan-300 hover:bg-[#D4AF37] hover:text-[#07364d] hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#67e8f9]">
              Territories
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('/destinations/northern-historic-route')}
                  className="hover:text-white transition-colors text-left"
                >
                  Northern Historic Route
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/destinations/omo-valley')}
                  className="hover:text-white transition-colors text-left"
                >
                  Omo Valley Basin
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/destinations/danakil-depression')}
                  className="hover:text-white transition-colors text-left"
                >
                  Danakil Depression
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/destinations/addis-ababa-layover')}
                  className="hover:text-white transition-colors text-left"
                >
                  Addis Ababa Layover
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#67e8f9]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigate('/')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/destinations')} className="hover:text-white transition-colors">
                  Visual Atlas
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/tours')} className="hover:text-white transition-colors">
                  Tour Gallery
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-white transition-colors">
                  About Abajifar
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const el = document.getElementById('faq');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Travel FAQs
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Operations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#67e8f9]">
              Operations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#22d3ee] shrink-0 mt-0.5" />
                <a
                  href={PRIMARY_LOCATION.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs leading-[1.7] text-cyan-200 hover:text-white transition-colors"
                >
                  {PRIMARY_LOCATION.text}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#22d3ee] shrink-0 mt-0.5" />
                <a
                  href={SECONDARY_LOCATION.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs leading-[1.7] text-cyan-200 hover:text-white transition-colors"
                >
                  {SECONDARY_LOCATION.text}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#22d3ee] shrink-0" />
                <a href="tel:+251933333338" className="hover:text-white font-mono text-xs">
                  +251 933 333 338
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#22d3ee] shrink-0" />
                <a href="tel:+251944444447" className="hover:text-white font-mono text-xs">
                  +251 944 444 447
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#22d3ee] shrink-0" />
                <a href="tel:+251944444448" className="hover:text-white font-mono text-xs">
                  +251 944 444 448
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#22d3ee] shrink-0" />
                <a href="mailto:abajifartourandtravel@gmail.com" className="hover:text-white text-xs">
                  abajifartourandtravel@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyan-400/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cyan-300/70">
          <div>
            © {new Date().getFullYear()} Abajifar Tour and Travel. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => openInquiryModal()} className="hover:text-white transition-colors">
              Plan Your Journey
            </button>
            <span>·</span>
            <button onClick={() => navigate('/destinations')} className="hover:text-white transition-colors">
              Explore Atlas
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};