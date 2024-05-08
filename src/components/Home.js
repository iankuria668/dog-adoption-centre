// Home.js
import React from 'react';
import DogCollection from './DogCollection';
import DogSearchForm from './DogSearchForm';
import NavBar from './NavBar';

function Home() {
  return (
    <div className="bg-gray-800 text-white">
      <header>
        <NavBar />
      </header>
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
        <DogSearchForm />
        <DogCollection />
      </div>
    </div>
  );
}

export default Home;
