import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext'; // Cart ka data use karne ke liye
import SearchOverlay from './SearchOverlay';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // 1. Sabse pehle Context se do cheezein nikalenge
  // getCartCount: Kitne items hain (e.g. 1, 2, 3)
  // setIsCartOpen: Cart ko kholne ya band karne ka switch
  const { getCartCount, setIsCartOpen } = useCart(); 
  
  const [isScrolled, setIsScrolled] = useState(false);

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
        
        {/* Left Links */}
        <div className="hidden md:flex space-x-10 text-[11px] uppercase tracking-[0.3em] font-medium text-brand-dark/80">
          <a href="#" className="hover:text-brand-accent transition-colors duration-300">The Heritage</a>
          <a href="#" className="hover:text-brand-accent transition-colors duration-300">Collections</a>
        </div>

        {/* Center: Logo */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-serif tracking-[0.15em] text-brand-dark font-bold uppercase">
            NECTAR <span className="text-brand-gold italic font-light">EARTH</span>
          </h1>
          <p className="text-[8px] uppercase tracking-[0.5em] text-brand-accent mt-[-4px]">Shane Raza</p>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6 text-brand-dark">
          <Search size={20} strokeWidth={1.5} className="cursor-pointer hover:text-brand-accent transition-all" onClick={() => setIsSearchOpen(true)} />
          
          {/* 2. YE HAI MAIN SECTION: Ek hi Shopping Bag icon rakhenge */}
          {/* onClick lagane se Sidebar khul jayega */}
          <div 
            onClick={() => setIsCartOpen(true)} 
            className="relative cursor-pointer group"
          >
            <ShoppingBag size={20} strokeWidth={1.5} className="group-hover:text-brand-accent transition-all" />
            
            {/* 3. Agar cart mein item hai (> 0), tabhi ye gol wala count dikhao */}
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                {getCartCount()}
              </span>
            )}
          </div>

          <button className="hidden md:block border border-brand-dark/20 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all duration-500">
            Book a Tasting
          </button>
          <Menu className="md:hidden cursor-pointer" />
        </div>
      </div>
      <SearchOverlay isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
    </nav>
  );
};

export default Navbar;