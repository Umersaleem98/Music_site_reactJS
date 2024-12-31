import React from 'react';
import Header from './layouts/Header';
import StartQuote from './layouts/StartQuote';
import Feature from './layouts/Feature';
import Services from './layouts/Services';
import Member from './layouts/Member';
import About from './layouts/About';
import Contact from './layouts/Contact';
import Footer from './layouts/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <StartQuote />
      <Feature />
      <Services />
      <Member />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
