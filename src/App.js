
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [page, setPage ] = useState('list')

  return (
    <div className="App">
  
     {/* { page === 'list' && <ItemlistContainer greeting={'ESTOS SON NUESTROS PRODUCTOS'} /> }
     {page === 'detail' && <ItemDetailContainer />} */}
     <BrowserRouter>
        <NavBar />
        <Routes>
         <Route path='/' element={<ItemlistContainer greeting=  {'ESTOS SON NUESTROS PRODUCTOS'} />} />
         <Route path='/category/:categoryId' element={<ItemlistContainer />}/>
         <Route path='/detail/:productid' element={<ItemDetailContainer />} /> 
        </Routes>
     </BrowserRouter>
     
     {/* <Counter  /> */}


    </div>
  );
}

export default App;
