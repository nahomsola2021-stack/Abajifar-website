import { useEffect, useRef, useState, type RefObject } from 'react';

export interface UseScrollRevealOptions {
  /**
   * The percentage of the target element's visibility needed to trigger the reveal (0.0 to 1.0).
   * @default 0.12
   */
  threshold?: number | number[];
  /**
   * Margin around the root element. Useful for triggering earlier or later (e.g. '-40px' offsets).
   * @default '0px 0px -40px 0px'
   */
  rootMargin?: string;
  /**
   * Whether the animation should trigger only once or repeat on subsequent scroll-ins.
   * @default true
   */
  triggerOnce?: boolean;
  /**
   * Optional root element for intersection checking. Defaults to the browser viewport.
   */
  root?: Element | Document | null;
  /**
   * Optional delay in milliseconds before `isVisible` flips to true once intersecting.
   * @default 0
   */
  delay?: number;
}

export interface UseScrollRevealReturn<T extends HTMLElement> {
  ref: RefObject<T | null>;
  isVisible: boolean;
  /**
   * Standard pre-composed Tailwind transition classes for smooth luxury reveals.
   */
  transitionClasses: string;
  /**
   * Tailwind classes reflecting current state:
   * `opacity-100 translate-y-0` when visible, `opacity-0 translate-y-8` when hidden.
   */
  animationClasses: string;
  /**
   * Enables array destructuring: `const [ref, isVisible] = useScrollReveal();`
   */
  [Symbol.iterator](): IterableIterator<RefObject<T | null> | boolean>;
}

/**
 * Custom React hook that uses the browser IntersectionObserver API to detect
 * when an element enters the viewport.
 *
 * Returns a `ref` and an `isVisible` boolean state, which can be used to apply
 * Tailwind classes like `opacity-0 translate-y-8` and `opacity-100 translate-y-0`
 * with smooth transitions.
 *
 * @example
 * ```tsx
 * const { ref, isVisible } = useScrollReveal();
 *
 * return (
 *   <div
 *     ref={ref}
 *     className={`transition-all duration-700 ease-out ${
 *       isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
 *     }`}
 *   >
 *     Content
 *   </div>
 * );
 * ```
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  root = null,
  delay = 0
}: UseScrollRevealOptions = {}): UseScrollRevealReturn<T> {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect user's reduced motion accessibility preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    // Fallback if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    let timeoutId: number | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              timeoutId = window.setTimeout(() => {
                setIsVisible(true);
              }, delay);
            } else {
              setIsVisible(true);
            }

            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            if (timeoutId) {
              window.clearTimeout(timeoutId);
            }
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
        root
      }
    );

    observer.observe(node);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      observer.unobserve(node);
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, root, delay]);

  const transitionClasses =
    'transition-all duration-700 ease-out will-change-transform';
  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0 pointer-events-auto'
    : 'opacity-0 translate-y-8 pointer-events-none';

  return {
    ref,
    isVisible,
    transitionClasses,
    animationClasses,
    *[Symbol.iterator]() {
      yield ref;
      yield isVisible;
    }
  };
}

export default useScrollReveal;
