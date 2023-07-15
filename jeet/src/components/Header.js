// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold"><img src="" alt="JEET LO"/></div>
        <nav>
          <a className="text-white mx-2" href="#home">
            Home
          </a>
          <a className="text-white mx-2" href="#features">
            Features
          </a>
          <a className="text-white mx-2" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
