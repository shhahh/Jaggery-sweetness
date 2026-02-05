import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Heritage from './sections/Heritage'
import Collection from './sections/Collection'
import Contact from './sections/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <main className="bg-brand-cream overflow-x-hidden w-full"> 
      <Navbar />
      <Hero />
      <Heritage />
      <Collection />
      <Contact />
      <Footer />
    </main>
  )
}

export default App