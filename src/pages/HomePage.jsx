import React, { useState } from 'react';
import { 
  ArrowRight, Brain, Globe, GraduationCap, Trophy, Users, CheckCircle2, 
  Sparkles, Award, Lightbulb, Send, ChevronRight, School, ChevronLeft
} from 'lucide-react';

export default function HomePage({ setActivePage }) {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 4000);
      setEmailInput('');
    }
  };

  const whyChooseChecklist = [
    "Internationally Designed Curriculum",
    "STEM & Brain Development Programs",
    "Certified Teacher Training",
    "Student Certification Pathways",
    "School Accreditation Programs",
    "Research-Based Learning Methodology",
    "International Competitions & Championships",
    "Leadership & Innovation Development",
    "Global Learning Community",
    "Programs for Children, Adults & Senior Citizens",
    "Online & Offline Learning",
    "International Recognition"
  ];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION – Full Background Image with Overlay */}
      {/* ---------------------------------------------------- */}
      <section
        className="relative overflow-hidden min-h-[92vh] flex flex-col"
        style={{
          backgroundImage: "url('/images/hero/ica-hero-banner.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Left gradient overlay — dark on left for text, fades to transparent on right */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: 'linear-gradient(100deg, rgba(4,18,50,0.82) 0%, rgba(11,46,107,0.65) 38%, rgba(11,46,107,0.15) 62%, transparent 100%)',
          }}
        />

        {/* Main Hero Content */}
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10 flex-1 flex items-center py-20 lg:py-28">
          <div className="w-full lg:w-[50%] space-y-7">

            {/* Welcome Badge */}
            <div className="inline-block text-[11px] font-semibold tracking-widest text-[#C8A24A] bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-[#C8A24A]/50 shadow-sm">
              WELCOME TO INTERNATIONAL CUBE ACADEMY
            </div>

            {/* Headline */}
            <h1 className="font-serif font-extrabold leading-[1.1] tracking-tight">
              <span className="text-white text-5xl sm:text-6xl lg:text-[4.2rem] block drop-shadow-lg">Empowering Minds.</span>
              <span className="text-[#C8A24A] text-5xl sm:text-6xl lg:text-[4.2rem] block drop-shadow-lg">Building Tomorrow.</span>
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-sm sm:text-[15px] leading-[1.9] font-light max-w-[490px]">
              The International Cube Academy (ICA) is a global educational institution dedicated to developing cognitive skills through Rubik's Cube-based learning. Our innovative programs combine brain development, STEM education, creativity, and leadership to help learners of all ages unlock their full potential.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setActivePage('about')}
                className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#0B2D6B] text-white hover:bg-[#071d47] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 group border border-white/20"
              >
                <span>ABOUT ICA</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setActivePage('contact')}
                className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#C8A24A] text-white hover:bg-[#b89035] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                <span>PARTNER WITH US</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

        {/* Stats Bar — frosted glass bar pinned to bottom of hero */}
        <div className="relative z-10 w-full">
          <div
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20 border-t border-white/20"
            style={{ background: 'rgba(5,18,50,0.55)', backdropFilter: 'blur(14px)' }}
          >
            {[
              { icon: Globe,  num: "20+",  title: "Countries",          sub: "Global presence across 5 continents" },
              { icon: School, num: "500+", title: "Schools",            sub: "Partnered educational institutions worldwide" },
              { icon: Users,  num: "1M+",  title: "Learners",           sub: "Empowering learners of all ages" },
              { icon: Award,  num: "100+", title: "Certified Trainers", sub: "Trained & accredited professionals" },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3.5 px-6 py-5 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/15 text-[#C8A24A] flex items-center justify-center shrink-0">
                  <stat.icon size={20} />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-extrabold text-white font-serif">{stat.num}</span>
                    <span className="text-[11px] font-bold text-[#C8A24A]">{stat.title}</span>
                  </div>
                  <div className="text-[10px] text-white/55 font-light mt-0.5 leading-tight">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>


      {/* ---------------------------------------------------- */}
      {/* WHY CHOOSE INTERNATIONAL CUBE ACADEMY? (Verbatim Client Copy) */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          
          <div className="mb-8">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block mb-2">
              WHY CHOOSE US
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] mb-3">
              Why Choose International Cube Academy?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light max-w-3xl">
              At ICA, we believe that every child has extraordinary potential. Our mission is to unlock that potential through innovative educational experiences.
            </p>
          </div>

          {/* 12 Bullet Points Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {whyChooseChecklist.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#F8F9FB] p-4 rounded-2xl border border-slate-200/80 hover:border-[#C8A24A]/50 transition-all flex items-center gap-3 shadow-xs"
              >
                <div className="w-8 h-8 rounded-xl bg-[#0B2D6B]/5 text-[#C8A24A] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#0B2D6B]">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* OUR IMPACT SECTION (Verbatim Client Copy) */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-[#0B2D6B] text-white relative overflow-hidden">
        {/* World Map Overlay */}
        <div className="absolute inset-0 opacity-15 world-map-bg pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="w-full h-64 border border-[#C8A24A]/30 rounded-2xl bg-[#071d47]/60 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-md">
                <Globe size={48} className="text-[#C8A24A] mb-3 animate-pulse" />
                <span className="text-xs font-mono text-slate-300">Global Educational Network Map</span>
                <span className="text-[10px] text-[#C8A24A] mt-1">Connecting Students & Schools Worldwide</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">
                OUR IMPACT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                Creating a Global Impact
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light">
                ICA is building a global learning community by empowering students, educators, schools, and training centres through quality education, internationally recognized certification programs, and innovative teaching methodologies.
              </p>

              <div>
                <button 
                  onClick={() => setActivePage('about')}
                  className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-[#C8A24A] text-white hover:bg-[#b89035] transition-colors inline-flex items-center gap-2 shadow-md"
                >
                  <span>Read Full ICA Profile</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* NEWSLETTER SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="py-14 bg-[#F8F9FB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="flex items-center gap-5 max-w-xl">
              <div className="w-14 h-14 rounded-full bg-[#C8A24A]/15 text-[#C8A24A] flex items-center justify-center shrink-0">
                <Send size={24} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-[#0B2D6B]">Stay Updated with ICA</h3>
                <p className="text-slate-600 text-xs font-light mt-1">
                  Subscribe to our newsletter and never miss important updates, events and opportunities.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto items-center gap-2">
              <input 
                type="email"
                required
                placeholder="Enter your email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="px-4 py-3 rounded-full bg-[#F8F9FB] border border-slate-200 text-xs text-[#0B2D6B] focus:outline-none focus:border-[#C8A24A] w-full md:w-64"
              />
              <button 
                type="submit"
                className="px-6 py-3 rounded-full bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071d47] transition-colors shrink-0 shadow-sm"
              >
                Subscribe
              </button>
            </form>

          </div>

          {emailSubmitted && (
            <div className="mt-4 p-3 bg-emerald-50 text-emerald-800 text-xs rounded-lg text-center animate-fadeIn">
              ✓ Thank you for subscribing to ICA updates.
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
