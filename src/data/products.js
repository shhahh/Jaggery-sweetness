import prod1 from '../assets/gud-block.png';
import prod2 from '../assets/gud-liquid.png';
import prod3 from '../assets/gud-crystal.png';

export const products = [
  { 
    id: 1, 
    name: "Golden Blocks", 
    price: "$24", 
    type: "Slow-Cured", 
    image: prod1,
    description: "Traditional sun-dried jaggery blocks, infused with earthy minerals and slow-cured for peak sweetness.",
    weight: "500g",
    benefits: ["Natural Cleanser", "Rich in Iron", "No Additives"]
  },
  { 
    id: 2, 
    name: "Liquid Amber", 
    price: "$18", 
    type: "Spiced Syrup",
    image: prod2,
    description: "A velvety smooth liquid jaggery syrup, perfect for drizzling over desserts or sweetening your morning brew.",
    weight: "300ml",
    benefits: ["Digestive Aid", "Pure Sugarcane", "Rich Texture"]
  },
  { 
    id: 3, 
    name: "Crystal Nectar", 
    price: "$32", 
    type: "Rare Aged", 
    image: prod3,
    description: "Our most premium offering. Aged in clay pots for 24 months to develop a crystal-like structure and deep caramel notes.",
    weight: "250g",
    benefits: ["Immunity Booster", "Aged Perfection", "High Minerals"]
  }
  
];