// DogDetailsPopup.js

import React from 'react';

function DogDetailsPopup({ dog, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-8 rounded-md">
                <h2 className="text-lg font-bold mb-4">{dog.name}</h2>
                <p className="text-gray-700 mb-2">Breed Group: {dog.breed_group}</p>
                <p className="text-gray-700 mb-2">Origin: {dog.origin}</p>
                <p className="text-gray-700 mb-2">Life Span: {dog.life_span}</p>
                <p className="text-gray-700">Temperament: {dog.temperament}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default DogDetailsPopup;
