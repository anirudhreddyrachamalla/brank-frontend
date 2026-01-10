export default function AIExposureSection() {
  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Main headline */}
        <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-4">
          Brank helps you understand your{' '}
          <span className="text-teal-400 italic">AI exposure.</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-16">
          Across ChatGPT, Gemini, Grok, and more.
        </p>
        
        {/* Platform Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Perplexity */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-light italic">⊥</span>
            </div>
            <span className="text-gray-400 text-sm">Perplexity</span>
          </div>

          {/* ChatGPT */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-gray-400 text-sm">ChatGPT</span>
          </div>

          {/* ChatGPT (duplicate) */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-gray-400 text-sm">ChatGPT</span>
          </div>

          {/* ChatGPT (duplicate) */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-gray-400 text-sm">ChatGPT</span>
          </div>

          {/* Grok */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <span className="text-gray-400 text-sm">Grok</span>
          </div>

          {/* Gemini */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="currentColor" strokeWidth="2" fill="none"/>
                <polygon points="12,7 18,10.5 18,13.5 12,17 6,13.5 6,10.5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <span className="text-gray-400 text-sm">Gemini</span>
          </div>
        </div>
      </div>
    </section>
  );
}