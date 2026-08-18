import React from 'react';
import './styles/site.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Approach from './components/Approach';
import FAQSection from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-root" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
