import React from 'react';
import { Handshake, Building2, ArrowRight, Globe, GraduationCap, Award, CheckCircle2, MapPin } from 'lucide-react';

const partnerTypes = [
  { icon: Building2, title: "Schools & Universities", desc: "Educational institutions that integrate ICA programs into their mainstream academic offering." },
  { icon: Globe, title: "International Organizations", desc: "Global bodies and NGOs that partner with ICA to expand access to quality brain development education." },
  { icon: GraduationCap, title: "Educational Leaders", desc: "Individual educators and education entrepreneurs committed to building innovative learning institutions." },
  { icon: Award, title: "Corporate Partners", desc: "Companies that sponsor ICA programs and competitions, contributing to global educational development." },
];

const trainingCentreFeatures = [
  "Access to ICA's officially certified curriculum and teaching materials",
  "Standardized training programs delivered by ICA-certified trainers",
  "Authorization to issue internationally recognized ICA student certificates",
  "Regular quality audits and continuous academic support from ICA",
  "Listing on ICA's global directory of authorized training centres",
  "Access to ICA competitions, events, and community programs",
];

const partnerSteps = [
  { num: "01", title: "Submit Partnership Inquiry", desc: "Reach out to ICA with your organization's profile and partnership interest." },
  { num: "02", title: "Review & Assessment", desc: "ICA reviews your application and assesses alignment with our quality standards." },
  { num: "03", title: "Partnership Agreement", desc: "Sign the official ICA partnership agreement and agree on program scope." },
  { num: "04", title: "Onboarding & Training", desc: "Your team undergoes ICA's certified trainer onboarding and curriculum training." },
  { num: "05", title: "Launch & Support", desc: "Launch ICA programs with full ongoing support, resources, and community access." },
];

export default function PartnersPage({ setActivePage }) {
  return (
    <div className="w-full bg-white text-slate-800">

      {/* PAGE HEADER */}
      <section className="relative py-16 lg:py-20 bg-[#0B2D6B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }}></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-4 pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white/10 px-5 py-2 rounded-full border border-[#C8A24A]/40 backdrop-blur-sm">
            <Handshake size={14} /> Partners & Training Centres
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Grow Together with<br />
            <span className="text-[#C8A24A]">ICA Partnership</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            ICA welcomes schools, universities, organizations, and educational leaders to collaborate in expanding innovative learning opportunities across the globe.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-20">

        {/* BECOME A PARTNER */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">Join Our Network</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] mt-1">Become a Partner</h2>
            <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto font-light leading-relaxed">
              ICA welcomes schools, universities, organizations, and educational leaders to collaborate in expanding innovative learning opportunities across the globe.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {partnerTypes.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div key={i} className="bg-[#F8F9FB] rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/50 hover:-translate-y-1 transition-all duration-200 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#0B2D6B] mb-2">{pt.title}</h3>
                  <p className="text-slate-500 text-[11px] font-light leading-relaxed">{pt.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Partnership Process */}
          <div className="bg-[#F8F9FB] rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs">
            <div className="text-center mb-8">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">The Process</span>
              <h3 className="font-serif text-2xl font-bold text-[#0B2D6B] mt-1">How to Become a Partner</h3>
            </div>
            <div className="space-y-4">
              {partnerSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-5 bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#C8A24A]/50 transition-all">
                  <div className="font-serif text-2xl font-extrabold text-[#C8A24A] shrink-0 w-10 text-right">{step.num}</div>
                  <div className="w-px bg-slate-200 self-stretch shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0B2D6B] mb-1">{step.title}</h4>
                    <p className="text-slate-500 text-xs font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRAINING CENTRES */}
        <section>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">Official Centres</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] leading-tight">Training Centres</h2>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Authorized ICA Training Centres deliver internationally recognized programs using standardized curriculum, certified trainers, and continuous academic support.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                As an ICA Training Centre, you become part of a trusted global network committed to delivering quality brain development education with consistency and excellence.
              </p>
              <button
                onClick={() => setActivePage && setActivePage('contact')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C8A24A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#b89035] transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                Register Your Centre <ArrowRight size={13} />
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#0B2D6B] to-[#16489C] rounded-3xl p-8 text-white">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] mb-5">Training Centre Benefits</div>
              <ul className="space-y-3">
                {trainingCentreFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-[#C8A24A] shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-xs font-light leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* GLOBAL MAP PLACEHOLDER */}
        <section className="bg-gradient-to-br from-[#0B2D6B] to-[#16489C] rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none rounded-3xl"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#C8A24A]/20 flex items-center justify-center">
                <MapPin size={32} className="text-[#C8A24A]" />
              </div>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">Find an ICA Training Centre Near You</h2>
            <p className="text-slate-200 text-sm font-light max-w-xl mx-auto mb-6 leading-relaxed">
              With authorized training centres in 20+ countries, quality ICA education is closer than you think. Contact us to find your nearest centre.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { num: "20+", label: "Countries" },
                { num: "200+", label: "Training Centres" },
                { num: "500+", label: "Certified Trainers" },
                { num: "1M+", label: "Students Reached" },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="font-serif text-2xl font-extrabold text-[#C8A24A]">{s.num}</div>
                  <div className="text-slate-200 text-[11px] mt-0.5 font-light">{s.label}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setActivePage && setActivePage('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C8A24A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#b89035] transition-all shadow-lg"
            >
              Contact Us <ArrowRight size={14} />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
