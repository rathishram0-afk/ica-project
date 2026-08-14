import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
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

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const mainRef = useRef(null);
  const prevPage = useRef('home');

  const handlePageChange = (page) => {
    if (page === activePage) return;
    
    setIsTransitioning(true);
    
    if (mainRef.current) {
      anime({
        targets: mainRef.current,
        opacity: [1, 0],
        translateY: [0, -8],
        duration: 200,
        easing: 'easeInCubic',
        complete: () => {
          prevPage.current = activePage;
          setActivePage(page);
          setIsTransitioning(false);
        },
      });
    } else {
      setActivePage(page);
      setIsTransitioning(false);
    }
  };

  useEffect(() => {
    if (mainRef.current && !isTransitioning && !showPreloader) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      anime({
        targets: mainRef.current,
        opacity: [0, 1],
        translateY: [12, 0],
        duration: 400,
        easing: 'easeOutCubic',
      });
    }
  }, [activePage, showPreloader, isTransitioning]);

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
            {renderPage()}
          </main>
          <Footer setActivePage={handlePageChange} />
        </div>
      )}
    </>
  );
}
