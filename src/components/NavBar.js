// NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-900 text-white ">
      <div className=" container mx-44 px-0 pt-4 flex justify-between items-right  ">
        <div>
          <NavLink className="text-emerald-600 text-5xl font-bold "> THE ROYAL PETS</NavLink>
          
        </div>
        <div className="nav-elements flex p-4 space-x-2">
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/" className="text-3xl font-bold" activeClassName="text-emerald-600">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About" className="text-3xl font-bold" activeClassName="text-emerald-600">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="text-3xl font-bold" activeClassName="text-emerald-600">Contact Us</NavLink>
            </li>
            <li>
              <a href="https://api.thedogapi.com/v1/breeds/" className="text-emerald-600 text-3xl font-bold">The Dog API</a>
            </li>
            {/* Additional nav items */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
