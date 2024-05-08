// DogCollection.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DogDetailsPopup from './DogDetailsPopup';

function DogCollection() {
    const [dogs, setDogs] = useState([]);
    const [selectedDog, setSelectedDog] = useState(null);

    useEffect(() => {
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => {
                console.log('API Response:', data); 
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

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Render dog images */}
            {dogs.map((dog) => (
                <div key={dog.id} className="bg-gray-800 text-white rounded-md shadow-md overflow-hidden">
                    {/* Dog image */}
                    <img 
                        src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                        alt={dog.name}
                        className="w-full h-80 object-cover rounded-t-md" 
                    />
                    <div className="p-4">
                        {/* Dog name */}
                        <h1 className="text-xl font-semibold mb-2">{dog.name}</h1>
                        {/* Dog breed group */}
                        <p className="text-gray-300 mb-2">Breed Group: {dog.breed_group}</p>
                        {/* Buttons */}
                        <div className="flex justify-center">
                            {/* Link to adopt details */}
                            <Link to={`/dogs/${dog.name}`}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                    Adopt Details
                                </button>
                            </Link>
                            {/* Button to preview dog */}
                            <button 
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => handleViewDetails(dog)}
                            >
                                Preview Dog
                            </button>
                        </div>
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
