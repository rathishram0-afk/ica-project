import React, { useEffect, useRef } from 'react';
import { Lightbulb, Users, ArrowRight, ShieldCheck, BookOpen, Sparkles, Trophy, Flag } from 'lucide-react';
import anime from 'animejs';
import useParallax from '../hooks/useParallax';
import AnimatedSection from '../components/AnimatedSection';
import ParticleField from '../components/ParticleField';
import SmartImage from '../components/SmartImage';
import { AnimatedBrain, AnimatedShield } from '../components/AnimatedIcons';
import MagneticButton from '../components/MagneticButton';

export default function AboutPage({ setActivePage }) {
  const heroRef = useRef(null);
  const imageParallaxRef = useParallax(0.1);

  // Hero entrance animation
  useEffect(() => {
    if (!heroRef.current) return;
    const tl = anime.timeline({ easing: 'easeOutCubic' });
    tl
      .add({
        targets: heroRef.current.querySelector('.about-badge'),
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
      })
      .add({
        targets: heroRef.current.querySelector('.about-headline'),
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
      }, '-=300')
      .add({
        targets: heroRef.current.querySelector('.about-tagline'),
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 500,
      }, '-=300')
      .add({
        targets: heroRef.current.querySelectorAll('.about-para'),
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        delay: anime.stagger(100),
      }, '-=200');
  }, []);

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* ---------------------------------------------------- */}
      {/* HERO / INTRO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative py-12 lg:py-16 bg-[#F8F9FB] border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.10] world-map-bg pointer-events-none"></div>
        {/* Decorative shapes */}
        <div className="absolute top-10 right-20 w-40 h-40 border border-[#C8A24A]/10 rounded-full animate-float-slow pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-[#0B2D6B]/10 rounded-full animate-float-medium pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN - Content */}
            <div ref={heroRef} className="lg:col-span-6 space-y-6 text-left">
              
              <div className="about-badge inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white px-4 py-1.5 rounded-full border border-[#C8A24A]/30 shadow-xs animate-border-shimmer" style={{opacity: 0}}>
                <Sparkles size={12} className="animate-float-medium" /> ABOUT ICA
              </div>

              <h1 className="about-headline font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D6B] leading-[1.15] tracking-tight" style={{opacity: 0}}>
                About International<br />
                <span className="text-[#0B2D6B]">Cube Academy</span>
              </h1>

              <p className="about-tagline text-[#C8A24A] font-serif text-base sm:text-lg font-bold italic tracking-wide" style={{opacity: 0}}>
                Shaping Minds. Inspiring Innovation. Creating Global Leaders.
              </p>

              <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-light pt-1">
                <p className="about-para text-slate-700 font-normal" style={{opacity: 0}}>
                  The <strong className="font-bold text-[#0B2D6B]">International Cube Academy (ICA)</strong> is a pioneering global educational organization dedicated to transforming lives through the power of the Rubik's Cube. More than just a puzzle academy, ICA is a comprehensive learning ecosystem that nurtures intelligence, creativity, critical thinking, leadership, and lifelong learning.
                </p>

                <p className="about-para" style={{opacity: 0}}>
                  Founded on the belief that every individual has unlimited potential, ICA integrates the Rubik's Cube with modern education, STEM learning, neuroscience, cognitive development, and 21st-century skills to empower learners of all ages.
                </p>

                <p className="about-para" style={{opacity: 0}}>
                  With a vision to establish ICA in schools, universities, training centres, and communities across the world, we strive to make quality brain development education accessible to everyone.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN - Image with Parallax */}
            <AnimatedSection animation="fadeRight" delay={300} className="lg:col-span-6 flex justify-center lg:justify-end items-center relative">
              <div ref={imageParallaxRef}>
                <SmartImage 
                  src="/images/hero/ica-about-cube.png" 
                  alt="International Cube Academy About Visual" 
                  loading="eager"
                  wrapperClassName="w-full max-w-[480px] lg:max-w-[520px] mx-auto lg:mr-0"
                  placeholderClassName="h-64 sm:h-80 lg:h-[380px]"
                  skeletonClassName="rounded-3xl"
                  variant="dark"
                  className="w-full h-auto object-contain block bg-transparent transform hover:scale-[1.03] transition-transform duration-500 animate-float-slow"
                />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 space-y-20">
        
        {/* ---------------------------------------------------- */}
        {/* OUR VISION & OUR MISSION */}
        {/* ---------------------------------------------------- */}
        <AnimatedSection animation="stagger" staggerDelay={150} as="section" className="grid md:grid-cols-2 gap-8">
          
          {/* Our Vision Card */}
          <div className="bg-[#F8F9FB] rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:border-[#C8A24A]/50 transition-all duration-400 card-3d-tilt">
            <div>
              <div className="w-14 h-14 bg-[#0B2D6B] rounded-2xl flex items-center justify-center text-[#C8A24A] mb-6 shadow-md border border-[#C8A24A]/20">
                <AnimatedBrain size={28} />
              </div>
              <h2 className="font-serif font-bold text-2xl text-[#0B2D6B] mb-3">Our Vision</h2>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                To become the world's leading academy for brain development and cognitive education, empowering learners through innovative cube-based learning experiences.
              </p>
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="bg-[#F8F9FB] rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:border-[#C8A24A]/50 transition-all duration-400 card-3d-tilt">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#C8A24A] text-white flex items-center justify-center mb-6 shadow-sm group-hover:shadow-gold-glow transition-shadow duration-300">
                <AnimatedShield size={28} />
              </div>
              <h2 className="font-serif font-bold text-2xl text-[#0B2D6B] mb-3">Our Mission</h2>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                To provide high-quality educational programs, teacher training, and international certifications that develop problem-solving, creativity, leadership, and lifelong learning.
              </p>
              <div className="mt-8">
                <MagneticButton
                  onClick={() => setActivePage && setActivePage('programs')}
                  className="gold-btn inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-gold-glow group w-full sm:w-auto"
                >
                  Explore Our Programs <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </MagneticButton>
              </div>
            </div>
          </div>

        </AnimatedSection>

        {/* ---------------------------------------------------- */}
        {/* OUR CORE VALUES */}
        {/* ---------------------------------------------------- */}
        <section className="space-y-8">
          <AnimatedSection animation="fadeUp" className="text-center space-y-1">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B]">Our Core Values</h2>
            <div className="w-12 h-0.5 bg-[#C8A24A] mx-auto mt-2"></div>
          </AnimatedSection>

          <AnimatedSection animation="stagger" staggerDelay={80} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Lightbulb, label: "Innovation", desc: "Neuroscience-backed learning" },
              { icon: Trophy, label: "Excellence", desc: "Setting global benchmarks" },
              { icon: ShieldCheck, label: "Integrity", desc: "Transparent accreditation" },
              { icon: Users, label: "Inclusion", desc: "Accessible for all ages" },
              { icon: Flag, label: "Leadership", desc: "Building future innovators" },
              { icon: BookOpen, label: "Lifelong Learning", desc: "Continuous skill development" }
            ].map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-[#F8F9FB] p-5 rounded-2xl border border-slate-200/80 text-center flex flex-col items-center group hover:border-[#C8A24A] transition-all duration-300 card-hover-lift">
                  <div className="w-12 h-12 rounded-2xl bg-white text-[#0B2D6B] flex items-center justify-center mb-3 shadow-xs border border-slate-100 group-hover:bg-[#0B2D6B] group-hover:text-[#C8A24A] transition-colors duration-300">
                    <Icon size={22} className="icon-hover-rotate" />
                  </div>
                  <div className="font-serif font-bold text-sm text-[#0B2D6B] mb-1">{val.label}</div>
                  <div className="text-[11px] text-slate-500 font-light leading-tight">{val.desc}</div>
                </div>
              );
            })}
          </AnimatedSection>
        </section>

        {/* ---------------------------------------------------- */}
        {/* FOUNDER & PRESIDENT SECTION */}
        {/* ---------------------------------------------------- */}
        <AnimatedSection animation="fadeUp" as="section" className="bg-[#F8F9FB] rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Founder Image Display */}
            <div className="lg:col-span-5 bg-[#0B2D6B] text-white p-8 flex flex-col items-center justify-between relative overflow-hidden text-center min-h-[420px]">
              <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none"></div>
              <ParticleField count={10} />
              
              <div className="w-full max-w-[320px] mx-auto relative z-10 my-auto">
                <SmartImage 
                  src="/images/founder/dr-r-chandrika.png" 
                  alt="Dr. R. Chandrika - Founder & President, International Cube Academy" 
                  wrapperClassName="w-full mx-auto"
                  placeholderClassName="h-72 sm:h-80"
                  skeletonClassName="rounded-2xl"
                  variant="dark"
                  className="w-full h-auto object-contain block rounded-2xl drop-shadow-xl transform hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* Badge Overlay */}
              <div className="w-full glass-dark rounded-2xl p-4 border border-[#C8A24A]/30 relative z-10 mt-6 space-y-1 animate-gold-glow">
                <div className="flex items-center justify-center gap-2 text-[#C8A24A] font-serif font-bold text-sm">
                  <Trophy size={16} className="animate-float-medium" /> WORLD MASTER OF CUBE
                </div>
                <div className="text-[11px] text-slate-300 font-light">
                  Expert in Brain Development & Cognitive Education
                </div>
              </div>
            </div>

            {/* Founder Biography Content */}
            <AnimatedSection animation="fadeRight" delay={200} className="lg:col-span-7 p-8 sm:p-12 space-y-5 flex flex-col justify-center">
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">
                  FOUNDER & PRESIDENT
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] mt-1">
                  Dr. R. Chandrika
                </h2>
                <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1">
                  Founder & President – International Cube Academy
                </div>
              </div>

              <div className="w-10 h-0.5 bg-[#C8A24A]"></div>

              <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Dr. R. Chandrika is an internationally respected educator, brain development specialist, and Rubik's Cube expert with over 15 years of experience in cognitive education and cube-based learning.
                </p>
                <p>
                  Known as the <strong className="font-semibold text-[#0B2D6B]">"World Master of Cube,"</strong> she has dedicated her career to transforming education through innovative cube-based learning. Her passion for empowering children, educators, and schools has inspired thousands of learners to develop stronger thinking skills, confidence, and creativity.
                </p>
                <p>
                  As the Founder and President of the International Cube Academy, Dr. Chandrika leads the organization's global vision of integrating Rubik's Cube education into mainstream learning. Her work focuses on teacher development, educational research, curriculum innovation, inclusive learning, and international collaboration.
                </p>
                <p>
                  Under her leadership, ICA continues to expand its reach, creating opportunities for learners and educators worldwide while promoting excellence in brain development and STEM education.
                </p>
              </div>
            </AnimatedSection>

          </div>
        </AnimatedSection>

      </div>

    </div>
  );
}
