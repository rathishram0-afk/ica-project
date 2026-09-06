import React, { useState, useEffect, useRef, useCallback } from 'react';
import anime from 'animejs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import PageSkeleton from './components/PageSkeleton';
import { prefersReducedMotion } from './lib/motion';
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

/** Which skeleton shape each route shows while it swaps in. */
const SKELETON_VARIANTS = {
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

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const mainRef = useRef(null);
  const prevPage = useRef('home');
  const skeletonTimer = useRef(null);

  useEffect(() => () => clearTimeout(skeletonTimer.current), []);

  const handlePageChange = useCallback(
    (page) => {
      if (page === activePage || isTransitioning) return;

      setIsTransitioning(true);

      const commit = () => {
        prevPage.current = activePage;
        setActivePage(page);
        setShowSkeleton(true);
        setIsTransitioning(false);
        window.scrollTo({ top: 0, behavior: 'instant' });

        clearTimeout(skeletonTimer.current);
        skeletonTimer.current = setTimeout(() => setShowSkeleton(false), SKELETON_HOLD_MS);
      };

      // Reduced motion: swap straight to the new page, no fade-out first.
      if (mainRef.current && !prefersReducedMotion()) {
        anime({
          targets: mainRef.current,
          opacity: [1, 0],
          translateY: [0, -8],
          duration: 200,
          easing: 'easeInCubic',
          complete: commit,
        });
      } else {
        commit();
      }
    },
    [activePage, isTransitioning]
  );

  useEffect(() => {
    if (showPreloader || isTransitioning || !mainRef.current) return;

    // While the skeleton is up, the shell is simply visible — the shimmer is
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
  }, [activePage, showPreloader, isTransitioning, showSkeleton]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={handlePageChange} />;
      case 'about':
        return <AboutPage setActivePage={handlePageChange} />;
      case 'programs':
      case 'certification':
        return <ProgramsPage setActivePage={handlePageChange} />;
      case 'certification-apply':
        return <CertificationApplyPage setActivePage={handlePageChange} />;
      case 'accreditation':
        return <AccreditationPage setActivePage={handlePageChange} />;
      case 'research':
        return <ResearchPage setActivePage={handlePageChange} />;
      case 'events':
        return <EventsPage setActivePage={handlePageChange} />;
      case 'achievements':
        return <AchievementsPage setActivePage={handlePageChange} />;
      case 'partners':
        return <PartnersPage setActivePage={handlePageChange} />;
      case 'media':
        return <MediaPage setActivePage={handlePageChange} />;
      case 'resources':
        return <ResourcesPage setActivePage={handlePageChange} />;
      case 'contact':
        return <ContactPage setActivePage={handlePageChange} />;
      default:
        return <HomePage setActivePage={handlePageChange} />;
    }
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      {!showPreloader && (
        <div className="min-h-screen flex flex-col font-sans text-slate-800 selection:bg-ica-gold selection:text-ica-blue-dark">
          <Navbar activePage={activePage} setActivePage={handlePageChange} />
          <main ref={mainRef} className="flex-grow pt-0" style={{ opacity: 0 }}>
            {showSkeleton ? (
              <PageSkeleton variant={SKELETON_VARIANTS[activePage] || 'grid'} />
            ) : (
              renderPage()
            )}
          </main>
          <Footer setActivePage={handlePageChange} />
        </div>
      )}
    </>
  );
}
