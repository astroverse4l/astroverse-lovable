
import React, { useEffect, useRef } from 'react';

interface ParallaxEffectProps {
  children: React.ReactNode;
  speed?: number;
}

const ParallaxEffect: React.FC<ParallaxEffectProps> = ({ children, speed = 0.5 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollPosition = window.scrollY;
      const translateY = scrollPosition * speed;
      
      ref.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className="parallax-layer">
      {children}
    </div>
  );
};

export default ParallaxEffect;
