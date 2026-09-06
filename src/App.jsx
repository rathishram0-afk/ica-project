import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import anime from 'animejs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import PageSkeleton from './components/PageSkeleton';
import { prefersReducedMotion } from './lib/motion';
import { SKELETON_VARIANTS, keyFor, pathFor, titleFor } from './routes';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProgramsPage from './pages/ProgramsPage';
import AccreditationPage from './pages/AccreditationPage';
import ResearchPage from './pages/ResearchPage';
import EventsPage from './pages/EventsPage';
import AchievementsPage from './pages/AchievementsPage';
import PartnersPage from './pages/PartnersPage';
import MediaPage from './pages/MediaPage';
import ResourcesPage from './pages/ResourcesPage';
import CertificationApplyPage from './pages/CertificationApplyPage';

/** How long the page skeleton holds before the real page is revealed. */
const SKELETON_HOLD_MS = 420;

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPreloader, setShowPreloader] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const mainRef = useRef(null);
  const skeletonTimer = useRef(null);
  const isFirstRoute = useRef(true);

  const activePage = keyFor(location.pathname);

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

  useEffect(() => () => clearTimeout(skeletonTimer.current), []);

  // Title per route, so tabs, bookmarks and search results are meaningful.
  useEffect(() => {
    document.title = titleFor(location.pathname);
  }, [location.pathname]);

  // Route change: hold a skeleton briefly, reset scroll, then reveal. This
  // covers <Link> clicks, back/forward and programmatic navigation alike.
  useEffect(() => {
    if (isFirstRoute.current) {
      isFirstRoute.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    setShowSkeleton(true);
    clearTimeout(skeletonTimer.current);
    skeletonTimer.current = setTimeout(() => setShowSkeleton(false), SKELETON_HOLD_MS);
  }, [location.pathname]);

  useEffect(() => {
    if (showPreloader || !mainRef.current) return;

    // While the skeleton is up the shell is simply visible — the shimmer is
    // doing the work, so there is nothing to fade.
    if (showSkeleton || prefersReducedMotion()) {
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
  }, [location.pathname, showPreloader, showSkeleton]);

  const nav = handlePageChange;

  return (
    <>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      {!showPreloader && (
        <div className="min-h-screen flex flex-col font-sans text-slate-800 selection:bg-ica-gold selection:text-ica-blue-dark">
          <Navbar activePage={activePage} />
          <main ref={mainRef} className="flex-grow pt-0" style={{ opacity: 0 }}>
            {showSkeleton ? (
              <PageSkeleton variant={SKELETON_VARIANTS[activePage] || 'grid'} />
            ) : (
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
            )}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
