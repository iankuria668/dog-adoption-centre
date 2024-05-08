import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DogSearchForm() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim() === '') {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${query}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching dog breed suggestions:', error);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Implement your form submission logic here
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
          className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500 text-black font-serif"
        />
        <button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">
          Search
        </button>
      </div>
      {/* Display breed suggestions or "not found" message */}
      {(query !== '' && suggestions.length === 0) && (
        <div className="mt-4 text-red-500">Sorry, the dog breed "{query}" is not found.</div>
      )}
      {suggestions.length > 0 && (
        <div className="mt-2 grid grid-cols-3 gap-4">
          {suggestions.map((breed) => (
            <div key={breed.id} className="bg-gray-800 text-white rounded-md shadow-md overflow-hidden">
              <img src={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`} alt={breed.name} className="w-full h-80 object-cover rounded-t-md cursor-pointer" onClick={() => setQuery(breed.name)} />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">{breed.name}</h1>
                <p className="text-gray-300 mb-2">Breed Group: {breed.breed_group}</p>
                <div className="flex justify-between">
                  {/* Button to adopt details */}
                  <Link to={`/dogs/${breed.name}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">
                      Adopt Details
                    </button>
                  </Link>
                  {/* Button to navigate to details page */}
                  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:bg-green-600" onClick={() => navigate(`/dogs/${breed.name}`)}>
                    Preview Dog
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </form>
  );
}

export default DogSearchForm;
