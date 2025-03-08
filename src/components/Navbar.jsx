
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex flex-row gap-6 justify-center bg-gray-800 py-4'>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-white font-semibold transition-colors duration-200 ${
            isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/pastes"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-white font-semibold transition-colors duration-200 ${
            isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`
        }
      >
        Pastes
      </NavLink>
    </div>
  );
}

export default Navbar;
