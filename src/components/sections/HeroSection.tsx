export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-section-min.jpg')`
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Main Headline */}
        <div className="mb-8 max-w-4xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4">
            Measure and improve how
          </h1>
          <h1 className="text-teal-400 text-4xl md:text-5xl lg:text-6xl font-light italic leading-tight">
            AI recommends
          </h1>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            your brand.
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
          Track and improve how AI surfaces your brand.
        </p>

        {/* Search Bar */}
        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-1 w-full max-w-md mb-16">
          <input 
            type="text" 
            placeholder="What's your brand?" 
            className="flex-1 bg-transparent text-white placeholder-gray-300 px-4 py-3 focus:outline-none"
          />
          <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div>

        {/* Metrics */}
        <div className="flex items-center gap-8 text-white">
          <div className="text-center">
            <div className="text-sm text-gray-300">Mentions</div>
            <div className="text-2xl font-bold">78%</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-300">Citations</div>
            <div className="text-2xl font-bold">78%</div>
          </div>
        </div>

      </div>
    </section>
  );
}