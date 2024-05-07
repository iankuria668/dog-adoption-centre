import DogCollection from "./DogCollection";
import DogSearchForm from "./DogSearchForm";
import NavBar from "./NavBar";

function Home(){
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <DogSearchForm />
            <DogCollection/>
            
        </div>
    )
}
export default Home;