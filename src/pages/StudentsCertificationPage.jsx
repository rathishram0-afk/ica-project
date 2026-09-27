import React from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Compass,
  Sparkles,
  Target,
  Users,
  Lightbulb,
  ShieldCheck,
  GraduationCap,
  TrendingUp,
  Brain,
  Zap,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ParticleField from '../components/ParticleField';

export default function StudentsCertificationPage({ setActivePage }) {
  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Creating new possibilities through creativity and curiosity."
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Striving for quality, achievement, and continuous improvement."
    },
    {
      icon: Users,
      title: "Inclusion",
      desc: "Making learning accessible, welcoming, and empowering for everyone."
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      desc: "Building trust through honesty, transparency, and accountability."
    },
    {
      icon: Compass,
      title: "Leadership",
      desc: "Inspiring confident thinkers, problem-solvers, and responsible leaders."
    },
    {
      icon: Brain,
      title: "Lifelong Learning",
      desc: "Fostering curiosity, growth, resilience, and a passion for learning."
    }
  ];

  const roadmapSteps = [
    {
      step: "01",
      phase: "Discover",
      title: "Build Your Foundation",
      desc: "Explore the fundamentals of puzzle solving, cube mechanics, patterns, and logical thinking.",
      icon: Compass
    },
    {
      step: "02",
      phase: "Learn",
      title: "Develop Your Skills",
      desc: "Learn structured solving methods, algorithms, techniques, and essential cube skills through guided instruction.",
      icon: BookOpen
    },
    {
      step: "03",
      phase: "Practise",
      title: "Strengthen Your Ability",
      desc: "Build accuracy, speed, memory, concentration, and problem-solving ability through regular practice and challenges.",
      icon: Zap
    },
    {
      step: "04",
      phase: "Progress",
      title: "Advance to the Next Level",
      desc: "Complete level-based learning objectives and assessments to progress from Foundation to Intermediate and Advanced learning.",
      icon: TrendingUp
    },
    {
      step: "05",
      phase: "Achieve",
      title: "Demonstrate & Get Certified",
      desc: "Demonstrate your skills through practical assessment, earn your ICA Student Certification, and continue toward advanced and competitive pathways.",
      icon: Award
    }
  ];

  const progressionLevels = [
    {
      num: "01",
      level: "Foundation Student",
      subtitle: "Building the Fundamentals",
      desc: "Introduces students to the basics of cube solving, puzzle awareness, notation, patterns, and logical thinking.",
      knowledge: 30,
      practical: 70,
      practicalLabel: "Practical Solving",
      extra: null
    },
    {
      num: "02",
      level: "Level 1 Certified Student",
      subtitle: "Developing Core Skills",
      desc: "Students demonstrate proficiency in the Level 1 curriculum, including 2×2, 3×3, and Pyraminx, along with fundamental algorithms and solving techniques.",
      knowledge: 30,
      practical: 70,
      practicalLabel: "Practical Solving",
      extra: null
    },
    {
      num: "03",
      level: "Level 2 Certified Student",
      subtitle: "Expanding Puzzle Mastery",
      desc: "Students progress to more challenging puzzles such as 4×4, Megaminx, and Skewb while developing advanced problem-solving and algorithmic skills.",
      knowledge: 30,
      practical: 70,
      practicalLabel: "Practical Solving",
      extra: null
    },
    {
      num: "04",
      level: "Intermediate Certified Student",
      subtitle: "Advanced Skills & Performance",
      desc: "Students develop advanced solving techniques, speed, accuracy, efficiency, and competitive problem-solving skills across multiple puzzles.",
      knowledge: 30,
      practical: 70,
      practicalLabel: "Practical Solving",
      extra: null
    },
    {
      num: "05",
      level: "Advanced Certified Student",
      subtitle: "Mastery & Competitive Excellence",
      desc: "Students demonstrate advanced puzzle-solving abilities, including specialised skills such as one-handed solving, blindfolded solving, advanced speedcubing, and competition preparation.",
      knowledge: 20,
      practical: 80,
      practicalLabel: "Practical Performance",
      extra: "+ Practical Skill Demonstration — Pass Required"
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800">

      {/* ─── 1. PAGE HEADER ─── */}
      <section className="relative py-16 lg:py-20 bg-[#0B2D6B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none" />
        <ParticleField count={15} />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />

        <AnimatedSection animation="fadeUp" className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-4 pb-8">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
            For Learners
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Student Certification<br />
            <span className="text-[#C8A24A]">&amp; Learning Pathways</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Structured, level-based learning pathways empowering students with cognitive skills, problem solving, and internationally recognized certifications.
          </p>
        </AnimatedSection>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-20">

        {/* ─── 2. OUR MISSION ─── */}
        <AnimatedSection animation="fadeUp" className="bg-[#F8F9FB] rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#C8A24A]/10 rounded-bl-full pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
              OUR MISSION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2D6B] leading-snug">
              Transforming Puzzle-Based Learning
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              To transform puzzle-based learning into a globally structured educational experience that develops critical thinking, cognitive skills, STEM competencies, creativity, and leadership—empowering learners of all ages to discover their potential, embrace challenges, and become confident lifelong learners.
            </p>
          </div>
        </AnimatedSection>

        {/* ─── 3. CORE VALUES ─── */}
        <section className="space-y-10">
          <AnimatedSection animation="fadeUp" className="text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B]">
              Core Values
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light max-w-lg mx-auto">
              The guiding principles that shape our international curriculum and student development.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="stagger" staggerDelay={80} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-[#C8A24A] card-hover-lift transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center shadow-xs group-hover:bg-[#C8A24A] group-hover:text-white transition-colors duration-300">
                      <Icon size={20} className="icon-hover-rotate" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#0B2D6B]">
                      {val.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </AnimatedSection>
        </section>

        {/* ─── 4. 5-STEP STUDENT CERTIFICATION ROADMAP ─── */}
        <section className="space-y-10 pt-4 border-t border-slate-100">
          <AnimatedSection animation="fadeUp" className="text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
              FOR LEARNERS &bull; STUDENT PROGRAMS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B]">
              5-Step Student CERTIFICATION Roadmap
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light max-w-xl mx-auto">
              A progressive journey from initial puzzle discovery to advanced certification and competitive excellence.
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-0.5 border-t-2 border-dashed border-[#C8A24A]/40 z-0" />

            <AnimatedSection animation="stagger" staggerDelay={100} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative z-10">
              {roadmapSteps.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col items-center text-center relative group hover:border-[#C8A24A] hover:shadow-card-hover transition-all duration-400 h-full card-hover-lift"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#0B2D6B] text-white text-xs font-extrabold flex items-center justify-center mb-3 shadow-sm border-2 border-white group-hover:bg-[#C8A24A] transition-colors duration-300">
                      {item.step}
                    </div>

                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#C8A24A] mb-1.5 font-sans">
                      {item.phase}
                    </div>

                    <h3 className="font-serif font-bold text-sm text-[#0B2D6B] leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[11px] sm:text-xs font-light leading-relaxed mt-auto pt-2">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </AnimatedSection>
          </div>
        </section>

        {/* ─── 5. EVALUATION WEIGHTAGE (ASSESSMENT CRITERIA) ─── */}
        <section className="space-y-10 pt-4 border-t border-slate-100">
          <AnimatedSection animation="fadeUp" className="text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0B2D6B] block">
              EVALUATION WEIGHTAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B]">
              Assessment Criteria
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-light max-w-2xl mx-auto leading-relaxed">
              The ICA Student Assessment evaluates both knowledge and practical puzzle-solving skills to measure a learner’s progress at each level.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="stagger" staggerDelay={120} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Assessment 01: Knowledge & Understanding — 30% */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#0B2D6B]/20 shadow-xs flex flex-col justify-between hover:border-[#0B2D6B] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0B2D6B]/5 rounded-bl-full pointer-events-none" />
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0B2D6B]">Assessment 01</span>
                  <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0B2D6B]">30%</span>
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0B2D6B]">
                  Knowledge &amp; Understanding
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                  Measures the learner’s understanding of concepts, algorithms, notation, puzzle structure, and level-specific learning objectives.
                </p>
              </div>

              {/* Progress bar visual */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-[#0B2D6B] h-2.5 rounded-full" style={{ width: '30%' }} />
                </div>
              </div>
            </div>

            {/* Assessment 02: Practical Performance — 70% */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#C8A24A]/30 shadow-xs flex flex-col justify-between hover:border-[#C8A24A] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C8A24A]/10 rounded-bl-full pointer-events-none" />
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C8A24A]">Assessment 02</span>
                  <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#C8A24A]">70%</span>
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0B2D6B]">
                  Practical Performance
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                  Measures the learner’s ability to apply learned techniques through accurate, efficient, and independent puzzle solving.
                </p>
              </div>

              {/* Progress bar visual */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-[#C8A24A] h-2.5 rounded-full" style={{ width: '70%' }} />
                </div>
              </div>
            </div>

          </AnimatedSection>

          {/* Assessment Outcome Banner */}
          <AnimatedSection animation="fadeUp" className="max-w-4xl mx-auto bg-[#F8F9FB] rounded-2xl p-5 sm:p-6 border border-slate-200/90 flex items-start gap-3.5">
            <CheckCircle2 size={22} className="text-[#C8A24A] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
              <strong className="font-semibold text-[#0B2D6B]">Assessment Outcome: </strong>
              Students who successfully meet the prescribed assessment criteria can progress to the next ICA level and receive the corresponding ICA Student Certification.
            </div>
          </AnimatedSection>
        </section>

        {/* ─── 6. STUDENT PROGRESSION (5-LEVEL JOURNEY) ─── */}
        <section className="space-y-10 pt-4 border-t border-slate-100">
          <AnimatedSection animation="fadeUp" className="text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
              STUDENT PROGRESSION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B]">
              ICA Student Certification Journey
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light max-w-md mx-auto">
              Learn new skills. Build confidence. Progress through every level.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="stagger" staggerDelay={90} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {progressionLevels.map((lvl, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-elevated hover:border-[#C8A24A] card-hover-lift transition-all duration-400 flex flex-col justify-between relative group overflow-hidden ${
                  idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Header tag */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-[#0B2D6B] text-white text-xs font-extrabold flex items-center justify-center font-sans group-hover:bg-[#C8A24A] transition-colors duration-300">
                      {lvl.num}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C8A24A]">
                      Level {lvl.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#0B2D6B] leading-snug">
                      {lvl.level}
                    </h3>
                    <div className="text-xs font-semibold text-[#C8A24A] mt-0.5">
                      {lvl.subtitle}
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs font-light leading-relaxed pt-1">
                    {lvl.desc}
                  </p>
                </div>

                {/* Assessment Breakdown Box */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    Assessment Breakdown
                  </div>

                  <div className="flex items-center justify-between text-xs py-0.5">
                    <span className="text-slate-600 font-light">Knowledge &amp; Understanding</span>
                    <span className="font-bold text-[#0B2D6B]">{lvl.knowledge}%</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-0.5">
                    <span className="text-slate-600 font-light">{lvl.practicalLabel}</span>
                    <span className="font-bold text-[#C8A24A]">{lvl.practical}%</span>
                  </div>

                  {lvl.extra && (
                    <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] font-semibold text-[#0B2D6B] bg-[#0B2D6B]/5 rounded-lg px-2.5 py-1.5">
                      {lvl.extra}
                    </div>
                  )}
                </div>

              </div>
            ))}
          </AnimatedSection>
        </section>

      </div>
    </div>
  );
}
