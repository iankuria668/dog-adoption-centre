// DogCollection.js

import React, { useState, useEffect } from 'react';
import DogDetailsPopup from './DogDetailsPopup';

function DogCollection() {
    const [dogs, setDogs] = useState([]);
    const [selectedDog, setSelectedDog] = useState(null);

    useEffect(() => {
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => {
                console.log('API Response:', data); // Log API response to console
                setDogs(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleViewDetails = (dog) => {
        setSelectedDog(dog);
    };

    const handleClosePopup = () => {
        setSelectedDog(null);
    };

    // Function for the non-functional "Adopt" button
    const handleAdopt = () => {
        // No functionality needed
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Render dog images */}
            {dogs.map((dog) => (
                <div key={dog.id} className="bg-white rounded-md shadow-md overflow-hidden">
                    {/* Dog image */}
                    <img 
                        src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                        alt={dog.name}
                        className="w-full h-48 object-cover"
                    />
                    {/* Buttons for adopting and viewing details */}
                    <div className="flex justify-center mt-2">
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={handleAdopt}
                        >
                            Adopt
                        </button>
                        <button 
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleViewDetails(dog)}
                        >
                            View Details
                        </button>
                    </div>
                </div>
            ))}
            {/* Modal popup for displaying dog details */}
            {selectedDog && (
                <DogDetailsPopup dog={selectedDog} onClose={handleClosePopup} />
            )}
        </div>
    );
}

export default DogCollection;
