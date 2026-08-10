import React, { useState } from 'react';
import { Download, HelpCircle, ChevronDown, ChevronUp, FileText, BookOpen, School, Award, Globe, ArrowRight } from 'lucide-react';

const resources = [
  {
    icon: FileText,
    title: "ICA Program Brochure",
    desc: "Comprehensive overview of all ICA learning programs, certifications, and student pathways.",
    type: "PDF",
    size: "2.4 MB",
    color: "#0B2D6B",
  },
  {
    icon: BookOpen,
    title: "Curriculum Guide",
    desc: "Detailed guide to ICA's internationally designed curriculum, learning objectives, and assessment framework.",
    type: "PDF",
    size: "3.1 MB",
    color: "#C8A24A",
  },
  {
    icon: School,
    title: "School Partnership Information Pack",
    desc: "Everything you need to know about becoming an ICA-accredited school partner.",
    type: "PDF",
    size: "1.8 MB",
    color: "#16489C",
  },
  {
    icon: Award,
    title: "Teacher Certification Handbook",
    desc: "Complete guide to ICA teacher certification levels, assessment criteria, and application process.",
    type: "PDF",
    size: "2.2 MB",
    color: "#9E7B2B",
  },
  {
    icon: Globe,
    title: "ICA Training Centre Application",
    desc: "Step-by-step application form and requirements for authorizing an ICA Training Centre.",
    type: "PDF",
    size: "1.1 MB",
    color: "#0B2D6B",
  },
  {
    icon: FileText,
    title: "ICA Research Publication",
    desc: "Latest research findings on cognitive development, puzzle-based learning, and student outcomes.",
    type: "PDF",
    size: "4.5 MB",
    color: "#C8A24A",
  },
];

const faqs = [
  {
    q: "What is the International Cube Academy (ICA)?",
    a: "ICA is a global educational organization that develops cognitive skills, creativity, and leadership through Rubik's Cube-based learning programs. We offer student programs, teacher certification, school accreditation, and international competitions.",
  },
  {
    q: "What age groups can join ICA programs?",
    a: "ICA programs are designed for learners of all ages — from young children and school students to adults, educators, and senior citizens. Each program is tailored to the learner's age and cognitive level.",
  },
  {
    q: "How are students assessed and certified?",
    a: "Students are assessed through a combination of Theory Examination (30%) and Practical Assessment (70%). Those who successfully complete the required assessments receive an internationally recognized ICA Certificate.",
  },
  {
    q: "How can my school become an ICA-accredited institution?",
    a: "Schools can apply for ICA accreditation by submitting a partnership inquiry. After a quality assessment, selected schools undergo teacher training and launch the ICA curriculum with full academic support from our team.",
  },
  {
    q: "What are the different levels of Teacher Certification?",
    a: "ICA offers four teacher certification levels: Certified Trainer, Senior Trainer, Master Trainer, and International Trainer. Each level has specific assessment criteria including theory and practical teaching evaluations.",
  },
  {
    q: "Can I start an ICA Training Centre?",
    a: "Yes! Authorized ICA Training Centres can be established by certified educators and organizations. Training centres deliver ICA's standardized curriculum and issue internationally recognized student certificates with full ongoing support from ICA.",
  },
  {
    q: "Does ICA offer online learning?",
    a: "Yes, ICA offers both online and offline learning options. Our digital platforms provide access to ICA's curriculum, allowing students to learn from anywhere in the world under certified trainer guidance.",
  },
  {
    q: "What international competitions does ICA organize?",
    a: "ICA organizes National Championships, International Championships, and Inter-School Competitions throughout the year. These events allow students to showcase their skills and compete with peers from around the globe.",
  },
  {
    q: "How do I contact ICA for more information?",
    a: "You can reach ICA through our Contact page. Fill in the inquiry form with your details and our team will respond within 2 business days. You can also email us at info@ica.world.",
  },
];

export default function ResourcesPage({ setActivePage }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full bg-white text-slate-800">

      {/* PAGE HEADER */}
      <section className="relative py-16 lg:py-20 bg-[#F8F9FB] border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.10] world-map-bg pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white px-5 py-2 rounded-full border border-[#C8A24A]/40 shadow-xs">
            <Download size={14} /> Resources
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D6B] leading-tight">
            Everything You Need<br />
            <span className="text-[#C8A24A]">in One Place</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Access brochures, curriculum guides, program details, and answers to frequently asked questions about ICA.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-20">

        {/* DOWNLOAD CENTRE */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">Download Centre</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] mt-1">ICA Resource Library</h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto font-light">
              Access brochures, curriculum guides, school partnership information, program details, and other helpful resources to learn more about ICA.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((res, i) => {
              const Icon = res.icon;
              return (
                <div key={i} className="bg-[#F8F9FB] rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/50 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${res.color}15`, color: res.color }}
                      >
                        <Icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm text-[#0B2D6B] leading-tight">{res.title}</h3>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-[10px] font-bold text-[#C8A24A] bg-[#C8A24A]/10 px-2 py-0.5 rounded-full">{res.type}</span>
                          <span className="text-[10px] text-slate-400">{res.size}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-500 text-xs font-light leading-relaxed">{res.desc}</p>
                  </div>
                  <button
                    onClick={() => setActivePage && setActivePage('contact')}
                    className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#0B2D6B]/20 text-[#0B2D6B] text-xs font-bold hover:bg-[#0B2D6B] hover:text-white transition-all duration-200"
                  >
                    <Download size={13} /> Request Download
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">Got Questions?</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2D6B] mt-1">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto font-light">
              Find answers to common questions about our programs, certifications, school partnerships, events, and learning opportunities.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#C8A24A]/50 shadow-sm' : 'border-slate-200/80'
                  } bg-[#F8F9FB]`}
                >
                  <button
                    className="w-full flex items-start justify-between gap-4 p-5 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle size={16} className={`shrink-0 mt-0.5 ${isOpen ? 'text-[#C8A24A]' : 'text-slate-400'}`} />
                      <span className={`text-sm font-semibold leading-snug ${isOpen ? 'text-[#0B2D6B]' : 'text-slate-700'}`}>
                        {faq.q}
                      </span>
                    </div>
                    {isOpen
                      ? <ChevronUp size={16} className="text-[#C8A24A] shrink-0 mt-0.5" />
                      : <ChevronDown size={16} className="text-slate-400 shrink-0 mt-0.5" />
                    }
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pl-12 border-t border-slate-200/60 pt-3">
                      <p className="text-slate-500 text-sm font-light leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* STILL HAVE QUESTIONS CTA */}
        <section className="bg-gradient-to-br from-[#0B2D6B] to-[#16489C] rounded-3xl p-8 sm:p-12 text-white text-center">
          <div className="w-14 h-14 rounded-full bg-[#C8A24A]/20 flex items-center justify-center mx-auto mb-5">
            <HelpCircle size={28} className="text-[#C8A24A]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">Still Have Questions?</h2>
          <p className="text-slate-200 text-sm font-light max-w-xl mx-auto mb-6 leading-relaxed">
            Our team is here to help. Reach out to us and we'll answer all your questions about ICA programs, certifications, and partnerships.
          </p>
          <button
            onClick={() => setActivePage && setActivePage('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C8A24A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#b89035] transition-all shadow-lg"
          >
            Contact Us <ArrowRight size={14} />
          </button>
        </section>

      </div>
    </div>
  );
}
