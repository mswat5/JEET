import React from 'react';
import Header from './components/Header';
import {Hero} from './components/Hero';
import Features from './components/Features';
import {Testimonials} from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App = () => {
  const scrollToCallToAction = () => {
    const callToActionElement = document.getElementById('callToAction');
    callToActionElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <Hero scrollToCallToAction={scrollToCallToAction} />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
