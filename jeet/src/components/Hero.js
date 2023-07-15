// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 2, y: 0 }}
      transition={{ duration: 2 }}
      className="bg-gray-200 p-8 text-center"
    >
      <h1 className="text-4xl font-semibold mb-4">Welcome to Our Community</h1>
      <p className="text-lg mb-6">
        A revolutionary solution to all your problems!
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

// export default Hero;
