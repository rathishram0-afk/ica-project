import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';

    const tl = anime.timeline({
      easing: 'easeOutExpo',
    });

    // 1. Initial fade in of logo
    tl.add({
      targets: logoRef.current,
      opacity: [0, 1],
      scale: [0.8, 1],
      rotate: [-15, 0],
      duration: 1000,
    })
    // 2. Text fade up
    .add({
      targets: textRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    }, '-=600')
    // 3. Hold for a moment, then slide everything up
    .add({
      targets: [logoRef.current, textRef.current],
      opacity: [1, 0],
      translateY: [0, -30],
      duration: 600,
      delay: 400,
      easing: 'easeInExpo',
    })
    // 4. Slide out background curtain
    .add({
      targets: containerRef.current,
      translateY: '-100%',
      duration: 800,
      easing: 'easeInOutCubic',
      complete: () => {
        document.body.style.overflow = 'unset';
        if (onComplete) onComplete();
      }
    }, '-=200');

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05183B] text-white"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,162,74,0.1)_0%,transparent_50%)] animate-pulseGold pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Custom Logo Cube */}
        <div 
          ref={logoRef} 
          className="w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-gradient-to-br from-[#C8A24A] to-[#9E7B2B] rounded-xl shadow-[0_0_40px_rgba(200,162,74,0.4)] flex items-center justify-center border-2 border-white/20"
          style={{ opacity: 0 }}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white/80 rounded-md animate-spin-slow"></div>
        </div>

        {/* Brand Text */}
        <div ref={textRef} className="text-center" style={{ opacity: 0 }}>
          <h1 className="font-serif font-extrabold text-2xl sm:text-3xl tracking-wide">
            ICA
          </h1>
          <p className="text-[10px] sm:text-xs text-[#C8A24A] font-bold uppercase tracking-[0.3em] mt-2">
            Global Knowledge
          </p>
        </div>
      </div>
    </div>
  );
}
