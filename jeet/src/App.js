// src/App.js
import React from 'react';
import Header from './components/Header';
import { Hero } from './components/Hero';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
