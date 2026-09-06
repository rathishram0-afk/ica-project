import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import useAssetPreloader from '../hooks/useAssetPreloader';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * Block on the logo alone — it is the only image on the first screen. The
 * hero itself is a WebGL canvas, and everything else lives further down or on
 * another page, so waiting on it just held the site shut with nothing to show
 * for it.
 */
const CRITICAL_ASSETS = ['/images/logo/ica-logo.png'];

/** Fetched in the background after handover; nothing waits on these. */
const WARM_ASSETS = [
  '/images/events/world-map.png',
  '/images/hero/ica-about-cube.png',
  '/images/founder/dr-r-chandrika.png',
  '/images/achievements/guinness-world-record-students.jpg',
];

function warmSecondaryAssets() {
  WARM_ASSETS.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);
  const hasExited = useRef(false);
  const reduced = useReducedMotion();

  const { progress, done } = useAssetPreloader(CRITICAL_ASSETS, {
    minDuration: 500,
    timeout: 4000,
  });

  // Entrance — logo, then wordmark. Runs once.
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Reduced motion: the mark and wordmark are rendered at opacity 0 for the
    // entrance, so they must be revealed explicitly rather than left hidden.
    if (reduced) {
      anime.set([logoRef.current, textRef.current], { opacity: 1, translateY: 0, scale: 1 });
      return () => {
        document.body.style.overflow = 'unset';
      };
    }

    anime
      .timeline({ easing: 'easeOutExpo' })
      .add({
        targets: logoRef.current,
        opacity: [0, 1],
        scale: [0.9, 1],
        translateY: [10, 0],
        duration: 420,
      })
      .add(
        {
          targets: textRef.current,
          opacity: [0, 1],
          translateY: [12, 0],
          duration: 320,
        },
        '-=240'
      );

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [reduced]);

  // Exit — fires once every asset has settled. A short beat first so the
  // filled bar and 100% are actually seen rather than flashing past.
  useEffect(() => {
    if (!done || hasExited.current) return;
    hasExited.current = true;

    // The curtain is dismissed by an anime.js `complete` callback, which
    // rides on requestAnimationFrame. Browsers throttle or suspend rAF in a
    // backgrounded tab, so without this the site could stay hidden behind a
    // finished preloader indefinitely. Whatever happens, release the page.
    const failsafe = setTimeout(() => {
      document.body.style.overflow = 'unset';
      if (onComplete) onComplete();
    }, 1400);
    const release = () => clearTimeout(failsafe);

    // Reduced motion: hold briefly so the finished bar registers, then hand
    // over without the curtain sliding anywhere.
    if (reduced) {
      const handover = setTimeout(() => {
        release();
        warmSecondaryAssets();
        document.body.style.overflow = 'unset';
        if (onComplete) onComplete();
      }, 200);
      return () => {
        release();
        clearTimeout(handover);
      };
    }

    anime
      .timeline({ easing: 'easeInExpo', delay: 80 })
      .add({
        targets: [logoRef.current, textRef.current, barRef.current],
        opacity: [1, 0],
        translateY: [0, -20],
        duration: 220,
        delay: anime.stagger(40, { direction: 'reverse' }),
      })
      .add(
        {
          targets: containerRef.current,
          translateY: '-100%',
          duration: 380,
          easing: 'easeInOutCubic',
          // The page underneath is ready the moment the curtain starts moving,
          // so warm the remaining images now rather than after it lands.
          begin: warmSecondaryAssets,
          complete: () => {
            release();
            document.body.style.overflow = 'unset';
            if (onComplete) onComplete();
          },
        },
        '-=120'
      );

    return release;
  }, [done, reduced, onComplete]);

  return (
    <div
      ref={containerRef}
      role="status"
      aria-live="polite"
      aria-label={`Loading International Cube Academy, ${progress} percent`}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-white via-white to-[#F8F9FB]"
    >
      {/* Soft gold halo behind the mark */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,162,74,0.13)_0%,transparent_58%)] pointer-events-none" />
      {/* Faint brand dot grid */}
      <div className="absolute inset-0 opacity-[0.55] world-map-bg pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Real ICA logo — the PNG ships on a white ground, which is why this
            screen is light rather than navy. */}
        <img
          ref={logoRef}
          src="/images/logo/ica-logo.png"
          alt="International Cube Academy"
          className="w-32 h-32 sm:w-40 sm:h-40 object-contain select-none drop-shadow-[0_12px_30px_rgba(11,45,107,0.12)]"
          style={{ opacity: reduced ? 1 : 0 }}
        />

        <div ref={textRef} className="text-center mt-4" style={{ opacity: reduced ? 1 : 0 }}>
          <p className="text-[10px] sm:text-[11px] text-[#0B2D6B] font-extrabold uppercase tracking-[0.32em]">
            International Cube Academy
          </p>
          <p className="text-[10px] sm:text-[11px] text-[#C8A24A] font-semibold tracking-[0.16em] mt-1.5">
            Connecting Cubers Worldwide
          </p>
        </div>

        {/* Progress — reflects real asset loading */}
        <div ref={barRef} className="mt-9 w-56 sm:w-64">
          <div className="h-[3px] w-full rounded-full bg-[#0B2D6B]/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#C8A24A] via-[#D4AF37] to-[#9E7B2B] transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-2.5">
            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400">
              Loading
            </span>
            <span className="text-[10px] font-bold tabular-nums text-[#0B2D6B]">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
