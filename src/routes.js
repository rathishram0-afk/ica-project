/**
 * Route table — the single source of truth for navigation.
 *
 * `key` is the identifier the pages already pass to `setActivePage`, kept so
 * every page component works unchanged. `path` is the real URL, `title` is the
 * document title for that route.
 */
export const ROUTES = [
  { key: 'home',                path: '/',                   title: 'International Cube Academy (ICA) | Global Cognitive & Rubik\'s Cube Education' },
  { key: 'about',               path: '/about',              title: 'About ICA | International Cube Academy' },
  { key: 'programs',            path: '/programs',           title: 'Programs & Certifications | International Cube Academy' },
  { key: 'certification',       path: '/certification',      title: 'Certifications | International Cube Academy' },
  { key: 'certification-apply', path: '/certification/apply',title: 'Apply for Certification | International Cube Academy' },
  { key: 'accreditation',       path: '/accreditation',      title: 'School Accreditation | International Cube Academy' },
  { key: 'research',            path: '/research',           title: 'Research & Innovation | International Cube Academy' },
  { key: 'events',              path: '/events',             title: 'Events & Competitions | International Cube Academy' },
  { key: 'achievements',        path: '/achievements',       title: 'Achievements | International Cube Academy' },
  { key: 'partners',            path: '/partners',           title: 'Partners & Training Centres | International Cube Academy' },
  { key: 'media',               path: '/media',              title: 'Media & Gallery | International Cube Academy' },
  { key: 'resources',           path: '/resources',          title: 'Resources | International Cube Academy' },
  { key: 'contact',             path: '/contact',            title: 'Contact | International Cube Academy' },
];

const BY_KEY = Object.fromEntries(ROUTES.map((r) => [r.key, r]));
const BY_PATH = Object.fromEntries(ROUTES.map((r) => [r.path, r]));

/** Page key -> URL. Unknown keys fall back to home rather than 404-ing. */
export function pathFor(key) {
  return (BY_KEY[key] || BY_KEY.home).path;
}

/** URL -> page key. Trailing slashes are tolerated. */
export function keyFor(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return (BY_PATH[clean] || BY_KEY.home).key;
}

/** URL -> document title. */
export function titleFor(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return (BY_PATH[clean] || BY_KEY.home).title;
}

/** Which skeleton shape each route shows while it swaps in. */
export const SKELETON_VARIANTS = {
  home: 'hero-split',
  about: 'hero-split',
  programs: 'grid',
  certification: 'grid',
  'certification-apply': 'form',
  accreditation: 'grid',
  research: 'grid',
  events: 'grid',
  achievements: 'hero-split',
  partners: 'grid',
  media: 'grid',
  resources: 'grid',
  contact: 'form',
};
