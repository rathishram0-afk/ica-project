import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProgramsPage from './pages/ProgramsPage';
import AccreditationPage from './pages/AccreditationPage';
import ResearchPage from './pages/ResearchPage';
import EventsPage from './pages/EventsPage';
import PartnersPage from './pages/PartnersPage';
import MediaPage from './pages/MediaPage';
import ResourcesPage from './pages/ResourcesPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} />;
      case 'about':
        return <AboutPage setActivePage={setActivePage} />;
      case 'programs':
        return <ProgramsPage setActivePage={setActivePage} />;
      case 'accreditation':
        return <AccreditationPage setActivePage={setActivePage} />;
      case 'research':
        return <ResearchPage setActivePage={setActivePage} />;
      case 'events':
        return <EventsPage setActivePage={setActivePage} />;
      case 'partners':
        return <PartnersPage setActivePage={setActivePage} />;
      case 'media':
        return <MediaPage setActivePage={setActivePage} />;
      case 'resources':
        return <ResourcesPage setActivePage={setActivePage} />;
      case 'contact':
        return <ContactPage setActivePage={setActivePage} />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 selection:bg-ica-gold selection:text-ica-blue-dark">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow pt-0">
        {renderPage()}
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
