import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Vikram Malhotra",
    role: "Professional Chef",
    text: "The depth of flavor in this Golden Block jaggery is unmatched. It has completely replaced refined sugar in my pastry kitchen.",
    stars: 5
  },
  {
    id: 2,
    name: "Ananya Iyer",
    role: "Wellness Coach",
    text: "Finally, a brand that respects the tradition of Indian superfoods. The Liquid Amber is a staple in my morning ritual now.",
    stars: 5
  },
  {
    id: 3,
    name: "Rohan Khanna",
    role: "Lifestyle Blogger",
    text: "The packaging, the purity, and the taste—everything screams premium. Nectar Earth is the gold standard of organic sweets.",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px]">
        
        {/* Header */}
        <div className="text-center mb-20">
          <Quote className="mx-auto text-brand-gold/30 mb-6" size={48} />
          <h2 className="text-4xl md:text-6xl font-serif text-brand-dark italic">
            Voices of <span className="text-brand-gold not-italic">Appreciation</span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-brand-cream/30 p-10 border border-brand-dark/5 relative group hover:bg-white hover:shadow-2xl transition-all duration-700"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              
              <p className="text-brand-dark/70 italic leading-relaxed mb-8 text-lg">
                "{review.text}"
              </p>
              
              <div>
                <h4 className="font-serif text-xl text-brand-dark">{review.name}</h4>
                <p className="text-[10px] uppercase tracking-[3px] text-brand-accent mt-1">{review.role}</p>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-2 h-0 bg-brand-accent group-hover:h-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;