// DogSearchForm.js
import React, { useState, useEffect } from 'react';

function DogSearchForm() {
  const [query, setQuery] = useState('');
  const [breeds, setBreeds] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBreeds(data);
    } catch (error) {
      console.error('Error fetching dog breeds:', error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <label htmlFor="search" className="block text-lg text-gray-300">Search Dog Breeds:</label>
      <div className="flex mt-2">
        <input
          type="text"
          id="search"
          value={query}
          onChange={handleChange}
          placeholder="Enter a breed name"
          className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">
          Search
        </button>
      </div>
    </form>
  );
}

export default DogSearchForm;
