// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

export const Hero = ({ scrollToCallToAction }) => {
  const handleJoinNowClick = () => {
    scrollToCallToAction();
  };

  return (
    <motion.section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4"
        >
          Welcome to Our Awesome App
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg mb-8"
        >
          Discover amazing features and more!
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-white text-blue-500 py-3 px-6 rounded"
          onClick={handleJoinNowClick}
        >
          Join Now
        </motion.button>
      </div>
    </motion.section>
  );
};

