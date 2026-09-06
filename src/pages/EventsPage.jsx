import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Calendar, Users, Globe, ArrowRight, Star, ChevronRight, Award, School } from 'lucide-react';
import anime from 'animejs';
import useCountUp from '../hooks/useCountUp';
import AnimatedSection from '../components/AnimatedSection';
import ParticleField from '../components/ParticleField';
import SmartImage from '../components/SmartImage';
import { prefersReducedMotion } from '../lib/motion';

/* Stat counter sub-component */
function EventStat({ icon: Icon, num, label }) {
  const { ref, displayValue } = useCountUp(num, 2000);
  return (
    <div className="flex flex-col items-center justify-center space-y-1">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#C8A24A] mb-1 icon-hover-rotate">
        <Icon size={18} />
      </div>
      <div ref={ref} className="font-serif text-2xl sm:text-3xl font-extrabold text-[#C8A24A]">
        {displayValue}
      </div>
      <div className="text-slate-200 text-xs font-light">
        {label}
      </div>
    </div>
  );
}

export default function EventsPage({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('competitions');
  const [tabKey, setTabKey] = useState(0);
  const contentRef = useRef(null);

  // Animate tab content on switch
  useEffect(() => {
    if (contentRef.current && !prefersReducedMotion()) {
      anime({
        targets: contentRef.current,
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 400,
        easing: 'easeOutCubic',
      });
    }
  }, [activeTab]);

  const handleTabSwitch = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setTabKey(prev => prev + 1);
    }
  };

  return (
    <div className="w-full bg-white text-slate-800">

      {/* ---------------------------------------------------- */}
      {/* PAGE HEADER */}
      {/* ---------------------------------------------------- */}
      <section className="relative py-14 lg:py-18 bg-[#F8F9FB] border-b border-slate-100 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.10] world-map-bg pointer-events-none"></div>
        <div className="absolute top-10 left-10 w-40 h-40 border border-[#C8A24A]/10 rounded-full animate-float-slow pointer-events-none"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 border border-[#0B2D6B]/10 rounded-full animate-float-medium pointer-events-none"></div>

        <AnimatedSection animation="fadeUp" className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white px-4 py-1.5 rounded-full border border-[#C8A24A]/30 shadow-xs animate-border-shimmer">
            <Trophy size={14} /> EVENTS & COMPETITIONS
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D6B] leading-tight">
            Showcase Your Skills on the <span className="text-[#C8A24A]">Global Stage</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
            ICA organizes world-class competitions that inspire students to challenge themselves, build confidence, and showcase their skills on national and international platforms.
          </p>

          {/* TAB BUTTONS */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex bg-white rounded-full p-1.5 border border-slate-200 shadow-xs gap-1">
              <button
                onClick={() => handleTabSwitch('competitions')}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === 'competitions'
                    ? 'bg-[#0B2D6B] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#0B2D6B] hover:bg-slate-50'
                }`}
              >
                <Trophy size={14} /> COMPETITIONS
              </button>
              <button
                onClick={() => handleTabSwitch('workshops')}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === 'workshops'
                    ? 'bg-[#0B2D6B] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#0B2D6B] hover:bg-slate-50'
                }`}
              >
                <Calendar size={14} /> CONFERENCES & WORKSHOPS
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ---------------------------------------------------- */}
      {/* MAIN CONTENT AREA */}
      {/* ---------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 lg:py-16 space-y-16">

        {/* Tab content with animation */}
        <div ref={contentRef} key={tabKey}>

        {/* ─── COMPETITIONS TAB CONTENT ─── */}
        {activeTab === 'competitions' && (
          <section className="relative bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-10 overflow-hidden">
            
            <AnimatedSection animation="fadeUp" className="relative z-10 space-y-2 max-w-xl text-left">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">
                — INTERNATIONAL COMPETITIONS
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2D6B]">
                Celebrating Talent. Encouraging Excellence.
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                ICA competitions encourage students to push their limits, think critically, and demonstrate their abilities in a spirit of healthy competition.
              </p>
            </AnimatedSection>

            {/* TWO MAIN COMPETITION PHOTO CARDS */}
            <AnimatedSection animation="stagger" staggerDelay={150} className="grid md:grid-cols-2 gap-8 relative z-10">
              
              <div className="bg-[#F8F9FB] rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/50 card-hover-lift transition-all duration-400 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-sm bg-slate-100">
                    <SmartImage 
                      src="/images/events/TNCA-img-1.webp" 
                      alt="Competition Highlights - ICA Students with Trophies" 
                      wrapperClassName="w-full"
                      skeletonClassName="rounded-2xl"
                      className="w-full h-56 sm:h-64 object-cover block transform group-hover:scale-[1.05] transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-10 h-10 rounded-2xl bg-[#0B2D6B] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#C8A24A] transition-colors duration-300">
                      <Trophy size={20} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-[#0B2D6B]">
                        Competition Highlights
                      </h3>
                      <p className="text-slate-500 text-xs font-light">
                        Celebrating student achievement and excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F9FB] rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/50 card-hover-lift transition-all duration-400 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-sm bg-slate-100">
                    <SmartImage 
                      src="/images/events/TNCA-img-2.webp" 
                      alt="Championship Recognition - Award Ceremony" 
                      wrapperClassName="w-full"
                      skeletonClassName="rounded-2xl"
                      className="w-full h-56 sm:h-64 object-cover block transform group-hover:scale-[1.05] transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-10 h-10 rounded-2xl bg-[#0B2D6B] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#C8A24A] transition-colors duration-300">
                      <Award size={20} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-[#0B2D6B]">
                        Championship Recognition
                      </h3>
                      <p className="text-slate-500 text-xs font-light">
                        Recognizing participants for their competitive achievements
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </AnimatedSection>

            {/* THREE COMPETITION LEVEL CARDS */}
            <AnimatedSection animation="stagger" staggerDelay={100} className="grid md:grid-cols-3 gap-6 relative z-10 pt-2">
              {[
                {
                  icon: Trophy,
                  title: "National Championship",
                  desc: "Students compete at a national level showcasing their speed, accuracy, and advanced solving techniques."
                },
                {
                  icon: Globe,
                  title: "International Championship",
                  desc: "Top performers from across the globe compete for the prestigious International title."
                },
                {
                  icon: School,
                  title: "Inter-School Competition",
                  desc: "Schools compete as teams to strengthen team spirit and promote healthy competition."
                }
              ].map((comp, idx) => {
                const Icon = comp.icon;
                return (
                  <div key={idx} className="bg-[#F8F9FB] rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4 hover:border-[#C8A24A]/40 transition-all duration-300 group card-hover-lift">
                    <div className="w-11 h-11 rounded-xl bg-white text-[#0B2D6B] flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#0B2D6B] group-hover:text-[#C8A24A] transition-colors duration-300">
                      <Icon size={20} className="icon-hover-rotate" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-serif font-bold text-sm text-[#0B2D6B] flex items-center justify-between">
                        <span>{comp.title}</span>
                        <ChevronRight size={14} className="text-[#C8A24A] group-hover:translate-x-1 transition-transform duration-300" />
                      </h4>
                      <p className="text-slate-500 text-xs font-light leading-relaxed">
                        {comp.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </AnimatedSection>

            {/* COMPETITION STATS BAR */}
            <AnimatedSection animation="fadeUp" className="bg-[#0B2D6B] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-elevated z-10">
              <ParticleField count={8} />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
                <EventStat icon={Users} num="50+" label="Annual Competitions" />
                <EventStat icon={Star} num="10K+" label="Student Participants" />
                <EventStat icon={Globe} num="20+" label="Countries Competing" />
                <EventStat icon={Award} num="100%" label="Certified Results" />
              </div>
            </AnimatedSection>

          </section>
        )}

        {/* ─── WORKSHOPS & CONFERENCES TAB CONTENT ─── */}
        {activeTab === 'workshops' && (
          <section className="relative bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-10 overflow-hidden">
            
            <AnimatedSection animation="fadeUp" className="relative z-10 space-y-2 max-w-xl text-left">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">
                — CONFERENCES & WORKSHOPS
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2D6B]">
                Inspiring Innovation. Sharing Knowledge.
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                Our conferences and workshops bring together educators, researchers, students, and industry leaders to share ideas and promote educational excellence.
              </p>
            </AnimatedSection>

            {/* TWO MAIN CONFERENCE & WORKSHOP PHOTO CARDS */}
            <AnimatedSection animation="stagger" staggerDelay={150} className="grid md:grid-cols-2 gap-8 relative z-10">
              
              <div className="bg-[#F8F9FB] rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/50 card-hover-lift transition-all duration-400 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-sm bg-slate-100">
                    <SmartImage 
                      src="/images/events/conference.jpg" 
                      alt="Conferences - ICA Global Education Summit" 
                      wrapperClassName="w-full"
                      skeletonClassName="rounded-2xl"
                      className="w-full h-56 sm:h-64 object-cover block transform group-hover:scale-[1.05] transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-10 h-10 rounded-2xl bg-[#0B2D6B] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#C8A24A] transition-colors duration-300">
                      <Globe size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#C8A24A]">
                        Conferences
                      </div>
                      <h3 className="font-serif font-bold text-base text-[#0B2D6B]">
                        ICA Global Education Summit
                      </h3>
                      <p className="text-slate-500 text-xs font-light">
                        Bringing together educators & leaders to share brain-based learning innovations
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F9FB] rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/50 card-hover-lift transition-all duration-400 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-sm bg-slate-100">
                    <SmartImage 
                      src="/images/events/workshop.jpg" 
                      alt="Workshops - Teacher & Student Development" 
                      wrapperClassName="w-full"
                      skeletonClassName="rounded-2xl"
                      className="w-full h-56 sm:h-64 object-cover block transform group-hover:scale-[1.05] transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-10 h-10 rounded-2xl bg-[#0B2D6B] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#C8A24A] transition-colors duration-300">
                      <Users size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#C8A24A]">
                        Workshops
                      </div>
                      <h3 className="font-serif font-bold text-base text-[#0B2D6B]">
                        Teacher & Student Development
                      </h3>
                      <p className="text-slate-500 text-xs font-light">
                        Hands-on interactive training sessions using internationally recognized methodologies
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </AnimatedSection>

            {/* ADDITIONAL WORKSHOP CATEGORIES */}
            <AnimatedSection animation="stagger" staggerDelay={100} className="grid md:grid-cols-2 gap-6 relative z-10 pt-2">
              {[
                {
                  icon: Star,
                  title: "Parent & Student Webinars",
                  desc: "Online guidance on ICA programs, certification pathways, and brain development strategies."
                },
                {
                  icon: School,
                  title: "School Leadership Seminars",
                  desc: "Strategic discussions for school principals on integrating ICA into the school curriculum."
                }
              ].map((ev, idx) => {
                const Icon = ev.icon;
                return (
                  <div key={idx} className="bg-[#F8F9FB] rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4 hover:border-[#C8A24A]/40 transition-all duration-300 group card-hover-lift">
                    <div className="w-11 h-11 rounded-xl bg-white text-[#0B2D6B] flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#0B2D6B] group-hover:text-[#C8A24A] transition-colors duration-300">
                      <Icon size={20} className="icon-hover-rotate" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-serif font-bold text-sm text-[#0B2D6B] flex items-center justify-between">
                        <span>{ev.title}</span>
                        <ChevronRight size={14} className="text-[#C8A24A] group-hover:translate-x-1 transition-transform duration-300" />
                      </h4>
                      <p className="text-slate-500 text-xs font-light leading-relaxed">
                        {ev.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </AnimatedSection>

          </section>
        )}

        </div>

        {/* ─── REGISTER FOR NEXT EVENT CTA ─── */}
        <AnimatedSection animation="scaleIn">
          <section className="bg-gradient-to-r from-[#C8A24A] to-[#9E7B2B] rounded-3xl p-8 sm:p-12 text-white text-center shadow-elevated relative overflow-hidden animate-gradient-shift" style={{backgroundSize: '200% 200%'}}>
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-gradient-shift pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                Register for the Next ICA Event
              </h2>
              <p className="text-white/90 text-xs sm:text-sm font-light max-w-xl mx-auto mb-6 leading-relaxed">
                Don't miss your chance to compete, learn, and connect with the global ICA community. Contact us to learn about upcoming events.
              </p>
              <button
                onClick={() => setActivePage && setActivePage('contact')}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071d47] transition-all duration-300 shadow-lg hover:shadow-elevated transform hover:-translate-y-1 group"
              >
                Inquire About Events <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </section>
        </AnimatedSection>

      </div>
    </div>
  );
}
