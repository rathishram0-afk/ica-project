import React, { useState } from 'react';
import { Trophy, Calendar, Users, Globe, ArrowRight, Star, ChevronRight, Award, GraduationCap, School } from 'lucide-react';

export default function EventsPage({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('competitions');

  const workshops = [
    {
      type: "Conference",
      icon: Globe,
      title: "ICA Global Education Summit",
      desc: "Bringing together educators, researchers, and educational leaders to share innovations in brain-based learning and cognitive education.",
    },
    {
      type: "Workshop",
      icon: Users,
      title: "Teacher Development Workshops",
      desc: "Hands-on training sessions for educators to enhance their teaching skills using ICA's internationally recognized methodologies.",
    },
    {
      type: "Webinar",
      icon: Star,
      title: "Parent & Student Webinars",
      desc: "Online sessions to guide parents and students on ICA programs, certification pathways, and brain development strategies.",
    },
    {
      type: "Seminar",
      icon: Calendar,
      title: "School Leadership Seminars",
      desc: "Strategic discussions for school principals and administrators on integrating ICA into the core school curriculum.",
    },
  ];

  return (
    <div className="w-full bg-white text-slate-800">

      {/* ---------------------------------------------------- */}
      {/* PAGE HEADER */}
      {/* ---------------------------------------------------- */}
      <section className="relative py-14 lg:py-18 bg-[#F8F9FB] border-b border-slate-100 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.10] world-map-bg pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white px-4 py-1.5 rounded-full border border-[#C8A24A]/30 shadow-xs">
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
                onClick={() => setActiveTab('competitions')}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'competitions'
                    ? 'bg-[#0B2D6B] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0B2D6B]'
                }`}
              >
                <Trophy size={14} /> COMPETITIONS
              </button>
              <button
                onClick={() => setActiveTab('workshops')}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'workshops'
                    ? 'bg-[#0B2D6B] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0B2D6B]'
                }`}
              >
                <Calendar size={14} /> CONFERENCES & WORKSHOPS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* MAIN CONTENT AREA */}
      {/* ---------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 lg:py-16 space-y-16">

        {/* ─── COMPETITIONS TAB CONTENT ─── */}
        {activeTab === 'competitions' && (
          <section className="relative bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-10 overflow-hidden">
            
            {/* SECTION HEADER CONTENT */}
            <div className="relative z-10 space-y-2 max-w-xl text-left">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">
                — INTERNATIONAL COMPETITIONS
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2D6B]">
                Celebrating Talent. Encouraging Excellence.
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                ICA competitions encourage students to push their limits, think critically, and demonstrate their abilities in a spirit of healthy competition.
              </p>
            </div>

            {/* TWO MAIN COMPETITION PHOTO CARDS */}
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              
              {/* CARD 1: TNCA-img-1.webp */}
              <div className="bg-[#F8F9FB] rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  {/* Photo 1 */}
                  <div className="overflow-hidden rounded-2xl shadow-sm bg-slate-100">
                    <img 
                      src="/images/events/TNCA-img-1.webp" 
                      alt="Competition Highlights - ICA Students with Trophies" 
                      className="w-full h-56 sm:h-64 object-cover block transform group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-10 h-10 rounded-2xl bg-[#0B2D6B] text-white flex items-center justify-center shrink-0 shadow-xs">
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

              {/* CARD 2: TNCA-img-2.webp */}
              <div className="bg-[#F8F9FB] rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  {/* Photo 2 */}
                  <div className="overflow-hidden rounded-2xl shadow-sm bg-slate-100">
                    <img 
                      src="/images/events/TNCA-img-2.webp" 
                      alt="Championship Recognition - Award Ceremony" 
                      className="w-full h-56 sm:h-64 object-cover block transform group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-10 h-10 rounded-2xl bg-[#0B2D6B] text-white flex items-center justify-center shrink-0 shadow-xs">
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

            </div>

            {/* THREE COMPETITION LEVEL CARDS */}
            <div className="grid md:grid-cols-3 gap-6 relative z-10 pt-2">
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
                  <div key={idx} className="bg-[#F8F9FB] rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4 hover:border-[#C8A24A]/40 transition-colors group">
                    <div className="w-11 h-11 rounded-xl bg-white text-[#0B2D6B] flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#0B2D6B] group-hover:text-[#C8A24A] transition-colors">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-serif font-bold text-sm text-[#0B2D6B] flex items-center justify-between">
                        <span>{comp.title}</span>
                        <ChevronRight size={14} className="text-[#C8A24A]" />
                      </h4>
                      <p className="text-slate-500 text-xs font-light leading-relaxed">
                        {comp.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* COMPETITION STATS BAR AT BOTTOM */}
            <div className="bg-[#0B2D6B] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-md z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { icon: Users, num: "50+", label: "Annual Competitions" },
                  { icon: Star, num: "10K+", label: "Student Participants" },
                  { icon: Globe, num: "20+", label: "Countries Competing" },
                  { icon: Award, num: "100%", label: "Certified Results" }
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="flex flex-col items-center justify-center space-y-1">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#C8A24A] mb-1">
                        <Icon size={18} />
                      </div>
                      <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#C8A24A]">
                        {stat.num}
                      </div>
                      <div className="text-slate-200 text-xs font-light">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </section>
        )}

        {/* ─── WORKSHOPS & CONFERENCES TAB CONTENT ─── */}
        {activeTab === 'workshops' && (
          <section className="relative bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-10 overflow-hidden">
            
            {/* SECTION HEADER CONTENT */}
            <div className="relative z-10 space-y-2 max-w-xl text-left">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">
                — CONFERENCES & WORKSHOPS
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2D6B]">
                Inspiring Innovation. Sharing Knowledge.
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                Our conferences and workshops bring together educators, researchers, students, and industry leaders to share ideas and promote educational excellence.
              </p>
            </div>

            {/* TWO MAIN CONFERENCE & WORKSHOP PHOTO CARDS */}
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              
              {/* CARD 1: conference.jpg */}
              <div className="bg-[#F8F9FB] rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  {/* Photo 1 */}
                  <div className="overflow-hidden rounded-2xl shadow-sm bg-slate-100">
                    <img 
                      src="/images/events/conference.jpg" 
                      alt="Conferences - ICA Global Education Summit" 
                      className="w-full h-56 sm:h-64 object-cover block transform group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-10 h-10 rounded-2xl bg-[#0B2D6B] text-white flex items-center justify-center shrink-0 shadow-xs">
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

              {/* CARD 2: workshop.jpg */}
              <div className="bg-[#F8F9FB] rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  {/* Photo 2 */}
                  <div className="overflow-hidden rounded-2xl shadow-sm bg-slate-100">
                    <img 
                      src="/images/events/workshop.jpg" 
                      alt="Workshops - Teacher & Student Development" 
                      className="w-full h-56 sm:h-64 object-cover block transform group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-10 h-10 rounded-2xl bg-[#0B2D6B] text-white flex items-center justify-center shrink-0 shadow-xs">
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

            </div>

            {/* ADDITIONAL WORKSHOP CATEGORIES GRID */}
            <div className="grid md:grid-cols-2 gap-6 relative z-10 pt-2">
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
                  <div key={idx} className="bg-[#F8F9FB] rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4 hover:border-[#C8A24A]/40 transition-colors group">
                    <div className="w-11 h-11 rounded-xl bg-white text-[#0B2D6B] flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#0B2D6B] group-hover:text-[#C8A24A] transition-colors">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-serif font-bold text-sm text-[#0B2D6B] flex items-center justify-between">
                        <span>{ev.title}</span>
                        <ChevronRight size={14} className="text-[#C8A24A]" />
                      </h4>
                      <p className="text-slate-500 text-xs font-light leading-relaxed">
                        {ev.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </section>
        )}

        {/* ─── REGISTER FOR NEXT EVENT CTA ─── */}
        <section className="bg-gradient-to-r from-[#C8A24A] to-[#9E7B2B] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Register for the Next ICA Event
          </h2>
          <p className="text-white/90 text-xs sm:text-sm font-light max-w-xl mx-auto mb-6 leading-relaxed">
            Don't miss your chance to compete, learn, and connect with the global ICA community. Contact us to learn about upcoming events.
          </p>
          <button
            onClick={() => setActivePage && setActivePage('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071d47] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Inquire About Events <ArrowRight size={14} />
          </button>
        </section>

      </div>
    </div>
  );
}
