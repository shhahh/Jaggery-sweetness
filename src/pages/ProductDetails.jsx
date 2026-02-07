import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products'; 
import { useCart } from '../context/CartContext'; 
import { ArrowLeft, ShoppingBag } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // DEBUG 1: Pehle check karte hain URL se kya ID aa rahi hai
  console.log("URL se aayi ID:", id);

  // DEBUG 2: Check karte hain ki hamara products array kaisa dikh raha hai
  console.log("Total Products:", products);

  // ID match karne ka sabse safe tarika
  // Hum '==' use karenge taaki string aur number ka lafada na ho
  const product = products.find((p) => p.id == id);

  // DEBUG 3: Dekhte hain product mila ya nahi
  console.log("Dhoonda gaya Product:", product);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // AGAR PRODUCT NAHI MILA: Toh blank screen nahi, ye msg dikhega
  if (!product) {
    return (
      <div className="pt-40 text-center h-screen bg-brand-cream">
        <h2 className="text-3xl font-serif text-brand-dark">Product Not Found!</h2>
        <p className="mt-4 text-brand-dark/50">ID: {id} se koi product match nahi hua.</p>
        <button 
          onClick={() => navigate('/')} 
          className="mt-8 px-10 py-4 bg-brand-dark text-white uppercase tracking-widest text-[10px]"
        >
          Back to Home
        </button>
      </div>
    );
  }

  // AGAR PRODUCT MIL GAYA: Toh ye render hoga
  return (
    <div className="pt-[140px] pb-[80px] px-6 md:px-12 lg:px-[80px] max-w-[1440px] mx-auto min-h-screen">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 mb-10 uppercase tracking-[3px] text-[10px] text-brand-dark/60 hover:text-brand-dark transition-all"
      >
        <ArrowLeft size={16} /> Back to Collection
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px]">
        {/* Left Image */}
        <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-white border border-brand-dark/5">
          <img 
            src={product.image} 
            className="w-full h-full object-cover" 
            alt={product.name} 
          />
        </div>

        {/* Right Details */}
        <div className="flex flex-col justify-center">
          <span className="text-brand-accent text-[12px] tracking-[5px] uppercase font-bold mb-4">
            {product.type}
          </span>
          <h1 className="text-[40px] md:text-[56px] font-serif text-brand-dark leading-tight mb-4">
            {product.name}
          </h1>
          <p className="text-2xl font-light italic text-brand-dark/80 mb-8">{product.price}</p>
          
          <p className="text-brand-dark/60 text-lg leading-relaxed mb-10 max-w-lg">
            {product.description || "Premium handcrafted organic sweetness from the heart of Muzaffarnagar."}
          </p>
          
          <button 
            onClick={() => addToCart(product)} 
            className="w-full md:w-max bg-brand-dark text-white px-12 py-6 uppercase tracking-[4px] text-[12px] font-bold hover:bg-brand-accent transition-all duration-500 flex items-center justify-center gap-4 shadow-xl"
          >
            <ShoppingBag size={18} /> Add to Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;