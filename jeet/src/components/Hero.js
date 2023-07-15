// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-200 p-8"
    >
      {/* Your hero content here */}
    </motion.div>
  );
};
