import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CartProvider } from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* CartProvider yahan rahega, lekin Router yahan NAHI hona chahiye */}
      <CartProvider>
        <App />
      </CartProvider>
  </React.StrictMode>
)