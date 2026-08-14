import React from 'react';
import { Trophy, Users, Award, Medal, School, Box, Star, Sparkles, Building2 } from 'lucide-react';
import AchievementImagePlaceholder from '../components/AchievementImagePlaceholder';
import AnimatedSection from '../components/AnimatedSection';
import ParticleField from '../components/ParticleField';
import useCountUp from '../hooks/useCountUp';

export default function AchievementsPage({ setActivePage }) {
  const stats = [
    {
      num: "8+",
      label: "Students Trained for Guinness World Records"
    },
    {
      num: "100+",
      label: "Blind Students Trained"
    },
    {
      num: "45+",
      label: "Deaf-Mute Students Trained"
    }
  ];

  const highlights = [
    {
      icon: Medal,
      title: "World Master of Cube",
      desc: "Received the title \"World Master of Cube\" from Mr. Pandiyarajan, Former Education Minister of Tamil Nadu."
    },
    {
      icon: School,
      title: "Special Workshop",
      desc: "Conducted a special workshop at Dr. M.G.R. Medical University; honored by Mr. A.C. Shanmugam and Mr. ACS Arun Kumar."
    },
    {
      icon: Trophy,
      title: "Guinness World Records",
      desc: "Trained 8 students to set Guinness World Records in Rubik’s Cube solving."
    },
    {
      icon: Users,
      title: "Inclusive Training",
      desc: "Trained 100 blind and 45 deaf-mute students to learn cube solving techniques."
    },
    {
      icon: Box,
      title: "Braille Cube Initiative",
      desc: "Designed and distributed Braille Cubes across Tamil Nadu to support inclusive learning."
    },
    {
      icon: Star,
      title: "Awards & Honors",
      desc: "Recognized with multiple state and national awards for contribution to cubing education and social development."
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-12 lg:py-16 space-y-12 lg:space-y-16">

        {/* ─── 1. CENTER TOP EYEBROW BADGE ─── */}
        <AnimatedSection animation="fadeUp" className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white px-5 py-2 rounded-full border border-[#C8A24A]/40 shadow-xs animate-border-shimmer">
            <Trophy size={14} /> ACHIEVEMENTS & RECOGNITION
          </div>
        </AnimatedSection>

        {/* ─── 2. HERO TWO-COLUMN SECTION ─── */}
        <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN (55%) — Content + 3 Stats Cards */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between text-left">
            
            <div className="space-y-4">
              {/* Main Heading */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-[#0B2D6B]">
                Building Champions.<br />
                <span className="text-[#C8A24A]">Creating World Records.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
                ICA is proud to nurture young minds and empower them with the skills, confidence, and training to achieve the extraordinary on the global stage.
              </p>
            </div>

            {/* 3 STATISTIC CARDS SIDE-BY-SIDE */}
            <AnimatedSection animation="stagger" staggerDelay={120} className="grid grid-cols-3 gap-4 pt-2">
              {stats.map((st, i) => (
                <div key={i} className="bg-[#F8F9FB] rounded-2xl p-4 sm:p-5 border border-slate-200/80 text-center flex flex-col items-center justify-between group hover:border-[#C8A24A]/50 transition-all duration-300 shadow-xs card-hover-lift">
                  <div className="w-10 h-10 rounded-full bg-white text-[#C8A24A] flex items-center justify-center mb-3 shadow-xs border border-slate-100 group-hover:bg-[#0B2D6B] transition-colors duration-300">
                    <Users size={18} className="icon-hover-rotate" />
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0B2D6B] mb-1">
                    {st.num}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-light leading-tight">
                    {st.label}
                  </div>
                </div>
              ))}
            </AnimatedSection>

          </div>

          {/* RIGHT COLUMN (45%) — GUINNESS WORLD RECORD STUDENTS PHOTO */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs bg-white flex items-center justify-center">
              <img
                src="/images/achievements/guinness-world-record-students.jpg"
                alt="Students trained for Guinness World Records in Rubik's Cube solving"
                className="w-full h-auto max-h-[480px] object-contain object-center block mx-auto rounded-3xl"
              />
            </div>
          </div>

        </section>

        {/* ─── 3. GUINNESS WORLD RECORDS FEATURE BAR ─── */}
        <AnimatedSection animation="fadeUp" as="section" className="bg-gradient-to-r from-[#061F4F] via-[#0B2D6B] to-[#071D47] rounded-3xl p-6 sm:p-8 text-white shadow-elevated relative overflow-hidden border border-[#C8A24A]/30">
          <ParticleField count={8} />
          <div className="grid md:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* Left Trophy Circle + Title */}
            <div className="md:col-span-6 flex items-center gap-4 border-b md:border-b-0 md:border-r border-white/15 pb-4 md:pb-0 md:pr-6">
              <div className="w-14 h-14 rounded-full bg-white/10 border border-[#C8A24A]/40 flex items-center justify-center text-[#C8A24A] shrink-0 shadow-inner">
                <Trophy size={26} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-xl text-white leading-snug">
                  8 Students Trained for Guinness World Records
                </h3>
                <p className="text-xs text-[#C8A24A] font-semibold tracking-wider mt-0.5">
                  Rubik's Cube Solving
                </p>
              </div>
            </div>

            {/* Right Supporting Description */}
            <div className="md:col-span-6 text-left">
              <p className="text-slate-200 text-xs sm:text-sm font-light leading-relaxed">
                ICA is proud to have trained 8 students who have set Guinness World Records in Rubik’s Cube solving, showcasing their dedication, discipline, and excellence.
              </p>
            </div>

          </div>
        </AnimatedSection>

        {/* ─── 4. SIX-COLUMN HIGHLIGHT GRID (ICONS ONLY - NO EXTRA PHOTOS) ─── */}
        <AnimatedSection animation="stagger" staggerDelay={80} as="section" className="pt-2">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div key={idx} className="bg-[#F8F9FB] rounded-2xl p-5 border border-slate-200/80 text-center flex flex-col items-center justify-between group hover:border-[#C8A24A] card-hover-lift transition-all duration-300 h-full shadow-xs">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#0B2D6B] flex items-center justify-center mb-4 mx-auto shadow-xs border border-slate-100 group-hover:bg-[#0B2D6B] group-hover:text-[#C8A24A] transition-colors duration-300">
                      <Icon size={22} className="icon-hover-rotate" />
                    </div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-[#0B2D6B] mb-2 leading-snug">
                      {h.title}
                    </h4>
                    <p className="text-slate-500 text-[11px] font-light leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
