'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LLMItem {
  name: string;
  logo: string;
}

interface RotatingTextProps {
  items: LLMItem[];
  rotationInterval?: number;
  className?: string;
}

export default function RotatingText({
  items,
  rotationInterval = 2500,
  className = ''
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setIsAnimating(false);
      }, 300);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [items.length, rotationInterval]);

  const currentItem = items[currentIndex];

  if (!currentItem) {
    return null;
  }

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Render all items, only current one visible */}
      {items.map((item, index) => (
        <span
          key={item.name}
          className={`inline-flex items-center gap-1.5 sm:gap-2 bg-[#e8e8e8] rounded-lg px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 transition-opacity duration-300 ${
            index === currentIndex
              ? (isAnimating ? 'opacity-0' : 'opacity-100')
              : 'absolute left-0 top-0 opacity-0 pointer-events-none'
          }`}
          style={{
            visibility: index === currentIndex ? 'visible' : 'hidden'
          }}
        >
          <span className="text-black font-normal whitespace-nowrap">
            {item.name}
          </span>
          <Image
            src={item.logo}
            alt={`${item.name} logo`}
            width={24}
            height={24}
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 shrink-0 object-contain invert"
          />
        </span>
      ))}
    </span>
  );
}

