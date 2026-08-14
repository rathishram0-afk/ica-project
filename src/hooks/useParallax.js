import { useEffect, useRef } from 'react';

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
              el.style.transform = `translate3d(0, ${scrolled}px, 0)`;
            } else {
              el.style.transform = `translate3d(${scrolled}px, 0, 0)`;
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
