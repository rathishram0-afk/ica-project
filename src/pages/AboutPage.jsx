import React from 'react';
import { Target, Eye, ShieldCheck, Award, Heart, Sparkles, User, Globe, CheckCircle2, Lightbulb, Trophy, Users, BookOpen, Flag } from 'lucide-react';

export default function AboutPage({ setActivePage }) {
  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* ---------------------------------------------------- */}
      {/* HERO / INTRO SECTION (2-COLUMN MATCHING REFERENCE) */}
      {/* ---------------------------------------------------- */}
      <section className="relative py-12 lg:py-16 bg-[#F8F9FB] border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.10] world-map-bg pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN (52%) - Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white px-4 py-1.5 rounded-full border border-[#C8A24A]/30 shadow-xs">
                <span>★</span> ABOUT ICA
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D6B] leading-[1.15] tracking-tight">
                About International<br />
                <span className="text-[#0B2D6B]">Cube Academy</span>
              </h1>

              {/* Subheading */}
              <p className="text-[#C8A24A] font-serif text-base sm:text-lg font-bold italic tracking-wide">
                Shaping Minds. Inspiring Innovation. Creating Global Leaders.
              </p>

              {/* Paragraphs */}
              <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-light pt-1">
                <p className="text-slate-700 font-normal">
                  The <strong className="font-bold text-[#0B2D6B]">International Cube Academy (ICA)</strong> is a pioneering global educational organization dedicated to transforming lives through the power of the Rubik's Cube. More than just a puzzle academy, ICA is a comprehensive learning ecosystem that nurtures intelligence, creativity, critical thinking, leadership, and lifelong learning.
                </p>

                <p>
                  Founded on the belief that every individual has unlimited potential, ICA integrates the Rubik's Cube with modern education, STEM learning, neuroscience, cognitive development, and 21st-century skills to empower learners of all ages.
                </p>

                <p>
                  With a vision to establish ICA in schools, universities, training centres, and communities across the world, we strive to make quality brain development education accessible to everyone.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN (48%) - Exact ica-about-cube.png Image */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end items-center relative">
              <img 
                src="/images/hero/ica-about-cube.png" 
                alt="International Cube Academy About Visual" 
                className="w-full max-w-[480px] lg:max-w-[520px] h-auto object-contain block bg-transparent mx-auto lg:mr-0 transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 space-y-20">
        
        {/* ---------------------------------------------------- */}
        {/* OUR VISION & OUR MISSION */}
        {/* ---------------------------------------------------- */}
        <section className="grid md:grid-cols-2 gap-8">
          
          {/* Our Vision Card */}
          <div className="bg-[#F8F9FB] rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:border-[#C8A24A]/50 transition-all duration-300">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#0B2D6B] text-[#C8A24A] flex items-center justify-center mb-6 shadow-sm">
                <Eye size={28} />
              </div>
              <h2 className="font-serif font-bold text-2xl text-[#0B2D6B] mb-3">Our Vision</h2>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                To become the world's leading academy for brain development and cognitive education, empowering learners through innovative cube-based learning experiences.
              </p>
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="bg-[#F8F9FB] rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:border-[#C8A24A]/50 transition-all duration-300">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#C8A24A] text-white flex items-center justify-center mb-6 shadow-sm">
                <Target size={28} />
              </div>
              <h2 className="font-serif font-bold text-2xl text-[#0B2D6B] mb-3">Our Mission</h2>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                To provide high-quality educational programs, teacher training, and international certifications that develop problem-solving, creativity, leadership, and lifelong learning.
              </p>
            </div>
          </div>

        </section>

        {/* ---------------------------------------------------- */}
        {/* OUR CORE VALUES */}
        {/* ---------------------------------------------------- */}
        <section className="space-y-8">
          <div className="text-center space-y-1">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B]">Our Core Values</h2>
            <div className="w-12 h-0.5 bg-[#C8A24A] mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Lightbulb, label: "Innovation", desc: "Neuroscience-backed learning" },
              { icon: Trophy, label: "Excellence", desc: "Setting global benchmarks" },
              { icon: ShieldCheck, label: "Integrity", desc: "Transparent accreditation" },
              { icon: Users, label: "Inclusion", desc: "Accessible for all ages" },
              { icon: Flag, label: "Leadership", desc: "Building future innovators" },
              { icon: BookOpen, label: "Lifelong Learning", desc: "Continuous skill development" }
            ].map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-[#F8F9FB] p-5 rounded-2xl border border-slate-200/80 text-center flex flex-col items-center group hover:border-[#C8A24A] transition-all duration-200">
                  <div className="w-12 h-12 rounded-2xl bg-white text-[#0B2D6B] flex items-center justify-center mb-3 shadow-xs border border-slate-100 group-hover:bg-[#0B2D6B] group-hover:text-[#C8A24A] transition-colors">
                    <Icon size={22} />
                  </div>
                  <div className="font-serif font-bold text-sm text-[#0B2D6B] mb-1">{val.label}</div>
                  <div className="text-[11px] text-slate-500 font-light leading-tight">{val.desc}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* FOUNDER & PRESIDENT SECTION */}
        {/* ---------------------------------------------------- */}
        <section className="bg-[#F8F9FB] rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Founder Image Display with Navy Banner */}
            <div className="lg:col-span-5 bg-[#0B2D6B] text-white p-8 flex flex-col items-center justify-between relative overflow-hidden text-center min-h-[420px]">
              <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none"></div>
              
              <div className="w-full max-w-[320px] mx-auto relative z-10 my-auto">
                <img 
                  src="/images/founder/dr-r-chandrika.png" 
                  alt="Dr. R. Chandrika - Founder & President, International Cube Academy" 
                  className="w-full h-auto object-contain block mx-auto rounded-2xl drop-shadow-xl"
                />
              </div>

              {/* Badge Overlay */}
              <div className="w-full bg-[#061F4F] rounded-2xl p-4 border border-[#C8A24A]/30 relative z-10 mt-6 space-y-1">
                <div className="flex items-center justify-center gap-2 text-[#C8A24A] font-serif font-bold text-sm">
                  <Trophy size={16} /> WORLD MASTER OF CUBE
                </div>
                <div className="text-[11px] text-slate-300 font-light">
                  Expert in Brain Development & Cognitive Education
                </div>
              </div>
            </div>

            {/* Founder Biography Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-5 flex flex-col justify-center">
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">
                  FOUNDER & PRESIDENT
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] mt-1">
                  Dr. R. Chandrika
                </h2>
                <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1">
                  Founder & President – International Cube Academy
                </div>
              </div>

              <div className="w-10 h-0.5 bg-[#C8A24A]"></div>

              <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Dr. R. Chandrika is an internationally respected educator, brain development specialist, and Rubik's Cube expert with over 15 years of experience in cognitive education and cube-based learning.
                </p>
                <p>
                  Known as the <strong className="font-semibold text-[#0B2D6B]">"World Master of Cube,"</strong> she has dedicated her career to transforming education through innovative cube-based learning. Her passion for empowering children, educators, and schools has inspired thousands of learners to develop stronger thinking skills, confidence, and creativity.
                </p>
                <p>
                  As the Founder and President of the International Cube Academy, Dr. Chandrika leads the organization's global vision of integrating Rubik's Cube education into mainstream learning. Her work focuses on teacher development, educational research, curriculum innovation, inclusive learning, and international collaboration.
                </p>
                <p>
                  Under her leadership, ICA continues to expand its reach, creating opportunities for learners and educators worldwide while promoting excellence in brain development and STEM education.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>

    </div>
  );
}
