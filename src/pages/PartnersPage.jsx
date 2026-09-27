import React from 'react';
import { Handshake, ArrowRight, Globe, GraduationCap, Award, School, Sparkles, FileText, Search, FileCheck, Users, Rocket, ShieldCheck, HeartHandshake } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ParticleField from '../components/ParticleField';

export default function PartnersPage({ setActivePage }) {
  return (
    <div className="w-full bg-white text-slate-800">

      {/* ---------------------------------------------------- */}
      {/* HERO SECTION — PARTNERS & TRAINING CENTRES */}
      {/* ---------------------------------------------------- */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-[#061F4F] via-[#0B2D6B] to-[#082B68] text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-6 relative z-10">
          
          {/* Outlined Gold Eyebrow Badge */}
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
            PARTNERS & TRAINING CENTRES
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.14] tracking-tight text-white">
            Grow Together with<br />
            <span className="text-[#C8A24A]">ICA Partnership</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
            ICA welcomes schools, universities, organizations, and educational leaders to collaborate in expanding innovative learning opportunities across the globe.
          </p>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* MAIN CONTENT AREA */}
      {/* ---------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-20 space-y-20">

        {/* ─── 1. BECOME A PARTNER SECTION ─── */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
              JOIN OUR NETWORK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] pt-1">Become a Partner</h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
              Partner with ICA and be part of a global mission to shape creative minds and build a smarter future.
            </p>
          </div>

          {/* 4 PARTNER CATEGORY CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: School,
                title: "Schools & Universities",
                desc: "Integrate ICA programs into your curriculum and enhance problem-solving skills among students."
              },
              {
                icon: Globe,
                title: "International Organizations",
                desc: "Partner with ICA to promote quality brain development education and global collaboration."
              },
              {
                icon: Award,
                title: "Educational Leaders",
                desc: "Empower educators with certified training, resources, and academic support from ICA."
              },
              {
                icon: Sparkles,
                title: "Corporate Partners",
                desc: "Support innovative education initiatives and build future-ready problem solvers with ICA programs."
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#F8F9FB] rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:border-[#C8A24A] card-hover-lift transition-all duration-400 flex flex-col justify-between group h-full"
                >
                  {/* Clean Neutral Placeholder Container */}
                  <div className="w-full h-36 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center mb-6 shadow-xs group-hover:border-[#C8A24A]/40 transition-colors">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center shadow-xs group-hover:bg-[#C8A24A] group-hover:text-white transition-colors">
                      <Icon size={26} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 flex-1">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#0B2D6B] leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── 2. HOW TO BECOME A PARTNER (THE PROCESS) ─── */}
        <section className="bg-[#F8F9FB] rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">
              THE PROCESS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2D6B]">How to Become a Partner</h2>
          </div>

          {/* 5-Step Connected Process Row */}
          <div className="relative">
            {/* Horizontal Line connector on desktop */}
            <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-0.5 border-t-2 border-dashed border-[#C8A24A]/40 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative z-10">
              {[
                {
                  num: "01",
                  icon: FileText,
                  title: "Submit Inquiry",
                  desc: "Reach out to ICA with your organization's profile and partnership interest."
                },
                {
                  num: "02",
                  icon: Search,
                  title: "Review & Assessment",
                  desc: "ICA reviews your application and assesses alignment with our mission."
                },
                {
                  num: "03",
                  icon: FileCheck,
                  title: "Partnership Agreement",
                  desc: "Sign the official ICA partnership agreement and agree on program scope."
                },
                {
                  num: "04",
                  icon: Users,
                  title: "Onboarding & Training",
                  desc: "Your team undergoes ICA's certified trainer onboarding and curriculum training."
                },
                {
                  num: "05",
                  icon: Rocket,
                  title: "Launch & Support",
                  desc: "Launch ICA programs with full ongoing support, resources, and community access."
                }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col items-center text-center relative group hover:border-[#C8A24A] transition-all duration-300 h-full card-hover-lift">
                    {/* Number Badge */}
                    <div className="w-8 h-8 rounded-full bg-[#C8A24A] text-white text-xs font-extrabold flex items-center justify-center mb-3 shadow-xs border-2 border-white">
                      {step.num}
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-[#F8F9FB] text-[#0B2D6B] flex items-center justify-center mb-3 border border-slate-100 group-hover:bg-[#0B2D6B] group-hover:text-[#C8A24A] transition-colors">
                      <Icon size={18} />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-bold text-xs sm:text-sm text-[#0B2D6B] mb-1.5 leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-[11px] font-light leading-relaxed mt-auto">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 3. BUILD A TRAINING CENTRE NETWORK SECTION ─── */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs space-y-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Box (Training Centre Intro + Button) */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
                OUR TRAINING CENTRES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] leading-tight">
                Build a Training Centre Network
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                ICA is establishing a network of authorized training centres, beginning with our initial locations and expanding internationally.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setActivePage && setActivePage('contact')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C8A24A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#b89035] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group"
                >
                  <span>REGISTER YOUR CENTRE</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Grid (4 Training Centre Benefits) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: GraduationCap,
                  title: "Certified Programs",
                  desc: "Access ICA's certified curriculum and training materials."
                },
                {
                  icon: ShieldCheck,
                  title: "Trainer Authorization",
                  desc: "Become an authorized ICA trainer and deliver quality education."
                },
                {
                  icon: HeartHandshake,
                  title: "Academic Support",
                  desc: "Receive continuous academic support and quality assurance."
                },
                {
                  icon: Globe,
                  title: "Global Recognition",
                  desc: "Gain global recognition as an ICA Training Centre."
                }
              ].map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="bg-[#F8F9FB] rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col items-start gap-3 hover:border-[#C8A24A]/50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm text-[#0B2D6B] mb-1">{b.title}</h3>
                      <p className="text-slate-500 text-xs font-light leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ─── 4. ICA GLOBAL PRESENCE SECTION ─── */}
        <AnimatedSection animation="scaleIn" as="section" className="bg-gradient-to-br from-[#061F4F] to-[#0B2D6B] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-elevated">
          <ParticleField count={10} />
          <div className="relative z-10 space-y-8 text-center max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] block">
                GLOBAL PRESENCE
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
                ICA Global Presence
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
                Established in Dubai, with our current international office serving as a foundation for global growth.
              </p>
            </div>

            {/* Dubai Active Office Card */}
            <div className="max-w-xs mx-auto">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/10 shadow-xs">
                <div className="font-serif text-4xl font-extrabold text-[#C8A24A]">1</div>
                <div className="text-white text-xs font-bold uppercase tracking-wider mt-1">Active Office</div>
                <div className="text-slate-300 text-xs font-light mt-1">Dubai, UAE</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ─── 5. FINAL CTA BANNER ─── */}
        <AnimatedSection animation="scaleIn" as="section" className="bg-gradient-to-r from-[#C8A24A] to-[#9E7B2B] rounded-3xl p-8 sm:p-12 text-white text-center shadow-elevated relative overflow-hidden">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Let's build a smarter future together.
          </h2>
          <p className="text-white/90 text-xs sm:text-sm font-light max-w-xl mx-auto mb-6 leading-relaxed">
            Partner with ICA and join a global movement dedicated to brain development, cognitive excellence, and 21st-century education.
          </p>
          <button
            onClick={() => setActivePage && setActivePage('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071d47] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            BECOME AN ICA PARTNER <ArrowRight size={14} />
          </button>
        </AnimatedSection>

      </div>
    </div>
  );
}
