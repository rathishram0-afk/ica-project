import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Star,
  CheckCircle2,
  ArrowRight,
  ClipboardCheck,
  Globe2,
  Sparkles
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ParticleField from '../components/ParticleField';

export default function TeachersCertificationPage({ setActivePage }) {
  const certificationLevels = [
    {
      num: "01",
      title: "Certified Trainer",
      desc: "Designed for educators who wish to teach the Foundation and Beginner Programs.",
      theory: "30%",
      practical: "70%",
      icon: Award,
      accent: "#0B2D6B"
    },
    {
      num: "02",
      title: "Senior Trainer",
      desc: "Qualified to teach the Foundation, Beginner, and Intermediate Programs, while supporting students in competitions and school implementation.",
      theory: "30%",
      practical: "70%",
      icon: Star,
      accent: "#C8A24A"
    },
    {
      num: "03",
      title: "Master Trainer",
      desc: "Experienced educators who mentor trainers, conduct workshops, and maintain ICA teaching standards.",
      theory: "20%",
      practical: "80%",
      icon: GraduationCap,
      accent: "#0B2D6B"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Complete the Required Training Program",
      desc: "Undergo ICA's structured educator training curriculum covering pedagogy and cube education methods."
    },
    {
      step: "02",
      title: "Attend All Practical Sessions",
      desc: "Participate in hands-on workshops, mock solving demonstrations, and interactive training modules."
    },
    {
      step: "03",
      title: "Pass the Theory Examination",
      desc: "Demonstrate deep understanding of curriculum knowledge, cognitive mechanics, and classroom management."
    },
    {
      step: "04",
      title: "Successfully Complete the Practical Teaching Assessment",
      desc: "Deliver practical teaching demonstrations evaluated on clarity, accuracy, engagement, and effectiveness."
    },
    {
      step: "05",
      title: "Receive Your Official ICA Teacher Certification",
      desc: "Earn your globally recognized ICA credential and join our worldwide certified educator registry."
    }
  ];

  const weightageRows = [
    { level: "Certified Trainer", theory: "30%", practical: "70%", extra: "Foundation & Beginner Scope" },
    { level: "Senior Trainer", theory: "30%", practical: "70%", extra: "Advanced Teaching & Delivery" },
    { level: "Master Trainer", theory: "20%", practical: "80%", extra: "Mentorship & Program Standards" },
  ];

  return (
    <div className="w-full bg-white text-slate-800">

      {/* ─── 1. PAGE HEADER ─── */}
      <section className="relative py-16 lg:py-20 bg-[#0B2D6B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none" />
        <ParticleField count={15} />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
        <div className="absolute top-10 right-20 w-32 h-32 border border-[#C8A24A]/15 rounded-full animate-float-slow pointer-events-none" />
        <div className="absolute bottom-24 left-10 w-20 h-20 border border-white/10 rounded-full animate-float-medium pointer-events-none" />

        <AnimatedSection animation="fadeUp" className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-4 pb-8">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
            FOR EDUCATORS
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Teacher Certification
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            The ICA Teacher Certification Program equips educators with the knowledge, teaching skills, and practical experience to deliver the International Cube Academy curriculum with confidence and excellence.
          </p>
          <div className="inline-block pt-1">
            <span className="text-xs text-[#C8A24A] font-semibold bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
              All certification levels include training, assessment, and certification based on ICA's international standards.
            </span>
          </div>
        </AnimatedSection>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-20">

        {/* ─── 2. THREE TEACHER CERTIFICATION LEVELS ─── */}
        <section className="space-y-10">
          <AnimatedSection animation="fadeUp" className="text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
              CERTIFICATION PATHWAYS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B]">
              Teacher Certification Levels
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light max-w-lg mx-auto">
              Three progressive tiers recognizing pedagogical proficiency, classroom leadership, and educator development.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="stagger" staggerDelay={100} className="grid md:grid-cols-3 gap-7">
            {certificationLevels.map((lvl, idx) => {
              const Icon = lvl.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-elevated hover:border-[#C8A24A] card-hover-lift transition-all duration-400 flex flex-col justify-between relative group overflow-hidden"
                >
                  {/* Top Color Accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
                    style={{ backgroundColor: lvl.accent }}
                  />

                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center font-serif text-lg font-bold group-hover:bg-[#C8A24A] group-hover:text-white transition-colors duration-300 shadow-xs">
                        {lvl.num}
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C8A24A] bg-[#C8A24A]/10 px-3 py-1 rounded-full">
                        Level {lvl.num}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-xl text-[#0B2D6B] leading-snug">
                        {lvl.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed pt-2">
                        {lvl.desc}
                      </p>
                    </div>
                  </div>

                  {/* Assessment Box */}
                  <div className="mt-8 pt-4 border-t border-slate-100 space-y-2.5">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                      Assessment Breakdown
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-[#0B2D6B]/5 rounded-xl p-3 text-center border border-[#0B2D6B]/10">
                        <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Theory</div>
                        <div className="font-serif font-extrabold text-base text-[#0B2D6B] mt-0.5">{lvl.theory}</div>
                      </div>
                      <div className="bg-[#C8A24A]/10 rounded-xl p-3 text-center border border-[#C8A24A]/20">
                        <div className="text-[10px] uppercase font-bold text-[#9E7B2B] tracking-wider">Practical</div>
                        <div className="font-serif font-extrabold text-base text-[#C8A24A] mt-0.5">{lvl.practical}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </AnimatedSection>
        </section>

        {/* ─── 3. CERTIFICATION PROCESS (5 STEPS) ─── */}
        <section className="space-y-10 pt-4 border-t border-slate-100">
          <AnimatedSection animation="fadeUp" className="text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
              STEP-BY-STEP PATHWAY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B]">
              Certification Process
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light max-w-lg mx-auto">
              Follow this structured 5-step roadmap to achieve your official ICA Teacher Certification.
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-0.5 border-t-2 border-dashed border-[#C8A24A]/40 z-0" />

            <AnimatedSection animation="stagger" staggerDelay={90} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative z-10">
              {processSteps.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col items-center text-center relative group hover:border-[#C8A24A] hover:shadow-card-hover transition-all duration-400 h-full card-hover-lift"
                >
                  <div className="w-9 h-9 rounded-full bg-[#0B2D6B] text-white text-xs font-extrabold flex items-center justify-center mb-4 shadow-sm border-2 border-white group-hover:bg-[#C8A24A] transition-colors duration-300 font-sans">
                    {item.step}
                  </div>

                  <h3 className="font-serif font-bold text-xs sm:text-sm text-[#0B2D6B] leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-[11px] font-light leading-relaxed mt-auto pt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* ─── 4. ASSESSMENT CRITERIA (THEORY VS PRACTICAL) ─── */}
        <section className="space-y-10 pt-4 border-t border-slate-100">
          <AnimatedSection animation="fadeUp" className="text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0B2D6B] block">
              EVALUATION FRAMEWORK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B]">
              Assessment Criteria
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light max-w-lg mx-auto">
              A comprehensive evaluation model balancing pedagogical theory with hands-on classroom mastery.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="stagger" staggerDelay={120} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Theory Examination */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#0B2D6B]/20 shadow-xs flex items-start gap-6 hover:border-[#0B2D6B] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0B2D6B]/5 rounded-bl-full pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-[#0B2D6B] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                <BookOpen size={26} />
              </div>
              <div className="space-y-2 flex-1 relative z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0B2D6B] block">
                  THEORETICAL MASTERY
                </span>
                <h3 className="font-serif font-bold text-xl text-[#0B2D6B]">
                  Theory Examination
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed pt-1">
                  Evaluates teaching methodology, curriculum knowledge, classroom management, and educational principles.
                </p>
              </div>
            </div>

            {/* Practical Teaching Assessment */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#C8A24A]/30 shadow-xs flex items-start gap-6 hover:border-[#C8A24A] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C8A24A]/10 rounded-bl-full pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-[#C8A24A] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                <Users size={26} />
              </div>
              <div className="space-y-2 flex-1 relative z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C8A24A] block">
                  PRACTICAL PERFORMANCE
                </span>
                <h3 className="font-serif font-bold text-xl text-[#0B2D6B]">
                  Practical Assessment
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed pt-1">
                  Evaluates lesson planning, demonstration skills, student engagement, communication, accuracy, and teaching effectiveness.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* ─── 5. ASSESSMENT WEIGHTAGE TABLE ─── */}
        <section className="space-y-8 pt-4 border-t border-slate-100">
          <AnimatedSection animation="fadeUp" className="text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
              OFFICIAL RATIOS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B]">
              Assessment Weightage
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light max-w-md mx-auto">
              Prescribed evaluation proportions across all educator certification tiers.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">Certification Level</th>
                    <th className="py-4 px-6 text-center">Theory</th>
                    <th className="py-4 px-6 text-center">Practical</th>
                    <th className="py-4 px-6 text-right hidden sm:table-cell">Focus Area</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {weightageRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F8F9FB] transition-colors duration-200">
                      <td className="py-4 px-6 font-semibold text-[#0B2D6B] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#C8A24A]" />
                        {row.level}
                      </td>
                      <td className="py-4 px-6 text-center font-mono font-bold text-[#0B2D6B]">
                        {row.theory}
                      </td>
                      <td className="py-4 px-6 text-center font-mono font-bold text-[#C8A24A]">
                        {row.practical}
                      </td>
                      <td className="py-4 px-6 text-right text-slate-500 font-light hidden sm:table-cell">
                        {row.extra}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </section>

        {/* ─── 6. BECOME AN ICA CERTIFIED EDUCATOR CTA ─── */}
        <AnimatedSection animation="scaleIn">
          <div className="relative bg-gradient-to-r from-[#061F4F] via-[#0B2D6B] to-[#071D47] rounded-3xl p-8 sm:p-12 text-white overflow-hidden shadow-elevated border border-[#C8A24A]/25">
            <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none" />
            <ParticleField count={12} />
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="space-y-4 max-w-2xl text-center lg:text-left">
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
                  GLOBAL EDUCATOR FACULTY
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

        {/* ─── 7. INTERNATIONAL CURRICULUM & CERTIFICATION ─── */}
        <AnimatedSection animation="stagger" staggerDelay={120} as="section" className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
          <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-slate-200/80 shadow-xs card-hover-lift transition-all duration-400 group">
            <div className="w-12 h-12 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center mb-5 group-hover:shadow-gold-glow transition-shadow duration-300">
              <BookOpen size={22} className="icon-hover-rotate" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0B2D6B] mb-3">International Curriculum</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
              Our curriculum integrates brain development, STEM concepts, logical thinking, creativity, and leadership into a progressive learning journey suitable for children, educators, and institutions.
            </p>
          </div>

          <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-slate-200/80 shadow-xs card-hover-lift transition-all duration-400 group">
            <div className="w-12 h-12 rounded-2xl bg-[#C8A24A] text-white flex items-center justify-center mb-5 group-hover:shadow-gold-glow transition-shadow duration-300">
              <Award size={22} className="icon-hover-rotate" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0B2D6B] mb-3">Certification</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
              Students and teachers receive ICA certifications upon successful completion of their learning pathway, recognizing their skills, knowledge, and achievement.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
