
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedPackages from './components/FeaturedPackages';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-sandy-beige/50 text-ocean-blue-800 font-sans">
      <Header />
      <main>
        <Hero />
        <FeaturedPackages />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
