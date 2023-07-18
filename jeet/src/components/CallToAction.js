// components/CallToAction.js
import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section id="callToAction" className="bg-blue-500 text-white py-12">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold mb-4"
        >
          Join Us Now
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg mb-6"
        >
          Sign up to get early access and receive exciting offers!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <form className="flex justify-center">
            <input
              className="rounded-l py-2 px-4 outline-none focus:ring focus:ring-blue-300 bg-transparent text-black placeholder-white"
              type="email"
              placeholder="Enter your email"
            />
            <button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-blue-500 py-2 px-4 rounded-r"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
