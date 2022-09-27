
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemlistContainer greeting={'ESTOS SON NUESTROS PRODUCTOS'} /> 
     
    </div>
  );
}

export default App;
