import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, CheckCircle2, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { paymentDetails } from '../data/paymentDetails';

const CheckoutModal = ({ isCheckoutOpen, setIsCheckoutOpen }) => {
  const { cart, getCartTotal } = useCart();
  const [copiedItem, setCopiedItem] = useState(null);

  // Calculate Totals (Safely)
  const cartTotal = typeof getCartTotal === 'function' ? getCartTotal() : 0;
  const finalTotal = cartTotal + paymentDetails.deliveryCharge;

  // Copy to Clipboard Animation
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000); // 2 second baad wapas Copy icon
  };

  // WhatsApp Order Formatting
  const handleWhatsAppOrder = () => {
    let orderText = `*New Order - Nectar Earth*%0A%0A`;
    cart.forEach(item => {
      orderText += `▪ ${item.name} (x${item.quantity}) - ₹${item.price}%0A`;
    });
    orderText += `%0A*Subtotal:* ₹${cartTotal.toFixed(2)}`;
    orderText += `%0A*Delivery:* ₹${paymentDetails.deliveryCharge}`;
    orderText += `%0A*Total Paid:* ₹${finalTotal.toFixed(2)}%0A%0A`;
    orderText += `I have made the payment. Here is my screenshot and delivery address:`;

    // Tumhara number (Country code ke saath, bina + sign ke)
    const waNumber = "918630628812"; 
    window.open(`https://wa.me/${waNumber}?text=${orderText}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          {/* Dark Overlay */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsCheckoutOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Checkout Card (Premium Glassmorphic) */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-brand-cream rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-brand-dark text-white p-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-serif tracking-widest uppercase">Secure Checkout</h2>
                <p className="text-[10px] text-brand-gold tracking-[2px] opacity-70">Advance Payment Required</p>
              </div>
              <X className="cursor-pointer hover:rotate-90 transition-transform" onClick={() => setIsCheckoutOpen(false)} />
            </div>

            {/* Content (Scrollable) */}
            <div className="p-6 md:p-8 overflow-y-auto">
              
              {/* Summary Section */}
              <div className="bg-white p-6 rounded border border-brand-dark/10 mb-8">
                <h3 className="text-sm uppercase tracking-widest font-bold border-b border-brand-dark/10 pb-4 mb-4">Order Summary</h3>
                <div className="flex justify-between text-sm mb-3 text-brand-dark/70">
                  <span>Cart Value</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mb-4 text-brand-dark/70">
                  <span>Shipping & Handling</span>
                  <span>₹{paymentDetails.deliveryCharge.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-serif text-brand-dark pt-4 border-t border-brand-dark/10">
                  <span>Total Amount</span>
                  <span className="text-brand-accent">₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Methods Section */}
              <h3 className="text-sm uppercase tracking-widest font-bold mb-6">Payment Methods</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* UPI Box */}
                <div className="bg-white p-6 rounded border border-brand-dark/10 hover:border-brand-accent transition-colors">
                  <h4 className="font-bold mb-4 text-brand-dark">UPI / GPay / PhonePe</h4>
                  <div className="flex items-center justify-between bg-brand-cream/50 p-3 rounded text-sm mb-3">
                    <span className="font-medium tracking-wide">{paymentDetails.upiId}</span>
                    <button onClick={() => handleCopy(paymentDetails.upiId, 'upi')} className="text-brand-accent hover:text-brand-dark">
                      {copiedItem === 'upi' ? <CheckCircle2 size={16} className="text-green-600"/> : <Copy size={16}/>}
                    </button>
                  </div>
                  <div className="flex items-center justify-between bg-brand-cream/50 p-3 rounded text-sm">
                    <span className="font-medium tracking-wide">No: {paymentDetails.gpayNo}</span>
                    <button onClick={() => handleCopy(paymentDetails.gpayNo, 'phone')} className="text-brand-accent hover:text-brand-dark">
                      {copiedItem === 'phone' ? <CheckCircle2 size={16} className="text-green-600"/> : <Copy size={16}/>}
                    </button>
                  </div>
                </div>

                {/* Bank Box */}
                <div className="bg-white p-6 rounded border border-brand-dark/10 hover:border-brand-accent transition-colors text-sm">
                  <h4 className="font-bold mb-4 text-brand-dark">Direct Bank Transfer</h4>
                  <p className="mb-2"><span className="text-brand-dark/50">Name:</span> {paymentDetails.bankDetails.accountName}</p>
                  <p className="mb-2"><span className="text-brand-dark/50">A/C:</span> {paymentDetails.bankDetails.accountNo}</p>
                  <p className="mb-2"><span className="text-brand-dark/50">IFSC:</span> {paymentDetails.bankDetails.ifsc}</p>
                  <p><span className="text-brand-dark/50">Bank:</span> {paymentDetails.bankDetails.bankName}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="text-center">
                <p className="text-[11px] text-brand-dark/50 mb-4 uppercase tracking-widest">
                  Step 2: After payment, send screenshot on WhatsApp
                </p>
                <button 
                  onClick={handleWhatsAppOrder}
                  className="w-full md:w-auto bg-[#25D366] text-white px-10 py-5 rounded-full uppercase tracking-[2px] text-[12px] font-bold hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-3 mx-auto shadow-lg shadow-green-900/20"
                >
                  <MessageCircle size={20} /> Confirm Order via WhatsApp
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;