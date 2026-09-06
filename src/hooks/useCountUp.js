import { useEffect, useMemo, useRef, useState } from 'react';
import anime from 'animejs';
import useReducedMotion from './useReducedMotion';

/** Render a running or final figure the same way, so the count lands exactly on the target. */
function format(value, numericValue) {
  if (numericValue >= 1000) return Math.floor(value).toLocaleString();
  if (numericValue % 1 === 0) return Math.floor(value).toString();
  return value.toFixed(1);
}

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
  const reduced = useReducedMotion();

  // Parsed during render, not in an effect: whether a target can be counted at
  // all is derivable from the target itself, so an unparseable one shows as-is
  // rather than being written into state on mount.
  const parsed = useMemo(() => {
    const match = String(target).match(/^([\d,.]+)\s*(.*)$/);
    if (!match) return null;
    const numericValue = parseFloat(match[1].replace(/,/g, ''));
    if (Number.isNaN(numericValue)) return null;
    return { numericValue, suffix: match[2] || '' };
  }, [target]);

  useEffect(() => {
    const el = ref.current;
    // Reduced motion needs no observer at all — the final figure is derived
    // below during render.
    if (!el || !parsed || reduced) return;

    const { numericValue, suffix } = parsed;

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
            update: () => setDisplayValue(format(obj.value, numericValue) + suffix),
          });

          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [parsed, duration, reduced]);

  // Everything below is derived, never written into state from an effect:
  //   no numeric part ("Coming soon")  -> show the target verbatim
  //   reduced motion                   -> show the final figure, no ticking
  //   otherwise                        -> show the animated value
  let shown = target;
  if (parsed) {
    shown = reduced
      ? format(parsed.numericValue, parsed.numericValue) + parsed.suffix
      : displayValue;
  }

  return { ref, displayValue: shown };
}
