import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import anime from 'animejs';
import SmartImage from './SmartImage';
import { prefersReducedMotion } from '../lib/motion';
import { Link } from 'react-router-dom';
import { pathFor } from '../routes';

export default function Navbar({ activePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const programsRef = useRef(null);
  const navLinksRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const hasAnimatedLinks = useRef(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About ICA' },
    {
      id: 'programs',
      label: 'Programs',
      children: [
        { id: 'programs', label: 'Programs & Certifications' },
        { id: 'accreditation', label: 'School Accreditation' },
        { id: 'research', label: 'Research & Innovation' },
      ],
    },
    { id: 'events', label: 'Events' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'partners', label: 'Partners' },
    { id: 'media', label: 'Media' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  // Scroll detection for navbar transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stagger animate nav links on mount
  useEffect(() => {
    if (navLinksRef.current && !hasAnimatedLinks.current) {
      hasAnimatedLinks.current = true;
      // Reduced motion: leave the links exactly as rendered rather than
      // hiding them for an entrance that will never play.
      if (prefersReducedMotion()) return;
      const links = navLinksRef.current.querySelectorAll('.nav-item');
      anime.set(links, { opacity: 0, translateY: -8 });
      anime({
        targets: links,
        opacity: [0, 1],
        translateY: [-8, 0],
        delay: anime.stagger(60, { start: 200 }),
        duration: 500,
        easing: 'easeOutCubic',
      });
    }
  }, []);

  // Animate dropdown appearance
  useEffect(() => {
    if (programsOpen && dropdownRef.current && !prefersReducedMotion()) {
      anime({
        targets: dropdownRef.current,
        opacity: [0, 1],
        translateY: [-8, 0],
        scale: [0.97, 1],
        duration: 250,
        easing: 'easeOutCubic',
      });
      // Stagger children
      const items = dropdownRef.current.querySelectorAll('button');
      anime({
        targets: items,
        opacity: [0, 1],
        translateX: [-10, 0],
        delay: anime.stagger(50, { start: 80 }),
        duration: 300,
        easing: 'easeOutCubic',
      });
    }
  }, [programsOpen]);

  // Animate mobile menu
  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current && !prefersReducedMotion()) {
      anime({
        targets: mobileMenuRef.current,
        opacity: [0, 1],
        translateY: [-15, 0],
        duration: 300,
        easing: 'easeOutCubic',
      });
      const items = mobileMenuRef.current.querySelectorAll('.mobile-nav-item');
      anime({
        targets: items,
        opacity: [0, 1],
        translateX: [-20, 0],
        delay: anime.stagger(40, { start: 100 }),
        duration: 400,
        easing: 'easeOutCubic',
      });
    }
  }, [mobileMenuOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (programsRef.current && !programsRef.current.contains(e.target)) {
        setProgramsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (link) => {
    if (link.children) return link.children.some(c => c.id === activePage);
    return activePage === link.id;
  };

  // <Link> does the navigating; this only closes the menus afterwards.
  const closeMenus = () => {
    setMobileMenuOpen(false);
    setProgramsOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ease-smooth ${
        scrolled
          ? 'navbar-solid'
          : 'bg-white border-b border-slate-100 shadow-sm'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between h-18 lg:h-20 py-2">

          {/* Logo */}
          <Link
            to={pathFor('home')}
            onClick={closeMenus}
            aria-label="International Cube Academy — home"
            className="flex items-center cursor-pointer shrink-0 group"
          >
            <SmartImage
              src="/images/logo/ica-logo.png"
              alt="International Cube Academy"
              loading="eager"
              wrapperClassName="h-12 sm:h-14 lg:h-16"
              skeletonClassName="rounded-xl"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain block bg-transparent transition-all duration-300 group-hover:scale-105"
              placeholderClassName="w-32 sm:w-36 lg:w-40"
              fallback={
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#0B2D6B] flex items-center justify-center text-[#C8A24A] font-extrabold text-lg font-serif">I</div>
                  <div>
                    <div className="font-serif font-extrabold text-sm text-[#0B2D6B] leading-none">International</div>
                    <div className="font-serif font-extrabold text-sm text-[#C8A24A] leading-none">Cube Academy</div>
                  </div>
                </div>
              }
            />
          </Link>

          {/* Desktop Nav */}
          <div ref={navLinksRef} className="hidden lg:flex items-center gap-1 flex-1 justify-center mx-4">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.id} className="relative nav-item" ref={programsRef}>
                    <button
                      onClick={() => setProgramsOpen(!programsOpen)}
                      className={`nav-link-hover flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-3 py-2 rounded-lg transition-all duration-300 ${
                        isActive(link)
                          ? 'text-[#0B2D6B] font-extrabold bg-[#0B2D6B]/5'
                          : 'text-slate-600 hover:text-[#C8A24A] hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={12} className={`transition-transform duration-300 ${programsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {programsOpen && (
                      <div
                        ref={dropdownRef}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 bg-white/95 backdrop-blur-xl rounded-2xl shadow-elevated border border-slate-100 overflow-hidden min-w-[220px] z-50"
                      >
                        {link.children.map(child => (
                          <Link
                            key={child.id}
                            to={pathFor(child.id)}
                            onClick={closeMenus}
                            className={`w-full text-left px-4 py-3 text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                              activePage === child.id
                                ? 'bg-[#0B2D6B]/5 text-[#0B2D6B]'
                                : 'text-slate-600 hover:bg-[#F8F9FB] hover:text-[#C8A24A] hover:pl-5'
                            }`}
                          >
                            {activePage === child.id && <span className="w-1.5 h-1.5 rounded-full bg-[#C8A24A] animate-pulseGold"></span>}
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.id}
                  to={pathFor(link.id)}
                  onClick={closeMenus}
                  className={`nav-item nav-link-hover text-[11px] font-semibold uppercase tracking-wider px-3 py-2 rounded-lg transition-all duration-300 relative ${
                    activePage === link.id
                      ? 'text-[#0B2D6B] font-extrabold bg-[#0B2D6B]/5'
                      : 'text-slate-600 hover:text-[#C8A24A] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {activePage === link.id && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#C8A24A] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* JOIN ICA Button */}
          <div className="hidden lg:flex items-center shrink-0 nav-item">
            <Link
              to={pathFor('contact')}
              onClick={closeMenus}
              className="gold-btn inline-block px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-sm hover:shadow-gold-button transform hover:-translate-y-0.5"
            >
              JOIN ICA
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 -mr-1 rounded-lg text-[#0B2D6B] hover:bg-slate-100 transition-colors duration-200"
            >
              <div className="relative w-[22px] h-[22px]">
                <X size={22} className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} />
                <Menu size={22} className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-elevated max-h-[80vh] overflow-y-auto">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.id} className="mobile-nav-item">
                    <div className="py-2 px-3 text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] mt-2">
                      {link.label}
                    </div>
                    {link.children.map(child => (
                      <Link
                        key={child.id}
                        to={pathFor(child.id)}
                        onClick={closeMenus}
                        className={`mobile-nav-item block w-full text-left py-2.5 px-5 text-xs font-semibold rounded-xl transition-all duration-200 ${
                          activePage === child.id
                            ? 'bg-[#0B2D6B]/5 text-[#0B2D6B] font-bold'
                            : 'text-slate-600 hover:bg-[#F8F9FB]'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={link.id}
                  to={pathFor(link.id)}
                  onClick={closeMenus}
                  className={`mobile-nav-item block w-full text-left py-2.5 px-3 text-xs font-semibold rounded-xl transition-all duration-200 ${
                    activePage === link.id
                      ? 'bg-[#0B2D6B]/5 text-[#0B2D6B] font-bold'
                      : 'text-slate-600 hover:bg-[#F8F9FB]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to={pathFor('contact')}
              onClick={closeMenus}
              className="mobile-nav-item gold-btn block w-full text-center py-3 mt-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              JOIN ICA
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
