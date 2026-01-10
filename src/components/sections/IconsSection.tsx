export default function IconsSection() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Quote Icon */}
          <div className="p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M14.017 21v-7.391c0-1.188.09-2.344.273-3.468.184-1.125.461-2.172.832-3.142C15.493 6.029 16 5.142 16.5 4.375c.5-.766 1.094-1.359 1.781-1.78C19.969 1.573 21 1.875 21 2.781v2.812L20.031 8.5c-.219.469-.453.969-.703 1.5-.25.531-.484 1.125-.703 1.781-.219.656-.383 1.5-.492 2.531C18.023 15.344 18 16.438 18 17.75V21h-3.984v.001zM3.984 21v-7.391c0-1.188.094-2.344.281-3.468.188-1.125.469-2.172.844-3.142.375-.969.875-1.828 1.5-2.578.625-.75 1.359-1.344 2.203-1.781C10.656 1.573 11.781 1.875 12 2.781v2.812L11.047 8.5c-.234.469-.469.969-.703 1.5-.234.531-.469 1.125-.703 1.781-.234.656-.406 1.5-.516 2.531C9.016 15.344 8.984 16.438 8.984 17.75V21H3.984z" fill="currentColor"/>
            </svg>
          </div>

          {/* Heart Icon */}
          <div className="p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
            </svg>
          </div>

          {/* At Symbol */}
          <div className="p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
              <circle cx="12" cy="12" r="4" fill="currentColor"/>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>

          {/* Eye Icon */}
          <div className="p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          {/* Chart Icon */}
          <div className="p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="m19 9-5 5-4-4-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>

          {/* Star Icon */}
          <div className="p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}