
import React, { useEffect, useRef } from 'react';

interface StarFieldProps {
  starCount?: number;
}

const StarField: React.FC<StarFieldProps> = ({ starCount = 200 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    // Clear any existing stars
    container.innerHTML = '';
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Randomize position
      const x = `${Math.random() * 100}%`;
      const y = `${Math.random() * 100}%`;
      star.style.left = x;
      star.style.top = y;
      
      // Randomize size
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Randomize opacity and animation
      const opacity = Math.random() * 0.8 + 0.2;
      star.style.setProperty('--opacity', opacity.toString());
      
      const duration = `${Math.random() * 5 + 2}s`;
      star.style.setProperty('--duration', duration);
      
      // Add z-index for 3D effect
      const zIndex = Math.floor(Math.random() * 3);
      star.style.zIndex = zIndex.toString();
      
      // Add to container
      container.appendChild(star);
    }
    
  }, [starCount]);

  return (
    <div ref={containerRef} className="star-field" />
  );
};

export default StarField;
