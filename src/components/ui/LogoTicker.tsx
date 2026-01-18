'use client';

import Image from 'next/image';

const logos = [
  { name: 'Asics', src: '/images/brand-logos/Asics.svg' },
  { name: 'Coinbase', src: '/images/brand-logos/Coinbase.svg' },
  { name: 'Cult', src: '/images/brand-logos/Cult.svg' },
  { name: 'Decathlon', src: '/images/brand-logos/Decathlon.svg' },
  { name: 'LeetCode', src: '/images/brand-logos/LeetCode.svg' },
  { name: 'Nothing', src: '/images/brand-logos/Nothing.svg' },
  { name: 'Zerodha', src: '/images/brand-logos/Zerodha.svg' },
];

export default function LogoTicker() {
  return (
    <div className="w-full relative overflow-hidden group">
      {/* Gradient Masks for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

      <div className="flex w-fit animate-marquee hover:animate-pause gap-12 sm:gap-24">
        {[
          ...logos, ...logos, ...logos, ...logos,
          ...logos, ...logos, ...logos, ...logos,
          ...logos, ...logos, ...logos, ...logos
        ].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="relative h-12 sm:h-16 md:h-20 w-auto aspect-[3/2] flex items-center justify-center shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={200}
              height={80}
              className="object-contain h-full w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
