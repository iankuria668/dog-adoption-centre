import React, { useEffect, useState } from 'react'
import { useNavigate,Link, useParams } from 'react-router-dom';


function SingleDog() {
    const [dog, setDog]=useState (null)
    const navigate = useNavigate(); 
    const {name} = useParams()
    
    useEffect(() =>{ const fetchDogData = async() => {
     fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
        .then(res => res.json())
        .then(data => {
            console.log('API Response:', data); 
            setDog(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }
        fetchDogData()   
    } , [name]);
    return (
      <>
      <section className="max-w-5xl mx-auto">
        <h1> {name}</h1>
      <button
        className="bg-gray-500 hover:bg-blue-300 hover:text-black text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => navigate("/")} > Back to Home
      </button>
      </section>
      </>
    )
  }

export default  SingleDog
