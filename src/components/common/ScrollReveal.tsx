import React from 'react';
import { useScrollReveal, type UseScrollRevealOptions } from '../../hooks/useScrollReveal';

export interface ScrollRevealProps extends UseScrollRevealOptions {
  children: React.ReactNode;
  className?: string;
  duration?: number; // Duration in milliseconds
  distance?: number; // Slide distance in pixels
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  as?: 'div' | 'section' | 'article' | 'aside' | 'main' | 'header';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 750,
  direction = 'up',
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  as: Component = 'div'
}) => {
  const { ref, isVisible } = useScrollReveal({
    threshold,
    rootMargin,
    triggerOnce,
    delay
  });

  // Translate classes using standard Tailwind animation utilities
  const getMotionClasses = () => {
    if (isVisible) {
      return 'opacity-100 translate-y-0 translate-x-0';
    }

    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-8';
      case 'down':
        return 'opacity-0 -translate-y-8';
      case 'left':
        return 'opacity-0 translate-x-8';
      case 'right':
        return 'opacity-0 -translate-x-8';
      case 'none':
      default:
        return 'opacity-0';
    }
  };

  return (
    <Component
      ref={ref as any}
      className={`transition-all ease-out will-change-transform ${getMotionClasses()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
