import React from "react";
import { motion } from "framer-motion";

import prod1 from '../assets/gud-block.png';
import prod2 from '../assets/gud-liquid.png';
import prod3 from '../assets/gud-crystal.png';

const products = [
  { id: 1, name: "Golden Blocks", price: "$24", type: "Slow-Cured", image: prod1 },
  { id: 2, name: "Liquid Amber", price: "$18", type: "Spiced Syrup",image: prod2 },
  { id: 3, name: "Crystal Nectar", price: "$32", type: "Rare Aged", image: prod3}
];

const Collection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-40 bg-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-[80px]">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6 text-center">
          <div className="max-w-xl">
            <span className="text-brand-accent text-[11px] md:text-[12px] tracking-[3px] md:tracking-[4px] uppercase font-bold">
              Limited Reserve
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark mt-3 md:mt-4 leading-tight">
              The Collection
            </h2>
          </div>

          <button className="self-start md:self-auto text-[11px] md:text-[12px] uppercase tracking-widest border-b border-brand-dark pb-2 hover:text-brand-accent transition">
            View All
          </button>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-16">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: 10 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
            >
              {/* IMAGE BOX */}
              <div className="aspect-[4/5] bg-brand-cream overflow-hidden relative mb-5 md:mb-6 rounded-lg">
                {/* Actual Image Tag */}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-[1.5s] ease-out"/>

                {/* Overlay for Premium Feel (Halka dark gradient) */}
                   <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500">
                   </div>      

                <div className="w-full h-full bg-brand-dark/5 md:group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-brand-dark/20 italic text-sm md:text-base">
                </div>

                {/* PRODUCT TAG */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white px-2 py-1 md:px-3 text-[9px] md:text-[10px] tracking-widest uppercase shadow-sm">
                  {product.type}
                </div>
              </div>



             {/* PRODUCT INFO */}
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-serif text-brand-dark mb-1">{product.name}</h3>
                <p className="text-brand-accent font-medium tracking-widest text-sm md:text-base">{product.price}</p>
              </div>
                  </motion.div>
            ))}
          </div>

      </div>
    </section>
  );
};

export default Collection;
