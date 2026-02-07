import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import CheckoutModal from './CheckoutModal';

const CartSidebar = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, getCartTotal } = useCart();

  
  console.log("Kya cart khula hai?:", isCartOpen); // <--- Ye line add karo
  console.log("Cart mein kya hai?:", cart);      // <--- Ye line bhi
  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay (Piche ka blur area) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[1000]"
          />

          {/* Sidebar Panel */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-white z-[1001] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-brand-dark/5 flex justify-between items-center">
              <h2 className="text-[20px] font-serif uppercase tracking-[3px]">Your Selection</h2>
              <X className="cursor-pointer hover:rotate-90 transition-transform duration-300" onClick={() => setIsCartOpen(false)} />
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-brand-dark/40 italic">
                  <ShoppingBag size={48} strokeWidth={1} className="mb-4 opacity-20" />
                  <p>Your collection is empty.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6 items-center">
                    <div className="w-24 h-24 bg-brand-cream rounded overflow-hidden flex-shrink-0">
                      <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-serif text-lg">{item.name}</h3>
                      <p className="text-sm text-brand-accent tracking-widest">{item.price} x {item.quantity}</p>
                    </div>
                    <Trash2 
                      size={18} 
                      className="text-brand-dark/20 hover:text-red-800 cursor-pointer transition-colors"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout Section */}
            {cart.length > 0 && (
              <div className="p-8 bg-brand-cream/30 border-t border-brand-dark/5">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[12px] uppercase tracking-[3px] font-bold">Subtotal</span>
                  <span className="text-2xl font-serif text-brand-dark"> ${typeof getCartTotal === 'function' ? getCartTotal().toFixed(2) : "0.00"} </span>
                </div>
                <button 
                       onClick={() => setIsCheckoutOpen(true)} className="w-full bg-brand-dark text-white py-6 uppercase tracking-[4px] text-[12px] font-bold hover:bg-brand-accent transition-all duration-500">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
          <CheckoutModal 
      isCheckoutOpen={isCheckoutOpen} 
      setIsCheckoutOpen={setIsCheckoutOpen} 
    />
        </>
      )}
    </AnimatePresence>   
  );
};

export default CartSidebar;