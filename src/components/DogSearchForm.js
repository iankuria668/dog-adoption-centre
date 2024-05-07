import React, { useState, useEffect } from 'react';

function DogSearchForm() {
    // State to store user input and search results
    const [query, setQuery] = useState('');
    const [breeds, setBreeds] = useState([]);

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
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

    // Function to fetch image URL for a specific breed
    const fetchImageURL = async (imageId) => {
        try {
            const response = await fetch(`https://api.thedogapi.com/v1/images/${imageId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const imageData = await response.json();
            return imageData.url;
        } catch (error) {
            console.error('Error fetching image URL:', error);
            return ''; // Return empty string in case of error
        }
    };

    useEffect(() => {
        // Define an async function to fetch image URLs for all breeds
        const fetchBreedsData = async () => {
            const breedsData = [];
            for (const breed of breeds) {
                const imageURL = await fetchImageURL(breed.reference_image_id);
                breedsData.push({ ...breed, imageURL }); // Include imageURL in breed data
            }
            setBreeds(breedsData); // Update breeds state with the new data
        };

        // Check if there are breeds to fetch images for
        if (breeds.length > 0) {
            fetchBreedsData(); // Fetch image URLs for breeds
        }
    }, [breeds]); // Trigger effect whenever breeds state changes

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
                <button type="submit">Search</button>
            </form>
            <div className="dog-container">
                {breeds.map((breed) => (
                    <div key={breed.id} className="dog-card">
                        <h3>{breed.name}</h3>
                        <p>{breed.temperament}</p>
                        <img src={breed.imageURL} alt={breed.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogSearchForm;
