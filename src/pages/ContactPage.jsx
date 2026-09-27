import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Building2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ParticleField from '../components/ParticleField';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    role: 'School Administrator',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', institution: '', role: 'School Administrator', message: '' });
    }, 4000);
  };

  return (
    <div className="w-full bg-white text-slate-800 py-12">
      
      {/* Header */}
      <section className="py-16 bg-[#F8F9FB] border-b border-slate-100 mb-16 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-40 h-40 border border-[#C8A24A]/10 rounded-full animate-float-slow pointer-events-none"></div>
        <div className="absolute bottom-5 left-10 w-24 h-24 border border-[#0B2D6B]/10 rounded-full animate-float-medium pointer-events-none"></div>

        <AnimatedSection animation="fadeUp" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A] bg-white px-4 py-1.5 rounded-full border border-[#C8A24A]/30 animate-border-shimmer inline-block">
            Institutional Relations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#0B2E6B]">
            Contact Global Secretariat
          </h1>
          <p className="text-slate-600 text-base leading-relaxed font-light">
            Connect with ICA admissions, accreditation board, or regional training coordinators worldwide.
          </p>
        </AnimatedSection>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ---------------------------------------------------- */}
        {/* CONTACT FORM & OFFICE DETAILS */}
        {/* ---------------------------------------------------- */}
        <section>
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left: Office Details & Social Links */}
            <AnimatedSection animation="fadeLeft" className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A] block">Direct Contact</span>
                <h2 className="font-serif text-3xl font-bold text-[#0B2E6B] mt-2 mb-4">Official Regional Offices</h2>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Connect with ICA administrative headquarters in Chennai or our regional coordination offices in the UAE.
                </p>
              </div>

              <div className="space-y-6 text-sm text-slate-700">
                {/* 1. HEAD OFFICE / CHENNAI OFFICE */}
                <div className="p-5 rounded-xl bg-[#F8F9FB] border border-slate-100 card-hover-lift transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <MapPin size={22} className="text-[#C8A24A] shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C8A24A] block">Head Office</span>
                      <h4 className="font-bold text-[#0B2E6B] text-base mt-0.5">Chennai Office</h4>
                      <p className="text-xs text-slate-600 font-light mt-1.5 leading-relaxed">
                        No. 1/90, Ground Floor, Shop No. 1 & 2,<br />
                        Pillaiyar Koil Street, Kolapakkam,<br />
                        Chennai – 600 128, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. UAE OFFICES */}
                <div className="p-5 rounded-xl bg-[#F8F9FB] border border-slate-100 card-hover-lift transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <Building2 size={22} className="text-[#C8A24A] shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div className="w-full space-y-4">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C8A24A] block">UAE Offices</span>
                      
                      <div>
                        <h4 className="font-bold text-[#0B2E6B] text-xs uppercase tracking-wider">Dubai Office</h4>
                        <p className="text-xs text-slate-600 font-light mt-0.5 leading-relaxed">
                          Office #203, NBQ Building,<br />
                          Burman MS Exit 4, Dubai, UAE
                        </p>
                      </div>

                      <div className="border-t border-slate-200/60 pt-3">
                        <h4 className="font-bold text-[#0B2E6B] text-xs uppercase tracking-wider">Sharjah Office</h4>
                        <p className="text-xs text-slate-600 font-light mt-0.5 leading-relaxed">
                          Office #405, Faisal Building,<br />
                          Al Qasimia, Sharjah, UAE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. CONTACT NUMBERS */}
                <div className="p-5 rounded-xl bg-[#F8F9FB] border border-slate-100 card-hover-lift transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <Phone size={22} className="text-[#C8A24A] shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C8A24A] block">Contact Numbers</span>
                      <h4 className="font-bold text-[#0B2E6B] text-sm mt-0.5">Telephone & WhatsApp</h4>
                      <div className="mt-2.5 space-y-2 text-xs">
                        <div className="space-y-1">
                          <span className="text-slate-400 font-medium text-[11px] block uppercase tracking-wider">Chennai / India:</span>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                            <a href="tel:+918220713743" className="font-mono text-[#0B2E6B] font-bold hover:text-[#C8A24A] transition-colors">
                              +91 82207 13743
                            </a>
                            <span className="hidden sm:inline text-slate-300">|</span>
                            <a href="tel:+919500849544" className="font-mono text-[#0B2E6B] font-bold hover:text-[#C8A24A] transition-colors">
                              +91 95008 49544
                            </a>
                          </div>
                        </div>
                        <div className="border-t border-slate-200/60 pt-2">
                          <span className="text-slate-400 font-medium text-[11px] block uppercase tracking-wider">UAE:</span>
                          <a href="tel:+971564895227" className="font-mono text-[#0B2E6B] font-bold hover:text-[#C8A24A] transition-colors block mt-0.5">
                            +971 56 489 5227
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. OFFICIAL EMAIL */}
                <div className="p-5 rounded-xl bg-[#F8F9FB] border border-slate-100 card-hover-lift transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <Mail size={22} className="text-[#C8A24A] shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C8A24A] block">Official Email</span>
                      <h4 className="font-bold text-[#0B2E6B] text-sm mt-0.5">Admissions & General Inquiries</h4>
                      <a 
                        href="mailto:internationalcubeacademy@gmail.com" 
                        className="text-xs font-mono font-semibold text-[#0B2E6B] hover:text-[#C8A24A] transition-colors block mt-1 break-all"
                      >
                        internationalcubeacademy@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A] block mb-3">Official Media Channels</span>
                <div className="flex items-center gap-3">
                  {[
                    {
                      name: 'Facebook',
                      url: import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/TamilNaduCubeAssociation',
                    },
                    {
                      name: 'YouTube',
                      url: 'https://www.youtube.com/@CubesKool_no1toystores',
                    },
                  ].map((net) => (
                    <a
                      key={net.name}
                      href={net.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-[#F8F9FB] text-xs font-bold text-[#0B2E6B] border border-slate-200 hover:bg-[#0B2D6B] hover:text-white hover:border-[#0B2D6B] transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
                    >
                      {net.name}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Contact Form */}
            <AnimatedSection animation="fadeRight" delay={200} className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-premium relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0B2D6B] via-[#C8A24A] to-[#0B2D6B] animate-gradient-shift"></div>

              <h3 className="font-serif font-bold text-2xl text-[#0B2E6B] mb-2">Institutional Inquiry Form</h3>
              <p className="text-slate-500 text-xs mb-8">Please fill in details to receive the official ICA accreditation dossier.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0B2E6B] mb-2 uppercase tracking-wider">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Prof. Alexander Wright"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-slate-200 text-sm focus:outline-none focus:border-[#C8A24A] focus:shadow-glass-gold transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0B2E6B] mb-2 uppercase tracking-wider">Official Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="alexander@school.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-slate-200 text-sm focus:outline-none focus:border-[#C8A24A] focus:shadow-glass-gold transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0B2E6B] mb-2 uppercase tracking-wider">School / Organization *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Name of Institution"
                      value={formData.institution}
                      onChange={(e) => setFormData({...formData, institution: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-slate-200 text-sm focus:outline-none focus:border-[#C8A24A] focus:shadow-glass-gold transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0B2E6B] mb-2 uppercase tracking-wider">Your Role</label>
                    <select 
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-slate-200 text-sm focus:outline-none focus:border-[#C8A24A] focus:shadow-glass-gold transition-all duration-300"
                    >
                      <option>School Administrator / Principal</option>
                      <option>Math / STEM Educator</option>
                      <option>Parent / Student</option>
                      <option>Regional Partner / Franchisee</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B2E6B] mb-2 uppercase tracking-wider">Inquiry Details *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Describe your inquiry or requested program details..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-slate-200 text-sm focus:outline-none focus:border-[#C8A24A] focus:shadow-glass-gold transition-all duration-300"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="gold-btn w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-button hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Send size={16} />
                  <span>Submit Inquiry</span>
                </button>

                {formSubmitted && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2 animate-fadeIn">
                    <CheckCircle size={16} className="text-emerald-600 shrink-0" />
                    <span>Inquiry submitted successfully! Our Global Secretariat will respond within 24 hours.</span>
                  </div>
                )}
              </form>
            </AnimatedSection>

          </div>
        </section>



        {/* ---------------------------------------------------- */}
        {/* CALL TO ACTION BANNER */}
        {/* ---------------------------------------------------- */}
        <AnimatedSection animation="scaleIn" as="section">
          <div className="bg-[#05183B] rounded-3xl p-10 sm:p-14 text-white text-center border border-[#C8A24A]/40 shadow-elevated relative overflow-hidden">
            <ParticleField count={10} />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D6B]/30 via-transparent to-[#C8A24A]/10 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h2 className="font-serif text-3xl font-bold">Ready to Elevate Your School's Cognitive Brand?</h2>
              <p className="text-slate-300 text-sm font-light">Join over 50+ leading international schools currently offering ICA accredited programs.</p>
              <div className="pt-2">
                <a 
                  href="mailto:internationalcubeacademy@gmail.com"
                  className="inline-block px-6 py-2 glass text-[#C8A24A] font-mono text-xs font-bold rounded-full border border-[#C8A24A]/30 animate-border-shimmer hover:bg-[#C8A24A]/20 transition-all duration-300"
                >
                  Official Email: internationalcubeacademy@gmail.com
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
