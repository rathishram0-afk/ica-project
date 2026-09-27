import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Star,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ClipboardCheck,
  School,
  Sparkles
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ParticleField from '../components/ParticleField';

export default function ProgramsPage({ setActivePage }) {
  const educatorPrograms = [
    {
      num: "01",
      title: "Certified Trainer Program",
      subtitle: "Foundation Teaching Skills",
      levelBadge: "Foundation Teaching • Level 1",
      desc: "Introduces educators to ICA's curriculum, teaching methodology, cube fundamentals, lesson planning, classroom management, student engagement, and foundational assessment practices.",
      icon: Award,
      accent: "#0B2D6B"
    },
    {
      num: "02",
      title: "Senior Trainer Program",
      subtitle: "Advanced Teaching & Program Delivery",
      levelBadge: "Advanced Teaching • Level 2",
      desc: "Develops educators' expertise in advanced teaching techniques, student assessment, competition preparation, school program implementation, and mentoring learners across multiple ICA levels.",
      icon: Star,
      accent: "#C8A24A"
    },
    {
      num: "03",
      title: "Master Trainer Program",
      subtitle: "Leadership & Educator Development",
      levelBadge: "Trainer Leadership • Level 3",
      desc: "Prepares experienced educators to mentor ICA trainers, conduct teacher-training workshops, support curriculum implementation, and uphold ICA teaching and assessment standards.",
      icon: GraduationCap,
      accent: "#0B2D6B"
    }
  ];

  const methodologyPillars = [
    {
      icon: BookOpen,
      title: "Pedagogy & Lesson Planning",
      desc: "Structured cube-based teaching methods designed for diverse age groups and skill levels."
    },
    {
      icon: Users,
      title: "Student Engagement",
      desc: "Interactive classroom strategies that foster curiosity, focus, and peer collaboration."
    },
    {
      icon: ClipboardCheck,
      title: "Assessment & Evaluation",
      desc: "Objective theory and practical assessment standards for measuring student progress."
    },
    {
      icon: School,
      title: "Institutional Implementation",
      desc: "Guidance on integrating cube clubs, competitions, and STEM programs into schools."
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800">

      {/* ─── 1. PAGE HEADER ─── */}
      <section className="relative py-16 lg:py-20 bg-[#0B2D6B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none" />
        <ParticleField count={15} />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
        {/* Decorative shapes */}
        <div className="absolute top-10 right-20 w-32 h-32 border border-[#C8A24A]/15 rounded-full animate-float-slow pointer-events-none" />
        <div className="absolute bottom-24 left-10 w-20 h-20 border border-white/10 rounded-full animate-float-medium pointer-events-none" />

        <AnimatedSection animation="fadeUp" className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-4 pb-8">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
            FOR EDUCATORS
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Teacher Certification<br />
            <span className="text-[#C8A24A]">Programs</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            The International Cube Academy (ICA) offers structured educator development programs designed to equip teachers with the knowledge, teaching methodologies, assessment skills, and practical expertise required to deliver ICA's cube-based learning programs effectively.
          </p>
        </AnimatedSection>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-20">

        {/* ─── 2. THREE EDUCATOR CERTIFICATION PROGRAMS ─── */}
        <section className="space-y-10">
          <AnimatedSection animation="fadeUp" className="text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
              EDUCATOR PATHWAYS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B]">
              Certification Progression
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light max-w-lg mx-auto">
              Three levels of specialized professional development for modern educators and trainers.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="stagger" staggerDelay={100} className="grid md:grid-cols-3 gap-7">
            {educatorPrograms.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-elevated hover:border-[#C8A24A] card-hover-lift transition-all duration-400 flex flex-col justify-between relative group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center font-serif text-xl font-bold group-hover:bg-[#C8A24A] group-hover:text-white transition-colors duration-300 shadow-xs">
                        {prog.num}
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C8A24A] bg-[#C8A24A]/10 px-3 py-1 rounded-full">
                        {prog.levelBadge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-xl text-[#0B2D6B] leading-snug">
                        {prog.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#C8A24A] mt-1">
                        {prog.subtitle}
                      </div>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed pt-2">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0B2D6B]">Official Certification</span>
                    <Icon size={18} className="text-[#C8A24A] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              );
            })}
          </AnimatedSection>
        </section>

        {/* ─── 3. TEACHING METHODOLOGY & SKILLS ─── */}
        <section className="space-y-10 pt-4 border-t border-slate-100">
          <AnimatedSection animation="fadeUp" className="text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
              TRAINING CURRICULUM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B]">
              Core Training Competencies
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light max-w-lg mx-auto">
              Equipping educators with modern pedagogical techniques and hands-on mastery.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="stagger" staggerDelay={80} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {methodologyPillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F8F9FB] rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-[#C8A24A] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#0B2D6B] flex items-center justify-center shadow-xs border border-slate-100 group-hover:bg-[#0B2D6B] group-hover:text-[#C8A24A] transition-colors duration-300">
                      <Icon size={18} className="icon-hover-rotate" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-[#0B2D6B]">
                      {pil.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-light leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </AnimatedSection>
        </section>

        {/* ─── 4. BECOME AN ICA CERTIFIED EDUCATOR CTA ─── */}
        <AnimatedSection animation="scaleIn">
          <div className="relative bg-[#0B2D6B] rounded-3xl p-8 sm:p-12 text-white overflow-hidden shadow-elevated">
            <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none" />
            <ParticleField count={12} />
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="space-y-4 max-w-2xl text-center lg:text-left">
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
                  JOIN OUR GLOBAL FACULTY
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
                  className="gold-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-gold-glow transform hover:-translate-y-1 group text-white"
                >
                  <span>APPLY FOR CERTIFICATION</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
