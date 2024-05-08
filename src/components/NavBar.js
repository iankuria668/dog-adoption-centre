import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-950 background-color: rgb(3 7 18) text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <NavLink className="text-emerald-600 text-5xl font-bold" to="/">THE ROYAL PETS</NavLink>
        </div>
        <div className="nav-elements flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/" className="text-3xl font-bold">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About" className="text-3xl font-bold">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="text-3xl font-bold">Contact Us</NavLink>
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
