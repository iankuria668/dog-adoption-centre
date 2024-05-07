import {useState, useEffect} from "react";
import YourAdoptedDogs from "./YourAdoptedDogs";
function DogCollection() {
    // Declacing states
    const [dogs, setDogs] = useState([]);
    const [adopteddogs, setAdoptedDogs] = useState([]);

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
        setAdoptedDogs([...adopteddogs, event.target.id]);
    }

    return (
        <div>
            <h1>Choose your lovely Companion</h1>
            {dogs ? (
                <div className="dog-collection">
                    {dogs.map((dog) => (
                        // Returning a single division for each dog
                        <div className="dog-card" key={dog.id}>
                            <img src={dog.image.url} alt={dog.name} />
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
