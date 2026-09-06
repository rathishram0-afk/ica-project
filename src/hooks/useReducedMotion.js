import { useEffect, useState } from 'react';
import { onMotionPreferenceChange, prefersReducedMotion } from '../lib/motion';

/**
 * useReducedMotion — re-renders when the user's motion preference changes,
 * so a component can pick its still variant without a reload.
 */
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(prefersReducedMotion);
  useEffect(() => onMotionPreferenceChange(setReduced), []);
  return reduced;
}
