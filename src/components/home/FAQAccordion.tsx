import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { faqData } from '../../data/faqData';
import { ArrowRight, ChevronDown } from 'lucide-react';

const featuredFaqIds = [
  'ethiopia-evisa-application',
  'best-time-to-visit-ethiopia',
  'safety-and-security-protocols',
  'health-altitude-acclimatization',
  'cultural-etiquette-and-dress-code'
];

const featuredFaqs = featuredFaqIds
  .map((id) => faqData.find((faq) => faq.id === id))
  .filter((faq) => faq !== undefined);

export const FAQAccordion: React.FC = () => {
  const { openInquiryModal } = useRouter();
  const [openId, setOpenId] = useState('ethiopia-evisa-application');

  return (
    <section id="faq" className="bg-white pb-24 pt-14 text-[#082842] sm:pb-28 sm:pt-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-14">
        <div className="lg:col-span-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0891b2]">A few things to know</p>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Before you go.</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#1a4b70]">
            Quick answers to the questions travelers ask most.
          </p>
          <button
            type="button"
            onClick={() => openInquiryModal()}
            className="group mt-6 inline-flex items-center gap-2 border-b border-[#094d6e]/40 pb-1 text-sm font-semibold text-[#094d6e] transition-colors hover:border-[#0891b2] hover:text-[#0891b2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#094d6e]"
          >
            Ask us a question
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="lg:col-span-8">
          {featuredFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-[#094d6e]/15 first:border-t">
                <button
                  type="button"
                  onClick={() => setOpenId((current) => current === faq.id ? '' : faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#094d6e] sm:py-5"
                >
                  <span className="w-7 shrink-0 text-xs font-semibold tabular-nums text-[#0891b2]">0{index + 1}</span>
                  <span className="flex-1">
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#52718a]">{faq.categoryLabel}</span>
                    <span className="block font-display text-base font-medium leading-snug text-[#082842] sm:text-lg">{faq.question}</span>
                  </span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-[#52718a] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <p className="pb-5 pl-11 pr-8 text-sm leading-6 text-[#1a4b70] sm:pb-6">
                    {faq.summary ?? faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};