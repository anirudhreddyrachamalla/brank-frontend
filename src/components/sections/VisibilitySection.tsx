export default function VisibilitySection() {
  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main headline */}
        <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-4">
          Learn what you can do for{' '}
          <span className="text-teal-400 italic">your brand's visibility.</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-16">
          By improving different metrics
        </p>
        
        {/* Citations Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
          {/* Quote Icon */}
          <div className="flex items-center justify-center">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-white/20">
              <path d="M14.017 21v-7.391c0-1.188.09-2.344.273-3.468.184-1.125.461-2.172.832-3.142C15.493 6.029 16 5.142 16.5 4.375c.5-.766 1.094-1.359 1.781-1.78C19.969 1.573 21 1.875 21 2.781v2.812L20.031 8.5c-.219.469-.453.969-.703 1.5-.25.531-.484 1.125-.703 1.781-.219.656-.383 1.5-.492 2.531C18.023 15.344 18 16.438 18 17.75V21h-3.984v.001zM3.984 21v-7.391c0-1.188.094-2.344.281-3.468.188-1.125.469-2.172.844-3.142.375-.969.875-1.828 1.5-2.578.625-.75 1.359-1.344 2.203-1.781C10.656 1.573 11.781 1.875 12 2.781v2.812L11.047 8.5c-.234.469-.469.969-.703 1.5-.234.531-.469 1.125-.703 1.781-.234.656-.406 1.5-.516 2.531C9.016 15.344 8.984 16.438 8.984 17.75V21H3.984z" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Citations Text */}
          <div className="text-left">
            <h3 className="text-white text-3xl font-light mb-4">Citations</h3>
            <p className="text-gray-400 text-lg max-w-md">
              Some copy to come here talking about the metrics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}