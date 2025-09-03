import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Players from './components/Players';
import Training from './components/Training';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Players />
        <Training />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;