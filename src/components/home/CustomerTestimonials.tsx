import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { testimonialsData, testimonialStats } from '../../data/testimonialsData';
import { Testimonial } from '../../types';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Star } from 'lucide-react';

export const CustomerTestimonials: React.FC = () => {
  const { navigate } = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const currentStory: Testimonial = testimonialsData[activeIndex];

  const getInitials = (name: string) => {
    const parts = name.replace(/Dr\.|Prof\./g, '').trim().split(' ');
    return parts.length > 1
      ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
      : name.slice(0, 2).toUpperCase();
  };

  const selectStory = (offset: number) => {
    setActiveIndex((index) => (index + offset + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="bg-[#f2f8fc] py-16 text-[#082842] sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        <div className="mb-8 flex flex-col justify-between gap-5 border-b border-[#094d6e]/15 pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0891b2]">Notes from the road</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">The moments stay with you.</h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#1a4b70]">
            <span className="font-semibold text-[#082842]">{testimonialStats.averageRating}</span>
            <span className="flex items-center gap-0.5 text-[#b77835]" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span>{testimonialStats.totalReviews} traveler reviews</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="flex items-start gap-4 md:col-span-4 md:border-r md:border-[#094d6e]/15 md:pr-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#094d6e] text-sm font-semibold text-white">
              {!imageErrors[currentStory.id] ? (
                <img
                  src={currentStory.avatar}
                  alt=""
                  referrerPolicy="no-referrer"
                  onError={() => setImageErrors((errors) => ({ ...errors, [currentStory.id]: true }))}
                  className="h-full w-full object-cover"
                />
              ) : (
                getInitials(currentStory.author)
              )}
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-lg font-semibold leading-tight">{currentStory.author}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-[#52718a]">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>{currentStory.location}</span>
              </p>
              <p className="mt-3 text-xs text-[#52718a]">{currentStory.travelDate}</p>
              <p className="mt-4 max-w-xs text-sm font-medium leading-5 text-[#1a4b70]">{currentStory.tourTitle}</p>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="mb-4 flex items-center gap-1 text-[#b77835]" aria-label={`${currentStory.rating} out of 5 stars`}>
              {[...Array(currentStory.rating)].map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="font-display text-xl leading-relaxed text-[#123e60] sm:text-2xl">
              &ldquo;{currentStory.reviewText}&rdquo;
            </blockquote>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#094d6e]/15 pt-4">
              <button
                type="button"
                onClick={() => navigate(`/tours/${currentStory.tourSlug}`)}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#094d6e] transition-colors hover:text-[#0891b2]"
              >
                View this journey
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <div className="flex items-center gap-3 text-xs font-medium text-[#52718a]">
                <span>{String(activeIndex + 1).padStart(2, '0')} / {String(testimonialsData.length).padStart(2, '0')}</span>
                <button
                  type="button"
                  onClick={() => selectStory(-1)}
                  aria-label="Previous traveler story"
                  className="p-2 text-[#1a4b70] transition-colors hover:text-[#0891b2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#094d6e]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => selectStory(1)}
                  aria-label="Next traveler story"
                  className="p-2 text-[#1a4b70] transition-colors hover:text-[#0891b2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#094d6e]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};