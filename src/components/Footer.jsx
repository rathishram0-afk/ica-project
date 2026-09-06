import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Globe, ArrowRight, Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SmartImage from './SmartImage';
import { Link } from 'react-router-dom';
import { pathFor } from '../routes';

const NAV_GROUPS = [
  {
    title: 'Organization',
    links: [
      { name: 'Home', id: 'home' },
      { name: 'About ICA', id: 'about' },
      { name: 'Contact Us', id: 'contact' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { name: 'Programs & Certifications', id: 'programs' },
      { name: 'School Accreditation', id: 'accreditation' },
      { name: 'Research & Innovation', id: 'research' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Events & Competitions', id: 'events' },
      { name: 'Partners & Training Centres', id: 'partners' },
      { name: 'Media & Gallery', id: 'media' },
      { name: 'Resources', id: 'resources' },
    ],
  },
];

const SOCIALS = [
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Twitter, label: 'X (Twitter)' },
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Youtube, label: 'YouTube' },
];

/**
 * Newsletter capture. Presentational only — it validates and confirms but
 * posts nowhere, matching the Contact and Certification forms, which also
 * just preventDefault. Swap the submit handler for a real endpoint later.
 */
function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail('');
  };

  if (sent) {
    return (
      <div className="flex items-center gap-2.5 text-sm text-[#C8A24A] font-semibold" role="status">
        <span className="w-7 h-7 rounded-full bg-[#C8A24A] text-[#0B2D6B] flex items-center justify-center shrink-0">
          <Check size={15} strokeWidth={3} />
        </span>
        Thank you &mdash; we&rsquo;ll be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <input
        id="footer-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="w-full sm:w-72 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-[#C8A24A] focus:bg-white/[0.14] transition-colors duration-300"
      />
      <button
        type="submit"
        className="gold-btn shrink-0 px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 group"
      >
        Join
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </form>
  );
}

function FooterHeading({ children }) {
  return (
    <h3 className="font-bold text-[11px] uppercase tracking-[0.16em] text-white mb-4">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0B2D6B] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] world-map-bg pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* Newsletter band */}
        <AnimatedSection
          animation="fadeUp"
          className="py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10"
        >
          <div>
            <div className="font-serif font-bold text-lg sm:text-xl text-white">
              Stay in the loop
            </div>
            <p className="text-slate-300 text-xs font-light mt-1 max-w-md">
              Programme launches, competitions and research from the Academy &mdash; a few times a year, never more.
            </p>
          </div>
          <NewsletterForm />
        </AnimatedSection>

        {/* Main grid. Spans total exactly 12: 3 + 2 + 2 + 2 + 3. The previous
            layout used five col-span-3 columns (15 of 12), which pushed the
            contact block onto a second row and left the right half empty. */}
        <AnimatedSection
          animation="stagger"
          staggerDelay={90}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-x-8 gap-y-10 py-12"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-3 space-y-4">
            <Link to={pathFor('home')} className="inline-flex items-center" aria-label="International Cube Academy — home">
              <SmartImage
                src="/images/logo/ica-logo.png"
                alt="International Cube Academy"
                loading="lazy"
                wrapperClassName="h-14"
                skeletonClassName="rounded-lg"
                variant="dark"
                placeholderClassName="w-32"
                className="h-14 w-auto bg-white rounded-lg p-1.5 transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-slate-300 text-xs leading-relaxed font-light max-w-xs">
              Shaping minds, inspiring innovation and creating global leaders through Rubik&rsquo;s Cube based cognitive learning.
            </p>
          </div>

          {/* Link groups */}
          {NAV_GROUPS.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <FooterHeading>{group.title}</FooterHeading>
              <ul className="space-y-2.5 text-xs">
                {group.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={pathFor(link.id)}
                      className="text-slate-300 hover:text-[#C8A24A] transition-colors duration-200 inline-flex items-start gap-1.5 group"
                    >
                      <span className="text-[#C8A24A]/70 group-hover:text-[#C8A24A] transition-colors duration-200">&rsaquo;</span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-2 md:col-span-3 lg:col-span-3">
            <FooterHeading>Global Secretariat</FooterHeading>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#C8A24A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  International Cube Academy (ICA)
                  <br />
                  Global Headquarters &amp; Cognitive Science Wing
                </span>
              </li>
              <li>
                <a href="mailto:info@ica.world" className="flex items-center gap-2.5 hover:text-[#C8A24A] transition-colors duration-200">
                  <Mail size={14} className="text-[#C8A24A] shrink-0" />
                  info@ica.world
                </a>
              </li>
              <li>
                <a href="tel:+001234567890" className="flex items-center gap-2.5 hover:text-[#C8A24A] transition-colors duration-200">
                  <Phone size={14} className="text-[#C8A24A] shrink-0" />
                  +00 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe size={14} className="text-[#C8A24A] shrink-0" />
                www.ica.world
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-5 text-[11px] text-slate-400">
          <div className="text-center sm:text-left">
            &copy; 2026 International Cube Academy. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2">
            {SOCIALS.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#C8A24A] hover:text-[#0B2D6B] hover:border-[#C8A24A] transition-all duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to={pathFor('about')} className="hover:text-[#C8A24A] transition-colors duration-200">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <Link to={pathFor('about')} className="hover:text-[#C8A24A] transition-colors duration-200">Terms of Service</Link>
            <span className="text-white/20">|</span>
            <Link to={pathFor('resources')} className="hover:text-[#C8A24A] transition-colors duration-200">Resources</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
