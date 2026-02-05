import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Heritage from './sections/Heritage'
import Collection from './sections/Collection'
import Contact from './sections/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <div className="bg-brand-cream">
      <Navbar />
      <Hero />
      <Heritage/>
      <Collection/>
      <Contact/>
      <Footer/>
      
      {/* Adding a dummy section just to enable scrolling for the navbar effect */}
     
    </div>
  )
}

export default App