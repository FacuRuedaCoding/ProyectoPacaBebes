import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>BIENVENIDOS</h1>
       <button>click me!</button>
       <input class="text" placeholder='Escribime algo'></input>
      </header>
    </div>
  );
}

export default App;
