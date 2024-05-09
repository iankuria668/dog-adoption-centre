import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="relative py-10 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-7">
      <div className="relative z-[133] container mo px-1 md:px-12">
        <div className="m-1 "> {/* Made the parent div full width on medium screens */}
          <div className="flex flex-wrap justify-start space-x-20"> {/* Justify-start & space-x-6 */}
            <Link to="/" className="hover:text-zinc-50 transition">
              Home
            </Link>
            <Link to="/About" className="hover:text-zinc-50 transition">
              About
            </Link>
            <a
              href="https://api.thedogapi.com/v1/breeds/"
              className="hover:text-zinc-50 transition"
            >
              DOG API
            </a>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
        <div aria-hidden="true" className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
      </div>
      <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[020314] opacity-80"></div>
    </footer>
  );
}

export default Footer;
