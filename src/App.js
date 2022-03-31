import React from 'react'
import Footer from './components/Footer';

import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Recommend from './components/Recommend';
import Testimonials from './components/Testimonials';



export default function App() {
  return (
    
    <>

      <Navbar/>
      {/* <ScrollToTop/> */}
      <Hero />
      <Services/>
      <Recommend/>
      <Testimonials/>
      <Footer/>
    </>
  )
}
