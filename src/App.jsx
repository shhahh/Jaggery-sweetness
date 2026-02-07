import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import { CartProvider } from './context/CartContext';
import CartSidebar from './components/CartSidebar';

function App() {
  return (
    // Sirf EK Router yahan hona chahiye
    <Router>
      
      <main className="bg-brand-cream overflow-x-hidden w-full min-h-screen flex flex-col"> 
         <CartProvider />
         <CartSidebar /> {/* Ye yahan rahega taaki kahi se bhi khul sake */}
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>

        <Footer />
      </main>
    </Router>
  )
}

export default App