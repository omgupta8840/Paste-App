import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex flex-row gap-4 justify-center place-content-evenly '>
      <NavLink
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/pastes"
      >
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
