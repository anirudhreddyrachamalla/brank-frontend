import React from 'react';
import Image from 'next/image';
import { CitationCardProps } from '@/types';
import { cn } from '@/lib/utils';

const CitationCard: React.FC<CitationCardProps> = ({ llm, className }) => {
  return (
    <div
      className={cn(
        'bg-[#2F2F2F33] border border-gray-800 p-6',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Image
            src={llm.icon}
            alt={llm.name}
            width={24}
            height={24}
            className="object-contain"
          />
          <h4 className="text-white text-lg font-medium">{llm.name}</h4>
        </div>
        <span className="text-white text-xl font-bold">{llm.total}</span>
      </div>

      {/* Subtitle */}
      <p className="text-gray-500 text-xs mb-4">{llm.subtitle}</p>

      {/* Sources */}
      <div className="space-y-2">
        {llm.sources.map((source, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <span className="text-gray-300 text-sm">{source.url}</span>
            </div>
            <span className="text-gray-400 text-sm">{source.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { CitationCard };

