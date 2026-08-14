import React, { useState } from 'react';
import { 
  ArrowRight, Brain, Globe, GraduationCap, Trophy, Users, CheckCircle2, 
  Sparkles, Award, Lightbulb, Send, ChevronRight, School, ChevronLeft, Calendar
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
      {/* HERO SECTION – Complete Composition with Content & Stats */}
      {/* ---------------------------------------------------- */}
      <section 
        className="relative w-full overflow-hidden bg-[#07245b] border-b border-slate-100 flex flex-col justify-between"
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero/ica-hero-cube.png" 
            alt="International Cube Academy Hero Visual" 
            className="w-full h-full object-cover object-[80%_center] lg:object-right block select-none pointer-events-none"
          />
          {/* Gradient overlay for contrast on left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#041232]/85 via-[#07245b]/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Left Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 flex-1 flex items-center py-10 lg:py-14">
          <div className="w-full lg:w-[52%] xl:w-[48%] space-y-5 sm:space-y-6">

            {/* Outlined Gold Badge */}
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C8A24A]/40 shadow-xs">
              WELCOME TO INTERNATIONAL CUBE ACADEMY
            </div>

            {/* Main Headline */}
            <h1 className="font-serif font-extrabold leading-[1.1] tracking-tight">
              <span className="text-white text-3xl sm:text-5xl xl:text-6xl block drop-shadow-md">Empowering Minds.</span>
              <span className="text-[#C8A24A] text-3xl sm:text-5xl xl:text-6xl block drop-shadow-md">Building Tomorrow.</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-slate-100/90 text-xs sm:text-sm lg:text-[15px] font-light max-w-lg leading-relaxed">
              The International Cube Academy (ICA) is a global educational institution dedicated to developing cognitive skills through Rubik’s Cube-based learning. Our innovative programs combine brain development, STEM education, creativity, and leadership to help learners of all ages unlock their full potential.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-1 sm:pt-2">
              <button
                onClick={() => setActivePage('about')}
                className="px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-[#0B2D6B]/80 text-white hover:bg-[#0B2D6B] border border-white/30 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 group backdrop-blur-xs"
              >
                <span>ABOUT ICA</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#C8A24A]" />
              </button>
              <button
                onClick={() => setActivePage('contact')}
                className="px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-[#C8A24A] text-white hover:bg-[#b89035] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                <span>PARTNER WITH US</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Statistics Panel */}
        <div className="relative z-10 w-full bg-[#051232]/75 backdrop-blur-md border-t border-white/15">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15 py-3 sm:py-4">
              {[
                { icon: Award, num: "15+", label: "Years of Experience" },
                { icon: GraduationCap, num: "1 Lakh+", label: "Students Trained" },
                { icon: Calendar, num: "80+", label: "Events Organized" },
                { icon: Trophy, num: "8+", label: "Guinness World Records" },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 px-4 sm:px-6 py-2">
                    <div className="w-9 h-9 rounded-xl bg-white/10 text-[#C8A24A] flex items-center justify-center shrink-0 border border-white/10">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-extrabold text-white font-serif leading-none">
                        {stat.num}
                      </div>
                      <div className="text-[11px] font-bold text-[#C8A24A] uppercase tracking-wider mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
      {/* ACHIEVEMENTS PREVIEW SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-[#F8F9FB] border-t border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 space-y-10">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white px-4 py-1.5 rounded-full border border-[#C8A24A]/30">
              EXCELLENCE THAT INSPIRES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] pt-1">
              Excellence That Inspires
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
              From student milestones to meaningful recognition, ICA celebrates achievements that inspire the next generation of cubers.
            </p>
          </div>

          {/* 3 Achievement Preview Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Trophy,
                title: "Guinness World Record Training",
                desc: "Trained 6 students for Guinness World Record attempts in Rubik's Cube solving."
              },
              {
                icon: GraduationCap,
                title: "Student Excellence",
                desc: "Empowering 10,000+ students across schools and international platforms."
              },
              {
                icon: Award,
                title: "Awards & Recognition",
                desc: "Honored with national and international awards for social impact and cubing education."
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-[#C8A24A] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center shadow-xs group-hover:bg-[#C8A24A] group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif font-bold text-base text-[#0B2D6B]">
                        {card.title}
                      </h3>
                      <p className="text-slate-500 text-xs font-light leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => setActivePage('achievements')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071d47] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group"
            >
              <span>VIEW ALL ACHIEVEMENTS</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
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
              <div className="w-full h-64 sm:h-72 border border-[#C8A24A]/30 rounded-2xl p-0 overflow-hidden shadow-md group relative">
                <img 
                  src="/images/events/world-map.png" 
                  alt="ICA World Map" 
                  className="w-full h-full object-cover object-center block select-none transform group-hover:scale-[1.02] transition-transform duration-500"
                />
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
