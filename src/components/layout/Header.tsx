export default function Header() {
  return (
    <header className="w-full bg-black px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 flex items-center justify-center">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-white"
            >
              <path 
                d="M5 13l4 4L19 7" 
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-white text-lg font-medium">
            Brank.Ai
          </span>
        </div>
        
        <div>
          <button className="px-6 py-2 bg-white text-black rounded text-sm font-medium hover:bg-gray-100 transition-colors">
            Join Waitlist
          </button>
        </div>
      </div>
    </header>
  );
}