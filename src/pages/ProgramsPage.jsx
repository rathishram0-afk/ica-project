import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Star,
  ClipboardList,
  Trophy,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ParticleField from '../components/ParticleField';

export default function ProgramsPage({ setActivePage }) {
  return (
    <div className="w-full bg-white text-slate-800">

      {/* PAGE HEADER */}
      <section className="relative py-16 lg:py-20 bg-[#0B2D6B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none"></div>
        <ParticleField count={15} />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }}></div>
        {/* Decorative shapes */}
        <div className="absolute top-10 right-20 w-32 h-32 border border-[#C8A24A]/15 rounded-full animate-float-slow pointer-events-none"></div>
        <div className="absolute bottom-24 left-10 w-20 h-20 border border-white/10 rounded-full animate-float-medium pointer-events-none"></div>

        <AnimatedSection animation="fadeUp" className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-4 pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] glass px-5 py-2 rounded-full border border-[#C8A24A]/40 animate-border-shimmer">
            <GraduationCap size={14} />
            Programs & Certifications
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            World-Class Programs<br />
            <span className="text-[#C8A24A]">& Certifications</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Internationally designed learning pathways that develop cognitive skills, confidence, and creativity through Rubik's Cube education.
          </p>
        </AnimatedSection>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-20">

        {/* ─── STUDENT PROGRAMS ─── */}
        <section>
          <AnimatedSection animation="fadeUp" className="mb-10 text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] bg-[#F8F9FB] px-4 py-1.5 rounded-full border border-[#C8A24A]/30">
              For Learners
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] pt-1">Student Programs</h2>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto font-light leading-relaxed">
              The International Cube Academy (ICA) offers internationally designed learning programs that help students develop logical thinking, problem-solving skills, memory, concentration, creativity, and confidence through structured Rubik's Cube education.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="stagger" staggerDelay={150} className="grid md:grid-cols-3 gap-6">
            {/* Foundation Program */}
            <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/50 transition-all duration-400 flex flex-col justify-between card-hover-lift group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center font-serif text-xl font-bold group-hover:bg-[#C8A24A] group-hover:text-white transition-colors duration-300">
                  01
                </div>
                <h3 className="font-serif font-bold text-xl text-[#0B2D6B]">Foundation Program</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  Introduces young learners to basic cube mechanics, pattern recognition, spatial awareness, and fine motor control.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B2D6B]">Beginner Friendly</span>
                <span className="text-xs font-bold text-[#C8A24A]">Level 1</span>
              </div>
            </div>

            {/* Intermediate Program */}
            <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/50 transition-all duration-400 flex flex-col justify-between card-hover-lift group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C8A24A] text-white flex items-center justify-center font-serif text-xl font-bold group-hover:bg-[#0B2D6B] group-hover:text-[#C8A24A] transition-colors duration-300">
                  02
                </div>
                <h3 className="font-serif font-bold text-xl text-[#0B2D6B]">Intermediate Program</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  Enhances speed, algorithmic thinking, advanced finger tricks, and multi-step cognitive problem solving.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B2D6B]">Speed & Logic</span>
                <span className="text-xs font-bold text-[#C8A24A]">Level 2</span>
              </div>
            </div>

            {/* Advanced & Master Program */}
            <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/50 transition-all duration-400 flex flex-col justify-between card-hover-lift group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center font-serif text-xl font-bold group-hover:bg-[#C8A24A] group-hover:text-white transition-colors duration-300">
                  03
                </div>
                <h3 className="font-serif font-bold text-xl text-[#0B2D6B]">Advanced & Master</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  Prepares cubers for national and international competitions, blindfolded solving, and high-level analytical performance.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B2D6B]">Competitive</span>
                <span className="text-xs font-bold text-[#C8A24A]">Level 3</span>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* ─── TEACHER TRAINING & CERTIFICATION ─── */}
        <section className="space-y-20 pt-4 border-t border-slate-100">

          {/* 1. CERTIFICATION PROCESS SECTION */}
          <div className="space-y-10">
            <AnimatedSection animation="fadeUp" className="text-center space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] bg-[#F8F9FB] px-4 py-1.5 rounded-full border border-[#C8A24A]/30">
                5-Step Roadmap
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] pt-1">Certification Process</h2>
              <p className="text-slate-500 text-xs sm:text-sm font-light max-w-lg mx-auto">
                Follow these simple steps to become an ICA Certified Educator.
              </p>
            </AnimatedSection>

            {/* 5 Connected Steps Grid */}
            <div className="relative">
              <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-0.5 border-t-2 border-dashed border-[#C8A24A]/40 z-0"></div>

              <AnimatedSection animation="stagger" staggerDelay={100} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative z-10">
                {[
                  {
                    step: "01",
                    icon: BookOpen,
                    title: "Complete the Required Training Program",
                    desc: "Complete the required ICA training program and learning modules."
                  },
                  {
                    step: "02",
                    icon: Users,
                    title: "Attend All Practical Sessions",
                    desc: "Attend and actively participate in all required practical teaching sessions."
                  },
                  {
                    step: "03",
                    icon: ClipboardList,
                    title: "Pass the Theory Examination",
                    desc: "Successfully complete the theory examination and achieve the required passing score."
                  },
                  {
                    step: "04",
                    icon: Star,
                    title: "Successfully Complete the Practical Teaching Assessment",
                    desc: "Demonstrate teaching ability through lesson planning, cube demonstration, communication, accuracy, student engagement, and teaching effectiveness."
                  },
                  {
                    step: "05",
                    icon: Award,
                    title: "Receive Your Official ICA Teacher Certification",
                    desc: "After successfully completing the required training and assessments, receive your official ICA Teacher Certification."
                  }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col items-center text-center relative group hover:border-[#C8A24A] hover:shadow-card-hover transition-all duration-400 h-full card-hover-lift">
                      
                      <div className="w-9 h-9 rounded-full bg-[#0B2D6B] text-white text-xs font-extrabold flex items-center justify-center mb-4 shadow-sm border-2 border-white group-hover:bg-[#C8A24A] transition-colors duration-300">
                        {item.step}
                      </div>

                      <div className="w-12 h-12 rounded-2xl bg-[#F8F9FB] text-[#0B2D6B] flex items-center justify-center mb-4 border border-slate-100 group-hover:bg-[#0B2D6B] group-hover:text-[#C8A24A] transition-colors duration-300">
                        <Icon size={22} className="icon-hover-rotate" />
                      </div>

                      <h3 className="font-serif font-bold text-xs sm:text-sm text-[#0B2D6B] leading-snug mb-2">
                        {item.title}
                      </h3>

                      <p className="text-slate-500 text-[11px] font-light leading-relaxed mt-auto">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </AnimatedSection>
            </div>
          </div>

          {/* 2. ASSESSMENT CRITERIA SECTION */}
          <div className="space-y-10">
            <AnimatedSection animation="fadeUp" className="text-center space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0B2D6B] bg-[#F8F9FB] px-4 py-1.5 rounded-full border border-slate-200">
                Evaluation Weightage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] pt-1">Assessment Criteria</h2>
            </AnimatedSection>

            <AnimatedSection animation="stagger" staggerDelay={200} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Theory Examination */}
              <div className="bg-white rounded-3xl p-8 border-2 border-[#0B2D6B]/20 shadow-sm flex items-start gap-6 hover:border-[#0B2D6B] transition-all duration-400 relative overflow-hidden group card-3d-tilt">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0B2D6B]/5 rounded-bl-full pointer-events-none"></div>
                <div className="w-16 h-16 rounded-2xl bg-[#0B2D6B] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-400">
                  <BookOpen size={28} />
                </div>
                <div className="space-y-2 flex-1 relative z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-xl text-[#0B2D6B]">Theory Examination</h3>
                    <span className="font-serif text-4xl font-extrabold text-[#0B2D6B]">30%</span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed pt-1">
                    Evaluates teaching methodology, curriculum knowledge, classroom management, and educational principles.
                  </p>
                </div>
              </div>

              {/* Practical Teaching Assessment */}
              <div className="bg-white rounded-3xl p-8 border-2 border-[#C8A24A]/30 shadow-sm flex items-start gap-6 hover:border-[#C8A24A] transition-all duration-400 relative overflow-hidden group card-3d-tilt">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#C8A24A]/10 rounded-bl-full pointer-events-none"></div>
                <div className="w-16 h-16 rounded-2xl bg-[#C8A24A] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-400">
                  <Users size={28} />
                </div>
                <div className="space-y-2 flex-1 relative z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-xl text-[#0B2D6B]">Practical Teaching Assessment</h3>
                    <span className="font-serif text-4xl font-extrabold text-[#C8A24A]">70%</span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed pt-1">
                    Evaluates lesson planning, demonstration skills, student engagement, communication, accuracy, and teaching effectiveness.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* 3. ICA CERTIFICATION JOURNEY */}
          <div className="space-y-12">
            <AnimatedSection animation="fadeUp" className="text-center space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] bg-[#F8F9FB] px-4 py-1.5 rounded-full border border-[#C8A24A]/30">
                Career Progression
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] pt-1">ICA Certification Journey</h2>
              <p className="text-slate-500 text-xs sm:text-sm font-light max-w-md mx-auto">
                Advance your skills. Grow your impact. Become a global educator.
              </p>
            </AnimatedSection>

            <div className="relative">
              <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-1 bg-gradient-to-r from-[#0B2D6B] via-[#C8A24A] to-[#9E7B2B] opacity-25 z-0 rounded-full"></div>

              <AnimatedSection animation="stagger" staggerDelay={120} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {[
                  {
                    num: "01",
                    title: "Certified Trainer",
                    icon: Award,
                    accentColor: "#0B2D6B",
                    badgeBg: "bg-[#0B2D6B] text-white",
                    desc: "Qualified to teach the Foundation, Beginner, and Intermediate Programs.",
                    theory: "30%",
                    practical: "70%",
                    extra: null
                  },
                  {
                    num: "02",
                    title: "Senior Trainer",
                    icon: Star,
                    accentColor: "#C8A24A",
                    badgeBg: "bg-[#C8A24A] text-white",
                    desc: "Qualified to teach the Foundation, Beginner, and Intermediate Programs while supporting students in competitions and school implementation.",
                    theory: "30%",
                    practical: "70%",
                    extra: null
                  },
                  {
                    num: "03",
                    title: "Master Trainer",
                    icon: GraduationCap,
                    accentColor: "#0B2D6B",
                    badgeBg: "bg-[#0B2D6B] text-white",
                    desc: "Experienced educators who mentor trainers, conduct workshops, and maintain ICA teaching standards.",
                    theory: "20%",
                    practical: "80%",
                    extra: null
                  },
                  {
                    num: "04",
                    title: "International Trainer",
                    icon: Trophy,
                    accentColor: "#9E7B2B",
                    badgeBg: "bg-[#9E7B2B] text-white",
                    desc: "The highest level of ICA certification, preparing educators to represent ICA internationally, certify trainers, and contribute to curriculum development.",
                    theory: "20%",
                    practical: "80%",
                    extra: "International Presentation & Viva — Pass Required"
                  }
                ].map((level, idx) => {
                  const Icon = level.icon;
                  return (
                    <div 
                      key={idx} 
                      className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-elevated hover:border-[#C8A24A] card-hover-lift transition-all duration-400 flex flex-col justify-between relative group overflow-hidden"
                    >
                      {/* Top Accent Line */}
                      <div 
                        className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
                        style={{ backgroundColor: level.accentColor }}
                      ></div>

                      <div className="space-y-4 pt-2">
                        <div className="flex items-center justify-between">
                          <div className={`text-xs font-extrabold px-3 py-1 rounded-full ${level.badgeBg} shadow-xs font-mono`}>
                            {level.num}
                          </div>
                          <div className="w-11 h-11 rounded-2xl bg-[#F8F9FB] text-[#0B2D6B] flex items-center justify-center border border-slate-100 group-hover:bg-[#0B2D6B] group-hover:text-[#C8A24A] transition-colors duration-300">
                            <Icon size={20} className="icon-hover-rotate" />
                          </div>
                        </div>

                        <div>
                          <h3 className="font-serif font-bold text-xl text-[#0B2D6B] mb-2 leading-snug">
                            {level.title}
                          </h3>
                          <p className="text-slate-500 text-xs font-light leading-relaxed">
                            {level.desc}
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-4 border-t border-slate-100 space-y-2">
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                          Assessment Breakdown
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-[#0B2D6B]/5 rounded-xl p-2.5 text-center border border-[#0B2D6B]/10">
                            <div className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Theory</div>
                            <div className="font-serif font-extrabold text-base text-[#0B2D6B] mt-0.5">{level.theory}</div>
                          </div>
                          <div className="bg-[#C8A24A]/10 rounded-xl p-2.5 text-center border border-[#C8A24A]/20">
                            <div className="text-[9px] uppercase font-bold text-[#9E7B2B] tracking-wider">Practical</div>
                            <div className="font-serif font-extrabold text-base text-[#C8A24A] mt-0.5">{level.practical}</div>
                          </div>
                        </div>

                        {level.extra && (
                          <div className="mt-2 gold-btn text-[10px] font-extrabold uppercase tracking-wider py-1.5 px-3 rounded-xl text-center shadow-xs">
                            + Viva (Pass Required)
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </AnimatedSection>
            </div>
          </div>

          {/* 4. BECOME AN ICA CERTIFIED EDUCATOR CTA */}
          <AnimatedSection animation="scaleIn">
            <div className="relative bg-[#0B2D6B] rounded-3xl p-8 sm:p-12 text-white overflow-hidden shadow-elevated">
              <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none"></div>
              <ParticleField count={12} />
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                <div className="space-y-4 max-w-2xl text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] glass px-4 py-1.5 rounded-full border border-[#C8A24A]/30 animate-border-shimmer">
                    Join Our Global Faculty
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                    Become an ICA Certified Educator
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm font-light leading-relaxed">
                    Join the International Cube Academy and become part of a global network of educators dedicated to inspiring the next generation through innovative, brain-based learning.
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => setActivePage && setActivePage('certification-apply')}
                    className="gold-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-gold-glow transform hover:-translate-y-1 group"
                  >
                    <span>APPLY FOR CERTIFICATION</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </section>

        {/* ─── CURRICULUM & CERTIFICATION ─── */}
        <AnimatedSection animation="stagger" staggerDelay={150} as="section" className="grid md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
          <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-slate-200/80 shadow-xs card-hover-lift transition-all duration-400 group">
            <div className="w-12 h-12 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center mb-5 group-hover:shadow-gold-glow transition-shadow duration-300">
              <BookOpen size={22} className="icon-hover-rotate" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0B2D6B] mb-3">International Curriculum</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Our curriculum integrates brain development, STEM concepts, logical thinking, creativity, and leadership into a progressive learning journey suitable for children, educators, and institutions.
            </p>
          </div>
          <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-slate-200/80 shadow-xs card-hover-lift transition-all duration-400 group">
            <div className="w-12 h-12 rounded-2xl bg-[#C8A24A] text-white flex items-center justify-center mb-5 group-hover:shadow-gold-glow transition-shadow duration-300">
              <Award size={22} className="icon-hover-rotate" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0B2D6B] mb-3">Certification</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Students and teachers receive ICA certifications upon successful completion of their learning pathway, recognizing their skills, knowledge, and achievement internationally.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
