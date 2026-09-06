import React, { Suspense, lazy, useState, useEffect, useRef, useCallback } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import anime from 'animejs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { hasSeenIntro } from './lib/intro';
import PageSkeleton from './components/PageSkeleton';
import { prefersReducedMotion } from './lib/motion';
import { SKELETON_VARIANTS, keyFor, pathFor, titleFor } from './routes';

// Home ships with the shell — it is what most visitors land on. Every other
// page is its own chunk, fetched when first visited. This is what the page
// skeleton is actually covering: a real network fetch, not a timer.
import HomePage from './pages/HomePage';
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const AccreditationPage = lazy(() => import('./pages/AccreditationPage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const AchievementsPage = lazy(() => import('./pages/AchievementsPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const MediaPage = lazy(() => import('./pages/MediaPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const CertificationApplyPage = lazy(() => import('./pages/CertificationApplyPage'));

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPreloader, setShowPreloader] = useState(() => !hasSeenIntro());
  const mainRef = useRef(null);
  const isFirstRoute = useRef(true);

  const activePage = keyFor(location.pathname);
  const skeleton = <PageSkeleton variant={SKELETON_VARIANTS[activePage] || 'grid'} />;

  /**
   * Pages and the nav still call `setActivePage('about')`; that key is simply
   * translated into a URL here, so no page component had to change.
   */
  const handlePageChange = useCallback(
    (key) => {
      const next = pathFor(key);
      if (next !== location.pathname) navigate(next);
    },
    [navigate, location.pathname]
  );

  // Title per route, so tabs, bookmarks and search results are meaningful.
  useEffect(() => {
    document.title = titleFor(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (isFirstRoute.current) {
      isFirstRoute.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  useEffect(() => {
    if (showPreloader || !mainRef.current) return;

    if (prefersReducedMotion()) {
      anime.set(mainRef.current, { opacity: 1, translateY: 0 });
      return;
    }

    anime({
      targets: mainRef.current,
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 400,
      easing: 'easeOutCubic',
    });
  }, [location.pathname, showPreloader]);

  const nav = handlePageChange;

  return (
    <>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      {!showPreloader && (
        <div className="min-h-screen flex flex-col font-sans text-slate-800 selection:bg-ica-gold selection:text-ica-blue-dark">
          <Navbar activePage={activePage} />
          <main ref={mainRef} className="flex-grow pt-0" style={{ opacity: 0 }}>
            {/* Keyed on the path so switching routes remounts the boundary and
                the skeleton shows for each new chunk, not just the first. */}
            <Suspense key={location.pathname} fallback={skeleton}>
              <Routes>
                <Route path="/" element={<HomePage setActivePage={nav} />} />
                <Route path="/about" element={<AboutPage setActivePage={nav} />} />
                <Route path="/programs" element={<ProgramsPage setActivePage={nav} />} />
                <Route path="/certification" element={<ProgramsPage setActivePage={nav} />} />
                <Route path="/certification/apply" element={<CertificationApplyPage setActivePage={nav} />} />
                <Route path="/accreditation" element={<AccreditationPage setActivePage={nav} />} />
                <Route path="/research" element={<ResearchPage setActivePage={nav} />} />
                <Route path="/events" element={<EventsPage setActivePage={nav} />} />
                <Route path="/achievements" element={<AchievementsPage setActivePage={nav} />} />
                <Route path="/partners" element={<PartnersPage setActivePage={nav} />} />
                <Route path="/media" element={<MediaPage setActivePage={nav} />} />
                <Route path="/resources" element={<ResourcesPage setActivePage={nav} />} />
                <Route path="/contact" element={<ContactPage setActivePage={nav} />} />
                {/* Unknown URL: send people home rather than showing nothing. */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
