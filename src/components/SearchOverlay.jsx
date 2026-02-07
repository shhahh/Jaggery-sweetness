import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

const SearchOverlay = ({ isSearchOpen, setIsSearchOpen }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Logic: Jab bhi query badlegi, products filter honge
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.type.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-brand-cream/95 backdrop-blur-xl z-[3000] flex flex-col p-6 md:p-20"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-10 right-10 p-4 hover:rotate-90 transition-transform duration-500"
          >
            <X size={32} className="text-brand-dark" />
          </button>

          {/* Search Input Area */}
          <div className="max-w-4xl mx-auto w-full mt-20">
            <div className="relative border-b-2 border-brand-dark/10 focus-within:border-brand-accent transition-colors pb-4">
              <input
                autoFocus
                type="text"
                placeholder="Search our collection..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-4xl md:text-6xl font-serif outline-none placeholder:text-brand-dark/10 text-brand-dark"
              />
              <SearchIcon className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-dark/20" size={32} />
            </div>

            {/* Search Results Grid */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
              {results.map((product) => (
                <Link 
                  to={`/product/${product.id}`} 
                  key={product.id}
                  onClick={() => setIsSearchOpen(false)}
                  className="group flex items-center gap-6 p-4 hover:bg-white transition-all rounded-lg"
                >
                  <div className="w-24 h-24 bg-brand-dark/5 rounded overflow-hidden">
                    <img src={product.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold">{product.type}</span>
                    <h3 className="text-2xl font-serif text-brand-dark group-hover:text-brand-accent transition-colors">{product.name}</h3>
                    <p className="text-sm text-brand-dark/40">{product.price}</p>
                  </div>
                  <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-all text-brand-accent" />
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {query && results.length === 0 && (
              <p className="text-center text-brand-dark/40 font-serif italic text-2xl mt-20">
                No results found for "{query}"
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;