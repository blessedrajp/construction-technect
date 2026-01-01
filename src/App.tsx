import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Problem from './components/sections/Problem';
import Platform from './components/sections/Platform';
import AISection from './components/sections/AISection';
import Audience from './components/sections/Audience';
import WhyUs from './components/sections/WhyUs';
import HowItWorks from './components/sections/HowItWorks';
import GlobalVision from './components/sections/GlobalVision';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-brand-orange/20 selection:text-brand-orange">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problem />
        <Platform />
        <AISection />
        <Audience />
        <WhyUs />
        <HowItWorks />
        <GlobalVision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
