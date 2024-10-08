import React from 'react';
import DogCollection from './DogCollection';
import DogSearchForm from './DogSearchForm';
import NavBar from './NavBar';

function Home() {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <header>
        <NavBar />
      </header>
      <div className="container mx-auto py-8">
        <DogSearchForm />
        <DogCollection />
      </div>
    </div>
  );
}

export default Home;
