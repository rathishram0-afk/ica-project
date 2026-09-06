import React from 'react';
import { School, ArrowRight, Globe, BookOpen, Users, Trophy, Star } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ParticleField from '../components/ParticleField';

const benefits = [
  { icon: BookOpen, title: "Curriculum Resources", desc: "Access ICA's internationally designed curriculum, lesson plans, and teaching materials." },
  { icon: Users, title: "Teacher Training", desc: "Certified teacher training programs to upskill your educators with modern brain-based methodologies." },
  { icon: Trophy, title: "Competitions Access", desc: "Participate in national and international Rubik's Cube competitions representing your institution." },
  { icon: Star, title: "Ongoing Academic Support", desc: "Continuous academic guidance, mentorship, and quality assurance from ICA's global team." },
  { icon: Globe, title: "Global Recognition", desc: "Gain internationally recognized accreditation status to distinguish your institution globally." },
  { icon: School, title: "Student Certification", desc: "Your students receive internationally recognized ICA certifications upon program completion." },
];

const steps = [
  { num: "01", title: "Submit Application", desc: "Complete the ICA School Partnership application form with your institution's details." },
  { num: "02", title: "Quality Assessment", desc: "ICA evaluates your institution against our international quality and infrastructure standards." },
  { num: "03", title: "Teacher Training", desc: "Selected teachers undergo ICA's certified training program and receive official certification." },
  { num: "04", title: "Programme Launch", desc: "Launch the ICA curriculum in your school with full support from our academic team." },
  { num: "05", title: "Accreditation Awarded", desc: "Upon meeting all quality standards, your school is officially accredited as an ICA Partner." },
];

export default function AccreditationPage({ setActivePage }) {
  return (
    <div className="w-full bg-white text-slate-800">

      {/* PAGE HEADER */}
      <section className="relative py-16 lg:py-20 bg-[#F8F9FB] border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.10] world-map-bg pointer-events-none"></div>
        <div className="absolute top-10 right-20 w-32 h-32 border border-[#C8A24A]/10 rounded-full animate-float-slow pointer-events-none"></div>
        <AnimatedSection animation="fadeUp" className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white px-5 py-2 rounded-full border border-[#C8A24A]/40 shadow-xs animate-border-shimmer">
            <School size={14} /> School Accreditation
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D6B] leading-tight">
            Partner with ICA
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            ICA partners with schools to introduce innovative brain development programs that enhance academic learning, student engagement, and teacher excellence.
          </p>
        </AnimatedSection>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-20">

        {/* ACCREDITATION PROGRAM */}
        <section>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection animation="fadeLeft" className="space-y-5">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">Accreditation Program</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] leading-tight">
                Elevate Your School with ICA Accreditation
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Schools that meet ICA's quality standards can become accredited partners, gaining access to curriculum resources, teacher training, competitions, and ongoing academic support.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                ICA-accredited schools are recognized globally for their commitment to innovative, brain-based education. Our accreditation program is designed to transform your institution into a centre of excellence for cognitive development and STEM learning.
              </p>
              <button
                onClick={() => setActivePage && setActivePage('contact')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071d47] transition-all duration-300 shadow-sm hover:shadow-elevated transform hover:-translate-y-1 group"
              >
                Apply for Accreditation <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </AnimatedSection>

            {/* Visual Stats Card */}
            <AnimatedSection animation="fadeRight" delay={200} className="bg-gradient-to-br from-[#0B2D6B] to-[#16489C] rounded-3xl p-8 text-white relative overflow-hidden shadow-elevated">
              <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none rounded-3xl"></div>
              <ParticleField count={10} />
              <div className="relative z-10 space-y-6">
                <div className="text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] mb-2">Why Schools Join ICA</div>
                {[
                  { val: "500+", label: "Accredited Partner Schools" },
                  { val: "20+", label: "Countries Represented" },
                  { val: "100%", label: "Satisfaction in School Outcomes" },
                  { val: "15+", label: "Years of Educational Excellence" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0 group">
                    <div className="font-serif text-3xl font-extrabold text-[#C8A24A]">{stat.val}</div>
                    <div className="text-slate-200 text-sm font-light group-hover:text-white transition-colors duration-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ACCREDITATION BENEFITS */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">What You Get</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] mt-1">Accreditation Benefits</h2>
          </div>
          <AnimatedSection animation="stagger" staggerDelay={80} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="bg-[#F8F9FB] rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/50 card-hover-lift transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center mb-4 group-hover:bg-[#C8A24A] group-hover:text-white transition-colors duration-300">
                    <Icon size={20} className="icon-hover-rotate" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#0B2D6B] mb-2">{b.title}</h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </AnimatedSection>
        </section>

        {/* ACCREDITATION STEPS */}
        <section className="bg-[#F8F9FB] rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs">
          <div className="text-center mb-10">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">The Process</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] mt-1">How to Get Accredited</h2>
          </div>
          <AnimatedSection animation="stagger" staggerDelay={100} className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-5 bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#C8A24A]/50 transition-all duration-300 card-hover-lift group">
                <div className="font-serif text-2xl font-extrabold text-[#C8A24A] shrink-0 w-10 text-right group-hover:scale-110 transition-transform duration-300">{step.num}</div>
                <div className="w-px bg-slate-200 self-stretch shrink-0"></div>
                <div>
                  <h3 className="font-bold text-sm text-[#0B2D6B] mb-1">{step.title}</h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </section>

        {/* CTA */}
        <AnimatedSection animation="scaleIn" as="section" className="bg-gradient-to-r from-[#0B2D6B] to-[#16489C] rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-elevated">
          <ParticleField count={10} />
          <div className="relative z-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">Ready to Transform Your School?</h2>
          <p className="text-slate-200 text-sm font-light max-w-xl mx-auto mb-6 leading-relaxed">
            Join hundreds of schools worldwide that are already delivering ICA's internationally recognized brain development programs.
          </p>
          <button
            onClick={() => setActivePage && setActivePage('contact')}
            className="gold-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-gold-glow transform hover:-translate-y-1 group"
          >
            Get in Touch <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
