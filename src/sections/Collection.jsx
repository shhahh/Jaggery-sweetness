import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Link import karein
import { products } from "../data/products"; // Data import karein

const Collection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-40 bg-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-[80px]">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-xl text-left"> {/* Mobile par bhi left-align premium lagta hai */}
            <span className="text-brand-accent text-[11px] md:text-[12px] tracking-[3px] md:tracking-[4px] uppercase font-bold">
              Limited Reserve
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark mt-3 md:mt-4 leading-tight">
              The Collection
            </h2>
          </div>
          <button className="hidden md:block text-[12px] uppercase tracking-widest border-b border-brand-dark pb-2 hover:text-brand-accent transition">
            View All
          </button>
        </div>

        {/* PRODUCT GRID - 100% Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <motion.div
                whileHover={{ y: -10 }} // Premium brands hamesha 'up' move karte hain
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer"
              >
                {/* IMAGE BOX */}
                <div className="aspect-[4/5] bg-brand-cream overflow-hidden relative mb-5 md:mb-6 rounded-lg shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                  />

                  {/* Overlay for Premium Feel */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>      

                  {/* PRODUCT TAG */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white px-3 py-1 text-[9px] md:text-[10px] tracking-widest uppercase shadow-sm font-bold z-10">
                    {product.type}
                  </div>
                </div>

                {/* PRODUCT INFO */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-serif text-brand-dark mb-1 group-hover:text-brand-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-brand-accent font-medium tracking-widest text-sm md:text-base">
                    {product.price}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile-only View All Button */}
        <div className="mt-12 text-center md:hidden">
          <button className="text-[11px] uppercase tracking-widest border-b border-brand-dark pb-2 font-bold">
            View All Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collection;