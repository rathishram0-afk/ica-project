import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../lib/motion';

/**
 * useParallax — scroll-driven translation at a given speed factor.
 *
 * @param {number} speed - Multiplier (0.1 = slow, 0.5 = medium). Negative = reverse.
 * @param {string} direction - 'vertical' | 'horizontal' (default 'vertical')
 */
export default function useParallax(speed = 0.3, direction = 'vertical') {
  const ref = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Parallax is motion; a visitor who asked for less of it keeps the
    // element exactly where the stylesheet put it.
    if (prefersReducedMotion()) return;

    // Whatever transform the element already carries (a Tailwind
    // `-translate-y-1/2`, say) has to be preserved. Writing style.transform
    // replaces the class-based one outright, which silently knocked the hero
    // cube several hundred pixels down and out of its clipped container.
    const baseTransform = getComputedStyle(el).transform;
    const base = baseTransform && baseTransform !== 'none' ? `${baseTransform} ` : '';

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Only calculate when element is near or in viewport
          if (rect.bottom > -200 && rect.top < windowHeight + 200) {
            const scrolled = (windowHeight - rect.top) * speed;

            if (direction === 'vertical') {
              el.style.transform = `${base}translate3d(0, ${scrolled}px, 0)`;
            } else {
              el.style.transform = `${base}translate3d(${scrolled}px, 0, 0)`;
            }
          }
          ticking.current = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return ref;
}
