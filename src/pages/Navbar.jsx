import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  
  return (
    <nav className='w-full text-white font-serif text-xl h-12 justify-around bg-gray-800 rounded-b-2xl flex'>
    <ul className='flex items-center gap-10 justify-around '>
        <li>
            <NavLink to={"/"}>
            Home
            </NavLink>
        </li>
        <li>
            <NavLink to={"/admin"}>
            Admin
            </NavLink>
        </li>
        <li>
            <NavLink to={"/login"}>
            Login
            </NavLink>
        </li>
        <li>
          
        </li>
    </ul>

</nav>
  )
}

export default Navbar