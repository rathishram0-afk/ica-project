import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const navGroups = [
    {
      title: "Organization",
      links: [
        { name: 'Home', id: 'home' },
        { name: 'About ICA', id: 'about' },
        { name: 'Contact Us', id: 'contact' },
      ],
    },
    {
      title: "Programs",
      links: [
        { name: 'Programs & Certifications', id: 'programs' },
        { name: 'School Accreditation', id: 'accreditation' },
        { name: 'Research & Innovation', id: 'research' },
      ],
    },
    {
      title: "Community",
      links: [
        { name: 'Events & Competitions', id: 'events' },
        { name: 'Partners & Training Centres', id: 'partners' },
        { name: 'Media & Gallery', id: 'media' },
        { name: 'Resources', id: 'resources' },
      ],
    },
  ];

  return (
    <footer className="bg-[#0B2D6B] text-white pt-14 pb-8 border-t-4 border-[#C8A24A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] world-map-bg pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-10">

          {/* Brand Column */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/ica-logo.png"
                alt="International Cube Academy"
                className="h-12 w-auto bg-white/90 p-1.5 rounded-lg"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div className="font-serif font-extrabold text-base text-white leading-snug">
              International<br />
              <span className="text-[#C8A24A]">Cube Academy</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed font-light max-w-xs">
              Shaping minds, inspiring innovation and creating global leaders through Rubik's Cube based cognitive learning.
            </p>
            <div className="flex items-center space-x-2 pt-1">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#C8A24A] hover:text-[#0B2D6B] transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Groups */}
          {navGroups.map((group, gi) => (
            <div key={gi} className="lg:col-span-3">
              <h3 className="font-bold text-xs uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2">
                {group.title}
              </h3>
              <ul className="space-y-2 text-xs">
                {group.links.map((link, li) => (
                  <li key={li}>
                    <button
                      onClick={() => setActivePage(link.id)}
                      className="text-slate-300 hover:text-[#C8A24A] transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-[#C8A24A]">›</span>
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2">
              Global Secretariat
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#C8A24A] shrink-0 mt-0.5" />
                <span>International Cube Academy (ICA)<br />Global Headquarters & Cognitive Science Wing</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#C8A24A] shrink-0" />
                <span>info@ica.world</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#C8A24A] shrink-0" />
                <span>+00 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe size={15} className="text-[#C8A24A] shrink-0" />
                <span>www.ica.world</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div>
            © 2026 International Cube Academy. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setActivePage('about')} className="hover:text-[#C8A24A] transition-colors">Privacy Policy</button>
            <span>|</span>
            <button onClick={() => setActivePage('about')} className="hover:text-[#C8A24A] transition-colors">Terms of Service</button>
            <span>|</span>
            <button onClick={() => setActivePage('resources')} className="hover:text-[#C8A24A] transition-colors">Resources</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
