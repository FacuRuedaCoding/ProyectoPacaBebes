
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/ItemCount/ItemCount';

function App() {
  

  return (
    <div className="App">
     <NavBar />
     <ItemlistContainer greeting={'ESTOS SON NUESTROS PRODUCTOS'} /> 
     {/* <Counter  /> */}
    </div>
  );
}

export default App;
