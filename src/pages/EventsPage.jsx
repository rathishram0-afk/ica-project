import React, { useState } from 'react';
import { Trophy, Calendar, Users, Globe, ArrowRight, Star, ChevronRight } from 'lucide-react';

const competitions = [
  {
    title: "ICA National Championship",
    level: "National",
    color: "#0B2D6B",
    desc: "Students compete at a national level showcasing their speed, accuracy, and advanced solving techniques.",
    highlights: ["Age categories for all levels", "Certified judging panel", "Prize & certification awards"],
  },
  {
    title: "ICA International Championship",
    level: "International",
    color: "#C8A24A",
    desc: "The pinnacle of ICA competition—students from across the globe compete for the prestigious International title.",
    highlights: ["Participants from 20+ countries", "Live streaming & media coverage", "Gold, Silver & Bronze trophies"],
  },
  {
    title: "School Inter-Competition",
    level: "Inter-School",
    color: "#16489C",
    desc: "Schools compete against each other, fostering team spirit, healthy rivalry, and institutional pride.",
    highlights: ["Team & individual events", "Rolling trophy awarded", "School accreditation recognition"],
  },
];

const events = [
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

export default function EventsPage({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('competitions');

  return (
    <div className="w-full bg-white text-slate-800">

      {/* PAGE HEADER */}
      <section className="relative py-16 lg:py-20 bg-[#F8F9FB] border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.10] world-map-bg pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white px-5 py-2 rounded-full border border-[#C8A24A]/40 shadow-xs">
            <Trophy size={14} /> Events & Competitions
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D6B] leading-tight">
            Showcase Your Skills on the<br />
            <span className="text-[#C8A24A]">Global Stage</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            ICA organizes world-class competitions, conferences, and workshops that inspire learners, connect educators, and celebrate excellence in brain-based learning.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-16">

        {/* TAB NAVIGATION */}
        <div className="flex justify-center">
          <div className="inline-flex bg-[#F8F9FB] rounded-full p-1.5 border border-slate-200 gap-1">
            {[
              { id: 'competitions', label: 'Competitions', icon: Trophy },
              { id: 'workshops', label: 'Conferences & Workshops', icon: Calendar },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#0B2D6B] text-white shadow-sm'
                      : 'text-slate-500 hover:text-[#0B2D6B]'
                  }`}
                >
                  <Icon size={13} /> {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* COMPETITIONS TAB */}
        {activeTab === 'competitions' && (
          <section>
            <div className="text-center mb-10">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">Compete & Excel</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] mt-1">International Competitions</h2>
              <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto font-light leading-relaxed">
                ICA organizes competitions that encourage students to challenge themselves, build confidence, and showcase their skills on national and international platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {competitions.map((comp, i) => (
                <div key={i} className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:-translate-y-1 transition-all duration-200">
                  <div className="h-2" style={{ backgroundColor: comp.color }}></div>
                  <div className="p-6 bg-[#F8F9FB]">
                    <div
                      className="inline-block text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4"
                      style={{ backgroundColor: `${comp.color}15`, color: comp.color }}
                    >
                      {comp.level}
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#0B2D6B] mb-2">{comp.title}</h3>
                    <p className="text-slate-500 text-xs font-light leading-relaxed mb-4">{comp.desc}</p>
                    <ul className="space-y-1.5">
                      {comp.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-slate-600">
                          <ChevronRight size={12} className="text-[#C8A24A]" /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Competition Stats */}
            <div className="bg-gradient-to-br from-[#0B2D6B] to-[#16489C] rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none rounded-3xl"></div>
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { num: "50+", label: "Annual Competitions" },
                  { num: "10K+", label: "Student Participants" },
                  { num: "20+", label: "Countries Competing" },
                  { num: "100%", label: "Certified Results" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-serif text-3xl font-extrabold text-[#C8A24A]">{s.num}</div>
                    <div className="text-slate-200 text-xs mt-1 font-light">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* WORKSHOPS TAB */}
        {activeTab === 'workshops' && (
          <section>
            <div className="text-center mb-10">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">Learn & Connect</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] mt-1">Conferences & Workshops</h2>
              <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto font-light leading-relaxed">
                Our conferences and workshops bring together educators, researchers, students, and industry leaders to share ideas, inspire innovation, and promote educational excellence.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {events.map((ev, i) => {
                const Icon = ev.icon;
                return (
                  <div key={i} className="bg-[#F8F9FB] rounded-3xl p-6 border border-slate-200/80 hover:border-[#C8A24A]/50 hover:-translate-y-1 transition-all duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center shrink-0">
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#C8A24A] mb-1">{ev.type}</div>
                        <h3 className="font-serif font-bold text-base text-[#0B2D6B] mb-2">{ev.title}</h3>
                        <p className="text-slate-500 text-xs font-light leading-relaxed">{ev.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#C8A24A] to-[#9E7B2B] rounded-3xl p-8 sm:p-10 text-white text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">Register for the Next ICA Event</h2>
          <p className="text-white/80 text-sm font-light max-w-xl mx-auto mb-6 leading-relaxed">
            Don't miss your chance to compete, learn, and connect with the global ICA community. Contact us to learn about upcoming events.
          </p>
          <button
            onClick={() => setActivePage && setActivePage('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071d47] transition-all shadow-lg"
          >
            Inquire About Events <ArrowRight size={14} />
          </button>
        </section>

      </div>
    </div>
  );
}
