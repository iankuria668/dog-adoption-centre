// DogCollection.js

import React, { useState, useEffect } from 'react';
import DogDetailsPopup from './DogDetailsPopup';
import { Link } from 'react-router-dom';

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
                <div key={dog.id} className="bg-white rounded-md shadow-md overflow-hidden">
                    {/* Dog image */}
                    <img 
                        src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                        alt={dog.name}
                        className="w-full h-80 object-cover" 
                    />
                    {/* Buttons for adopting and viewing details */}
                    <h1 className=" text-black flex justify-center text-xl font-bold"> Dog Name: {dog.name}</h1>
                    {<p className=" text-black flex justify-center text-xl font-bold">Breed Group:  {dog.breed_group}</p> ||dog.breed_group } 

                    <div className="flex justify-center mt-2">
                        
                        <Link
                            to={`/dogs/${dog.name}`}
                        >   
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        >
                             Adopt details
                        </button>
                        </Link> 
                        <button 
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleViewDetails(dog)}
                        >
                            Preview Dog
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
