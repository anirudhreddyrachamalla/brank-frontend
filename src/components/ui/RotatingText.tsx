'use client';

import { useState, useEffect } from 'react';

interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
  className?: string;
}

export default function RotatingText({ 
  texts, 
  rotationInterval = 2500,
  className = ''
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 300); // Half of the animation duration for smooth transition
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <span className="relative inline-flex items-center justify-center overflow-hidden px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 bg-black rounded-lg w-[140px] sm:w-[180px] md:w-[280px] lg:w-[320px]">
        <span 
          className={`block text-white font-normal transition-all duration-300 ease-in-out ${
            isAnimating ? 'animate-slideUpOut' : 'animate-slideUpIn'
          }`}
          key={currentIndex}
        >
          {texts[currentIndex]}
        </span>
      </span>
    </span>
  );
}

