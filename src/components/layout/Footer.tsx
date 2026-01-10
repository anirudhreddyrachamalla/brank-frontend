export default function Footer() {
  return (
    <footer className="w-full bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-8">
            If AI doesn't{' '}
            <span className="text-teal-400 italic">surface</span>
          </h2>
          <h2 className="text-teal-400 italic text-4xl md:text-5xl font-light leading-tight mb-8">
            your brand,{' '}
          </h2>
          <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-12">
            consumers won't either.
          </h2>
          
          {/* Email Signup */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex-1 bg-gray-900 text-white placeholder-gray-400 px-4 py-3 rounded border border-gray-700 focus:outline-none focus:border-teal-400 w-full sm:w-auto"
            />
            <button className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
              Join Waitlist
            </button>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-8 text-sm">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 Brank Inc
          </div>
          
          <div className="flex items-center gap-8">
            {/* About */}
            <div>
              <h4 className="text-white font-medium mb-2">About</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brand Kit</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-white font-medium mb-2">Contact</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="text-white font-medium mb-2">Legal</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}