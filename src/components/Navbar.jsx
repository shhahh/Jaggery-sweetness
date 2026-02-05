import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Learning: useEffect for scroll tracking (Job interview tip!)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 px-6 md:px-12 py-4 ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left: Nav Links (Hidden on mobile) */}
        <div className="hidden md:flex space-x-10 text-[11px] uppercase tracking-[0.3em] font-medium text-brand-dark/80">
          <a href="#" className="hover:text-brand-accent transition-colors duration-300">The Heritage</a>
          <a href="#" className="hover:text-brand-accent transition-colors duration-300">Collections</a>
        </div>

        {/* Center: Logo */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-serif tracking-[0.15em] text-brand-dark font-bold">
            NECTAR <span className="text-brand-gold italic font-light">EARTH</span>
          </h1>
          <p className="text-[8px] uppercase tracking-[0.5em] text-brand-accent mt-[-4px]">Shane raza</p>
        </div>

        {/* Right: Icons & Action */}
        <div className="flex items-center space-x-6 text-brand-dark">
          <Search size={20} strokeWidth={1.5} className="cursor-pointer hover:text-brand-accent transition-all" />
          <div className="relative cursor-pointer group">
            <ShoppingBag size={20} strokeWidth={1.5} className="group-hover:text-brand-accent transition-all" />
            <span className="absolute -top-2 -right-2 bg-brand-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
          <button className="hidden md:block border border-brand-dark/20 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all duration-500">
            Book a Tasting
          </button>
          <Menu className="md:hidden cursor-pointer" />
        </div>
      </div>
    </nav>

    
  );
};

export default Navbar;