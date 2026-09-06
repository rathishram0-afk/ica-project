import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { prefersReducedMotion } from '../lib/motion';

/**
 * ParticleField — floating gold shimmer particles on dark backgrounds.
 *
 * Three things keep this cheap, because it sits behind scrolling content:
 *
 * 1. No `will-change`. It was set on every particle, which pinned one
 *    compositor layer per dot — dozens of GPU layers held for the life of the
 *    page, for 2-5px specks. Letting the browser decide is measurably
 *    smoother; this was the single largest source of scroll jank on Home.
 * 2. One animation driving every particle, not one per particle. anime
 *    evaluates function-valued properties per target, so the variety is
 *    unchanged while the number of tickers drops from N to 1.
 * 3. It stops when nobody can see it — scrolled out of view, or tab hidden.
 */
export default function ParticleField({ count = 25, className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Drifting particles carry no information — reduced motion drops them.
    if (prefersReducedMotion()) return;

    container.innerHTML = '';

    const particles = [];
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 1.5;
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(200, 162, 74, ${0.3 + Math.random() * 0.5}), transparent);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
      `;
      container.appendChild(particle);
      particles.push(particle);
    }

    const animation = anime({
      targets: particles,
      translateY: () => [anime.random(-20, 20), anime.random(-40, 40)],
      translateX: () => [anime.random(-15, 15), anime.random(-30, 30)],
      opacity: [
        { value: () => 0.2 + Math.random() * 0.4, duration: () => anime.random(1500, 3000) },
        { value: () => 0.1 + Math.random() * 0.3, duration: () => anime.random(1500, 3000) },
      ],
      scale: [
        { value: () => 0.8 + Math.random() * 0.5, duration: () => anime.random(2000, 4000) },
        { value: () => 0.5 + Math.random() * 0.8, duration: () => anime.random(2000, 4000) },
      ],
      easing: 'easeInOutSine',
      duration: () => anime.random(4000, 8000),
      delay: () => anime.random(0, 3000),
      direction: 'alternate',
      loop: true,
    });

    // Only run while actually on screen.
    let onScreen = true;
    let pageVisible = !document.hidden;
    const sync = () => {
      if (onScreen && pageVisible) animation.play();
      else animation.pause();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      },
      { threshold: 0 }
    );
    observer.observe(container);

    const onVisibility = () => {
      pageVisible = !document.hidden;
      sync();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      anime.remove(particles);
      container.innerHTML = '';
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-[1] ${className}`}
      aria-hidden="true"
    />
  );
}
