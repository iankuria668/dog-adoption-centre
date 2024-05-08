// DogDetailsPopup.js

import React from 'react';
import { Link } from 'react-router-dom';

function DogDetailsPopup({ dog, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md relative">
                <button className="absolute top-4 right-4 text-gray-700" onClick={onClose}>
                    <svg className="bg-red-700 cw-6 h-6 stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{dog.name}</h2>
                <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt='{dog.name}' className="w-full mb-4" />
                <p className="text-gray-700 mb-2"><strong>Breed ID:</strong> {dog.id}</p>
                <p className="text-gray-700 mb-2"><strong>Breed reference ID:</strong> {dog.reference_image_id}</p>
                <p className="text-gray-700 mb-2"><strong>Breed group:</strong> {dog.breed_group}</p>
                <p className="text-gray-700 mb-2"><strong>Breed origin:</strong> {dog.origin}</p>
                <p className="text-gray-700 mb-2"><strong>Breed life span:</strong> {dog.life_span}</p>
                <p className="text-gray-700 mb-2"><strong>Breed temperament:</strong> {dog.temperament}</p>
                <Link
                            to={`/dogs/${dog.name}`}
                        >   
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        >
                             Adopt details
                        </button>
                        </Link> 
            </div>
        </div>
    );
}

export default DogDetailsPopup;
