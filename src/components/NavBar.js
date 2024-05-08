// NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <NavLink to="/" className="text-3xl font-bold" activeClassName="text-emerald-600">THE ROYAL PETS</NavLink>
        </div>
        <div className="nav-elements">
          <ul className="flex space-x-4">
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
