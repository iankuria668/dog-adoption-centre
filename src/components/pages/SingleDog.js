import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../NavBar';

function SingleDog() {
  const [dog, setDog] = useState([]);
  const navigate = useNavigate();
  const { name } = useParams();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    quantity: 1,
    adoptionDate: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onClickMailtoHandler = () => {
    window.location.href = `mailto:Bill.Mageni.Support@royalpets.com?subject=Adoption Request - ${formData.firstName}  ${formData.lastName} `; 
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const adoptionDetails = {
      ...formData,
      dogName: name, 
    };

    console.log('Adoption Details:', adoptionDetails);

    // Clear the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      quantity: 1,
      adoptionDate: '',
    });
  };

  useEffect(() => {
    const fetchDogData = async () => {
      fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('API Response:', data);
          setDog(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };
    fetchDogData();
  }, [name]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      
      <section className="bg-gray-800 text-white min-h-screen flex items-center justify-center">
        {dog.map((dog) => (
          <div key={dog.id} className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-left">
            <article>
              <img
                src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                alt={name}
              />
            </article>
            <article>
              <h1 className="text-3xl font-bold text-white mb-8 lg:text-5xl">{dog.name}</h1>
              {dog.description && <p className="text-white mb-8 text-sm lg:text-base leading-relaxed lg:leading-relaxed">{dog.description}</p>}
              <ul className="text-white">
                <li >
                    <span className='font-bold text-white'>Bred for: </span>{""}
                    {dog.bred_for}
                </li>
                <li><span className='font-bold text-white'>Height:</span>{""} {dog.height.metric} cm</li>
                <li><span className='font-bold text-white'>Weight:</span>{""} {dog.weight.metric} kilograms</li>
                <li><span className='font-bold text-white'>Breed Group:</span>{""} {dog.breed_group}</li>
                <li><span className='font-bold text-white'>Lifespan:</span>{""} {dog.life_span}</li>
                <li><span className='font-bold text-white'>Temperament:</span>{""} {dog.temperament}</li>
              </ul>
              <br></br>
              <br></br>
              <hr></hr>
              <br></br>
              <br></br>
              <h2 className='text-3xl font-bold text-white mb-8 lg:text-5xl'>Adoption Form</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500 text-black font-serif"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <br />
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500 text-black font-serif"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <br />
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500 text-black font-serif"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="1" // Set minimum quantity to 1
                />
                <br />
                <label 
                htmlFor="adoptionDate">Adoption Date:
                </label>
<input
  type="date"
  id="adoptionDate"
  name="adoptionDate"
  className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500 text-black font-serif"
  value={formData.adoptionDate}
  onChange={handleChange}
/>
<br />


{/* Conditonally render the adoption details  ONLY IF our first and last name are present*/}
{formData.firstName && formData.lastName && (
  <div className="bg-gray-200 p-4 rounded shadow-md mt-8">
    <h2 className=" text-3xl font-bold text-black mb-5 lg:text-5xl">Adoption Details</h2>
    <hr className='h-px my-3 bg-gray-200 border-0 mt-3 dark:bg-gray-700'></hr>
    <p className="text-xl text-zinc-950">First Name: {formData.firstName}</p>
    <p className="text-xl text-zinc-950">Last Name: {formData.lastName}</p>
    <p className="text-xl text-zinc-950">Quantity: {formData.quantity}</p>
    <p className="text-xl text-zinc-950">Adoption Date: {formData.adoptionDate}</p>
    <p className="text-xl text-zinc-950">Dog Name: {name}</p>
    <div className="flex justify-end mt-4">
      <button
        className="bg-green-500 hover:bg-blue-300 hover:text-black text-white font-bold py-2 px-4 rounded mr-2"
        onClick={onClickMailtoHandler}
      >
        Complete Adoption
      </button>
      <button className="bg-red-500 hover:bg-blue-300 hover:text-black text-white font-bold py-2 px-4 rounded">
        Delete Adoption
      </button>
    </div>
  </div>
)}

</form> 
<button className="bg-gray-500 hover:bg-blue-300 hover:text-black text-white font-bold py-2 px-4 rounded mt-4" onClick={() => navigate("/")}> Back to Home</button>
 </article>

          </div>
        ))}
      </section>
    </>
  );
}

export default SingleDog;
                