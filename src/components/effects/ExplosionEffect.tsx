
import React, { useState, useRef } from 'react';

interface ExplosionEffectProps {
  children: React.ReactNode;
}

const ExplosionEffect: React.FC<ExplosionEffectProps> = ({ children }) => {
  const [explosions, setExplosions] = useState<{ id: number; x: number; y: number }[]>([]);
  const nextIdRef = useRef(0);
  
  const handleClick = (e: React.MouseEvent) => {
    // Get position relative to the clicked element
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create a new explosion
    const newExplosion = {
      id: nextIdRef.current++,
      x,
      y
    };
    
    setExplosions(prev => [...prev, newExplosion]);
    
    // Remove the explosion after animation ends
    setTimeout(() => {
      setExplosions(prev => prev.filter(explosion => explosion.id !== newExplosion.id));
    }, 500);
  };
  
  return (
    <div className="relative" onClick={handleClick}>
      {explosions.map(explosion => (
        <div
          key={explosion.id}
          className="absolute rounded-full bg-gradient-to-r from-astro-purple to-astro-blue animate-explosion"
          style={{
            left: explosion.x,
            top: explosion.y,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
      {children}
    </div>
  );
};

export default ExplosionEffect;
