import React, { useState } from 'react';
import { Image, Newspaper, MessageSquare, ArrowRight, Star, Quote, Play } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent",
    country: "United Kingdom",
    text: "My daughter joined ICA two years ago and the transformation has been incredible. Her concentration, memory, and confidence have improved beyond what I ever expected. ICA is truly special.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "School Principal",
    country: "India",
    text: "Integrating ICA's program into our school curriculum was one of the best decisions we made. The teachers are well-trained, students are engaged, and academic results have improved.",
    rating: 5,
  },
  {
    name: "Prof. Linda Torres",
    role: "Educator",
    country: "Philippines",
    text: "The ICA Teacher Certification changed the way I teach. The methodologies are grounded in neuroscience and the practical training made me a far more effective educator.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    role: "ICA Student",
    country: "UAE",
    text: "Competing at the ICA International Championship was the highlight of my year. I made friends from around the world and proved to myself what hard work and practice can achieve.",
    rating: 5,
  },
  {
    name: "Ms. Priya Nair",
    role: "ICA Certified Trainer",
    country: "Singapore",
    text: "Becoming an ICA Certified Trainer opened doors I never expected. I now run my own training centre with ICA's support and am making a difference in hundreds of children's lives.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Parent",
    country: "Australia",
    text: "The ICA Brain Skills Assessment identified areas my son needed to develop. Three months in, his teachers at school noticed the difference. Remarkable program.",
    rating: 5,
  },
];

const galleryItems = [
  { category: "Competition", title: "ICA International Championship 2024", tag: "Champion" },
  { category: "Workshop", title: "Teacher Development Workshop – India", tag: "Training" },
  { category: "Ceremony", title: "Certification Award Ceremony", tag: "Achievement" },
  { category: "School", title: "ICA School Launch – Malaysia", tag: "Partnership" },
  { category: "Research", title: "Cognitive Education Symposium", tag: "Research" },
  { category: "Community", title: "ICA Global Learning Community Day", tag: "Community" },
];

const newsPosts = [
  {
    date: "August 2026",
    category: "Competition",
    title: "ICA Announces 2026 International Cube Championship",
    excerpt: "Students from over 20 countries to compete in the most prestigious ICA event of the year.",
  },
  {
    date: "July 2026",
    category: "Partnership",
    title: "ICA Signs Partnership with 50 New Schools Across Southeast Asia",
    excerpt: "Major expansion brings ICA's brain development curriculum to thousands of new learners.",
  },
  {
    date: "June 2026",
    category: "Research",
    title: "New Study Confirms Rubik's Cube Learning Boosts Cognitive Scores by 38%",
    excerpt: "Landmark research validates ICA's curriculum methodology across three countries.",
  },
];

export default function MediaPage({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('gallery');

  const galleryColors = [
    "from-[#0B2D6B] to-[#16489C]",
    "from-[#C8A24A] to-[#9E7B2B]",
    "from-[#16489C] to-[#0B2D6B]",
    "from-[#9E7B2B] to-[#C8A24A]",
    "from-[#0B2D6B] to-[#C8A24A]",
    "from-[#16489C] to-[#9E7B2B]",
  ];

  return (
    <div className="w-full bg-white text-slate-800">

      {/* PAGE HEADER */}
      <section className="relative py-16 lg:py-20 bg-[#F8F9FB] border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.10] world-map-bg pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white px-5 py-2 rounded-full border border-[#C8A24A]/40 shadow-xs">
            <Image size={14} /> Media & Gallery
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D6B] leading-tight">
            Our Story in<br />
            <span className="text-[#C8A24A]">Pictures & Words</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Explore the world of ICA through news, gallery moments, and inspiring testimonials from our global community.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 space-y-16">

        {/* TAB NAVIGATION */}
        <div className="flex justify-center">
          <div className="inline-flex bg-[#F8F9FB] rounded-full p-1.5 border border-slate-200 gap-1 flex-wrap justify-center">
            {[
              { id: 'gallery', label: 'Gallery', icon: Image },
              { id: 'news', label: 'News & Media', icon: Newspaper },
              { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#0B2D6B] text-white shadow-sm'
                      : 'text-slate-500 hover:text-[#0B2D6B]'
                  }`}
                >
                  <Icon size={13} /> {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* GALLERY TAB */}
        {activeTab === 'gallery' && (
          <section>
            <div className="text-center mb-8">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">Visual Journey</span>
              <h2 className="font-serif text-3xl font-bold text-[#0B2D6B] mt-1">Gallery</h2>
              <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto font-light">
                Explore photographs and videos showcasing our programs, workshops, competitions, partnerships, and memorable learning experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {galleryItems.map((item, i) => (
                <div
                  key={i}
                  className={`relative bg-gradient-to-br ${galleryColors[i]} rounded-3xl overflow-hidden aspect-[4/3] flex flex-col justify-end p-5 cursor-pointer group shadow-lg hover:-translate-y-1 transition-all duration-200`}
                >
                  <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none"></div>
                  {/* Play icon for visual appeal */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={22} className="text-white" />
                  </div>
                  <div className="relative z-10">
                    <div className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#C8A24A] bg-black/30 px-2.5 py-1 rounded-full mb-2 backdrop-blur-sm">
                      {item.category}
                    </div>
                    <div className="text-white font-bold text-sm leading-snug">{item.title}</div>
                    <div className="text-white/60 text-[10px] mt-1 font-light">{item.tag}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* NEWS TAB */}
        {activeTab === 'news' && (
          <section>
            <div className="text-center mb-8">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">Latest Updates</span>
              <h2 className="font-serif text-3xl font-bold text-[#0B2D6B] mt-1">News & Media</h2>
              <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto font-light">
                Stay informed with the latest updates, announcements, educational initiatives, and success stories from the International Cube Academy.
              </p>
            </div>
            <div className="space-y-5">
              {newsPosts.map((post, i) => (
                <div key={i} className="bg-[#F8F9FB] rounded-3xl p-6 border border-slate-200/80 hover:border-[#C8A24A]/50 transition-all flex flex-col sm:flex-row gap-5">
                  <div className="sm:w-28 shrink-0">
                    <div
                      className="h-20 sm:h-full rounded-2xl bg-gradient-to-br flex items-center justify-center text-white text-center text-xs font-bold p-3"
                      style={{ background: i === 0 ? 'linear-gradient(135deg,#0B2D6B,#16489C)' : i === 1 ? 'linear-gradient(135deg,#C8A24A,#9E7B2B)' : 'linear-gradient(135deg,#16489C,#0B2D6B)' }}
                    >
                      <Newspaper size={24} className="opacity-60" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C8A24A]">{post.category}</span>
                      <span className="text-[10px] text-slate-400">·</span>
                      <span className="text-[10px] text-slate-400 font-light">{post.date}</span>
                    </div>
                    <h3 className="font-serif font-bold text-base text-[#0B2D6B] mb-2">{post.title}</h3>
                    <p className="text-slate-500 text-xs font-light leading-relaxed">{post.excerpt}</p>
                    <button className="inline-flex items-center gap-1 text-[#C8A24A] text-xs font-bold mt-3 hover:gap-2 transition-all">
                      Read More <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TESTIMONIALS TAB */}
        {activeTab === 'testimonials' && (
          <section>
            <div className="text-center mb-8">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">Success Stories</span>
              <h2 className="font-serif text-3xl font-bold text-[#0B2D6B] mt-1">Testimonials</h2>
              <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto font-light">
                Hear from students, parents, educators, and schools who have experienced the positive impact of ICA's innovative educational programs.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-[#F8F9FB] rounded-3xl p-6 border border-slate-200/80 hover:border-[#C8A24A]/50 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <Quote size={24} className="text-[#C8A24A]/40 mb-3" />
                    <p className="text-slate-600 text-xs font-light leading-relaxed mb-4">"{t.text}"</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 mb-3">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={12} className="text-[#C8A24A] fill-[#C8A24A]" />
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0B2D6B] to-[#16489C] flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-xs text-[#0B2D6B]">{t.name}</div>
                        <div className="text-[10px] text-slate-400 font-light">{t.role} · {t.country}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* MEDIA INQUIRY CTA */}
        <section className="bg-gradient-to-r from-[#0B2D6B] to-[#16489C] rounded-3xl p-8 sm:p-10 text-white text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">Media Inquiries & Press</h2>
          <p className="text-slate-200 text-sm font-light max-w-xl mx-auto mb-6 leading-relaxed">
            Are you a journalist, media house, or content creator interested in covering ICA? We welcome media collaborations and press coverage.
          </p>
          <button
            onClick={() => setActivePage && setActivePage('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C8A24A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#b89035] transition-all shadow-lg"
          >
            Contact Media Team <ArrowRight size={14} />
          </button>
        </section>

      </div>
    </div>
  );
}
