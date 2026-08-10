import React from 'react';
import { FlaskConical, Lightbulb, ArrowRight, BookOpen, Cpu, Globe, Brain, Microscope, Zap } from 'lucide-react';

const researchAreas = [
  { icon: Brain, title: "Cognitive Development", desc: "Studying how puzzle-based learning activates and strengthens neural pathways, enhancing memory, focus, and analytical thinking." },
  { icon: BookOpen, title: "Creative Learning", desc: "Researching innovative teaching methodologies that foster creativity, divergent thinking, and artistic expression in learners." },
  { icon: Microscope, title: "Puzzle-Based Education", desc: "Investigating the educational impact of Rubik's Cube and similar spatial puzzles on student performance across subjects." },
  { icon: Globe, title: "Global Learning Outcomes", desc: "Comparing learning outcomes across cultures and educational systems to develop universally effective ICA methodologies." },
];

const innovations = [
  { icon: Cpu, title: "Technology-Enhanced Learning", desc: "Developing digital tools, interactive apps, and virtual training platforms that complement ICA's physical curriculum." },
  { icon: Zap, title: "New Teaching Methodologies", desc: "Continuously crafting and testing innovative pedagogical approaches rooted in neuroscience and modern learning theory." },
  { icon: BookOpen, title: "Educational Resources", desc: "Producing research-backed textbooks, guides, and learning kits that set new standards in brain development education." },
  { icon: Lightbulb, title: "Future-Ready Skills", desc: "Designing programs that prepare students for tomorrow's challenges by integrating 21st-century skills into every lesson." },
];

export default function ResearchPage({ setActivePage }) {
  return (
    <div className="w-full bg-white text-slate-800">

      {/* PAGE HEADER */}
      <section className="relative py-16 lg:py-20 bg-[#0B2D6B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }}></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-4 pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white/10 px-5 py-2 rounded-full border border-[#C8A24A]/40 backdrop-blur-sm">
            <FlaskConical size={14} /> Research & Innovation
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Advancing the Science of<br />
            <span className="text-[#C8A24A]">Cube-Based Learning</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            ICA is committed to rigorous educational research and continuous innovation to improve learning outcomes for students worldwide.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-20">

        {/* EDUCATIONAL RESEARCH */}
        <section>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">Our Research</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] leading-tight">Educational Research</h2>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                ICA promotes research in cognitive development, creative learning, and puzzle-based education to better understand how innovative learning experiences improve student outcomes.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Our research team collaborates with educators, neuroscientists, and institutions around the world to generate evidence-based insights that continuously refine and improve the ICA curriculum.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {researchAreas.map((area, i) => {
                const Icon = area.icon;
                return (
                  <div key={i} className="bg-[#F8F9FB] rounded-2xl p-5 border border-slate-200/80 hover:border-[#C8A24A]/50 hover:-translate-y-1 transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center mb-3">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-bold text-sm text-[#0B2D6B] mb-1">{area.title}</h3>
                    <p className="text-slate-500 text-[11px] font-light leading-relaxed">{area.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* RESEARCH PILLARS BANNER */}
        <section className="bg-gradient-to-br from-[#0B2D6B] to-[#16489C] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none rounded-3xl"></div>
          <div className="relative z-10 grid md:grid-cols-3 gap-6 text-center">
            {[
              { num: "50+", label: "Research Publications" },
              { num: "12+", label: "University Partnerships" },
              { num: "5+", label: "Countries in Active Study" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="font-serif text-4xl font-extrabold text-[#C8A24A]">{stat.num}</div>
                <div className="text-slate-200 text-sm font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* INNOVATION */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">What We're Building</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] mt-1">Innovation at ICA</h2>
            <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto font-light leading-relaxed">
              We continuously develop new teaching methodologies, educational resources, and technology-enhanced learning solutions that prepare students for the future.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {innovations.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-5 bg-[#F8F9FB] rounded-3xl p-6 border border-slate-200/80 hover:border-[#C8A24A]/50 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#C8A24A] text-white flex items-center justify-center shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B2D6B] mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-xs font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* COLLABORATE CTA */}
        <section className="bg-[#F8F9FB] rounded-3xl p-8 sm:p-12 border border-slate-200/80 text-center">
          <div className="w-16 h-16 rounded-full bg-[#C8A24A]/15 text-[#C8A24A] flex items-center justify-center mx-auto mb-5">
            <FlaskConical size={30} />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2D6B] mb-3">Collaborate with ICA Research</h2>
          <p className="text-slate-500 text-sm font-light max-w-xl mx-auto mb-6 leading-relaxed">
            Are you a researcher, educator, or institution interested in collaborating on cognitive development and puzzle-based learning research? We'd love to hear from you.
          </p>
          <button
            onClick={() => setActivePage && setActivePage('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071d47] transition-all shadow-lg"
          >
            Contact Our Research Team <ArrowRight size={14} />
          </button>
        </section>

      </div>
    </div>
  );
}
