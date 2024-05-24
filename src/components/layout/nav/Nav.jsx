import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiMenuAlt2 } from 'react-icons/hi';

const Nav = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sm:flex sm:items-center sm:justify-between bg-white z-60 p-4">
      <HiMenuAlt2
        className="text-6xl cursor-pointer sm:hidden text-pink-300"
        onClick={handleToggleMobileMenu}
      />
      <ul className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:flex sm:space-x-4 text-gray-800 ml-auto mt-10 mr-4`}>
        <li className={`m-4 group ${location.pathname === '/' ? 'active' : ''}`}>
          <NavLink
            to="/"
            className={`mx-4 transition-all hover:text-lg font-bold text-gray-400 ${location.pathname === '/' ? 'text-pink-300' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li className={`m-4 group ${location.pathname === '/projects' ? 'active' : ''}`}>
          <NavLink
            to="/projects"
            className={`mx-4 transition-all hover:text-lg font-bold text-gray-400 ${location.pathname === '/projects' ? 'text-pink-300' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </NavLink>
        </li>
        <li className={`m-4 group ${location.pathname === '/contact' ? 'active' : ''}`}>
          <NavLink
            to="/contact"
            className={`mx-4 transition-all hover:text-lg font-bold text-gray-400 ${location.pathname === '/contact' ? 'text-pink-300' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;





