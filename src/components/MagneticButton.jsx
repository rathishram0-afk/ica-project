import React, { useRef, useEffect } from 'react';
import anime from 'animejs';

export default function MagneticButton({ children, className = '', onClick, as: Tag = 'button', ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // We only apply magnetic effect on desktop devices (hoverable)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const hx = rect.left + rect.width / 2;
      const hy = rect.top + rect.height / 2;
      
      // Calculate distance from center of button
      const dx = e.clientX - hx;
      const dy = e.clientY - hy;
      
      // Max pull distance
      const maxDistance = 60;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        // Pull strength - stronger closer to center
        const pull = (maxDistance - distance) / maxDistance;
        
        anime({
          targets: el,
          translateX: dx * pull * 0.4,
          translateY: dy * pull * 0.4,
          scale: 1.05,
          duration: 300,
          easing: 'easeOutQuint',
        });
      } else {
        resetPosition();
      }
    };

    const resetPosition = () => {
      anime({
        targets: el,
        translateX: 0,
        translateY: 0,
        scale: 1,
        duration: 400,
        easing: 'easeOutElastic(1, .5)',
      });
    };

    const handleMouseLeave = () => {
      resetPosition();
    };

    // Use window listener for move to catch cursor nearing the button
    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Tag 
      ref={ref} 
      className={`relative inline-flex items-center justify-center will-change-transform ${className}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </Tag>
  );
}
