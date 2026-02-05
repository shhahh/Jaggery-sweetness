import React from 'react';
import { motion } from 'framer-motion';
// 1. Image ko yahan import karein
import gudImage from '../assets/gud.jpg'; 

// src/sections/Hero.jsx
const Hero = () => {
  return (
    <section className="relative min-h-screen lg:h-[900px] w-full bg-brand-cream overflow-hidden flex items-center pt-[100px] lg:pt-0">
      
      {/* Background Text - Hidden on Mobile for clean look */}
     <div className="absolute top-[150px] left-[-50px] select-none pointer-events-none hidden lg:block">
     <h2 className="text-[200px] font-serif text-brand-dark/[0.03] leading-none uppercase">
         Artisanal
     </h2>
  </div>

      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-[80px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
        
        {/* Left Content */}
        <div className="w-full lg:w-[600px] z-10 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-brand-accent text-[12px] md:text-[14px] tracking-[3px] md:tracking-[5px] uppercase font-bold block mb-4 md:mb-6">
              Tradition in every grain
            </span>
            <h1 className="text-[48px] md:text-[70px] lg:text-[90px] font-serif leading-[1.1] text-brand-dark mb-6 md:mb-10">
              Nature’s Own <br className="hidden md:block" /> 
              <span className="italic text-brand-gold">Amber Glow.</span>
            </h1>
            <p className="text-[16px] text-left md:text-[18px] text-brand-dark/70 leading-relaxed mb-8 md:mb-12 max-w-lg mx-auto lg:mx-0">
              Sourced from the heart of organic farms, our jaggery is more than just sweetness—it's a legacy of health.
            </p>
            <button className="bg-brand-dark text-white px-8 md:px-[45px] py-4 md:py-[20px] text-[10px] md:text-[12px] uppercase tracking-[3px] hover:bg-brand-accent transition-all duration-500 shadow-xl">
              Shop the Blend
            </button>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full max-w-[500px] lg:w-[550px] h-[400px] md:h-[600px] lg:h-[700px]">
          <motion.div className="w-full h-full relative z-10">
            <img src={gudImage} className="w-full h-full object-cover shadow-2xl" alt="Premium Jaggery" />
          </motion.div>
          {/* Floating Badge - Smaller on Mobile */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-[-20px] right-[-10px] lg:bottom-[-30px] lg:right-[-30px] bg-brand-dark text-brand-gold p-6 lg:p-[40px] z-20 shadow-2xl">
            <p className="text-xl lg:text-[30px] font-serif italic leading-none">100%</p>
            <p className="text-[8px] lg:text-[10px] uppercase tracking-[2px] opacity-70">Unrefined</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;