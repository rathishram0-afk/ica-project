import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { prefersReducedMotion } from '../lib/motion';

/**
 * ParticleField — floating gold shimmer particles on dark backgrounds.
 * Lightweight canvas-free approach using CSS + Anime.js.
 */
export default function ParticleField({ count = 25, className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Drifting particles carry no information — reduced motion drops them.
    if (prefersReducedMotion()) return;

    // Clear existing particles
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
        will-change: transform, opacity;
      `;
      container.appendChild(particle);
      particles.push(particle);
    }

    // Animate each particle in a floating loop
    particles.forEach((p) => {
      anime({
        targets: p,
        translateY: () => [
          anime.random(-20, 20),
          anime.random(-40, 40),
        ],
        translateX: () => [
          anime.random(-15, 15),
          anime.random(-30, 30),
        ],
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
    });

    return () => {
      particles.forEach(p => {
        anime.remove(p);
      });
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
