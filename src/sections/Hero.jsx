import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Images import karein
import papaImg from '../assets/papa.jpeg'; 
import productImg from '../assets/gud.jpg'; 

const Hero = () => {
  const [showProduct, setShowProduct] = useState(false);

  // Logic: 2 second baad image change ho jayegi
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProduct(true);
    }, 3000); // Maine 3 second rakha hai taaki log Papa ko thoda dekh sakein
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen lg:h-[900px] w-full bg-brand-cream overflow-hidden flex items-center pt-[100px] lg:pt-0">
      
      {/* Background Text */}
      <div className="absolute top-[150px] left-[-50px] select-none pointer-events-none hidden lg:block">
        <h2 className="text-[180px] font-serif text-brand-dark/[0.03] leading-none uppercase">
          {showProduct ? "Masterpiece" : "Heritage"}
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-[80px] flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-[600px] z-10 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <span className="text-brand-accent text-[12px] md:text-[14px] tracking-[5px] uppercase font-bold block mb-6">
              {showProduct ? "The Final Result" : "The Visionary Behind"}
            </span>
            
            <h1 className="text-[48px] md:text-[70px] lg:text-[85px] font-serif leading-[1.1] text-brand-dark mb-10">
              {showProduct ? (
                <>Nature’s Own <br /><span className="italic text-brand-gold">Pure Gud.</span></>
              ) : (
                <>Tradition <br /><span className="italic text-brand-gold">Personified.</span></>
              )}
            </h1>

            <p className="text-[16px] md:text-[18px] text-brand-dark/70 leading-relaxed mb-12 max-w-lg mx-auto lg:mx-0">
              {showProduct 
                ? "Sourced from the heart of organic farms, our jaggery is a legacy of health and purity."
                : "Meet the man behind the craft. My father has dedicated decades to preserving the ancient art of jaggery making."}
            </p>

            <button className="bg-brand-dark text-white px-10 py-5 text-[12px] uppercase tracking-[3px] hover:bg-brand-accent transition-all duration-500 shadow-xl">
              Explore Our Story
            </button>
          </motion.div>
        </div>

        {/* Right Image Section (The Magic Box) */}
        <div className="relative w-full max-w-[500px] lg:w-[550px] h-[500px] md:h-[650px] lg:h-[750px]">
          <AnimatePresence mode="wait">
            {!showProduct ? (
              // FOUNDER IMAGE (Papa)
              <motion.div 
                key="founder"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full relative"
              >
                <img src={papaImg} className="w-full h-full object-cover shadow-2xl rounded-sm" alt="Founder" />
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md p-4 border border-white/20">
                    <p className="text-white text-[10px] uppercase tracking-widest font-bold">Our Founder</p>
                    <p className="text-white font-serif italic text-xl">PardhanGudFactory</p>
                </div>
              </motion.div>
            ) : (
              // PRODUCT IMAGE
              <motion.div 
                key="product"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full"
              >
                <img src={productImg} className="w-full h-full object-cover shadow-2xl rounded-sm" alt="Product" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Badge (Dono images par dikhega) */}
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 bg-brand-dark text-brand-gold p-8 z-20 shadow-2xl">
            <p className="text-2xl lg:text-[30px] font-serif italic leading-none text-center">Pure</p>
            <p className="text-[8px] uppercase tracking-[3px] opacity-70 text-center mt-2">Since 1924</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;