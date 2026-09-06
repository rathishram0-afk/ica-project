/**
 * Whether the full-screen intro has already played this session.
 *
 * It is a first-impression device, not something a returning visitor should
 * sit through on every load. sessionStorage rather than localStorage, so a
 * fresh visit tomorrow still gets the brand moment.
 */
const SEEN_KEY = 'ica:intro-seen';

export function hasSeenIntro() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    // Private mode or blocked storage: just show the intro.
    return false;
  }
}

export function markIntroSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, '1');
  } catch {
    /* nothing to do — the intro simply shows again */
  }
}
