import React from 'react';
import { Target, Eye, ShieldCheck, Award, Heart, Sparkles, User, Globe, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* ---------------------------------------------------- */}
      {/* HEADER SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative py-14 lg:py-18 bg-[#F8F9FB] border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.10] world-map-bg pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-4">
          <div className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white px-4 py-1.5 rounded-full border border-[#C8A24A]/30 shadow-xs">
            ABOUT ICA
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D6B] leading-tight">
            About International Cube Academy
          </h1>
          <p className="text-[#C8A24A] font-serif text-lg sm:text-xl font-bold italic tracking-wide max-w-2xl mx-auto">
            Shaping Minds. Inspiring Innovation. Creating Global Leaders.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 lg:py-18 space-y-16">
        
        {/* ---------------------------------------------------- */}
        {/* INTRODUCTION PARAGRAPHS (VERBATIM CLIENT COPY) */}
        {/* ---------------------------------------------------- */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
          <p className="text-lg font-normal text-[#0B2D6B] leading-relaxed">
            The <strong className="font-bold text-[#0B2D6B]">International Cube Academy (ICA)</strong> is a pioneering global educational organization dedicated to transforming lives through the power of the Rubik's Cube. More than just a puzzle academy, ICA is a comprehensive learning ecosystem that nurtures intelligence, creativity, critical thinking, leadership, and lifelong learning.
          </p>

          <p>
            Founded on the belief that every individual has unlimited potential, ICA integrates the Rubik's Cube with modern education, STEM learning, neuroscience, cognitive development, and 21st-century skills. Our innovative curriculum is designed to enhance memory, concentration, logical reasoning, spatial intelligence, creativity, and problem-solving abilities for learners of all ages.
          </p>

          <p>
            With a vision to establish ICA in schools, universities, training centres, and communities across the world, we strive to make quality brain development education accessible to everyone. Through internationally recognized certification programs, teacher training, research initiatives, competitions, and strategic partnerships, ICA is building a global movement that empowers learners to think beyond boundaries and excel in every aspect of life.
          </p>
        </section>

        {/* ---------------------------------------------------- */}
        {/* OUR VISION & OUR MISSION */}
        {/* ---------------------------------------------------- */}
        <section className="grid md:grid-cols-2 gap-8">
          
          {/* Our Vision Card */}
          <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:border-[#C8A24A]/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center mb-6 shadow-xs">
                <Eye size={24} />
              </div>
              <h2 className="font-serif font-bold text-2xl text-[#0B2D6B] mb-3">Our Vision</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                To become the world's leading academy for brain development and cognitive education, empowering learners through innovative cube-based learning experiences.
              </p>
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:border-[#C8A24A]/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C8A24A] text-white flex items-center justify-center mb-6 shadow-xs">
                <Target size={24} />
              </div>
              <h2 className="font-serif font-bold text-2xl text-[#0B2D6B] mb-3">Our Mission</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                To provide high-quality educational programs, teacher training, and international certifications that develop problem-solving, creativity, leadership, and lifelong learning.
              </p>
            </div>
          </div>

        </section>

        {/* ---------------------------------------------------- */}
        {/* OUR CORE VALUES */}
        {/* ---------------------------------------------------- */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] mb-1">Pillars of Excellence</div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2D6B]">Our Core Values</h2>
            <p className="text-slate-600 text-sm leading-relaxed font-light mt-2">
              Innovation, Excellence, Integrity, Inclusion, Leadership, and Lifelong Learning guide every decision we make and every learner we inspire.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            {[
              { label: "Innovation", desc: "Neuroscience-backed learning" },
              { label: "Excellence", desc: "Setting global benchmarks" },
              { label: "Integrity", desc: "Transparent accreditation" },
              { label: "Inclusion", desc: "Accessible for all ages" },
              { label: "Leadership", desc: "Building future innovators" },
              { label: "Lifelong Learning", desc: "Continuous skill development" }
            ].map((val, idx) => (
              <div key={idx} className="bg-[#F8F9FB] p-4 rounded-2xl border border-slate-100 flex items-start gap-3">
                <CheckCircle size={18} className="text-[#C8A24A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sm text-[#0B2D6B]">{val.label}</div>
                  <div className="text-[11px] text-slate-500 font-light mt-0.5">{val.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* FOUNDER & PRESIDENT SECTION (Direct Uploaded Image) */}
        {/* ---------------------------------------------------- */}
        <section className="bg-[#F8F9FB] rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Founder Image Display from /images/founder/dr-r-chandrika.png */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full bg-white p-3 rounded-[22px] border border-slate-200/80 shadow-sm flex items-center justify-center">
                <img 
                  src="/images/founder/dr-r-chandrika.png" 
                  alt="Dr. R. Chandrika - Founder & President, International Cube Academy" 
                  className="w-full max-h-[560px] object-contain rounded-[18px] block mx-auto bg-white"
                />
              </div>
            </div>

            {/* Founder Biography Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white px-3.5 py-1.5 rounded-full border border-[#C8A24A]/30">
                FOUNDER & PRESIDENT
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B]">
                Dr. R. Chandrika
              </h2>
              
              <div className="text-xs font-bold text-[#C8A24A] uppercase tracking-wider">
                Founder & President – International Cube Academy
              </div>

              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed font-light pt-2">
                <p>
                  Dr. R. Chandrika is an internationally respected educator, brain development specialist, and Rubik's Cube expert with over 15 years of experience in cognitive education.
                </p>
                <p>
                  Known as the <strong className="font-semibold text-[#0B2D6B]">"World Master of Cube,"</strong> she has dedicated her career to transforming education through innovative cube-based learning. Her passion for empowering learners has inspired thousands of students and teachers worldwide to unlock their cognitive potential.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>

    </div>
  );
}
