import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Globe, ArrowRight, Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SmartImage from './SmartImage';
import { Link } from 'react-router-dom';
import { pathFor } from '../routes';

const NAV_GROUPS = [
  {
    title: 'ORGANIZATION',
    links: [
      { name: 'Home', id: 'home' },
      { name: 'About ICA', id: 'about' },
      { name: 'Contact Us', id: 'contact' },
    ],
  },
  {
    title: 'PROGRAMS',
    links: [
      { name: 'Teachers Programs', id: 'teachers-programs' },
      { name: 'Students Certification', id: 'students-certification' },
      { name: 'Teachers Certification', id: 'teachers-certification' },
      { name: 'School Accreditation', id: 'school-affiliation' },
      { name: 'Research & Innovation', id: 'research' },
    ],
  },
  {
    title: 'COMMUNITY',
    links: [
      { name: 'Events & Competitions', id: 'events' },
      { name: 'Partners & Training Centres', id: 'partners' },
      { name: 'Media & Gallery', id: 'media' },
      { name: 'Resources', id: 'resources' },
    ],
  },
];

const SOCIALS = [
  {
    Icon: Facebook,
    label: 'Facebook',
    url: import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/TamilNaduCubeAssociation',
  },
  {
    Icon: Youtube,
    label: 'YouTube',
    url: 'https://www.youtube.com/@CubesKool_no1toystores',
  },
  {
    Icon: Instagram,
    label: 'Instagram',
    url: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com',
  },
];

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
      <div className="flex items-center gap-2 text-xs sm:text-sm text-[#C8A24A] font-semibold" role="status">
        <span className="w-6 h-6 rounded-full bg-[#C8A24A] text-[#0B2D6B] flex items-center justify-center shrink-0">
          <Check size={13} strokeWidth={3} />
        </span>
        Thank you &mdash; we&rsquo;ll be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-auto">
      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <div className="relative w-full sm:w-68">
        <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        <input
          id="footer-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="w-full bg-white/10 border border-white/20 rounded-full pl-9 pr-3.5 py-2 min-h-[38px] sm:min-h-[40px] text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-[#C8A24A] focus:bg-white/[0.14] transition-colors duration-300"
        />
      </div>
      <button
        type="submit"
        className="gold-btn shrink-0 px-5 py-2 min-h-[38px] sm:min-h-[40px] rounded-full text-[11px] font-bold uppercase tracking-wider text-white flex items-center justify-center gap-1.5 group"
      >
        <span>JOIN</span>
        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </form>
  );
}

function FooterHeading({ children }) {
  return (
    <h3 className="font-bold text-[11px] uppercase tracking-[0.16em] text-white mb-1.5 sm:mb-2">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0B2D6B] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] world-map-bg pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* 1. STAY IN THE LOOP (Newsletter Section) */}
        <AnimatedSection
          animation="fadeUp"
          className="py-3.5 sm:py-4 lg:py-4.5 flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 border-b border-white/10"
        >
          <div>
            <div className="font-serif font-bold text-base sm:text-lg text-white leading-tight">
              Stay in the loop
            </div>
            <p className="text-slate-300 text-xs font-light mt-0.5 max-w-md">
              Programme launches, competitions and research from the Academy &mdash; a few times a year, never more.
            </p>
          </div>
          <NewsletterForm />
        </AnimatedSection>

        {/* 2. MAIN FOOTER CONTENT GRID */}
        <AnimatedSection
          animation="stagger"
          staggerDelay={70}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 py-5 sm:py-6 lg:py-7"
        >
          {/* Brand & Social Links */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-2.5 sm:space-y-3">
            <Link to={pathFor('home')} className="inline-flex items-center" aria-label="International Cube Academy — home">
              <SmartImage
                src="/images/logo/ica-logo.png"
                alt="International Cube Academy"
                loading="lazy"
                wrapperClassName="h-10 sm:h-11 lg:h-12"
                skeletonClassName="rounded-lg"
                variant="dark"
                placeholderClassName="w-26 sm:w-30"
                className="h-10 sm:h-11 lg:h-12 w-auto bg-white rounded-lg p-1.5 transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-slate-300 text-xs leading-relaxed font-light max-w-xs">
              Shaping minds, inspiring innovation, and creating global leaders through Rubik’s Cube based cognitive learning.
            </p>

            {/* Social Media Icons (Facebook, YouTube, Instagram ONLY) */}
            <div className="pt-0.5">
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#C8A24A] mb-1">Connect With Us</div>
              <div className="flex items-center gap-2">
                {SOCIALS.map(({ Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#C8A24A] hover:text-[#0B2D6B] hover:border-[#C8A24A] transition-all duration-300"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Groups */}
          <div className="col-span-1 md:col-span-2 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-5">
            {NAV_GROUPS.map((group) => (
              <div key={group.title} className={group.title === 'COMMUNITY' ? 'col-span-2 sm:col-span-1' : 'col-span-1'}>
                <FooterHeading>{group.title}</FooterHeading>
                <ul className="space-y-1 sm:space-y-1.5 text-xs">
                  {group.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        to={pathFor(link.id)}
                        className="text-slate-300 hover:text-[#C8A24A] transition-colors duration-200 flex items-start gap-1.5 group py-0 min-h-[24px] sm:min-h-0"
                      >
                        <span className="text-[#C8A24A]/70 group-hover:text-[#C8A24A] transition-colors duration-200">&rsaquo;</span>
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Global Reach / Office Addresses & Contact Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-2.5 sm:space-y-3">
            <div>
              <FooterHeading>GLOBAL REACH</FooterHeading>
              
              {/* Head Office - Chennai */}
              <div className="space-y-0.5 mb-2 text-xs">
                <div className="font-bold text-[#C8A24A] text-[10px] uppercase tracking-wider">HEAD OFFICE</div>
                <div className="font-bold text-white text-xs">Chennai Office</div>
                <p className="text-slate-300 text-xs font-light leading-relaxed">
                  No. 1/90, Ground Floor, Shop No. 1 &amp; 2, Pillaiyar Koil Street, Kolapakkam, Chennai &ndash; 600 128, Tamil Nadu, India
                </p>
              </div>

              {/* UAE Office - Dubai ONLY */}
              <div className="space-y-0.5 text-xs">
                <div className="font-bold text-[#C8A24A] text-[10px] uppercase tracking-wider">UAE OFFICE</div>
                <div className="font-bold text-white text-xs">Dubai Office</div>
                <p className="text-slate-300 text-xs font-light leading-relaxed">
                  Office #203, NBQ Building, Burman MS Exit 4, Dubai, UAE
                </p>
              </div>
            </div>

            {/* Contact Numbers & Email */}
            <div className="pt-1.5 border-t border-white/10 space-y-1.5 sm:space-y-2 text-xs">
              <div>
                <div className="font-bold text-[#C8A24A] text-[10px] uppercase tracking-wider mb-0.5">CONTACT NUMBERS</div>
                <div className="text-slate-400 text-[10px] font-medium mb-0.5">Telephone &amp; WhatsApp</div>
                <div className="space-y-0.5 font-mono text-xs">
                  <div className="flex flex-wrap gap-2 text-slate-200">
                    <a href="tel:+918220713743" className="hover:text-[#C8A24A] transition-colors font-bold">+91 82207 13743</a>
                    <span className="text-slate-500">|</span>
                    <a href="tel:+919500849544" className="hover:text-[#C8A24A] transition-colors font-bold">+91 95008 49544</a>
                  </div>
                  <div>
                    <a href="tel:+971564895227" className="hover:text-[#C8A24A] transition-colors font-bold text-slate-200 block">+971 56 489 5227</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="font-bold text-[#C8A24A] text-[10px] uppercase tracking-wider mb-0.5">OFFICIAL EMAIL</div>
                <a
                  href="mailto:internationalcubeacademy@gmail.com"
                  className="font-mono text-xs font-semibold text-slate-200 hover:text-[#C8A24A] transition-colors block break-all"
                >
                  internationalcubeacademy@gmail.com
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. FOOTER BOTTOM BAR */}
        <div className="py-3 sm:py-3.5 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-[11px] text-slate-400">
          <div className="text-center sm:text-left">
            &copy; 2026 International Cube Academy. All rights reserved.
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link to={pathFor('about')} className="hover:text-[#C8A24A] transition-colors duration-200 inline-flex items-center min-h-[24px] sm:min-h-0">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <Link to={pathFor('about')} className="hover:text-[#C8A24A] transition-colors duration-200 inline-flex items-center min-h-[24px] sm:min-h-0">Terms &amp; Conditions</Link>
            <span className="text-white/20">|</span>
            <Link to={pathFor('resources')} className="hover:text-[#C8A24A] transition-colors duration-200 inline-flex items-center min-h-[24px] sm:min-h-0">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
