import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="'https://i.pinimg.com/474x/ac/00/5a/ac005a41f3c4941145b6d4c15f5dfd45.jpg'" className="App-logo" alt="The Dog Adoption Centre" />
        <h1>
          Dog adoption centre
        </h1>
        <p>Powered by <a href='https://thedogapi.com'>The Dog API</a></p>
      </header>
      <Home/>
    </div>
  );
}

export default App;
