import { useEffect, useRef, useCallback } from 'react';
import anime from 'animejs';

/**
 * useScrollReveal — triggers Anime.js animations when elements enter the viewport.
 *
 * @param {Object} options
 * @param {string} options.animation - 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'fadeDown' | 'scaleIn' | 'stagger'
 * @param {number} options.delay - Base delay in ms (default 0)
 * @param {number} options.duration - Animation duration in ms (default 800)
 * @param {number} options.staggerDelay - Delay between staggered children (default 80)
 * @param {number} options.threshold - IntersectionObserver threshold (default 0.15)
 * @param {boolean} options.once - Whether to only animate once (default true)
 */
export default function useScrollReveal({
  animation = 'fadeUp',
  delay = 0,
  duration = 800,
  staggerDelay = 80,
  threshold = 0.15,
  once = true,
} = {}) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const getAnimationProps = useCallback((type) => {
    const base = {
      opacity: [0, 1],
      easing: 'easeOutCubic',
      duration,
      delay,
    };

    switch (type) {
      case 'fadeUp':
        return { ...base, translateY: [40, 0] };
      case 'fadeDown':
        return { ...base, translateY: [-40, 0] };
      case 'fadeLeft':
        return { ...base, translateX: [-50, 0] };
      case 'fadeRight':
        return { ...base, translateX: [50, 0] };
      case 'scaleIn':
        return { ...base, scale: [0.85, 1] };
      case 'stagger':
        return { ...base, translateY: [30, 0], delay: anime.stagger(staggerDelay, { start: delay }) };
      default:
        return base;
    }
  }, [animation, delay, duration, staggerDelay]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial state
    const targets = animation === 'stagger' ? el.children : el;
    anime.set(targets, { opacity: 0 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !(once && hasAnimated.current)) {
          hasAnimated.current = true;
          const props = getAnimationProps(animation);
          anime({
            targets,
            ...props,
          });
          if (once) observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, duration, staggerDelay, threshold, once, getAnimationProps]);

  return ref;
}
