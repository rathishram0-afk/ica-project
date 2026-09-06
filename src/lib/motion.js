/**
 * Motion preferences.
 *
 * The `prefers-reduced-motion` block in index.css only neutralises CSS
 * animations and transitions. Most of this site's movement comes from
 * anime.js, which CSS cannot reach — so every animated component asks here
 * first and takes a still path when the user has requested less motion.
 *
 * The rule is always the same: skip the movement, never the content. A
 * reduced-motion visitor must end up seeing exactly what everyone else sees,
 * just without the travel.
 */

const QUERY = '(prefers-reduced-motion: reduce)';

/** Read the current preference. Safe before hydration and in older browsers. */
export function prefersReducedMotion() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  return window.matchMedia(QUERY).matches;
}

/**
 * Subscribe to changes in the preference.
 * @param {(reduced: boolean) => void} onChange
 * @returns {() => void} unsubscribe
 */
export function onMotionPreferenceChange(onChange) {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return () => {};
  }
  const mq = window.matchMedia(QUERY);
  const handler = (e) => onChange(e.matches);
  // Safari < 14 only has the deprecated listener API.
  if (mq.addEventListener) {
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }
  mq.addListener(handler);
  return () => mq.removeListener(handler);
}
