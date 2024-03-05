import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt2 } from 'react-icons/hi';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sm:flex sm:items-center sm:justify-between p-4 h-38">
      <HiMenuAlt2
        className="text-5xl cursor-pointer sm:hidden text-light-gray-800"
        onClick={handleToggleMobileMenu}
      />
      <ul className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:flex sm:space-x-4 text-gray-800 ml-auto mr-4`}>
        <li className="m-4 group">
          <NavLink
            to="/"
            className="active mx-4 transition-all hover:text-lg font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li className="m-4 group">
          <NavLink
            to="/projects"
            className="active mx-4 transition-all hover:text-lg font-bold"
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
          >
            Projects
          </NavLink>
        </li>
         <li className="m-4 group">
          <NavLink
            to="/contact"
            className="active mx-4 transition-all hover:text-lg font-bold"
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;


