import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';

const PHONES = [
  { display: '+251 933 333 338', href: 'tel:+251933333338' },
  { display: '+251 944 444 447', href: 'tel:+251944444447' },
  { display: '+251 944 444 448', href: 'tel:+251944444448' }
];

interface EnquiryCardProps {
  eyebrow: string;
  title: string;
  text: string;
  /** Passed to the inquiry modal, e.g. "Tour: Historic Route" */
  topic: string;
  ctaLabel: string;
  whatsappText: string;
}

/** Dark enquiry panel used in the sidebar of the detail pages. */
export const EnquiryCard: React.FC<EnquiryCardProps> = ({ eyebrow, title, text, topic, ctaLabel, whatsappText }) => {
  const { openInquiryModal } = useRouter();

  return (
    <div
      className="space-y-6 rounded-3xl border border-white/10 p-7 text-white shadow-2xl"
      style={{
        background:
          'radial-gradient(ellipse at 90% 0%, rgba(34, 211, 238, 0.22) 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(212, 175, 55, 0.16) 0%, transparent 55%), #0b2540'
      }}
    >
      <div>
        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">{eyebrow}</span>
        <h3 className="mt-2 font-display text-2xl font-bold leading-tight">{title}</h3>
        <p className="mt-2 text-sm font-light leading-[1.7] text-white/75">{text}</p>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => openInquiryModal(topic)}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#D4AF37] py-3.5 text-sm font-bold text-[#0b2540] shadow-lg shadow-[#D4AF37]/25 transition-all hover:bg-[#e6c35a] sm:text-base"
        >
          <span>{ctaLabel}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
        <a
          href={`https://wa.me/251944444447?text=${encodeURIComponent(whatsappText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#1ebe5b] sm:text-base"
        >
          <MessageSquare className="h-4 w-4" />
          <span>WhatsApp us</span>
        </a>
      </div>

      <ul className="space-y-2 border-t border-white/10 pt-5">
        {PHONES.map((phone) => (
          <li key={phone.href}>
            <a href={phone.href} className="flex items-center gap-3 text-sm text-white/85 transition-colors hover:text-white">
              <Phone className="h-4 w-4 text-[#D4AF37]" />
              <span className="font-mono font-bold tabular-nums">{phone.display}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};