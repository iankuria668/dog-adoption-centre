import React, { useState, useEffect } from 'react';
import './DogSearch.css';

function DogSearchForm() {
    // State to store user input and search results
    const [query, setQuery] = useState('');
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState(null);
    const [breedDetails, setBreedDetails] = useState(null); // State to store breed details

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); 
        try {
            // Make a GET request to the Dog API with the user's query
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

    // Function to handle input change
    const handleChange = (event) => {
        setQuery(event.target.value); 
    };


    // Event Listener for the View Details button
    const handleViewDetails = async (breed) => {
        setSelectedBreed(breed);
        try {
            // Make a GET request to fetch breed details by breed ID
            const response = await fetch(`https://api.thedogapi.com/v1/breeds/${breed.id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const breedData = await response.json();
            setBreedDetails(breedData);
        } catch (error) {
            console.error('Error fetching breed details:', error);
        }
    };

    // Close the details popup
    const handleClosePopup = () => {
        setSelectedBreed(null);
        setBreedDetails(null);
    };

    // Function to fetch all dog breeds
    const fetchAllBreeds = async () => {
        try {
            // Make a GET request to the Dog API to fetch all breeds
            const response = await fetch(`https://api.thedogapi.com/v1/breeds`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setBreeds(data);
        } catch (error) {
            console.error('Error fetching all dog breeds:', error);
        }
    };

    // Fetch all dog breeds when the component mounts
    useEffect(() => {
        fetchAllBreeds();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search Dog Breeds:</label>
                <input
                    type="text"
                    id="search"
                    value={query}
                    onChange={handleChange}
                    placeholder="Enter a breed name"
                />
            </form>
            <div className="dog-container">
                {/* Display all dogs */}
                {breeds.map((breed) => (
                    <div key={breed.id} className="dog-card">
                        <h3>{breed.name}</h3>
                        <p>{breed.temperament}</p>
                        <img src={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`} alt={breed.name} />
                        <button className="button" onClick={() => handleViewDetails(breed)}>View Details</button>
                        <button className=" button" onClick={() => console.log("Dog adopted!")}>Adopt</button>
                    </div>
                ))}
            </div>
            {/* Details Popup */}
            {selectedBreed && breedDetails && (
                <div className="dog-details-popup">
                    <div className="dog-details-content">
                        <h2>{breedDetails.name}</h2>
                        <p><strong>Breed ID:</strong> {breedDetails.id}</p>
                        <p><strong>Breed reference ID:</strong> {breedDetails.reference_image_id}</p>
                        <p><strong>Breed group:</strong> {breedDetails.breed_group}</p>
                        <p><strong>Breed origin:</strong> {breedDetails.origin}</p>
                        <p><strong>Breed life span:</strong> {breedDetails.life_span}</p>
                        <p><strong>Breed temperament:</strong> {breedDetails.temperament}</p>
                        <button onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DogSearchForm;
