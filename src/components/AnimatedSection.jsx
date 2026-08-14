import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

/**
 * AnimatedSection — reusable wrapper that applies scroll-reveal animation.
 *
 * @param {string} animation - 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'fadeDown' | 'scaleIn' | 'stagger'
 * @param {number} delay - Base delay in ms
 * @param {number} duration - Animation duration in ms
 * @param {number} staggerDelay - Stagger between children
 * @param {string} className - Additional classNames
 * @param {string} as - HTML element type (default 'div')
 */
export default function AnimatedSection({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 800,
  staggerDelay = 80,
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
  ...props
}) {
  const ref = useScrollReveal({
    animation,
    delay,
    duration,
    staggerDelay,
    threshold,
  });

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}
