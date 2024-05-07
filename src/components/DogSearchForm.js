import React, { useState } from 'react';

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


export default DogSearchForm;
