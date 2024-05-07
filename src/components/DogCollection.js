import {useState, useEffect} from "react";
import
function DogCollection() {
    const [dogs, setDogs] = useState([]);
    const [adopteddogs, setAdoptedDogs] = useState([]);

    useEffect(() => {
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => {
                setDogs(data);
                console.log("Successfully fetched data");
            })
            .catch(error =>{
                console.log("Error fetching data")
            });
    }, []);

    return (
        <div>
            <h1>Choose your lovely Companion</h1>
            {dogs ? (
                <div className="dog-collection">
                    {dogs.map((dog) => (
                        <div className="dog-card" key={dog.id}>
                            <img src={dog.image.url} alt={dog.name} />
                            <h3>{dog.name}</h3>
                            <p>{dog.temperament}</p>
                            <button
                            onClick={ }
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
