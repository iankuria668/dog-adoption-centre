import DogCollection from "./DogCollection";
import DogSearchForm from "./DogSearchForm";
function Home(){
    return (
        <div>
            <DogSearchForm />
            <DogCollection/>
        </div>
    )
}
export default Home;