// src/components/Header.js

import React from 'react';
import { Link } from 'react-scroll';

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'callToAction', label: 'Call to Action' },
];

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-semibold">Your Logo</div>
          <ul className="flex space-x-4">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  offset={-80} // Adjust this value based on your sticky header's height
                  duration={500}
                  className="cursor-pointer hover:text-blue-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
