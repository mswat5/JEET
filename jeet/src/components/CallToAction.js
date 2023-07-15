// components/CallToAction.js
import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-blue-500 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">Join Us Now</h2>
        <p className="text-lg mb-6">
          Sign up to get early access to our community!
        </p>
        <button className="bg-white text-blue-500 py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
