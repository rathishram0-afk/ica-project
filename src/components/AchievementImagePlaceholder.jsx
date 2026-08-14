import React from 'react';
import { Image } from 'lucide-react';

export default function AchievementImagePlaceholder({ 
  title = "Student Achievement Image", 
  description = "Add official photograph",
  className = "h-64 sm:h-72"
}) {
  return (
    <div className={`w-full rounded-2xl bg-[#F8F9FB] border-2 border-dashed border-slate-300/80 flex flex-col items-center justify-center p-6 text-center shadow-xs transition-all hover:border-[#C8A24A]/70 group ${className}`}>
      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-[#0B2D6B] flex items-center justify-center mb-3 shadow-xs group-hover:bg-[#0B2D6B] group-hover:text-[#C8A24A] transition-colors">
        <Image size={26} />
      </div>
      <div className="font-serif font-bold text-xs sm:text-sm text-[#0B2D6B] tracking-tight">
        {title}
      </div>
      <div className="text-[11px] text-slate-400 font-light mt-1">
        {description}
      </div>
    </div>
  );
}
