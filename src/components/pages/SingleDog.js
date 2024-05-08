import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../NavBar';

function SingleDog() {
    const [dog, setDog]=useState ([])
    const navigate = useNavigate(); 
    const {name} = useParams()
    const onClickMailtoHandler = () => {
        window.location.href = "mailto:Bill.Mageni.Support@royalpets.com"; // Replace with your actual email address
      };
    
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
      <><header>
        <NavBar/>
      </header>
      <section className="max-w-5xl mx-auto flex items-centre justify-centre h-screen">
        {dog.map((dog) =>(
            <div key={dog.id} className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center" >
                <article>
                    <img 
                    src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                    alt={name}
                    />
                </article>
                <article>
                    <h1 className="txt-3xl font-bold text-black mb-8 lg:text-5xl">{dog.name}</h1>
                    {dog.description || <p className="text-slate-400 mb-8 text-sm lg:text-base leading-relaxed lg:leading-relaxed">{dog.description}</p>} {/*only render the description if it is there*/}
                    <ul className="">
                        <li> Bred for: {dog.bred_for}</li>
                        <li>Height:{dog.height.metric} cm</li>
                        <li>Weight: {dog.weight.metric} kilograms</li>
                        <li>Breed Group: {dog.breed_group}</li>
                        <li>Lifespan: {dog.life_span}</li>
                        <li>Temperament: {dog.temperament} </li>
                    </ul>
                    <button
                      className="bg-gray-500 hover:bg-blue-300 hover:text-black text-white font-bold py-2 px-4 rounded mt-4"
                      onClick={() => navigate("/")} > Back to Home
                    </button>
                      <br></br>
                    <button className="bg-green-500 hover:bg-blue-300 hover:text-black text-white font-bold py-2 px-4 rounded mt-4" onClick={onClickMailtoHandler}> Adopt</button>
                </article>
                
            </div>
        ))}
      
      </section>
      </>
    )
  }

export default  SingleDog
