import {useState, useEffect} from "react";
import YourAdoptedDogs from "./YourAdoptedDogs";
function DogCollection() {
    // Declaring states
    const [dogs, setDogs] = useState([]);
    const [adoptedDogs, setAdoptedDogs] = useState([]);

    // Fetching data from the API
    useEffect(() => {
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => {
                setDogs(data);
                // Troubleshooting
                console.log("Successfully fetched data");
            })
            // Error handling
            .catch(error =>{
                console.log("Error fetching data")
            });
    }, []);

    //Event Listener for the Adopt a dog button
    const HandleAdopt = (event) => {
        event.preventDefault();
        setAdoptedDogs([...adoptedDogs, event.target.id]);
    }

    return (
        <div>
            <div>
                <YourAdoptedDogs adoptedDogs = {adoptedDogs}/>
            </div>
            <h1>Choose your lovely Companion</h1>
            {dogs ? (
                <div className="dog-collection">
                    {dogs.map((dog) => (
                        // Returning a single division for each dog
                        <div className="dog-card" key={dog.id}>
                            <img 
                            src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                            alt={dog.name} />
                            <h3>{dog.name}</h3>
                            <p>{dog.temperament}</p>
                            <button
                            onClick={HandleAdopt}
                            id={dog.id}
                            >Adopt</button>
                        <button>View Details</button>
                        </div>
                    ))}

                </div>
            ) : 
            (<p>Loading...</p>)
        }  
        </div>
    );

}
export default DogCollection;
