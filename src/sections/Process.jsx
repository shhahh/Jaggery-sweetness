import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Flame, ThermometerSnowflake, ShieldCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <Sprout size={32} />,
    title: "Organic Harvest",
    desc: "Sourced from chemical-free farms in the foothills of the Himalayas."
  },
  {
    id: 2,
    icon: <Flame size={32} />,
    title: "Slow Boiling",
    desc: "Traditionally cooked over wood fires in small batches for purity."
  },
  {
    id: 3,
    icon: <ThermometerSnowflake size={32} />,
    title: "Natural Cooling",
    desc: "Cooled in large iron vats to preserve natural nutrients."
  },
  {
    id: 4,
    icon: <ShieldCheck size={32} />,
    title: "Aged to Perfection",
    desc: "Aged for months to achieve that signature golden amber texture."
  }
];

const Process = () => {
  return (
    <section className="py-20 lg:py-40 bg-brand-dark text-white px-6 md:px-12 lg:px-[80px]">
      <div className="max-w-[1440px] mx-auto text-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-brand-gold text-[12px] tracking-[6px] uppercase font-bold">The Craft</span>
          <h2 className="text-4xl md:text-6xl font-serif mt-4 italic">The Alchemist’s Process</h2>
        </motion.div>

        {/* Steps Grid - 100% Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group flex flex-col items-center"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-500 mb-8 shadow-lg">
                {step.icon}
              </div>
              
              {/* Number */}
              <span className="text-[10px] text-brand-gold tracking-[4px] font-bold mb-4">0{step.id}</span>
              
              {/* Title & Desc */}
              <h3 className="text-xl font-serif mb-4 tracking-wide">{step.title}</h3>
              <p className="text-white/40 text-[14px] leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;