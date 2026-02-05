import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-[100px] md:py-[160px] bg-brand-cream px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
        
        {/* Left: Direct Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-accent text-[12px] tracking-[5px] uppercase font-bold block mb-6">Inquiries</span>
          <h2 className="text-[48px] md:text-[64px] font-serif leading-tight text-brand-dark mb-10">
            Let’s share a <br /> <span className="italic text-brand-gold">taste of tradition.</span>
          </h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-brand-dark/40 text-[10px] uppercase tracking-[2px] mb-2">Direct Line</p>
              <a href="tel:+918630628812" className="text-2xl font-serif text-brand-dark hover:text-brand-accent transition-colors">+91 8630628812</a>
            </div>
            <div>
              <p className="text-brand-dark/40 text-[10px] uppercase tracking-[2px] mb-2">Digital Mail</p>
              <a href="mailto:shhahhraxa110@gmail.com" className="text-2xl font-serif text-brand-dark hover:text-brand-accent transition-colors">shhahhraxa110@gmail.com</a>
            </div>
          </div>
        </motion.div>

        {/* Right: Premium Minimalist Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.05)]"
        >
          <form className="space-y-10">
            <div className="relative">
              <input type="text" placeholder="Full Name" className="w-full border-b border-brand-dark/10 py-4 outline-none focus:border-brand-accent transition-colors bg-transparent placeholder:text-brand-dark/30 font-light" />
            </div>
            <div className="relative">
              <input type="email" placeholder="Email Address" className="w-full border-b border-brand-dark/10 py-4 outline-none focus:border-brand-accent transition-colors bg-transparent placeholder:text-brand-dark/30 font-light" />
            </div>
            <div className="relative">
              <textarea placeholder="Your Message" rows="3" className="w-full border-b border-brand-dark/10 py-4 outline-none focus:border-brand-accent transition-colors bg-transparent placeholder:text-brand-dark/30 font-light resize-none"></textarea>
            </div>
            <button className="w-full bg-brand-dark text-white py-6 text-[12px] uppercase tracking-[4px] hover:bg-brand-accent transition-all duration-500 font-bold">
              Send Inquiry
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;