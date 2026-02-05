import React from "react";
import { motion } from "framer-motion";
import heritageImg from "../assets/healthy-jaggery.jpg";

const Heritage = () => {
  return (
    <section className="py-20 md:py-32 lg:py-[160px] bg-brand-cream overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[80px]">
        
        {/* FLEX WRAPPER */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-[100px]">
          
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[500px] h-[400px] md:h-[550px] lg:h-[650px]"
          >
            {/* Border Frame */}
            <div className="absolute top-5 left-5 md:top-[30px] md:left-[30px] w-full h-full border border-brand-gold"></div>

            {/* Image */}
            <div className="relative z-10 w-full h-full overflow-hidden">
              <img
                src={heritageImg}
                alt="Traditional Process"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-[-20px] right-[-20px] md:top-[-40px] md:right-[-40px] 
            bg-brand-accent text-white p-4 md:p-[30px] rounded-full 
            w-[80px] h-[80px] md:w-[120px] md:h-[120px] 
            flex items-center justify-center text-center 
            text-[8px] md:text-[10px] uppercase tracking-widest font-bold shadow-xl">
              Since <br /> 1924
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <div className="w-full max-w-[600px] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-accent text-[11px] md:text-[12px] tracking-[4px] md:tracking-[6px] uppercase font-bold block mb-6 md:mb-[30px]">
                Our Philosophy
              </span>

              <h2 className="text-3xl md:text-5xl lg:text-[60px] font-serif leading-tight lg:leading-[70px] text-brand-dark mb-8 md:mb-[40px]">
                A Century of <br />
                <span className="italic text-brand-gold">
                  Slow Crafting.
                </span>
              </h2>

              <div className="space-y-6 md:space-y-[30px] text-left text-brand-dark/70 text-base md:text-lg leading-7 md:leading-[32px] font-light">
                <p>
                  At Nectar Earth, we believe time is the most important ingredient.
                  Our Jaggery is slow-cooked in iron vats over wood-fire flame,
                  just as it was 100 years ago.
                </p>
                <p>
                  We collaborate with organic farmers who treat the soil as living.
                  No chemicals, no bleaching agents — just pure golden nectar.
                </p>
              </div>

              {/* STATS */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-16 mt-10 md:mt-[60px] pt-10 md:pt-[60px] border-t border-brand-dark/10">
                <div>
                  <h4 className="text-2xl md:text-[32px] font-serif text-brand-dark">
                    0%
                  </h4>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[2px] text-brand-accent font-bold">
                    Chemicals
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl md:text-[32px] font-serif text-brand-dark">
                    100%
                  </h4>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[2px] text-brand-accent font-bold">
                    Organic
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl md:text-[32px] font-serif text-brand-dark">
                    Hand
                  </h4>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[2px] text-brand-accent font-bold">
                    Poured
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Heritage;
