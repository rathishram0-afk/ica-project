import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home': 
        return <HomePage setActivePage={setActivePage} />;
      case 'about': 
        return <AboutPage setActivePage={setActivePage} />;
      case 'contact': 
        return <ContactPage setActivePage={setActivePage} />;
      default: 
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 selection:bg-ica-gold selection:text-ica-blue-dark">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow pt-14">
        {renderPage()}
      </main>
      
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
