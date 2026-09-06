import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  GraduationCap,
  Trophy,
  CheckCircle2,
  Sparkles,
  Award,
  Send,
  Calendar
} from 'lucide-react';
import anime from 'animejs';
import useParallax from '../hooks/useParallax';
import useCountUp from '../hooks/useCountUp';
import AnimatedSection from '../components/AnimatedSection';
import ParticleField from '../components/ParticleField';
import SmartImage from '../components/SmartImage';
import MagneticButton from '../components/MagneticButton';
// three.js + drei weigh ~1MB minified — 84% of the bundle — for one decorative
// hero cube. Loading it lazily keeps that off the critical path so the rest of
// the site is interactive first; the cube streams in behind a soft placeholder.
const Cube3D = lazy(() => import('../components/Cube3D'));

/* Stat counter sub-component */
function StatItem({ icon: Icon, num, label }) {
  const { ref, displayValue } = useCountUp(num, 2200);
  return (
    <div className="flex items-center gap-3 px-4 sm:px-6 py-2">
      <div className="w-9 h-9 rounded-xl bg-white/10 text-[#C8A24A] flex items-center justify-center shrink-0 border border-white/10 icon-hover-rotate">
        <Icon size={18} />
      </div>
      <div>
        <div ref={ref} className="text-xl sm:text-2xl font-extrabold text-white font-serif leading-none">
          {displayValue}
        </div>
        <div className="text-[11px] font-bold text-[#C8A24A] uppercase tracking-wider mt-1">
          {label}
        </div>
      </div>
    </div>
  );
}

/** Holds the hero cube's space while three.js streams in. */
function Cube3DPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="w-full h-full flex items-center justify-center pointer-events-none"
    >
      <div className="w-1/2 h-1/2 rounded-[28%] bg-[radial-gradient(circle_at_50%_45%,rgba(200,162,74,0.22)_0%,rgba(200,162,74,0.07)_45%,transparent_70%)] animate-gold-glow" />
    </div>
  );
}

export default function HomePage({ setActivePage }) {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const heroContentRef = useRef(null);
  const parallaxBgRef = useParallax(0.15);

  // Hero entrance animation timeline
  useEffect(() => {
    if (!heroContentRef.current) return;
    const tl = anime.timeline({ easing: 'easeOutCubic' });

    tl
      .add({
        targets: heroContentRef.current.querySelector('.hero-badge'),
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
      })
      .add({
        targets: heroContentRef.current.querySelectorAll('.hero-headline span'),
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 700,
        delay: anime.stagger(150),
      }, '-=300')
      .add({
        targets: heroContentRef.current.querySelector('.hero-desc'),
        opacity: [0, 1],
        translateY: [25, 0],
        duration: 600,
      }, '-=400')
      .add({
        targets: heroContentRef.current.querySelectorAll('.hero-cta'),
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.9, 1],
        duration: 500,
        delay: anime.stagger(100),
      }, '-=300');
  }, []);

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
      {/* HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section 
        className="relative w-full overflow-hidden bg-[#07245b] border-b border-slate-100 flex flex-col justify-between"
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        {/* Background Layer with Interactive 3D Cube */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Position the cube slightly to the right */}
          <div ref={parallaxBgRef} className="absolute right-[-10%] md:right-[5%] lg:right-[15%] top-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[800px] md:h-[800px]">
            <Suspense fallback={<Cube3DPlaceholder />}>
              <Cube3D />
            </Suspense>
          </div>
          {/* Gradient overlay for contrast on left side text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#041232]/95 via-[#07245b]/80 to-transparent pointer-events-none" />
        </div>

        {/* Gold Particle Overlay */}
        <ParticleField count={20} />

        {/* Decorative floating shapes */}
        <div className="absolute top-20 right-[15%] w-24 h-24 border border-[#C8A24A]/15 rounded-full animate-float-slow pointer-events-none z-[2]"></div>
        <div className="absolute bottom-40 right-[30%] w-16 h-16 border border-white/10 rounded-full animate-float-medium pointer-events-none z-[2]"></div>
        <div className="absolute top-[40%] left-[5%] w-2 h-2 bg-[#C8A24A]/30 rounded-full animate-float-slow pointer-events-none z-[2]"></div>

        {/* Hero Left Content Container */}
        <div ref={heroContentRef} className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 flex-1 flex items-center py-10 lg:py-14">
          <div className="w-full lg:w-[52%] xl:w-[48%] space-y-5 sm:space-y-6">

            {/* Outlined Gold Badge */}
            <div className="hero-badge inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] glass px-4 py-1.5 rounded-full border border-[#C8A24A]/40 shadow-xs animate-border-shimmer" style={{opacity: 0}}>
              <Sparkles size={12} className="animate-float-medium" />
              WELCOME TO INTERNATIONAL CUBE ACADEMY
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline font-serif font-extrabold leading-[1.1] tracking-tight">
              <span className="text-white text-3xl sm:text-5xl xl:text-6xl block drop-shadow-md" style={{opacity: 0}}>Empowering Minds.</span>
              <span className="text-[#C8A24A] text-3xl sm:text-5xl xl:text-6xl block drop-shadow-md" style={{opacity: 0}}>Building Tomorrow.</span>
            </h1>

            {/* Description Paragraph */}
            <p className="hero-desc text-slate-100/90 text-xs sm:text-sm lg:text-[15px] font-light max-w-lg leading-relaxed" style={{opacity: 0}}>
              The International Cube Academy (ICA) is a global educational institution dedicated to developing cognitive skills through Rubik's Cube-based learning. Our innovative programs combine brain development, STEM education, creativity, and leadership to help learners of all ages unlock their full potential.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-1 sm:pt-2">
              <MagneticButton
                onClick={() => setActivePage('about')}
                className="hero-cta glass px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white hover:bg-white/15 border border-white/30 transition-all duration-400 shadow-md hover:shadow-lg flex items-center gap-2 group"
                style={{opacity: 0}}
              >
                <span>ABOUT ICA</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300 text-[#C8A24A]" />
              </MagneticButton>
              <MagneticButton
                onClick={() => setActivePage('contact')}
                className="hero-cta gold-btn px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white transition-all duration-400 shadow-md hover:shadow-lg flex items-center gap-2 group"
                style={{opacity: 0}}
              >
                <span>PARTNER WITH US</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </MagneticButton>
            </div>

          </div>
        </div>

        {/* Bottom Statistics Panel */}
        <AnimatedSection animation="fadeUp" delay={800} className="relative z-10 w-full glass-dark border-t border-white/15">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15 py-3 sm:py-4">
              <StatItem icon={Award} num="15+" label="Years of Experience" />
              <StatItem icon={GraduationCap} num="1 Lakh+" label="Students Trained" />
              <StatItem icon={Calendar} num="80+" label="Events Organized" />
              <StatItem icon={Trophy} num="8+" label="Guinness World Records" />
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
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white px-4 py-1.5 rounded-full border border-[#C8A24A]/30 animate-border-shimmer inline-block">
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
      <section className="py-16 bg-[#0B2D6B] text-white relative overflow-hidden">
        {/* World Map Overlay */}
        <div className="absolute inset-0 opacity-15 world-map-bg pointer-events-none"></div>
        <ParticleField count={12} />

        {/* Decorative */}
        <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-[#C8A24A]/10 rounded-full animate-float-slow pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <AnimatedSection animation="fadeLeft" className="lg:col-span-6">
              <div className="w-full h-64 sm:h-72 border border-[#C8A24A]/30 rounded-2xl p-0 overflow-hidden shadow-md group relative card-3d-tilt">
                <SmartImage 
                  src="/images/events/world-map.png" 
                  alt="ICA World Map" 
                  wrapperClassName="w-full h-full"
                  skeletonClassName="rounded-2xl"
                  className="w-full h-full object-cover object-center block select-none transform group-hover:scale-[1.05] transition-transform duration-700"
                />
                {/* Overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D6B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" className="lg:col-span-6 space-y-6">
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
                  className="gold-btn px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white transition-all duration-300 inline-flex items-center gap-2 shadow-md hover:shadow-gold-glow transform hover:-translate-y-0.5 group"
                >
                  <span>Read Full ICA Profile</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* NEWSLETTER SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="py-14 bg-[#F8F9FB] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#C8A24A]/5 rounded-full blur-3xl pointer-events-none"></div>

        <AnimatedSection animation="fadeUp" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-premium flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            {/* Shimmer accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent animate-gradient-shift"></div>

            <div className="flex items-center gap-5 max-w-xl">
              <div className="w-14 h-14 rounded-full bg-[#C8A24A]/15 text-[#C8A24A] flex items-center justify-center shrink-0 animate-gold-glow">
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
                className="px-4 py-3 rounded-full bg-[#F8F9FB] border border-slate-200 text-xs text-[#0B2D6B] focus:outline-none focus:border-[#C8A24A] focus:shadow-glass-gold transition-all duration-300 w-full md:w-64"
              />
              <button 
                type="submit"
                className="px-6 py-3 rounded-full bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071d47] transition-all duration-300 shrink-0 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
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
        </AnimatedSection>
      </section>

    </div>
  );
}
