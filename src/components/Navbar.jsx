import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About ICA' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white border-b border-slate-100 shadow-xs py-2.5 transition-all">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between">
          
          {/* Logo Left - High-Res Official Logo */}
          <div 
            className="flex items-center cursor-pointer shrink-0"
            onClick={() => setActivePage('home')}
          >
            <img 
              src="/images/logo/ica-logo.png" 
              alt="International Cube Academy Official Logo" 
              className="h-11 sm:h-13 w-auto object-contain block bg-transparent"
            />
          </div>

          {/* Menu Center */}
          <div className="hidden md:flex items-center space-x-8 justify-center flex-1 mx-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-1.5 ${
                  activePage === link.id 
                    ? 'text-[#0B2D6B] font-extrabold' 
                    : 'text-slate-700 hover:text-[#C8A24A]'
                }`}
              >
                {link.label}
                {activePage === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C8A24A] rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Join ICA Gold Button Right */}
          <div className="hidden sm:flex items-center shrink-0">
            <button 
              onClick={() => setActivePage('contact')}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C8A24A] text-white hover:bg-[#b89035] transition-all duration-200 shadow-xs hover:shadow-md transform hover:-translate-y-0.5"
            >
              JOIN ICA
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0B2D6B] hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl py-4">
          <div className="px-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { setActivePage(link.id); setMobileMenuOpen(false); }}
                className={`w-full text-left py-3 text-xs font-bold border-b border-slate-100 flex items-center justify-between ${
                  activePage === link.id ? 'text-[#0B2D6B]' : 'text-slate-700'
                }`}
              >
                <span>{link.label}</span>
                {activePage === link.id && <span className="w-2 h-2 rounded-full bg-[#C8A24A]"></span>}
              </button>
            ))}

            <button 
              onClick={() => { setActivePage('contact'); setMobileMenuOpen(false); }}
              className="w-full py-3 mt-4 bg-[#C8A24A] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              JOIN ICA
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
