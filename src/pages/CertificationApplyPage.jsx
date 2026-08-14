import React, { useState } from 'react';
import { Award, ArrowLeft, CheckCircle2, ArrowRight, ShieldCheck, User, Mail, Phone, Globe, BookOpen, AlertCircle } from 'lucide-react';

export default function CertificationApplyPage({ setActivePage }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    qualification: '',
    preferredLevel: 'Certified Trainer',
    preferredProgram: 'Foundation & Beginner Program',
    experience: 'None (Beginner Educator)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!formData.country.trim()) newErrors.country = 'Country / Region is required';
    if (!formData.preferredLevel) newErrors.preferredLevel = 'Preferred Certification Level is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to first error
      window.scrollTo({ top: 120, behavior: 'smooth' });
      return;
    }

    // Form is valid - set success state
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen text-slate-800 py-10 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <button
            onClick={() => setActivePage && setActivePage('programs')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2D6B] hover:text-[#C8A24A] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Programs & Certifications
          </button>
        </div>

        {/* Application Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
          
          {/* Header Card */}
          <div className="bg-[#0B2D6B] text-white p-8 sm:p-10 relative overflow-hidden flex items-center justify-between">
            <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none"></div>
            <div className="relative z-10 space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white/10 px-3.5 py-1.5 rounded-full border border-[#C8A24A]/30">
                <ShieldCheck size={14} /> Official Educator Certification
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
                Certification Application
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                Apply to become an ICA Certified Educator and join our global network of brain development trainers.
              </p>
            </div>

            {/* Crest Emblem Logo */}
            <div className="hidden sm:flex shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#16489C] to-[#0B2D6B] border border-[#C8A24A]/40 items-center justify-center shadow-lg relative z-10">
              <div className="text-center">
                <div className="font-serif font-extrabold text-xl text-[#C8A24A] leading-none">ICA</div>
                <div className="text-[8px] font-bold text-white uppercase tracking-tighter mt-0.5">Certified</div>
              </div>
            </div>
          </div>

          {/* Form / Success State */}
          <div className="p-6 sm:p-10">
            {isSubmitted ? (
              /* SUCCESS STATE */
              <div className="text-center py-10 space-y-6 animate-fadeIn">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                  <CheckCircle2 size={44} />
                </div>
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2D6B]">
                    Application Received Successfully
                  </h2>
                  <p className="text-slate-600 text-sm max-w-md mx-auto font-light leading-relaxed">
                    Thank you for your interest in becoming an ICA Certified Educator. Our certification team will review your application details and contact you with the next steps.
                  </p>
                </div>

                <div className="bg-[#F8F9FB] rounded-2xl p-6 border border-slate-200 text-left max-w-lg mx-auto space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C8A24A]">Application Summary</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div><span className="text-slate-400">Applicant:</span> <strong className="text-slate-800">{formData.fullName}</strong></div>
                    <div><span className="text-slate-400">Level:</span> <strong className="text-[#0B2D6B]">{formData.preferredLevel}</strong></div>
                    <div><span className="text-slate-400">Email:</span> <strong className="text-slate-800">{formData.email}</strong></div>
                    <div><span className="text-slate-400">Country:</span> <strong className="text-slate-800">{formData.country}</strong></div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setActivePage && setActivePage('home')}
                    className="px-8 py-3.5 rounded-full bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071d47] transition-all shadow-md"
                  >
                    BACK TO HOME
                  </button>
                </div>
              </div>
            ) : (
              /* CERTIFICATION APPLICATION FORM */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                          errors.fullName ? 'border-red-400 bg-red-50/30 focus:border-red-500' : 'border-slate-200 focus:border-[#0B2D6B]'
                        }`}
                      />
                    </div>
                    {errors.fullName && <p className="text-red-500 text-xs font-medium flex items-center gap-1"><AlertCircle size={12} /> {errors.fullName}</p>}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                          errors.email ? 'border-red-400 bg-red-50/30 focus:border-red-500' : 'border-slate-200 focus:border-[#0B2D6B]'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs font-medium flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                          errors.phone ? 'border-red-400 bg-red-50/30 focus:border-red-500' : 'border-slate-200 focus:border-[#0B2D6B]'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs font-medium flex items-center gap-1"><AlertCircle size={12} /> {errors.phone}</p>}
                  </div>

                  {/* Country / Region */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Country / Region <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Globe size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Select your country"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                          errors.country ? 'border-red-400 bg-red-50/30 focus:border-red-500' : 'border-slate-200 focus:border-[#0B2D6B]'
                        }`}
                      />
                    </div>
                    {errors.country && <p className="text-red-500 text-xs font-medium flex items-center gap-1"><AlertCircle size={12} /> {errors.country}</p>}
                  </div>
                </div>

                {/* Current Qualification / Experience */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Current Qualification / Experience
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="Enter your qualification or experience (e.g. B.Ed, STEM Educator, Math Teacher)"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0B2D6B] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Preferred Certification Level */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Preferred Certification Level <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="preferredLevel"
                      value={formData.preferredLevel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:border-[#0B2D6B] focus:outline-none transition-colors"
                    >
                      <option value="Certified Trainer">Certified Trainer</option>
                      <option value="Senior Trainer">Senior Trainer</option>
                      <option value="Master Trainer">Master Trainer</option>
                      <option value="International Trainer">International Trainer</option>
                    </select>
                  </div>

                  {/* Preferred Training Program */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Preferred Training Program
                    </label>
                    <select
                      name="preferredProgram"
                      value={formData.preferredProgram}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:border-[#0B2D6B] focus:outline-none transition-colors"
                    >
                      <option value="Foundation & Beginner Program">Foundation & Beginner Program</option>
                      <option value="Intermediate & Advanced Program">Intermediate & Advanced Program</option>
                      <option value="Master & International Trainer Program">Master & International Trainer Program</option>
                    </select>
                  </div>
                </div>

                {/* Previous ICA Training Experience */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Previous ICA Training Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:border-[#0B2D6B] focus:outline-none transition-colors"
                  >
                    <option value="None (Beginner Educator)">None (Beginner Educator)</option>
                    <option value="Completed ICA Foundation Program">Completed ICA Foundation Program</option>
                    <option value="Completed ICA Beginner/Intermediate Level">Completed ICA Beginner/Intermediate Level</option>
                    <option value="Existing Certified Educator">Existing Certified Educator</option>
                  </select>
                </div>

                {/* Message / Additional Information */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Message / Additional Information
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter any additional information, teaching background or questions"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0B2D6B] focus:outline-none transition-colors resize-y"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#C8A24A] hover:bg-[#b89035] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <span>SUBMIT APPLICATION</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
