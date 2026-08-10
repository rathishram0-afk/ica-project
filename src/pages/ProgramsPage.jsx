import React, { useState } from 'react';
import {
  Brain, GraduationCap, CheckCircle2, ChevronDown, ChevronUp,
  Award, BookOpen, Users, Star, ClipboardList, Trophy, ArrowRight
} from 'lucide-react';

const assessmentSkills = [
  "Logical Thinking",
  "Problem-Solving Skills",
  "Memory & Concentration",
  "Observation Skills",
  "Pattern Recognition",
  "Spatial Intelligence",
  "Creativity",
  "Learning Readiness",
];

const teacherLevels = [
  {
    title: "Certified Trainer",
    icon: Award,
    color: "#16489C",
    desc: "Designed for educators who wish to teach the Foundation and Beginner Programs.",
    theory: "30%",
    practical: "70%",
    extra: null,
  },
  {
    title: "Senior Trainer",
    icon: Star,
    color: "#0B2D6B",
    desc: "Qualified to teach the Foundation, Beginner, and Intermediate Programs, while supporting students in competitions and school implementation.",
    theory: "30%",
    practical: "70%",
    extra: null,
  },
  {
    title: "Master Trainer",
    icon: GraduationCap,
    color: "#C8A24A",
    desc: "Experienced educators who mentor trainers, conduct workshops, and maintain ICA teaching standards.",
    theory: "20%",
    practical: "80%",
    extra: null,
  },
  {
    title: "International Trainer",
    icon: Trophy,
    color: "#9E7B2B",
    desc: "The highest level of ICA certification, preparing educators to represent ICA internationally, certify trainers, and contribute to curriculum development.",
    theory: "20%",
    practical: "80%",
    extra: "International Presentation & Viva – Pass Required",
  },
];

const certificationSteps = [
  "Complete the required training program.",
  "Attend all practical sessions.",
  "Pass the theory examination.",
  "Successfully complete the practical teaching assessment.",
  "Receive your official ICA Teacher Certification.",
];

export default function ProgramsPage({ setActivePage }) {
  const [openLevel, setOpenLevel] = useState(null);

  return (
    <div className="w-full bg-white text-slate-800">

      {/* PAGE HEADER */}
      <section className="relative py-16 lg:py-20 bg-[#0B2D6B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }}></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-4 pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white/10 px-5 py-2 rounded-full border border-[#C8A24A]/40 backdrop-blur-sm">
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
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-20">

        {/* ─── STUDENT PROGRAMS ─── */}
        <section>
          <div className="mb-10 text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">For Learners</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] mt-1">Student Programs</h2>
            <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto font-light leading-relaxed">
              The International Cube Academy (ICA) offers internationally designed learning programs that help students develop logical thinking, problem-solving skills, memory, concentration, creativity, and confidence through structured Rubik's Cube education. Our programs are tailored to each learner's abilities, ensuring a personalized and progressive learning experience.
            </p>
          </div>

          {/* Brain Skills Assessment */}
          <div className="bg-gradient-to-br from-[#0B2D6B] to-[#16489C] rounded-3xl p-8 sm:p-10 text-white mb-8 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none rounded-3xl"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white/10 px-3.5 py-1.5 rounded-full border border-[#C8A24A]/30 mb-4">
                  <Brain size={12} /> Assessment First
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">ICA Brain Skills Assessment</h3>
                <p className="text-slate-200 text-sm leading-relaxed font-light">
                  Every student undergoes the ICA Brain Skills Assessment before beginning their learning journey. This assessment helps identify each student's cognitive strengths, learning readiness, and problem-solving abilities, enabling us to recommend the most appropriate learning pathway.
                </p>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#C8A24A] mb-4">The Assessment Evaluates</div>
                <div className="grid grid-cols-2 gap-2.5">
                  {assessmentSkills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 backdrop-blur-sm">
                      <CheckCircle2 size={14} className="text-[#C8A24A] shrink-0" />
                      <span className="text-xs font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Student Assessment & Certification */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center mb-5">
                <ClipboardList size={22} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2D6B] mb-3">Student Assessment & Certification</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light mb-5">
                Students are assessed throughout their learning journey through both theoretical and practical evaluations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white rounded-xl p-3 border border-slate-200">
                  <span className="text-xs font-semibold text-[#0B2D6B]">Theory Examination</span>
                  <span className="text-xs font-bold text-[#C8A24A] bg-[#C8A24A]/10 px-2.5 py-1 rounded-full">30%</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-xl p-3 border border-slate-200">
                  <span className="text-xs font-semibold text-[#0B2D6B]">Practical Assessment</span>
                  <span className="text-xs font-bold text-[#C8A24A] bg-[#C8A24A]/10 px-2.5 py-1 rounded-full">70%</span>
                </div>
              </div>
            </div>
            <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#C8A24A] text-white flex items-center justify-center mb-5">
                <Award size={22} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2D6B] mb-3">ICA Certification</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Students who successfully complete the required assessments will receive an <strong className="text-[#0B2D6B]">International Cube Academy (ICA) Certificate</strong> and become eligible to progress to the next stage of learning.
              </p>
              <button
                onClick={() => setActivePage && setActivePage('contact')}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071d47] transition-all"
              >
                Enroll Now <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </section>

        {/* ─── TEACHER CERTIFICATION ─── */}
        <section>
          <div className="mb-10 text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">For Educators</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] mt-1">Teacher Certification</h2>
            <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto font-light leading-relaxed">
              The ICA Teacher Certification Program equips educators with the knowledge, teaching skills, and practical experience to deliver the International Cube Academy curriculum with confidence and excellence. All certification levels include training, assessment, and certification based on ICA's international standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {teacherLevels.map((level, idx) => {
              const Icon = level.icon;
              const isOpen = openLevel === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#F8F9FB] rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden hover:border-[#C8A24A]/50 transition-all"
                >
                  <button
                    className="w-full p-6 text-left flex items-start gap-4"
                    onClick={() => setOpenLevel(isOpen ? null : idx)}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: level.color }}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif font-bold text-lg text-[#0B2D6B]">{level.title}</h3>
                        {isOpen ? <ChevronUp size={16} className="text-[#C8A24A]" /> : <ChevronDown size={16} className="text-slate-400" />}
                      </div>
                      <p className="text-slate-500 text-xs mt-1 font-light leading-relaxed">{level.desc}</p>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-slate-200/60 pt-4 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#C8A24A] mb-2">Assessment Breakdown</div>
                      <div className="flex gap-3">
                        <div className="flex-1 bg-white rounded-xl p-3 border border-slate-200 text-center">
                          <div className="text-lg font-extrabold text-[#0B2D6B]">{level.theory}</div>
                          <div className="text-[10px] text-slate-500 font-medium mt-0.5">Theory</div>
                        </div>
                        <div className="flex-1 bg-white rounded-xl p-3 border border-slate-200 text-center">
                          <div className="text-lg font-extrabold text-[#C8A24A]">{level.practical}</div>
                          <div className="text-[10px] text-slate-500 font-medium mt-0.5">Practical</div>
                        </div>
                      </div>
                      {level.extra && (
                        <div className="bg-[#C8A24A]/10 text-[#9E7B2B] text-xs font-semibold px-3 py-2 rounded-xl border border-[#C8A24A]/30">
                          + {level.extra}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Certification Process */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0B2D6B] rounded-3xl p-8 text-white">
              <h3 className="font-serif text-xl font-bold mb-5 text-[#C8A24A]">Certification Process</h3>
              <ol className="space-y-3">
                {certificationSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#C8A24A] text-[#0B2D6B] text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-slate-200 text-sm font-light">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-slate-200/80 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#0B2D6B] mb-5">Assessment Criteria</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 border border-slate-200">
                  <div className="text-xs font-bold text-[#0B2D6B] mb-1.5 flex items-center gap-2">
                    <BookOpen size={14} className="text-[#C8A24A]" /> Theory Examination
                  </div>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Evaluates teaching methodology, curriculum knowledge, classroom management, and educational principles.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-slate-200">
                  <div className="text-xs font-bold text-[#0B2D6B] mb-1.5 flex items-center gap-2">
                    <Users size={14} className="text-[#C8A24A]" /> Practical Assessment
                  </div>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Evaluates lesson planning, demonstration skills, student engagement, communication, accuracy, and teaching effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Join */}
          <div className="mt-10 bg-gradient-to-r from-[#C8A24A] to-[#9E7B2B] rounded-3xl p-8 sm:p-10 text-white text-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">Become an ICA Certified Educator</h3>
            <p className="text-white/80 text-sm max-w-xl mx-auto font-light leading-relaxed mb-6">
              Join the International Cube Academy and become part of a global network of educators dedicated to inspiring the next generation through innovative, brain-based learning.
            </p>
            <button
              onClick={() => setActivePage && setActivePage('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071d47] transition-all shadow-lg"
            >
              Apply for Certification <ArrowRight size={14} />
            </button>
          </div>
        </section>

        {/* ─── CURRICULUM & CERTIFICATION ─── */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-slate-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center mb-5">
              <BookOpen size={22} />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0B2D6B] mb-3">International Curriculum</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Our curriculum integrates brain development, STEM concepts, logical thinking, creativity, and leadership into a progressive learning journey suitable for children, educators, and institutions.
            </p>
          </div>
          <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-slate-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#C8A24A] text-white flex items-center justify-center mb-5">
              <Award size={22} />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0B2D6B] mb-3">Certification</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Students and teachers receive ICA certifications upon successful completion of their learning pathway, recognizing their skills, knowledge, and achievement internationally.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
