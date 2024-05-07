import React, {useState, useEffect} from "react";

function Home() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => setDogs(data))
        .then(console.log("Successfully fetched data"))
        .catch(err => console.log("Error fetching data"))
        

    }, [])
}
