import React, { useState } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { Mail, Phone, MapPin, Send, Globe, CheckCircle, ShieldCheck } from 'lucide-react';

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
      <section className="py-16 bg-[#F8F9FB] border-b border-slate-100 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A] bg-white px-4 py-1.5 rounded-full border border-[#C8A24A]/30">
            Institutional Relations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#0B2E6B]">
            Contact Global Secretariat
          </h1>
          <p className="text-slate-600 text-base leading-relaxed font-light">
            Connect with ICA admissions, accreditation board, or regional training coordinators worldwide.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ---------------------------------------------------- */}
        {/* CONTACT FORM & OFFICE DETAILS */}
        {/* ---------------------------------------------------- */}
        <section>
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left: Office Details & Social Links */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">Direct Contact</span>
                <h2 className="font-serif text-3xl font-bold text-[#0B2E6B] mt-2 mb-4">Global Head Office</h2>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Our regional representatives assist schools with curriculum demos, teacher training schedules, and accreditation criteria.
                </p>
              </div>

              <div className="space-y-6 text-sm text-slate-700">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F8F9FB] border border-slate-100">
                  <MapPin size={20} className="text-[#C8A24A] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#0B2E6B]">Global Headquarters</h4>
                    <p className="text-xs text-slate-500 font-light mt-0.5">
                      ICA Secretariat, International Knowledge Park<br />
                      <span className="font-mono text-[10px] text-slate-400">[ Office Location Placeholder ]</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F8F9FB] border border-slate-100">
                  <Mail size={20} className="text-[#C8A24A] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#0B2E6B]">Admissions & Accreditation Email</h4>
                    <p className="text-xs text-slate-500 font-light">accreditation@cubeacademy.org</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F8F9FB] border border-slate-100">
                  <Phone size={20} className="text-[#C8A24A] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#0B2E6B]">Telephone Desk</h4>
                    <p className="text-xs text-slate-500 font-light">+1 (800) ICA-CUBE / +65 6789 0123</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A] block mb-3">Official Media Channels</span>
                <div className="flex items-center gap-3">
                  {['LinkedIn', 'Twitter', 'Facebook', 'YouTube'].map((net, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 rounded-full bg-[#F8F9FB] text-xs font-bold text-[#0B2E6B] border border-slate-200">
                      {net}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-premium">
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
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-slate-200 text-sm focus:outline-none focus:border-[#C8A24A]"
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
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-slate-200 text-sm focus:outline-none focus:border-[#C8A24A]"
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
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-slate-200 text-sm focus:outline-none focus:border-[#C8A24A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0B2E6B] mb-2 uppercase tracking-wider">Your Role</label>
                    <select 
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-slate-200 text-sm focus:outline-none focus:border-[#C8A24A]"
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
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-slate-200 text-sm focus:outline-none focus:border-[#C8A24A]"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="gold-btn w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-button"
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
            </div>

          </div>
        </section>


        {/* ---------------------------------------------------- */}
        {/* MAP PLACEHOLDER */}
        {/* ---------------------------------------------------- */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24A]">Location</span>
            <h2 className="font-serif text-3xl font-bold text-[#0B2E6B]">Headquarters Map Location</h2>
          </div>

          <ImagePlaceholder 
            label="Map Placeholder"
            subtext="Interactive Google Map / Satellite View of ICA Global Secretariat Campus"
            aspectRatio="banner"
            height="h-80"
            className="shadow-premium"
          />
        </section>


        {/* ---------------------------------------------------- */}
        {/* CALL TO ACTION BANNER */}
        {/* ---------------------------------------------------- */}
        <section className="bg-[#05183B] rounded-3xl p-10 sm:p-14 text-white text-center border border-[#C8A24A]/40 shadow-premium relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl font-bold">Ready to Elevate Your School's Cognitive Brand?</h2>
            <p className="text-slate-300 text-sm font-light">Join over 50+ leading international schools currently offering ICA accredited programs.</p>
            <div className="pt-2">
              <span className="inline-block px-6 py-2 bg-white/10 text-[#C8A24A] font-mono text-xs font-bold rounded-full border border-[#C8A24A]/30">
                Official Hotline: admissions@cubeacademy.org
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
