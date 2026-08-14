import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

/**
 * useCountUp — animates a number from 0 to target when scrolled into view.
 *
 * @param {string} target - The target value string, e.g. "15+", "1 Lakh+", "80+", "10K+"
 * @param {number} duration - Animation duration in ms (default 2000)
 */
export default function useCountUp(target, duration = 2000) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Parse the numeric part and suffix
    const match = target.match(/^([\d,.]+)\s*(.*)$/);
    if (!match) {
      setDisplayValue(target);
      return;
    }

    const numericStr = match[1].replace(/,/g, '');
    const numericValue = parseFloat(numericStr);
    const suffix = match[2] || '';

    if (isNaN(numericValue)) {
      setDisplayValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const obj = { value: 0 };
          anime({
            targets: obj,
            value: numericValue,
            duration,
            easing: 'easeOutExpo',
            round: numericValue % 1 === 0 ? 1 : 10,
            update: () => {
              const formatted = numericValue >= 1000
                ? Math.floor(obj.value).toLocaleString()
                : numericValue % 1 === 0
                  ? Math.floor(obj.value).toString()
                  : obj.value.toFixed(1);
              setDisplayValue(formatted + suffix);
            },
          });

          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, displayValue };
}
