
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass-effect shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center">
        {/* Left Section: Logo */}
        <div className="flex-1 flex items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">CloudSMS Pro</span>
          </div>
        </div>
        
        {/* Center Section: Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition-colors whitespace-nowrap">核心特性</a>
          <a href="#solutions" className="hover:text-blue-600 transition-colors whitespace-nowrap">解决方案</a>
          <a href="#dev" className="hover:text-blue-600 transition-colors whitespace-nowrap">开发者中心</a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors whitespace-nowrap">价格</a>
        </div>

        {/* Right Section: Spacer (Empty after removing buttons) */}
        <div className="flex-1 flex justify-end">
          {/* This empty div balances the logo on the left to keep the middle links centered */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
