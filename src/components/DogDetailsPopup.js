// DogDetailsPopup.js
import React from 'react';
import { Link } from 'react-router-dom';

function DogDetailsPopup({ dog, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-gray-800 text-white rounded-md p-2 max-w-lg relative overflow-auto">
                <button className="absolute top-2 right-2 text-gray-300" onClick={onClose}>
                    <svg className="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <h2 className="text-m font-semibold text-gray-300 mb-1">{dog.name}</h2>
                <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={dog.name} className="w-full mb-1 rounded" />
                <div className="text-m text-gray-300 mb-1">
                    <p><strong>Breed group:</strong> {dog.breed_group}</p>
                    <p><strong>Breed origin:</strong> {dog.origin}</p>
                    <p><strong>Breed life span:</strong> {dog.life_span}</p>
                    <p><strong>Breed temperament:</strong> {dog.temperament}</p>
                    <Link to={`/dogs/${dog.name}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded ">
                        View Details
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default DogDetailsPopup;
