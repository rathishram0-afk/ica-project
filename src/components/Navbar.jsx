import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const programsRef = useRef(null);

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

  const handleNav = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    setProgramsOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between h-18 lg:h-20 py-2">

          {/* Logo */}
          <div
            className="flex items-center cursor-pointer shrink-0"
            onClick={() => handleNav('home')}
          >
            <img
              src="/images/logo/ica-logo.png"
              alt="International Cube Academy"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain block bg-transparent transition-all"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div
              className="hidden items-center gap-2"
              style={{ display: 'none' }}
            >
              <div className="w-9 h-9 rounded-xl bg-[#0B2D6B] flex items-center justify-center text-[#C8A24A] font-extrabold text-lg font-serif">I</div>
              <div>
                <div className="font-serif font-extrabold text-sm text-[#0B2D6B] leading-none">International</div>
                <div className="font-serif font-extrabold text-sm text-[#C8A24A] leading-none">Cube Academy</div>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center mx-4">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.id} className="relative" ref={programsRef}>
                    <button
                      onClick={() => setProgramsOpen(!programsOpen)}
                      className={`flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-3 py-2 rounded-lg transition-colors ${
                        isActive(link)
                          ? 'text-[#0B2D6B] font-extrabold bg-[#0B2D6B]/5'
                          : 'text-slate-600 hover:text-[#C8A24A] hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={12} className={`transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {programsOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden min-w-[220px] z-50">
                        {link.children.map(child => (
                          <button
                            key={child.id}
                            onClick={() => handleNav(child.id)}
                            className={`w-full text-left px-4 py-3 text-xs font-semibold transition-colors flex items-center gap-2 ${
                              activePage === child.id
                                ? 'bg-[#0B2D6B]/5 text-[#0B2D6B]'
                                : 'text-slate-600 hover:bg-[#F8F9FB] hover:text-[#C8A24A]'
                            }`}
                          >
                            {activePage === child.id && <span className="w-1.5 h-1.5 rounded-full bg-[#C8A24A]"></span>}
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-2 rounded-lg transition-colors relative ${
                    activePage === link.id
                      ? 'text-[#0B2D6B] font-extrabold bg-[#0B2D6B]/5'
                      : 'text-slate-600 hover:text-[#C8A24A] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {activePage === link.id && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#C8A24A] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* JOIN ICA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => handleNav('contact')}
              className="px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#C8A24A] text-white hover:bg-[#b89035] transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              JOIN ICA
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0B2D6B] hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.id}>
                    <div className="py-2 px-3 text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] mt-2">
                      {link.label}
                    </div>
                    {link.children.map(child => (
                      <button
                        key={child.id}
                        onClick={() => handleNav(child.id)}
                        className={`w-full text-left py-2.5 px-5 text-xs font-semibold rounded-xl transition-colors ${
                          activePage === child.id
                            ? 'bg-[#0B2D6B]/5 text-[#0B2D6B] font-bold'
                            : 'text-slate-600 hover:bg-[#F8F9FB]'
                        }`}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                );
              }
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`w-full text-left py-2.5 px-3 text-xs font-semibold rounded-xl transition-colors ${
                    activePage === link.id
                      ? 'bg-[#0B2D6B]/5 text-[#0B2D6B] font-bold'
                      : 'text-slate-600 hover:bg-[#F8F9FB]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNav('contact')}
              className="w-full py-3 mt-3 bg-[#C8A24A] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              JOIN ICA
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
