'use client';

import { useState } from 'react';
import Image from 'next/image';

const metrics = [
  {
    name: 'Mention Rate',
    description: 'See how often leading LLMs mention your brand in their responses.',
    improvement: 'Brank automatically publishes high-signal content and structured knowledge that LLMs are most likely to ingest, increasing brand mentions over time.',
    icon: '/images/Metrics/mention_rate.svg'
  },
  {
    name: 'Citations',
    description: 'Discover which sources LLMs rely on when generating answers in your category.',
    improvement: 'Brank identifies citation gaps and guides your brand to publish and distribute content in sources LLMs frequently reference.',
    icon: '/images/Metrics/citations.svg'
  },
  {
    name: 'Sentiment',
    description: 'Understand whether LLMs perceive your brand positively, neutrally, or negatively.',
    improvement: 'Brank analyzes sentiment drivers and recommends content and messaging changes that improve how LLMs describe your brand.',
    icon: '/images/Metrics/sentiment.svg'
  },
  {
    name: 'Rank',
    description: 'Track where your brand appears in LLM-generated recommendations.',
    improvement: 'Brank\'s AI agents continuously optimize your brand\'s authority signals to move you higher in LLM rankings.',
    icon: '/images/Metrics/rank.svg'
  },
  {
    name: 'LLM Redirects',
    description: 'See how many users reach your website through LLM-generated answers.',
    improvement: 'Brank increases LLM-driven traffic by ensuring your brand is the recommended destination in AI answers—through stronger citations, higher ranking, clearer brand attribution, and linkable reference content that LLMs are more likely to surface.',
    icon: '/images/Metrics/llm_redirects.svg'
  },
  {
    name: 'LLM Crawls',
    description: 'Monitor how frequently AI bots crawl your website over the last 7 days.',
    improvement: 'Brank improves crawlability through structured content, freshness signals, and AI-friendly publishing workflows.',
    icon: '/images/Metrics/llm_talk_score.svg'
  }
];

export default function VisibilitySection() {
  const [activeMetric, setActiveMetric] = useState(0);

  const handleLoaderComplete = () => {
    setActiveMetric((prev) => (prev + 1) % metrics.length);
  };

  const renderIcon = (size: number = 120) => {
    const currentMetric = metrics[activeMetric];
    if (!currentMetric) return null;
    
    return (
      <Image
        src={currentMetric.icon}
        alt={currentMetric.name}
        width={size}
        height={size}
        className="object-contain"
      />
    );
  };

  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main headline */}
        <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-4 text-center">
          Learn what you can do for{' '}
          <span className="bg-gradient-to-r from-[#00FFBB] to-[#00B7FF] bg-clip-text text-transparent italic">your brand's visibility.</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-16 text-center">
          By improving different metrics
        </p>
        
        {/* Citations Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-8 mb-20 max-w-6xl mx-auto">
          {/* Quote Icon Box */}
          <div className="flex-shrink-0">
            <div className="relative w-72 h-48 border border-gray-700 flex items-center justify-center">
              {/* Corner dots */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-white"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white"></div>
              
              {renderIcon(120)}
            </div>
          </div>
          
          {/* Metric Text */}
          <div className="text-left flex-1">
            <h3 className="text-white text-3xl font-light mb-4 transition-opacity duration-300">
              {metrics[activeMetric]?.name}
            </h3>
            <p className="text-gray-400 text-base mb-6 transition-opacity duration-300">
              {metrics[activeMetric]?.description}
            </p>
            
            <h4 className="text-white text-base font-bold mb-3 transition-opacity duration-300">
              How <span className="bg-gradient-to-r from-[#00FFBB] to-[#00B7FF] bg-clip-text text-transparent">Brank</span> improves this:
            </h4>
            <p className="text-gray-400 text-base transition-opacity duration-300">
              {metrics[activeMetric]?.improvement}
            </p>
          </div>
        </div>

        {/* Icons Grid */}
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className={`relative w-24 h-24 border flex items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden ${
                activeMetric === index ? 'border-white' : 'border-gray-700 hover:border-gray-500'
              }`}
              onClick={() => setActiveMetric(index)}
            >
              <Image
                src={metric.icon}
                alt={metric.name}
                width={40}
                height={40}
                className="object-contain"
              />
              
              {/* Loader bar */}
              {activeMetric === index && (
                <div 
                  key={`loader-${index}`}
                  className="absolute bottom-0 left-0 h-1 bg-white w-full origin-left animate-loader"
                  onAnimationEnd={handleLoaderComplete}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}