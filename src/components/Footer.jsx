import React from 'react';
import { Instagram, Facebook, Twitter, ArrowUpRight, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-[100px] pb-[40px] px-6 md:px-12 lg:px-[80px]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] mb-[100px]">
          <div>
            <h2 className="text-[40px] md:text-[50px] font-serif leading-tight mb-8">
              Subscribe to the <br /> <span className="italic text-brand-gold">Nectar Circle</span>
            </h2>
            <div className="flex border-b border-white/20 pb-4 max-w-[450px] group focus-within:border-brand-gold transition-colors">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="bg-transparent border-none outline-none w-full text-[12px] tracking-[2px] uppercase placeholder:text-white/30"
              />
              <button className="text-brand-gold group-hover:translate-x-2 transition-transform duration-500">
                <ArrowUpRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:items-end justify-center">
             <div className="text-left lg:text-right">
                <h1 className="text-3xl md:text-5xl font-serif tracking-[0.15em] mb-2">
                  NECTAR <span className="text-brand-gold italic font-light">EARTH</span>
                </h1>
                <p className="text-[10px] uppercase tracking-[0.6em] text-brand-accent">Atelier of Sweetness</p>
             </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[40px] mb-[100px] border-t border-white/5 pt-[60px]">
          <div>
            <h4 className="text-[12px] uppercase tracking-[3px] text-brand-gold mb-8 font-bold">Heritage</h4>
            <ul className="space-y-4 text-[14px] text-white/60 font-light tracking-wide">
              <li className="hover:text-white transition-colors cursor-pointer">Our Story</li>
              <li className="hover:text-white transition-colors cursor-pointer">The Process</li>
              <li className="hover:text-white transition-colors cursor-pointer">Farmers</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] uppercase tracking-[3px] text-brand-gold mb-8 font-bold">Connect</h4>
            <ul className="space-y-4 text-[14px] text-white/60 font-light tracking-wide">
              <li className="hover:text-white transition-colors flex items-center gap-2">
                <Phone size={14} className="text-brand-gold" />
                <a href="tel:+918630628812">+91 8630628812</a>
              </li>
              <li className="hover:text-white transition-colors flex items-center gap-2">
                <Mail size={14} className="text-brand-gold" />
                <a href="mailto:shhahhraxa110@gmail.com">shhahhraxa110@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] uppercase tracking-[3px] text-brand-gold mb-8 font-bold">Atelier</h4>
            <p className="text-[14px] text-white/40 leading-relaxed font-light">
              Visit our GudStation:<br />
              Mirapur Bypass, <br />
              Muzaffarnagar, 251315 UP, INDIA
            </p>
          </div>
          <div>
            <h4 className="text-[12px] uppercase tracking-[3px] text-brand-gold mb-8 font-bold">Social</h4>
            <div className="flex space-x-6">
              <Instagram size={20} className="text-white/60 hover:text-brand-gold transition-colors cursor-pointer" />
               <Facebook size={20} className="text-white/60 hover:text-brand-gold transition-colors cursor-pointer" />

              <Twitter size={20} className="text-white/60 hover:text-brand-gold transition-colors cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Bar with Developer Credit */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-[10px] text-white/30 uppercase tracking-[2px]">
            &copy; 2026 Nectar Earth. Designed & Developed by <span className="text-brand-gold font-bold italic">Shah</span>
          </p>
          <div className="flex space-x-8 text-[10px] text-white/30 uppercase tracking-[2px]">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;