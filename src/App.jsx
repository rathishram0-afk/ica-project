import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { hasSeenIntro } from './lib/intro';
import { keyFor, pathFor, titleFor } from './routes';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProgramsPage from './pages/ProgramsPage';
import StudentsCertificationPage from './pages/StudentsCertificationPage';
import TeachersCertificationPage from './pages/TeachersCertificationPage';
import AccreditationPage from './pages/AccreditationPage';
import ResearchPage from './pages/ResearchPage';
import EventsPage from './pages/EventsPage';
import AchievementsPage from './pages/AchievementsPage';
import PartnersPage from './pages/PartnersPage';
import MediaPage from './pages/MediaPage';
import ResourcesPage from './pages/ResourcesPage';
import CertificationApplyPage from './pages/CertificationApplyPage';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPreloader, setShowPreloader] = useState(() => !hasSeenIntro());
  const isFirstRoute = useRef(true);

  const activePage = keyFor(location.pathname);

  /**
   * Translates activePage key to URL path for smooth client-side routing.
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

  // Instant scroll to top on route change
  useEffect(() => {
    if (isFirstRoute.current) {
      isFirstRoute.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const nav = handlePageChange;

  return (
    <>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
      {!showPreloader && (
        <div className="min-h-screen flex flex-col font-sans text-slate-800 selection:bg-ica-gold selection:text-ica-blue-dark">
          <Navbar activePage={activePage} />
          <main className="flex-grow pt-0">
            <Routes>
              <Route path="/" element={<HomePage setActivePage={nav} />} />
              <Route path="/about" element={<AboutPage setActivePage={nav} />} />
              <Route path="/programs" element={<ProgramsPage setActivePage={nav} />} />
              <Route path="/teachers-programs" element={<ProgramsPage setActivePage={nav} />} />
              <Route path="/students-certification" element={<StudentsCertificationPage setActivePage={nav} />} />
              <Route path="/teachers-certification" element={<TeachersCertificationPage setActivePage={nav} />} />
              <Route path="/school-affiliation" element={<AccreditationPage setActivePage={nav} />} />
              <Route path="/certification" element={<StudentsCertificationPage setActivePage={nav} />} />
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
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
