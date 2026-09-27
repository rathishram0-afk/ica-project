import React, { useEffect, useRef } from 'react';
import {
  ArrowRight,
  GraduationCap,
  Trophy,
  Users,
  CheckCircle2,
  Sparkles,
  Award,
  Calendar
} from 'lucide-react';
import anime from 'animejs';
import AnimatedSection from '../components/AnimatedSection';
import ParticleField from '../components/ParticleField';
import MagneticButton from '../components/MagneticButton';

/* Stat counter sub-component — Institutional Achievement Strip (Static Final Values) */
function StatItem({ icon: Icon, num, label }) {
  return (
    <div className="flex items-center justify-start sm:justify-center gap-3 p-3.5 sm:px-5 sm:py-3 min-w-0">
      <div className="w-9 h-9 rounded-xl bg-[#FEF9EE] text-[#B08A2E] flex items-center justify-center shrink-0 border border-[#F3E5C8]">
        <Icon size={17} />
      </div>
      <div className="min-w-0">
        <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#0B2D6B] font-serif leading-none">
          {num}
        </div>
        <div className="text-[11px] font-medium text-slate-600 mt-1 font-sans leading-tight">
          {label}
        </div>
      </div>
    </div>
  );
}

export default function HomePage({ setActivePage }) {
  const heroContentRef = useRef(null);

  // Hero entrance animation timeline
  useEffect(() => {
    if (!heroContentRef.current) return;
    const tl = anime.timeline({ easing: 'easeOutCubic' });

    tl
      .add({
        targets: heroContentRef.current.querySelector('.hero-label-block'),
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
      })
      .add({
        targets: heroContentRef.current.querySelectorAll('.hero-headline span'),
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        delay: anime.stagger(150),
      }, '-=250')
      .add({
        targets: heroContentRef.current.querySelector('.hero-desc'),
        opacity: [0, 1],
        translateY: [25, 0],
        duration: 550,
      }, '-=350')
      .add({
        targets: heroContentRef.current.querySelectorAll('.hero-cta'),
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.95, 1],
        duration: 500,
        delay: anime.stagger(100),
      }, '-=300');
  }, []);

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
      {/* HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section
        className="relative w-full overflow-hidden bg-[#F7F7F9] border-b border-slate-200/70 flex flex-col justify-between"
      >
        {/* Hero artwork with responsive mobile opacity and positioning matching reference */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/hero/ica-about-cube.png"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="absolute top-[44%] -translate-y-1/2 sm:top-[46%] sm:-translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-0 right-[-2%] sm:right-0 md:right-0 h-[68%] sm:h-[75%] md:h-full w-[80%] sm:w-[70%] md:w-[64%] lg:w-[58%] object-contain object-right select-none opacity-[0.14] sm:opacity-20 md:opacity-100 transition-all duration-300 pointer-events-none"
          />
          {/* Subtle gradient overlays to guarantee maximum text readability on all phone screens */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F7F9] via-[#F7F7F9]/80 to-transparent md:via-[#F7F7F9]/40 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-12 sm:h-20 bg-gradient-to-t from-[#F7F7F9] to-transparent pointer-events-none" />
        </div>

        {/* Hero Left Content Container */}
        <div ref={heroContentRef} className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 flex-1 flex items-center py-6 sm:py-10 lg:py-14">
          <div className="w-full lg:w-[52%] xl:w-[48%] space-y-3.5 sm:space-y-5">

            {/* CHANGE 1 — HERO LABEL / TAGLINE (Exact photo match) */}
            <div className="hero-label-block flex items-start gap-3" style={{opacity: 0}}>
              <div className="w-[3px] h-8 sm:h-9 bg-[#B08A2E] rounded-full shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#0B2D6B] leading-tight font-sans">
                  INTERNATIONAL CUBE ACADEMY
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide mt-1 font-sans">
                  A Global Community for Cognitive Growth
                </div>
              </div>
            </div>

            {/* Main Headline (Preserved Exactly) */}
            <h1 className="hero-headline font-serif font-extrabold leading-[1.14] sm:leading-[1.1] tracking-tight pt-0.5 sm:pt-1">
              <span className="text-[#0B2D6B] text-3xl sm:text-5xl xl:text-6xl block" style={{opacity: 0}}>Empowering Minds.</span>
              <span className="text-[#B08A2E] text-3xl sm:text-5xl xl:text-6xl block" style={{opacity: 0}}>Building Tomorrow.</span>
            </h1>

            {/* Description Paragraph */}
            <p className="hero-desc text-slate-600 text-xs sm:text-sm lg:text-[15px] font-light max-w-lg leading-relaxed" style={{opacity: 0}}>
              The International Cube Academy (ICA) is a global educational institution dedicated to developing cognitive skills through Rubik's Cube-based learning. Our innovative programs combine brain development, STEM education, creativity, and leadership to help learners of all ages unlock their full potential.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto">
              <MagneticButton
                onClick={() => setActivePage('about')}
                className="hero-cta bg-[#0B2D6B] px-6 sm:px-7 py-3.5 min-h-[44px] rounded-full font-bold text-xs uppercase tracking-wider text-white hover:bg-[#05183B] border border-[#0B2D6B] transition-all duration-400 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group w-full sm:w-auto"
                style={{opacity: 0}}
              >
                <span>ABOUT ICA</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300 text-[#C8A24A]" />
              </MagneticButton>
              <MagneticButton
                onClick={() => setActivePage('contact')}
                className="hero-cta bg-white/90 px-6 sm:px-7 py-3.5 min-h-[44px] rounded-full font-bold text-xs uppercase tracking-wider text-[#8A6B1F] hover:text-[#0B2D6B] border border-[#C8A24A]/80 hover:border-[#0B2D6B] transition-all duration-400 shadow-xs hover:shadow-sm flex items-center justify-center gap-2 group w-full sm:w-auto"
                style={{opacity: 0}}
              >
                <span>PARTNER WITH US</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300 text-[#C8A24A]" />
              </MagneticButton>
            </div>

          </div>
        </div>

        {/* CHANGE 2 — STATISTICS / METRICS AREA (Static values & balanced 2-column mobile layout) */}
        <AnimatedSection animation="fadeUp" delay={800} className="relative z-10 w-full bg-white border-t border-slate-200/80 shadow-xs">
          <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-slate-200/80 py-1 sm:py-2 items-center">
              <StatItem icon={Users} num="15+" label="Years of Experience" />
              <StatItem icon={GraduationCap} num="1 Lakh+" label="Students Trained" />
              <StatItem icon={Calendar} num="80+" label="Events Organized" />
              <StatItem icon={Trophy} num="12+" label="Guinness World Records" />
              {/* Rightmost Institutional Tagline (Matching photo) */}
              <div className="col-span-2 md:col-span-1 hidden md:flex flex-col justify-center px-4 sm:px-6 py-2 sm:py-1">
                <div className="font-serif italic text-xs sm:text-sm text-[#0B2D6B] font-semibold leading-tight">
                  More Than a Puzzle.
                </div>
                <div className="font-serif italic text-xs sm:text-sm text-[#0B2D6B] font-semibold leading-tight mt-0.5">
                  A Global Community.
                </div>
                <div className="w-6 h-[2px] bg-[#C8A24A] mt-2 rounded-full" />
              </div>
            </div>
          </div>
        </AnimatedSection>

      </section>


      {/* ---------------------------------------------------- */}
      {/* WHY CHOOSE INTERNATIONAL CUBE ACADEMY? */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-white border-b border-slate-100 relative overflow-hidden">
        {/* Decorative background shape */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#C8A24A]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#0B2D6B]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          
          <AnimatedSection animation="fadeUp" className="mb-8">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block mb-2">
              WHY CHOOSE US
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] mb-3">
              Why Choose International Cube Academy?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light max-w-3xl">
              At ICA, we believe that every child has extraordinary potential. Our mission is to unlock that potential through innovative educational experiences.
            </p>
          </AnimatedSection>

          {/* 12 Bullet Points Grid */}
          <AnimatedSection animation="stagger" staggerDelay={60} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {whyChooseChecklist.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#F8F9FB] p-4 rounded-2xl border border-slate-200/80 hover:border-[#C8A24A]/50 transition-all duration-300 flex items-center gap-3 shadow-xs card-hover-lift group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#0B2D6B]/5 text-[#C8A24A] flex items-center justify-center shrink-0 group-hover:bg-[#C8A24A] group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#0B2D6B]">{item}</span>
              </div>
            ))}
          </AnimatedSection>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* ACHIEVEMENTS PREVIEW SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-[#F8F9FB] border-t border-b border-slate-100 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-10 left-10 w-40 h-40 border border-[#C8A24A]/10 rounded-full animate-spin-slow pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 space-y-10">
          
          <AnimatedSection animation="fadeUp" className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
              EXCELLENCE THAT INSPIRES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] pt-1">
              Excellence That Inspires
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
              From student milestones to meaningful recognition, ICA celebrates achievements that inspire the next generation of cubers.
            </p>
          </AnimatedSection>

          {/* 3 Achievement Preview Cards */}
          <AnimatedSection animation="stagger" staggerDelay={120} className="grid md:grid-cols-3 gap-6">
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
                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-[#C8A24A] card-hover-lift transition-all duration-400 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center shadow-xs group-hover:bg-[#C8A24A] group-hover:text-white transition-colors duration-300">
                      <Icon size={24} className="icon-hover-rotate" />
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
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={200} className="text-center pt-2">
            <button
              onClick={() => setActivePage('achievements')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071d47] transition-all duration-300 shadow-md hover:shadow-elevated transform hover:-translate-y-1 group"
            >
              <span>VIEW ALL ACHIEVEMENTS</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </AnimatedSection>

        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* OUR IMPACT SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 lg:py-20 bg-[#0B2D6B] text-white relative overflow-hidden">
        {/* World Map Background Overlay */}
        <div className="absolute inset-0 opacity-15 world-map-bg pointer-events-none"></div>
        <ParticleField count={12} />

        {/* Decorative */}
        <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-[#C8A24A]/10 rounded-full animate-float-slow pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
              OUR IMPACT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Creating a Global Impact
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
              ICA is building a global learning community by empowering students, educators, schools, and training centres through quality education, internationally recognized certification programs, and innovative teaching methodologies.
            </p>

            <div className="pt-2">
              <button 
                onClick={() => setActivePage('about')}
                className="gold-btn px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white transition-all duration-300 inline-flex items-center gap-2 shadow-md hover:shadow-gold-glow transform hover:-translate-y-0.5 group"
              >
                <span>Read Full ICA Profile</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>



    </div>
  );
}
