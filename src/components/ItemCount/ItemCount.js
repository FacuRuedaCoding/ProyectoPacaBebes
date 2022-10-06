import { useState } from 'react'
import './ItemCount.css'

const Counter = () =>{
    const initial = 0
    const stock = 10
    const [count, setCount] = useState(initial) 
    
    const increment = () =>{
        if(count <= stock){
            setCount(count + 1)
            console.log('aumento')
        }
        
    }

    const decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    
    const handleOnAdd = () =>{
        
     console.log(`Agregaste al carrito` )
    
    }

    return(
        <div className='divBotones'>
            <div className='divCount'>
                <h1>{count}</h1>
            </div>
            <div className='divButton'>
            <button className='btn'onClick={increment}>+</button>
            <button className='btn' onClick={decrement}>-</button>
            </div>
            
            <button className='AddCarrito' onClick={handleOnAdd}>Agregar al carrito</button>
        </div>
    )

    

}

export default Counter
