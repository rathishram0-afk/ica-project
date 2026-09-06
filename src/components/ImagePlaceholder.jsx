import React from 'react';
import { Image, ShieldCheck } from 'lucide-react';

export default function ImagePlaceholder({ 
  label = "Image Placeholder", 
  subtext = "[ Client Media Drop Zone ]",
  aspectRatio = "16:9", 
  height = "h-48",
  className = "" 
}) {
  let aspectClass = "aspect-video";
  if (aspectRatio === "1:1") aspectClass = "aspect-square";
  if (aspectRatio === "4:3") aspectClass = "aspect-[4/3]";
  if (aspectRatio === "3:4") aspectClass = "aspect-[3/4]";
  if (aspectRatio === "banner") aspectClass = "aspect-[21/9]";
  if (aspectRatio === "custom") aspectClass = "";

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-[#F8F9FB] to-slate-100/70 p-4 flex flex-col items-center justify-center text-center shadow-sm group hover:border-[#C8A24A]/60 hover:shadow-md transition-all duration-300 ${aspectClass} ${height} ${className}`}>
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#0B2E6B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      {/* Subtle Gold Orbit Accent inside placeholder */}
      <div className="absolute -top-12 -right-12 w-28 h-28 border border-[#C8A24A]/20 rounded-full pointer-events-none"></div>

      {/* Inner Placeholder Card */}
      <div className="relative z-10 flex flex-col items-center justify-center p-3.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm max-w-[92%] transition-transform group-hover:scale-[1.02]">
        <div className="w-10 h-10 rounded-xl bg-[#0B2E6B]/10 text-[#0B2E6B] flex items-center justify-center mb-2 group-hover:bg-[#C8A24A]/20 group-hover:text-[#9E7B2B] transition-colors shadow-inner">
          <Image className="w-5 h-5" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E6B] mb-0.5">
          {label}
        </span>
        <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
          <ShieldCheck size={11} className="text-[#C8A24A]" />
          {subtext}
        </span>
      </div>

      {/* Corner Bracket Styling for Premium Agency Feel */}
      <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C8A24A]/50 rounded-tl-xs pointer-events-none" />
      <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C8A24A]/50 rounded-tr-xs pointer-events-none" />
      <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C8A24A]/50 rounded-bl-xs pointer-events-none" />
      <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C8A24A]/50 rounded-br-xs pointer-events-none" />
    </div>
  );
}
